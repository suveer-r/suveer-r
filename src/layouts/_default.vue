<template>
  <div class="title white-text font-thin italic text-current cursor-crosshair">
    <span class="text-primary-color triangle">Suveer</span>
  </div>

  <router-view />
</template>

<style lang="scss" scoped>
.title {
  font-size: 16px;
  float: left;
  position: fixed;
  top: 1.5em;
  left: 1.5em;
}
</style>
