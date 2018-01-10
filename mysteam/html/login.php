<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>登录</title>
<link rel="stylesheet" type="text/css" href="../css/login.css">
<link rel="shortcut icon" href="../img/6.png">
<script type="text/javascript" src="../js/jquery-2.0.0.min.js"></script>
<script type="text/javascript" src="../js/login.js"></script>
</head>

<body>
<div id="box1">
  <div id="box2">
       <img src="../img/1.png" style="margin-left:150px; padding:10px 0px 0px 0px;">
       <div id="box3">
           <a href="index.php" onMouseOver="mouseoverevent0(this)" onMouseOut="mouseoutevent0(this)">首页</a>
           <a  onClick="clickmysteam()" onMouseOver="mouseoverevent0(this)" onMouseOut="mouseoutevent0(this)">my steam</a>
           <a href="#" onMouseOver="mouseoverevent0(this)" onMouseOut="mouseoutevent0(this)">关于</a>
           <a href="#" onMouseOver="mouseoverevent0(this)" onMouseOut="mouseoutevent0(this)">客服</a>
       </div>
       <div id="box9">
       <img src="../img/7.jpg">
       <a href="login.php" style="margin-left:30px; margin-top:-10px;" onMouseOver="mouseoverevent0(this)" onMouseOut="mouseoutevent0(this)">登录</a>
       <span style="color:#FFFFFF; opacity:0.5;">|</span>
      <a style="margin-left:4px; margin-top:-10px;" onMouseOver="mouseoverevent0(this)" onMouseOut="mouseoutevent0(this)" onClick="clickevent0()">注销</a>
       </div>
       <div id="box10">
       </div>
       <div id="box0">
       <img id="headimg" style="border-radius:50%;" width="100%" height="100%">
       </div>
  </div>
</div>
<div id="container">
   <div id="box11">
       <br /><br /><br />
       <span style="font-size:20px; font-weight:900; color:#67c1f5;">登录</span><br />
       <span style="color:#FFFFFF; font-size:12px; opacity:0.6;">到现有的 Steam 帐户</span>
       <br /><br /><br /><br />
       <span style="color:#FFFFFF; opacity:0.8;">Steam 帐户名称</span><br />
       <input type="text" id="username" style="background-color:#2a3e5a; border-radius:3px; border-color:#1b2838;">
       <br /><br /><br />
       <span style="color:#FFFFFF; opacity:0.8;">密码</span><br />
       <input type="password" id="password" style="background-color:#2a3e5a; border-radius:3px; border-color:#1b2838;">
       <br /><br /><br />
       <img src="../img/9.png" style="margin-top:25px; opacity:0.7;" onMouseOver="mouseoverevent4(this)" onMouseOut="mouseoutevent4(this)" onClick="clickevent1()">
   </div>
   <div id="box12">
       <br /><br /><br />
       <span style="font-size:20px; font-weight:900; color:#67c1f5;">创建</span><br />
       <span style="color:#FFFFFF; font-size:12px; opacity:0.6;">一个新的免费帐户</span><br /><br />
       <span style="color:#FFFFFF; font-size:12px; opacity:0.6; word-wrap:break-word;">欢迎免费加入及轻松使用。继续创建 Steam 帐户并获取 Steam - 适合 PC 和 Mac 玩家的前沿数字解决方案。</span><br />
       <img src="../img/10.jpg" style="margin-top:160px; opacity:0.7;" onMouseOver="mouseoverevent4(this)" onMouseOut="mouseoutevent4(this)" onClick="clickevent2()">
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
        <a href="#" onMouseOver="mouseoverevent1(this)" onMouseOut="mouseoutevent1(this)">关于Value |</a>
        <a href="#" onMouseOver="mouseoverevent1(this)" onMouseOut="mouseoutevent1(this)" >商业解决方案 |</a>
        <a href="#" onMouseOver="mouseoverevent1(this)" onMouseOut="mouseoutevent1(this)">Steamworks |</a>
        <a href="#" onMouseOver="mouseoverevent1(this)" onMouseOut="mouseoutevent1(this)">工作 |</a>
        <a href="#" onMouseOver="mouseoverevent1(this)" onMouseOut="mouseoutevent1(this)">Steam分销 |</a>
        <a href="#" onMouseOver="mouseoverevent1(this)" onMouseOut="mouseoutevent1(this)"> <img src="../img/5 (1).gif" style=" top:10px;">Steam |</a>
        <a href="#" onMouseOver="mouseoverevent1(this)" onMouseOut="mouseoutevent1(this)"> <img src="../img/5 (2).gif">@steam_games</a>
    </div>
</div>
<div id="box6">
   <br />
   <br />
   <div id="box7">
      <span style="color:#67c1f5; font-size:36px; font-weight:300;">----------你还没有登录吗？----------</span>
   </div>
   <img src="../img/2.png" style="margin-left:630px; margin-top:10px; opacity:0.8;" onMouseOver="mouseoverevent2(this)" onMouseOut="mouseoutevent2(this)">
   <div id="box8">
   <span style="color:#FFFFFF; opacity:0.5;">或者</span>
   <a href="register.php" onMouseOver="mouseoverevent3(this)" onMouseOut="mouseoutevent3(this)">注册</a>
   <span style="color:#FFFFFF; opacity:0.5;">并免费假如Steam</span>
   </div>
</div>
</body>
</html>
