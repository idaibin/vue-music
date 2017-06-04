/*
 * @Author: daibin
 * @Date:   2017-06-02 21:50:36
 * @Last Modified by:   daibin
 * @Last Modified time: 2017-06-04 18:31:09
 */

'use strict'
import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'
import axios from 'axios'

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

export function getDiscList() {
  const url = '/api/getDiscList'

  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    format: 'json',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    g_tk: 1928093487,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random()
    // inCharset: 'utf-8',
    // outCharset: 'utf-8',
    // notice: 0,
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}