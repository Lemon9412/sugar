/**
 *发现首页获取json数据 
 */
/*图片轮播数据*/
$(function() {
	$.get("json/index.json", {}, function(data) {
		data=JSON.parse(data);
		for(var i = 0; i < data.length; i++) {
			var div = $('<div class="swiper-slide">' +
				'<img src="' + data[i].url + '">' +
				'</div>');
			$(".swiper-wrapper").append(div);
		}
	});
});
