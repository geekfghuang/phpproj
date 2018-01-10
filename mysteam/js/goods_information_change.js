// JavaScript Document

var mysteam_lock=false;
var yejiaolock=false;

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

$(document).ready(function() {
   $.ajax({
	         type:"GET",   //注意这里是GET，从别的url拿数据
	         url:"../php/index-trans.php",
			 success: function(data){
				 if(data){
					 
					 var obj=JSON.parse(data);
					 
					 $("#box10").html(" Welcome! "+obj.username).css("color","#C3C2C2");
					 
					 $("#headimg").attr("src",obj.headimg);
					 //alert(obj.headimg);
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
				 
				 var goodsid=decodeURI(request("goodsid"));
	             //alert(goodsid);
				  $.ajax({
		                  type:"POST",
			              url:"../php/goods_infor_changepage_goodsfile.php",
			              data:{goodsid:goodsid},
			              success: function(data){
							  //alert(data);
						      var abj = JSON.parse(data);
			
							  $("#box12").append('<div> '+"<img src="+abj.picture+" class='goods_picture'>" +' </div>');
							  
							  $("#box12").append('<div class="goodsname_file" > '+"商品名称: "+abj.goodsname+' <div>');
							  
							  $("#box12").append('<div class="goodssize_file"> '+ "尺码: "+abj.size+'</div>');
							  
							  
							  $("#box12").append('<div class="goodsprice_file"> '+"价格: ￥"+abj.price +' </div>');
							  
							  
							  $("#box12").append('<div class="goodsrest_file">'+"货存: "+abj.rest+'</div>');
							  
							  
							  $("#box12").append('<div class="goodsdescription_file"> '+"商品简介: "+abj.description+' </div>');
					
						  },
			              error: function(){
				            alert("personal file trans error!");
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

var changegoodspicture = function(){
    var x=$("#goodspicture_input").val();
    x=x.substr(12);
	$("#goodspicture_see_pic").attr("src","../img/"+x);
};
var clickbox14 = function(){
	
    var goodsname=$("#goodsname_input").val();
	
	var size=$("#size_input").val();
	
	var price=$("#price_input").val();
	
	var rest=$("#rest_input").val();
	
	var description=$("#description_input").val();
	
	var goodspicture=$("#goodspicture_input").val();
	
	goodspicture=goodspicture.substr(12);
	
	//var current_user=$("#box10").text();
	
	//current_user=current_user.substr(10);
         /*alert(goodsname);alert(size);alert(price);alert(rest);alert(description);alert(goodspicture);alert(current_user);*/
	var goodsid=decodeURI(request("goodsid"));
	//alert(goodsid);
	$.ajax({
		     type:"POST",
			 url:"../php/goods_infor_changepage_changefile.php",
			 data:{goodsname:goodsname, size:size, price:price, rest:rest, description:description, goodspicture:goodspicture, goodsid:goodsid},
			 success: function(data){
				 alert("更改商品资料成功！");
				 window.location.href="../html/goods_information_change.php?goodsid="+goodsid;
			 },
			 error: function(){
				 alert("goods_information_change error!");
		     }
	      });
};

