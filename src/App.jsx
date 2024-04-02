import React, { useState, useEffect } from "react";
import { useTransition, animated, useSpringRef } from "@react-spring/web";

import styles from "./styles.module.css";

const pages = [
  ({ style }) => (
    <animated.div style={{ ...style, background: "#264653", fontSize: "2em" }}>
      <div style={{ textAlign: "center" }}>
        <p>Hi</p>
        <p>David Portillo</p>
      </div>
    </animated.div>
  ),
  ({ style }) => <animated.div style={{ ...style, background: "#2a9d8f" }}>B</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: "#e9c46a" }}>C</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: "#f4a261" }}>D</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: "#e76f51" }}>E</animated.div>,
];

export default function App() {
  const [index, set] = useState(0);
  const onClick = () =>
    set((state) => {
      console.log(state);
      console.log(pages.length);
      if(state >= pages.length - 1) {
        return 0;
      }
      return state + 1;
    });
  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });
  useEffect(() => {
    transRef.start();
  }, [index]);
  return (
    <div className={`flex fill ${styles.container}`} onClick={onClick}>
      {transitions((style, i) => {
        const Page = pages[i];
        return <Page style={style} />;
      })}
    </div>
  );
}
