/*
 * @Author: daibin
 * @Date:   2017-06-02 21:50:36
 * @Last Modified by:   daibin
 * @Last Modified time: 2017-06-03 12:45:59
 */

'use strict'
import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'
import axios from 'axios'

export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    g_tk: 69361609
  })

  return jsonp(url, data, options)
}

export function getDiscLists() {
  const url = '/api/getDiscList'

  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getSingerDetail(singerMid) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?g_tk=151794268'

  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    order: 'listen',
    begin: 0,
    num: 100,
    songstatus: 1,
    singermid: singerMid
  })

  return jsonp(url, data, options)
}
