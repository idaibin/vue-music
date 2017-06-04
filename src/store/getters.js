/*
* @Author: daibin
* @Date:   2017-06-03 12:18:33
* @Last Modified by:   daibin
* @Last Modified time: 2017-06-04 00:41:53
*/

'use strict'
export const singer = state => state.singer

export const playing = state => state.playing

export const fullScreen = state => state.fullScreen

export const playlist = state => state.playlist

export const sequenceList = state => state.sequenceList

export const mode = state => state.mode

export const currentIndex = state => state.currentIndex

export const currentSong = (state) => {
  return state.playlist[state.currentIndex] || {}
}
