var oTxt=document.getElementById('txt');
			oTxt.onblur=function(){
				if(this.value==''){
					this.value='Enter Your Email';
				}
			}
			oTxt.onfocus=function(){
					this.value='';
			}
		var oName=document.getElementById('name');
			oName.onblur=function(){
				if(this.value==''){
					this.value='Name';
				}
			}
			oName.onfocus=function(){
					this.value='';
			}
		var oEmail=document.getElementById('email');
			oEmail.onblur=function(){
				if(this.value==''){
					this.value='Email';
				}
			}
			oEmail.onfocus=function(){
					this.value='';
			}
		var oPhone=document.getElementById('phone');
			oPhone.onblur=function(){
				if(this.value==''){
					this.value='Phone';
				}
			}
			oPhone.onfocus=function(){
					this.value='';
			}
		var oTextarea=document.getElementById('textarea');
			oTextarea.onblur=function(){
				if(this.innerHTML==''){
					this.innerHTML='Message';
				}
			}
			oTextarea.onfocus=function(){
					this.innerHTML='';
			}

		$scroll=document.getElementById('scroll');
		$scroll.onclick=function(){
			var timer=setInterval(function scroll(){
				var top=document.body.scrollTop||document.documentElement.scrollTop;
					var retruntop=top/2;
				scrollTo(0,retruntop);
				if(top==0){
					clearInterval(timer);
				}
			},20);
				console.log(document.body.scrollTop);
		}

			var _box=document.getElementById('slid');
			var _list=document.getElementById('list');
			var _li=_list.getElementsByTagName('li');
			var _point=document.getElementById('point');
			var _ali=_point.getElementsByTagName('li');
			var iNow=0;
			var timers=null;


			// 第一部分：
			// 获取变量暂时不提，接下来的轮播第一步：先自己封装一个函数，如下：
			function move(){
				// 自己封装的函数内执行一个for循环，该循环是动态给 圆点（li）通过动态添加class名 
				// 然后在css样式中写li的背景颜色样式改变它的背景颜色。
				for(var i=0;i<_ali.length;i++){
					// 让圆点（li）的class名为空。
					_ali[i].className='';
				}
				// 让当前的li圆点添加class名称
				_ali[iNow].className='active';
				// 让整个ul向左慢慢移动，移动的距离就是当前li的宽度这个宽度是慢慢增加的。
				_list.style.left=-_li[0].offsetWidth*iNow+'px';
			}


			// 接下来就是让轮播中的小点 点击让相应的图片进行变换
			for(var i=0;i<_ali.length;i++){
				// 先动态获取我们的小点岁所对应的li,
				_ali[i].index=i;
				//给我们的小点添加点击事件
				//点击圆圈让我们的轮播执行。
				_ali[i].onclick=function(){
				//让我们的变量iNow变成当前的小圆点。 
					iNow=this.index;
				//执行我们之前封装好的move函数 
					move()
				}
			}
			move();
			// 接下来就是第三部分：清除定时器：clearInterval（timers）
			clearInterval(timers)
			// setInterval 无限执行；在我们清除定时器的时候，想让定时器无限执行，执行到达一定地步的时候再清除。也就是说让我们inow一直执行 当其小于li标签的个数（长度）的时候再归0.当然这个过程就是我们轮播图片切换的过程。执行时间是2秒。
			timers=setInterval(function(){
				iNow++;
				if(iNow>=_li.length){
					iNow=0;
				}
				move()
			},2000)

			// 第四部分：鼠标移入移除效果：而鼠标移入移除的范围就是在我们设定的div块元素中。
			// 鼠标移入的时候清除定时器。
			_box.onmouseover=function(){
				clearInterval(timers);
			}
			// 鼠标移除的时候开始执行定时器功能。
			_box.onmouseout=function(){
				clearInterval(timers);
				timers=setInterval(function(){
					iNow++;
					if(iNow>=_li.length){
						iNow=0;
					}
					move()
				},2000)
			}

			$viewall = document.querySelectorAll('div.view');
			$viewtext=document.querySelectorAll('div.viewtext');
			$img=document.querySelectorAll('img.img');
			for(var i=0; i<$viewall.length; i++){
				$viewall[i].onmouseover = function(){
					console.log(i);
					$img[i].style.left='100%';
					$viewtext[i].style.left='0';
				}
				$viewall[i].onmouseout = function(){
					$img[i].style.left='0';
					$viewtext[i].style.left='-100%';
				}
			}
			for(var i=0; i<$viewall.length; i++){
				!function(i){
					$viewall[i].onmouseover = function(){
						$img[i].style.left='100%';
						$viewtext[i].style.left='0';
					}
					$viewall[i].onmouseout = function(){
						$img[i].style.left='0';
						$viewtext[i].style.left='-100%';
					}
				}(i);
			}

			$one1 = document.querySelectorAll('a.one1');
			$parent=document.querySelectorAll('i.one');
			$node=document.querySelectorAll('i.two');
			for(var i=0; i<$one1.length; i++){
				$one1[i].onmouseover = function(){
					$parent[i].style.top='-48px';
					$node[i].style.top='0';
					$node[i].style.transform='rotateY(360deg)';
				}
				$one1[i].onmouseout = function(){
					$parent[i].style.top='0';
					$node[i].style.top='48px';
					$node[i].style.transform='rotateY(0deg)';
				}
			}
			for(var i=0; i<$one1.length; i++){
				!function(i){
					$one1[i].onmouseover = function(){
						$parent[i].style.top='-48px';
						$node[i].style.top='0';
						$node[i].style.transform='rotateY(360deg)';
					}
					$one1[i].onmouseout = function(){
						$parent[i].style.top='0';
						$node[i].style.top='48px';
						$node[i].style.transform='rotateY(0deg)';
					}
				}(i);
			}

			var $more=document.querySelector('i.more');
			var $ul=document.querySelector('ul.ul');
			$more.onclick=function(){
				if($ul.style.opacity=='1'){
					$ul.style.opacity='0';
					$ul.style.transitionProperty='all';
					$ul.style.transitionDuration='.5s';
					$ul.style.animationName='lh';
					$ul.style.animationDuration='.5s';
				}
				else{
					$ul.style.opacity='1';
					$ul.style.transitionProperty='all';
					$ul.style.transitionDuration='.5s';
					$ul.style.animationName='xl';
					$ul.style.animationDuration='.5s';
				}
			}