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
				 
				 $("#box12").append('<div class="obj_zi">'+obj.username+"收到的订单"+'</div>');
				 
				 $.ajax({
					      type:"POST",
						  url:"../php/fahuo_index.php",
						  data:{username:obj.username},
						  success: function(data){
							 if(data){
								 
                               var abj = JSON.parse(data);
							   for(var i=0;i<abj.length;i++){
								  
							      var listItem='<div id='+abj[i].id+' class="fahuo_goods_box"></div>';
								  
								  $("#box13").append(listItem);
								  
								  
								  $("#"+abj[i].id).append('<div>'+'<img src='+abj[i].picture+' class="fahuo_goods_picture">'+'</div>');
								  
								  
								  $("#"+abj[i].id).append('<div class="fahuo_goodsname">'+abj[i].goodsname+'</div>');
								  
								  $("#"+abj[i].id).append('<div class="fahuo_price"> '+"￥"+abj[i].price +"（单件）"+' </div>');
								  
								  $("#"+abj[i].id).append('<div class="fahuo_size">'+"尺码: "+abj[i].size+'</div>');
								   
								   
								  $("#"+abj[i].id).append('<div class="fahuo_number">'+"购买数量: 1"+'</div>');
								  
								  
								  $("#"+abj[i].id).append('<div class="fahuo_buyer"> '+ "买家: "+abj[i].buyer+' </div>');
								  
								  $("#"+abj[i].id).append('<div class="fahuo" onClick="click_fahuo('+abj[i].id+')"><span class="fahuo_zi">点击发货</span></div>');
								  
								  
								  $("#"+abj[i].id).append('<div class="fahuo_address">'+"收货地址: "+abj[i].shouhuo_address+'</div>');
								  
								  $("#"+abj[i].id).append('<div class="lianxi_phone">'+ "联系电话: "+abj[i].lianxi_phone+'</div>');
								  
							   }
							  
							 }
							 else{
								  alert("发货完毕!");
								  window.location.href="../html/mysteam.php";
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


var click_fahuo = function(obj){
	//alert(obj);
	$.ajax({
		     type:"POST",
			 url:"../php/had_bought_update.php",
			 data:{id:obj},
			 success: function(){
				alert("发货成功!");
				window.location.href="../html/fahuo_index.php";
			 },
			 error: function(){
				 alert("had_bought_update error!");
			 }
	      });
		  
};
