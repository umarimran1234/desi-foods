"use client";

import { useEffect, useState } from "react";
import { formatPrice, menu, waLink } from "@/lib/data";
import { AddButton } from "./Cart";
import { Icon } from "./Icons";

/** Image with a branded gradient fallback when the photo can't load. */
export function Photo({ src, alt, label, className = "", children }: {
  src: string;
  alt: string;
  label: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`ph ${className}${failed ? " fail" : ""}`} data-label={label}>
      {children}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
    </div>
  );
}

/** Fades in `.reveal` elements as they scroll into view. */
export function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}

export function MenuTabs() {
  const cats = Object.keys(menu);
  const [active, setActive] = useState(cats[0]);
  return (
    <>
      <div className="tabs" role="tablist">
        {cats.map((c) => (
          <button key={c} role="tab" aria-selected={c === active} className={`tab${c === active ? " active" : ""}`} onClick={() => setActive(c)}>
            {c}
          </button>
        ))}
      </div>
      <div className="menu-list">
        {menu[active].map((m) => (
          <div className="mi" key={m.name}>
            <div>
              <h4>{m.name}</h4>
              {m.desc && <p>{m.desc}</p>}
            </div>
            <span className="dots" />
            <span className="p">{formatPrice(m.price)}</span>
            <AddButton name={m.name} price={m.price} className="plus">+</AddButton>
          </div>
        ))}
      </div>
    </>
  );
}

export function BookingForm() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const when = new Date(String(f.get("when"))).toLocaleString("en-PK", { dateStyle: "medium", timeStyle: "short" });
    const msg = `Assalam-o-Alaikum! Table booking request:\nName: ${f.get("name")}\nGuests: ${f.get("guests")}\nWhen: ${when}`;
    window.open(waLink(msg), "_blank", "noopener");
  };
  return (
    <form className="book reveal" onSubmit={onSubmit}>
      <h3>Reserve a table / pre-order a platter</h3>
      <label>
        Name
        <input name="name" required placeholder="Your name" />
      </label>
      <label>
        Guests
        <select name="guests" defaultValue="6">
          {["2", "4", "6", "8", "10", "12+"].map((g) => (
            <option key={g}>{g}</option>
          ))}
        </select>
      </label>
      <label>
        Date &amp; time
        <input name="when" type="datetime-local" required />
      </label>
      <button className="btn btn-primary" type="submit">
        <Icon name="wa" /> Send Booking
      </button>
    </form>
  );
}
