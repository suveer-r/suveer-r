<template>
  <div id="home" class="home">
    <LoaderComponent class="my-0 mx-auto" />

    <div id="construct">
      <span class="italic font-semibold square">...UNDER_CONSTRUCTION()</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue"

appendMetaTags()

onMounted(() => {
  postLoad()
  showMessage()
})

function appendMetaTags() {
  document.title = `Suveer R 👋`

  var m = document.createElement("meta")
  m.name = "description"
  m.content =
    "copy paster, game developer, front-end engineer & a world-class hashtag us#er"
  document.head.appendChild(m)

  var k = document.createElement("meta")
  k.name = "keywords"
  k.content =
    "C#,Java,Javascript,HTML5,CSS3/SASS,Unity3D,Phaser,Cocos2Dx,Vue,NUXT,Ionic,Gameplay,Tools,Scripting,User Interface,JAMStack"
  document.head.appendChild(k)
}

function postLoad() {
  var home: HTMLElement | null = document.getElementById("home")
  var h: number

  h = window.innerHeight
  home?.setAttribute("style", `height: ${h}px`)
}

function showMessage() {
  var construct = document.getElementById("construct")
  setTimeout(() => {
    construct?.setAttribute("style", "visibility: visible;opacity: 1;")
  }, 1000)
}
</script>

<style lang="scss" scoped>
#construct {
  position: relative;
  top: 50%;
  opacity: 0;
  transition: all 1s ease-in-out;
  visibility: hidden;
}
</style>
