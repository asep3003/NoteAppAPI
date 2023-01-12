"use strict"

require("dotenv").config()
const crypto = require("crypto")

class CommonHelper {
  static encryptPassword(userpassword) {
    let key = process.env.USER_PASSWORD_KEY || "userPasswordKey"
    /** Hashing algorithm sha512 */
    var hash = crypto.createHmac("sha512", key)
    return hash.update(userpassword).digest("hex")
  }

  static generateUUID = () => {
    var dt = new Date().getTime()
    var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0
        dt = Math.floor(dt / 16)
        return (c == "x" ? r : (r & 0x3) | 0x8).toString(16)
      }
    )
    return uuid
  }

  static randomString = (length) => {
    let result = ""
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let charactersLength = characters.length
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  }

  static titleCase = (str) => {
    var splitStr = str.toLowerCase().split(" ")
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
    }
    return splitStr.join(" ")
  }

  static updateOrCreate = async (model, where, newItem) => {
    // First try to find the record
    const foundItem = await model.findOne({ where })
    if (!foundItem) {
      // Item not found, create a new one
      let item = await model.findOrCreate({
        where: where,
        defaults: newItem,
      })
      item = item[0]
      return item
    } 
    // Found an item, update it
    const item = await model.update(newItem, { where })
    return foundItem
  }

  static randomInt = (length) => {
    let result = ""
    let characters = "0123456789"
    let charactersLength = characters.length
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  }
}

module.exports = CommonHelper
