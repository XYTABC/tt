$(function(){
	$('.shang li').mouseover(function(){
		$(this).css('border', '1px solid #d4d4d4')
		$(this).children('.code').css('display', 'block');
	})
	$('.shang li').mouseleave(function(){
		$(this).css('border', '1px solid transparent');
		$(this).children('.code').css('display', 'none');
	})
})