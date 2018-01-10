// JavaScript Document

var mysteam_lock=false;
var yejiaolock=false;

$(document).ready(function() {
   $.ajax({
	         type:"GET",   //注意这里是GET，从别的url拿数据
	         url:"../php/index-trans.php",
			 success: function(data){
				 if(data){
					 
					 var obj=JSON.parse(data);
					 
					 $("#box10").html(" Welcome! "+obj.username).css("color","#C3C2C2");
					 
					 $("#headimg").attr("src",obj.headimg);
					 
					 yejiaolock=true;
					 
					 mysteam_lock=true;
					 
				 }
				 else{
					 $("#box10").html("你还没有登录呢").css("color","#D31619");
					 
					 $("#headimg").attr("src","../img/11.jpg");
					 
				 }
				 
				 if(yejiaolock==true){
		         $("#box6").css("display","none");
		         }
				 
				 $("#box12").append('<div>'+'<img src="'+obj.headimg+'" class="p_headimg">'+'</div>');
				 
				 $("#box12").append('<div class="obj_zi">'+obj.username+"的愿望单"+'</div>');
				 
				 $.ajax({
					      type:"POST",
						  url:"../php/yuanwangdan.php",
						  data:{username:obj.username},
						  success: function(data){
							  //alert(data);
                              var abj = JSON.parse(data);
							  for(var i=0;i<abj.length;i++){
								  
							      var listItem='<div id='+abj[i].goodsid+' class="yuanwangdan_goods_box"></div>';
								  
								  $("#box13").append(listItem);
								  
								  
								  $("#"+abj[i].goodsid).append('<div>'+'<img src='+abj[i].picture+' class="yuanwangdan_goods_picture">'+'</div>');
								  
								  
								  $("#"+abj[i].goodsid).append('<div class="yuanwangdan_goodsname">'+abj[i].goodsname+'</div>');
								  
								  $("#"+abj[i].goodsid).append('<div class="yuanwangdan_price"> '+"￥"+abj[i].price +' </div>');
								  
								  $("#"+abj[i].goodsid).append('<div class="yuanwangdan_size">'+"尺码: "+abj[i].size+'</div>');
								   
								  $("#"+abj[i].goodsid).append('<div class="yuanwangdan_description">'+ abj[i].description+'</div>');
								  
								  $("#"+abj[i].goodsid).append('<div class="yuanwangdan_time"> '+ "添加时间: "+abj[i].time+' </div>');
								  
								  $("#"+abj[i].goodsid).append('<div class="fukuan" onClick="click_fukuan('+abj[i].goodsid+')"><span class="fukuan_zi">为商品付款</span></div>');
								  
								  $("#"+abj[i].goodsid).append('<div class="jinru" onClick="click_jinru('+abj[i].goodsid+')"><span class="jinru_zi">进入商品主页</span></div>');
								  
								 
							  }
						  },
						  error: function(){
							  alert("my_attention_goods error!");
						  }
				       });
				 
			 },
			 error: function(){
				 alert("trans error!");
			 } 
			 
	       });
		     
});

var clickmysteam = function(){
  if(mysteam_lock==true){
	 window.location.href="../html/mysteam.php";
  }
  else{
     alert("你还没登录呢!");
  }
};

var clickevent0 = function(){
	$.ajax({ 
	         type:"GET",   //注意这里是GET！！POST会出问题
	         url:"../php/login_out.php",
			 success: function(){
				 window.location.href="index.php";
		     },
			 error: function(){
				 alert("loginout error!");
			 }
		  });
};

var click_jinru = function(obj){
     window.location.href="../html/goods_detail.php?goodsid="+obj;
};

var click_fukuan = function(obj){
	var x=$("#box10").text();
	x=x.substr(10);
	$.ajax({
		     type:"POST",
			 url:"../php/buy_goods.php",
			 data:{username:x,goodsid:obj},
			 success: function(data){
				//alert(data);
				alert("购买成功!");
			 },
			 error: function(){
				 alert("buy_goods error!");
			 }
	      });
};
