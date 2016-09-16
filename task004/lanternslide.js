$(function(){
	
	var width = $(".wrap").width();
	var i=0;
	changeCircle(i);
	
	//滑动事件
	$(".pic").html($(".pic").html()+$(".pic").html());
	function slide(index){
		i++;
		$(".pic").animate({"left":-i*width},function(){
			if(i==4){
				i=0;
				$(".pic").css({left:"0"});
				changeText(i);
				changeCircle(i);
			}
		});
		changeText(i);
		changeCircle(i);
	}
		timer = setInterval(slide,2000);
		
	//图片text对应
	function changeText(i){
		$(".text li").css({display:"none"});
		$(".text li").eq(i).css({display:"block"});
	}
	
	//点击左右箭头触发事件
	$("#arr_l").click(function(){
		
		clearInterval(timer);
		i--;console.log(i);
		if(i==-1){
			i=3;
			$(".pic").css({"left":-4*width});
			changeText(i);
			changeCircle(i);
		}
		$(".pic").animate({"left":-i*width})
		changeText(i);
		changeCircle(i);
		timer = setInterval(slide,2000);
	})
	
	$("#arr_r").click(function(){
		clearInterval(timer);
		i++;
		$(".pic").animate({"left":-i*width},function(){
			if(i==4){
				i=0;
				$(".pic").css({left:"0"});
				changeText(i);
				changeCircle(i);
			}
		})
		changeText(i);
		changeCircle(i);
		timer = setInterval(slide,2000);
	})
	
	//圆圈切换
	function changeCircle(i){
		$(".num li").eq(i).addClass("on").siblings("li").removeClass("on");
	}
	
	$(".num li").click(function(){
		clearInterval(timer);
		var index = $(this).index();
		$(".pic").animate({"left":-width*index },1000)
		changeCircle(index);
		changeText(index);
		timer = setInterval(function(){
			slide(index);
		},2000);
	})
	
	//窗口滚动
	$(window).scroll(function(){ 
		var header = $(".header").offset().top;
		var home= $(".home").offset().top;
		var work= $(".content").offset().top;
		var contact = $(".footer").offset().top;
		var home = parseInt(home - header) ;
		var work = parseInt(work - header);
		var contact = parseInt(contact - header);
		var scoll = parseInt($(window).scrollTop());
		if(scoll < work && scoll >= home){
			$(".head li:nth-child(1)").children().addClass("active").parent().siblings().children().removeClass("active");
		}else if(scoll >= work && scoll < contact){
			$(".head li:nth-child(2)").children().addClass("active").parent().siblings().children().removeClass("active");
		}else if(scoll >= contact){
			$(".head li:nth-child(3)").children().addClass("active").parent().siblings().children().removeClass("active");
		}//索引是从父级找排第几
	});
	//鼠标移上效果
	$(".head li").mouseover(function(){
		$(this).children().addClass("active").parent().siblings().children().removeClass("active");
	});
	//点击导航跳到相应位置
	$(".head li").click(function(e){
		var index =$(this).index();
		console.log(index);
		$(this).children().addClass("active").parent().siblings().children().removeClass("active");
		var header = $(".header").outerHeight(true);
		switch(index){
			case 0:
			var home = parseInt($(".home").offset().top - header)
			$("body,html").animate({scrollTop:home},100); 
 			break;
			case 1:
			var work = parseInt($(".content").offset().top - header)
			$("body,html").animate({scrollTop:work},100); 
			console.log($(".content").offset().top);
			break;
			case 2:
			var contact = parseInt($(".footer").offset().top - header)
			$("body,html").animate({scrollTop:contact},100); 
			break;
		}
	});

	// //鼠标移到content上的样式
	$(".content a").mouseover(function(){
		// debugger;
		var index=$(this).index();
		// alert(index);
		// console.log($(this));
		if(this>".iconindex"){
		    $(".iconindex:eq("+index+")").css("display","block");
			}
	});

	$(".content a").mouseout(function(){
		// debugger;
		var index=$(this).index();
		// alert(index);
		// console.log($(this));
		if(this>".iconindex"){
		    $(".iconindex:eq("+index+")").css("display","none");
		}
	});
	function change(){

	}
	$(window).ready(function(){
		var iWidth = $(".wrap").width(),
        iHeight = $(".wrap").height(),
        resSize = iWidth/640*300;
        console.log(resSize);
        $(".wrap").height(resSize);
        change();
	})
 	$(window).resize(function(){
 		var iWidth = $(".wrap").width(),
        iHeight = $(".wrap").height(),
        resSize = iWidth/640*300;
        console.log(resSize);
        $(".wrap").height(resSize);
        change();
 	});
 	change();
});

