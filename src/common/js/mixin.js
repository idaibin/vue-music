/*
* @Author: daibin
* @Date:   2017-06-04 17:40:09
* @Last Modified by:   daibin
* @Last Modified time: 2017-06-04 17:43:47
*/

'use strict'
import {mapGetters} from 'vuex'

export const playlistMixin = {
  computed: {
    ...mapGetters([
      'playlist'
    ])
  },
  mounted() {
    this.handlePlaylist(this.playlist)
  },
  activated() {
    this.handlePlaylist(this.playlist)
  },
  watch: {
    playlist(newVal) {
      this.handlePlaylist(newVal)
    }
  },
  methods: {
    handlePlaylist() {
      throw new Error('commpon must implement handlePlaylist method')
    }
  }
}