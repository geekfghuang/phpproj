// JavaScript Document

var mysteam_lock=false;
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
var cli_1 = function(){
  window.location.href="goods_detail.php?goodsid=16"; 
};
var cli_2 = function(){
  window.location.href="goods_detail.php?goodsid=8"; 
};
var cli_3 = function(){
  window.location.href="goods_detail.php?goodsid=11"; 
};
var cli_4 = function(){
  window.location.href="goods_detail.php?goodsid=23"; 
};
var click_login_pic = function(){
  window.location.href="../html/login.php";
};

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
			 },
			 error: function(){
				 alert("trans error!");
			 } 
	       });
		     
	$.ajax({
		      type:"GET",
			  url:"../php/goods_index_trans.php",
			  success: function(data){
				  if(data){
						var obj=JSON.parse(data);
						for(var i=0;i<obj.length;i++){
							
							var listItem='<div id='+obj[i].goodsid+' class="listItem" onClick="clickevent(this)"></div>';
							
						    $("#box15").append(listItem);
							
							
							$("#"+obj[i].goodsid).append("<img src='"+obj[i].picture+"' class='goodspic'>");
							
							
							$("#"+obj[i].goodsid).append('<div class="goodsname"> '+obj[i].goodsname+' </div>');
							
							
							$("#"+obj[i].goodsid).append('<div class="description"> '+obj[i].description+' </div>');
							
							
							$("#"+obj[i].goodsid).append('<div class="price"> '+"￥"+obj[i].price+' </div>');
						}
				  }
			  },
			  error: function(){
				  alert("goods_index_trans error!");
			  }
	       
		  });
});

var clickmysteam = function(){
  if(mysteam_lock==true){
     window.location.href="../html/mysteam.php";
  }
  else{
     alert("你还没登录呢!");
	 window.location.href="../html/login.php";
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

var clickevent = function(obj){
	//alert("#"+obj.id);
	window.location.href="goods_detail.php?goodsid="+obj.id;
};

var clickevent1 = function(obj){
    $.ajax({
		      type:"GET",
			  url:"../php/the_lastest_goods_trans.php",
			  success: function(data){
				  if(data){
					    var obj=JSON.parse(data);
						$("#box15").empty();
						for(var i=0;i<obj.length;i++){
							
							var listItem='<div id='+obj[i].goodsid+' class="listItem" onClick="clickevent(this)"></div>';
							
						    $("#box15").append(listItem);
							
							
							$("#"+obj[i].goodsid).append("<img src='"+obj[i].picture+"' class='goodspic'>");
							
							
							$("#"+obj[i].goodsid).append('<div class="goodsname"> '+obj[i].goodsname+' </div>');
							
							
							$("#"+obj[i].goodsid).append('<div class="description"> '+obj[i].description+' </div>');
							
							$("#"+obj[i].goodsid).append('<div class="price"> '+"￥"+obj[i].price+' </div>');
							
							$("#"+obj[i].goodsid).append('<div class="time">'+"发布时间: "+obj[i].time+'</div>');
							
						}
				  }
			  },
			  error: function(){
				  alert("goods_index_trans error!");
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
    $.ajax({
		      type:"GET",
			  url:"../php/goods_index_trans.php",
			  success: function(data){
				  if(data){
					    var obj=JSON.parse(data);
						$("#box15").empty();
						for(var i=0;i<obj.length;i++){
							var listItem='<div id='+obj[i].goodsid+' class="listItem" onClick="clickevent(this)"></div>';
							
						    $("#box15").append(listItem);
							
							
							$("#"+obj[i].goodsid).append("<img src='"+obj[i].picture+"' class='goodspic'>");
							
							
							$("#"+obj[i].goodsid).append('<div class="goodsname"> '+obj[i].goodsname+' </div>');
							
							
							$("#"+obj[i].goodsid).append('<div class="description"> '+obj[i].description+' </div>');
							
							$("#"+obj[i].goodsid).append('<div class="price"> '+"￥"+obj[i].price+' </div>');
							
						}
				  }
			  },
			  error: function(){
				  alert("goods_index_trans error!");
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
    $.ajax({
		      type:"GET",
			  url:"../php/the_best_sell_goods.php",
			  success: function(data){
				  if(data){
						var obj=JSON.parse(data);
						$("#box15").empty();
						for(var i=0;i<obj.length;i++){
							var listItem='<div id='+obj[i].goodsid+' class="listItem" onClick="clickevent(this)"></div>';
							
						    $("#box15").append(listItem);
							
							
							$("#"+obj[i].goodsid).append("<img src='"+obj[i].picture+"' class='goodspic'>");
							
							
							$("#"+obj[i].goodsid).append('<div class="goodsname"> '+obj[i].goodsname+' </div>');
							
							
							$("#"+obj[i].goodsid).append('<div class="description"> '+obj[i].description+' </div>');
							
							$("#"+obj[i].goodsid).append('<div class="price"> '+"￥"+obj[i].price+' </div>');
							
							$("#"+obj[i].goodsid).append('<div class="had_sold">'+"销售量: "+obj[i].had_sold+'</div>');
							
						}
				  }
			  },
			  error: function(){
				  alert("goods_index_trans error!");
			  }
	       
		  });
		  $(obj).css("background-color","#67c1f5");
		  $(obj).css("color","#FFFFFF");
		  $("#ck1").css("background-color","#1e2d42");
	      $("#ck1").css("color","#4e96be");
		  $("#ck2").css("background-color","#1e2d42");
	      $("#ck2").css("color","#4e96be");
		
};

var ckbox12img = function(){
    var findgoods=$("#search").val();
	if(findgoods.length>0){
		//findgoods=findgoods.split("");
		//alert(findgoods);
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

