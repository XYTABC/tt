/*
* @Author: hp
* @Date:   2019-08-23 14:02:06
* @Last Modified by:   hp
* @Last Modified time: 2019-08-23 14:19:22
*/
$(function(){
	$('.ser li').mouseenter(function(event) {
		$(this).children('a').addClass('active').parents().siblings('li').children('a').removeClass('active')
		
	});
})