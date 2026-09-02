// components/FullAMFIScreener.tsx
"use client";

import React, { useState, useEffect, useMemo } from "react";
import { parseFullAMFIData, AMFIFund } from "@/lib/amfi-parser";

type SortKey = "scheme" | "category" | "nav" | "r1y" | "r3y" | "r5y";
type SortDirection = "asc" | "desc";

export default function FullAMFIScreener() {
    const [allFunds, setAllFunds] = useState<AMFIFund[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [search, setSearch] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [planType, setPlanType] = useState<"Direct" | "Regular" | "All">("Direct");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [sortConfig, setSortConfig] = useState<{ key: SortKey; direction: SortDirection } | null>(null);
    const PAGE_SIZE = 25;

    const loadData = async (forceRefresh = false) => {
        setLoading(true);

        if (!forceRefresh) {
            const cached = localStorage.getItem("clean_amfi_data_v2");
            if (cached) {
                setAllFunds(JSON.parse(cached));
                setLoading(false);
                return;
            }
        }

        try {
            const data = await parseFullAMFIData();
            setAllFunds(data);
            localStorage.setItem("clean_amfi_data_v2", JSON.stringify(data));
        } catch (err) {
            console.error("Failed parsing AMFI data", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    // Filter Unique Categories for Dropdown
    const categories = useMemo(() => {
        const cats = new Set(allFunds.map((f) => f.category));
        return Array.from(cats).filter(Boolean);
    }, [allFunds]);

    const handleSort = (key: SortKey) => {
        let direction: SortDirection = "asc";
        if (sortConfig && sortConfig.key === key && sortConfig.direction === "asc") {
            direction = "desc";
        }
        setSortConfig({ key, direction });
    };

    // Client-side multi-facet filter and sort
    const filteredAndSortedFunds = useMemo(() => {
        let result = allFunds.filter((fund) => {
            const nameLower = fund.scheme.toLowerCase();

            // Plan Type Filter
            if (planType === "Direct" && !nameLower.includes("direct")) return false;
            if (planType === "Regular" && nameLower.includes("direct")) return false;

            // Category Filter
            if (selectedCategory !== "All" && !fund.category.includes(selectedCategory)) return false;

            // Search Filter
            if (search.trim()) {
                const query = search.toLowerCase();
                return (
                    nameLower.includes(query) ||
                    fund.amc.toLowerCase().includes(query) ||
                    fund.code.toString().includes(query)
                );
            }

            return true;
        });

        if (sortConfig !== null) {
            result.sort((a, b) => {
                const aValue = a[sortConfig.key];
                const bValue = b[sortConfig.key];
                
                // Handle nulls for returns
                if (aValue === null && bValue === null) return 0;
                if (aValue === null) return 1;
                if (bValue === null) return -1;

                if (aValue < bValue) {
                    return sortConfig.direction === "asc" ? -1 : 1;
                }
                if (aValue > bValue) {
                    return sortConfig.direction === "asc" ? 1 : -1;
                }
                return 0;
            });
        }

        return result;
    }, [allFunds, search, selectedCategory, planType, sortConfig]);

    // Pagination Slice
    const paginatedFunds = useMemo(() => {
        const start = (currentPage - 1) * PAGE_SIZE;
        return filteredAndSortedFunds.slice(start, start + PAGE_SIZE);
    }, [filteredAndSortedFunds, currentPage]);

    const totalPages = Math.ceil(filteredAndSortedFunds.length / PAGE_SIZE);

    // Render helper for sort arrows
    const renderSortArrow = (key: SortKey) => {
        if (sortConfig?.key !== key) return null;
        return <span className="ml-1 inline-block">{sortConfig.direction === "asc" ? "↑" : "↓"}</span>;
    };

    return (
        <div className="w-full max-w-7xl mx-auto p-6 space-y-6 font-sans">
            {/* Header Bar */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Mutual Fund Screener</h1>
                    <p className="text-sm text-gray-500">
                        Showing <span className="font-semibold text-blue-600">{allFunds.length.toLocaleString()}</span> active schemes parsed directly from AMFI.
                    </p>
                </div>
                <button
                    onClick={() => loadData(true)}
                    disabled={loading}
                    className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors flex items-center gap-2 text-sm"
                >
                    {loading ? "Syncing..." : "🔄 Refresh Live AMFI Data"}
                </button>
            </div>

            {/* Filter Controls */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-gray-50 p-4 rounded-xl border border-gray-200">
                <input
                    type="text"
                    placeholder="Search by fund name or code..."
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setCurrentPage(1);
                    }}
                    className="md:col-span-2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-sm"
                />

                <select
                    value={selectedCategory}
                    onChange={(e) => {
                        setSelectedCategory(e.target.value);
                        setCurrentPage(1);
                    }}
                    className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-sm"
                >
                    <option value="All">All Categories ({categories.length})</option>
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>

                <select
                    value={planType}
                    onChange={(e) => {
                        setPlanType(e.target.value as "Direct" | "Regular" | "All");
                        setCurrentPage(1);
                    }}
                    className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-sm"
                >
                    <option value="Direct">Direct Plans Only</option>
                    <option value="Regular">Regular Plans Only</option>
                    <option value="All">All Plans</option>
                </select>
            </div>

            {/* Table Results */}
            {loading ? (
                <div className="text-center py-20 text-gray-500">Loading active AMFI data...</div>
            ) : (
                <div className="overflow-x-auto border rounded-xl bg-white shadow-sm">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-100 text-gray-700 text-xs uppercase tracking-wider border-b">
                            <tr>
                                <th className="p-4">Scheme Code</th>
                                <th className="p-4 cursor-pointer hover:bg-gray-200 select-none group" onClick={() => handleSort("scheme")}>
                                    Scheme Name <span className="text-gray-400 group-hover:text-gray-700">{renderSortArrow("scheme") || <span className="invisible">↑</span>}</span>
                                </th>
                                <th className="p-4 cursor-pointer hover:bg-gray-200 select-none group" onClick={() => handleSort("category")}>
                                    Category <span className="text-gray-400 group-hover:text-gray-700">{renderSortArrow("category") || <span className="invisible">↑</span>}</span>
                                </th>
                                <th className="p-4 cursor-pointer hover:bg-gray-200 select-none group" onClick={() => handleSort("nav")}>
                                    NAV (₹) <span className="text-gray-400 group-hover:text-gray-700">{renderSortArrow("nav") || <span className="invisible">↑</span>}</span>
                                </th>
                                <th className="p-4 cursor-pointer hover:bg-gray-200 select-none group whitespace-nowrap" onClick={() => handleSort("r1y")}>
                                    1Y (%) <span className="text-gray-400 group-hover:text-gray-700">{renderSortArrow("r1y") || <span className="invisible">↑</span>}</span>
                                </th>
                                <th className="p-4 cursor-pointer hover:bg-gray-200 select-none group whitespace-nowrap" onClick={() => handleSort("r3y")}>
                                    3Y (%) <span className="text-gray-400 group-hover:text-gray-700">{renderSortArrow("r3y") || <span className="invisible">↑</span>}</span>
                                </th>
                                <th className="p-4 cursor-pointer hover:bg-gray-200 select-none group whitespace-nowrap" onClick={() => handleSort("r5y")}>
                                    5Y (%) <span className="text-gray-400 group-hover:text-gray-700">{renderSortArrow("r5y") || <span className="invisible">↑</span>}</span>
                                </th>
                                <th className="p-4">Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y text-sm">
                            {paginatedFunds.map((fund) => (
                                <tr key={fund.code} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-4 font-mono text-xs text-gray-500">{fund.code}</td>
                                    <td className="p-4 font-semibold text-gray-900">
                                        {fund.scheme}
                                        <div className="text-xs font-normal text-gray-400">{fund.amc}</div>
                                    </td>
                                    <td className="p-4 text-xs">
                                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded border">{fund.category}</span>
                                    </td>
                                    <td className="p-4 font-bold text-gray-900">₹{fund.nav?.toFixed(2)}</td>
                                    <td className={`p-4 font-medium text-xs ${fund.r1y !== null && fund.r1y > 0 ? 'text-green-600' : fund.r1y !== null && fund.r1y < 0 ? 'text-red-600' : 'text-gray-400'}`}>
                                        {fund.r1y !== null ? `${fund.r1y}%` : '-'}
                                    </td>
                                    <td className={`p-4 font-medium text-xs ${fund.r3y !== null && fund.r3y > 0 ? 'text-green-600' : fund.r3y !== null && fund.r3y < 0 ? 'text-red-600' : 'text-gray-400'}`}>
                                        {fund.r3y !== null ? `${fund.r3y}%` : '-'}
                                    </td>
                                    <td className={`p-4 font-medium text-xs ${fund.r5y !== null && fund.r5y > 0 ? 'text-green-600' : fund.r5y !== null && fund.r5y < 0 ? 'text-red-600' : 'text-gray-400'}`}>
                                        {fund.r5y !== null ? `${fund.r5y}%` : '-'}
                                    </td>
                                    <td className="p-4 text-xs text-gray-500 whitespace-nowrap">{fund.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex justify-between items-center text-sm pt-2">
                    <button
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        disabled={currentPage === 1 || loading}
                        className="px-4 py-2 border rounded-lg disabled:opacity-40 hover:bg-gray-50 transition-colors"
                    >
                        Previous
                    </button>
                    <span className="text-gray-600">
                        Page {currentPage} of {totalPages} <span className="hidden sm:inline">({filteredAndSortedFunds.length.toLocaleString()} funds)</span>
                    </span>
                    <button
                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages || loading}
                        className="px-4 py-2 border rounded-lg disabled:opacity-40 hover:bg-gray-50 transition-colors"
                    >
                        Next
                    </button>
                </div>
            )}
            
            {!loading && filteredAndSortedFunds.length === 0 && (
                <div className="text-center py-10 text-gray-500">
                    No funds found matching your current filters.
                </div>
            )}
        </div>
    );
}