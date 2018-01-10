// JavaScript Document

var yejiaolock=false;
var mysteam_lock=false;
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
		         
				 $.ajax({
			         type:"POST",
					 url:"../php/fahuo.php",
					 data:{username:obj.username},
					 success: function(data){
						 
						 if(data>0){
						 $("#box17").append('<div class="box17_ajax"><span>'+"你有"+data+"个发货通知"+'</span></div>');
						 }
						 else{
							 $("#box17").css("display","none");
						 }
						
					 },
					 error: function(){
						 alert("fahuo trans error!");
					 }
		         });
				 
				 $.ajax({
		                  type:"POST",
			              url:"../php/mysteam_p_file.php",
			              data:{username:obj.username},
			              success: function(data){
							  
						      var abj = JSON.parse(data);
			
							  $("#box12").append('<div> '+"<img src="+abj.headimg+" class='p_headimg'>" +' </div>');
							  
							  $("#box12").append('<div class="p_username" > '+abj.username+' <div>');
							  
							  
							  $("#box12").append('<div class="p_address"> '+abj.address+' </div>');
							  
							  $("#box12").append('<div class="p_anniu" onClick="click_p_file_change()"><span class="p_zi">编辑个人资料<span></div>');
							  
							  $("#box12").append('<div class="p_anniu2" onClick="click_yuanwangdan()"><span class="p_yuanwangdan">我的愿望单<span></div>');
							  
							  $("#box12").append('<div class="p_anniu3" onClick="click_guanzhu()"><span class="p_guanzhu">我的关注<span></div>');
					
						  },
			              error: function(){
				            alert("personal file trans error!");
			              }
	                   });

		      // alert(obj.username);
		         $.ajax({
						   type:"POST",
						   url:"../php/mysteam_lastest_buy.php",
						   data:{username:obj.username},
						   success: function(data){
							  //alert(data);
							  var bbj=JSON.parse(data);
							  for(var i=0;i<bbj.length;i++){
								  var p_lastest_buy_pic='<div class="p_lastest_buy_box" id='+bbj[i].goodsid+' onClick="clickevent(this)"><div>';
								  
								  $("#box15").append(p_lastest_buy_pic);
								  
								  
								  $("#"+bbj[i].goodsid).append('<div>'+"<img src="+bbj[i].picture+" class='p_lastest_buy_pic'>"+'</div>');
								  
							  }
							  
						  },
						  error: function(){
							  alert("user_lastest_buy trans error!");
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
	  alert("你还没登录呢");
	}
	
};
var clickevent0 = function(){
	$.ajax({ type:"GET",   //注意这里是GET！！POST会出问题
	         url:"../php/login_out.php",
			 success: function(){
				 window.location.href="index.php";
		     },
			 error: function(){
				 alert("loginout error!");
			 }
		  });
};

var clickevent = function(bbj){
	//alert("#"+bbj.id);
	var x=$("#box10").text();
	x=x.substr(10);
	$.ajax({
		     type:"POST",
			 url:"../php/mysteam_lastest_buy_file.php",
			 data:{goodsid: bbj.id,username:x},
			 success: function(data){
				 //alert(data);
				 $("#box16").empty();
				 var cbj=JSON.parse(data);
				 
				 $("#box16").append('<div class="mysteam_lastest_buy_file_goodsname"> '+"商品名称: "+cbj.goodsname +' </div>');
				 
				 $("#box16").append('<div class="mysteam_lastest_buy_file_price"> '+ "价格: ￥"+cbj.price+' </div>');
				 
				 $("#box16").append('<div class="mysteam_lastest_buy_file_size"> '+"尺码: "+cbj.size+' </div>');
				 
				 
				 $("#box16").append('<div class="mysteam_lastest_buy_file_description"> '+"商品简介: "+cbj.description+' </div>');
				 
				 $("#box16").append('<div class="mysteam_lastest_buy_file_number"> '+"购买总数: "+cbj.number+' </div>');
				 
				 $("#box16").append('<div class="mysteam_lastest_buy_file_time"> '+"最近一次购买时间: "+cbj.time+' </div>');
				 
				 
			 },
			 error: function(){
				 alert("mysteam_lastest_buy_file error!");
		     }
	      });
};

var clickevent1list = function(bbj){
	//alert("#"+bbj.id);
	$.ajax({
		     type:"POST",
			 url:"../php/mysteam_had_put_file.php",
			 data:{goodsid: bbj.id},
			 success: function(data){
				
				 $("#box16").empty();
				 var cbj=JSON.parse(data);
				 
				 $("#box16").append('<div class="mysteam_lastest_buy_file_goodsname"> '+"商品名称: "+cbj.goodsname +' </div>');
				 
				 $("#box16").append('<div class="mysteam_lastest_buy_file_price"> '+ "价格: ￥"+cbj.price+' </div>');
				 
				 $("#box16").append('<div class="mysteam_lastest_buy_file_size"> '+"尺码: "+cbj.size+' </div>');
				 
				 
				 $("#box16").append('<div class="mysteam_lastest_buy_file_description"> '+"商品简介: "+cbj.description+' </div>');
				 
				 $("#box16").append('<div class="mysteam_lastest_buy_file_number"> '+"上架数量: "+cbj.totalnumber+' </div>');
				 
				 $("#box16").append('<div class="mysteam_lastest_buy_file_time"> '+"上架时间: "+cbj.time+' </div>');
				 
				 
				 $("#box16").append('<div class="mysteam_lastest_buy_file_box" onClick="clickgenggai_goods('+bbj.id+')"><span class="mysteam_lastest_buy_file_box_zi">更改商品资料<span></div>');
				 
				 $("#box16").append('<div class="mysteam_lastest_sell" onClick="clickfabu()"><span class="mysteam_lastest_sell_zi">发布新产品<span></div>');
				 
			 },
			 
			 error: function(){
				 alert("mysteam_lastest_buy_file error!");
		     }
			 
	      });
};

var clickevent3list = function(bbj){
	//alert("#"+bbj.id);

	$.ajax({
		     type:"POST",
			 url:"../php/mysteam_had_sold_file.php",
			 data:{goodsid: bbj.id},
			 success: function(data){
				
				 $("#box16").empty();
				 var cbj=JSON.parse(data);
				 
				 $("#box16").append('<div class="mysteam_lastest_buy_file_goodsname"> '+"商品名称: "+cbj.goodsname +' </div>');
				 
				 $("#box16").append('<div class="mysteam_lastest_buy_file_price"> '+ "价格: ￥"+cbj.price+' </div>');
				 
				 $("#box16").append('<div class="mysteam_lastest_buy_file_size"> '+"尺码: "+cbj.size+' </div>');
				 
				 
				 $("#box16").append('<div class="mysteam_lastest_buy_file_description"> '+"商品简介: "+cbj.description+' </div>');
				 
				 $("#box16").append('<div class="mysteam_lastest_buy_file_number"> '+"销售量: "+cbj.had_sold+' </div>');
				 
				 $("#box16").append('<div class="mysteam_lastest_buy_file_rest"> '+"剩余量: "+cbj.rest+' </div>');
				 
			 },
			 
			 error: function(){
				 alert("mysteam_lastest_buy_file error!");
		     }
			 
	      });
};

var clickevent1 = function(obj){
	var x=$(".p_username").text();
	x=x.substr(1);
	//alert(x);
    $.ajax({
		     type:"POST",
			 url:"../php/mysteam_had_put.php",
			 data:{username: x},
			 success: function(data){
				 //alert(data);
				 if(data){//如果有货物，则列出
				 
				 $("#box15").empty();
				 $("#box16").empty();
				 
				 $("#box16").append('<span id="box16span">&nbsp;&nbsp;点击左侧商品图片即可查看相应信息</span>');
				 var bbj=JSON.parse(data);
							  for(var i=0;i<bbj.length;i++){
								  
								  var p_lastest_buy_pic='<div class="p_lastest_buy_box" id='+bbj[i].goodsid+' onClick="clickevent1list(this)"><div>';
								  
								  $("#box15").append(p_lastest_buy_pic);
								  
								  
								  $("#"+bbj[i].goodsid).append('<div>'+"<img src="+bbj[i].picture+" class='p_lastest_buy_pic'>"+'</div>');
								  
							  }
				 }
				 else{//如果没有货物，则显示上架新产品的按钮
				 $("#box15").empty();
				 
				 $("#box15").append('<div class="sell_goods_signal_span"><span >&nbsp;&nbsp你还没发布过任何商品噢<span></div>');
				 $("#box15").append('<div class="mysteam_lastest_sell2" onClick="clickfabu()"><span class="mysteam_lastest_sell_zi">发布新产品<span></div>');
				 
				 }
				 
			 },
			 
			 error: function(){
				 alert("mysteam_lastest_buy_file error!");
		     }
			 
	      });
		  $(obj).css("background-color","#67c1f5");
		  $(obj).css("color","#FFFFFF");
		  $("#ck3").css("background-color","#1e2d42");
	      $("#ck3").css("color","#4e96be");
		  $("#ck2").css("background-color","#1e2d42");
	      $("#ck2").css("color","#4e96be");
			  
};

var clickevent2 = function(obj){
	   var x=$(".p_username").text();
	   x=x.substr(1);
	  // alert(x);
	   $.ajax({
				type:"POST",
				url:"../php/mysteam_lastest_buy.php",
				data:{username:x},
				success: function(data){
					  
					$("#box15").empty();
					$("#box16").empty();
				    $("#box16").append('<span id="box16span">&nbsp;&nbsp;点击左侧商品图片即可查看相应信息</span>');
					var bbj=JSON.parse(data);
					for(var i=0;i<bbj.length;i++){
						var p_lastest_buy_pic='<div class="p_lastest_buy_box" id='+bbj[i].goodsid+' onClick="clickevent(this)"><div>';
								  
						$("#box15").append(p_lastest_buy_pic);
								  
								  
						$("#"+bbj[i].goodsid).append('<div>'+"<img src="+bbj[i].picture+" class='p_lastest_buy_pic'>"+'</div>');
								  
					}
							  
				},
				
				error: function(){
					alert("user_lastest_buy trans error!");
				}
				
	          });
			  
		  $(obj).css("background-color","#67c1f5");
		  $(obj).css("color","#FFFFFF");
		  $("#ck1").css("background-color","#1e2d42");
	      $("#ck1").css("color","#4e96be");
		  $("#ck3").css("background-color","#1e2d42");
	      $("#ck3").css("color","#4e96be");
		
};

var clickevent3 = function(obj){
      var x=$(".p_username").text();//记住这个用法！！val(),html(),contents()都不行,text()可以！不行试到行为止！！！
      x=x.substr(1);
	 //alert(x);
      $.ajax({
		     type:"POST",
			 url:"../php/mysteam_had_sold.php",
			 data:{username: x},
			 success: function(data){
				 
				$("#box15").empty();
	            $("#box16").empty();
				$("#box16").append('<span id="box16span">&nbsp;&nbsp;点击左侧商品图片即可查看相应信息</span>');
				//alert(data);
				var bbj=JSON.parse(data);
							  for(var i=0;i<bbj.length;i++){
								  
								  var p_lastest_buy_pic='<div class="p_lastest_buy_box" id='+bbj[i].goodsid+' onClick="clickevent3list(this)"><div>';
								  
								  $("#box15").append(p_lastest_buy_pic);
								  
								  
								  $("#"+bbj[i].goodsid).append('<div>'+"<img src="+bbj[i].picture+" class='p_lastest_buy_pic'>"+'</div>');
								  
							  }
				 
			 },
			 
			 error: function(){
				 alert("mysteam_lastest_buy_file error!");
		     }
			 
	      });
		  $(obj).css("background-color","#67c1f5");
		  $(obj).css("color","#FFFFFF");
		  $("#ck1").css("background-color","#1e2d42");
	      $("#ck1").css("color","#4e96be");
		  $("#ck2").css("background-color","#1e2d42");
	      $("#ck2").css("color","#4e96be");
};

var click_p_file_change = function(){
    window.location.href="../html/p_file_change.php";
};

var clickgenggai_goods = function(obj){
	//alert(obj);
    window.location.href="../html/goods_information_change.php?goodsid="+obj;
};

var clickfabu = function(){
    window.location.href="../html/sell_new_goods.php";
};

var click_guanzhu = function(){
    window.location.href="../html/my_attention.php";
};
var click_yuanwangdan = function(){
    window.location.href="../html/yuanwangdan.php";
};

var clickbox18 = function(){
    window.location.href="../html/fahuo_index.php";
};