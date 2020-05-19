
import axios from 'axios'
import {Message} from 'element-ui'
import UrlConstant from '../constant/UrlConstant.js'
import md5 from 'js-md5'

export default {
  post (url, data, callback) {
    var atoken = this.createAtoken(data)
    data['atoken'] = atoken
    // console.log(atoken)
    let param = new FormData() // 创建form对象
    if (data !== null && data !== '') {
      for (var key in data) {
        var currentdata = data[key]
        if (currentdata instanceof Array) {
          for (var index in currentdata) {
            param.append(key, currentdata[index])
          }
        } else {
          param.append(key, data[key])
        }
      }
    }
    var context = this

    axios.post(url, param)
      .then(function (response) {
        console.log(response)
        context.handleResquestResult(response, callback)
      })
      .catch(function (error) {
        console.log(error)
        context.handleResquestResult(error)
      })
  },
  handleResquestResult (response, callback) {
    if (response.status === 200) {
      var json = response.data
      switch (json.code) {
        case '200':
          if (callback) {
            callback(json)
          }
          break
        // #成功后吐司
        case '201':
          if (callback) {
            callback(json)
          }
          Message.success({
            message: json.desc,
            onClose: function () {
            }
          })
          break
        // #成功后弹对话框提示，确定后消失
        case '202':
          if (callback) {
            callback(json)
          }
          Message.success({
            message: json.desc,
            onClose: function () {
            }
          })
          break
        case '400':
          break
        // #请求失败，弹吐司
        case '401':
          Message.error({
            message: json.desc,
            onClose: function () {
            }
          })
          break
        // #请求失败，弹对话框
        case '402':
          Message.error({
            message: json.desc,
            onClose: function () {
            }
          })
          break
        // # utoken不存在，用户未认证，需要登录
        case '403':
          Message.error({
            message: json.desc,
            onClose: function () {
            }
          })
          break
        // # 未找到结果
        case '404':
          break
        // # atoken验证失败
        case '405':
          Message.error({
            message: json.desc,
            onClose: function () {
            }
          })
          break
        // # 数据不合法
        case '406':
          Message.error({
            message: json.desc,
            onClose: function () {
            }
          })
          break
        // #服务器内部错误
        case '500':
          Message.error({
            message: json.desc,
            onClose: function () {
            }
          })
          break
        // #服务器繁忙
        case '501':
          Message.error({
            message: json.desc,
            onClose: function () {
            }
          })
          break
      }
    } else {
      Message.error({
        message: '网络异常',
        onClose: function () {
        }
      })
    }
  },
  callback (response) {
  },
  // 加密方法
  createAtoken (data) {
    data['timestamp'] = String(new Date().getTime())
    // 先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
    var newkey = Object.keys(data).sort().reverse()
    // console.log(newkey)
    var newObj = {} // 创建一个新的对象，用于存放排好序的键值对
    // console.log(typeof newObj)
    for (var i = 0; i < newkey.length; i++) {
      // 遍历newkey数组
      // console.log('33333', typeof data[newkey[i]])
      if ((data[newkey[i]] instanceof File)) {
      } else {
        if (data[newkey[i]] instanceof Array) {
        } else {
          var value = String(data[newkey[i]])
          if (value !== 'undefined' && value !== '' && value !== 'null') {
            // console.log('sssssssss')
            newObj[newkey[i]] = String(data[newkey[i]])
          }
        }
      }
      // console.log(newObj)
      // 向新创建的对象中按照排好的顺序依次增加键值对
    }
    var result = JSON.stringify(newObj).replace(new RegExp(' ', 'g'), '') + UrlConstant.API_KEY
    // console.log('加密前：' + result)
    result = md5(result).toUpperCase()
    // console.log('加密后：' + result)
    return result // 返回排好序的新对象
  },
  showToast (type, content) {
    switch (type) {
      case 0:
        // 错误提示
        Message.error({
          message: content,
          onClose: function () {
          }
        })
        break
      case 1:
        // 警告提示
        Message.warning({
          message: content,
          onClose: function () {
          }
        })
        break
      case 2:
        // 成功提示
        Message.info({
          message: content,
          onClose: function () {
          }
        })
    }
  }
}
