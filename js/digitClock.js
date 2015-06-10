/**
 * digitClock.js v0.1.0
 * author by So Aanyip
 * 8th Apr 2015
 */
(function(window){
	"use strict";
	var digitClock = {};
	var digit =[[[0,0,1,1,1,0,0],[0,1,1,0,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,0,1,1,0],[0,0,1,1,1,0,0]
        ],[[0,0,0,1,1,0,0],[0,1,1,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[1,1,1,1,1,1,1]
        ],[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,1,1,0,0,0],[0,1,1,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,0,0,1,1],[1,1,1,1,1,1,1]
        ],[[1,1,1,1,1,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,1,1,1,0,0],[0,0,0,0,1,1,0],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]
        ],[[0,0,0,0,1,1,0],[0,0,0,1,1,1,0],[0,0,1,1,1,1,0],[0,1,1,0,1,1,0],[1,1,0,0,1,1,0],[1,1,1,1,1,1,1],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,1,1,1,1]
        ],[[1,1,1,1,1,1,1],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,1,1,1,1,0],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]
        ],[[0,0,0,0,1,1,0],[0,0,1,1,0,0,0],[0,1,1,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]
        ],[[1,1,1,1,1,1,1],[1,1,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0]
        ],[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]
        ],[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,1,1,0,0,0,0]
        ],[[0,0,0,0],[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0],[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0],[0,0,0,0]
        ]];
    /**
     * 启动方法
     * @param  {HTMLElement} element   包含着时钟canvas的dom元素
     * @param  {String} fontColor 时钟字体颜色，默认为#ff0
     * @param  {Array} colorArr  时钟跳出小球的颜色数组
     */
	digitClock.clock = function(element,fontColor,colorArr){
		if(!element) return;
		var fontColor = fontColor || '#ff0';
		var colorArr = colorArr || ['#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80','#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa','#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050','#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'];
		var canvas = document.createElement('canvas');
		canvas.width = parseInt(getRealStyle(element,'width'));
		canvas.height = parseInt(getRealStyle(element,'height'));
		element.appendChild(canvas);
		if(canvas.getContext('2d')){
			var context = canvas.getContext('2d');
		}else{
			canvas.innerHTML = '您的浏览器不支持canvas标签！';
			return;
		}
		digitClock.msg = packMsg(element,canvas,fontColor,colorArr);
		setTimeout(function(){
			render(context,digitClock.msg);
		},0);
		digitClock.clockInterval = setInterval(function(){
			update(digitClock.msg);
			render(context,digitClock.msg);
		},50);
	}
	/**
	 * 提供时钟的停止方法（数字跟小球都停止）
	 */
	digitClock.stopClock = function(){
		clearInterval(digitClock.clockInterval);
	}
	/**
	 * 改变时钟数字的颜色
	 * @param  {String} color 颜色字符串
	 */
	digitClock.changeColor = function(color){
		if(!color) return;
		digitClock.msg.fontColor = color;
	}
	/**
	 * 获取元素真实css属性
	 * @param  {HTMLElement} element   dom元素
	 * @param  {String} styleName css样式名字
	 */
	function getRealStyle(element,styleName){
		var realStyle = null;
		if(element.currentStyle) realStyle = element.currentStyle[styleName];
		else if(window.getComputedStyle) realStyle = window.getComputedStyle(element,null)[styleName];
		return realStyle;
	}
	/**
	 * 包装过程所需信息
	 * @param  {HTMLElement} element   dom元素
	 * @param  {HTMLElement} can       canvas元素
	 * @param  {String} fontColor 时钟字体颜色，默认为#ff0
     * @param  {Array} colorArr  时钟跳出小球的颜色数组
	 */
	function packMsg(element,can,fontColor,colorArr){
		var msg = {};
		msg.curTime = getCurTime();
		msg.RADIUS = Math.round(can.width*4/5/108)-1;
		msg.left = Math.round(can.width/10);
		msg.top = Math.round(can.height/10);
		msg.elm = element;
		msg.can = can;
		msg.balls = [];
		msg.colors = colorArr;
		msg.fontColor = fontColor;
		return msg;
	}
	/**
	 * 进行一次绘制过程
	 * @param  {HTMLElement} can       canvas元素
	 * @param  {Object} msg 过程所需信息
	 */
	function render(con,msg){
		con.clearRect(0,0,con.canvas.width,con.canvas.height);
		var hours = parseInt(msg.curTime/3600),
			min = parseInt((msg.curTime-hours*3600)/60),
			sec = msg.curTime%60;
		con.fillStyle = msg.fontColor;	
		renderDigit(msg.left,msg.top,parseInt(hours/10),con,msg);
		renderDigit(msg.left+15*(msg.RADIUS+1),msg.top,parseInt(hours%10),con,msg);
		renderDigit(msg.left+30*(msg.RADIUS+1),msg.top,10,con,msg);
		renderDigit(msg.left+39*(msg.RADIUS+1),msg.top,parseInt(min/10),con,msg);
		renderDigit(msg.left+54*(msg.RADIUS+1),msg.top,parseInt(min%10),con,msg);
		renderDigit(msg.left+69*(msg.RADIUS+1),msg.top,10,con,msg);
		renderDigit(msg.left+78*(msg.RADIUS+1),msg.top,parseInt(sec/10),con,msg);
		renderDigit(msg.left+93*(msg.RADIUS+1),msg.top,parseInt(sec%10),con,msg);
		renderBall(con,msg.balls);
	}
	/**
	 * 绘制跳动的小球
	 * @param  {HTMLElement} can       canvas元素
	 * @param  {Array} balls 包含所有小球的数组
	 */
	function renderBall(con,balls){
		if(!balls) return;
		var ball = {};
		for(var i = 0,len=balls.length;i<len;i++){
			ball = balls[i];
			con.fillStyle = ball.color;
			con.beginPath();
			con.arc(ball.x,ball.y,ball.r,0,2*Math.PI,false);
			con.fill();
		}
	}
	/**
	 * 绘制数字时钟
	 * @param  {Number} x   单个数字的x坐标
	 * @param  {Number} y   单个数字的y坐标
	 * @param  {Number} num 绘制哪个数字
	 * @param  {HTMLElement} can       canvas元素
	 * @param  {Object} msg 过程所需信息
	 */
	function renderDigit(x,y,num,con,msg){
		for(var i = 0;i<digit[num].length;i++){
			for(var j = 0;j<digit[num][i].length;j++){
				if(digit[num][i][j] == 1){
					con.beginPath();
					con.arc(x+j*2*(msg.RADIUS+1)+(msg.RADIUS+1),y+i*2*(msg.RADIUS+1)+(msg.RADIUS+1),msg.RADIUS,0,2*Math.PI,false);
					con.fill();
				}
			}
		}
	}
	/**
	 * 时间变动时添加小球
	 * @param  {Number} x   单个数字的x坐标
	 * @param  {Number} y   单个数字的y坐标
	 * @param  {Number} num 绘制哪个数字
	 * @param  {Object} msg 过程所需信息
	 */
	function addBalls(x,y,num,msg){
		for(var i = 0;i<digit[num].length;i++){
			for(var j = 0;j<digit[num][i].length;j++){
				if(digit[num][i][j] == 1){
					var oneBall = {
						x:x+j*2*(msg.RADIUS+1)+(msg.RADIUS+1),
						y:y+i*2*(msg.RADIUS+1)+(msg.RADIUS+1),
						g:1.5+Math.random(),
						r:msg.RADIUS,
						vx:Math.pow(-1,Math.ceil(Math.random()*1000))*(Math.random()+2)*2,
						vy:(Math.random()+2)*-3,
						color:msg.colors[Math.floor(Math.random()*msg.colors.length)]
					}
					msg.balls.push(oneBall);
				}
			}
		}
	}
	/**
	 * 得到现在时间
	 */
	function getCurTime(){
		var now = new Date();
		var ret = now.getHours()*3600+now.getMinutes()*60+now.getSeconds();
		return ret;
	}
	/**
	 * 检查时间更新及小球位置更新的方法
	 * @param  {Object} msg 过程所需信息
	 */
	function update(msg){
		var realWidth = parseInt(getRealStyle(msg.elm,'width')),
			realHeight = parseInt(getRealStyle(msg.elm,'height'));
		if(realWidth !== msg.can.width || realHeight !== msg.can.height){
			msg.can.width = realWidth;
			msg.can.height = realHeight;
			updateWindow(msg);
		}
		updateBalls(msg);
		var nextTime = getCurTime();
		var	nextSec = nextTime%60,
			curSec = msg.curTime%60;
		if(nextSec !== curSec){
			var curHour = parseInt(msg.curTime/3600),
				curMin = parseInt((msg.curTime - curHour*3600)/60),
				nextHour = parseInt(nextTime/3600),
				nextMin = parseInt((nextTime - nextHour*3600)/60);
			if(parseInt(curHour/10) != parseInt(nextHour/10)){
				addBalls(msg.left+0,msg.top,parseInt(curHour/10),msg);
			}
			if(parseInt(curHour%10) != parseInt(nextHour%10)){
				addBalls(msg.left+15*(msg.RADIUS+1),msg.top,parseInt(curHour%10),msg);
			}
			if(parseInt(curMin/10) != parseInt(nextMin/10)){
				addBalls(msg.left+39*(msg.RADIUS+1),msg.top,parseInt(curMin/10),msg);
			}
			if(parseInt(curMin%10) != parseInt(nextMin%10)){
				addBalls(msg.left+54*(msg.RADIUS+1),msg.top,parseInt(curMin%10),msg);
			}
			if(parseInt(curSec/10) != parseInt(nextSec/10)){
				addBalls(msg.left+78*(msg.RADIUS+1),msg.top,parseInt(curSec/10),msg);
			}
			if(parseInt(curSec%10) != parseInt(nextSec%10)){
				addBalls(msg.left+93*(msg.RADIUS+1),msg.top,parseInt(curSec%10),msg);
			}

			msg.curTime = nextTime;
			return true;
		}
		return false;
	}
	/**
	 * 更新小球的位置
	 * @param  {Object} msg 过程所需信息
	 */
	function updateBalls(msg){
		if(!msg.balls) return;
		while(msg.balls.length>600){
			msg.balls.shift();
		}
		var thisBall = {};
		for(var i = 0,len = msg.balls.length;i<len;i++){
			thisBall = msg.balls[i];
			thisBall.x+=thisBall.vx;
			thisBall.y+=thisBall.vy;
			thisBall.vy+=thisBall.g;
			if(thisBall.y>=msg.can.height - thisBall.r){
				thisBall.y = msg.can.height - thisBall.r;
				var dec = thisBall.vy*0.6;
				if(dec>6){
					thisBall.vy = -thisBall.vy*0.6;
				}else{
					thisBall.vy = 0;
					Math.abs(thisBall.vx)<0.2?thisBall.vx=0 : 
					thisBall.vx>0? thisBall.vx-=0.1 : thisBall.vx+=0.1;
				}
			}
			if(thisBall.x<=thisBall.r || thisBall.x>=msg.can.width-thisBall.r){
				thisBall.vx = -thisBall.vx;
			}
		}
	}
	/**
	 * 在外层dom元素大小变化时改变canvas、时钟字体和小球大小
	 * @param  {Object} msg 过程所需信息
	 */
	function updateWindow(msg){
		msg.RADIUS = Math.round(msg.can.width*4/5/108)-1;
		msg.left = Math.round(msg.can.width/10);
		for(var i = 0,len = msg.balls.length;i<len;i++){
			msg.balls[i].r = msg.RADIUS;
		}
	}

	/*支持AMD规范*/
    if ( typeof define === "function" && define.amd) {
        define(function () { return digitClock; } );
    }else{
        window.digitClock = window.digitClock || digitClock;
    }

})(window)