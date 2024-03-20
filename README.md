# 颜色转换工具

- 可以将 3/4/6/8 位的`十六进制`或者`RGB`颜色值转换为 `RGBA` 对应的`十进制`数值。

### 示例

- 接受两个参数

  - 第一个是颜色字符串，必填
  - 第二个是自定义透明度，非必填，支持 0-1 之间的小数，默认为 1

- 废话少说直接上代码

```javascript
import color2rgba from "color2rgba";
console.log(color2rgba("RGBA(223,123,0,0.45)")); // [223, 123, 0, 0.45]
console.log(color2rgba("RGB(123,223,0)")); // [123, 223, 0, 1]
console.log(color2rgba("RGB(0,123,223)", 0.3)); // [0, 123, 223, 0.3]
console.log(color2rgba("#FFF")); // [255, 255, 255, 1]
console.log(color2rgba("#FFF111")); // [255, 241, 17, 1]
console.log(color2rgba("#FFF111", 0.4)); // [255, 241, 17, 0.4]
console.log(color2rgba("#fff8")); // [255, 255, 255, 0.53]
console.log(color2rgba("#ffffff80")); // [255, 255, 255, 0.5]
console.log(color2rgba("#ffffff80", 0.3)); // [255, 255, 255, 0.3]
```
