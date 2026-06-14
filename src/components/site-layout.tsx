import { Link } from "@tanstack/react-router";
import { Menu, ScanEye, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { ButtonLink } from "./button";

const nav = [
  ["Solutions", "/solutions"], ["Services", "/services"], ["Industries", "/industries"],
  ["Pricing", "/pricing"], ["Case Studies", "/case-studies"], ["About", "/about"], ["Contact", "/contact"],
] as const;

export function Brand() {
  return <Link to="/" className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-foreground"><span className="grid size-9 place-items-center rounded-xl border border-primary/35 bg-primary/10 text-primary"><ScanEye className="size-5" /></span>ThirdNetra</Link>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl"><div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8"><Brand /><nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">{nav.map(([label,to]) => <Link key={to} to={to} className="rounded-full px-3 py-2 text-sm text-muted-foreground transition hover:bg-accent hover:text-foreground" activeProps={{className:"text-foreground"}}>{label}</Link>)}</nav><div className="hidden items-center gap-3 md:flex"><ButtonLink to="/contact" variant="secondary">Schedule consultation</ButtonLink><ButtonLink to="/contact">Get free audit</ButtonLink></div><button type="button" aria-label="Toggle navigation" onClick={() => setOpen(!open)} className="grid size-10 place-items-center rounded-xl border border-border bg-secondary text-foreground md:hidden">{open ? <X className="size-5" /> : <Menu className="size-5" />}</button></div>{open && <nav className="border-t border-border bg-background p-5 md:hidden">{nav.map(([label,to]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="block border-b border-border py-3 text-sm text-foreground">{label}</Link>)}<ButtonLink to="/contact" className="mt-5 w-full">Get free audit</ButtonLink></nav>}</header>;
}

export function Footer() {
  return <footer className="border-t border-border bg-surface"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8"><div><Brand /><p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">The third eye of eCommerce finance and logistics intelligence. See. Detect. Recover.</p></div><div><p className="eyebrow">Platform</p><div className="mt-4 grid gap-3 text-sm text-muted-foreground"><Link to="/solutions">Solutions</Link><Link to="/services">Services</Link><Link to="/industries">Industries</Link><Link to="/pricing">Pricing</Link></div></div><div><p className="eyebrow">Company</p><div className="mt-4 grid gap-3 text-sm text-muted-foreground"><Link to="/about">About us</Link><Link to="/case-studies">Case studies</Link><Link to="/contact">Contact</Link><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></div></div></div><div className="border-t border-border"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-muted-foreground sm:flex-row sm:justify-between lg:px-8"><span>© 2026 ThirdNetra. All rights reserved.</span><span>Privacy Policy · Terms</span></div></div></footer>;
}

export function SiteLayout({ children }: { children: ReactNode }) { return <div className="min-h-screen bg-background"><Header /><main>{children}</main><Footer /></div>; }

export function PageHero({ eyebrow, title, copy, children }: { eyebrow: string; title: string; copy: string; children?: ReactNode }) {
  return <section className="relative overflow-hidden border-b border-border"><div className="hero-grid absolute inset-0 opacity-40" /><div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32"><p className="eyebrow">{eyebrow}</p><h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{copy}</p>{children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}</div></section>;
}