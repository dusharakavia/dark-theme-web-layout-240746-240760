import React from "react";

/**
 * Presentational card component.
 * Uses theme variables via global CSS classes (see styles.css).
 */
export default function Card({ title, right = null, children }) {
  return (
    <section className="card">
      <div className="cardHeader">
        <h2 className="cardTitle">{title}</h2>
        {right}
      </div>
      <div>{children}</div>
    </section>
  );
}
