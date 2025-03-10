
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // Add smooth scrolling for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        if (!href) return;
        
        const target = document.querySelector(href);
        if (!target) return;
        
        target.scrollIntoView({
          behavior: "smooth",
        });
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background transition-colors duration-300 overflow-hidden">
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
