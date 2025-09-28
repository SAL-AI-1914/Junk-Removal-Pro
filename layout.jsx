import React from "react";
import Header from "./components/layout/Header";
import FooterSection from "./components/landing/FooterSection";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <FooterSection />
    </div>
  );
}