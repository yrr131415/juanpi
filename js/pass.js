   function hasLetter(pass){
    	for(var i=0;i<pass.length;i++){
	    	var code=pass.charCodeAt(i);
		    	if((code>=65&&code<=90)||(code>=97&&code<=122)){
		    		return true;
		    	}
		    }
	    	return false;
	    }
    
     function hasNum(pass){
    	for(var i=0;i<pass.length;i++){
    		var code=pass.charCodeAt(i);
    		if(code>=48&&code<=57){
    			return true;
    		}
    	}
    	return false;
    }
    
    function hasSpec(pass){
    	var specs=["$","#","!"];
    	for(var i=0;i<pass.length;i++){
    		if(specs.indexOf(pass.charAt(i))>-1){//indexOf检索字符串，返回下标
    			return true;
    		}
    	}
    	return false;
    }

