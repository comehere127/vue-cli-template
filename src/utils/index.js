import { isObject, isArrayLikeObject, isString, isUndefined, isNull, indexOf, isEmpty, lowerCase } from 'lodash'
export function toBoolean(string) {
  var areTrue = ['yes', 'true', true, 'y', 1, '1']
  if (isString(string)) {
    string = string.toLowerCase()
  }

  return indexOf(areTrue, string) > -1
}

export function cleanArray(actual) {
  const newArray = []
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i])
    }
  }
  return newArray
}
function convertArr(json) {
  if (isString(json)) {
    return json
  }
  if (isArrayLikeObject(json)) {
    return json.map(function(item) {
      return convertArr(item)
    })
  }
  return JSON.stringify(json)
}
export function param(json) {
  if (!json) return ''
  return cleanArray(
    Object.keys(json).map(key => {
      if (json[key] === undefined) return ''
      if (isObject(json[key])) {
        json[key] = convertArr(json[key])
      }
      return encodeURIComponent(key) + '=' + encodeURIComponent(json[key])
    })
  ).join('&')
}

export function empty(obj) {
  if (isUndefined(obj) || isNull(obj)) {
    return true
  }
  if (isObject(obj)) {
    return isEmpty(obj)
  }
  return obj === ''
}

export function slugData(data, separator) {
  if (isString(data)) {
    let slug = lowerCase(data)
    // convert to english type
    slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a')
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e')
    slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i')
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o')
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u')
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y')
    slug = slug.replace(/đ/gi, 'd')
    if (isString(separator)) {
      slug = slug.replace(/[^a-zA-Z0-9]/gi, separator)
    } else {
      slug = slug.replace(/[^a-zA-Z0-9]/gi, '')
    }
    return slug
  }
  return data
}
export function getCurrentDate() {
  const curDate = new Date()
  const d = curDate.getDate()
  const m = curDate.getMonth()
  return `${d < 10 ? '0' + d : d}/${m < 10 ? '0' + m : m}/${curDate.getFullYear()}`
}
