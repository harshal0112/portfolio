import React, { useRef, useEffect } from "react";

function Container3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseMove = (event) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = event.clientX - left;
      const y = event.clientY - top;
      const rotateX = (y - height / 2) / 10;
      const rotateY = (x - width / 2) / 10;

      container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      container.style.transform = "";
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="container">
      <div className="h-44 w-44 bg-pink-500" ref={containerRef}>
        <h1 className="text-white">Move your mouse over me!</h1>
      </div>
    </div>
  );
}

export default Container3D;
