-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-06-28 15:35:29
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `mysteam`
--
CREATE DATABASE IF NOT EXISTS `mysteam` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `mysteam`;

-- --------------------------------------------------------

--
-- 表的结构 `attention`
--

CREATE TABLE IF NOT EXISTS `attention` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `username` varchar(15) DEFAULT NULL,
  `goodsid` int(3) NOT NULL,
  `time` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=25 ;

--
-- 转存表中的数据 `attention`
--

INSERT INTO `attention` (`id`, `username`, `goodsid`, `time`) VALUES
(1, '张敬轩', 1, '2015/7/19'),
(4, '张敬轩', 8, '2015/8/3'),
(8, 'kobe', 6, '2015/08/30'),
(12, 'jordan', 18, '2015/08/30'),
(14, 'kobe', 8, '2015/08/30'),
(15, 'jordan', 12, '2015/08/30'),
(23, 'jordan', 1, '2015/09/01'),
(24, 'T-Mac', 34, '2015/09/04');

-- --------------------------------------------------------

--
-- 表的结构 `buy`
--

CREATE TABLE IF NOT EXISTS `buy` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `username` varchar(15) DEFAULT NULL,
  `goodsid` int(3) NOT NULL,
  `time` varchar(15) DEFAULT NULL,
  `number` int(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=26 ;

--
-- 转存表中的数据 `buy`
--

INSERT INTO `buy` (`id`, `username`, `goodsid`, `time`, `number`) VALUES
(5, '张敬轩', 5, '2015/4/22', 1),
(9, '张敬轩', 15, '2015/08/30', 1),
(10, 'kobe', 22, '2015/08/30', 2),
(11, 'kobe', 1, '2015/08/30', 2),
(12, 'jordan', 1, '2015/08/31', 3),
(14, 'jordan', 6, '2015/08/31', 1),
(15, 'kobe', 6, '2015/08/31', 1),
(16, '张敬轩', 9, '2015/08/31', 1),
(17, 'jordan', 18, '2015/08/31', 2),
(18, 'kobe', 21, '2015/08/31', 1),
(19, '张敬轩', 33, '2015/08/31', 1),
(21, 'kobe', 13, '2015/09/01', 2),
(22, '张敬轩', 1, '2015/09/01', 2),
(23, 'jordan', 34, '2015/09/04', 1),
(24, 'T-Mac', 34, '2015/09/04', 1),
(25, '董柏顺', 11, '2015/09/04', 2);

-- --------------------------------------------------------

--
-- 表的结构 `buy_sell`
--

CREATE TABLE IF NOT EXISTS `buy_sell` (
  `buy_sell_id` int(3) NOT NULL AUTO_INCREMENT,
  `buyer` varchar(15) NOT NULL,
  `seller` varchar(15) NOT NULL,
  `goodsid` int(3) NOT NULL,
  `sell_type` varchar(15) NOT NULL,
  PRIMARY KEY (`buy_sell_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=24 ;

--
-- 转存表中的数据 `buy_sell`
--

INSERT INTO `buy_sell` (`buy_sell_id`, `buyer`, `seller`, `goodsid`, `sell_type`) VALUES
(3, 'jordan', 'kobe', 1, 'get'),
(4, 'jordan', 'jordan', 6, 'wait'),
(7, 'kobe', 'jordan', 6, 'wait'),
(8, '张敬轩', 'jordan', 9, 'wait'),
(9, 'jordan', 'kobe', 18, 'get'),
(10, 'jordan', 'kobe', 18, 'get'),
(11, 'kobe', 'kobe', 21, 'get'),
(12, '张敬轩', 'kobe', 1, 'get'),
(13, '张敬轩', '张敬轩', 33, 'get'),
(16, 'kobe', 'jordan', 13, 'wait'),
(17, 'kobe', 'jordan', 13, 'wait'),
(18, '张敬轩', 'kobe', 1, 'get'),
(19, '张敬轩', 'kobe', 1, 'get'),
(20, 'jordan', '董柏顺', 34, 'get'),
(21, 'T-Mac', '董柏顺', 34, 'get'),
(22, '董柏顺', 'jordan', 11, 'get'),
(23, '董柏顺', 'jordan', 11, 'wait');

-- --------------------------------------------------------

--
-- 表的结构 `comment`
--

CREATE TABLE IF NOT EXISTS `comment` (
  `comment_id` int(3) NOT NULL AUTO_INCREMENT,
  `commenter` varchar(15) DEFAULT NULL,
  `goodsid` int(3) NOT NULL,
  `text` varchar(300) DEFAULT NULL,
  `comment_time` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=28 ;

--
-- 转存表中的数据 `comment`
--

INSERT INTO `comment` (`comment_id`, `commenter`, `goodsid`, `text`, `comment_time`) VALUES
(1, 'jordan', 1, '鞋子很好！', '2009/12/01'),
(2, '张敬轩', 1, '鞋子配色很好看！', '2015/09/01'),
(3, '张敬轩', 2, '很好！', '2008/01/26'),
(9, 'jordan', 1, '还好啦', '2015/09/02'),
(10, 'jordan', 1, '不怎么样', '2015/09/02'),
(11, '张敬轩', 1, '很好啦好嘛！', '2015/09/02'),
(13, 'kobe', 25, '试过感觉还可以。', '2015/09/02'),
(14, 'jordan', 25, '我也觉得很不错！', '2015/09/02'),
(20, '张敬轩', 1, '哈哈！', '2015/09/02'),
(21, 'kobe', 2, '你们都是傻屌', '2015/09/03'),
(22, 'jordan', 7, '哈哈', '2015/09/03'),
(23, '张敬轩', 7, '来，我来看两个傻屌撕逼', '2015/09/03'),
(24, 'jordan', 34, '颜色很好看！', '2015/09/04'),
(25, 'T-Mac', 34, '我还没买呢，不过看评论好像还不错！', '2015/09/04'),
(26, 'T-Mac', 34, '我刚刚买了！', '2015/09/04'),
(27, '董柏顺', 11, '有点重啊！', '2015/09/04');

-- --------------------------------------------------------

--
-- 表的结构 `goods`
--

CREATE TABLE IF NOT EXISTS `goods` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `type` varchar(30) DEFAULT NULL,
  `goodsname` varchar(30) DEFAULT NULL,
  `price` int(8) DEFAULT NULL,
  `size` varchar(8) DEFAULT NULL,
  `rest` int(8) DEFAULT NULL,
  `had_sold` int(3) NOT NULL,
  `description` varchar(800) DEFAULT NULL,
  `picture` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=35 ;

--
-- 转存表中的数据 `goods`
--

INSERT INTO `goods` (`id`, `type`, `goodsname`, `price`, `size`, `rest`, `had_sold`, `description`, `picture`) VALUES
(1, 'basketball shoes', 'aj2015篮球鞋经典黑红', 899, '43', 37, 11, 'aj2015最新款，篮球之神的代言，你值得拥有！', '../img/20.jpg'),
(2, 'basketball clothes', '麦迪火箭1号队服', 299, 'XXL', 25, 3, '想拥有麦迪销魂的身姿吗？如果想，不应再犹豫！', '../img/24.jpg'),
(3, 'badminton shoes', 'Mizuno羽毛球鞋', 538, '43', 30, 0, '专柜正品Mizuno美津浓WAVE FANG RV顶级羽毛球鞋7KM39062特价包邮', '../img/36.jpg'),
(4, 'basketball kit', '詹姆斯护臂', 69, 'XXL', 91, 0, '詹姆斯护臂加长透气蜂窝护臂男女骑行护肘篮球装备运动用品护具夏', '../img/26.jpg'),
(5, 'football equipment', 'star足球', 98, 'Un', 15, 0, '包邮【买一送五】star足球世达足球耐磨足球 5号球足球训练比赛', '../img/28.jpg'),
(6, 'basketball shoes', '麦迪3.0篮球鞋', 699, '44', 23, 9, '天选之子Tracy McGrady的第一战靴，带你重温麦迪经典！', '../img/21.png'),
(7, 'football shoes', 'SITO希途足球鞋', 168, '42', 35, 3, 'SITO希途专柜正品旋风系列成人儿童FG足球鞋训练鞋足球鞋专柜正品人工草地专用旋风希途', '../img/31.png'),
(8, 'basketball shoes', 'KD7黑白配色', 458, '44', 5, 15, '代购Nike/耐克KD7杜兰特7代夏季透气男鞋NBA全明星网面男子篮球鞋', '../img/19.jpg'),
(9, 'basketball equipment', 'KD篮球', 346, 'Un', 9, 6, '耐克NIKE专柜正品2015年KD杜兰特新款街头运动篮球BB0551-671-010', '../img/29.png'),
(10, 'tennis shoes', '女子网球鞋', 112, '39', 12, 0, '正品阿迪达斯15款女子网球鞋B40281B40279B40277S77734S77733', '../img/34.jpg'),
(11, 'tennis equipment', 'adidas网球拍', 120, 'Un', 4, 16, '专柜正品热卖 阿迪达斯Adidas Barr全碳素网球拍特价包邮男女网拍', '../img/30.jpg'),
(12, 'basketball shoes', '阿里纳斯战靴', 429, '43', 20, 25, '大将军阿里纳斯的迷彩战靴，怀念大将军的昔日风采', '../img/22.jpg'),
(13, 'basketball equipment', '斯伯丁篮球', 169, 'Un', 108, 32, '包顺丰正品斯伯丁NBA篮球74-604Y室外室内lanqiu掌控74-221l篮球', '../img/27.jpg'),
(14, 'football shoes', '铁豹足球鞋', 99, '43', 10, 8, '铁豹正品足球鞋户外足球鞋室内足球鞋碎钉足球鞋专业训练男子鞋', '../img/32.jpg'),
(15, 'tennis shoes', '费德勒15年法网网球鞋', 680, '44', 103, 5, '耐克NikeZoomVapor9.5Tour男鞋现货费德勒网球鞋正品nikeV9.5绝佳脚感', '../img/33.png'),
(16, 'basketball clothes', '24号科比主场球衣', 388, 'XL', 3, 12, '你知道洛杉矶凌晨4点的样子吗？穿上它，你就知道！', '../img/23.jpg'),
(17, 'badminton shoes', '海德羽毛球鞋', 138, '42', 10, 3, '特价包邮送袜子HEAD/海德羽毛球鞋男鞋女鞋正品高端运动鞋送1双运动袜轻EVA中底专业羽鞋情侣款', '../img/35.jpg'),
(18, 'basketball kit', '科比护臂', 80, 'XL', 28, 18, '包邮正品耐克NIKE蜂窝状护臂篮球科比pro防撞加长运动装备护具', '../img/25.png'),
(19, 'badminton equipment', '阿迪达斯羽毛球拍', 288, 'Un', 50, 0, 'Adidas/阿迪达斯羽毛球拍正品高端全碳素男女训练拍全国包邮', '../img/37.png'),
(20, 'football kit', 'STAR世达护腿板', 35, 'Un', 20, 3, '正品STAR世达护腿板足球护具足球装备专业绑带护腿板直插式护腿板年中大促多重优惠世达专卖店正品保障', '../img/38.png'),
(21, 'football clothes', '短袖足球队服', 149, 'L', 41, 1, '2015新款锐克正品 短袖足球队服 男专业比赛组队训练足球服套装独特魅力别样风采团购包邮送进口印号', '../img/39.jpg'),
(22, 'tennis clothes', '2015夏新款显瘦运动套装女', 80, 'M', 98, 14, 'A字半身裙裤套裙棒球服网球服天猫正品进口面料柔软/舒适防走光内裤', '../img/40.png'),
(23, 'badminton clothes', '李宁lining羽毛球服', 123, 'XL', 92, 0, '比赛训练上衣服装男女款吸汗速干AAYK035新款', '../img/41.png'),
(24, 'tennis kit', 'NIKE加长吸汗带网球护具', 79, 'Un', 56, 0, '专柜正品特价NIKE加长吸汗带网球护具羽毛巾篮球耐克运动加长护腕', '../img/42.png'),
(25, 'badminton kit', '威克多羽毛球护膝', 49, 'Un', 10, 5, 'VICTOR/威克多羽毛球护膝胜利运动护具加压型膝关节束带SP182江浙沪皖包邮其它运费5元偏远除外单只装', '../img/43.png'),
(33, 'tennis equipment', 'HEAD海德网球拍', 299, 'Un', 9, 1, 'HEAD海德网球拍正品碳素复合进攻男女初学单人特价包邮送礼品', '../img/46.jpg'),
(34, 'basketball kit', 'Nike中性手提包', 239, 'Un', 28, 2, '正品Nike中性手提包气垫背带训练装备水桶包BA4908-400-003BA4985', '../img/50.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `hopelist`
--

CREATE TABLE IF NOT EXISTS `hopelist` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `username` varchar(15) DEFAULT NULL,
  `goodsid` int(3) NOT NULL,
  `time` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=12 ;

--
-- 转存表中的数据 `hopelist`
--

INSERT INTO `hopelist` (`id`, `username`, `goodsid`, `time`) VALUES
(1, '张敬轩', 13, '2010/1/22'),
(2, '张敬轩', 15, '2010/1/23'),
(5, 'kobe', 22, '2015/08/30'),
(6, 'jordan', 6, '2015/08/30'),
(7, 'jordan', 1, '2015/08/30'),
(8, '张敬轩', 2, '2015/08/30'),
(9, 'kobe', 1, '2015/08/30'),
(10, 'T-Mac', 24, '2015/09/03'),
(11, 'T-Mac', 34, '2015/09/04');

-- --------------------------------------------------------

--
-- 表的结构 `reply`
--

CREATE TABLE IF NOT EXISTS `reply` (
  `reply_id` int(3) NOT NULL AUTO_INCREMENT,
  `goodsid` int(3) NOT NULL,
  `sender` varchar(15) DEFAULT NULL,
  `reply_comment_id` int(3) NOT NULL,
  `reply_text` varchar(300) DEFAULT NULL,
  `reply_time` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`reply_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=67 ;

--
-- 转存表中的数据 `reply`
--

INSERT INTO `reply` (`reply_id`, `goodsid`, `sender`, `reply_comment_id`, `reply_text`, `reply_time`) VALUES
(1, 1, 'kobe', 1, '谢谢你的支持！', '2012/01/20'),
(2, 1, 'kobe', 2, '下次记得再来买噢~', '2015/09/01'),
(3, 1, 'jordan', 1, '嗯嗯', '2015/09/01'),
(4, 1, 'kobe', 1, '嗯嗯呢！', '2015/09/02'),
(40, 2, 'jordan', 3, '谢谢你的好评！', '2015/09/02'),
(42, 1, 'kobe', 9, '我们会做的更好！', '2015/09/02'),
(43, 1, 'jordan', 9, '嗯嗯，希望吧。', '2015/09/02'),
(44, 1, '张敬轩', 2, '嗯啊', '2015/09/02'),
(45, 1, 'kobe', 10, '不好意思咯！', '2015/09/02'),
(46, 1, 'kobe', 11, '嗯嗯谢谢你的支持！！', '2015/09/02'),
(48, 25, '张敬轩', 13, '我们卖的是正品。', '2015/09/02'),
(49, 25, 'kobe', 13, '嗯嗯，知道。', '2015/09/02'),
(50, 25, '张敬轩', 14, '谢谢！', '2015/09/02'),
(51, 1, 'jordan', 10, '没事没事。', '2015/09/02'),
(52, 1, 'kobe', 2, '是啦是啦！', '2015/09/02'),
(54, 2, '张敬轩', 3, '傻屌', '2015/09/03'),
(55, 2, 'jordan', 3, '卧槽这么嚣张', '2015/09/03'),
(56, 2, 'jordan', 21, '你更嚣张！', '2015/09/03'),
(57, 7, 'kobe', 22, '你哈哈什么啊？', '2015/09/03'),
(58, 7, 'jordan', 22, '哈你傻啊傻屌', '2015/09/03'),
(59, 7, 'kobe', 22, '卧槽这么不给面子', '2015/09/03'),
(60, 7, 'kobe', 23, '我拉黑你', '2015/09/03'),
(61, 34, '董柏顺', 24, '对啊！这是新款噢！', '2015/09/04'),
(62, 34, 'jordan', 24, '下次我再来买！', '2015/09/04'),
(63, 34, '董柏顺', 26, '已经发货！', '2015/09/04'),
(64, 34, '董柏顺', 25, '真的很不错的！', '2015/09/04'),
(65, 34, '董柏顺', 24, '可以！', '2015/09/04'),
(66, 1, '张敬轩', 2, '嗯嗯嗯嗯嗯嗯嗯！！！！！！！！！', '2015/09/04');

-- --------------------------------------------------------

--
-- 表的结构 `sell`
--

CREATE TABLE IF NOT EXISTS `sell` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `username` varchar(15) DEFAULT NULL,
  `goodsid` int(3) DEFAULT NULL,
  `time` varchar(15) DEFAULT NULL,
  `totalnumber` int(3) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=29 ;

--
-- 转存表中的数据 `sell`
--

INSERT INTO `sell` (`id`, `username`, `goodsid`, `time`, `totalnumber`) VALUES
(1, 'kobe', 1, '2006/12/29', 48),
(2, 'jordan', 2, '2006/12/29', 28),
(3, '张敬轩', 3, '2006/12/29', 30),
(4, 'jordan', 4, '2006/12/29', 91),
(5, 'kobe', 5, '2006/12/29', 15),
(6, 'jordan', 6, '2006/12/29', 32),
(7, 'kobe', 7, '2006/12/29', 38),
(8, '张敬轩', 8, '2006/12/29', 20),
(9, 'jordan', 9, '2006/12/29', 15),
(10, 'kobe', 10, '2006/12/29', 12),
(11, 'jordan', 11, '2006/12/29', 20),
(12, 'kobe', 12, '2006/12/29', 45),
(13, 'jordan', 13, '2006/12/29', 140),
(14, 'kobe', 14, '2008/2/22', 18),
(15, 'kobe', 15, '2006/12/29', 108),
(16, '张敬轩', 16, '2006/12/29', 15),
(17, 'kobe', 17, '2006/12/29', 13),
(18, 'kobe', 18, '2006/12/29', 46),
(19, '张敬轩', 19, '2006/12/29', 50),
(20, 'kobe', 20, '2006/12/29', 23),
(21, 'kobe', 21, '2006/12/29', 42),
(22, '张敬轩', 22, '2006/12/29', 32),
(23, 'kobe', 23, '2014/01/5', 92),
(24, 'kobe', 24, '2014/08/23', 56),
(25, '张敬轩', 25, '2015/05/29', 15),
(27, '张敬轩', 33, '2015/08/29', 10),
(28, '董柏顺', 34, '2015/09/04', 30);

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `username` varchar(15) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(15) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  `age` int(3) DEFAULT NULL,
  `phone` varchar(12) DEFAULT NULL,
  `headimg` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `email`, `address`, `age`, `phone`, `headimg`) VALUES
(1, 'kobe', 'lakers24', '1151650717@qq.com', 'LA', 37, '13051189772', '../img/17.jpg'),
(2, 'jordan', 'bulls23', '1256034681@qq.com', 'Chicago', 32, '13800138000', '../img/16.jpg'),
(3, '张敬轩', 'Hins', '1151650717@qq.com', 'Hong Kong', 34, '13051189772', '../img/18.jpg'),
(4, 'T-Mac', 'Magic1', '1151650717@qq.com', 'Houston', 34, '13051189772', '../img/48.jpg'),
(5, '董柏顺', 'shunzi', '1151650717@qq.com', '天津', 19, '13051189772', '../img/49.png');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
