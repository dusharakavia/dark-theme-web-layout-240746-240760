import React from "react";

/**
 * Reusable button component.
 * Variants: "primary" | "secondary"
 */
export default function Button({ variant = "primary", children, ...props }) {
  const variantClass = variant === "secondary" ? "btnSecondary" : "btnPrimary";
  return (
    <button className={`btn ${variantClass}`} type="button" {...props}>
      {children}
    </button>
  );
}
