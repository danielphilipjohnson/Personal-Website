import React from "react";
import Nav from "../nav/Nav";
export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
}
