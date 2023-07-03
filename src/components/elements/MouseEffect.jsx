import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";

const CursorLight = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 30;
`;

const MouseEffect = () => {
  const ref = useRef()

  useEffect(() => {
    const updateMousePosition = ({clientX: x, clientY: y}) => {
      if(window.matchMedia('(min-width: 768px)').matches) {
        ref.current.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
      } else {
        ref.current.style.background = `radial-gradient(600px at 0px 0px, rgba(29, 78, 216, 0.15), transparent 80%)`;
      }
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return <CursorLight ref={ref} />;
};

export default MouseEffect;
