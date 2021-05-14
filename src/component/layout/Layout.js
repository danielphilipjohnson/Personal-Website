import React from "react";
import Nav from "../nav/Nav";
import Footer from "./footer";

export default function Layout({ location, children }) {
  return (
    <>
      <Nav location={location} />
      <main>{children}</main>
      <Footer location={location} />
    </>
  );
}
