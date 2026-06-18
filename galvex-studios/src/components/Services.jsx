function Services() {
  return (
    <section style={{
      height: "100vh",   // 👈 FULL PAGE
      width: "100%",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      overflow: "hidden",
      color: "white"
    }}>

      {/* 🔥 CLEAN BACKGROUND (NO BLUR) */}
      <img 
        src="/services-bg.jpg"
        alt="background"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          zIndex: 0
        }}
      />

      {/* 🔥 SMOOTH TOP + BOTTOM FADE (NO HARD CUT) */}
      <div style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        background: `
          linear-gradient(
            to bottom,
            rgba(0,0,0,0.95) 0%,
            rgba(0,0,0,0.6) 30%,
            rgba(0,0,0,0.6) 70%,
            rgba(0,0,0,0.95) 100%
          )
        `,
        zIndex: 1
      }}></div>

      {/* 🔥 CONTENT */}
      <div style={{
        position: "relative",
        zIndex: 2,
        width: "100%",
        maxWidth: "1100px",
        padding: "0 20px"
      }}>

        <h2 style={{
          fontSize: "clamp(32px, 6vw, 60px)",
          marginBottom: "60px"
        }}>
          Our Services
        </h2>

        {/* 🔥 CARDS */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "40px"
        }}>

          {/* CARD 1 */}
          <div className="serviceCard">

  <div className="icon">💻</div>

  <h3>Web Development</h3>

  <div className="goldLine"></div>

  <p>
    High-performance, scalable and modern websites tailored 
    to your business needs with clean code and best practices.
  </p>

  <ul>
    <li>Custom Website Development</li>
    <li>Responsive & Mobile Friendly</li>
    <li>Performance Optimization</li>
    <li>SEO Friendly Structure</li>
  </ul>

</div>

<div className="serviceCard">

  <div className="icon">✏️</div>

  <h3>UI/UX Design</h3>

  <div className="goldLine"></div>

  <p>
    Clean, user-focused designs that create meaningful 
    and delightful digital experiences for users.
  </p>

  <ul>
    <li>User Research & Analysis</li>
    <li>Wireframing & Prototyping</li>
    <li>Modern & Intuitive UI Design</li>
    <li>Seamless User Experience</li>
  </ul>

</div>

<div className="serviceCard">

  <div className="icon">💎</div>

  <h3>Brand Identity</h3>

  <div className="goldLine"></div>

  <p>
    Building strong and timeless brand identities 
    that help your business stand out and grow.
  </p>

  <ul>
    <li>Logo Design & Guidelines</li>
    <li>Brand Strategy & Positioning</li>
    <li>Visual Identity System</li>
    <li>Print & Digital Assets</li>
  </ul>

</div>

        </div>

      </div>

    </section>
  );
}

export default Services;