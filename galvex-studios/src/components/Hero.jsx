function Hero() {
  return (
    <section style={{
      height: "100vh",
      minHeight: "100vh",
      width: "100%",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "0 20px",
      overflow: "hidden"
    }}>

      {/* 🔥 BACKGROUND IMAGE */}
        <img src={`${import.meta.env.BASE_URL}hero-bg.jpg`} 
        alt="background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top"
            ? "60% center"
            : "center",
          zIndex: 0
        }}
      />

      {/* 🔥 OVERLAY */}
      <div style={{
  position: "absolute",
  bottom: 0,
  width: "100%",
  height: "80px",

  background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.6))",

  zIndex: 1
}}></div>

      {/* 🔥 CONTENT */}
      <div style={{
        position: "relative",
        zIndex: 2,
        color: "white",
        animation: "fadeUp 1.8s ease forwards"
      }}>

        <h1 style={{
          fontSize: "clamp(48px, 12vw, 100px)",
          fontWeight: "600",
          letterSpacing: "-1px",
          marginBottom: "20px"
        }}>
          GALVEX.
        </h1>

        <p style={{
          fontSize: "clamp(14px, 4vw, 18px)",
          maxWidth: "90%",
          margin: "0 auto 30px",
          color: "rgba(255,255,255,0.85)",
          lineHeight: "1.6"
        }}>
          Built with Focus. Driven by Excellence.
        </p>

        <div style={{
  position: "relative",
  zIndex: 3,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px"
}}>
  <button
    style={{
      padding: "clamp(10px, 3vw, 14px) clamp(20px, 6vw, 32px)",
      fontSize: "clamp(12px, 3vw, 13px)",
      borderRadius: "4px",
      border: "1px solid rgba(255,215,0,0.6)",  // 👈 GOLD
      background: "transparent",
      color: "#FFD700",   // 👈 GOLD TEXT
      letterSpacing: "3px",
      cursor: "pointer"
    }}
  >
    ENTER
  </button>
</div>
        {/* 🔥 SCROLL TEXT */}
        <div style={{
          marginTop: "60px",
          fontSize: "12px",
          letterSpacing: "3px",
          opacity: 0.7,
          animation: "fadeUp 2.2s ease forwards"
        }}>
          SCROLL
        </div>

      </div>

    </section>
  );
}

export default Hero;

<div style={{
  position: "absolute",
  bottom: 0,
  width: "100%",
  height: "180px",

  background: `
    linear-gradient(
      to bottom,
      rgba(0,0,0,0) 0%,
      rgba(0,0,0,0.4) 50%,
      rgba(0,0,0,0.85) 100%
    )
  `,

  zIndex: 2
}}></div>