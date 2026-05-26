import React from "react";

export default function SectionTag({ children, center }) {
  return <div className={`section-tag${center ? " center" : ""}`}>{children}</div>;
}