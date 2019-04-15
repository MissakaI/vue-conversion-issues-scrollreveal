<template>
  <!-- Begin Timeline -->
  <section id="timeline" class="background1 section-padding-top">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 section-title text-center">
          <h2>Timeline</h2>
          <span class="section-divider"></span>
        </div>
        <!-- /.column -->
      </div>
      <!-- /.row -->
      <div class="row">
        <div class="col-lg-12">
          <ul class="timeline pb80">

            <!-- item 1 -->
            <timelineItem
              heading='2015'
              subheading='We began our journey'
              content='The UCSC ISACA student group was established in 2015 as a first 
              ever ISG in Sri Lanka with Mr.Shujan&nbsp;Suntharalingam as the first president.'
              imageURL='@/assets/img/timeline-4.jpg'
              contentPosition='left'
            >
            </timelineItem>

            <!-- item 2 -->
            <timelineItem
              heading='September 2015'
              subheading='iHack 1.0'
              content='Our first ever hackathon, iHack 1.0 was organized in partnership with 
              MilleniumIT and held on 5th and 6th September 2015 at the UCSC premises.'
              imageURL='@/assets/img/timeline-4.jpg'
              contentPosition='right'
            >
            </timelineItem>

            <!-- item 3 -->
            <timelineItem
              heading='May 2016'
              subheading='iFest 2k16'
              content='First inter-university event held by us was IFest. It was held 29th 
              of May with over 400 participants filling the New Arts Theater  of University 
              of Colombo.'
              imageURL='@/assets/img/timeline-4.jpg'
              contentPosition='left'
            >
            </timelineItem>

            <!-- item 4 -->
            <timelineItem
              heading='Octorber 2016'
              subheading='iHack 2.0'
              content='For the second consecutive year, iHack 2.0 by the UCSC ISG was held 
              in partnership with DirectFN Mubasher from the 8th of October to 9th of October 
              at UCSC premises.'
              imageURL='@/assets/img/timeline-4.jpg'
              contentPosition='right'
            >
            </timelineItem>

            <!-- item 5 -->
            <timelineItem
              heading='2017'
              subheading='Annual General Meeting'
              content='For the first time an AGM of UCSC ISG was held on 30th January, 2017 
              at the UCSC premises. The appointment of the new executive board took place whilst 
              Mr. Dhanushka Chandana was appointed as the new president of the society.'
              imageURL='@/assets/img/timeline-4.jpg'
              contentPosition='left'
            >
            </timelineItem>

            <!-- item 6 -->
            <timelineItem
              heading='2017'
              subheading='Annual General Meeting'
              content='For the first time an AGM of UCSC ISG was held on 30th January, 2017 
              at the UCSC premises. The appointment of the new executive board took place whilst 
              Mr. Dhanushka Chandana was appointed as the new president of the society.'
              imageURL='@/assets/img/timeline-4.jpg'
              contentPosition='right'
            >
            </timelineItem>
          </ul>
        </div>
        <!-- /.column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /.section -->
  <!-- End Timeline -->
</template>

<script>
import timelineItem from '@/components/page_components/home_page/timelineItem.vue';

export default {
  name: "STimeline",
  components: {
    timelineItem,
  }
};
</script>
