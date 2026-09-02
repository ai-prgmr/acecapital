import { Metadata } from "next";
import FullAMFIScreener from "@/components/FullAMFIScreener";
export const metadata: Metadata = {
  title: "Mutual Fund Screener | ACE Capital",
  description: "Live NAV data and screening tools for mutual funds directly from AMFI.",
}

export default function ScreenerPage() {
  return (
    <main className="min-h-screen bg-background py-12">
      <div className="ace-container">
        <FullAMFIScreener />
      </div>
    </main>
  )
}
