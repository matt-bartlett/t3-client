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
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    -moz-align-items: center;
    -o-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    -o-justify-content: center;
    justify-content: center;
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
