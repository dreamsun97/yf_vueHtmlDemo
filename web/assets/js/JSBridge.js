var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
// 将获取的设备编码
let resCode = "";
let httpurls = 'http://172.19.75.33:8080/fhadmin/';
//JS注册事件监听
function connectWebViewJavascriptBridge(callback) {
	if (window.WebViewJavascriptBridge) {
		callback(WebViewJavascriptBridge)
	} else {
		document.addEventListener(
			'WebViewJavascriptBridgeReady',
			function() {
				callback(WebViewJavascriptBridge)
			},
			false
		);
	}
}


if (isAndroid) {
	new Promise(function(resolve, reject) {
		// 注册事件
		connectWebViewJavascriptBridge(function(bridge) {
			bridge.init(function(message, responseCallback) {
				var data = {
					'Javascript Responds': 'Wee!'
				};
				responseCallback(data);
			});
			bridge.registerHandler("functionInJs", function(data, responseCallback) {
				alert(data);
				var data = document.getElementById("text1").value;
				var responseData = "我是Android调用js方法返回的数据---" + data;
				responseCallback(responseData);
			});
			resolve("success");
		})
	}).then((result) => {
		// 获取设备信息
		getInfo();

	})
} else {
	resCode = "ZSXP01"
	getHtmlByCOde("ZSXP01");
	// getInfo();
}





//获取设备信息，编码
function getInfo() {
	var data = '{"MessageId":"11123322","MessageMethod":"ACTION_GETSETTING","MessageContent":""}';
	window.WebViewJavascriptBridge.callHandler(
		'submitFromWeb', data,
		function(responseData) {
			responseData = responseData.replace(/\\\"/g, '"').replace('"{"', '{"').replace('}"', '}');
			let json = JSON.parse(responseData);
			// 获取设备code 编码
			let code = json.messageContent.releaseUrlBs;
			if (code != '' && code != undefined) {
				resCode = code;
				// 通过设备编码CODE 获取对应的模板

				getHtmlByCOde(code);
			} else {
				swal("获取设备编码失败", "请求数据失败，请重新尝试", "warning");
			}

		}
	);
}

//刷新发布页面
function setRefresh() {
	var data = '{"MessageId":"11123322","MessageMethod":"ACTION_REFRESH","MessageContent":""}';
	window.WebViewJavascriptBridge.callHandler(
		'submitFromWeb', data,
		function(responseData) {

		}
	);
}

//播放声音
function playVoice(message) {
	var data = '{"MessageId":"11123322","MessageMethod":"ACTION_PLAYVOICE","MessageContent":{"message":"' + message +
		'"}}';
	window.WebViewJavascriptBridge.callHandler(
		'submitFromWeb', data,
		function(responseData) {}
	);
}

function getHtmlByCOde(code) {
	if (code == null || code == "") {
		swal("获取设备编码失败", "请求数据失败，请重新尝试", "warning");
	} else {
		$.ajax({
			xhrFields: {
				withCredentials: true
			},
			type: "POST",
			url: httpurls + 'android/getHtmlByCOde',
			data: {
				CODE: code
			},
			dataType: "json",
			success: function(data) {
				if ("success" == data.result) {
					if (data.pd == null || data.pd == '') {
						swal("获取模板失败", "请检查你的设备编码是否正确，设备是否已关联模板", "warning");
					} else {
						// 将${httpurl}  替换成 config.js 中配置的接口地址
						data.pd.CODE_HTML = data.pd.CODE_HTML.replace(/\${httpurl}/g, httpurls);
						let iframe = document.getElementById('myiframe');
						iframe.contentWindow.document.open();
						iframe.contentWindow.document.write(data.pd.CODE_HTML)
						iframe.contentWindow.document.close();
					}
				} else if ("exception" == data.result) {
					swal("获取数据失败", "请求接口，获取数据失败，请重新尝试！", "warning");
				}
			}
		})
	}
}

// 获取设备编码，等待iframe进行调用，iframe通过父页面获取设备编码
function getCode() {
	return resCode;
}
