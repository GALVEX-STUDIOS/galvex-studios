import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={navStyle}>

      {/* LOGO */}
      <h2 style={logoStyle}>Galvex</h2>

      {/* HAMBURGER */}
      <div onClick={() => setOpen(!open)} style={hamburgerStyle}>
        <span style={lineStyle}></span>
        <span style={lineStyle}></span>
        <span style={lineStyle}></span>
      </div>

      {/* DROPDOWN */}
      {open && (
        <div style={dropdownStyle}>
          <div style={menuItem}>HOME</div>
          <div style={menuItem}>ABOUT</div>
          <div style={menuItem}>SERVICES</div>
          <div style={menuItem}>CONTACT</div>
        </div>
      )}

    </nav>
  );
}

/* 🔥 NAVBAR (THINNER) */
const navStyle = {
  position: "fixed",
  top: "15px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "90%",
  maxWidth: "1200px",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  padding: "10px 20px", // 👈 thinner
  borderRadius: "10px",

  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(12px)",

  border: "1px solid rgba(255,255,255,0.1)",

  zIndex: 1000,
  color: "white"
};

/* 🔥 LOGO */
const logoStyle = {
  fontSize: "16px"
};

/* 🔥 HAMBURGER */
const hamburgerStyle = {
  width: "24px",
  height: "18px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  cursor: "pointer"
};

/* 🔥 LINES */
const lineStyle = {
  width: "100%",
  height: "2px",
  background: "white",
  borderRadius: "2px"
};

/* 🔥 DROPDOWN (NO LINES, CENTERED TEXT) */
const dropdownStyle = {
  position: "absolute",
  top: "60px",
  right: "10px",

  width: "180px",
  padding: "20px",

  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(16px)",

  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "12px",

  display: "flex",
  flexDirection: "column",
  alignItems: "center", // 👈 center align
  gap: "18px"
};

/* 🔥 MENU ITEMS (NO DIVIDER LINES) */
const menuItem = {
  cursor: "pointer",
  fontSize: "14px",
  letterSpacing: "2px",
  opacity: 0.85,
  textAlign: "center", // 👈 center
  transition: "0.3s"
};

export default Navbar;