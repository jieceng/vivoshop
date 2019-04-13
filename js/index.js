$(function(){
	//内容
	var classifyEl = $('.classify-content');
	//标题的高
	var classifyPH = classifyEl.children('p:first').outerHeight(true);
	//所有的ul
	var classifyList = classifyEl.children('ul');
	var totalH = 0;
	var classifyListData = [0,0];
	// 计算一个内容占的高
	for(var i=0;i<classifyList.length;i++){
		totalH += classifyList.outerHeight(true)+classifyPH;
		classifyListData[i+2] = totalH;
	}
	// 商品分类的tab选项卡
	$('.classify-nav ul').on('click','li',function(){
		var index = $(this).index();
		window.scrollTo({
			 top: classifyListData[index], 
			 behavior: "smooth"
		})
	})
	//tab选项卡随内容变换
	$(document).scroll(function(){
		var thisTop  = $(this).scrollTop();
		for(var i=0;i<classifyListData.length;i++){
			if(thisTop>=classifyListData[i]){
				$('.classify-nav li').eq(i).addClass('active').siblings().removeClass('active');
			}
		}
	})
	//
})