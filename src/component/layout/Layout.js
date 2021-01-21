import React from "react";
import Nav from "../nav/Nav";
import Footer from "./footer";

export default function Layout({ location, children }) {
  console.log("layout running");
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer location={location} />
    </>
  );
}
