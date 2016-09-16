$(function(){
		$.each(city.typelist,function(i,data){
			$.each(data.sightList,function(k,date){
				$(".city:eq("+i+")").append("<div class='summer'><div class='img'><img src='citys/"+date.code+"/"+date.coverImg+"'></div>"
											+"<p class='area'>"+date.name+"</p>"
											+"<p class='detail'>"+date.summary+"</p>"
											+"</div>");
				  
			});
		
		});
		// var p1=parseInt($(".title1").offset().top);
		// var p2=parseInt($(".title2").offset().top);
		// var p3=parseInt($(".title3").offset().top); 
			// console.log(p2);
		var h=parseInt($(".citytravel").outerHeight(true));
	$(window).scroll(function(){
		var st=parseInt($(window).scrollTop());
			var p1=parseInt($(".title1").offset().top);
			
			var p2=parseInt($(".title2").offset().top);
			var p3=parseInt($(".title3").offset().top);
			if(st+h>p1&&st+h<p2){
				// console.log(st+h);
				$(".food").addClass("active").siblings().removeClass("active");
			}else if(st+h>=p2&&st+h<p3){
				console.log(p2);
				// console.log(st+h);
				$(".enjoy").addClass("active").siblings().removeClass("active");
			}else if(st+h>=p3){
				// console.log(st+h);
				$(".place").addClass("active").siblings().removeClass("active");
			}
	 	});
	 $(".banner div").click(function(){
	 		$(this).addClass("active").siblings().removeClass("active");
	 		 var index=$(this).index();
	 		 // var h=parseInt($(".citytravel").outerHeight(true));
	           switch(index){
	           	case 0:
	           		var top=parseInt($(".title1").offset().top);
	           		$("body,html").animate({
	           			scrollTop:top-h
	           		},100);
	           		break;
	           	case 1:
	           		var top=parseInt($(".title2").offset().top);
	 				$("body,html").animate({
	           			scrollTop:top-h
	           		},100);
	           		console.log(top);
	           		break;
	           	case 2:
	           		var top=parseInt($(".title3").offset().top);
	           		$("body,html").animate({
	           			scrollTop:top-h	
	           		},100);
	           		// console.log(top);
	           		break;
	           }
	 	});
	});

