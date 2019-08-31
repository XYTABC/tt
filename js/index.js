/*
* @Author: hp
* @Date:   2019-08-20 17:23:30
* @Last Modified by:   hp
* @Last Modified time: 2019-08-21 15:43:55
*/
$(function(){
	var num=0;
	var timer;
	function go(){
		clearInterval(timer);
		timer = setInterval(function(){
			num++;
			if(num==2){
                $('.dian a').eq(0).addClass('dd-red').siblings('a').removeClass('dd-red');
            }
			if(num>2){
				num=0;
			}
			$('.banner-tu li').eq(num).css('opacity', '1').siblings('li').css('opacity', '0');
			$('.dian a').eq(num).addClass('dd-red').siblings('a').removeClass('dd-red');
		},1000);
	}
	go();
	$('.cont-center').mouseenter(function(event) {
		clearInterval(timer);
		$('.cont-center .left1,.right1').css('display', 'block');
	});
	$('.cont-center').mouseleave(function(event) {
		go();
		$('.cont-center .left1,.right1').css('display', 'none');
	});
	$('.cont-center .left1').click(function(event) {
		num++;
		if(num>2){num=0;}
		$('.banner-tu li').eq(num).css('opacity', '1').siblings('li').css('opacity', '0');
		$('.dian a').eq(num).addClass('dd-red').siblings('a').removeClass('dd-red');
	});
	$('.cont-center .right1').click(function(event) {
		num--;
		if(num<0){num=2;}
		$('.banner-tu li').eq(num).css('opacity', '1').siblings('li').css('opacity', '0');
		$('.dian a').eq(num).addClass('dd-red').siblings('a').removeClass('dd-red');
	});



	
	$('.new ul li').mouseover(function(event) {
		$(this).css('border', '1px solid #ccc');
		$(this).children('.top-right').css('display', 'block');
	});
	$('.new ul li').mouseleave(function(event) {
		$(this).css('border', '1px solid #fff');
		$(this).children('.top-right').css('display', 'none');
		
	});




	//倒计时
	var intDiff = parseInt(600000);//倒计时总秒数量
	//function timer(intDiff){
		setInterval(function(){
			var day=0,
			    house=0,
			    minute=0,
			    second=0;
			if(intDiff > 0){
				day = Math.floor(intDiff / (60*60*24));
				hour = Math.floor(intDiff / (60*60)) - (day*24);
				minute = Math.floor(intDiff / 60) - (day*24*60) - (hour*60);
				second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
			}
			if (minute <= 9) minute = '0' + minute;
			if (second <= 9) second = '0' + second;
			$('.day_show').html(day);
			$('.hour_show').html(hour);
			$('.minute_show').html(minute);
			$('.second_show').html(second);
			console.log(second)
			intDiff--;
		},1000);

})