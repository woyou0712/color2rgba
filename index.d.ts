/**
 * 将颜色转换为 RGBA 数组
 * @param color 颜色值，支持 rgb、rgba、3/4/6/8位十六进制颜色
 * @param a 透明度，0-1之间的数值
 * @returns 包含 RGBA 值的数组 [R, G, B, A]
 */
declare function color2rgba(
  color: string,
  a?: number
): [number, number, number, number];

export default color2rgba;
