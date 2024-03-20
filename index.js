const rgbaReg =
  /^rgba?\(\s*(\d{1,3})\s*\,\s*(\d{1,3})\s*\,\s*(\d{1,3})\s*(\,\s*([\d\.]+)\s*)?\)/i;
const hexReg = /^\#?([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6,8})$/;
/**
 * 16进制颜色转rgba
 * @param {String} hex 16进制颜色字符串
 * @param {Number} a 透明度，0-1之间的数值
 * @returns {[number,number,number,number]}
 */
function hex2rgba(hex, a) {
  const str = hex.toLowerCase();
  const result = [];
  let sColor = str.replace(hexReg, "$1");
  if (sColor.length < 6) {
    sColor = sColor
      .split("")
      .map((s) => s + s)
      .join("");
  }
  for (let i = 0; i < 6; i += 2) {
    result.push(parseInt(sColor.slice(i, i + 2), 16));
  }
  let _a = a ? a : 1;
  if (sColor.length === 8) {
    _a = a ? a : Number(parseInt(sColor.slice(6, 8), 16) / 255).toFixed(2);
  }
  result.push(_a);
  return result;
}

/**
 * rgb颜色转rgba
 * @param {string} rgb rgb颜色:例如"rgb(255,255,255)"
 * @param {Number} a 透明度，0-1之间的数值
 * @returns {[number,number,number,number]}
 */
function rgba2arr(rgba, a) {
  const result = [];
  for (let i = 1; i <= 3; i++) {
    result.push(rgba.replace(rgbaReg, `$${i}`));
  }

  let _a = a ? a : 1;
  const ra = rgba.replace(rgbaReg, "$5");
  if (ra) {
    _a = a ? a : ra;
  }
  result.push(_a);
  return result;
}

/**
 * 将颜色转换成rgba
 * @param {String} color 颜色值，支持rgb、rgba、3/4/6/8位16进制颜色
 * @param {Number} a 透明度，0-1之间的数值
 * @returns {[number,number,number,number]}
 */
export default function color2rgba(color, a) {
  let result = [0, 0, 0, 0];
  if (hexReg.test(color)) {
    result = hex2rgba(color, a);
  }
  if (rgbaReg.test(color)) {
    result = rgba2arr(color, a);
  }
  return result.map((n) => Number(n));
}
