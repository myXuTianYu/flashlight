/*
*清除一个指定元素下的空白文本节点-----通过函数
*参数： ele
ele:要清除指定空白文本子节点的元素
*/
function clearNoneNode(ele){ //形参
	var thisChild=ele.childNodes; //元素的返回列表赋值给变量 thisChild
	for(var i=0;i<thisChild.length;i++){
		if(thisChild[i].nodeType==3 && !/\S/.test(thisChild[i].nodeValue)){
			ele.removeChild(thisChild[i]);
		}
	}
}


/*
*清除指定元素下的空白文本子节点-----通过原型对象的方法
*参数：无
this:指向要清除空白子节点的元素
*/
Element.prototype.cnn=function(){ //给元素的原型对象绑定一个cnn方法，目的是元素继承这个方法
	var thisChild=this.childNodes;//页面中的元素是谁，this就指向谁
	for(var i=0;i<thisChild.length;i++){  //
		if(thisChild[i].nodeType==3 && !/\S/.test(thisChild[i].nodeValue)){ //判断有没有非空字符
			this.removeChild(thisChild[i]);
		}
	}
}


/*
*清除页面中所有元素的空白文本节点
*参数：无
*/
function CNN(){
	var alldom=document.getElementsByTagName('*');//所有页面中的元素
	for(var i=0;i<alldom.length;i++){
		alldom[i].cnn();    //调用原型对象的方法 逐个清除里面的元素的空白节点
		// clearNoneNode(alldom[i]);//调用函数
	}
}
CNN();//清除页面中所有元素的空白文本节点


/*
*获取元素集合
*参数：_classname
 */
function ClassName(_classname){
	var alldom=document.getElementsByTagName('*');   //获取页面所有的标签
	var _arr=[]; //用于存放找到的元素
	for(var i=0; i<alldom.length; i++){  //遍历
		if(alldom[i].hasAttribute('class')){  //先判断元素里是否有class属性
			var cn=alldom[i].getAttribute('class');//返回属性名的属性
			var cnarr=cn.split(' ');//split()方法,分隔成数组
			for(var j=0; j<cnarr.length; j++){//数组进行遍历 属性是数组
				if(cnarr[j]==_classname){//比较数组是否和class值相同
					_arr.push(alldom[i]);//Arr.push()方法,将元素放入_arr数组中
				}
			}
		}
	}
	return _arr;//返回数组
}


/*
*正则获取元素集合
*参数：reg
 */
function getElementsClassName(reg){
	var oDiv=document.getElementsByTagName('*');//获取页面所有的标签
	var _arr=[];//用于存放找到的元素
	for(var i=0; i<oDiv.length; i++){//遍历
		if(oDiv[i].hasAttribute('class')){//先判断元素里是否有class属性
			var Reg=new RegExp(' '+reg+' ');//匹配正则
			if(Reg.test(' '+oDiv[i].getAttribute('class')+' ')){//匹配正则是否和class值相同
				_arr.push(oDiv[i]);//Arr.push()方法,将元素放入_arr数组中
			}
		}
	}
	return _arr;//返回数组
}
/*
*判断某一元素是否拥有指定样式
*参数：cname
 */
Element.prototype.hasClass=function(cname){
	if(this.hasAttribute('class')){
		var dClass=' '+this.getAttribute('class')+' ';
		var arrC=new RegExp(' '+cname+' ')
		if(arrC.test(dClass)){
			return true;
		}
	}
	return false;
}



/*
*添加指定元素
*参数：Cname
 */
Element.prototype.setClass=function(Cname){
	if(!this.hasClass("class")){
		var oBox=" "+this.getAttribute("class")+" ";
		this.setAttribute("class",Cname+oBox);
	}
}




/*
*用正则给一个元素删除一个样式
*参数:
*_delclass:要删除的样式
*依赖： Element.hasClass()方法
*返回值： 无
*例如： class='warp bg01 bg02 bg01 bg01'
*			删除bg01
*			class='warp bg02 bg01' 原因是最后一个bg01前面的空格是删除倒数第二个的时候生成的,所以第一遍是找不完整的。
 */
Element.prototype.delClass=function(_delclass){
	if(this.hasClass(_delclass)){
		var thisClass=' '+this.getAttribute('class')+' ';
		var myreg=new RegExp(' '+_delclass+' ','img');//igm不区分大小写,全局匹配/多行匹配
		while(myreg.test(thisClass)){//表示为真就去执行
			thisClass=thisClass.replace(myreg,' ');
		}
		this.setAttribute('class',thisClass.trim());
	}
}
Element.prototype.trim=function(){
	var reg=new RegExp(/(^\s|\s$)/);
}


/*通过原型对象的方法-----计算一个字符串的实际长度
*参数：无
*返回值：数值型 返回字符串的实际长度
*字符串的长度，全角占两位，半角占一位
*输出：字符串的实际长度
 */
String.prototype.len=function(){
	var len=0;//计算字符串占实际长度
	for(var i=0; i<this.length; i++){
		if(this.charCodeAt(i)>255){
			len=len+2;
		}
		else{
			len=len+1;
		}
	}
}



/*通过【函数】的方法----计算一个字符串的实际长度
*参数：无
*返回值：数值型 返回字符串的实际长度
*字符串的长度，全角占两位，半角占一位
*输出：字符串的实际长度
 */
function len(_str){
	var len=0; //计算字符串占实际的长度
	for(var i=0; i<this.length; i++){
		if(this.charCodeAt(i)>255){
			len=len+2;
		}
		else{
			len++;
		}
	}
	return len;
}



/*-----截取一个字符串的指定长度
 *参数：len：要截取的长度
 *返回值：截取后的字符串
 *截取时：字符串的长度，全角占两位，半角占一位
 *sum：字符串的长度
 *i：为脚标
 */
String.prototype.substr=function(len){//len数值类型的
	var num=0;//计算字符串占实际的长度
	for(var i=0; i<this.length; i++){
		if(this.charCodeAt(i)>255){
			num=num+2;
		}
		else{
			num++;
		}
		if(num>len){//超出截取范围时(字符串长度>要截取的长度时)
			return this.slice(0,i);//截取字符串(return返回 表退出)
		}
	}
}