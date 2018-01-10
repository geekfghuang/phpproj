// JavaScript Document

var mysteam_lock=false;
var guanzhu_lock=false;
var yuanwangdan_lock=false;
var fukuan_lock=false;
var seller_lock=false;

var clickeventxie = function(){
  window.location.href="goods_index.php?search=shoes";
};
var clickeventclothes = function(){
  window.location.href="goods_index.php?search=clothes";
};
var clickeventkit = function(){
  window.location.href="goods_index.php?search=kit";
};
var clickeventequipment = function(){
  window.location.href="goods_index.php?search=equipment";
};


function request(paras) {
	var url = location.href;
	//alert(url);
	var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
	var paraObj = { };
	for (i = 0; j = paraString[i]; i++) {
		paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
	}
	var returnValue = paraObj[paras.toLowerCase()];
	if (typeof (returnValue) == "undefined") {
		return "";
	} else {
		return returnValue;
	}
}

var check = function(){
   var goodsid=decodeURI(request("goodsid"));
   $.ajax({
		    type:"POST",
			url:"../php/goods_detail.php",
			data:{goodsid:goodsid},
			success: function(data){
			
			  var obj=JSON.parse(data);
				   
			  $("#goods_infor").append('<div> '+'<img src='+obj.goodspic+' class="pic">'+' </div>');
				   
			  $("#goods_infor").append('<div class="goodsname"> '+obj.goodsname +' </div>');
				   
			  $("#goods_infor").append('<div class="price"> '+"价格: ￥"+obj.price+' </div>');
				   
			  $("#goods_infor").append('<div class="size"> '+"尺码: "+obj.size+' </div>');
				   
			  $("#goods_infor").append('<div class="rest"> '+"货存: "+obj.rest +' </div>');
				   
			  $("#goods_infor").append('<div class="description"> '+ "商品简介: "+obj.description +' </div>');
				   
			  $("#goods_infor").append('<div class="had_sold"> '+"交易成功: "+obj.had_sold +' </div>');
			   
			  $.ajax({
				       type:"POST",
					   url:"../php/comment_reply_number.php",
					   data:{goodsid:goodsid},
					   success: function(data){
						  //alert(data);
						   $("#goods_infor").append('<div class="comment" onClick="click_comment('+goodsid+')"> '+"评论: " +data+' </div>');
					   },
					   error: function(){
						   alert("comment and reply's number error!");
					   }
			  });
			  	   
			  var x=$("#box10").text();
			  x=x.substr(10);
			  $.ajax({
					  type:"POST",
					  url:"../php/decide_yuanwangdan_anniu.php",
					  data:{username:x,goodsid:goodsid},
					  success: function(data){
								 
						if(data>0){
									
						 $(".yuanwangdan").append('<span>'+"查看愿望单"+'<span>');
								
					     $(".yuanwangdan").click(function()
						  { 
							    window.location.href="../html/yuanwangdan.php";
						  }
					     );
						 
						}
						else{
									
							 $(".yuanwangdan").append('<span>'+"添加至愿望单"+'</span>');
								   
							 $(".yuanwangdan").click(function()
							  {
								if(yuanwangdan_lock==false){
									alert("你还没登陆呢！");
								}
								else{
									var x=$("#box10").text();
									x=x.substr(10);
									$.ajax({
											type:"POST",
											url:"../php/goods_detail_yuanwangdan.php",
											data:{username:x,goodsid:goodsid},
											success: function(){
												
												alert("添加至愿望单成功！");
												
												window.location.href="goods_detail.php?goodsid="+goodsid;
												
											},
											error: function(){
												alert("goods_detail_yuanwangdan error!");
											}
									});
								}
							  }
								
						    );
					   }
					},
					error: function(){
							alert("goods_detail_yuanwangdan error!");
					}
					
				});
						  
				var x=$("#box10").text();
				x=x.substr(10);
				$.ajax({
						type:"POST",
						url:"../php/decide_guanzhu_anniu.php",
						data:{username:x,goodsid:goodsid},
						success: function(data){
							if(data>0){
									
								$(".guanzhu").append('<span>查看我的关注</span>');
									 
								$(".guanzhu").click(function()
								 {
									window.location.href="../html/my_attention.php";
								 }
								);
					        }
							else{
				
								$(".guanzhu").append('<span>关注该商品</span>');
									 
								$(".guanzhu").click(function()
								 {
									if(guanzhu_lock==false){
								    alert("你还没登录呢！");
								    }
								    else{
										 var x=$("#box10").text();
										 x=x.substr(10);
										 $.ajax({
												  type:"POST",
												  url:"../php/goods_detail_guanzhu.php",
												  data:{username:x,goodsid:goodsid},
												  success: function(){
													  
														alert("关注成功!");
														
														window.location.href="goods_detail.php?goodsid="+goodsid;
														
												  },
											      error: function(){
														alert("关注失败!");
											      }
										 });
									}
								  }
							     );
							 }
									
						},
					    error: function(){
							alert("关注失败!");
						}
				  });
				   
				   
				  $("#box16").append('<div class="sellor"> '+"掌柜: "+obj.sellor+'</div>');
				   
				  $("#box16").append('<div class="address"> '+"地址: "+obj.address+'</div>');
				   
				  $("#box16").append('<div class="phone"> '+"咨询方式: "+obj.phone+' </div>');
				   
				  $("#box16").append('<div class="jinru"> '+"进入店铺"+' </div>');
				   
				  $("#box17").append('<div class="kan"> '+"看了又看:"+'</div>');//这里没完成呢！
				   
		          
				  $.ajax({
			                type:"POST",
							url:"../php/goods_detail_other_goods.php",
							data:{sellor: obj.sellor,current_id : obj.goodsid,current_type:obj.type},
							success: function(data){
								   //alert(data);
						       if(data){  
					                 var abj=JSON.parse(data);
									// alert(abj.length);
									 for(var j=0;j<abj.length;j++){
										 
										 if(j<abj.length-2){
											   
										 var listgoods='<div class="listgoods" id='+abj[j].goodsid+' onClick="clicklistgoods(this)"></div>';
											   
										 $("#box15").append(listgoods);
											   
											   
										 $("#"+abj[j].goodsid).append('<img src='+abj[j].picture+' class="listgoods_type">');
											   
										 }
										   
										 else{ 
										       
										 var listgoods2='<div class="listgoods2" id='+"x"+abj[j].goodsid+' onClick="clicklistgoods2(this)"></div>';
											   
										 $("#box18").append(listgoods2);
											   
											   
										 $("#x"+abj[j].goodsid).append('<img src='+abj[j].picture+' class="listgoods2_type">');
										   
										   
			                             }
										   
									}
						
								}
							   
						  },
						  error: function(){
							alert("goods_detail_other_goods trans error!");
						 }
	   
		         });
				
			  },
			  error: function(){
				  alert("goods_detail trans error!");
			  }
	});
};

var clicklistgoods = function(abj){
    window.location.href="goods_detail.php?goodsid="+abj.id;
};

var clicklistgoods2 = function(abj){
    window.location.href="goods_detail.php?goodsid="+abj.id.substr(1);  
	//abj.id.substr(1)把"x5"变成"5",即去除字符串的第一个字符,注意语法！
};

var yejiaolock=false;//页脚锁
$(document).ready(function() {//用户名与头像
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
					 guanzhu_lock=true;
					 yuanwangdan_lock=true;
					 fukuan_lock=true;
				 }
				 else{
					 $("#box10").html("你还没有登录呢").css("color","#D31619");
					 $("#headimg").attr("src","../img/11.jpg");
				 }
				 
				 if(yejiaolock==true){
		         $("#box6").css("display","none");
		         }
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
		alert("你还没登录呢！");
		window.location.href="../html/login.php";
	}
};

var clickevent0 = function(){//注销按钮
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

var ckbox12img = function(){//搜索商品按钮
    var findgoods=$("#search").val();
	if(findgoods.length>0){
		$.ajax({
		         type:"POST",
				 url:"../php/search_goods.php",
				 data:{search_goods : findgoods},
				 success: function(data){
					 
					 alert(data);
					 
				 },
				 error: function(){
					 alert("search error!");
				 }
		});
	}
};

var click_fukuan = function(){
	if(fukuan_lock==false){
	    alert("你还没登陆呢!");
	}
	else{
		var x=$("#box10").text();
		x=x.substr(10);
		var obj=decodeURI(request("goodsid"));
		$.ajax({
				 type:"POST",
				 url:"../php/buy_goods.php",
				 data:{username:x,goodsid:obj},
				 success: function(){
					 
					alert("购买成功!");
					
				 },
				 error: function(){
					 alert("buy_goods error!");
				 }
			  });
	}
};

var click_comment = function(obj){
	
	$("#comment_and_reply").empty();
	
	$("#first_comment_box").empty();
	
	$("#comment_and_reply").append('<div class="send_comment" onClick="click_send_comment_bottom()">'+"发表评论"+'</div>');
	$("#comment_and_reply").append('<div >'+'<input type="text" class="send_comment_box">'+'</div>');
	
	$("#comment_and_reply").append('<div>'+'<input type="submit" class="send_comment_value" value="发表评论" onClick="click_send_comment_value()">'+'</div>');
	
	$("#comment_and_reply").append('<div id="first_comment_box"></div>');
	
    $.ajax({                                  //显示所有用户评论,每一大块为一个特定用户与卖家的互动
		     type:"POST",
			 url:"../php/comment_reply_detail.php",
			 data:{goodsid:obj},
			 success: function(data){
				//alert(data);
				 var abj=JSON.parse(data);
				 for(var i=0;i<abj.length;i++){
					 
					 var comment_reply='<div id='+abj[i].comment_id+"c_p"+' class="comment_reply_box"></div>';
					 //拼接id,使其唯一,防止与上面的商品id重叠
					 
					 $("#comment_and_reply").append(comment_reply);
					 
					 
					 $("#"+abj[i].comment_id+"c_p").append('<div>'+'<img src='+abj[i].commenter_headimg+' class="commenter_headimg">'+'</div>');
					 
					 $("#"+abj[i].comment_id+"c_p").append('<div class="commenter">'+abj[i].commenter+'<div>');
					 
					 
					 $("#"+abj[i].comment_id+"c_p").append('<div class="text">'+abj[i].text+'</div>');
					 
					 
					 $("#"+abj[i].comment_id+"c_p").append('<div class="comment_time">'+abj[i].time+'</div>');
					 
					 
				     if(abj[i].user==$("#box10").text().substr(10)){
						 
						 
					 $("#"+abj[i].comment_id+"c_p").append('<div class="click_reply_bottom2" id='+abj[i].comment_id+' onClick="click_first(this)">'+"回复"+'</div>');
					 
					 
					 $("#"+abj[i].comment_id+"c_p").append('<div>'+'<input type="text"  class="reply_input_box2" id='+abj[i].comment_id+"b"+'>'+'<div>');
					 
					 
					 $("#"+abj[i].comment_id+"c_p").append('<div>'+'<input type="submit" value="发表回复" class="input2" id='+abj[i].comment_id+"c"+' onClick="click_submit_reply2(this)">'+'<div>');
					 
					 
				     }
					 
					
				 }
				
				
				var x=$("#box10").text();
				x=x.substr(10);
				// alert(x);
				$.ajax({                         //显示所有评论对应的回复
					     type:"POST",
						 url:"../php/inside_reply_detail.php",
						 data:{goodsid:obj},
						 success: function(data){
							 // alert(data);
						   var bbj = JSON.parse(data);
						   for(var i=0;i<bbj.length;i++){           //将m与x插到中间保证唯一性,必须一一对应
								
							  var reply='<div id='+bbj[i].id+"m"+bbj[i].reply_comment_id+' class="reply_box"><div>';
								 
							  $("#"+bbj[i].reply_comment_id+"c_p").append(reply);
								 
								 
							  if(bbj[i].original_commenter==bbj[i].sender){//回复人?掌柜or评论者
								 
							  $("#"+bbj[i].id+"m"+bbj[i].reply_comment_id).append('<div class="reply_text">'+bbj[i].sender+"回复: " +bbj[i].reply_text+'<div>').css("color","#c8d5e1").css("font-weight",600);
								 
							  }
							  else{
									 
							  $("#"+bbj[i].id+"m"+bbj[i].reply_comment_id).append('<div class="reply_text">'+"掌柜回复: " +bbj[i].reply_text+'<div>');
									 
							  }
								 
								 
							  $("#"+bbj[i].id+"m"+bbj[i].reply_comment_id).append('<div class="reply_time">'+bbj[i].reply_time+'</div>');
								 
							  if(bbj[i].original_commenter==x&&bbj[i].sender!=x){    //客户"回复"键有无的条件
									 
									 
							  $("#"+bbj[i].id+"m"+bbj[i].reply_comment_id).append('<div class="click_reply_bottom" id='+bbj[i].id+"x"+bbj[i].reply_comment_id+' onClick="clickx(this)">'+"回复"+'<div>');
								 
								 
							  }
							  
							  if(bbj[i].seller==x&&bbj[i].seller!=bbj[i].sender){    //卖家"回复"键有无的条件
								 
							  $("#"+bbj[i].id+"m"+bbj[i].reply_comment_id).append('<div class="click_reply_bottom" id='+bbj[i].id+"x"+bbj[i].reply_comment_id+' onClick="clickx(this)">'+"回复"+'<div>');
									 
							  seller_lock=true;
									 
							  }
								 
							  $("#"+bbj[i].id+"m"+bbj[i].reply_comment_id).append('<div>'+'<input type="text" id='+bbj[i].id+"x"+bbj[i].reply_comment_id+"m"+' class="reply_input_box">'+'<div>');
								
								
				      		  $("#"+bbj[i].id+"m"+bbj[i].reply_comment_id).append('<div>'+'<input type="submit" value="发表回复" id='+"input"+bbj[i].id+"x"+bbj[i].reply_comment_id+' class="input" onClick="click_submit_reply(this)" >'+'</div>');
								
							  }
						 },
						 error: function(){
						    alert("inside_reply_detail error!");
						 }
				});
			},
			error: function(){
			   alert("comment_reply_detail error!");
			}
	     });
};

var clickx = function(obj){
 // alert(obj.id);
  $("#input"+obj.id).css("display","block");
  $("#"+obj.id+"m").css("display","block");
};

var click_submit_reply = function(obj){
	
  var x=obj.id;
  x=x.substr(5);
  x=x+"m";
  var y=x;
  var reply_text=$("#"+x).val();
  var sender=$("#box10").text().substr(10);
  var goodsid=decodeURI(request("goodsid"));

  x=x.split("x");
  x=x[1];
  x=x.split("m");

  $("#"+x[0]+"c_p").append('<div class="reply_box" id='+obj.id+"n"+'></div>');//先在页面静态输出,注意id要唯一
  if(seller_lock==false){
	  
     $("#"+obj.id+"n").append('<div class="reply_text" >'+sender+"回复: "+reply_text+'<div>').css("color","#c8d5e1").css("font-weight",600);
	 
  }
  else{
	  
	 $("#"+obj.id+"n").append('<div class="reply_text">'+"掌柜回复: "+reply_text+'<div>');
	 
  }
  $("#"+obj.id+"n").append('<div class="reply_time">'+"刚刚"+'</div>');
  
  $.ajax({            //将评论内容插入数据库,再刷新既有相同的效果（时间有所改变）
	       type:"POST",
		   url:"../php/click_submit_reply.php",
		   data:{reply_text:reply_text,sender:sender,goodsid:goodsid,x:y},
		   success: function(){
		   },
		   error: function(){
			   alert("click_submit_reply error!");
		   }
        });
		
  var xx=obj.id;  //将回复框与回复按钮隐藏
  $("#"+xx).css("display","none");
  xx=xx.substr(5);
  xx=xx+"m";
  $("#"+xx).css("display","none");
  
 };
 
 var click_first = function(obj){
  //  alert(obj.id);
	$("#"+obj.id+"b").css("display","block");
	$("#"+obj.id+"c").css("display","block");
 };
 var click_submit_reply2 = function(obj){
	
   var x=obj.id;
   x=x.split("c");
   x=x[0];
   //alert(x);
   var reply_text=$("#"+x+"b").val();
   var sender=$("#box10").text().substr(10);
   var goodsid=decodeURI(request("goodsid"));
	 
   $("#"+x+"c_p").append('<div class="reply_box" id='+obj.id+"n2"+'></div>');//先在页面静态输出,注意id要唯一

   $("#"+obj.id+"n2").append('<div class="reply_text">'+"掌柜回复: "+reply_text+'<div>');

   $("#"+obj.id+"n2").append('<div class="reply_time">'+"刚刚"+'</div>');
	 
   $.ajax({            //将评论内容插入数据库,再刷新既有相同的效果（时间有所改变）
	       type:"POST",
		   url:"../php/click_submit_reply2.php",
		   data:{reply_text:reply_text,sender:sender,goodsid:goodsid,x:x},
		   success: function(){
		   },
		   error: function(){
			   alert("click_submit_reply error!");
		   }
   });
		
  var xx=obj.id;  //将回复框与回复按钮隐藏
  $("#"+xx).css("display","none");
  xx=xx.split("c")[0];
  xx=xx+"b";
  $("#"+xx).css("display","none");
	
 };
 
 var click_send_comment_bottom = function(){
	
     $(".send_comment_box").css("display","block");
	 $(".send_comment_value").css("display","block");
 };
 
 var click_send_comment_value = function(){

	 var text=$(".send_comment_box").val();
	 var commenter=$("#box10").text().substr(10);
	 var goodsid=decodeURI(request("goodsid"));
	// alert(commenter);
	 $.ajax({
		      type:"POST",
			  url:"../php/first_comment_headimg.php",
			  data:{username:commenter},
			  success: function(data){
				  //alert(data);
				  
			   var comment_reply='<div  id="comment_reply_box_fade" class="comment_reply_box"></div>';
	 
	 
			   $("#first_comment_box").append(comment_reply);
				  
				  
			   $("#comment_reply_box_fade").append('<div>'+'<img src='+data+' class="commenter_headimg">'+'</div>');
				 
				 
			   $("#comment_reply_box_fade").append('<div class="commenter">'+commenter+'<div>');
							
								 
			   $("#comment_reply_box_fade").append('<div class="text">'+text+'</div>');
							
								 
			   $("#comment_reply_box_fade").append('<div class="comment_time">'+"刚刚"+'</div>');
				  
			  },
			  error: function(){
			     alert("click_send_comment_value error!");
			  }
	       });
	 
	 $.ajax({
		      type:"POST",
			  url:"../php/insert_comment.php",
			  data:{commenter:commenter,goodsid:goodsid,text:text},
			  success: function(){
				  //alert("asd");
			  },
			  error: function(){
			     alert("insert_comment error!");
			  }
	       });
		   
	 $(".send_comment_box").css("display","none");
	 $(".send_comment_value").css("display","none");   
	 
 };
 