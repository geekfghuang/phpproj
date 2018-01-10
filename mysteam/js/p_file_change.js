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
				 
				  $.ajax({
		                  type:"POST",
			              url:"../php/mysteam_p_file.php",
			              data:{username:obj.username},
			              success: function(data){
						      var abj = JSON.parse(data);
			
							  $("#box12").append('<div> '+"<img src="+abj.headimg+" class='p_headimg'>" +' </div>');
							  
							  $("#box12").append('<div class="p_username" > '+"用户名: "+abj.username+' <div>');
							  
							  $("#box12").append('<div class="p_age"> '+ "年龄: "+abj.age+'</div>');
							  
							  $("#box12").append('<div class="p_email"> '+"邮箱: "+abj.email +' </div>');
							  
							  $("#box12").append('<div class="p_phone">'+"电话: "+abj.phone+'</div>');
							  
							  $("#box12").append('<div class="p_address"> '+"地址: "+abj.address+' </div>');
					
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

var changeheadimg = function(){
    var x=$("#headimg_file").val();
    x=x.substr(12);
	$("#headimg_see_pic").attr("src","../img/"+x);
};
var clickbox14 = function(){
	
    var username=$("#username_input").val();
	
	var age=$("#age_input").val();
	
	var email=$("#email_input").val();
	
	var phone=$("#phone_input").val();
	
	var address=$("#address_input").val();
	
	var headimg=$("#headimg_file").val();
	
	headimg=headimg.substr(12);
	
	var current_user=$(".p_username").text();
	
	current_user=current_user.substr(6);
	
	$.ajax({
		     type:"POST",
			 url:"../php/p_file_change.php",
			 data:{username:username, age:age, email:email, phone:phone, address:address, headimg:headimg, current_user:current_user},
			 success: function(data){
				 alert("编辑资料成功！");
				 window.location.href="../html/p_file_change.php";
			 },
			 error: function(){
				 alert("p_file_change error!");
		     }
	      });
		  
};

