/*
* @Author: daibin
* @Date:   2017-06-04 12:11:31
* @Last Modified by:   daibin
* @Last Modified time: 2017-06-04 18:43:17
*/

'use strict'
import { commonParams } from './config'
import axios from 'axios'

export function getLyric(mid) {
  const url = '/api/lyric'

  const data = Object.assign({}, commonParams, {
    songmid: mid,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    categoryId: 10000000,
    pcachetime: +new Date(),
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

