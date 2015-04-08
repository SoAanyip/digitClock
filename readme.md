digitClock.js
===================================
基于canvas特效的数字时钟
----------------------------------- 
[观看演示页面](http://soaanyip.github.io/presents/digitClock.html)
----------------------------------- 
### v0.1.0  
### author by So Aanyip

		digitClock是一个绘制在canvas上的数字时钟，在时间改变的时候会伴随着彩色小球跳动散开的效果。

		最简单用法：
		digitClock.clock(document.getElementById('wrap'));


		digitClock.clock = function(element,fontColor,colorArr){
		@param  {HTMLElement} element   包含着时钟canvas的dom元素
		@param  {String} fontColor 时钟字体颜色，默认为#ff0
		@param  {Array} colorArr  时钟跳出小球的颜色数组
	
