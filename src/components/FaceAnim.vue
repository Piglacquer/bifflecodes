<template>
    <Lottie :options='defaultOptions' :height='300' :width='200' v-on:animCreated="handleAnimation"/>
</template>

<script>
import * as animationData from '../../static/face.json'
import Lottie from '../lottie'

export default {
    name:'FaceAnim',
    components: {
        'Lottie': Lottie
    },
    data(){
        return {
            defaultOptions: {animationData: animationData, loop: true, autoplay: true},
            animationSpeed: 1,
            scrolled: false
        }
    },
    methods: {
        handleAnimation: function (anim) {
        this.anim = anim;
        },
        handleScroll () {
        this.scrolled = window.scrollY > 0
        play()
        },
        stop: function () {
        this.anim.stop();
        },
        play: function () {
        this.anim.play();
        },
        pause: function () {
        this.anim.pause();
        },
        onSpeedChange: function () {
        this.anim.setSpeed(this.animationSpeed);
            }
        } 
}
</script>
