
tim = () => {
   
	document.getElementById("word").style.display = "block";
	document.getElementById("started").style.display = "none";
	document.getElementById("ajax").style.display = "block";
	
        var count=60;

    	var counter=setInterval(timer, 1000);
    	
    	function timer()
    	{
    	  
    	  if (count == 0)
    	  {
    	     clearInterval(counter);
    	     document.getElementById("ajax").style.display = "none";
    	     document.getElementById("word").style.display = "none";
    	     document.getElementById("started").style.display = "block";
    	     document.getElementById("time").innerHTML=60;
    	     return;
    	  }
    	  count=count-1;

    	  //console.log(count);	
    	  document.getElementById("time").innerHTML=count

    	}
    	
};

var total = 0;

word_next = () => {


	if (event.keyCode == 13) { 
//		document.getElementById('formid:saveid').click();
		
		const count = $('ul#palavras_portugues>li').length;
		let input = document.getElementById("j_idt16:word").value;
		let english = $("ul#palavras_ingles > li:first-child").text();
		
		
		if(input == english){
			
			$( ".sucesso" ).fadeIn( 300 );
			$(".sucesso").css("display","block");
			$( ".sucesso" ).fadeOut( 3000 );
			
			let point = ($("#user-point").text());
			total += 13;  
			document.getElementById("user-point").innerHTML=total;
			document.getElementById("j_idt16:word").value = "";
		}else{
			$( ".erro" ).fadeIn( 300 );
			$(".erro").css("display","block");
			$( ".erro" ).fadeOut( 3000 );
			document.getElementById("j_idt16:word").value = "";
		}
		
		($("ul#palavras_portugues > li:first-child").appendTo("ul#palavras_portugues"));
		($("ul#palavras_ingles > li:first-child").appendTo("ul#palavras_ingles"));
		
		
		return false;
	}
} 
