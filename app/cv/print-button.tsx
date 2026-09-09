"use client";

export default function PrintButton() {
  return (
    <div className="print-bar">
      <a href="/cv.pdf" download="Esther-Ingabire-CV.pdf">Download PDF ↓</a>
      <button onClick={() => window.print()}>Save as PDF ↓</button>
    </div>
  );
}
