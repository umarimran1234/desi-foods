"use client";

import { useState } from "react";
import { site } from "@/lib/data";
import { Icon } from "./Icons";

const nav = [
  ["About", "#about"],
  ["Specials", "#specials"],
  ["Menu", "#menu"],
  ["Platters", "#deals"],
  ["Reviews", "#reviews"],
  ["Contact", "#contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <nav className="wrap nav">
        <a href="#home" className="brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.jpg" alt="Desi Foods logo" />
          <span>
            <b>Desi Foods</b>
            <small>FB AREA · KARACHI</small>
          </span>
        </a>
        <div className={`links${open ? " open" : ""}`} onClick={() => setOpen(false)}>
          {nav.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
          <a href={`tel:${site.phones[0].tel}`} className="btn btn-primary">
            <Icon name="phone" /> {site.phones[0].label}
          </a>
        </div>
        <button className="burger" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open}>
          <svg viewBox="0 0 24 24"><path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" /></svg>
        </button>
      </nav>
    </header>
  );
}
