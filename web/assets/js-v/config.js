﻿//服务器host
//var httpurl = 'http://127.0.0.1:8080/fhadmin/';
var httpurl = 'http://127.0.0.1:8080/';
 let diagWidth = 600;
 let diagHeight = 600;

 //显示异常
 function showException(modular, exception) {
 	swal("[" + modular + "]程序异常!", "抱歉！您访问的页面出现异常，请稍后重试或联系管理员 " + exception, "warning");
 }
