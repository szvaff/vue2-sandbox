<template>
  <v-container fluid fill-height>
    <v-navigation-drawer
        persistent
        :mini-variant="miniVariant"
        :clipped="clipped"
        v-model="drawer"
        enable-resize-watcher
        app
        dark
        class="sandbox-orange"
      >
        <v-toolbar flat class="transparent bg-drawer o" :class="miniVariant ? 'pt-2' : 'pt-5'">
          <v-list class="pa-0">
            <v-list-tile avatar>
              <v-list-tile-avatar size="48">
                <img src="@/assets/avatar.jpg">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title class="white--text title">{{ $t('layout.user_name') }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-toolbar>
        <v-list>
          <v-list-tile
            v-for="(item, i) in items"
            :key="i"
            @click="navigate(item)"
          >
            <v-list-tile-action>
              <v-icon v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="$t(item.titleKey)"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-list class="pull-bottom">
          <v-list-tile @click.stop="miniVariant = !miniVariant">
            <v-list-tile-action>
              <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="$t('layout.drawer.action_minimize')"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar
        app
        :clipped-left="clipped"
        dark
        class="sandbox-blue"
      >
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title v-text="$t('layout.app_title')"></v-toolbar-title>
        <AppBusyIndicator />
      </v-toolbar>
      <v-content>
        <router-view/>
      </v-content>
  </v-container>
</template>

<script>
import { RouteName } from '@/router'
import AppBusyIndicator from './AppBusyIndicator'

export default {
  name: 'AppLayout',
  components: { AppBusyIndicator },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [{
        icon: 'home',
        titleKey: 'layout.drawer.home',
        route: RouteName.LandingPage
      }, {
        icon: 'business',
        titleKey: 'layout.drawer.table',
        route: RouteName.Table
      }],
      miniVariant: false
    }
  },
  methods: {
    navigate (where) {
      this.$router.push({ name: where.route })
    }
  }
}
</script>

<style scoped lang="scss">
.bg-drawer {
  background-image: url('../assets/drawer-bg.png');
  background-position: center top;
}

.navigation-drawer.theme--dark {
  &.navigation-drawer--mini-variant {
    .bg-drawer {
      background-position: center -45px;
    }
  }
}

.pull-bottom {
  position: absolute;
  bottom: 5px;
  width: 100%;
}
</style>
