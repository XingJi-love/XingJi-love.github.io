var posts=["posts/64063/","posts/52027/","posts/9023/","posts/18950/","posts/18951/","posts/10000/","posts/22439/","posts/39261/","posts/57959/","posts/59157/","posts/34027/","posts/20241024/","posts/20240907/","posts/2933/","posts/39254/","posts/49708/","posts/62221/","posts/6117/","posts/26817/","posts/39958/","posts/32969/","posts/18731/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://img02.anheyu.com/adminuploads/1/2022/09/15/63232b7d91d22.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"},{"name":"XingJiのBlog","link":"https://home.xingji.fun/","avatar":"/img/XingJi.jpg","descr":"迄今所有人生都大写着失败，但不妨碍我继续向前✨","siteshot":"/img/XingJiのBlog博客主页.png"},{"name":"Justlovesmile’s BLOG","link":"https://blog.justlovesmile.top/","avatar":"/img/Justlovesmile’s BLOG头像.png","descr":"一个计算机专业学生的个人博客，记录着学习笔记和生活中的思考，期待着和所有人相遇","siteshot":"/img/Justlovesmile’s BLOG大佬博客主页.png"},{"name":"百里飞洋の博客","link":"https://blog.meta-code.top/","avatar":"https://avatars.githubusercontent.com/u/81922999?v=4","descr":"星河滚烫，无问西东","siteshot":"/img/百里飞洋大佬博客主页.png"},{"name":"吮指原味姬","link":"https://www.yejinblok.cn/","avatar":"https://img01.anheyu.com/useruploads/243/2023/09/11/64fe7d926f8a0.jpg","descr":"无论什么时候，都不要后悔","siteshot":"https://img01.anheyu.com/useruploads/243/2023/08/14/64da1d6634a04.webp"},{"name":"纸鹿摸鱼处","link":"https://blog.zhilu.cyou","avatar":"https://www.zhilu.cyou/api/avatar.png","descr":"纸鹿至麓不知路，支炉制露不止漉","siteshot":"/img/纸鹿摸鱼处大佬博客主页.png"},{"name":"张时贰","link":"https://zhsher.cn","avatar":"https://q1.qlogo.cn/g?b=qq&nk=1310446718&s=5","descr":"环转码，爱敲代码的小张！","siteshot":"/img/张时贰大佬博客主页.png"},{"name":"山岳库博","link":"https://kmar.top/","avatar":"https://cdn.jsdelivr.net/npm/@kmar/fonts/avatar/own.png","descr":"开发学习启发性二刺螈","siteshot":"https://cdn.jsdelivr.net/npm/@kmar/fonts/sc/own.jpg"},{"name":"時光","link":"https://blog.shiguang666.eu.org/","avatar":"https://blog.shiguang666.eu.org/img/avatar.png","descr":"心寄朗朗乾坤，胸怀真修之道。","siteshot":"https://blog.shiguang666.eu.org/img/shiguang-blog.png"},{"name":"赛博空间","link":"https://macin.top/","avatar":"/img/赛博空间头像.png","descr":"生命不息，探索不止","siteshot":"/img/赛博空间大佬博客主页.png"},{"name":"CrazyWong","link":"https://blog.crazywong.com/","avatar":"https://blog.crazywong.com/img/avatar.png","descr":"热衷学习，热衷生活","siteshot":"/img/CrazyWong大佬博客主页.png"},{"name":"夜梦星尘の折腾日记","link":"https://tech.yemengstar.com","avatar":"https://cn-sy1.rains3.com/yemengtechpublic/yemenglogoNEW.bmp","descr":"眼底星河荡漾，踏着梦走过时光","siteshot":"/img/夜梦星尘の折腾日记大佬博客主页.png"},{"name":"Guo Le's Blog","link":"https://blog.guole.fun/","avatar":"https://blog.guole.fun/img/gl.jpg","descr":"生命是独立是自由是爱与和平","siteshot":"/img/Guo Le's Blog大佬博客主页.png"},{"name":"Mycpen","link":"https://blog.cpen.top/","avatar":"https://blog.cpen.top/img/avatar.jpg","descr":"这是一个有趣的博客","siteshot":"https://blog.cpen.top/img/siteshot.jpg"},{"name":"贰猹的小窝","link":"https://noionion.top/","avatar":"https://pub-noionion.oss-cn-hangzhou.aliyuncs.com/head.jpg","descr":"用这生命中的每一秒，给自己一个不后悔的未来","siteshot":"https://pub-noionion.oss-cn-hangzhou.aliyuncs.com/noionion.top.png"},{"name":"SerMs","link":"https://blog.serms.top/","avatar":"https://bu.dusays.com/2023/10/11/65269ea6226c8.png","descr":"代码如诗，细节成就极致，逻辑成就完美。","siteshot":"https://bu.dusays.com/2023/10/11/65264d86ddebb.png"},{"name":"無名小栈","link":"https://blog.imsyy.top/","avatar":"https://pic.imgdb.cn/item/65bc52b0871b83018a06699d.png","descr":"分享技术与科技生活","siteshot":"https://pic.imgdb.cn/item/65dc47009f345e8d030b65ba.png"},{"name":"Ariasakaの小窝","link":"https://blog.yaria.top","avatar":"https://weavatar.com/avatar/795ce413eb6c7485954b78283ffa3e00","descr":"人有悲欢离合 月有阴晴圆缺","siteshot":"https://vercel.yaria.top/img/siteshot.png"},{"name":"Joker2Yue 的个人博客","link":"https://blog.joker2yue.cn/","avatar":"https://resource.joker2yue.cn/blog/images/avatar_joker.jpg","descr":"Joker Never Plays Jokes.","siteshot":"https://resource.joker2yue.cn/blog/images/link/siteshot/blog.joker2yue.cn.jpg"},{"name":"犬小哈教程","link":"https://www.quanxiaoha.com/","avatar":"/img/犬小哈教程.png","descr":"犬小哈教程，让学习更简单","siteshot":"/img/犬小哈教程大佬博客主页.png"},{"name":"zhongye 📟","link":"https://zhongye1.github.io/","avatar":"https://free-img.400040.xyz/4/2024/06/23/667840a0ab09e.jpg","descr":"in GZHU","siteshot":"https://free-img.400040.xyz/4/2024/06/25/667a53d0e9e31.jpg"},{"name":"Darian.MingのBlog","link":"https://blog.darian-ming.cn/","avatar":"https://blog.darian-ming.cn/img/avatar.png","descr":"镜花水月，不过尔尔，无悔过去，不问将来","siteshot":"https://blog.darian-ming.cn/img/site-shot.png"},{"name":"梦落の小屋","link":"https://blog.dreamfall.cn","avatar":"https://img.mengluo.work/avatar.jpg","descr":"因为不可能，所以才值得相信","siteshot":"/img/梦落の小屋大佬博客主页.png"},{"name":"樱花小镇","link":"https://blog.sakura.vin","avatar":"https://www.sakura.vin/favicon.ico","descr":"小园新种红樱树，闲绕花枝便当游。","siteshot":"https://bu.dusays.com/2023/09/15/6503348d9a06e.png"},{"name":"文奚.技术驿站","link":"https://vxcode.top","avatar":"https://vxcode.top/assets/icon/logo2.png","descr":"分享、记录开发历程，技术之路，才刚刚起步，未来可期！","siteshot":"https://vxcode.top/assets/image/bg_999.png"},{"name":"你不知道的Java知识","link":"https://wl.do","avatar":"https://zang-1307996497.cos.ap-beijing.myqcloud.com/db0937b99413d1e464d1d5cfa45dc5f.jpg","descr":"为往圣继绝学","siteshot":"/img/你不知道的Java知识博客主页.png"},{"name":"7li7li","link":"https://blog.7li7li.cn/","avatar":"https://www.7li7li.cn/img/icon/icon.png","descr":"7li7li小破站","siteshot":"/img/7li7li博客主页.png"},{"name":"XingJiのBlog","link":"https://home.xingji.fun/","avatar":"/img/XingJi.jpg","descr":"迄今所有人生都大写着失败，但不妨碍我继续向前✨","siteshot":"/img/XingJiのBlog博客主页.png"},{"name":"安知鱼","hundredSuffix":"","link":"https://blog.anheyu.com/","avatar":"https://img02.anheyu.com/adminuploads/1/2022/09/15/63232b7d91d22.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"},{"name":"呆鱼","link":"https://daiyu.fun/","avatar":"https://daiyu.fun/img/avatar.png","descr":"Hello World！","screenshot":"https://daiyu.fun/img/screenshot.png"},{"name":"清羽飞扬","link":"https://blog.liushen.fun/","avatar":"https://blog.liushen.fun/info/avatar.ico","descr":"柳影曳曳，清酒孤灯，扬笔撒墨，心境如霜","siteshot":"https://blog.liushen.fun/info/siteshot.jpg"},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","descr":"分享设计与科技生活","siteshot":"https://bu.dusays.com/2024/07/16/6695ebc5158dc.jpg"},{"name":"青桔气球","link":"https://blog.qjqq.cn/","avatar":"https://avatar.qjqq.cn/1/6503bb1b7fa1a.webp!avatar","descr":"分享网络安全与科技生活","siteshot":"https://avatar.qjqq.cn/1/647571edf20a9.webp!avatar"},{"name":"梦爱吃鱼","link":"https://blog.bsgun.cn/","avatar":"https://oss-cdn.bsgun.cn/logo/avatar.256.png","descr":"但愿日子清静抬头遇见的满是柔情","siteshot":"/img/梦爱吃鱼大佬博客主页.png"},{"name":"June's Blog","link":"https://blog.june-pj.cn/","avatar":"https://gitlab.com/June_PJ/PicGo-PJ/raw/main/img/avatar.webp","descr":"遇事不决，可问春风","siteshot":"https://gitlab.com/June_PJ/PicGo-PJ/raw/main/img/siteshot.webp"},{"name":"Leonus","link":"https://blog.leonus.cn/","avatar":"https://q1.qlogo.cn/g?b=qq&nk=990320751&s=5","descr":"进一寸有进一寸的欢喜","siteshot":"/img/Leonus大佬博客主页.png"},{"name":"Eurkon","link":"https://blog.eurkon.com","avatar":"https://blog.eurkon.com/images/user/avatar.jpg","descr":"及时当勉励，岁月不待人","siteshot":"/img/Eurkon大佬博客主页.png"},{"name":"❖星港◎Star☆","link":"https://blog.starsharbor.com","avatar":"https://bu.dusays.com/2023/09/27/6513053bebdb2.webp","descr":"以博客记录生活与热爱！","siteshot":"https://bu.dusays.com/2023/10/02/651a4d79bb412.jpg"},{"name":"Ganzhe","link":"https://ganzhe.site/","avatar":"https://pic.imgdb.cn/item/64895d391ddac507cce97bc3.webp","descr":"顺其自然，持之以恒","siteshot":"https://img01.anheyu.com/useruploads/151/2023/07/15/64b2525d6c65f.webp"},{"name":"爱吃肉的猫","link":"https://meuicat.com/","avatar":"https://bu.dusays.com/2023/08/25/64e8ca25e89c5.jpg","descr":"有肉有猫有生活","siteshot":"https://bu.dusays.com/2023/08/25/64e8ca25e89c5.jpg"},{"name":"清羽飞扬","link":"https://blog.liushen.fun/","avatar":"https://blog.liushen.fun/info/avatar.ico","descr":"柳影曳曳，清酒孤灯，扬笔撒墨，心境如霜","siteshot":"https://blog.liushen.fun/info/siteshot.jpg"},{"name":"竹山一叶","link":"https://zsyyblog.com/","avatar":"https://img.zsyyblog.com/favicon.jpg","descr":"来了就不想走的小家","siteshot":"https://img.zsyyblog.com/siteshot.png"},{"name":"唐志远","link":"https://fe32.top/","avatar":"https://bu.dusays.com/2022/05/02/626f92e193879.jpg","desc":"古今之成大事者，不惟有超世之才，亦必有坚忍不拔之志","screenshot":"https://bu.dusays.com/2023/07/16/64b400bf8e546.jpg"},{"name":"铭心石刻","link":"https://blog.kouseki.cn/","avatar":"https://blog.kouseki.cn/imgs/avatar.webp","descr":"愿岁并谢，与友长兮","siteshot":"https://blog.kouseki.cn/imgs/siteshot.webp"},{"name":"JayHrn","link":"https://blog.lvhrn.cn","avatar":"https://npm.onmicrosoft.cn/hrn-img@1.0.0/img/avatar.jpg","descr":"念念不忘，必有回响","siteshot":"https://npm.onmicrosoft.cn/hrn-img@1.0.0/img/siteshot.jpg"},{"name":"前尘小筑","link":"https://mnchen.cn/","avatar":"https://image.mnchen.cn/2023/12/mnochen.jpg","descr":"虽多尘色染，犹见墨痕浓","siteshot":"/img/前尘小筑大佬博客主页.png"},{"name":"雷雷屋头","link":"https://ll.sc.cn","avatar":"https://ll.sc.cn/img/avatar.png","descr":"爱生活，爱工作，爱折腾。","siteshot":"https://ll.sc.cn/img/siteshot.webp"},{"name":"Fomalhaut🥝","link":"https://www.fomal.cc/","avatar":"https://www.fomal.cc/assets/avatar.webp","descr":"Future is now 🍭🍭🍭","siteshot":"https://source.fomal.cc/siteshot/www.fomal.cc.webp"},{"name":"萌傀儡","link":"https://blhorizon.github.io","avatar":"https://blhorizon.github.io/img/avatar.webp","descr":"人生，就是用来享受的！","siteshot":"/img/萌傀儡大佬博客主页.png"},{"name":"山岳库博","link":"https://kmar.top/","avatar":"https://cdn.jsdelivr.net/npm/@kmar/fonts/avatar/own.png","descr":"开发学习启发性二刺螈","siteshot":"https://cdn.jsdelivr.net/npm/@kmar/fonts/sc/own.jpg"},{"name":"轻笑Chuckle","link":"https://www.qcqx.cn","avatar":"https://www.qcqx.cn/head.webp","descr":"漫天倾尘,风中轻笑","siteshot":"https://www.qcqx.cn/qcqx.webp"},{"name":"Jonas","link":"https://www.laogou717.com/","avatar":"/img/Jonas头像.png","descr":"倘若生活太苦，我便往里加点糖","siteshot":"/img/Jonas大佬博客主页.png"},{"name":"小冰博客","link":"https://zfe.one","avatar":"https://zfe.space/images/headimage.png","descr":"做个有梦想的人！","siteshot":"/img/小冰博客大佬主页.png"},{"name":"老王 博客","link":"https://blbl.us.kg/","avatar":"https://img02.anheyu.com/adminuploads/1/2022/09/15/63232b7d91d22.jpg","descr":"生活明朗，万物可爱","siteshot":"/img/老王博客大佬主页.png"},{"name":"煮雪话河山`Blog","link":"https://blog.cent1pedee.top/","avatar":"https://img.cent1pedee.top/img/wechat.jpg","descr":"如月之恒，如日之升。","siteshot":"https://img.cent1pedee.top/img/siteshot.png"},{"name":"小旦","link":"https://satera.cn","avatar":"https://satera.cn/img/logo.png","descr":"SNTube Studio","siteshot":"https://bu.dusays.com/2023/09/16/65052aa7c13c9.png"},{"name":"葱苓sama","link":"https://blog.ciraos.top","avatar":"https://cdn.jsdelivr.net/gh/ciraos/ciraos-static@main/img/avatar1.avif","descr":"Don't worry, Be happy.","siteshot":"https://cdn.jsdelivr.net/gh/ciraos/ciraos-static@main/img/site-shot.avif"},{"name":"Mikuの次行星","link":"https://tkgso.fun","avatar":"https://cravatar.cn/avatar/ba76faef3cc8252bd0433b3515124389?s=512","descr":"心有多宽，世界就有多远","siteshot":"/img/Mikuの次行星大佬主页.png"},{"name":"山山而川","link":"https://blog.immm.cn/","avatar":"https://blog.immm.cn/favicon.ico","descr":"人生海海 山山而川 不过尔尔","siteshot":"https://blog.immm.cn/siteshot.jpg"},{"name":"朽丘秋雨","link":"https://koxiuqiu.cn","avatar":"https://cdn.koxiuqiu.cn/koxiuqiu/img/favicon.webp","descr":"一定会和喜欢的人在夏日夜晚牵手慢步","siteshot":"https://koimg.cn-sy1.rains3.com/2024/08/15/686401.webp"},{"name":"中弦星空魔法屋","link":"https://blog.sinzmise.top/","avatar":"https://blog.sinzmise.top/img/512.png","descr":"种下一颗有故事的种子，让它带着魔法和奇迹生根发芽","siteshot":"https://image.thum.io/get/allowJPG/wait/20/width/600/crop/950/https://blog.sinzmise.top/"},{"name":"Niko's Blog","link":"https://www.nikoblog.top","avatar":"https://www.nikoblog.top/avatar.jpg","descr":"世间所有的相遇，都是久别重逢","siteshot":"https://pic.imgdb.cn/item/64c79aee1ddac507ccd58e2a/Snipaste_2023-07-31_19-28-14.webp"},{"name":"阿豪`Blog","link":"https://ahao.ah.cn/","avatar":"https://image.ahao.ah.cn/%E4%B8%8D%E5%B1%91.avif.jpg","descr":"人间值得，未来可期","siteshot":"https://image.ahao.ah.cn/b4f3987b256a963bd96cf48d75068e5.png"},{"name":"Elykia","link":"https://blog.elykia.cn/","avatar":"https://bu.dusays.com/2024/10/25/671b2438203a6.gif","descr":"致以无暇之人","siteshot":"https://bu.dusays.com/2024/10/25/671b50dc2dd2b.png"},{"name":"微笑博客","link":"https://www.wxjxw.cn/","avatar":"https://picdl.sunbangyan.cn/2023/12/01/8a2a3447d4fab9f5c118ca520c1b5265.jpeg","descr":"知天易，易天难。","siteshot":"https://picst.sunbangyan.cn/2023/12/01/b6382844c5dc9980e0a72f49decc6aab.jpeg"},{"name":"冰火之砺","link":"https://blog.marice.top/","avatar":"https://bu.dusays.com/2023/11/29/6567122d3f4a6.jpg","descr":"纵览人间烟火，品质坚如磐石","siteshot":"/img/冰火之砺博客主页.png"},{"name":"Mo的记事簿","link":"https://blog.xiowo.net/","avatar":"https://blog.xiowo.net/img/avatar.png","descr":"万年鸽王，哈哈OvO","siteshot":"https://bu.dusays.com/2024/02/20/65d473a7ceb73.png"},{"name":"btwoa","link":"https://blog.btwoa.com/","avatar":"https://blog.btwoa.com/btwoa.jpg","descr":"世界为你简单","siteshot":"https://blog.btwoa.com/screenshot.png"},{"name":"小赵の破宅","link":"https://blog.zhaoziyi.site","avatar":"https://blog.zhaoziyi.site/images/avatar.jpg","descr":"生数理化生一塌糊涂的理科生，对兴趣情有独钟的追寻！","siteshot":"https://s1.ax1x.com/2023/07/21/pCHL8zj.png"},{"name":"小智の空间站","link":"https://blog.cuixinyu.com","avatar":"https://blog.cuixinyu.com/img/others/avatar.png","descr":"记录学习踩坑","siteshot":"/img/小智の空间站博客主页.png"},{"name":"AI悦创","link":"https://blog.bornforthis.cn","avatar":"https://bornforthis.cn/aiyc.svg","descr":"AI悦创·创造不同～","siteshot":"https://blog.bornforthis.cn/img/link/00-blog.bornforthis.cn.png"},{"name":"琅環书生","link":"https://www.zlog.us.kg","avatar":"https://images.zlog.us.kg/hexo/琅環书生头像.webp","descr":"无远弗届，皆有可能","siteshot":"https://images.zlog.us.kg/hexo/琅環书生站点.webp"},{"name":"中弦星空魔法屋","link":"https://blog.sinzmise.top/","avatar":"https://blog.sinzmise.top/img/512.png","descr":"种下一颗有故事的种子，让它带着魔法和奇迹生根发芽","siteshot":"https://image.thum.io/get/allowJPG/wait/20/width/600/crop/950/https://blog.sinzmise.top/"},{"name":"安小歪blog","link":"https://hexo.shangskr.top","avatar":"https://hexo.shangskr.top/img/favicon.png","descr":"记住你！自己！","siteshot":"https://hexo.shangskr.top/img/siteshot.png"},{"name":"Imz's Blog","link":"https://blog.imz.me/","avatar":"https://pic.imgdb.cn/item/66cfd951d9c307b7e96dcfea.webp","descr":"仰望星空，脚踏实地。","siteshot":"https://pic.imgdb.cn/item/66eed947f21886ccc089a02b.png"},{"name":"青稚の空间","link":"https://blog.linux-qitong.top/","avatar":"https://blog.linux-qitong.top/img/avatar.jpg","descr":"越努力，越幸运.","siteshot":"https://blog.linux-qitong.top/img/qingzhi.webp"},{"name":"TWindyの小站","link":"https://www.twindy.top/","avatar":"https://i1.wp.com/dev.ruom.top/i/2024/10/01/131087.webp","descr":"「离开世界之前 一切都是过程」","siteshot":"https://imgbed.twindy.top/file/1727495560202_picture16.png"},{"name":"Leginn's Blog","link":"https://blog.Leginn.top","avatar":"https://picgo.leginn.top/img/txc.jpg","descr":"紀念","siteshot":"https://picgo.leginn.top/img/www.leginn.top.jpg"},{"name":"Jerry Zhou","link":"https://blog.jerryz.com.cn/","avatar":"https://img.examcoo.com/ask/7386438/202111/163626915705190.jpg","descr":"永远相信美好的事情即将发生","siteshot":"https://image.thum.io/get/width/400/crop/800/allowJPG/wait/20/noanimate/https://blog.jerryz.com.cn"},{"name":"空巷","link":"https://www.kxyr.top/","avatar":"https://www.kxyr.top/assets/img/logo.jpg","descr":"万人空巷","siteshot":"https://www.kxyr.top/assets/img/siteshot.png"},{"name":"兔兔博客🇨🇳","link":"https://blog.tutuxka.eu.org/","avatar":"https://blog.tutuxka.eu.org/assets/avatar.webp","descr":"万事都要全力以赴，包括开心","siteshot":"https://blog.tutuxka.eu.org/tutu.png"},{"name":"风尘落微雨","link":"https://www.weirain.com","avatar":"https://www.weirain.com/images/icon.png","descr":"探索无止境，以字句为足迹，记录每个思考的闪光点","siteshot":"/img/风尘落微雨博客主页.png"},{"name":"汐塔魔法屋","link":"https://blog.sinzmise.top/","avatar":"https://blog.sinzmise.top/images/icon.png","descr":"种下一颗有故事的种子，让它带着魔法和奇迹生根发芽","siteshot":"/img/汐塔魔法屋博客主页.png"},{"name":"东方月初","link":"https://hexo.200038.xyz/","avatar":"https://serv.200038.xyz/2024/09/19/040857.webp","descr":"东方月初，涂山红红。","siteshot":"https://serv.200038.xyz/2024/09/23/930491.webp"},{"name":"周润发","link":"https://blog.aizrf.com/","avatar":"https://blog.aizrf.com/img/logo.png","descr":"不忘初心，方得始终","siteshot":"https://blog.aizrf.com/img/web_img.png"},{"name":"一粒微尘","link":"https://blog.667408.xyz","avatar":"https://blog.667408.xyz/favicon.ico","descr":"撷光以望，纳星于瞳","siteshot":"/img/一粒微尘博客主页.png"},{"name":"安艺云","link":"https://netreflix.cn/","avatar":"https://img01.anheyu.com/useruploads/0/2023/04/16/643b7cd95a48b.jpg","descr":"天朗气清，惠风和畅","siteshot":"https://img01.anheyu.com/useruploads/135/2023/05/22/646b135ce1e71.png"},{"name":"定の栈","link":"https://saop.cc","avatar":"https://saop.cc/avatar.webp","descr":"LINK START!","siteshot":"https://saop.cc/siteshot.webp"},{"name":"OvO","link":"https://www.qqe4.com","avatar":"https://image.qqe4.com/PicGo/202409190834575.jpg","descr":"热爱生活，分享科技","siteshot":"https://image.qqe4.com/PicGo/202409221322088.png"},{"name":"李小白","link":"https://blog.lxb.icu/","avatar":"https://q1.qlogo.cn/g?b=qq&nk=648226460&s=640","descr":"与风共舞，随心而行","siteshot":"https://image.thum.io/get/width/400/crop/800/allowJPG/wait/20/anheyu.com/https://blog.lxb.icu"},{"name":"Spark の Blog","link":"https://www.aspark.cc","avatar":"https://www.aspark.cc/img/avatar.webp","descr":"星星之火，可以燎原。","siteshot":"https://www.aspark.cc/img/siteshot.webp"},{"name":"弈鸣小筑","link":"https://blog.lwtools.site","avatar":"https://static.lwtools.site/static/img/favicon.ico","descr":"功不唐捐，玉汝于成","siteshot":"/img/弈鸣小筑博客主页.png"},{"name":"心流","link":"https://natro92.fun","avatar":"https://berial123.oss-cn-beijing.aliyuncs.com/img/860dd94f08a30cf4a8b7fd9685aed42.webp","descr":"Carpe diem.","siteshot":"https://berial123.oss-cn-beijing.aliyuncs.com/img/19494d34d94406d4701447143c4a00c.png"},{"name":"KasumiTech","link":"https://sakurablogs.top/","avatar":"https://bu.dusays.com/2024/11/03/6727572648ee9.jpg","descr":"分享创造价值","siteshot":"https://bu.dusays.com/2024/11/06/672b02a9cc72d.png"},{"name":"REDEYESの小窝","link":"https://www.redeyes.top/","avatar":"https://bucket.redeyes.top/avater.webp","descr":"努力学网络的计科人","siteshot":"https://bucket.redeyes.top/2024/10/20/82681b.webp"},{"name":"璜珀的小屋","link":"https://blog.hpcesia.com/","avatar":"https://blog.hpcesia.com/img/myavatar.webp","descr":"一个想要摆烂却又不甘于躺平的人","siteshot":"https://blog.hpcesia.com/img/siteshot.webp"},{"name":"xyx404","link":"https://xyx404.github.io/","avatar":"https://fastly.jsdelivr.net/npm/xyx404blogphoto@1.2.23/avatar.webp","descr":"摆烂摆烂！","siteshot":"https://fastly.jsdelivr.net/npm/xyx404blogphoto@1.2.24/wzsyjt.png"},{"name":"安知鱼","hundredSuffix":"","link":"https://blog.anheyu.com","avatar":"https://img02.anheyu.com/adminuploads/1/2022/09/15/63232b7d91d22.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"},{"name":"June's Blog","link":"https://blog.june-pj.cn/","avatar":"https://gitlab.com/June_PJ/PicGo-PJ/raw/main/img/avatar.webp","descr":"遇事不决，可问春风","siteshot":"https://gitlab.com/June_PJ/PicGo-PJ/raw/main/img/siteshot.webp"},{"name":"梦爱吃鱼","link":"https://blog.bsgun.cn/","avatar":"https://oss-cdn.bsgun.cn/logo/avatar.256.png","descr":"但愿日子清静抬头遇见的满是柔情","siteshot":"/img/梦爱吃鱼大佬博客主页.png"},{"name":"AI悦创","link":"https://blog.bornforthis.cn","avatar":"https://bornforthis.cn/aiyc.svg","descr":"AI悦创·创造不同～","siteshot":"https://blog.bornforthis.cn/img/link/00-blog.bornforthis.cn.png"},{"name":"Jerry Zhou","link":"https://blog.jerryz.com.cn/","avatar":"https://img.examcoo.com/ask/7386438/202111/163626915705190.jpg","descr":"永远相信美好的事情即将发生","siteshot":"https://image.thum.io/get/width/400/crop/800/allowJPG/wait/20/noanimate/https://blog.jerryz.com.cn"},{"name":"Darian.MingのBlog","link":"https://blog.darian-ming.cn/","avatar":"https://blog.darian-ming.cn/img/avatar.png","descr":"镜花水月，不过尔尔，无悔过去，不问将来","siteshot":"https://blog.darian-ming.cn/img/site-shot.png"},{"name":"小奥のblog","link":"https://www.aokaoka.top/","avatar":"https://tuchuang.aokaoka.top/file/1728007981683_pic09.jpg","descr":"不经一事，不长一智。","siteshot":"/img/小奥のblog博客主页.png"},{"name":"陆小启","link":"https://www.lxqxm.top/","avatar":"https://bu.dusays.com/2024/08/28/66ceb35deb5b1.webp","descr":"一个对你有帮助的圈子","siteshot":"https://bu.dusays.com/2024/11/03/6726f7c948163.png"},{"name":"Gzzz’s Blog","link":"https://blog.gzzz.pro/","avatar":"https://image.gzzz.pro/image/202407091318520.webp","descr":"逝者如斯夫，不舍昼夜。","siteshot":"https://image.gzzz.pro/image/202411041425533.webp"},{"name":"杜老师说","link":"https://dusays.com","avatar":"https://cdn.dusays.com/avatar.png","descr":"师者，传道，授业，解惑！"},{"name":"凉心’s Blog","link":"https://www.lxink.cn","avatar":"https://www.lxink.cn/favicon.ico","descr":"我的故事只讲给你听"},{"name":"咖啡豆子coffee的小站","link":"https://blog.kfdzcoffee.cn","avatar":"https://image.kfdzcoffee.cn/i/1/avatar.png","descr":"所有奇迹的始发点"},{"name":"晓寒","link":"https://xiaohan-kaka.me/","avatar":"https://xiaohan-kaka.me/_next/image?url=https%3A%2F%2Ff003.backblazeb2.com%2Ffile%2Fblog-v3%2F120887894_p1.jpg&w=384&q=75","descr":"醉后不知天在水，满船清梦压星河"},{"name":"D_SUPER BLOG","link":"https://dsuper.xyz","avatar":"https://dsuper.xyz/avatar.png","descr":"分享效率笔记、互联网技术、生活娱乐。"},{"name":"Dooo.ng","link":"https://dooo.ng","avatar":"https://image.dooo.ng/i/2023/11/28/6565fbec02fbd.webp","descr":"Hi, Here is WizisCool 👋"},{"name":"Risinglce","link":"https://www.imrising.cn","avatar":"https://www.imrising.cn/images/avatar.png","descr":"自由摇曳 生生不息","siteshot":"https://www.imrising.cn/images/website.png"},{"name":"理随","link":"https://lisui.top/","avatar":"https://s3.qjqq.cn/3/64de148060f7b.webp!color","descr":"生而无畏，站至终章"},{"name":"故人随笔","descr":"寒江孤影，江湖故人","link":"https://ifwww.com","avatar":"https://ifwww.com/img/god.png"},{"name":"辉辉博客","link":"https://www.hui.vin","avatar":"https://www.hui.vin/img/logo.png","descr":"乘风破浪逐水流,一路晴空月参差"},{"name":"时光潜流","link":"http://www.dreamcenter.top","avatar":"https://www.dreamcenter.top/imgs/avatar.jpg","descr":"妹控的中二君！"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };