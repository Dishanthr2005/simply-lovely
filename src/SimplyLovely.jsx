import React, { useState, useRef } from "react";
import bgImage from "./assets/max-redbull.jpg"; // Replace with your image

export default function SimplyLovelyFullscreen() {
  const [showVideo, setShowVideo] = useState(false);
  const containerRef = useRef(null);

  const handleClick = () => {
    setShowVideo(true);

    // Request fullscreen
    if (containerRef.current) {
      const elem = containerRef.current;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    }
  };

  return (
    <div ref={containerRef} style={styles.container}>
      {!showVideo ? (
        <div
          style={{ ...styles.overlay, backgroundImage: `url(${bgImage})` }}
          onClick={handleClick}
        >
          <h1 style={styles.title}>SIMPLY LOVELY</h1>
        </div>
      ) : (
        <iframe
          src="https://www.youtube.com/embed/kr2flLzhGuA?autoplay=1&mute=0"
          title="Max Verstappen Edit"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={styles.video}
        />
      )}
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    height: "100vh",
    position: "relative",
    fontFamily: "'Poppins', sans-serif",
  },
  overlay: {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: "50px",
    filter: "brightness(0.75)",
    cursor: "pointer",
  },
  title: {
    fontSize: "60px",
    fontWeight: "700",
    color: "#FFD700",
    textTransform: "uppercase",
    letterSpacing: "2px",
    textShadow: "2px 2px 10px rgba(0,0,0,0.5)",
  },
  video: {
    width: "100%",
    height: "100%",
    border: "none",
  },
};