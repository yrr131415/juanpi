//功能：获取dom元素的样式属性值
//参数：dom ,属性名
//返回值：样式属性值
function getStyleAttribute(domObj,attrName){
    if(domObj.currentStyle){//ie
    	return domObj.currentStyle[attrName];
    }else{//其他主流浏览器
    	var otherObj=window.getComputedStyle(domObj);
    	return otherObj[attrName];
    }
}
