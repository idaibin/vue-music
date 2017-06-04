/*
* @Author: daibin
* @Date:   2017-06-03 12:19:15
* @Last Modified by:   daibin
* @Last Modified time: 2017-06-04 00:41:57
*/

'use strict'
import { playMode } from 'common/js/config'
const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playlist: [],
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1
}

export default state