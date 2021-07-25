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
  created() {
    this.appendMetaTags()
  },
  mounted() {
    this.postLoad()
  },
  methods: {
    appendMetaTags() {
      document.title = `Suveer R 👋`

      var m = document.createElement("meta")
      m.name = "description"
      m.content =
        "copy paster, game developer, front-end engineer & a world-class hashtag us#er"
      m.httpEquiv = "refresh"
      document.head.appendChild(m)

      var k = document.createElement("meta")
      k.name = "keywords"
      k.content =
        "C#,Java,Javascript,HTML5,CSS3/SASS,Unity3D,Phaser,Cocos2Dx,Vue,NUXT,Ionic,Gameplay,Tools,Scripting,User Interface,JAMStack"
      k.httpEquiv = "refresh"
      document.head.appendChild(k)
    },
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
