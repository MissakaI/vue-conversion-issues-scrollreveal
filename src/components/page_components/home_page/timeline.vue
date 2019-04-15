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
              content='Aute sunt sint laboris aliqua ad aute enim occaecat. Ea ex labore 
              excepteur et laborum laboris non Lorem et do do proident. Irure aliqua magna 
              adipisicing non. Non sint cillum nulla ipsum fugiat sit ullamco Lorem eu id 
              occaecat proident excepteur. Incididunt anim officia et proident magna labore 
              occaecat consectetur consectetur officia. Tempor sunt pariatur enim proident 
              reprehenderit minim occaecat cillum. Aliquip reprehenderit non id cillum 
              cillum ex velit cupidatat incididunt adipisicing nostrud elit officia.'
              imageURL='@/assets/img/timeline-4.jpg'
              contentPosition='left'
            >
            </timelineItem>

            <!-- item 2 -->
            <timelineItem
              heading='September 2015'
              subheading='We archieved ...'
              content='Aute sunt sint laboris aliqua ad aute enim occaecat. Ea ex labore 
              excepteur et laborum laboris non Lorem et do do proident. Irure aliqua magna 
              adipisicing non. Non sint cillum nulla ipsum fugiat sit ullamco Lorem eu id 
              occaecat proident excepteur. Incididunt anim officia et proident magna labore 
              occaecat consectetur consectetur officia. Tempor sunt pariatur enim proident 
              reprehenderit minim occaecat cillum. Aliquip reprehenderit non id cillum 
              cillum ex velit cupidatat incididunt adipisicing nostrud elit officia.'
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
