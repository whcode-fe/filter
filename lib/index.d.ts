/**
 * 千分位 过滤器
 * @param value key
 * @param precision 保留几位小数
 * @param fillZero 实际小数位小于precision时 是否补零
 * @param separator 分隔符
 */
export declare const thousands: (value: number | string, precision?: number, fillZero?: boolean, separator?: string) => string;
