<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>欢迎来到Steam</title>
<link rel="stylesheet" type="text/css" href="../css/goods_index.css">
<link rel="shortcut icon" href="../img/6.png">
<script type="text/javascript" src="../js/jquery-2.0.0.min.js"></script>
<script type="text/javascript" src="../js/goods_index.js"></script>
</head>

<body onLoad="check()">
<div id="box1">
  <div id="box2">
       <img src="../img/1.png" style="margin-left:150px; padding:10px 0px 0px 0px;">
       <div id="box3">
           <a href="index.php" >首页</a>
           <a onClick="clickmysteam()" >my steam</a>
           <a href="#" >关于</a>
           <a href="#" >客服</a>
       </div>
       <div id="box9">
           <img src="../img/7.jpg">
           <a href="login.php" style="margin-left:30px; margin-top:-10px;" >登录</a>
           <span style="color:#FFFFFF; opacity:0.5;">|</span>
           <a style="margin-left:4px; margin-top:-10px;" onClick="clickevent0()">注销</a>
       </div>
       <div id="box10">
       </div>
       <div id="box0">
       <img id="headimg" style="border-radius:50%;" width="100%" height="100%" >
       </div>
  </div>
</div>
<div id="container">
    <br /><br /><br />
    <div id="box11">
        <a onClick="clickeventxie()">鞋类</a>
        <a onClick="clickeventclothes()" >衣服</a>
        <a onClick="clickeventkit()" >装备</a>
        <a onClick="clickeventequipment()" >器材</a>
    <div id="box12"> 
        <input type="search" id="search" placeholder="搜索商品">
        <img src="../img/12.png" style="float:right; height:30px;">
    </div>
    </div>
    <div id="box13">
    <span id="box13_span"></span>
    <span id="box13_span2"></span>
    </div>
    <div id="box14head">
    <span id="box14headspan">按种类查找</span>
    </div>
    <div id="box14">
        <a onClick="ckbasketball()">篮球系列</a>
        <a onClick="ckfootball()">足球系列</a>
        <a onClick="cktennis()">网球系列</a>
        <a onClick="ckbadminton()">羽毛球系列</a>
    </div>
    <div id="box15"  style="overflow-y:auto;font-weight:700; color:#c8d5e1; ">
    </div>
</div>
<div id="yejiao">
    <img src="../img/4.png" style="margin-left:150px; margin-top:20px;">
    <div id="box4" style="word-wrap:break-word;">
    <span style="color:#FFFFFF; opacity:0.6;">© 2015 Valve Corporation. 保留所有权利。所有商标均为其在美国及其它国家/地区的各自持有者所有。
所有的价格均已包含增值税（如适用）。
    </span>
    </div>
    <div id="box5">
        <a href="#" >关于Value |</a>
        <a href="#" >商业解决方案 |</a>
        <a href="#" >Steamworks |</a>
        <a href="#" >工作 |</a>
        <a href="#" >Steam分销 |</a>
        <a href="#" > <img src="../img/5 (1).gif" style=" top:10px;">Steam |</a>
        <a href="#" > <img src="../img/5 (2).gif">@steam_games</a>
    </div>
</div>
<div id="box6">
   <br />
   <br />
   <div id="box7">
      <span style="color:#67c1f5; font-size:36px; font-weight:300;">----------你还没有登录吗？----------</span>
   </div>
   <img src="../img/2.png" id="box6_img">
   <div id="box8">
       <span style="color:#FFFFFF; opacity:0.5;">或者</span>
       <a href="register.php">注册</a>
       <span style="color:#FFFFFF; opacity:0.5;">并免费假如Steam</span>
   </div>
</div>
</body>
</html>
