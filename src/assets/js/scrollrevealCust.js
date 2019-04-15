// require("vue-scroll-reveal");

// import VueScrollReveal from 'vue-scroll-reveal';

/* eslint-disable*/
/* ---- animations ---- */
// if (typeof sr == "undefined") {
//     sr = ScrollReveal({
//       duration: 1500,
//       delay: 50
//     });
// }

// let sr = ScrollReveal({
//     duration: 1500,
//     delay: 50
// });  

Vue.use(VueScrollReveal,{
  duration: 1500,
  delay: 50,
});

  // Royal_Preloader.config({
  //   onComplete: function() {
  // triggerReveals();
  //   }
  // });
  
function triggerReveals(){
  console.log('triggered');
  // callback(console.log(ScrollReveal.version));
  this.$sr.reveal(".bottomReveal", {
    origin: "bottom"
  });
  reveal(".leftReveal", {
      origin: "left"
  });
  reveal(".rightReveal", {
      origin: "right"
  });
  reveal(".topReveal", {
      origin: "top"
  });

  reveal(".rotateBottomReveal", {
    origin: "bottom",
    rotate: { x: 90 }
  })
    .reveal(".rotateLeftReveal", {
      origin: "left",
      rotate: { x: 90 }
    })
    .reveal(".rotateRightReveal", {
      origin: "right",
      rotate: { x: 90 }
    })
    .reveal(".rotateTopReveal", {
      origin: "top",
      rotate: { x: 90 }
    });

  sr.reveal(".scaleReveal", {
    origin: "top",
    scale: 0.6
  });
}

