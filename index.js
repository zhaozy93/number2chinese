/**
 * 阿拉伯数字转为汉字 仅支持万亿以下 不支持小数
 * 11  --> 十一
 * 111  --> 一百一十一
 * 1111  --> 一千一百一十一
 * 1101  --> 一千一百零一
 */
function convertNumToChinese(_num){
  let units = ['', '万', '亿'];
  let _units = ['千', '百', '十', ''];
  let zero2Nine = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  let num = parseInt(_num);
  if (isNaN(num)){
    return '请传入正确的整数';
  }
  num = num.toString().split('').reverse().join('');
  let unitsLen = units.length;
  let numLen = num.length;
  if (numLen > unitsLen * 4){
    return '请不要传入过大的数字';
  }
  let str = '';
  for (let i = 0; i < numLen / 4; i++){
    let __num = num.slice(i * 4, i * 4 + 4).split('').reverse().join('');
    if (__num === '0000'){
      continue;
    }
    let __str = '';
    for (let j = 0; j < __num.length; j++){
      let currentNum = zero2Nine[parseInt(__num[j])];
      let currentUnit = _units[j + 4 - __num.length];
      if (currentNum === '零' && currentUnit === ''){
        continue;
      } else {
        __str += currentNum + currentUnit;
      }
    }
    str = __str + units[i] + str;
  }
  return str.replace(/零[\D]/g, '@').replace(/[@]+/g, '@').replace(/@$/, '').replace(/@([万亿]+)/,'$1').replace(/@/g,'零');
}

export let number2chinese = convertNumToChinese;
export default number2chinese = convertNumToChinese;
