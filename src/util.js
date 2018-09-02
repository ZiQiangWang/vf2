/**
 * 将字符串从中划线转为驼峰
 * @param {String} key
 */
const camel = function toNum(key) {
  return key.replace(/(-[a-z])/g, $1 => $1.toUpperCase().replace('-', ''));
};

/**
 * 如果能转为数字，则转换，否则返回原来的值
 * @param {*} num
 */
const toNum = function toNum(num) {
  if (typeof num === 'string') {
    const result = Number(num);
    if (isNaN(result)) {
      return num;
    }
    return result;
  }
  return num;
};

/**
 * 把属性对象中划线转为驼峰
 * @param {Object} attrs
 */
export function camelAttrs(attrs) {
  // eslint-disable-next-line
  for (const i in attrs) {
    const key = camel(i);

    attrs[key] = toNum(attrs[i]);
    if (key !== i) {
      delete attrs[i];
    }
  }
  return attrs;
}

/**
 * 首字母大写
 * @param {String} str
 */
export function upperFirst(str) {
  return str.substring(0, 1).toUpperCase() + str.substring(1);
}
