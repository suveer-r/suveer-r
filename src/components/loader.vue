<template>
  <div class="logo" alt="logo">
    <svg
      version="1.1"
      id="logo-svg-main"
      viewBox="-203.5 0.5 833 263"
      xml:space="preserve"
    >
      <g id="right">
        <g id="right-arrows">
          <path
            class="st1"
            d="M387.561,177.771L368.6,135.085l16.776-43.588C374.188,120.562,375.838,151.408,387.561,177.771z"
          />
          <path
            class="st1"
            d="M531.117,26.762c-29.065-11.187-59.906-9.537-86.275,2.186l42.691-18.962L531.117,26.762z"
          />
          <path
            class="st1"
            d="M536.386,235.052l-42.688,18.962l-43.592-16.774C479.174,248.424,510.019,246.775,536.386,235.052z"
          />
          <path
            class="st0"
            d="M612.627,128.917l-16.775,43.586c11.186-29.063,9.536-59.904-2.185-86.271L612.627,128.917z"
          />
        </g>
        <path
          class="st2"
          d="M490.613,76.731c30.478,0,55.271,24.792,55.271,55.271c0,30.479-24.793,55.271-55.271,55.271
			c-30.479,0-55.271-24.793-55.271-55.271C435.342,101.523,460.137,76.731,490.613,76.731 M490.613,47.43
			c-46.707,0-84.571,37.865-84.571,84.572c0,46.709,37.864,84.572,84.571,84.572s84.571-37.863,84.571-84.572
			C575.186,85.295,537.32,47.43,490.613,47.43L490.613,47.43z"
        />
      </g>
      <g id="middle">
        <g id="middle-arrows">
          <path
            class="st1"
            d="M227.814,19.746l46.501,4.424l29.748,36.007C284.225,36.163,256.54,22.47,227.814,19.746z"
          />
          <path
            class="st1"
            d="M288.961,218.928c24.01-19.835,37.705-47.521,40.429-76.248l-4.424,46.5L288.961,218.928z"
          />
          <path
            class="st0"
            d="M104.882,121.321l4.422-46.501l36.005-29.748C121.305,64.912,107.606,92.595,104.882,121.321z"
          />
          <path
            class="st1"
            d="M159.959,239.83l-29.75-36.003c19.838,24.006,47.522,37.702,76.247,40.425L159.959,239.83z"
          />
        </g>
        <circle class="st2" cx="217.132" cy="132" r="84.572" />
      </g>
      <g id="left">
        <g id="left-arrows">
          <path
            class="st1"
            d="M-134.403,211.717l-33.021-33.035l0.011-46.705C-167.421,163.121-154.81,191.314-134.403,211.717z"
          />
          <path
            class="st1"
            d="M-54.627,19.238c-31.143-0.007-59.34,12.602-79.74,33.008l33.035-33.02L-54.627,19.238z"
          />
          <path
            class="st0"
            d="M25.065,211.752l-33.037,33.021l-46.703-0.012C-23.532,244.77,4.665,232.156,25.065,211.752z"
          />
          <path
            class="st1"
            d="M58.121,85.32l-0.009,46.704c0.003-31.142-12.606-59.336-33.01-79.74L58.121,85.32z"
          />
        </g>
        <circle class="st2" cx="-54.65" cy="132" r="84.572" />
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"

@Options({
  mounted() {
    document.body.classList.add("loaded")
  },
})
export default class loader extends Vue {}
</script>

<style lang="scss" scoped>
.logo {
  top: 50%;
  position: relative;
  transform: translateY(-50%);
}

.logo svg#logo-svg-main {
  height: 70%;
  width: 70%;
}

/* line 169, src/scss/components/_page.scss */
.loaded #logo-svg-main .st0 {
  fill: none;
  stroke: $primary-color;
  stroke-width: 1.9534;
  stroke-miterlimit: 10;
  stroke-dasharray: 181.988;
  stroke-dashoffset: 181.988;
  animation: loaded2 2s ease-in;
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
}

/* line 184, src/scss/components/_page.scss */
.loaded #logo-svg-main .st1 {
  fill: none;
  stroke: $light;
  stroke-width: 1.9534;
  stroke-miterlimit: 10;
  stroke-dasharray: 181.988;
  stroke-dashoffset: 181.988;
  animation: loaded 2s ease-in;
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
}

/* line 198, src/scss/components/_page.scss */
.loaded #logo-svg-main .st2 {
  fill: none;
  stroke: $light;
  stroke-width: 1.9534;
  stroke-miterlimit: 10;
  stroke-dasharray: 878.7;
  stroke-dashoffset: 878.7;
  animation: loaded4 2s ease-in;
  animation-fill-mode: both;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-delay: 0.5s;
}

@media only screen and (min-width: 601px) {
  /* line 214, src/scss/components/_page.scss */
  .logo.scrolled {
    transform: scale(0.2);
  }
}

.loaded #logo-svg-main #left-arrows,
.loaded #logo-svg-main #middle-arrows,
.loaded #logo-svg-main #right-arrows {
  animation: rotating;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

// .loaded #logo-svg-main:hover #left-arrows,
// .loaded #logo-svg-main:hover #middle-arrows,
// .loaded #logo-svg-main:hover #right-arrows {
//   animation-play-state: paused;
// }

/* line 237, src/scss/components/_page.scss */
.loaded #logo-svg-main #left-arrows {
  animation-duration: 3s;
  animation-delay: 2.5s;
  transform-origin: -56px center;
}

/* line 246, src/scss/components/_page.scss */
.loaded #logo-svg-main #middle-arrows {
  animation-duration: 2.5s;
  animation-delay: 3.5s;
  transform-origin: 217px center;
}

/* line 255, src/scss/components/_page.scss */
.loaded #logo-svg-main #right-arrows {
  animation-duration: 2s;
  animation-delay: 3s;
  transform-origin: 490px center;
}

@keyframes loaded {
  0% {
    stroke-dashoffset: 181.988;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes loaded2 {
  0% {
    fill: $primary-color;
    stroke-dashoffset: 181.988;
    fill-opacity: 0;
  }
  80% {
    fill: $primary-color;
    stroke-dashoffset: 0;
    fill-opacity: 0;
  }
  90%,
  100% {
    fill: $primary-color;
    stroke-dashoffset: 0;
    fill-opacity: 1;
  }
}
@keyframes loaded4 {
  0% {
    fill: $light;
    stroke-opacity: 1;
    stroke-dashoffset: 878.7;
    fill-opacity: 0;
  }
  45% {
    fill: $light;
    fill-opacity: 0;
  }
  90%,
  100% {
    fill: $light;
    stroke-opacity: 0;
    stroke-dashoffset: 0;
    fill-opacity: 1;
  }
}

@keyframes rotating {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
