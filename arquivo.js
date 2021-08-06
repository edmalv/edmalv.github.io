function executar(){
 		var medida1 = parseInt(document.getElementById("medida1").value);
		var endPost = parseInt(document.getElementById("endPost").value);
		var cornerPost = parseInt(document.getElementById("cornerPost").value);
		var comprimento = parseInt(document.getElementById("comprimento").value);
		var portaoSingle = parseInt(document.getElementById("portaoSingle").value);
		var portaoDouble = parseInt(document.getElementById("portaoDouble").value);
		
		var medidaPortaoSingle = parseInt(0);
		var medidaPortaoDouble = parseInt(0);
		var blankPost = parseInt(0);
		if(portaoSingle > parseInt(0)){
			for (var i = 0; i < portaoSingle; i++) {
				medidaPortaoSingle = parseInt(prompt("Medida portão single? - Portão" + i  , ""));
				blankPost += parseInt(prompt("Quantos blank post? - Portão" + i  , "0"));
			}
		}
		if(portaoDouble > parseInt(0)){
			for (var i = 0; i < portaoDouble; i++) {
				medidaPortaoDouble += parseInt(prompt("Medida portão double? - Portão"  + i , ""));
				blankPost += parseInt(prompt("Quantos blank post? - Portão" + i  , "0"));
			}
		}

		/*var medida1 =  110;
		var endPost = 1;
		var cornerPost = 1;
		var comprimento = 8;*/
		
		if(portaoSingle > 0){
			medida1 = medida1 - (portaoSingle * medidaPortaoSingle);
		}
		if(portaoDouble > 0){

			medida1 = medida1 - (portaoDouble * medidaPortaoDouble);
		}
		
		var post = medida1 / comprimento;
		var linePost = post - (endPost + cornerPost);
		var painel = linePost + 1;
		var bag = post * 1.25;
		var cap = Math.round( linePost ) + cornerPost + endPost + heavyPost + blankPost;
		var bag50 = (portaoSingle * 4) + (portaoDouble * 8);
		var gateHinges = (portaoSingle * 1) + (portaoDouble * 2);
		var heavyPost = (portaoSingle * 2) + (portaoDouble * 2) - blankPost;
		var lock = portaoDouble + portaoSingle ;
		
		
		var texto = 'RESULTADO:'+
			'<br><b> Line Post  </b> =  ' + Math.round( linePost ) +
			'<br><b> Painel </b> =  ' + Math.round( painel )+
			'<br><b> Corner Post </b> =  ' + cornerPost +
			'<br><b> End Post </b> =  ' + endPost +
			'<br><b> Heavy End </b> =  ' + heavyPost +
		    	'<br><b> Blank Post </b> =  ' + blankPost +
			'<br><b> Cap </b> =  ' + cap +
			'<br><b> Quickret 80lbs </b> =  ' + Math.round(bag)  +
			'<br><b> Quickret 50lbs </b> =  ' +  bag50 +
			'<br><b> Portão Single  </b> =  ' + portaoSingle  +
			'<br><b> Portão Double  </b> =  ' + portaoDouble + 
			'<br><b> Gate hinges  </b> =  ' + gateHinges + 
			'<br><b> Drop rod </b> =  ' + portaoDouble + 
			'<br><b> Lock </b> =  ' + lock+ 
			'';
		
		$( "p" ).remove();
		$("body").append("<p>" + texto + "</p>");
		

		


		 
}
