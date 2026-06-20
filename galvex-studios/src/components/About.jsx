function About() {
  <div style={{
  position: "absolute",
  top: 0,
  width: "100%",
  height: "180px",

  background: `
    linear-gradient(
      to top,
      rgba(0,0,0,0) 0%,
      rgba(0,0,0,0.4) 50%,
      rgba(0,0,0,0.85) 100%
    )
  `,

  zIndex: 2
}}></div>

  return (
    <section style={{
      height: "100vh",   // 👈 FULL SCREEN
      width: "100%",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      overflow: "hidden",
      color: "white",
      marginTop: "-80px",
    }}>


  <img src={`${import.meta.env.BASE_URL}about-bg.jpg`} 
  style={{
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,

    filter: "brightness(1.15) contrast(1.25) saturate(1.2)"
  }}
/>

      {/* 🔥 CONTENT (NO BLACK BOX ❌) */}
      <div style={{
        position: "relative",
        zIndex: 2,
        maxWidth: "800px",
        padding: "0 20px"
      }}>

        <h2 style={{
          fontSize: "clamp(32px, 6vw, 60px)",
          marginBottom: "25px",
          letterSpacing: "-1px"
        }}>
          About Galvex
        </h2>

        <p style={{
          fontSize: "clamp(15px, 2.5vw, 18px)",
          lineHeight: "1.8",
          color: "rgba(255,255,255,0.85)"
        }}>
          Galvex Studios is a modern digital studio focused on building 
          high-performance, visually refined websites. We combine clean design, 
          smooth user experience, and strong technical execution to create 
          digital products that stand out and deliver results.
        </p>

      </div>

    </section>
  );
}

export default About;