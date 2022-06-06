// pages/map/map.js
import {markers} from '../../model/markers.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    setting: {
      skew: 0,
      rotate: 0,
      showLocation: true,
      showScale: true,
      subKey: "",
      layerStyle: 1,
      enableZoom: true,
      enableScroll: true,
      enableRotate: false,
      showCompass: false,
      enable3D: false,
      enableOverlooking: false,
      enableSatellite: false,
      enableTraffic: false,
    },
    location: {
      latitude: 23.09994,
      longitude: 113.32452,
    },
    scale: 10,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const markersWithWidthAndHeight = markers.map(marker => ({...marker, width: 25, height: 25}))
    console.log(markersWithWidthAndHeight)
    this.setData({
      markers: markersWithWidthAndHeight
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})