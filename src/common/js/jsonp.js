/*
 * @Author: daibin
 * @Date:   2017-06-02 21:37:02
 * @Last Modified by:   daibin
 * @Last Modified time: 2017-06-02 22:18:08
 */

'use strict'
import originJsonp from 'jsonp'
export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}
function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : ''
}