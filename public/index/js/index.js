/*mui.ready(function(){
	mui.getJSON("Json/index.json",function(data){
		data=JSON.parse(data);
		var ul = document.getElementById("list");
		ul.innerHTML="";
		for (var i=0;i<data.length;i++) {
			var li = document.createElement("li");
			li.className="content";
			li.innerHTML='<a onclick="'+data[i].onclick+'">'+
				'<span class="word" >'+data[i].name+'</span>'+
				'<span class="word11 ">'+data[i].type+'</span>'+
				'<img src="'+data[i].img+'" class="img1"/>'
				ul.appendChild(li);
						
		}
	});
});

mui.ready(function(){
	mui.getJSON("json/food.json",function(data){
		var ul=document.getElementById("food_ul");
		ul.innerHTML="";
		for (var i=0;i<data.length;i++) {
			var li=document.createElement("li");
			li.className="content1";
			li.innerHTML='<div class="food_picture"><p>'+data[i].type+'</p></div><img src="'+data[i].img+'"class="img" />'
			+'<span class="food_span"><strong>'+data[i].name+'</strong></span><span class="food_span1">'+data[i].time+'</span>'+
					'<span class="food_ji">'+data[i].content+'</span>'
				ul.appendChild(li);
		}
	})
});*/
jQuery(function() {
		jQuery.get("json/index.json",{},function(data){
		data=JSON.parse(data);
			for (var i = 0; i<data.length; i++) {
		        var div = jQuery('<li class="content"><a onclick="'+data[i].onclick+'"><span class="word" >'+data[i].name+'</span><span class="word11 ">'+data[i].type+'</span><img src="'+data[i].img+'" class="img1"/></li>');
		        jQuery("#list").append(div);
		
		}
	});
	
		jQuery.get("json/food.json",{},function(data){
		data=JSON.parse(data);
			for (var i = 0; i<data.length; i++) {
		        var div = jQuery('<li class="content1"><div class="food_picture"><p>'+data[i].type+'</p></div><img src="'+data[i].img+'"class="img" />'
			+'<span class="food_span"><strong>'+data[i].name+'</strong></span><span class="food_span1">'+data[i].time+'</span>'+
					'<span class="food_ji">'+data[i].content+'</span></li>');
		        jQuery("#food_ul").append(div);
		
		}
	});
})