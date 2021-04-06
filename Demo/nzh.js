var Nzh = require("nzh");
var nzhcn = require("nzh/cn"); //直接使用简体中文
var nzhhk = require("nzh/hk"); //繁体中文

// 转中文小写 >> 十万零一百一十一
console.log(nzhcn.encodeS(100111))

// 转中文大写 >> 壹拾万零壹佰壹拾壹
console.log(nzhcn.encodeB(100111))

// 科学记数法字符串 >> 十二万三千四百五十六万万七千八百九十万亿
console.log(nzhcn.encodeS("1.23456789e+21"))

// 转中文金额 >> 人民币壹拾万零壹佰壹拾壹元壹角壹分
console.log(nzhcn.toMoney("100111.11"))