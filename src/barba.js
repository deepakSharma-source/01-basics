console.log("hi");
import lagrangeBarbaCore from 'https://cdn.skypack.dev/@lagrange/barba-core';
import gsap from "https://cdn.skypack.dev/gsap";


lagrangeBarbaCore.init({
  transitions: [
    {
      leave(data) {
        console.log("leaving");
        return gsap.to(data.current.container, {
          opacity: 0,
          duration: 1, // Add duration for smoother transition
        });
      },
      enter(data) {
        console.log("entering");
        data.current.container.remove();
        return gsap.from(data.next.container, {
          opacity: 0,
          duration: 2, // Add duration for smoother transition
        });
      },
    },
  ],
});
