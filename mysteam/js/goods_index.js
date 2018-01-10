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
    var findgoods=decodeURI(request("search"));
	//alert(findgoods);
	if(findgoods=='shoes'){
	$("#box13_span").html("鞋类>");
	}
	if(findgoods=='clothes'){
	$("#box13_span").html("衣服>");
	}
	if(findgoods=='kit'){
	$("#box13_span").html("装备>");
	}
	if(findgoods=='equipment'){
    $("#box13_span").html("器材>");
	}
	$.ajax({
		      type:"POST",
			  url:"../php/goods_index_trans_list1.php",
			  data:{findgoods:findgoods},
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
		     
	
});

var clickmysteam = function(){
    if(mysteam_lock==true){
	   window.location.href="../html/mysteam.php";
	}
	else{
		alert("你还没登录呢！");
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
	window.location.href="goods_detail.php?goodsid="+obj.id;
};

var ckbasketball = function(){
	 $("#box13_span2").html("篮球系列>>");
     var findgoods=decodeURI(request("search"));
	 //alert("basketball "+findgoods);
	 $.ajax({
		      type:"POST",
			  url:"../php/goods_index_trans_list1.php",
			  data:{findgoods: "basketball "+findgoods},
			  success: function(data){
				  if(data){
					    //alert(data);
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
};

var ckfootball = function(){
	 $("#box13_span2").html("足球系列>>");
     var findgoods=decodeURI(request("search"));
	 //alert("football "+findgoods);
	 $.ajax({
		      type:"POST",
			  url:"../php/goods_index_trans_list1.php",
			  data:{findgoods: "football "+findgoods},
			  success: function(data){
				  if(data){
					    //alert(data);
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
};

var cktennis = function(){
	 $("#box13_span2").html("网球系列>>");
     var findgoods=decodeURI(request("search"));
	 //alert("tennis "+findgoods);
	 $.ajax({
		      type:"POST",
			  url:"../php/goods_index_trans_list1.php",
			  data:{findgoods: "tennis "+findgoods},
			  success: function(data){
				  if(data){
					    //alert(data);
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
};

var ckbadminton = function(){
	 $("#box13_span2").html("羽毛球系列>>");
     var findgoods=decodeURI(request("search"));
	 //alert("badminton "+findgoods);
	 $.ajax({
		      type:"POST",
			  url:"../php/goods_index_trans_list1.php",
			  data:{findgoods: "badminton "+findgoods},
			  success: function(data){
				  if(data){
					   // alert(data);
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
};







