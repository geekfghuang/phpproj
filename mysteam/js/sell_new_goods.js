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
				 
				 $("#box11").append('<div>'+'<img src="'+obj.headimg+'" class="sell_headimg">'+'</div>');
				 
				 $("#box11").append('<div class="sell_zi">'+"打造专属"+obj.username+"的商品"+'</div>');
					   
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
var picsee = function(){
    var x=$("#picture_input").val();
	x=x.substr(12);
	//alert(x);
	$("#pic_see").attr("src","../img/"+x);
};

var clickfabu = function(){
    var goodstype=$("#select").val();
	var goodsname=$("#spmc_input").val();
	var price=$("#jiage_input").val();
	var size=$("#daxiao_input").val();
	var rest=$("#liang_input").val();
	var description=$("#miaoshu_input").val();
	var picture=$("#picture_input").val();
	picture=picture.substr(12);
	var username=$("#box10").text();
	username=username.substr(10);
	$.ajax({
		     type:"POST",
			 url:"../php/sell_new_goods.php",
			 data:{goodstype:goodstype, goodsname:goodsname, price:price, size:size, rest:rest, description:description, picture:picture, username:username},
			 success: function(){
				 alert("发布成功！");
			 },
			 error: function(){
				 alert("sell_new_goods error!");
			 }
	      });
};