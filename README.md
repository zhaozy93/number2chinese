# number2chinese
convert number to chinese speech || 转换阿拉伯数字到汉语写法

ui需要 汉字的计数 怎么办？

* 第一步
* 第二步
* 第三步
* 第四步
* 第五步
* 第六步
* 第七步
* 剩余点卡： 三千七百零五点

```
import { number2chinese } from 'number2chinese';
// or import number2chinese from 'number2chinese'

for (let i = 0; i < 10; i++){
  return `第${number2chinese(i)}步`;
}
```