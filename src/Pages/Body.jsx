import { VANTA } from "vanta";
import { useEffect } from "react";
import Nav from "./Nav";
import Nav2 from "./Nav2";

function Body() {
  useEffect(() => {
    if (window.VANTA) {
      window.VANTA.WAVES({
        el: ".bg-custom-body",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xc151f,
        waveHeight: 0.50,
        waveSpeed: 0.60,
        zoom: 0.65
      });
    }
  }, []);

  return (
<div className="bg-custom-body h-screen rounded-lg">
  <Nav/>
<Nav2/>
</div>
  );
}

export default Body;