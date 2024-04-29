import { VANTA } from "vanta";
import { useEffect } from "react";
import Nav from "./Nav";
import Nav2 from "./Nav2";

function Body() {
  // useEffect(() => {
  //   if (window.VANTA) {
  //     window.VANTA.BIRDS({
  //       el: ".bg-custom-body",
  //       mouseControls: true,
  //       touchControls: true,
  //       gyroControls: false,
  //       minHeight: 200.00,
  //       minWidth: 200.00,
  //       scale: 1.00,
  //       scaleMobile: 1.00,
  //       backgroundColor: 0xde8d60,
  //       color1: 0xd9d6d6,
  //       color2: 0x2bb873,
  //       birdSize: 1.30,
  //       wingSpan: 10.00,
  //       separation: 81.00,
  //       cohesion: 79.00
  //     });
  //   }
  // }, []);

  return (
<div className= "bg-custom-black h-screen rounded-lg">
  <Nav/>
<Nav2/>
</div>
  );
}

export default Body;