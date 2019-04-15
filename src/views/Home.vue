<template>
  <div class="home">
    <STimeline/>
  </div>
</template>

<script>
/* Initiating Vue Scroll Reveal */
import Vue from 'vue';
import VueScrollReveal from 'vue-scroll-reveal';
Vue.use(VueScrollReveal,{
  duration: 1500,
  delay: 50,
});


// @ is an alias to /src
import STimeline from '@/components/page_components/home_page/timeline.vue';



export default {
  name: 'Home',
  components: {
    STimeline
  },
  mounted: () =>{
    Vue.$sr.reveal(".bottomReveal", {
      origin: "bottom"
    })
    .reveal(".leftReveal", {
        origin: "left"
    })
    .reveal(".rightReveal", {
        origin: "right"
    })
    .reveal(".topReveal", {
        origin: "top"
    });
  }
}
</script>
