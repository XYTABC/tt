/*
* @Author: hp
* @Date:   2019-08-23 16:02:09
* @Last Modified by:   hp
* @Last Modified time: 2019-08-23 17:48:48
*/
$(function(){
	$(window).scroll(function(event) {
		var h=$(window).scrollTop();
        if (h>780) {
        	$('.xq-title').css({
        		'position': 'fixed',
        		'top': '0px'
        	});
        	$('.zhj').css('display', 'block');
        	$('.jrgwc').css('display', 'block').siblings('span').hide();
        }else{
        	$('.xq-title').css({
        		'position': '',
        		'top': ''
        	});
        	$('.zhj').css('display', 'none');
        	$('.jrgwc').css('display', 'none').siblings('span').show();
        }
	});
	$('.xfbz ul li').mouseenter(function(event) {
		var cp=$(this).index()+1;
		$(this).children().addClass('no').parents().siblings().children().removeClass('no');
		$('.cp').css('background-image', 'url(../images/cp02_'+cp+'.jpg)');
	});


        //倒计时
        var intDiff = parseInt(600000);//倒计时总秒数量
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