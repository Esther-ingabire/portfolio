"use client";

export default function PrintButton() {
  return (
    <div className="print-bar">
      <button onClick={() => window.print()}>Save as PDF ↓</button>
    </div>
  );
}
