/*
* @Author: daibin
* @Date:   2017-06-03 12:19:15
* @Last Modified by:   daibin
* @Last Modified time: 2017-06-29 01:03:24
*/

'use strict'
import { playMode } from 'common/js/config'
import {loadSearch, loadPlay, loadFavorite} from 'common/js/cache'

const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playlist: [],
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1,
  disc: {},
  topList: {},
  searchHistory: loadSearch(),
  playHistory: loadPlay(),
  favoriteList: loadFavorite()
}

export default state