
    var index=0;
	var play=null;
	var i=0;   //用于保存前一个指针。
	

	
	
	// 启动时的函数
   function autoplay(){
	   play=setInterval(function()
	   {
	   	      
    			index++; 
		        index=index%4;		   
			   $(".button li").eq(index).addClass("hover").siblings().removeClass("hover");		 
			    $(".flash img").eq(index).addClass("f_img").removeClass("f_img_l"); //1
			    $(".flash img").eq(index-1).addClass("f_img_r").removeClass("f_img"); //0
			    $(".flash img").eq((index+1)%4).addClass("f_img_l"); //2
			    $(".flash img").eq((index+2)%4).removeClass("f_img_r");	//3     
	   },3000);
   }
  autoplay();

// 下列选择按钮
  $(".button li").mousemove(function(){
  	   clearInterval(play);
  	   i=index;
  	   index=$(this).index();	
	   $(this).addClass("hover").siblings().removeClass("hover");
	   $(".flash img").eq(0).removeClass("f_img_r").removeClass("f_img_l").removeClass("f_img"); 
       $(".flash img").eq(1).removeClass("f_img_r").removeClass("f_img_l").removeClass("f_img");
       $(".flash img").eq(2).removeClass("f_img_r").removeClass("f_img_l").removeClass("f_img"); 
       $(".flash img").eq(3).removeClass("f_img_r").removeClass("f_img_l").removeClass("f_img");
     if((index-i+4)%4==2)
     {
      $(".flash img").eq(index).addClass("f_img");
     }
     else{

      $(".flash img").eq(index).addClass("f_img");
      $(".flash img").eq((index+1)%4).addClass("f_img_l");
      $(".flash img").eq((index+3)%4).addClass("f_img_r");
     }
	  
      		
	}).mouseout(function(){autoplay();});

   // 当鼠标停在图片时，静止
	$(".flash img").mouseover(function() {
		
       clearInterval(play);

	}).mouseout(function(){autoplay();});

   // 右按钮
	$("#Bu_R").mousemove(function(){
		clearInterval(play);	
	}).mouseout(function(){autoplay();});

    $("#Bu_R").click(function(){
    	
         index++;
         index=index%4;
         $(".button li").eq(index).addClass("hover").siblings().removeClass("hover");
         $(".flash img").eq(index).addClass("f_img").removeClass("f_img_l");
	     $(".flash img").eq(index-1).addClass("f_img_r").removeClass("f_img");
	     $(".flash img").eq((index+1)%4).addClass("f_img_l");
	     $(".flash img").eq((index+2)%4).removeClass("f_img_r");
          

	    });
    // 左按钮
	$("#Bu_L").mousemove(function(){
		clearInterval(play);	
	}).mouseout(function(){autoplay();});

    $("#Bu_L").click(function(){
       
          index=(index+3)%4;
         $(".button li").eq(index).addClass("hover").siblings().removeClass("hover");
         $(".flash img").eq(index).addClass("f_img").removeClass("f_img_r");
	     $(".flash img").eq((index+1)%4).addClass("f_img_l").removeClass("f_img");
	     $(".flash img").eq((index+2)%4).removeClass("f_img_l");
	     $(".flash img").eq((index+3)%4).addClass("f_img_r");      
	    });
    
