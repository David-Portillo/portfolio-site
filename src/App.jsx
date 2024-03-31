import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#000' }}>
      <Parallax pages={3}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
      </Parallax>
    </div>
  );
}

export default App;
