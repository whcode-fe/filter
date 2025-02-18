import { isNumber } from "@whcode/fe-utils";
import "@whcode/fe-calc";

/**
 * 千分位 过滤器
 * @param value key
 * @param precision 保留几位小数
 * @param fillZero 实际小数位小于precision时 是否补零
 * @param separator 分隔符
 */
export const thousands = function (
  value: number | string,
  precision: number = 2,
  fillZero: boolean = true,
  separator: string = ','
): string {
  let num: number = Number(value);

  // 判断是否为数字
  if (isNumber(num)) {
    let numStr = '';
    if (isNumber(precision)) {
      if (fillZero) {
        numStr = num.toFixedNew(precision).toString();
      } else {
        let decimals: string | number = String(num).split('.')[1];
        decimals = decimals ? decimals.length : 0;
        if (decimals > precision) {
          decimals = precision;
        }
        numStr = num.toFixedNew(decimals).toString();
      }
    } else {
      numStr = num.toString();
    }
    let parts = numStr.split('.');
    parts[0] = parts[0].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + (separator || ','));
    return parts.join('.');
  }
  return value as unknown as string;
};
