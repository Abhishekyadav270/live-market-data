import React, { useEffect, useRef } from "react";

export default function TradingViewWidget({ symbol }) {
  const container = useRef(null);

  useEffect(() => {
    if (container.current.children.length === 0) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        "symbols": [[symbol]],
        "chartOnly": false,
        "width": "100%",
        "height": 400,
        "locale": "en",
        "colorTheme": "light",
        "autosize": true,
      });
      container.current.appendChild(script);
    }
  }, [symbol]);

  return <div ref={container} className="tradingview-widget-container" />;
}