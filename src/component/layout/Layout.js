import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <h1>Im layout</h1>
      <main style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
        {children}
      </main>
    </>
  );
}
