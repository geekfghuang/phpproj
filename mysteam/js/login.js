// JavaScript Document
var mysteam_lock=false;
var mouseoverevent0 = function(obj){
     $(obj).css("opacity",1);
	 $(obj).css("cursor","pointer");
};
var mouseoutevent0 = function(obj){
     $(obj).css("opacity",0.6);
};

var mouseoverevent1 = function(obj){
	$(obj).css("color","#FFFFFF");
};
var mouseoutevent1 = function(obj){
	$(obj).css("color","#D8D1D2");
};

var mouseoverevent2 = function(obj){
     $(obj).css("opacity",1);
};
var mouseoutevent2 = function(obj){
     $(obj).css("opacity",0.8);
};

var mouseoverevent3 = function(obj){
	$(obj).css("color","#67c1f5");
};
var mouseoutevent3 = function(obj){
	$(obj).css("color","#FFFFFF");
};

var mouseoverevent4 = function(obj){
     $(obj).css("opacity",1);
	 $(obj).css("cursor","pointer");
};
var mouseoutevent4 = function(obj){
     $(obj).css("opacity",0.7);
};

var yejiaolock=false;
$(document).ready(function() {
	$.ajax({ 
	         type:"GET",
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


var clickevent0 = function(){
	$.ajax({ type:"GET",
	         url:"../php/login_out.php",
			 success: function(){
				 window.location.href="index.php";
		     },
			 error: function(){
				 alert("loginout error!");
			 }
		  });
};

var clickevent1 = function(){
    var username=$("#username").val();
	var password=$("#password").val();
	$.ajax({
		     type:"POST",
			 url:"../php/login_submit.php",
			 data:{username : username,password : password},
			 success: function(data){
				 if(data){
					 window.location.href="../html/index.php";
				 }
				 else{
				    alert("用户名或密码错误！");
				 }
		     },
			 error: function(){
				 alert("Login error!");
		     }
	
	      });
};

var clickevent2 = function(){
    window.location.href="../html/register.php";
};

var clickmysteam = function(){
   if(mysteam_lock==false){
      alert("你还没登陆呢！");
	  window.location.href="../html/login.php";
   }
   else{
      window.location.href="../html/mysteam.php";
   }
};
