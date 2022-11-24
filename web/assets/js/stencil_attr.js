function addAttrs(selectedDiv) {
	var attrName = $(selectedDiv).attr("name");
	if ("KEY_BASIC_CALL" == attrName) {
		key_basic_call();
		initTemplate();
	}
	if ("KEY_OPEN_CALL" == attrName) {
		key_open_call();
		initTemplate();
	}
	if ("KEY_ALL_CALL" == attrName) {
		key_all_call();
		initTemplate();
	}
	if ("KEY_QUE_WAIT" == attrName) {
		key_que_wait();
		initTemplate();
	}
	if ("KEY_ROOM_WAIT" == attrName) {
		key_room_wait();
		initTemplate();
	}
	if ("KEY_ALL_WAIT" == attrName) {
		key_all_wait();
		initTemplate();
	}
	if ("KEY_QUE_COUNT" == attrName) {
		key_que_count();
	}
	if ("KEY_ROOM_COUNT" == attrName) {
		key_room_count();
	}
	if ("KEY_WORKER_INFO" == attrName) {
		key_worker_info(selectedDiv.id);
	}
	if ("KEY_ORGAN_INFO" == attrName) {
		key_organ_info();
	}
	if ("KEY_IMG_LIST" == attrName) {
		key_img_list();
	}
	if ("KEY_VIDEO_LIST" == attrName) {
		key_video_list();
	}
	if ("KEY_TIME_NOW" == attrName) {
		key_time_now();
	}
	if ("KEY_TXT_SCROLL" == attrName) {
		key_txt_scroll();
	}
	if ("KEY_NOTICE_INFO" == attrName) {
		key_notice_info();
	}
	if ("KEY_UNLOGIN_INFO" == attrName) {
		key_unlogin_info();
	}
	if ("KEY_CALLED_INFO" == attrName) {
		key_called_info();
		initTemplate();
	}
}

var template; //格式模板数据

//普通叫号属性
function key_basic_call() {
	//行数
	var str = "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>行数:</td>";
	str += "<td><input type='number' name='row' id='row' value='' style='width: 100%;' /></td></tr>";
	//列数
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>列数:</td>";
	str += "<td><input type='number' name='column' id='column' value='' style='width: 100%;' /></td></tr>";
	//字号
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>字号:</td>";
	str += "<td><input type='number' name='font_size' id='font_size' value='' style='width: 100%;' /></td></tr>";
	//颜色
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>颜色:</td>";
	str +=
		"<td><input type='text' name='font_color' id='font_color' placeholder='透明' class='form-control demo' data-control='hue' style='width: 100%;' /></td></tr>";
	//首行颜色
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>首行颜色:</td>";
	str +=
		"<td><input type='text' name='first_color' id='first_color' placeholder='透明' class='form-control demo' data-control='hue' style='width: 100%;' /></td></tr>";
	//字体
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>字体:</td>";
	str += "<td><select name='font' id='font' style='width: 100%;'>"
	str += "<option value='st'>宋体</option>";
	str += "<option value='kt'>楷体</option>";
	str += "<option value='ht'>黑体</option>";
	str += "<option value='fs'>仿宋</option></select></td></tr>";
	//动作方式
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>动作方式:</td>";
	str += "<td><select name='action' id='action' style='width: 100%;'>"
	str += "<option value='-1'>静止</option>";
	str += "<option value='0'>至上而下</option>";
	str += "<option value='1'>至下而上</option></select></td></tr>";
	//列对齐方式
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>列对齐方式:</td>";
	str += "<td><select name='align' id='align' style='width: 100%;'>"
	str += "<option value='0'>左对齐</option>";
	str += "<option value='1'>居中</option>";
	str += "<option value='2'>右对齐</option></select></td></tr>";
	//格式模板
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>格式模板:</td>";
	str += "<td><select name='template_id' class='template' id='template_id' style='width: 100%;'>"
	str += "<option value='0'>模板1</option>";
	str += "<option value='1'>模板2</option></select></td></tr>";
	//关联诊台
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>关联诊台:</td>";
	str += "<td><select name='is_seat' id='is_seat' style='width: 100%;'>"
	str += "<option value='0'>否</option>";
	str += "<option value='1'>1</option>";
	str += "<option value='2'>2</option>";
	str += "<option value='3'>3</option>";
	str += "<option value='4'>4</option>";
	str += "<option value='5'>5</option></select></td></tr>";

	$("#attr").html(str); //表格填充
}

//弹出叫号属性
function key_open_call() {
	//隐藏时间
	var str = "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>隐藏时间:</td>";
	str +=
		"<td><input type='number' placeholder='单位:秒' name='hide_time' id='hide_time' value='' style='width: 100%;' /></td></tr>";
	//背景颜色
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>背景颜色:</td>";
	str +=
		"<td><input type='text' name='bg_color' id='bg_color' placeholder='透明' class='form-control demo' data-control='hue' style='width: 100%;' /></td></tr>";
	//是否闪烁
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>是否闪烁:</td>";
	str += "<td><select name='is_twinkle' id='is_twinkle' style='width: 100%;'>"
	str += "<option value='0'>是</option>";
	str += "<option value='1'>否</option></select></td></tr>";
	//第一行字号
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>第一行字号:</td>";
	str += "<td><input type='number' name='font_size_1' id='font_size_1' value='' style='width: 100%;' /></td></tr>";
	//第一行颜色
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>第一行颜色:</td>";
	str +=
		"<td><input type='text' name='font_color_1' id='font_color_1' placeholder='透明' class='form-control demo' data-control='hue' style='width: 100%;' /></td></tr>";
	//第一行字体
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>第一行字体:</td>";
	str += "<td><select name='font_1' id='font_1' style='width: 100%;'>"
	str += "<option value='st'>宋体</option>";
	str += "<option value='kt'>楷体</option>";
	str += "<option value='ht'>黑体</option>";
	str += "<option value='fs'>仿宋</option></select></td></tr>";
	//第一行格式模板
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>第一行格式:</td>";
	str += "<td><select name='format_1'  class='template' id='format_1' style='width: 100%;'>"
	str += "<option value='0'>模板1</option>";
	str += "<option value='1'>模板2</option></select></td></tr>";
	//第二行字号
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>第二行字号:</td>";
	str += "<td><input type='number' name='font_size_2' id='font_size_2' value='' style='width: 100%;' /></td></tr>";
	//第二行颜色
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>第二行颜色:</td>";
	str +=
		"<td><input type='text' name='font_color_2' id='font_color_2' placeholder='透明' class='form-control demo' data-control='hue' style='width: 100%;' /></td></tr>";
	//第二行字体
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>第二行字体:</td>";
	str += "<td><select name='font_1' id='font_2' style='width: 100%;'>"
	str += "<option value='st'>宋体</option>";
	str += "<option value='kt'>楷体</option>";
	str += "<option value='ht'>黑体</option>";
	str += "<option value='fs'>仿宋</option></select></td></tr>";
	//第二行格式模板
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>第二行格式:</td>";
	str += "<td><select name='format_2'  class='template' id='format_2' style='width: 100%;'>"
	str += "<option value='0'>模板1</option>";
	str += "<option value='1'>模板2</option></select></td></tr>";
	//第三行字号
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>第三行字号:</td>";
	str += "<td><input type='number' name='font_size_3' id='font_size_3' value='' style='width: 100%;' /></td></tr>";
	//第三行颜色
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>第三行颜色:</td>";
	str +=
		"<td><input type='text' name='font_color_3' id='font_color_3' placeholder='透明' class='form-control demo' data-control='hue' style='width: 100%;' /></td></tr>";
	//第三行字体
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>第三行字体:</td>";
	str += "<td><select name='font_3' id='font_3' style='width: 100%;'>"
	str += "<option value='st'>宋体</option>";
	str += "<option value='kt'>楷体</option>";
	str += "<option value='ht'>黑体</option>";
	str += "<option value='fs'>仿宋</option></select></td></tr>";
	//第三行格式模板
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>第三行格式:</td>";
	str += "<td><select name='format_3' class='template' id='format_3' style='width: 100%;'>"
	str += "<option value='0'>模板1</option>";
	str += "<option value='1'>模板2</option></select></td></tr>";

	//表格填充
	$("#attr").html(str);
}

/**
//综合叫号
function key_all_call(){
	//屏地址
	var str ="<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>屏地址:</td>";
	str+="<td><input type='text' name='led_addr' id='led_addr' value='' style='width: 100%;' /></td></tr>";
	//行数
	str+="<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>行数:</td>";
	str+="<td><input type='number' name='row' id='row' value='' style='width: 100%;' /></td></tr>";
	//列数
	str+="<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>列数:</td>";
	str+="<td><input type='number' name='column' id='column' value='' style='width: 100%;' /></td></tr>";
	//字号
	str+="<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>字号:</td>";
	str+="<td><input type='number' name='font_size' id='font_size' value='' style='width: 100%;' /></td></tr>";
	//颜色
	str+="<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>颜色:</td>";
	str+="<td><input type='text' name='font_color' id='font_color' placeholder='透明' class='form-control demo' data-control='hue' style='width: 100%;' /></td></tr>";
	//首行颜色
	str+="<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>首行颜色:</td>";
	str+="<td><input type='text' name='first_color' id='first_color' placeholder='透明' class='form-control demo' data-control='hue' style='width: 100%;' /></td></tr>";
	//字体
	str+="<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>字体:</td>";
	str+="<td><select name='font' id='font' style='width: 100%;'>"
	str+="<option value='st'>宋体</option>";
	str+="<option value='kt'>楷体</option>";
	str+="<option value='ht'>黑体</option>";
	str+="<option value='fs'>仿宋</option></select></td></tr>";
	//动作方式
	str+="<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>动作方式:</td>";
	str+="<td><select name='action' id='action' style='width: 100%;'>";
	str+="<option value='-1'>静止</option>";
	str+="<option value='0'>至上而下</option>";
	str+="<option value='1'>至下而上</option></select></td></tr>";
	//格式模板
	str+="<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>格式模板:</td>";
	str+="<td><select name='template_id' class='template' id='template_id' style='width: 100%;'>"
	str+="<option value='0'>模板1</option>";
	str+="<option value='1'>模板2</option></select></td></tr>";
	
	$("#attr").html(str);//表格填充
}**/

//队列等待
function key_que_wait() {
	//行数
	var str = "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>行数:</td>";
	str += "<td><input type='number' name='row' id='row' value='' style='width: 100%;' /></td></tr>";
	//列数
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>列数:</td>";
	str += "<td><input type='number' name='column' id='column' value='' style='width: 100%;'  max='6' /></td></tr>";
	//字号
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>字号:</td>";
	str += "<td><input type='number' name='font_size' id='font_size' value='' style='width: 100%;' /></td></tr>";
	//颜色
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>颜色:</td>";
	str +=
		"<td><input type='text' name='font_color' id='font_color' placeholder='透明' class='form-control demo' data-control='hue' style='width: 100%;' /></td></tr>";
	//字体
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>字体:</td>";
	str += "<td><select name='font' id='font' style='width: 100%;'>"
	str += "<option value='st'>宋体</option>";
	str += "<option value='kt'>楷体</option>";
	str += "<option value='ht'>黑体</option>";
	str += "<option value='fs'>仿宋</option></select></td></tr>";
	//等候人数
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>等候人数:</td>";
	str += "<td><input type='number' name='waitnum' id='waitnum' value='' style='width: 100%;' /></td></tr>";
	//翻页时间
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>翻页时间:</td>";
	str +=
		"<td><input type='number' placeholder='-1不翻页,单位：秒' name='next_time' id='next_time' value='' style='width: 100%;' /></td></tr>";
	//横向滚动
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>横向滚动:</td>";
	str +=
		"<td><input type='number' placeholder='-1不滚动,单位:秒' name='h_scrool' id='h_scrool' value='' style='width: 100%;' /></td></tr>";
	//格式模板
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>格式模板:</td>";
	str +=
		"<td><input type='text' name='gsmb' id='gsmb' value='' style='width: 100%;' onclick='editAttr()' /></td></tr>";

	$("#attr").html(str); //表格填充
}

//诊室等候
function key_room_wait() {
	//行数
	var str = "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>行数:</td>";
	str += "<td><input type='number' name='row' id='row' value='' style='width: 100%;' /></td></tr>";
	//列数
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>列数:</td>";
	str += "<td><input type='number' name='column' id='column' value='' style='width: 100%;' /></td></tr>";
	//字号
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>字号:</td>";
	str += "<td><input type='number' name='font_size' id='font_size' value='' style='width: 100%;' /></td></tr>";
	//颜色
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>颜色:</td>";
	str +=
		"<td><input type='text' name='font_color' id='font_color' placeholder='透明' class='form-control demo' data-control='hue' style='width: 100%;' /></td></tr>";
	//首行颜色
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>首行颜色:</td>";
	str +=
		"<td><input type='text' name='first_color' id='first_color' placeholder='透明' class='form-control demo' data-control='hue' style='width: 100%;' /></td></tr>";
	//字体
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>字体:</td>";
	str += "<td><select name='font' id='font' style='width: 100%;'>"
	str += "<option value='st'>宋体</option>";
	str += "<option value='kt'>楷体</option>";
	str += "<option value='ht'>黑体</option>";
	str += "<option value='fs'>仿宋</option></select></td></tr>";
	//翻页时间
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>翻页时间:</td>";
	str +=
		"<td><input type='number' placeholder='-1不翻页,单位:秒' name='next_time' id='next_time' value='' style='width: 100%;' /></td></tr>";
	//格式模板
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>格式模板:</td>";
	str += "<td><select name='template_id' class='template' id='template_id' style='width: 100%;'></select></td></tr>";

	$("#attr").html(str); //表格填充
}

//综合等候
function key_all_wait() {
	//行数
	var str = "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>行数:</td>";
	str += "<td><input type='number' name='row' id='row' value='' style='width: 100%;' /></td></tr>";
	//列数
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>列数:</td>";
	str += "<td><input type='number' name='column' id='column' value='' style='width: 100%;' /></td></tr>";
	//字号
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>字号:</td>";
	str += "<td><input type='number' name='font_size' id='font_size' value='' style='width: 100%;' /></td></tr>";
	//颜色
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>颜色:</td>";
	str +=
		"<td><input type='text' name='font_color' id='font_color' placeholder='透明' class='form-control demo' data-control='hue' style='width: 100%;' /></td></tr>";
	//翻页时间
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>翻页时间:</td>";
	str +=
		"<td><input type='number' placeholder='-1不翻页,单位:秒' name='next_time' id='next_time' value='' style='width: 100%;' /></td></tr>";
	//横向滚动
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>横向滚动:</td>";
	str +=
		"<td><input type='number' placeholder='-1不滚动,单位:秒' name='h_scrool' id='h_scrool' value='' style='width: 100%;' /></td></tr>";
	//等候人数
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>等候人数:</td>";
	str += "<td><input type='number' name='waitnum' id='waitnum' value='4' style='width: 100%;' /></td></tr>";
	//格式模板
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>格式模板:</td>";
	str +=
		"<td><input type='text' name='gsmb' id='gsmb' value='' style='width: 100%;' onclick='editAttr()' /></td></tr>";
	//字体
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>字体:</td>";
	str += "<td><select name='font' id='font' style='width: 100%;'>"
	str += "<option value='st'>宋体</option>";
	str += "<option value='kt'>楷体</option>";
	str += "<option value='ht'>黑体</option>";
	str += "<option value='fs'>仿宋</option></select></td></tr>";
	//列对齐方式
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>列对齐方式:</td>";
	str += "<td><select name='align' id='align' style='width: 100%;'>"
	str += "<option value='0'>左对齐</option>";
	str += "<option value='1'>居中</option>";
	str += "<option value='2'>右对齐</option></select></td></tr>";

	$("#attr").html(str); //表格填充
}

//队列等候人数
function key_que_count() {
	//字号
	var str = "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>字号:</td>";
	str += "<td><input type='number' name='font_size' id='font_size' value='' style='width: 100%;' /></td></tr>";
	//颜色
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>颜色:</td>";
	str +=
		"<td><input type='text' name='font_color' id='font_color' placeholder='透明' class='form-control demo' data-control='hue' style='width: 100%;' /></td></tr>";
	//字体
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>字体:</td>";
	str += "<td><select name='font' id='font' style='width: 100%;'>"
	str += "<option value='st'>宋体</option>";
	str += "<option value='kt'>楷体</option>";
	str += "<option value='ht'>黑体</option>";
	str += "<option value='fs'>仿宋</option></select></td></tr>";

	$("#attr").html(str); //表格填充
}

//诊室等候人数
function key_room_count() {
	//字号
	var str = "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>字号:</td>";
	str += "<td><input type='number' name='font_size' id='font_size' value='' style='width: 100%;' /></td></tr>";
	//颜色
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>颜色:</td>";
	str +=
		"<td><input type='text' name='font_color' id='font_color' placeholder='透明' class='form-control demo' data-control='hue' style='width: 100%;' /></td></tr>";
	//字体
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>字体:</td>";
	str += "<td><select name='font' id='font' style='width: 100%;'>"
	str += "<option value='st'>宋体</option>";
	str += "<option value='kt'>楷体</option>";
	str += "<option value='ht'>黑体</option>";
	str += "<option value='fs'>仿宋</option></select></td></tr>";

	$("#attr").html(str); //表格填充
}

//医生信息
function key_worker_info(id) {
	//字号
	var str = "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>字号:</td>";
	str += "<td><input type='number' name='font_size' id='font_size' value='' style='width: 100%;' /></td></tr>";
	//前缀
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>前缀:</td>";
	str += "<td><input type='text' name='prefix' id='prefix' value='' style='width: 100%;' /></td></tr>";
	//颜色
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>颜色:</td>";
	str +=
		"<td><input type='text' name='font_color' id='font_color' placeholder='透明' class='form-control demo' data-control='hue' style='width: 100%;' /></td></tr>";
	//字体
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>字体:</td>";
	str += "<td><select name='font' id='font' style='width: 100%;'>"
	str += "<option value='st'>宋体</option>";
	str += "<option value='kt'>楷体</option>";
	str += "<option value='ht'>黑体</option>";
	str += "<option value='fs'>仿宋</option></select></td></tr>";
	//关联诊台
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>关联诊台:</td>";
	str += "<td><select name='seat' id='seat' style='width: 100%;'>";
	str += "<option value='0'>否</option>";
	str += "<option value='1'>诊台1</option>";
	str += "<option value='2'>诊台2</option>";
	str += "<option value='3'>诊台3</option>";
	str += "<option value='4'>诊台4</option>";
	str += "<option value='5'>诊台5</option></select></td></tr>";
	//显示类型
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>显示类型:</td>";
	str += "<td><select name='disp_type' onchange=chengName('" + id + "') id='disp_type' style='width: 100%;'>"
	str += "<option value='0'>姓名</option>";
	str += "<option value='1'>工号</option>";
	str += "<option value='4'>职称</option>";
	str += "<option value='2'>照片</option>";
	str += "<option value='3'>简介</option></select></td></tr>";
	//列对齐方式
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>列对齐方式:</td>";
	str += "<td><select name='align' id='align' style='width: 100%;'>";
	str += "<option value='0'>左对齐</option>";
	str += "<option value='1'>居中</option>";
	str += "<option value='2'>右对齐</option></select></td></tr>";
	//横向滚动
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>滚动方式:</td>";
	str +=
		"<td><input type='number' placeholder='-1不滚动,单位:秒' name='speed' id='speed' value='' style='width: 100%;' /></td></tr>";
	//表格填充
	$("#attr").html(str);
}
//更改医生区域名称
function chengName(id) {
	var num = id.replace("KEY_WORKER_INFO", "");
	var name = $("#disp_type option:selected").text();
	$("#li" + id + "sp").html(name + num)
	$("#" + id + "sp").html(name + num)
}

/**
//科室信息
function key_organ_info(){
	//字号
	var str="<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>字号:</td>";
	str+="<td><input type='number' name='font_size' id='font_size' value='' style='width: 100%;' /></td></tr>";
	//颜色
	str+="<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>颜色:</td>";
	str+="<td><input type='text' name='font_color' id='font_color' placeholder='透明' class='form-control demo' data-control='hue' style='width: 100%;' /></td></tr>";
	//字体
	str+="<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>字体:</td>";
	str+="<td><select name='font' id='font' style='width: 100%;'>"
	str+="<option value='st'>宋体</option>";
	str+="<option value='kt'>楷体</option>";
	str+="<option value='ht'>黑体</option>";
	str+="<option value='fs'>仿宋</option></select></td></tr>";
	//列对齐方式
	str+="<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>列对齐方式:</td>";
	str+="<td><select name='align' id='align' style='width: 100%;'>"
	str+="<option value='0'>左对齐</option>";
	str+="<option value='1'>居中</option>";
	str+="<option value='2'>右对齐</option></select></td></tr>";
	//表格填充
	$("#attr").html(str);
}**/

//广告图片
function key_img_list() {
	//切换时间
	var str = "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>切换时间:</td>";
	str +=
		"<td><input type='number' placeholder='单位:秒' name='change_time' id='change_time' value='' style='width: 100%;' /></td></tr>";
	//切换效果
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>切换效果:</td>";
	str += "<td><select name='change_type' id='change_type' style='width: 100%;'>"
	str += "<option value='0'>静止</option>";
	str += "<option value='1'>幻灯片</option></select></td></tr>";
	//表格填充
	$("#attr").html(str);
}

//广告视频
function key_video_list() {
	//音量
	var str = "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>音量:</td>";
	str += "<td><input type='number' name='volume' id='volume' value='' style='width: 100%;' /></td></tr>";
	//循环播放
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>循环播放:</td>";
	str += "<td><select name='is_loop' id='is_loop' style='width: 100%;'>"
	str += "<option value='0'>是</option>";
	str += "<option value='1'>否</option></select></td></tr>";
	//表格填充
	$("#attr").html(str);
}

//时间区域
function key_time_now() {
	//字号
	var str = "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>字号:</td>";
	str += "<td><input type='number' name='font_size' id='font_size' value='' style='width: 100%;' /></td></tr>";
	//颜色
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>颜色:</td>";
	str +=
		"<td><input type='text' name='font_color' id='font_color' placeholder='透明' class='form-control demo' data-control='hue' style='width: 100%;' /></td></tr>";
	//字体
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>字体:</td>";
	str += "<td><select name='font' id='font' style='width: 100%;'>"
	str += "<option value='st'>宋体</option>";
	str += "<option value='kt'>楷体</option>";
	str += "<option value='ht'>黑体</option>";
	str += "<option value='fs'>仿宋</option></select></td></tr>";
	//时间格式
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>时间格式:</td>";
	str += "<td><select name='format_time' id='format_time' style='width: 100%;'>";
	str += "<option value='0'>yyyy年MM月dd日 HH:mm:ss(公历)</option>";
	str += "<option value='1'>yyyy年MM月dd日 HH:mm:ss 星期(公历)</option>";
	str += "<option value='2'>yyyy年MM月dd日 HH:mm:ss(农历)</option>";
	str += "<option value='3'>yyyy年MM月dd日 HH:mm:ss 星期(农历)</option>";
	str += "<option value='4'>yyyy-MM-dd HH:mm:ss(公历)</option>";
	str += "<option value='5'>yyyy-MM-dd HH:mm:ss 星期(公历)</option>";
	str += "<option value='6'>yyyy-MM-dd HH:mm:ss(农历)</option>";
	str += "<option value='7'>yyyy-MM-dd HH:mm:ss 星期(农历)</option>";
	str += "<option value='8'>yyyy-MM-dd(公历)</option>";
	str += "<option value='9'>HH:mm:ss 星期(公历)</option>";
	str += "<option value='10'>HH:mm:ss(农历)</option>";
	str += "<option value='11'>HH:mm:ss 星期(农历)</option></select></td></tr>";
	//表格填充
	$("#attr").html(str);
}

//滚动文字
function key_txt_scroll() {
	//字号
	var str = "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>字号:</td>";
	str += "<td><input type='number' name='font_size' id='font_size' value='' style='width: 100%;' /></td></tr>";
	//颜色
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>颜色:</td>";
	str +=
		"<td><input type='text' name='font_color' id='font_color' placeholder='透明' class='form-control demo' data-control='hue' style='width: 100%;' /></td></tr>";
	//滚动速度
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>滚动速度:</td>";
	str += "<td><input type='number' name='scroll_speed' id='scroll_speed' value='' style='width: 100%;' /></td></tr>";
	//列对齐方式
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>滚动方式:</td>";
	str += "<td><select name='scroll_type' id='scroll_type' style='width: 100%;'>"
	str += "<option value='0'>静止</option>";
	str += "<option value='1'>至下而上</option>";
	str += "<option value='2'>至右向左</option></select></td></tr>";
	//字体
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>字体:</td>";
	str += "<td><select name='font' id='font' style='width: 100%;'>"
	str += "<option value='st'>宋体</option>";
	str += "<option value='kt'>楷体</option>";
	str += "<option value='ht'>黑体</option>";
	str += "<option value='fs'>仿宋</option></select></td></tr>";
	//表格填充
	$("#attr").html(str);
}

//公告信息
function key_notice_info() {
	//字号
	var str = "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>字号:</td>";
	str += "<td><input type='number' name='font_size' id='font_size' value='' style='width: 100%;' /></td></tr>";
	//颜色
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>颜色:</td>";
	str +=
		"<td><input type='text' name='font_color' id='font_color' placeholder='透明' class='form-control demo' data-control='hue' style='width: 100%;' /></td></tr>";
	//字体
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>字体:</td>";
	str += "<td><select name='font' id='font'  style='width: 100%;'>"
	str += "<option value='st'>宋体</option>";
	str += "<option value='kt'>楷体</option>";
	str += "<option value='ht'>黑体</option>";
	str += "<option value='fs'>仿宋</option></select></td></tr>";
	//列对齐方式
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>列对齐方式:</td>";
	str += "<td><select name='align' id='align' style='width: 100%;'>"
	str += "<option value='0'>左对齐</option>";
	str += "<option value='1'>居中</option>";
	str += "<option value='2'>右对齐</option></select></td></tr>";
	//表格填充
	$("#attr").html(str);
}

//过号区域
function key_called_info() {
	//行数
	var str = "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>行数:</td>";
	str += "<td><input type='number' name='row' id='row' value='' style='width: 100%;' /></td></tr>";
	//列数
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>列数:</td>";
	str += "<td><input type='number' name='column' id='column' value='' style='width: 100%;' /></td></tr>";
	//列宽
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>列宽:</td>";
	str += "<td><input type='number' name='column_width' id='column_width' value='' style='width: 100%;' /></td></tr>";
	//字号
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>字号:</td>";
	str += "<td><input type='number' name='font_size' id='font_size' value='' style='width: 100%;' /></td></tr>";
	//颜色
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>颜色:</td>";
	str +=
		"<td><input type='text' name='font_color' id='font_color' placeholder='透明' class='form-control demo' data-control='hue' style='width: 100%;' /></td></tr>";
	//翻页时间
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>翻页时间:</td>";
	str +=
		"<td><input type='number' placeholder='-1不翻页,单位:秒' name='next_time' id='next_time' value='' style='width: 100%;' /></td></tr>";
	//等候人数
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>过号人数:</td>";
	str += "<td><input type='number' name='waitnum' id='waitnum' value='' style='width: 100%;' /></td></tr>";
	//格式模板
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>格式模板:</td>";
	str += "<td><select name='template_id' class='template' id='template_id' style='width: 100%;'>"
	str += "<option value='0'>模板1</option>";
	str += "<option value='1'>模板2</option></select></td></tr>";
	//字体
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>字体:</td>";
	str += "<td><select name='font' id='font' style='width: 100%;'>"
	str += "<option value='st'>宋体</option>";
	str += "<option value='kt'>楷体</option>";
	str += "<option value='ht'>黑体</option>";
	str += "<option value='fs'>仿宋</option></select></td></tr>";
	//列对齐方式
	str += "<tr><td style='width: 79px; text-align: right; padding-top: 13px;padding: unset;'>列对齐方式:</td>";
	str += "<td><select name='align' id='align' style='width: 100%;'>"
	str += "<option value='0'>左对齐</option>";
	str += "<option value='1'>居中</option>";
	str += "<option value='2'>右对齐</option></select></td></tr>";

	$("#attr").html(str); //表格填充
}

//格式模板数据初始化
function initTemplate() {
	var str = "";
	for (var i = 0; i < template.length; i++) {
		str += "<option value='" + template[i].TEMPLATE_ID + "'>" + template[i].TEMPLATE_NAME + "</option>"
	}
	$(".template").html(str);
}
//加载下拉框格式模板(根据类型加载格式模板，可把ajax返回的数据转json后循环，没有时间差，然后选中)
function loadTemplate() {
	$.ajax({
		xhrFields: {
			withCredentials: true
		},
		type: "POST",
		url: httpurl + "template/listAll",
		data: {},
		dataType: "json",
		success: function(data) {
			if ("success" == data.result) {
				template = data.varList;
			} else if ("exception" == data.result) {
				showException("模板列表", data.exception); //显示异常
			}
		}
	})
}

function attrChange(selectedDiv) {

	$("#attr :input").change(function() {
		var parameters = new Array();
		$($("#attr :input")).each(function() {
			var parameter = {};
			if ($(this).hasClass("multiple") && this.name != '') {
				parameter[this.name] = $(this).multipleSelect("getSelects", "value")
				parameters.push(parameter)
			} else if (this.name != '') {
				parameter[this.name] = this.value
				parameters.push(parameter)
			}
		});
		$(selectedDiv).attr("data-attr", JSON.stringify(parameters));
	})
}



function attrDatas(selectedDiv) {
	//加载下拉多选
	// $('.multiple').change(function() {
	// 	console.log($(this).val());
	// }).multipleSelect({
	// 	width: '100%'
	// });

	var dataJson = $(selectedDiv).attr("data-attr")
	var json = eval("(" + dataJson + ")");
	if (json != undefined) {
		for (var i = 0; i < json.length; i++) {
			for (var key in json[i]) {
				if ($("#" + key)[0].tagName == "SELECT") {
					if ($("#" + key).hasClass("multiple")) {
						var str = json[i][key];
						$("#" + key).multipleSelect("setSelects", str);
					} else {
						$("#" + key + " option[value='" + json[i][key] + "']").attr("selected",
							true);
					}
				} else {
					if (key == "gsmb") {
						$("#" + key).val(JSON.stringify(json[i][key]));
					} else {
						$("#" + key).val(json[i][key]);
					}

				}
			}
		}
	}

	//加载颜色选择器
	$('.demo').each(function() {
		$(this).minicolors({
			control: $(this).attr('data-control') || 'hue',
			defaultValue: $(this).attr('data-defaultValue') || '',
			inline: $(this).attr('data-inline') === 'true',
			letterCase: $(this).attr('data-letterCase') || 'lowercase',
			opacity: $(this).attr('data-opacity'),
			position: $(this).attr('data-position') || 'bottom left',
			change: function(hex, opacity) {
				if (!hex) return;
				if (opacity) hex += ', ' + opacity;
				try {
					console.log(hex);
				} catch (e) {}
			},
			theme: 'bootstrap'
		});
	});
}



