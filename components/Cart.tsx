"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { formatPrice, waLink } from "@/lib/data";
import { Icon } from "./Icons";

type Line = { price: number; qty: number };
type CartCtx = {
  add: (name: string, price: number) => void;
};

const Ctx = createContext<CartCtx | null>(null);

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<Record<string, Line>>({});
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState("");
  const toastTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const flash = (msg: string) => {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 1800);
  };
  useEffect(() => () => clearTimeout(toastTimer.current), []);

  const add = (name: string, price: number) => {
    setLines((l) => ({ ...l, [name]: { price, qty: (l[name]?.qty ?? 0) + 1 } }));
    flash(`${name} added ✓`);
  };
  const change = (name: string, delta: number) =>
    setLines((l) => {
      const qty = (l[name]?.qty ?? 0) + delta;
      const next = { ...l };
      if (qty <= 0) delete next[name];
      else next[name] = { ...l[name], qty };
      return next;
    });

  const items = Object.entries(lines);
  const count = items.reduce((a, [, v]) => a + v.qty, 0);
  const total = items.reduce((a, [, v]) => a + v.qty * v.price, 0);

  const send = () => {
    if (!items.length) return flash("Add something first 🙂");
    const list = items.map(([n, v]) => `• ${n} x${v.qty} — ${formatPrice(v.qty * v.price)}`).join("\n");
    const msg = `Assalam-o-Alaikum Desi Foods! I'd like to order:\n${list}\n\nTotal: ${formatPrice(total)}\nName:\nAddress:`;
    window.open(waLink(msg), "_blank", "noopener");
  };

  return (
    <Ctx.Provider value={{ add }}>
      {children}

      <button className="fab" onClick={() => setOpen(true)}>
        <Icon name="wa" />
        <span className="lbl">Your Order</span>
        <span className="count">{count}</span>
      </button>

      <div className={`drawer${open ? " open" : ""}`}>
        <div className="shade" onClick={() => setOpen(false)} />
        <div className="panel" role="dialog" aria-label="Your order">
          <h3>
            Your Order
            <button className="x" onClick={() => setOpen(false)} aria-label="Close">×</button>
          </h3>
          <div className="cart-items">
            {items.length ? (
              items.map(([n, v]) => (
                <div className="ci" key={n}>
                  <div>
                    <b>{n}</b>
                    <br />
                    <small>{formatPrice(v.price)}</small>
                  </div>
                  <div className="qty">
                    <button onClick={() => change(n, -1)} aria-label={`Remove one ${n}`}>−</button>
                    <span>{v.qty}</span>
                    <button onClick={() => change(n, 1)} aria-label={`Add one ${n}`}>+</button>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty">
                Your order is empty.
                <br />
                Add dishes from the menu.
              </div>
            )}
          </div>
          <div className="total">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
          <button className="btn btn-wa" style={{ justifyContent: "center" }} onClick={send}>
            <Icon name="wa" /> Send order on WhatsApp
          </button>
        </div>
      </div>

      <div className={`toast${toast ? " show" : ""}`} role="status">{toast}</div>
    </Ctx.Provider>
  );
}

export function AddButton({
  name,
  price,
  className = "add",
  children = "+ Add",
}: {
  name: string;
  price: number;
  className?: string;
  children?: React.ReactNode;
}) {
  const { add } = useCart();
  return (
    <button className={className} onClick={() => add(name, price)} aria-label={`Add ${name}`}>
      {children}
    </button>
  );
}
