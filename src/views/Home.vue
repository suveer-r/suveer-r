<template>
  <div class="home" id="home">
    <Loader style="margin: 0 auto" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component" // @ is an alias to /src
import Loader from "../components/loader.vue"
// import { useMeta } from "vue-meta"

@Options({
  components: {
    Loader,
  },
  mounted() {
    this.postLoad()
  },
  methods: {
    postLoad() {
      var home: HTMLElement | null = document.getElementById("home")
      var h: number

      h = window.innerHeight
      home?.setAttribute("style", `height: ${h}px`)
    },
  },
  // setup() {
  //   const meta = useMeta({
  //     title: "Suveer Raina 👋",
  //   })
  // },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped></style>
