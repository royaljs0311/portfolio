import { links } from "../data";
import { useEffect, useRef } from "react";

import { useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation();
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // we declare the scrollTop and prevScroll variables here outside the event listener
        let scrollTop = 0;
        let prevScroll = 0;

        function handleScroll() {
            // this function will be called on every time we scroll
            scrollTop = window.scrollY;
            if (scrollTop > prevScroll + 200) {
                prevScroll = scrollTop;
                if (headerRef.current) {
                    headerRef.current.classList.add("header-hidden");
                }
            } else if (scrollTop < prevScroll) {
                prevScroll = scrollTop;
                if (headerRef.current) {
                    headerRef.current.classList.remove("header-hidden");
                }
            }
        }
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="header" ref={headerRef}>
            <nav className="header-nav">
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className={location.hash === link.href ? "active" : ""}
                    >
                        {link.name}
                    </a>
                ))}
            </nav>
        </header>
    );
}
