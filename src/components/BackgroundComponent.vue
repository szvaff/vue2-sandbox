<template>
  <div :style="style">
  </div>
</template>

<script>
export default {
  name: 'BackgroundComponent',
  data () {
    return {
      style: ''
    }
  },
  props: ['img'],
  created () {
    this.style = {
      'background-image': 'url("' + this.img + '")'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div {
  background-size: cover;
  filter: blur(20px);
  width: 110%;
  height: 100%;
  position: absolute;
  top: 0;
  left: -5%;
  z-index: -1;
}
</style>
