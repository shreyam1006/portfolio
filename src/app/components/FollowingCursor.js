import React, { useEffect, useRef, useState } from "react";

const Cursor = () => {
  const cursorRef = useRef(null);
  const innerRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });

    if (e.target.tagName === "H2" || e.target.id === "home") {
      innerRef.current.style.height = "20px";
      innerRef.current.style.width = "20px";
      innerRef.current.style.opacity = "100%";
    } else {
      innerRef.current.style.height = "0px";
      innerRef.current.style.width = "0px";
      innerRef.current.style.opacity = "0%";
    }
  };

  useEffect(() => {
    // Hide cursor globally
    document.body.style.cursor = "none";
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Restore cursor when component unmounts
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div style={{ cursor: "none" }}>
      <div
        ref={cursorRef}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          width: "35px",
          height: "35px",
          borderRadius: "50%",
          backgroundColor: "#FFDF70",
          border: "1px solid #000000",
          pointerEvents: "none",
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          cursor: "none",
          zIndex: 100,
        }}
      >
        <div
          ref={innerRef}
          style={{
            opacity: "0%",
            width: "0px",
            height: "0px",
            borderRadius: "50%",
            backgroundColor: "#F480A3",
            border: "1px solid #000000",
            pointerEvents: "none",
            transition:
              "width 0.3s ease, height 0.3s ease-out, opacity 0.3s ease",
            zIndex: 100,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Cursor;
