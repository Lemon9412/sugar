/**
 *商店获取json数据 
 * shop_index.html
 */
/*图片轮播数据*/
jQuery(function() {
	/*图片轮播数据*/
	/*jQuery.get("json/shop.json",{},function(data){
		data=JSON.parse(data);
		for (var i = 0; i<data.length;i++) {
	                var div = jQuery('<div class="swiper-slide"><img src="'+data[i].url+'"></div>');
                    jQuery(".swiper-wrapper").append(div);
                }
	});*/
	 /*商品中间八类选择*/
	jQuery.get("json/shop_class.json",{},function(data){
		data=JSON.parse(data);
			for (var i = 0; i<data.length; i++) {
		        var div = jQuery('<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a onclick=" '+data[i].onclick+' "><span><img src="'+data[i].url+'"/></span><div class="mui-media-body">'+data[i].inner+'</div></a></li>');
		        jQuery(".shop_class").append(div);
		
		}
	});
	 /*超值折扣*/
    $.ajax({
        url: "/discount",
        dataType: "json",
        success:function(data) {
            console.log(data);
            for (var i = 0; i<data.length; i++) {
                var li = jQuery('<li class="mui-table-view-cell mui-media mui-col-xs-4"><a onclick="'+data[i].onclick+'"><img class="mui-media-object" src="'+data[i].url+'"><div class="mui-media-body">'+data[i].inner1+'</div><div class="mui-media-body"><span class="swiper-slide_p2">'+'￥'+data[i].inner2+'</span><span class="swiper-slide_span1">'+'￥'+data[i].inner3+'</span></div></a></li>');
                jQuery(".discount_json").append(li);

            }
        },
        error:function(xhr, type, errorThrown) {
            console.log(type);
        }
    });

	
	 /*商品专题*/
	jQuery.get("json/zhuanti.json",{},function(data){
		data=JSON.parse(data);
		for (var i = 0; i<data.length; i++) {
        var div = jQuery('<a onclick=" '+data[i].onclick+' "><li><img class="img mid_img" src="'+data[i].url+'" /></li><li><p class="f_black">'+data[i].inner1+'</p></li><li><p class="f_12">'+data[i].inner2+'></p></li><hr class="zhuantiHr" /></a>');
        jQuery(".zhuanti").append(div);
		
		}
	});
	
	/*护肤数据*/
	jQuery.get("json/hufu.json",{},function(data){
		data=JSON.parse(data);
		for (var i = 0; i<data.length;i++) {
            var ul = jQuery('<li><a onclick=" '+data[i].onclick+' "><img class="img" src="'+data[i].url+'"></a><p id="p1">'+data[i].inner1+'</p><p id="p2">'+data[i].inner2+'</p><p id="p4">￥ '+data[i].inner4+'</p><p id="p3">已售 '+data[i].inner3+'</p></li>');
        	jQuery(".class_hf").append(ul);
		
		}
	});
	
//-------
})
		
/*-----------------------*/
var shop_banner = [
    {imageId:1,url:'img/shop_banner1.jpg'},
    {imageId:2,url:'img/shop_banner2.jpg'},
    {imageId:3,url:'img/shop_banner3.jpg'}
]
 for (var i = 0; i<shop_banner.length; i++) {
        var div = jQuery('<div class="swiper-slide"><img src="'+shop_banner[i].url+'"> </div>');
        jQuery(".top-wrapper").append(div);

}
 /*-----------------------*/
 /*商品中间八类选择*/
/*var shop_class = [
    {imageId:1,url:'img/mid-class1.png',inner:'护肤',onclick:'class_hf()'},
    {imageId:2,url:'img/mid-class2.png',inner:'彩妆',onclick:'class_cz()'},
    {imageId:3,url:'img/mid-class3.png',inner:'个人护理',onclick:'class_huli()'},
    {imageId:4,url:'img/mid-class4.png',inner:'美食',onclick:'class_food()'},
    {imageId:5,url:'img/mid-class5.png',inner:'文具手帐',onclick:'class_wenju()'},
    {imageId:6,url:'img/mid-class6.png',inner:'家居',onclick:'class_jiaju()'},
    {imageId:7,url:'img/mid-class7.png',inner:'畅销单品',onclick:'class_danpin()'},
    {imageId:8,url:'img/mid-class8.png',inner:'全部分类',onclick:'class_all()'}
]

 for (var i = 0; i<shop_class.length; i++) {
        var div = jQuery('<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a onclick=" '+shop_class[i].onclick+' "><span><img src="'+shop_class[i].url+'"/></span><div class="mui-media-body">'+shop_class[i].inner+'</div></a></li>');
        jQuery(".shop_class").append(div);

}
*/
	

 /*商品会员折扣*/
/*var member = [
    {imageId:1,url:'img/discount1.png',inner1:'换季享不停',inner2:'119',inner3:'188'},
    {imageId:2,url:'img/discount2.png',inner1:'超人气洗护用品',inner2:'119',inner3:'188'},
    {imageId:3,url:'img/discount3.png',inner1:'美食',inner2:'119',inner3:'188'},
    {imageId:4,url:'img/discount4.png',inner1:'美食',inner2:'119',inner3:'188'},
    {imageId:5,url:'img/discount5.png',inner1:'文具手帐',inner2:'119',inner3:'188'},
    {imageId:6,url:'img/discount6.png',inner1:'家居',inner2:'119',inner3:'188'},
    {imageId:7,url:'img/discount7.png',inner1:'畅销单品',inner2:'119',inner3:'188'},
    {imageId:8,url:'img/discount8.png',inner1:'换季享不停',inner2:'119',inner3:'188'},
    {imageId:9,url:'img/discount9.png',inner1:'文具',inner2:'119',inner3:'188'}
]
 for (var i = 0; i<member.length; i++) {
        var div = jQuery('<div class="mui-slider-item mui-slider-item-duplicate"><ul class="mui-table-view mui-grid-view"><li class="mui-table-view-cell mui-media mui-col-xs-4"><a href="#"><img class="mui-media-object" src="'+member[i].url+'"><div class="mui-media-body">'+member[i].inner1+'</div><div class="mui-media-body"><span class="swiper-slide_p2">'+member[i].inner2+'</span><span class="swiper-slide_span1">'+member[i].inner3+'</span></div></a></li><li class="mui-table-view-cell mui-media mui-col-xs-4"><a href="#"><img class="mui-media-object" src="'+member[i].url+'"><div class="mui-media-body">'+member[i].inner1+'</div><div class="mui-media-body"><span class="swiper-slide_p2">'+member[i].inner2+'</span><span class="swiper-slide_span1">'+member[i].inner3+'</span></div></a></li><li class="mui-table-view-cell mui-media mui-col-xs-4"><a href="#"><img class="mui-media-object" src="'+member[i].url+'"><div class="mui-media-body">'+member[i].inner1+'</div><div class="mui-media-body"><span class="swiper-slide_p2">'+member[i].inner2+'</span><span class="swiper-slide_span1">'+member[i].inner3+'</span></div></a></li></ul></div>');
        jQuery(".discount").append(div);

}*/
/*-----------------------*/
 /*专题部分*/
/*var zhuanti = [
    {imageId:1,url:'img/zhuanti1.png',inner1:'全场满99元减5元，满159元减10元',inner2:'特惠团·第三期'},
    {imageId:2,url:'img/zhuanti2.png',inner1:'一本高颜值手账的诞生',inner2:'第十八期·生活家'},
    {imageId:3,url:'img/zhuanti3.png',inner1:'懒癌党的秋冬护肤心得',inner2:'抗燥保湿专场'},
    {imageId:4,url:'img/zhuanti4.png',inner1:'少女的睡前养护经',inner2:'身体护理专场'},
    {imageId:5,url:'img/zhuanti5.png',inner1:'如何过一个温暖干净的冬天？',inner2:'祛螨保温专场'},
    {imageId:6,url:'img/zhuanti6.png',inner1:'有了这些美炸天的文具，我睁开眼就要学习',inner2:'手账好物专场'},
    {imageId:7,url:'img/zhuanti7.png',inner1:'用厉害的原始技艺把家打扫的一尘不染',inner2:'艺之初手工家居专场'},
    {imageId:8,url:'img/zhuanti8.png',inner1:'杜绝闭口肆意横行',inner2:'日常去闭口专场'},
    {imageId:9,url:'img/zhuanti9.png',inner1:'摆脱干冷，办公室续命大法',inner2:'办公家居专场'},
    {imageId:10,url:'img/zhuanti10.png',inner1:'周一购物指南|折扣再多，值最重要',inner2:'第十五期·不二主义'},
    {imageId:11,url:'img/zhuanti11.png',inner1:'滋补有道 青春常驻',inner2:'女性保健品专场'},
    {imageId:12,url:'img/zhuanti12.png',inner1:'贵有贵的价值',inner2:'高品质单品专场'},
    {imageId:13,url:'img/zhuanti13.png',inner1:'幸福吃货的悠闲食光',inner2:'活力零食专场'}
    
]
 for (var i = 0; i<zhuanti.length; i++) {
        var div = jQuery('<li><img class="img mid_img" src="'+zhuanti[i].url+'" /></li><li><p class="f_black">'+zhuanti[i].inner1+'</p></li><li><p class="f_12">'+zhuanti[i].inner2+'></p></li><hr class="zhuantiHr" />');
        jQuery(".zhuanti").append(div);

}*/
 /*-----------------------*/
/*
 * 护肤模拟数据
 * class_hf.html
 * 
 * */
/*var class_hf = [
    {imageId:1,onclick:'hf_details()',url:'img/hufu5.png',inner1:'全家就靠这一瓶万用霜',inner2:'G&M绵羊脂深度滋润霜250g',inner3:'15758',inner4:'49'},
    {imageId:2,onclick:'hf_details()',url:'img/hufu6.png',inner1:'补水控油超清秀',inner2:'innisfree悦诗风吟绿茶精萃保湿洁面膏 150ml',inner3:'11543',inner4:'58'},
    {imageId:3,onclick:'hf_details()',url:'img/hufu1.png',inner1:'滋润美肌就这一瓶',inner2:'Loshi马油面霜 220ml',inner3:'10990',inner4:'32'},
    {imageId:4,onclick:'hf_details()',url:'img/hufu2.png',inner1:'控油镇定神仙水',inner2:'资生堂艳容露神仙水 150ml',inner3:'33045',inner4:'100'},
    {imageId:5,onclick:'hf_details()',url:'img/hufu3.png',inner1:'英国畅销品牌',inner2:'Boots博姿天然小黄瓜脸部磨砂膏 50ml',inner3:'17208',inner4:'29'},
    {imageId:6,onclick:'hf_details()',url:'img/hufu4.png',inner1:'滋润美肌就这一瓶',inner2:'Loshi马油面霜 220ml/瓶 共2瓶',inner3:'4909',inner4:'54'},
    {imageId:7,onclick:'hf_details()',url:'img/hufu7.png',inner1:'日本断货王',inner2:'Daiso保湿精华液 30ml/瓶 共2瓶',inner3:'309',inner4:'55'},
    {imageId:8,onclick:'hf_details()',url:'img/hufu8.png',inner1:'日本断货王',inner2:'Daiso保湿精华液 30ml/瓶',inner3:'531',inner4:'32'},
    {imageId:9,onclick:'hf_details()',url:'img/discount1.png',inner1:'连续10年Cosme No.1',inner2:'Unicharm超级省水化妆棉 共2盒',inner3:'12530',inner4:'43'},
    {imageId:10,onclick:'hf_details()',url:'img/discount2.png',inner1:'毛孔清道夫',inner2:'DMC黑里透白冻膜 225g',inner3:'7545',inner4:'99'},
    {imageId:11,onclick:'hf_details()',url:'img/discount3.png',inner1:'专属懒人的美肤圣品',inner2:'RENKOMAY格力面霜 15g',inner3:'12179',inner4:'55'},
    {imageId:12,onclick:'hf_details()',url:'img/discount8.png',inner1:'吸收超快 补水',inner2:'AHC B5玻尿酸爽肤水 120ml',inner3:'3162',inner4:'115'}
   
]

  for (var i = 0; i<class_hf.length;i++) {
            var ul = jQuery('<li><a onclick=" '+class_hf[i].onclick+' "><img class="img" src="'+class_hf[i].url+'"></a><p id="p1">'+class_hf[i].inner1+'</p><p id="p2">'+class_hf[i].inner2+'</p><p id="p4">￥ '+class_hf[i].inner4+'</p><p id="p3">已售 '+class_hf[i].inner3+'</p></li>');
        	jQuery(".class_hf").append(ul);
}*/
  
 /*-----------------------*/
/*
 * 彩妆模拟数据
 * class_cz.html
 * 
 * */
var class_cz = [
    {imageId:1,url:'img/caizhuang1.png',inner1:'Dr.jart+银管BB霜',inner2:'Dr.jart+银管BB霜 40g',inner3:'2712',inner4:'148'},
    {imageId:2,url:'img/caizhuang2.png',inner1:'8小时好气色',inner2:'peripera菲丽菲拉滴管墨水唇彩液 01#',inner3:'11821',inner4:'49'},
    {imageId:3,url:'img/caizhuang3.png',inner1:'全天都是0瑕疵',inner2:'Amore爱茉莉持久遮瑕液 1#',inner3:'1790',inner4:'39'},
    {imageId:4,url:'img/caizhuang4.png',inner1:'入门款养肤底妆',inner2:'REVLON露华精华粉底液 30ml',inner3:'2350',inner4:'95'},
    {imageId:5,url:'img/caizhuang5.png',inner1:'cosme No.1 双眼皮贴',inner2:'DUP Wonder隐形双眼皮贴粉色 120枚',inner3:'10749',inner4:'59'},
    {imageId:6,url:'img/caizhuang6.png',inner1:'新手神助攻眉笔',inner2:'SHISEIDO资生堂惹我眉笔咖啡色 共2支',inner3:'13190',inner4:'39'},
    {imageId:7,url:'img/caizhuang7.png',inner1:'岛国妹子人手一支',inner2:'CANMAKE井田高保湿防晒霜 30ml/瓶 共2瓶',inner3:'13201',inner4:'34'},
    {imageId:8,url:'img/caizhuang8.png',inner1:'防水神笔',inner2:'Daiso防水神笔 共2支',inner3:'845',inner4:'45'},
    {imageId:9,url:'img/caizhuang9.png',inner1:'眉毛超自然星人',inner2:'INTEGRAT立体三色眉粉 共2盒',inner3:'16325',inner4:'50'},
    {imageId:10,url:'img/caizhuang10.png',inner1:'cosme No.1 双眼皮贴',inner2:'DUP Wonder隐形双眼皮贴粉色 120枚',inner3:'12476',inner4:'76'},
    {imageId:11,url:'img/caizhuang11.png',inner1:'专属懒人的美肤圣品',inner2:'RENKOMAY格力面霜 15g',inner3:'12463',inner4:'85'},
    {imageId:12,url:'img/caizhuang12.png',inner1:'吸收超快 补水',inner2:'AHC B5玻尿酸爽肤水 120ml',inner3:'3586',inner4:'120'}
   
]

  for (var i = 0; i<class_cz.length;i++) {
            var ul = jQuery('<li><a><img class="img" src="'+class_cz[i].url+'"></a><p id="p1">'+class_cz[i].inner1+'</p><p id="p2">'+class_cz[i].inner2+'</p><p id="p4">￥ '+class_cz[i].inner4+'</p><p id="p3">已售 '+class_cz[i].inner3+'</p></li>');
        	jQuery(".class_cz").append(ul);
}
  
 /*-----------------------*/
/*
 * 个人护理模拟数据
 * class_huli.html
 * 
 * */
var class_huli = [
    {imageId:1,url:'img/huli1.png',inner1:'韩国宫廷的美发秘方',inner2:'Ryo吕参宝防脱洗发水套盒白色 400ml+180ml',inner3:'6478',inner4:'115'},
    {imageId:2,url:'img/huli2.png',inner1:'和尴尬说再见',inner2:'Schick舒芙剃毛刀 粉色',inner3:'6247',inner4:'65'},
    {imageId:3,url:'img/huli3.png',inner1:'日本销量第一',inner2:'KOSE高丝不含硅洗发水 蓝色新花香',inner3:'1790',inner4:'56'},
    {imageId:4,url:'img/huli4.png',inner1:'让笑容更自信',inner2:'SELESONA声波震动牙刷(送三个替换刷头) 蓝色',inner3:'2350',inner4:'85'},
    {imageId:5,url:'img/huli5.png',inner1:'日本销量第一',inner2:'KOSE高丝不含硅洗发水 紫色甜美果香',inner3:'9695',inner4:'68'},
    {imageId:6,url:'img/huli6.png',inner1:'蜜糖磨砂',inner2:'SOAP&GLORY 黑加仑身体磨砂膏 300g',inner3:'6784',inner4:'105'},
    {imageId:7,url:'img/huli7.png',inner1:'呵护身体每一个细节',inner2:'Lucky Trendy玫瑰美白保湿脚模 共2对',inner3:'13201',inner4:'34'},
    {imageId:8,url:'img/huli8.png',inner1:'小清新沐浴露',inner2:'Elizabeth Arden雅顿绿茶沐浴露 500ml',inner3:'845',inner4:'45'},
    {imageId:9,url:'img/huli9.png',inner1:'韩国医美推荐',inner2:'VANT36.5五天假美白牙膏黑色 50g',inner3:'8917',inner4:'50'},
    {imageId:10,url:'img/huli10.png',inner1:'高颜值虐汪刷',inner2:'Think your tooth软毛情侣牙刷 绿色',inner3:'14929',inner4:'28'},
    {imageId:11,url:'img/huli11.png',inner1:'美背养成必备',inner2:'Neutrogena葡萄柚水沐浴露 250ml',inner3:'12463',inner4:'85'},
    {imageId:12,url:'img/huli12.png',inner1:'吸收超快 补水',inner2:'Ryo控油去屑洗发水套装 绿色 400ml+180ml',inner3:'3586',inner4:'120'}
   
]

  for (var i = 0; i<class_huli.length;i++) {
            var ul = jQuery('<li><a><img class="img" src="'+class_huli[i].url+'"></a><p id="p1">'+class_huli[i].inner1+'</p><p id="p2">'+class_huli[i].inner2+'</p><p id="p4">￥ '+class_huli[i].inner4+'</p><p id="p3">已售 '+class_huli[i].inner3+'</p></li>');
        	jQuery(".class_huli").append(ul);
}
  
 /*-----------------------*/
/*
 * 美食模拟数据
 * class_food.html
 * 
 * */
var class_food = [
    {imageId:1,url:'img/food1.png',inner1:'边吃边瘦',inner2:'NISSIN 抹茶水果燕麦片 200g',inner3:'16835',inner4:'28'},
    {imageId:2,url:'img/food2.png',inner1:'绵软口感 甜入心扉',inner2:'LOTTE乐天软糖 牛奶味 63g/包',inner3:'34375',inner4:'10.9'},
    {imageId:3,url:'img/food3.png',inner1:'蛋卷界的网红',inner2:'Dasses三立奶香蛋卷 90g',inner3:'18790',inner4:'35'},
    {imageId:4,url:'img/food4.png',inner1:'超顺滑的醇香奶茶',inner2:'AGF Blendy抹茶拿铁 105g',inner3:'2350',inner4:'85.5'},
    {imageId:5,url:'img/food5.png',inner1:'全球人气泡面',inner2:'MAMA妈妈绿咖喱杯面 60g/杯',inner3:'16100',inner4:'10.9'},
    {imageId:6,url:'img/food6.png',inner1:'酥脆香甜入口即化',inner2:'LUXWAY 乐卡斯爆浆威化卷 巧克力味 180g',inner3:'26299',inner4:'12.8'},
    {imageId:7,url:'img/food7.png',inner1:'澳洲NO.1 乳品',inner2:'Devondale德运高钙全脂奶粉 1000g',inner3:'13201',inner4:'188'},
    {imageId:8,url:'img/food8.png',inner1:'不加糖的健康果干',inner2:'Nestor乐事多西梅果干 454g',inner3:'11845',inner4:'45'},
    {imageId:9,url:'img/food9.png',inner1:'吃葡萄不吐葡萄皮',inner2:'Nestor乐事多无籽葡萄干 454g',inner3:'14069',inner4:'38'},
    {imageId:10,url:'img/food10.png',inner1:'看得见的新鲜美味',inner2:'一番纯天然大湖草莓干 100g/包 共3包',inner3:'13877',inner4:'38'},
    {imageId:11,url:'img/food11.png',inner1:'女性吃货的福音',inner2:'ICA有机蔓越莓干 150g',inner3:'12463',inner4:'45'},
    {imageId:12,url:'img/food12.png',inner1:'舌尖上化开的美味',inner2:'Dasses三立抹茶夹心饼干 90g',inner3:'13586',inner4:'50'}
   
]

  for (var i = 0; i<class_food.length;i++) {
            var ul = jQuery('<li><a><img class="img" src="'+class_food[i].url+'"></a><p id="p1">'+class_food[i].inner1+'</p><p id="p2">'+class_food[i].inner2+'</p><p id="p4">￥ '+class_food[i].inner4+'</p><p id="p3">已售 '+class_food[i].inner3+'</p></li>');
        	jQuery(".class_food").append(ul);
}
  
 /*-----------------------*/
/*
 * 文具手账模拟数据
 * class_wenju.html
 * 
 * */
var class_wenju = [
    {imageId:1,url:'img/wenju1.png',inner1:'可以收藏的橡皮擦',inner2:'iwako岩泽立体趣味橡皮擦套装 甜点',inner3:'16835',inner4:'28'},
    {imageId:2,url:'img/wenju2.png',inner1:'擦的最干净的可擦笔',inner2:'百乐子弹头0.5mm可擦性水笔  红色',inner3:'34375',inner4:'10.9'},
    {imageId:3,url:'img/wenju3.png',inner1:'新一代国民钢笔',inner2:'KACO SKY 百锋国民钢笔 EF白色',inner3:'18790',inner4:'35'},
    {imageId:4,url:'img/wenju4.png',inner1:'轻松彰显小众高逼格',inner2:'LAMY狩猎系列F尖钢笔亮黑色 (赠吸墨器)',inner3:'2350',inner4:'85.5'},
    {imageId:5,url:'img/wenju5.png',inner1:'轻松彰显小众高逼格',inner2:'LAMY狩猎系列F尖钢笔亮黄色 (赠吸墨器)',inner3:'3257',inner4:'155'},
    {imageId:6,url:'img/wenju6.png',inner1:'轻松彰显小众高逼格',inner2:'LAMY狩猎系列F尖钢笔法拉利红 (赠吸墨器)',inner3:'3333',inner4:'155'},
    {imageId:7,url:'img/wenju7.png',inner1:'轻松彰显小众高逼格',inner2:'LAMY狩猎系列F尖钢笔自信透明 (赠吸墨器)',inner3:'13201',inner4:'188'},
    {imageId:8,url:'img/wenju8.png',inner1:'处女座最爱',inner2:'VPACK收纳盒+笔筒套装 珊瑚红',inner3:'11845',inner4:'45'},
    {imageId:9,url:'img/wenju9.png',inner1:'顺滑流畅 一写到底',inner2:'Dailylike0.38mm中性笔 火烈鸟 2支装',inner3:'32356',inner4:'19'},
    {imageId:10,url:'img/wenju10.png',inner1:'送自己的一封情书',inner2:'iconic礼物信封套装 白色小花+鸟',inner3:'39877',inner4:'14'},
    {imageId:11,url:'img/wenju11.png',inner1:'可以收藏的橡皮擦',inner2:'iwako岩泽立体趣味橡皮擦套装 森林小伙伴',inner3:'32463',inner4:'45'},
    {imageId:12,url:'img/wenju12.png',inner1:'铅笔也能鲜亮亮',inner2:'PILOT百乐可擦彩色自动铅笔 粉色笔+粉色笔芯',inner3:'23586',inner4:'20'}
   
]

  for (var i = 0; i<class_wenju.length;i++) {
            var ul = jQuery('<li><a><img class="img" src="'+class_wenju[i].url+'"></a><p id="p1">'+class_wenju[i].inner1+'</p><p id="p2">'+class_wenju[i].inner2+'</p><p id="p4">￥ '+class_wenju[i].inner4+'</p><p id="p3">已售 '+class_wenju[i].inner3+'</p></li>');
        	jQuery(".class_wenju").append(ul);
}
  
 /*-----------------------*/
/*
 * 文具手账模拟数据
 * class_wenju.html
 * 
 * */
var class_jiaju = [
    {imageId:1,url:'img/jiaju1.png',inner1:'手机变身艺术品',inner2:'木与石手绘iphone6/6s plus手机保护壳 熊',inner3:'19657',inner4:'28'},
    {imageId:2,url:'img/jiaju2.png',inner1:'手机变身艺术品',inner2:'木与石手绘iphone6/6s plus手机保护壳 花漾',inner3:'34375',inner4:'39'},
    {imageId:3,url:'img/jiaju3.png',inner1:'抗震小能手',inner2:'monopoly 旅行方针数码整理收纳包 S 珊瑚粉',inner3:'18790',inner4:'35'},
    {imageId:4,url:'img/jiaju4.png',inner1:'洁净芳香两不误',inner2:'小林制药水箱用洁厕灵 橘味 120g',inner3:'2350',inner4:'32'},
    {imageId:5,url:'img/jiaju5.png',inner1:'零度冰霜',inner2:'vatiri乐怡炫冰啤酒杯冷冻杯',inner3:'8169',inner4:'59'},
    {imageId:6,url:'img/jiaju6.png',inner1:'1分钟学会分身术',inner2:'Logitech罗技K380多功能蓝牙键盘 蓝色',inner3:'1981',inner4:'249'},
    {imageId:7,url:'img/jiaju7.png',inner1:'插线板整理专家',inner2:'inomata集线盒插 大号 黑色',inner3:'13201',inner4:'88'},
    {imageId:8,url:'img/jiaju8.png',inner1:'成熟的中性诱惑',inner2:'Japonica系列小浮雕玻璃杯香氛蜡烛 孟宗竹',inner3:'11845',inner4:'45'},
    {imageId:9,url:'img/jiaju9.png',inner1:'清新淡雅的纯洁少女',inner2:'Japonica系列小浮雕玻璃杯香氛蜡烛 莫氏兰',inner3:'5072',inner4:'116'},
    {imageId:10,url:'img/jiaju10.png',inner1:'音乐发烧友必备',inner2:'Beats UrBeats线控带麦入耳式耳机 黑色',inner3:'898',inner4:'548'},
    {imageId:11,url:'img/jiaju11.png',inner1:'运动配乐才带感',inner2:'Audio Technica铁三角挂耳式运动二级 浅绿色',inner3:'1215',inner4:'495'},
    {imageId:12,url:'img/jiaju12.png',inner1:'安睡好帮手',inner2:'VAPE 3倍效果无味驱蚊器 200日',inner3:'23586',inner4:'20'}
   
]

  for (var i = 0; i<class_jiaju.length;i++) {
            var ul = jQuery('<li><a><img class="img" src="'+class_jiaju[i].url+'"></a><p id="p1">'+class_jiaju[i].inner1+'</p><p id="p2">'+class_jiaju[i].inner2+'</p><p id="p4">￥ '+class_jiaju[i].inner4+'</p><p id="p3">已售 '+class_jiaju[i].inner3+'</p></li>');
        	jQuery(".class_jiaju").append(ul);
}
  
 /*-----------------------*/
/*
 * 畅销单品模拟数据
 * class_danpin.html
 * 
 * */
var class_danpin = [
    {imageId:1,url:'img/wenju2.png',inner1:'擦的最干净的可擦笔',inner2:'百乐子弹头0.5mm可擦性水笔  红色',inner3:'34975',inner4:'10.9'},
    {imageId:2,url:'img/jiaju2.png',inner1:'手机变身艺术品',inner2:'木与石手绘iphone6/6s plus手机保护壳 花漾',inner3:'34375',inner4:'39'},
    {imageId:3,url:'img/jiaju3.png',inner1:'抗震小能手',inner2:'monopoly 旅行方针数码整理收纳包 S 珊瑚粉',inner3:'18790',inner4:'35'},
    {imageId:4,url:'img/hufu2.png',inner1:'控油镇定神仙水',inner2:'资生堂艳容露神仙水 150ml',inner3:'26045',inner4:'100'},
    {imageId:5,url:'img/jiaju5.png',inner1:'零度冰霜',inner2:'vatiri乐怡炫冰啤酒杯冷冻杯',inner3:'28169',inner4:'59'},
    {imageId:6,url:'img/jiaju6.png',inner1:'1分钟学会分身术',inner2:'Logitech罗技K380多功能蓝牙键盘 蓝色',inner3:'21981',inner4:'249'},
    {imageId:7,url:'img/jiaju7.png',inner1:'插线板整理专家',inner2:'inomata集线盒插 大号 黑色',inner3:'33201',inner4:'88'},
    {imageId:8,url:'img/jiaju8.png',inner1:'成熟的中性诱惑',inner2:'Japonica系列小浮雕玻璃杯香氛蜡烛 孟宗竹',inner3:'21845',inner4:'45'},
    {imageId:9,url:'img/jiaju9.png',inner1:'清新淡雅的纯洁少女',inner2:'Japonica系列小浮雕玻璃杯香氛蜡烛 莫氏兰',inner3:'25072',inner4:'116'},
    {imageId:10,url:'img/jiaju10.png',inner1:'音乐发烧友必备',inner2:'Beats UrBeats线控带麦入耳式耳机 黑色',inner3:'21898',inner4:'548'},
    {imageId:11,url:'img/wenju11.png',inner1:'可以收藏的橡皮擦',inner2:'iwako岩泽立体趣味橡皮擦套装 森林小伙伴',inner3:'32463',inner4:'45'},
    {imageId:12,url:'img/wenju12.png',inner1:'铅笔也能鲜亮亮',inner2:'PILOT百乐可擦彩色自动铅笔 粉色笔+粉色笔芯',inner3:'23586',inner4:'20'}
   
]

  for (var i = 0; i<class_danpin.length;i++) {
            var ul = jQuery('<li><a><img class="img" src="'+class_danpin[i].url+'"></a><p id="p1">'+class_danpin[i].inner1+'</p><p id="p2">'+class_danpin[i].inner2+'</p><p id="p4">￥ '+class_danpin[i].inner4+'</p><p id="p3">已售 '+class_danpin[i].inner3+'</p></li>');
        	jQuery(".class_danpin").append(ul);
}
  
 /*-----------------------*/