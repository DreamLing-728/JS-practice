[] == ![]
[] == !Boolean([])
[] == !true
[] == false
[].toString() == false
0 == false
false == false
true

{} == !{}
{} == !({}.toString())
{} == !(NaN)
{} == !Boolean(NaN)
{} == !false
{}.toString() == true
NaN == true
false == true

// 使用Boolean(value)方法可以强制转换任意值为boolean类型,除了以下六个值，其他都是自动转为true：

// undefined
// null
// -0
// +0
// NaN
// ‘’（空字符串）

https://blog.csdn.net/w993263495/article/details/85863054

1 == [1] true
1 == {1} false

