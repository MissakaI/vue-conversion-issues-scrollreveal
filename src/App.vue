<template>
  <div id="app">
    <!-- CHeader : Start -->
    <CHeader/>
    <!-- CHeader : End -->
    <router-view/>
    <!-- CHeader : Start -->
    <CFooter/>
    <!-- CHeader : End -->
  </div>
</template>

<script>
require("jquery");
require("./assets/js/jquery_004.js");

import CHeader from "@/components/main_components/header.vue";
import CFooter from "@/components/main_components/footer.vue";

// require("bootstrap-vue")

require("./assets/js/parallax.js");

require("./assets/js/prompt.js");
// require("./assets/js/jquery.js");
// require("./assets/js/scrollreveal.js");

require("./assets/js/jquery_002.js");
require("./assets/js/jquery_003.js");
require("./assets/js/jquery_005.js");
//
require("./assets/js/style-switcher.js");
require("./assets/js/bootstrap.js");

// require("scrollreveal");

// require("./assets/js/main.js");

export default {
  name: "App",
  components: {
    CHeader,
    CFooter
  },
  mounted: () => {
    /* eslint-disable */

    /* ---- nav smooth scroll ---- */
    $(document).ready(function() {
      $(".scroll-link").on("click", function(event) {
        event.preventDefault();
        var sectionID = $(this).attr("data-id");
        scrollToID("#" + sectionID, 750);
      });
      $(".scroll-top").on("click", function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 1200);
      });
    });

    /* ---- popup video ---- */
    $(document).ready(function() {
      try {
        $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
          disableOn: 700,
          type: "iframe",
          mainClass: "mfp-fade",
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });
      } catch (error) {
        console.log("error");
      }
    });

    /* ---- navbar offset ---- */
    function scrollToID(id, speed) {
      var offSet = 69;
      var targetOffset = $(id).offset().top - offSet;
      $("html,body").animate({ scrollTop: targetOffset }, speed);
    }

    /* ---- rotater text ---- */
    var current = 1;
    var height = jQuery(".ticker").height();
    var numberDivs = jQuery(".ticker").children().length;
    var first = jQuery(".ticker h1:nth-child(1)");
    setInterval(function() {
      var number = current * -height;
      first.css("margin-top", number + "px");
      if (current === numberDivs) {
        first.css("margin-top", "0px");
        current = 1;
      } else current++;
    }, 2500);
  }
};
</script>


<style lang="scss">
@import "./assets/css/css.css";
@import "./assets/css/royal_preloader.css";
@import "./assets/css/bootstrap.css";
@import "./assets/css/ionicons.css";
@import "./assets/css/pe-icon-7-stroke.css";
@import "./assets/css/magnific-popup.css";
@import "./assets/css/logoiconfont.css";
@import "./assets/css/style.css";
@import "./assets/css/style-switcher.css";
@import "./assets/css/fonts.css";

.dismissButton {
  background-color: #fff;
  border: 1px solid #dadce0;
  color: #1a73e8;
  border-radius: 4px;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  height: 36px;
  cursor: pointer;
  padding: 0 24px;
}
.dismissButton:hover {
  background-color: rgba(66, 133, 244, 0.04);
  border: 1px solid #d2e3fc;
}
.dismissButton:focus {
  background-color: rgba(66, 133, 244, 0.12);
  border: 1px solid #d2e3fc;
  outline: 0;
}
.dismissButton:hover:focus {
  background-color: rgba(66, 133, 244, 0.16);
  border: 1px solid #d2e2fd;
}
.dismissButton:active {
  background-color: rgba(66, 133, 244, 0.16);
  border: 1px solid #d2e2fd;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
}
.dismissButton:disabled {
  background-color: #fff;
  border: 1px solid #f1f3f4;
  color: #3c4043;
}

//

.gm-style .gm-style-mtc label,
.gm-style .gm-style-mtc div {
  font-weight: 400;
}

//

.gm-control-active > img {
  box-sizing: content-box;
  display: none;
  left: 50%;
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}
.gm-control-active > img:nth-child(1) {
  display: block;
}
.gm-control-active:hover > img:nth-child(1),
.gm-control-active:active > img:nth-child(1) {
  display: none;
}
.gm-control-active:hover > img:nth-child(2),
.gm-control-active:active > img:nth-child(3) {
  display: block;
}

//

.gm-ui-hover-effect {
  opacity: 0.6;
}
.gm-ui-hover-effect:hover {
  opacity: 1;
}

//

.gm-style .gm-style-cc span,
.gm-style .gm-style-cc a,
.gm-style .gm-style-mtc div {
  font-size: 10px;
  box-sizing: border-box;
}

//

@media print {
  .gm-style .gmnoprint,
  .gmnoprint {
    display: none;
  }
}
@media screen {
  .gm-style .gmnoscreen,
  .gmnoscreen {
    display: none;
  }
}

//

.gm-style-pbc {
  transition: opacity ease-in-out;
  background-color: rgba(0, 0, 0, 0.45);
  text-align: center;
}
.gm-style-pbt {
  font-size: 22px;
  color: white;
  font-family: Roboto, Arial, sans-serif;
  position: relative;
  margin: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

//
.gm-style {
  font: 400 11px Roboto, Arial, sans-serif;
  text-decoration: none;
}
.gm-style img {
  max-width: none;
}
@media screen {
  .gm-style .gmnoscreen,
  .gmnoscreen {
    display: none;
  }
}

//

.gm-style-pbc {
  transition: opacity ease-in-out;
  background-color: rgba(0, 0, 0, 0.45);
  text-align: center;
}
.gm-style-pbt {
  font-size: 22px;
  color: white;
  font-family: Roboto, Arial, sans-serif;
  position: relative;
  margin: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

//
.gm-style {
  font: 400 11px Roboto, Arial, sans-serif;
  text-decoration: none;
}
.gm-style img {
  max-width: none;
}
</style>
