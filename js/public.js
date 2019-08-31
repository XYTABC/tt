$(function(){

	$('.mainNav ul li').click(function(event) {
		$(this).children('a').addClass('red').parents('').siblings('li').children('a').removeClass('red');
          
	});
	var timer;
	var num=0;
	function go(){
		timer=setInterval(function(){
			num++;
			if(num>2){
				$('.ul').css('top', '0px');
				num=1;
			}
			$('.ul').animate({'top':-19*num+'px'},500);

		},1000);
	}
	go();
	$('.biao').mouseover(function(event) {
		clearInterval(timer);
	});
	$('.biao').mouseleave(function(event) {
		go();
	});
})