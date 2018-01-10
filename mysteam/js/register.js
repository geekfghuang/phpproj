// JavaScript Document// JavaScript Document
var mouseoverevent0 = function(obj){
     $(obj).css("opacity",1);
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
	 $(obj).css("cursor","pointer");
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


var lock1=false;
var lock2=false;
var lock3=false;
var lock4=false;
var lock5=false;
var username;

var blurevent1 = function(){
     username=$("#username").val();
	 if(username==""||username==null){
		 $("#text1").text("用户名不能为空！").css("color","#EB1E21");
	 }
	 else{
		 $.ajax({ 
		          type:"POST",
				  url:"../php/register_submit.php",
				  data:{username : username},
				  success: function(data){
					  if(data){
						  $("#text1").html("用户名已存在，请重新输入！").css("color","#EB1E21");
					  }
					  else{
						  $("#text1").html("用户名可以使用！").css("color","#0BC320");
						  lock1=true;
					  }
				  }, 
				  error: function(){
					  alert("Something error!");
				  }
			     
		       });
	 }
};

var password;
var password2;
var blurevent2 = function(){
    password=$("#password").val();
	if(password.length==0){
	    $("#text2").html("密码不能为空！").css("color","#EB1E21");
	}
	else if(password.length<6){
	    $("#text2").html("密码过于简单！").css("color","#EB1E21");
	}
	else{
		$("#text2").html("密码可以使用！").css("color","#0BC320");
		lock2=true;
	}
};

var blurevent3 = function(){
    password2=$("#password2").val();
	if(password!=password2){
	    $("#text3").html("请重新确认密码！").css("color","#EB1E21");
    }
	else{
		$("#text3").empty();
		lock3=true;
	}
};

var email;
var blurevent4 = function(){
	email=$("#email").val();
    //邮箱格式
	lock4=true;
};

var clickevent1 = function(){
    if($("#checkbox").get(0).checked){
	  lock5=true;
	  //alert(lock5);
    }
	var headimg=$("#headimg_input").val();
	headimg=headimg.substr(12);
	headimg="../img/"+headimg;
	//alert(headimg);
	if(lock1&&lock2&&lock3&&lock4&&lock5){
	  $.ajax({
		       type:"POST",
			   url:"../php/regsave.php",
			   data:{username : username, password : password, email : email,headimg:headimg },
			   success: function(data){
				   if(data){
				     alert("恭喜！你已经注册成功！");
				   }
				   else{
				   }
			   },
			   error: function(){
				   alert("Insert error!");
			   }
	  
	         });
	}
};

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

var headimg_put = function(){
	var x= $("#headimg_input").val();
	x=x.substr(12);
	//alert(x);
	$("#headimg_see_img").attr("src","../img/"+x);
};