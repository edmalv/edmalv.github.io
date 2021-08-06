function executar(){
 		var medida1 = parseInt(document.getElementById("medida1").value);
		var endPost = parseInt(document.getElementById("endPost").value);
		var cornerPost = parseInt(document.getElementById("cornerPost").value);
		var comprimento = parseInt(document.getElementById("comprimento").value);
		var portaoSingle = parseInt(document.getElementById("portaoSingle").value);
		var portaoDouble = parseInt(document.getElementById("portaoDouble").value);
		
		var medidaPortaoSingle = parseInt(0);
		var medidaPortaoDouble = parseInt(0);
		if(portaoSingle > parseInt(0)){
			for (var i = 0; i < portaoSingle; i++) {
				medidaPortaoSingle = parseInt(prompt("Medida portão single? - " + i  , ""));
			}
		}
		if(portaoDouble > parseInt(0)){
			for (var i = 0; i < portaoDouble; i++) {
				medidaPortaoDouble += parseInt(prompt("Medida portão double? - "  + i , ""));
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
		var cap = post;
		var bag50 = (portaoSingle * 4) + (portaoDouble * 8);
		var gateHinges = (portaoSingle * 1) + (portaoDouble * 2);
		var heavyPost = (portaoSingle * 2) + (portaoDouble * 2);
		var lock = portaoDouble + portaoSingle ;
		
		

		alert('Resultado:'+
			'\n Line Post = ' + Math.round( linePost ) +
			 '\n Painel = ' + Math.round( painel )+
			'\n Corner Post = ' + cornerPost +
			'\n End Post = ' + endPost +
			'\n Heavy Post = ' + heavyPost +
			'\n Cap = ' + Math.round(cap) +
			'\n Quickret 80lbs = ' + Math.round(bag)  +
			'\n Quickret 50lbs = ' +  bag50 +
			'\n Portão Single  = ' + portaoSingle  +
			'\n Portão Double  = ' + portaoDouble + 
			'\n Gate hinges  = ' + gateHinges + 
			'\n Drop rod = ' + portaoDouble + 
			'\n Lock = ' + lock+ 
			'');



		 
}
