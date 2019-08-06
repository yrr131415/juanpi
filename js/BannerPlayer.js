//一、类（轮播图）

// new BannerPlayer({
// 	width:100,
// 	height:100,
// 	color:"pink",
// 	highColor:"red",
// },
// 	$("#box")
// )

class BannerPlayer{
	//构造函数
	constructor(obj,boxDom){
		//1、属性（数据）
		this.boxDom = boxDom;
		this.imgDoms = [];//存储所有的图片标签
		this.liDoms = [];//存储所有的li标签（豆豆）
		this.arrowBoxDom = null;//存储左右箭头的容器
		let defaultObj = {
			width:700,
			height:360,
			imgs:["img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg"],
			timeSpace:3000,
			douColor:"white",
			douHighColor:"transparent",
			douSize:10,
			douBorder:"3px solid white",
			douPos:"下",
			douIsCircle:true,
			myTimer:null,
			ord:0

		}

		for(let key in defaultObj){
			if(obj[key]){
				this[key] = obj[key];
			}else{
				this[key] = defaultObj[key];
			}
		}
		//2、创建外观（把数据应用在外观上）
		this.render();
		this.addEvent();
		this.autoPlay();
	}

	//外观（html和css代码）
	render(){
		this.boxDom.style.position = "relative";
		//1、创建图片
		for(let i=0;i<this.imgs.length;i++){
			let imgDom = document.createElement("img");
			imgDom.src = this.imgs[i];
			imgDom.style.cssText = `
				position: absolute;
				left:0px;
				top:0px;
				width: 100%;
				height: 100%;	
				z-index: 1;`;
				
			if(i==0){
				imgDom.style.zIndex = 2;
			}
			this.boxDom.appendChild(imgDom);
			this.imgDoms.push(imgDom);
		}
		//2、创建豆豆
		//1)、豆豆的容器ul
		let doudouBox = document.createElement("ul");
		doudouBox.style.cssText = `
				position: absolute;
				list-style: none;
				z-index: 3;`;
		if(this.douPos=="上"){
			doudouBox.style.left = `${(this.width-(this.douSize*(this.imgs.length*2-1)))/2}px`;
			doudouBox.style.top = "20px";			
		}else if(this.douPos=="下"){
			// doudouBox.style.right = "20px";//
			doudouBox.style.left = `${(this.width-(this.douSize*(this.imgs.length*2-1)))/2}px`;
			doudouBox.style.bottom = "20px";
		}	
		this.boxDom.appendChild(doudouBox);
		//2)、豆豆 li
		for(let i=0;i<this.imgs.length;i++){
			let liDom = document.createElement("li");
			liDom.setAttribute("index",i);
			liDom.style.cssText = `
				float:left;
				width:${this.douSize}px;
				height: ${this.douSize}px;
				margin-right: ${this.douSize}px;
				background-color: ${this.douColor};
		
			`;
			if(this.douIsCircle){
				liDom.style.borderRadius="50%";
			}
			if(i==0){
				liDom.style.backgroundColor=this.douHighColor;
                liDom.style.border=this.douBorder;
                
			
			}
			doudouBox.appendChild(liDom);
			this.liDoms.push(liDom);//放在数组里，方便其它函数使用
		}

		//3、创建左右按钮
		//1)、创建左右箭头的容器
		this.arrowBoxDom = document.createElement("div");
		console.log(this.height);
		console.log((this.height-60)/2);
		this.arrowBoxDom.style.cssText = `
				position: absolute;
				left:0px;
				top:${(this.height-60)/2}px;
				width: 100%;
				height: 60px;
				z-index: 4;`;
		this.boxDom.appendChild(this.arrowBoxDom);
		this.arrowBoxDom.style.display="none";

		//2)、创建左右箭头
		let leftDivDom = document.createElement("div");
		leftDivDom.style.cssText = `
	            float:left;
				height: 100%;
				width: 35px;
			    background-color: black;
			    opacity: 0.3;
				
				
		`;
		
	      /* leftDivDom.style.background:url(../image/arrow.png) no-repeat;
		   leftDivDom.style.backgroundPosition:0 0;*/
		
		this.arrowBoxDom.appendChild(leftDivDom);
      
		let rightDivDom = document.createElement("div");
		rightDivDom.style.cssText = `
				float:right;
				height: 100%;
				width: 35px;
				background-color: black;
				opacity: 0.3;`;
		this.arrowBoxDom.appendChild(rightDivDom);
	}

	//添加事件
	addEvent(){
		//2、鼠标放在轮播图上会停止
		this.boxDom.onmouseover = ()=>{
			this.arrowBoxDom.style.display="block";
			this.stopPlay();
			
		}

		//3、鼠标离开轮播图会继续播放
		this.boxDom.onmouseout = ()=>{
			this.arrowBoxDom.style.display="none";
			this.autoPlay();	
		}

		let obj = this;
		//4、点击豆豆，跳转到对应的图片
		for(var i=0;i<this.liDoms.length;i++){
			this.liDoms[i].onclick = function(){
				obj.goImg(parseInt(this.getAttribute("index")));
			};
		}

		//5、左右按钮
		
		let leftBtn = this.arrowBoxDom.firstElementChild;
		leftBtn.onclick = ()=>{
			this.preImg();
		}
		let rightBtn = this.arrowBoxDom.lastElementChild;
		rightBtn.onclick = ()=>{
			this.nextImg();
		}
	}

	//自动播放
	autoPlay(){
		if(this.myTimer!=null){//如果有定时器，就不再启动新的定时器了
			return;//
		}

		this.myTimer = setInterval(()=>{
			//一、改变数据
			//1、计算数据（改变图片的下标）
			var preOrd = this.ord;//上一张的序号 4
			this.ord++;//5

			//2、边界
			if(this.ord>this.imgs.length-1){
				this.ord = 0;
			}

			//二、改变外观
			this.reRender(preOrd,this.ord);
		},this.timeSpace)

	}
	
	//停止播放
	stopPlay(){
		window.clearInterval(this.myTimer);//根据定时器编号，找到定时器对象，进行清除
		this.myTimer = null;//把定时器编号清除掉
	}

	//跳转到对应的图片上
	//参数：图片的下标
	// goImg(3);
	goImg(transOrd){
		//一、改变数据
		//1、计算数据（改变图片的下标）
		var preOrd = this.ord;//上一张的序号 
		this.ord = transOrd;//5

		//2、边界
		if(this.ord>this.imgs.length-1){
			this.ord = 0;
		}else if(this.ord<0){
			this.ord = this.imgs.length-1;
		}

		//二、改变外观
		this.reRender(preOrd,this.ord);
	}

	//改变外观的函数(重新渲染)
	reRender(preOrd,ord){
		//1)、改图片
		this.imgDoms[preOrd].style.zIndex = 1;
		this.imgDoms[ord].style.zIndex = 2;
		//2)、改豆豆的颜色
		
		this.liDoms[preOrd].style.backgroundColor=this.douColor;
		this.liDoms[preOrd].style.border="none";
		
		this.liDoms[ord].style.backgroundColor= this.douHighColor;
	    this.liDoms[ord].style.border= this.douBorder;
	}

	preImg(){
		this.goImg(this.ord-1);
	}

	nextImg(){
		this.goImg(this.ord+1);
	}


}
