/*
* @Author: daibin
* @Date:   2017-06-04 10:35:40
* @Last Modified by:   daibin
* @Last Modified time: 2017-06-04 12:08:33
*/

'use strict'
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
export function shuffle(arr) {
  let _arr = arr.slice()
  for (let i = 0; i < _arr.length; i++) {
    let j = getRandomInt(0, i)
    let t = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = t
  }
  return _arr
}