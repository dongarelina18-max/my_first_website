"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = ["About", "Education", "Skills", "Projects", "Experience", "Achievements", "Interests", "Contact"];

export default function Nav({ name }: { name: string }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="font-serif text-lg font-semibold">{name}</a>
        <ul className="hidden gap-6 text-sm text-muted lg:flex">
          {links.map((l) => (
            <li key={l}><a className="transition-colors hover:text-accent" href={`#${l.toLowerCase()}`}>{l}</a></li>
          ))}
        </ul>
        <button className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="border-t border-line bg-paper px-6 py-3 lg:hidden">
          {links.map((l) => (
            <li key={l}><a onClick={() => setOpen(false)} className="block py-2 text-muted hover:text-accent" href={`#${l.toLowerCase()}`}>{l}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}
