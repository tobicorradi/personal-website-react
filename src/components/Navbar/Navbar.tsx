import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAVIGATION_ITEMS } from "./navigation-items";

import { Text } from "@components";

import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`${styles.header} ${
        isScrolled ? styles.scrolled : styles.notScrolled
      }`}
    >
      <div className={styles.container}>
        <a href="#home" className={styles.logoLink}>
          <Text
            as="span"
            weight="bold"
            color="primary"
            className={styles.logoText}
          >
            Toby
          </Text>
        </a>

        <nav className={styles.desktopNav}>
          {NAVIGATION_ITEMS.map(item => (
            <a
              key={item.href}
              href={item.href}
              className={styles.navLink}
              onClick={handleNavLinkClick}
            >
              {item.name}
              <span className={styles.navLinkUnderline}></span>
            </a>
          ))}
        </nav>

        <button
          className={styles.mobileMenuButton}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className={styles.icon} />
          ) : (
            <Menu className={styles.icon} />
          )}
        </button>
      </div>

      <div
        className={`${styles.mobileNavContainer} ${
          mobileMenuOpen ? styles.mobileNavOpen : styles.mobileNavClosed
        }`}
      >
        <nav className={styles.mobileNav}>
          {NAVIGATION_ITEMS.map(item => (
            <a
              key={item.href}
              href={item.href}
              className={styles.mobileNavLink}
              onClick={handleNavLinkClick}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
