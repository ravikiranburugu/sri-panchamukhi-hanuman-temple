"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/data/temple-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header className="siteHeader">
        <Link
          className="brand"
          href="/"
          aria-label="Sri Panchamukha Hanuman Devalayam homepage"
          onClick={() => setOpen(false)}
        >
          <span className="brandMark" aria-hidden="true">
            {"\u0950"}
          </span>
          <span className="brandWords">
            <span>Sri Panchamukha Hanuman Devalayam</span>
            <small>DEVOTION - POOJA - SEVA</small>
          </span>
        </Link>
        <nav className="desktopNav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link className={pathname === item.href ? "active" : ""} href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <Link className="button buttonPrimary navCta" href="/darshan-pooja">
            Today&apos;s Timings
          </Link>
        </nav>
        <button
          aria-controls="mobile-navigation"
          aria-expanded={open}
          aria-label="Open navigation menu"
          className="menuButton"
          onClick={() => setOpen(true)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </header>
      {open && (
        <div className="drawerLayer">
          <button aria-label="Close navigation menu" className="drawerScrim" onClick={() => setOpen(false)} />
          <nav aria-label="Mobile navigation" className="mobileDrawer" id="mobile-navigation">
            <div className="drawerHead">
              <span className="drawerBrand">Sri Panchamukha Hanuman</span>
              <button aria-label="Close navigation menu" className="closeButton" onClick={() => setOpen(false)}>
                &times;
              </button>
            </div>
            <div className="drawerLinks">
              {navigation.map((item) => (
                <Link
                  className={pathname === item.href ? "active" : ""}
                  href={item.href}
                  key={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.href === "/donate" ? "Donation" : item.label}
                </Link>
              ))}
            </div>
            <Link className="button buttonPrimary drawerCta" href="/darshan-pooja" onClick={() => setOpen(false)}>
              Today&apos;s Timings
            </Link>
            <div className="drawerContact">
              <span>Setwinabad, Nizampet, Hyderabad</span>
              <span>Telangana 500090</span>
              <strong>Open until 08:30 PM</strong>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
