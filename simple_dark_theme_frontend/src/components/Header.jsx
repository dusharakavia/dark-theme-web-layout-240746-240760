import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="headerInner">
        <div className="brand">
          <div className="brandTitle">
            <span style={{ color: "var(--color-primary)" }}>Red</span>{" "}
            <span>&</span> <span>White</span>
          </div>
          <div className="brandSubtitle">Header / Card / Buttons themed</div>
        </div>

        <nav style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <a href="#" aria-label="Docs link">
            Docs
          </a>
          <a href="#" aria-label="About link">
            About
          </a>
        </nav>
      </div>
    </header>
  );
}
