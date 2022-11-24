var CODEEDITOR_ID = '';
window.onload=function (){
	CODEEDITOR_ID = this.getUrlKey('CODEEDITOR_ID');	//链接参数
	getCodeFromView();
}

window.onresize=function(){  
	cmainFrame();
};

if(ie_error()){
       $('#editor').hide();
}else{
    $('#editorBox').hide();
    ace.require("ace/ext/language_tools");
    var editor = ace.edit("editor");
    editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
    });
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/java");
}

//获取code
function getCodeFromView(){
	$.ajax({
		xhrFields: {
            withCredentials: true
        },
		type: "POST",
		url: httpurl+'codeeditor/getCodeFromView',
    	data: {CODEEDITOR_ID:CODEEDITOR_ID,tm:new Date().getTime()},
		dataType:'json',
		success: function(data){
			if("success" == data.result){
			  $("#jiazai").hide();
			  setCodeTxt(data.code);
			 }else if ("exception" == data.result){
              	showException("模版显示",data.exception);//显示异常
             }
		}
	}).done().fail(function(){
        swal("登录失效!", "请求服务器无响应，稍后再试", "warning");
    });
}

//设置代码内容
function setCodeTxt(value){
    if(typeof(editor) == "undefined"){
        $('#editorBox').val(value);
    }else{
        editor.setValue(value,-1);
    } 
}

//根据url参数名称获取参数值
function getUrlKey (name) {
    return decodeURIComponent(
        (new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null;
}

function cmainFrame(){
	var hmain = document.getElementById("editor");
	var bheight = document.documentElement.clientHeight;
	hmain .style.width = '100%';
	hmain .style.height = (bheight) + 'px';
}

cmainFrame();