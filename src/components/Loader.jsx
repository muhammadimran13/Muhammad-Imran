import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => { setTimeout(() => setShow(false), 1800); }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
          style={{ position: "fixed", inset: 0, zIndex: 9000, background: "var(--bg)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
        >
          <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 32, fontWeight: 800, marginBottom: 32 }} className="grad-text">MI</div>
          <div style={{ width: 200, height: 2, background: "rgba(255,255,255,0.1)", borderRadius: 1, overflow: "hidden" }}>
            <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ height: "100%", background: "linear-gradient(90deg,#7c3aed,#3b82f6,#a855f7)" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
