<template>
  <v-container fluid fill-height>
    <v-fade-transition>
      <div class="video-background hidden-sm-and-down" v-show="showBg">
        <div class="video-overlay"></div>
        <div class="video-foreground">
          <iframe :src="actualVideo" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </v-fade-transition>
    <v-fade-transition>
      <v-layout class="landing" align-center justify-center v-show="showText">
        <blockquote>
          <div class="white--text mb-2 display-3 text-xs-center">{{ $t('landing_page.title') }}</div>
          <div class="white--text subheading mb-3 text-xs-center">{{ $t('landing_page.subtitle') }}</div>
          <v-btn dark color="sandbox-orange" class="mx-auto d-block" @click.stop="newVideo()">{{ $t('landing_page.new_video_btn') }}</v-btn>
        </blockquote>
      </v-layout>
    </v-fade-transition>
  </v-container>
</template>

<script>
export default {
  name: 'LandingPage',
  data () {
    return {
      videos: [
        'https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=W0LHTWG-UmQ',
        'https://www.youtube.com/embed/Scxs7L0vhZ4?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=Scxs7L0vhZ4',
        'https://www.youtube.com/embed/8Z1eMy2FoX4?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=8Z1eMy2FoX4',
        'https://www.youtube.com/embed/bYVebL_BYqo?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=bYVebL_BYqo',
        'https://www.youtube.com/embed/ChOhcHD8fBA?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=ChOhcHD8fBA',
        'https://www.youtube.com/embed/Rk6_hdRtJOE?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=Rk6_hdRtJOE',
        'https://www.youtube.com/embed/1La4QzGeaaQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=1La4QzGeaaQ',
        'https://www.youtube.com/embed/cX1kjHV7S-k?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=cX1kjHV7S-k'
      ],
      actualVideo: null,
      showBg: false,
      showText: false
    }
  },
  methods: {
    getRandomVideo () {
      return this.videos[Math.floor(Math.random() * this.videos.length)]
    },
    newVideo () {
      this.actualVideo = this.getRandomVideo()
    }
  },
  created () {
    this.newVideo()
    var self = this

    setTimeout(function () {
      self.showBg = true
    }, 100)

    setTimeout(function () {
      self.showText = true
    }, 500)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.video-background {
  background: #000;
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  /* z-index: ; */
}
.video-foreground,
.video-background iframe,
.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.video-overlay {
    background: #1d67bd;
    z-index: 1;
    opacity: 0.5;
}

.landing {
  position: relative;
}

@media (min-aspect-ratio: 16/9) {
  .video-background iframe {
    height: 110vh;
    top: -5%;
  }
}

@media (max-aspect-ratio: 16/9) {
  .video-background iframe {
    width: 180vw;
    left: -40%;
  }
}
</style>
