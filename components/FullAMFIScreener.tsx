// components/FullAMFIScreener.tsx
"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { parseFullAMFIData, AMFIFund } from "@/lib/amfi-parser";
import { trackScreenerUse, trackScreenerResultClick } from "@/lib/analytics";

type SortKey = "scheme" | "category" | "nav" | "r1m" | "r1y" | "r3y" | "r5y";
type SortDirection = "asc" | "desc";

export default function FullAMFIScreener() {
    const [allFunds, setAllFunds] = useState<AMFIFund[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [search, setSearch] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [selectedAMC, setSelectedAMC] = useState<string>("All");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [sortConfig, setSortConfig] = useState<{ key: SortKey; direction: SortDirection } | null>(null);
    const PAGE_SIZE = 25;

    const loadData = async (forceRefresh = false) => {
        setLoading(true);

        const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
        const cacheKey = `clean_amfi_data_v3_${today}`;

        if (!forceRefresh) {
            try {
                const cached = localStorage.getItem(cacheKey);
                if (cached) {
                    setAllFunds(JSON.parse(cached));
                    setLoading(false);
                    return;
                }
            } catch {
                // Ignore localStorage read errors
            }
        }

        try {
            const data = await parseFullAMFIData();
            setAllFunds(data);

            // Clear all older AMFI caches to save space
            try {
                const keysToRemove: string[] = [];
                for (let i = 0; i < localStorage.length; i++) {
                    const key = localStorage.key(i);
                    if (key && key.startsWith("clean_amfi_data_") && key !== cacheKey) {
                        keysToRemove.push(key);
                    }
                }
                keysToRemove.forEach((k) => localStorage.removeItem(k));

                // Save today's fresh data
                localStorage.setItem(cacheKey, JSON.stringify(data));
            } catch {
                // If storage quota exceeded, clear all old AMFI caches and retry once
                try {
                    for (let i = localStorage.length - 1; i >= 0; i--) {
                        const key = localStorage.key(i);
                        if (key && key.startsWith("clean_amfi_data_")) {
                            localStorage.removeItem(key);
                        }
                    }
                    localStorage.setItem(cacheKey, JSON.stringify(data));
                } catch {
                    // Gracefully continue with in-memory state without crashing
                    console.warn("localStorage quota exceeded; using in-memory AMFI data.");
                }
            }
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

    // Filter Unique AMCs for Dropdown
    const amcs = useMemo(() => {
        const amcSet = new Set(allFunds.map((f) => f.amc));
        return Array.from(amcSet).filter(Boolean);
    }, [allFunds]);

    const handleSort = (key: SortKey) => {
        const isNumeric = key !== "scheme" && key !== "category";
        const defaultDirection: SortDirection = isNumeric ? "desc" : "asc";
        let direction: SortDirection = defaultDirection;

        if (sortConfig && sortConfig.key === key) {
            direction = sortConfig.direction === "asc" ? "desc" : "asc";
        }
        setSortConfig({ key, direction });
    };

    // Client-side multi-facet filter and sort
    const filteredAndSortedFunds = useMemo(() => {
        let result = allFunds.filter((fund) => {
            const nameLower = fund.scheme.toLowerCase();

            // AMC Filter
            if (selectedAMC !== "All" && fund.amc !== selectedAMC) return false;

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
    }, [allFunds, search, selectedCategory, selectedAMC, sortConfig]);

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
                        Showing <span className="font-semibold text-blue-600">{filteredAndSortedFunds.length.toLocaleString()}</span> active schemes parsed directly from AMFI.
                    </p>
                </div>
            </div>

            {/* Filter Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50 p-4 rounded-xl border border-gray-200">
                <input
                    type="text"
                    placeholder="Search by fund name or code..."
                    value={search}
                    onChange={(e) => {
                        const val = e.target.value;
                        setSearch(val);
                        setCurrentPage(1);
                        if (val.trim().length >= 3) {
                            trackScreenerUse({ filter_type: "search", filter_value: val.trim(), fund_category: selectedCategory });
                        }
                    }}
                    className="sm:col-span-2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-sm"
                />

                <select
                    value={selectedCategory}
                    onChange={(e) => {
                        const val = e.target.value;
                        setSelectedCategory(val);
                        setCurrentPage(1);
                        trackScreenerUse({ filter_type: "category", filter_value: val, fund_category: val });
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
                    value={selectedAMC}
                    onChange={(e) => {
                        const val = e.target.value;
                        setSelectedAMC(val);
                        setCurrentPage(1);
                        trackScreenerUse({ filter_type: "amc", filter_value: val, fund_category: selectedCategory });
                    }}
                    className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-sm"
                >
                    <option value="All">All AMCs ({amcs.length})</option>
                    {amcs.map((amc) => (
                        <option key={amc} value={amc}>
                            {amc}
                        </option>
                    ))}
                </select>

                {/* Mobile Quick-Sort Pill Bar */}
                <div className="sm:col-span-2 md:hidden pt-1">
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                        <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap mr-1">
                            Sort by:
                        </span>
                        {[
                            { key: "nav" as SortKey, label: "NAV" },
                            { key: "r1m" as SortKey, label: "1M" },
                            { key: "r1y" as SortKey, label: "1Y" },
                            { key: "r3y" as SortKey, label: "3Y" },
                            { key: "r5y" as SortKey, label: "5Y" },
                        ].map((item) => {
                            const isActive = sortConfig?.key === item.key;
                            return (
                                <button
                                    key={item.key}
                                    type="button"
                                    onClick={() => handleSort(item.key)}
                                    className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 transition-all whitespace-nowrap active:scale-95 ${isActive
                                        ? "bg-blue-600 text-white shadow-xs"
                                        : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                                        }`}
                                >
                                    <span>{item.label}</span>
                                    {isActive ? (
                                        <span className="font-bold text-[11px]">{sortConfig.direction === "asc" ? "↑" : "↓"}</span>
                                    ) : (
                                        <span className="text-gray-400 text-[10px]">↕</span>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Table / Cards Results */}
            {loading ? (
                <div className="text-center py-20 text-gray-500">Loading active AMFI data...</div>
            ) : (
                <div className="space-y-4">
                    <div className="text-xs text-gray-500 text-right pb-2 border-b border-gray-200">
                        Last update Date: <b>{new Date(Date.now() - 86400000).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</b>
                    </div>

                    {/* Mobile Card List View (Visible on mobile/tablet) */}
                    <div className="space-y-3 md:hidden">
                        {paginatedFunds.map((fund) => (
                            <div
                                key={fund.code}
                                onClick={() => trackScreenerResultClick({ scheme_name: fund.scheme, fund_category: fund.category, amc: fund.amc })}
                                className="bg-white border border-gray-200 rounded-xl p-4 shadow-xs space-y-3 hover:border-blue-400 active:bg-gray-50 transition-all cursor-pointer"
                            >
                                <div>
                                    <h3 className="font-semibold text-gray-900 text-sm leading-snug">
                                        {fund.scheme}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                                        <span className="text-[11px] font-medium bg-gray-100 text-gray-700 px-2 py-0.5 rounded border border-gray-200">
                                            {fund.category}
                                        </span>
                                        <span className="text-xs text-gray-500 font-normal">
                                            {fund.amc}
                                        </span>
                                    </div>
                                </div>

                                {/* 5 Key Metrics Grid (NAV, 1M, 1Y, 3Y, 5Y) - Directly Tap to Sort */}
                                <div className="grid grid-cols-5 gap-1 pt-2.5 border-t border-gray-100 text-center">
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleSort("nav");
                                        }}
                                        className={`p-1 rounded text-left transition-colors ${sortConfig?.key === "nav" ? "bg-blue-50 ring-1 ring-blue-300" : "hover:bg-gray-50"}`}
                                    >
                                        <span className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                                            NAV {sortConfig?.key === "nav" && (sortConfig.direction === "asc" ? "↑" : "↓")}
                                        </span>
                                        <span className="text-xs font-bold text-gray-900 block truncate">₹{fund.nav?.toFixed(1)}</span>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleSort("r1m");
                                        }}
                                        className={`p-1 rounded transition-colors ${sortConfig?.key === "r1m" ? "bg-blue-50 ring-1 ring-blue-300" : "hover:bg-gray-50"}`}
                                    >
                                        <span className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                                            1M {sortConfig?.key === "r1m" && (sortConfig.direction === "asc" ? "↑" : "↓")}
                                        </span>
                                        <span className={`text-xs font-semibold block ${fund.r1m !== null && fund.r1m > 0 ? 'text-green-600' : fund.r1m !== null && fund.r1m < 0 ? 'text-red-600' : 'text-gray-400'}`}>
                                            {fund.r1m !== null ? `${fund.r1m}%` : '-'}
                                        </span>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleSort("r1y");
                                        }}
                                        className={`p-1 rounded transition-colors ${sortConfig?.key === "r1y" ? "bg-blue-50 ring-1 ring-blue-300" : "hover:bg-gray-50"}`}
                                    >
                                        <span className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                                            1Y {sortConfig?.key === "r1y" && (sortConfig.direction === "asc" ? "↑" : "↓")}
                                        </span>
                                        <span className={`text-xs font-semibold block ${fund.r1y !== null && fund.r1y > 0 ? 'text-green-600' : fund.r1y !== null && fund.r1y < 0 ? 'text-red-600' : 'text-gray-400'}`}>
                                            {fund.r1y !== null ? `${fund.r1y}%` : '-'}
                                        </span>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleSort("r3y");
                                        }}
                                        className={`p-1 rounded transition-colors ${sortConfig?.key === "r3y" ? "bg-blue-50 ring-1 ring-blue-300" : "hover:bg-gray-50"}`}
                                    >
                                        <span className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                                            3Y {sortConfig?.key === "r3y" && (sortConfig.direction === "asc" ? "↑" : "↓")}
                                        </span>
                                        <span className={`text-xs font-semibold block ${fund.r3y !== null && fund.r3y > 0 ? 'text-green-600' : fund.r3y !== null && fund.r3y < 0 ? 'text-red-600' : 'text-gray-400'}`}>
                                            {fund.r3y !== null ? `${fund.r3y}%` : '-'}
                                        </span>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleSort("r5y");
                                        }}
                                        className={`p-1 rounded transition-colors ${sortConfig?.key === "r5y" ? "bg-blue-50 ring-1 ring-blue-300" : "hover:bg-gray-50"}`}
                                    >
                                        <span className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                                            5Y {sortConfig?.key === "r5y" && (sortConfig.direction === "asc" ? "↑" : "↓")}
                                        </span>
                                        <span className={`text-xs font-semibold block ${fund.r5y !== null && fund.r5y > 0 ? 'text-green-600' : fund.r5y !== null && fund.r5y < 0 ? 'text-red-600' : 'text-gray-400'}`}>
                                            {fund.r5y !== null ? `${fund.r5y}%` : '-'}
                                        </span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop Table View (Hidden on mobile) */}
                    <div className="hidden md:block overflow-x-auto border rounded-xl bg-white shadow-sm">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-gray-100 text-gray-700 text-xs uppercase tracking-wider border-b">
                                <tr>
                                    <th className="p-4 cursor-pointer hover:bg-gray-200 select-none group" onClick={() => handleSort("scheme")}>
                                        Scheme Name <span className="text-gray-400 group-hover:text-gray-700">{renderSortArrow("scheme") || <span className="invisible">↑</span>}</span>
                                    </th>
                                    <th className="p-4 cursor-pointer hover:bg-gray-200 select-none group" onClick={() => handleSort("category")}>
                                        Category <span className="text-gray-400 group-hover:text-gray-700">{renderSortArrow("category") || <span className="invisible">↑</span>}</span>
                                    </th>
                                    <th className="p-4 cursor-pointer hover:bg-gray-200 select-none group" onClick={() => handleSort("nav")}>
                                        NAV (₹) <span className="text-gray-400 group-hover:text-gray-700">{renderSortArrow("nav") || <span className="invisible">↑</span>}</span>
                                    </th>
                                    <th className="p-4 cursor-pointer hover:bg-gray-200 select-none group whitespace-nowrap" onClick={() => handleSort("r1m")}>
                                        1M (%) <span className="text-gray-400 group-hover:text-gray-700">{renderSortArrow("r1m") || <span className="invisible">↑</span>}</span>
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
                                </tr>
                            </thead>
                            <tbody className="divide-y text-sm">
                                {paginatedFunds.map((fund) => (
                                    <tr
                                        key={fund.code}
                                        onClick={() => trackScreenerResultClick({ scheme_name: fund.scheme, fund_category: fund.category, amc: fund.amc })}
                                        className="hover:bg-gray-50 transition-colors cursor-pointer"
                                    >
                                        <td className="p-4 font-semibold text-gray-900">
                                            {fund.scheme}
                                            <div className="text-xs font-normal text-gray-400">{fund.amc}</div>
                                        </td>
                                        <td className="p-4 text-xs ">
                                            <span className=" text-gray-700">{fund.category}</span>
                                        </td>
                                        <td className="p-4 font-bold text-gray-900">₹{fund.nav?.toFixed(2)}</td>
                                        <td className={`p-4 font-medium text-xs ${fund.r1m !== null && fund.r1m > 0 ? 'text-green-600' : fund.r1m !== null && fund.r1m < 0 ? 'text-red-600' : 'text-gray-400'}`}>
                                            {fund.r1m !== null ? `${fund.r1m}%` : '-'}
                                        </td>
                                        <td className={`p-4 font-medium text-xs ${fund.r1y !== null && fund.r1y > 0 ? 'text-green-600' : fund.r1y !== null && fund.r1y < 0 ? 'text-red-600' : 'text-gray-400'}`}>
                                            {fund.r1y !== null ? `${fund.r1y}%` : '-'}
                                        </td>
                                        <td className={`p-4 font-medium text-xs ${fund.r3y !== null && fund.r3y > 0 ? 'text-green-600' : fund.r3y !== null && fund.r3y < 0 ? 'text-red-600' : 'text-gray-400'}`}>
                                            {fund.r3y !== null ? `${fund.r3y}%` : '-'}
                                        </td>
                                        <td className={`p-4 font-medium text-xs ${fund.r5y !== null && fund.r5y > 0 ? 'text-green-600' : fund.r5y !== null && fund.r5y < 0 ? 'text-red-600' : 'text-gray-400'}`}>
                                            {fund.r5y !== null ? `${fund.r5y}%` : '-'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
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