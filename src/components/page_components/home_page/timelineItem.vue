<template>
    <li :class="contentPosition === 'right'?'timeline-inverted':null">
        <div
        class="timeline-image scaleReveal"
        data-sr-id="48"
        style="
                            visibility: visible; -webkit-transform: translateY(0) scale(1);
                            opacity: 1;transform: translateY(0) scale(1); opacity:
                            1;-webkit-transition: -webkit-transform 1.5s cubic-bezier(0.6, 0.2,
                            0.1, 1) 0.05s, opacity 1.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0.05s;
                            transition: transform 1.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0.05s,
                            opacity 1.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0.05s;"
        >
        <img
            alt
            class="img-circle img-responsive"
            :src="imageURL"
        >
        </div>
        <div
        :class="'timeline-panel'+' '+(contentPosition === 'right'?'rightReveal':'leftReveal')"
        data-sr-id="19"
        style="
                            visibility: visible; -webkit-transform: translateX(0) scale(1);
                            opacity: 1;transform: translateX(0) scale(1); opacity:
                            1;-webkit-transition: -webkit-transform 1.5s cubic-bezier(0.6, 0.2,
                            0.1, 1) 0.05s, opacity 1.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0.05s;
                            transition: transform 1.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0.05s,
                            opacity 1.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0.05s;"
        >
        <div class="timeline-heading">
            <h5 class="heading-1 mb15">{{heading}}</h5>
            <h4 class="subheading">{{subheading}}</h4>
        </div>
        <div class="timeline-body">
            <p v-html="content">
            <!-- {{content}} -->
            </p>
        </div>
        </div>
    </li>
</template>

<script>
// import img from imageURL;

export default {
    name: 'timelineItem',
    props: ['heading','subheading','content','imageURL','contentPosition'],
}
</script>
