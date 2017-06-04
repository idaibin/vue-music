/*
* @Author: daibin
* @Date:   2017-06-03 01:30:40
* @Last Modified by:   daibin
* @Last Modified time: 2017-06-03 01:34:52
*/

'use strict'

export default class Singer {
  constructor({id, name}) {
    this.id = id
    this.name = name
    this.avatar = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${id}.jpg?max_age=2592000`
  }
}