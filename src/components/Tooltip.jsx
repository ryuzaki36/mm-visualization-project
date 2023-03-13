import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

export function TooltipWithAnimation({ content, children }) {
  const [isVisible, setIsVisible] = useState(false);

  const tooltipAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible
      ? "translateY(-10px) scale(1)"
      : "translateY(0px) scale(0)",
    config: {
      tension: 300,
      friction: 10,
    },
  });

  const bounceAnimation = useSpring({
    transform: isVisible
      ? "translateY(-20px) scale(1.1)"
      : "translateY(0px) scale(1)",
    config: {
      tension: 300,
      friction: 10,
    },
  });

  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      style={{ position: "relative" }}
    >
      {children}
      {isVisible && (
        <animated.div
          style={{
            ...tooltipAnimation,
            position: "absolute",
            top: "10%",
            left: "100%",
            zIndex: "20",
            transform: "translateX(-50%)",
          }}
        >
          <animated.div
            style={{
              ...bounceAnimation,
              width: "250px",
              height: "150px",
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "24px",
            }}
          >
            <img
              className="h-full w-full rounded-xl object-cover"
              alt=""
              src={content}
            />
          </animated.div>
        </animated.div>
      )}
    </div>
  );
}
