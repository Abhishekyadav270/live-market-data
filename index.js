import React from "react";
import TradingViewWidget from "../components/TradingViewWidget";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Live Market Data Website</h1>
      <TradingViewWidget symbol="NSE:NIFTY50" />
    </div>
  );
}