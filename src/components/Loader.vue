<template>
  <div id="preloader">
    <div id="loader">
      <div id="circle1"></div>
      <div id="circle2"></div>
      <div id="circle3"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'loader'
  }
</script>

<style>
  #preloader {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9999;
    background-color: #FFFFFF;
  }

  #loader {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70px;
    margin-left: -35px;
    margin-top: -35px;
  }

  #loader > div {
    width: 18px;
    height: 18px;
    background-color: #508CA4;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
    animation: bouncedelay 1.4s infinite ease-in-out;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  #loader > #circle1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  #loader > #circle2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes bouncedelay {
    0%, 80%, 100% { -webkit-transform: scale(0.0) }
    40% { -webkit-transform: scale(1.0) }
  }

  @keyframes bouncedelay {
    0%, 80%, 100% {
      transform: scale(0.0);
      -webkit-transform: scale(0.0);
    } 40% {
      transform: scale(1.0);
      -webkit-transform: scale(1.0);
    }
  }

  .bouncedelay {
    -webkit-animation-name: bouncedelay;
    animation-name: bouncedelay;
  }
</style>
