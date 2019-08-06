	//计算dom元素距离body的距离
	//距离有定位属性的父级元素的距离，如果父级元素都没有定位，那就是body
	function getLeft(domObj){
      var left1=0;
      while(domObj.tagName.toLowerCase()!="body"){
      	left1=left1+domObj.offsetLeft;
      	domObj=domObj.offsetParent;
      }
      return left1;
	}
		
    function getTop(domObj){
    	var top1=0;
    	while(domObj.tagName.toLowerCase()!="body"){
    		top1=top1+domObj.offsetTop;
    		domObj=domObj.offsetParent;
    	}
    	return top1;
    }
