$( document ).ready(function() {
	////Variables Generales
	var inicioNumPreguntas = 0;
	var q_respuestaUsuario = 0;
	var banderaPregunta = false;
	var puntajeEvaluacion; ///variable Provisional
	var segundoIntento = 0;
	var puntajeGetCookie = 0;
	var GeneralNumPreguntas;
	setCookie("2020_ID",true,10); //TODO
	setCookie("_____","0",10);
	
	/////
	var d_GeneralRetroMal;
	var d_GeneralRetroRegular;
	var d_GeneralRetroMuyBien;
	///
	var q_enunciado = new Array();
	var q_numDistractores = new Array();
	var q_distractor1 = new Array();
	var q_distractor2 = new Array();
	var q_distractor3 = new Array();
	var q_distractor4 = new Array();
	var q_respuesta = new Array();

	var q_retroIncorrecto1Intento = new Array();
	var q_retroIncorrecto2Intento = new Array();
	var q_retroCorrecto = new Array();
	
	
	var urlJson = "data/game_html5.json"; //// TODO es es importantisisisisismo cambiarlo
	$.getJSON( urlJson, function( json ) {
		
		var GeneralFontSizeTitulo = json.general.font_sizeTitulo;
		var GeneralFontFamilyTitulo = json.general.font_familyTitulo;
		var GeneralFontSizeParrafo = json.general.font_sizeParrafo;
		var GeneralFontFamilyParrafo = json.general.font_familyParrafo;
		
		var GeneralInstruccionesTitulo = json.general.instrucciones_titulo;
		var GeneralInstruccionesParrafo = json.general.instrucciones_parrafo;
		
		////Leer datos generales
		GeneralNumPreguntas = json.general.numero_preguntas;
		d_GeneralRetroMal = json.general.retroalimentacion_generalMal;
		d_GeneralRetroRegular = json.general.retroalimentacion_generalRegular;
		d_GeneralRetroMuyBien = json.general.retroalimentacion_generalMuyBien;
		puntajeEvaluacion = 100 / GeneralNumPreguntas;
		////
		switch (GeneralNumPreguntas) {
			case 2:
				//
				//////Pregunta1
				q_enunciado[0] = json.pregunta_1.enunciado;
				q_numDistractores[0] = json.pregunta_1.num_distractores;
				q_distractor1[0] = json.pregunta_1.distractor_1;
				q_distractor2[0] = json.pregunta_1.distractor_2;
				q_distractor3[0] = json.pregunta_1.distractor_3;
				q_distractor4[0] = json.pregunta_1.distractor_4;
				q_respuesta[0] = json.pregunta_1.respuesta_correcta;
				q_retroIncorrecto1Intento[0] = json.pregunta_1.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[0] = json.pregunta_1.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[0] = json.pregunta_1.retoalimentacion_correcta;
				/////******
				//////Pregunta2
				q_enunciado[1] = json.pregunta_2.enunciado;
				q_numDistractores[1] = json.pregunta_2.num_distractores;
				q_distractor1[1] = json.pregunta_2.distractor_1;
				q_distractor2[1] = json.pregunta_2.distractor_2;
				q_distractor3[1] = json.pregunta_2.distractor_3;
				q_distractor4[1] = json.pregunta_2.distractor_4;
				q_respuesta[1] = json.pregunta_2.respuesta_correcta;
				q_retroIncorrecto1Intento[1] = json.pregunta_2.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[1] = json.pregunta_2.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[1] = json.pregunta_2.retoalimentacion_correcta;
				/////******
				break;
			case 3:
				//////Pregunta1
				q_enunciado[0] = json.pregunta_1.enunciado;
				q_numDistractores[0] = json.pregunta_1.num_distractores;
				q_distractor1[0] = json.pregunta_1.distractor_1;
				q_distractor2[0] = json.pregunta_1.distractor_2;
				q_distractor3[0] = json.pregunta_1.distractor_3;
				q_distractor4[0] = json.pregunta_1.distractor_4;
				q_respuesta[0] = json.pregunta_1.respuesta_correcta;
				q_retroIncorrecto1Intento[0] = json.pregunta_1.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[0] = json.pregunta_1.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[0] = json.pregunta_1.retoalimentacion_correcta;
				/////******
				//////Pregunta2
				q_enunciado[1] = json.pregunta_2.enunciado;
				q_numDistractores[1] = json.pregunta_2.num_distractores;
				q_distractor1[1] = json.pregunta_2.distractor_1;
				q_distractor2[1] = json.pregunta_2.distractor_2;
				q_distractor3[1] = json.pregunta_2.distractor_3;
				q_distractor4[1] = json.pregunta_2.distractor_4;
				q_respuesta[1] = json.pregunta_2.respuesta_correcta;
				q_retroIncorrecto1Intento[1] = json.pregunta_2.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[1] = json.pregunta_2.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[1] = json.pregunta_2.retoalimentacion_correcta;
				/////******
				//////Pregunta3
				q_enunciado[2] = json.pregunta_3.enunciado;
				q_numDistractores[2] = json.pregunta_3.num_distractores;
				q_distractor1[2] = json.pregunta_3.distractor_1;
				q_distractor2[2] = json.pregunta_3.distractor_2;
				q_distractor3[2] = json.pregunta_3.distractor_3;
				q_distractor4[2] = json.pregunta_3.distractor_4;
				q_respuesta[2] = json.pregunta_3.respuesta_correcta;
				q_retroIncorrecto1Intento[2] = json.pregunta_3.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[2] = json.pregunta_3.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[2] = json.pregunta_3.retoalimentacion_correcta;
				/////******
				//
				break;
			case 4:
				//////Pregunta1
				q_enunciado[0] = json.pregunta_1.enunciado;
				q_numDistractores[0] = json.pregunta_1.num_distractores;
				q_distractor1[0] = json.pregunta_1.distractor_1;
				q_distractor2[0] = json.pregunta_1.distractor_2;
				q_distractor3[0] = json.pregunta_1.distractor_3;
				q_distractor4[0] = json.pregunta_1.distractor_4;
				q_respuesta[0] = json.pregunta_1.respuesta_correcta;
				q_retroIncorrecto1Intento[0] = json.pregunta_1.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[0] = json.pregunta_1.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[0] = json.pregunta_1.retoalimentacion_correcta;
				/////******
				//////Pregunta2
				q_enunciado[1] = json.pregunta_2.enunciado;
				q_numDistractores[1] = json.pregunta_2.num_distractores;
				q_distractor1[1] = json.pregunta_2.distractor_1;
				q_distractor2[1] = json.pregunta_2.distractor_2;
				q_distractor3[1] = json.pregunta_2.distractor_3;
				q_distractor4[1] = json.pregunta_2.distractor_4;
				q_respuesta[1] = json.pregunta_2.respuesta_correcta;
				q_retroIncorrecto1Intento[1] = json.pregunta_2.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[1] = json.pregunta_2.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[1] = json.pregunta_2.retoalimentacion_correcta;
				/////******
				//////Pregunta3
				q_enunciado[2] = json.pregunta_3.enunciado;
				q_numDistractores[2] = json.pregunta_3.num_distractores;
				q_distractor1[2] = json.pregunta_3.distractor_1;
				q_distractor2[2] = json.pregunta_3.distractor_2;
				q_distractor3[2] = json.pregunta_3.distractor_3;
				q_distractor4[2] = json.pregunta_3.distractor_4;
				q_respuesta[2] = json.pregunta_3.respuesta_correcta;
				q_retroIncorrecto1Intento[2] = json.pregunta_3.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[2] = json.pregunta_3.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[2] = json.pregunta_3.retoalimentacion_correcta;
				/////******
				//////Pregunta4
				q_enunciado[3] = json.pregunta_4.enunciado;
				q_numDistractores[3] = json.pregunta_4.num_distractores;
				q_distractor1[3] = json.pregunta_4.distractor_1;
				q_distractor2[3] = json.pregunta_4.distractor_2;
				q_distractor3[3] = json.pregunta_4.distractor_3;
				q_distractor4[3] = json.pregunta_4.distractor_4;
				q_respuesta[3] = json.pregunta_4.respuesta_correcta;
				q_retroIncorrecto1Intento[3] = json.pregunta_4.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[3] = json.pregunta_4.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[3] = json.pregunta_4.retoalimentacion_correcta;
				/////******
				//
				break;
			case 5:
				//////Pregunta1
				q_enunciado[0] = json.pregunta_1.enunciado;
				q_numDistractores[0] = json.pregunta_1.num_distractores;
				q_distractor1[0] = json.pregunta_1.distractor_1;
				q_distractor2[0] = json.pregunta_1.distractor_2;
				q_distractor3[0] = json.pregunta_1.distractor_3;
				q_distractor4[0] = json.pregunta_1.distractor_4;
				q_respuesta[0] = json.pregunta_1.respuesta_correcta;
				q_retroIncorrecto1Intento[0] = json.pregunta_1.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[0] = json.pregunta_1.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[0] = json.pregunta_1.retoalimentacion_correcta;
				/////******
				//////Pregunta2
				q_enunciado[1] = json.pregunta_2.enunciado;
				q_numDistractores[1] = json.pregunta_2.num_distractores;
				q_distractor1[1] = json.pregunta_2.distractor_1;
				q_distractor2[1] = json.pregunta_2.distractor_2;
				q_distractor3[1] = json.pregunta_2.distractor_3;
				q_distractor4[1] = json.pregunta_2.distractor_4;
				q_respuesta[1] = json.pregunta_2.respuesta_correcta;
				q_retroIncorrecto1Intento[1] = json.pregunta_2.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[1] = json.pregunta_2.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[1] = json.pregunta_2.retoalimentacion_correcta;
				/////******
				//////Pregunta3
				q_enunciado[2] = json.pregunta_3.enunciado;
				q_numDistractores[2] = json.pregunta_3.num_distractores;
				q_distractor1[2] = json.pregunta_3.distractor_1;
				q_distractor2[2] = json.pregunta_3.distractor_2;
				q_distractor3[2] = json.pregunta_3.distractor_3;
				q_distractor4[2] = json.pregunta_3.distractor_4;
				q_respuesta[2] = json.pregunta_3.respuesta_correcta;
				q_retroIncorrecto1Intento[2] = json.pregunta_3.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[2] = json.pregunta_3.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[2] = json.pregunta_3.retoalimentacion_correcta;
				/////******
				//////Pregunta4
				q_enunciado[3] = json.pregunta_4.enunciado;
				q_numDistractores[3] = json.pregunta_4.num_distractores;
				q_distractor1[3] = json.pregunta_4.distractor_1;
				q_distractor2[3] = json.pregunta_4.distractor_2;
				q_distractor3[3] = json.pregunta_4.distractor_3;
				q_distractor4[3] = json.pregunta_4.distractor_4;
				q_respuesta[3] = json.pregunta_4.respuesta_correcta;
				q_retroIncorrecto1Intento[3] = json.pregunta_4.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[3] = json.pregunta_4.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[3] = json.pregunta_4.retoalimentacion_correcta;
				/////******
				//////Pregunta5
				q_enunciado[4] = json.pregunta_5.enunciado;
				q_numDistractores[4] = json.pregunta_5.num_distractores;
				q_distractor1[4] = json.pregunta_5.distractor_1;
				q_distractor2[4] = json.pregunta_5.distractor_2;
				q_distractor3[4] = json.pregunta_5.distractor_3;
				q_distractor4[4] = json.pregunta_5.distractor_4;
				q_respuesta[4] = json.pregunta_5.respuesta_correcta;
				q_retroIncorrecto1Intento[4] = json.pregunta_5.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[4] = json.pregunta_5.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[4] = json.pregunta_5.retoalimentacion_correcta;
				/////******
				//
				break;
			case 6:
				//////Pregunta1
				q_enunciado[0] = json.pregunta_1.enunciado;
				q_numDistractores[0] = json.pregunta_1.num_distractores;
				q_distractor1[0] = json.pregunta_1.distractor_1;
				q_distractor2[0] = json.pregunta_1.distractor_2;
				q_distractor3[0] = json.pregunta_1.distractor_3;
				q_distractor4[0] = json.pregunta_1.distractor_4;
				q_respuesta[0] = json.pregunta_1.respuesta_correcta;
				q_retroIncorrecto1Intento[0] = json.pregunta_1.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[0] = json.pregunta_1.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[0] = json.pregunta_1.retoalimentacion_correcta;
				/////******
				//////Pregunta2
				q_enunciado[1] = json.pregunta_2.enunciado;
				q_numDistractores[1] = json.pregunta_2.num_distractores;
				q_distractor1[1] = json.pregunta_2.distractor_1;
				q_distractor2[1] = json.pregunta_2.distractor_2;
				q_distractor3[1] = json.pregunta_2.distractor_3;
				q_distractor4[1] = json.pregunta_2.distractor_4;
				q_respuesta[1] = json.pregunta_2.respuesta_correcta;
				q_retroIncorrecto1Intento[1] = json.pregunta_2.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[1] = json.pregunta_2.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[1] = json.pregunta_2.retoalimentacion_correcta;
				/////******
				//////Pregunta3
				q_enunciado[2] = json.pregunta_3.enunciado;
				q_numDistractores[2] = json.pregunta_3.num_distractores;
				q_distractor1[2] = json.pregunta_3.distractor_1;
				q_distractor2[2] = json.pregunta_3.distractor_2;
				q_distractor3[2] = json.pregunta_3.distractor_3;
				q_distractor4[2] = json.pregunta_3.distractor_4;
				q_respuesta[2] = json.pregunta_3.respuesta_correcta;
				q_retroIncorrecto1Intento[2] = json.pregunta_3.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[2] = json.pregunta_3.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[2] = json.pregunta_3.retoalimentacion_correcta;
				/////******
				//////Pregunta4
				q_enunciado[3] = json.pregunta_4.enunciado;
				q_numDistractores[3] = json.pregunta_4.num_distractores;
				q_distractor1[3] = json.pregunta_4.distractor_1;
				q_distractor2[3] = json.pregunta_4.distractor_2;
				q_distractor3[3] = json.pregunta_4.distractor_3;
				q_distractor4[3] = json.pregunta_4.distractor_4;
				q_respuesta[3] = json.pregunta_4.respuesta_correcta;
				q_retroIncorrecto1Intento[3] = json.pregunta_4.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[3] = json.pregunta_4.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[3] = json.pregunta_4.retoalimentacion_correcta;
				/////******
				//////Pregunta5
				q_enunciado[4] = json.pregunta_5.enunciado;
				q_numDistractores[4] = json.pregunta_5.num_distractores;
				q_distractor1[4] = json.pregunta_5.distractor_1;
				q_distractor2[4] = json.pregunta_5.distractor_2;
				q_distractor3[4] = json.pregunta_5.distractor_3;
				q_distractor4[4] = json.pregunta_5.distractor_4;
				q_respuesta[4] = json.pregunta_5.respuesta_correcta;
				q_retroIncorrecto1Intento[4] = json.pregunta_5.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[4] = json.pregunta_5.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[4] = json.pregunta_5.retoalimentacion_correcta;
				/////******
				//////Pregunta6
				q_enunciado[5] = json.pregunta_6.enunciado;
				q_numDistractores[5] = json.pregunta_6.num_distractores;
				q_distractor1[5] = json.pregunta_6.distractor_1;
				q_distractor2[5] = json.pregunta_6.distractor_2;
				q_distractor3[5] = json.pregunta_6.distractor_3;
				q_distractor4[5] = json.pregunta_6.distractor_4;
				q_respuesta[5] = json.pregunta_6.respuesta_correcta;
				q_retroIncorrecto1Intento[5] = json.pregunta_6.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[5] = json.pregunta_6.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[5] = json.pregunta_6.retoalimentacion_correcta;
				/////******
				
				//
				break;
			case 7:
				//////Pregunta1
				q_enunciado[0] = json.pregunta_1.enunciado;
				q_numDistractores[0] = json.pregunta_1.num_distractores;
				q_distractor1[0] = json.pregunta_1.distractor_1;
				q_distractor2[0] = json.pregunta_1.distractor_2;
				q_distractor3[0] = json.pregunta_1.distractor_3;
				q_distractor4[0] = json.pregunta_1.distractor_4;
				q_respuesta[0] = json.pregunta_1.respuesta_correcta;
				q_retroIncorrecto1Intento[0] = json.pregunta_1.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[0] = json.pregunta_1.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[0] = json.pregunta_1.retoalimentacion_correcta;
				/////******
				//////Pregunta2
				q_enunciado[1] = json.pregunta_2.enunciado;
				q_numDistractores[1] = json.pregunta_2.num_distractores;
				q_distractor1[1] = json.pregunta_2.distractor_1;
				q_distractor2[1] = json.pregunta_2.distractor_2;
				q_distractor3[1] = json.pregunta_2.distractor_3;
				q_distractor4[1] = json.pregunta_2.distractor_4;
				q_respuesta[1] = json.pregunta_2.respuesta_correcta;
				q_retroIncorrecto1Intento[1] = json.pregunta_2.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[1] = json.pregunta_2.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[1] = json.pregunta_2.retoalimentacion_correcta;
				/////******
				//////Pregunta3
				q_enunciado[2] = json.pregunta_3.enunciado;
				q_numDistractores[2] = json.pregunta_3.num_distractores;
				q_distractor1[2] = json.pregunta_3.distractor_1;
				q_distractor2[2] = json.pregunta_3.distractor_2;
				q_distractor3[2] = json.pregunta_3.distractor_3;
				q_distractor4[2] = json.pregunta_3.distractor_4;
				q_respuesta[2] = json.pregunta_3.respuesta_correcta;
				q_retroIncorrecto1Intento[2] = json.pregunta_3.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[2] = json.pregunta_3.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[2] = json.pregunta_3.retoalimentacion_correcta;
				/////******
				//////Pregunta4
				q_enunciado[3] = json.pregunta_4.enunciado;
				q_numDistractores[3] = json.pregunta_4.num_distractores;
				q_distractor1[3] = json.pregunta_4.distractor_1;
				q_distractor2[3] = json.pregunta_4.distractor_2;
				q_distractor3[3] = json.pregunta_4.distractor_3;
				q_distractor4[3] = json.pregunta_4.distractor_4;
				q_respuesta[3] = json.pregunta_4.respuesta_correcta;
				q_retroIncorrecto1Intento[3] = json.pregunta_4.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[3] = json.pregunta_4.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[3] = json.pregunta_4.retoalimentacion_correcta;
				/////******
				//////Pregunta5
				q_enunciado[4] = json.pregunta_5.enunciado;
				q_numDistractores[4] = json.pregunta_5.num_distractores;
				q_distractor1[4] = json.pregunta_5.distractor_1;
				q_distractor2[4] = json.pregunta_5.distractor_2;
				q_distractor3[4] = json.pregunta_5.distractor_3;
				q_distractor4[4] = json.pregunta_5.distractor_4;
				q_respuesta[4] = json.pregunta_5.respuesta_correcta;
				q_retroIncorrecto1Intento[4] = json.pregunta_5.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[4] = json.pregunta_5.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[4] = json.pregunta_5.retoalimentacion_correcta;
				/////******
				//////Pregunta6
				q_enunciado[5] = json.pregunta_6.enunciado;
				q_numDistractores[5] = json.pregunta_6.num_distractores;
				q_distractor1[5] = json.pregunta_6.distractor_1;
				q_distractor2[5] = json.pregunta_6.distractor_2;
				q_distractor3[5] = json.pregunta_6.distractor_3;
				q_distractor4[5] = json.pregunta_6.distractor_4;
				q_respuesta[5] = json.pregunta_6.respuesta_correcta;
				q_retroIncorrecto1Intento[5] = json.pregunta_6.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[5] = json.pregunta_6.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[5] = json.pregunta_6.retoalimentacion_correcta;
				/////******
				//////Pregunta7
				q_enunciado[6] = json.pregunta_7.enunciado;
				q_numDistractores[6] = json.pregunta_7.num_distractores;
				q_distractor1[6] = json.pregunta_7.distractor_1;
				q_distractor2[6] = json.pregunta_7.distractor_2;
				q_distractor3[6] = json.pregunta_7.distractor_3;
				q_distractor4[6] = json.pregunta_7.distractor_4;
				q_respuesta[6] = json.pregunta_7.respuesta_correcta;
				q_retroIncorrecto1Intento[6] = json.pregunta_7.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[6] = json.pregunta_7.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[6] = json.pregunta_7.retoalimentacion_correcta;
				/////******
				
				//
				break;
			case 8:
				//////Pregunta1
				q_enunciado[0] = json.pregunta_1.enunciado;
				q_numDistractores[0] = json.pregunta_1.num_distractores;
				q_distractor1[0] = json.pregunta_1.distractor_1;
				q_distractor2[0] = json.pregunta_1.distractor_2;
				q_distractor3[0] = json.pregunta_1.distractor_3;
				q_distractor4[0] = json.pregunta_1.distractor_4;
				q_respuesta[0] = json.pregunta_1.respuesta_correcta;
				q_retroIncorrecto1Intento[0] = json.pregunta_1.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[0] = json.pregunta_1.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[0] = json.pregunta_1.retoalimentacion_correcta;
				/////******
				//////Pregunta2
				q_enunciado[1] = json.pregunta_2.enunciado;
				q_numDistractores[1] = json.pregunta_2.num_distractores;
				q_distractor1[1] = json.pregunta_2.distractor_1;
				q_distractor2[1] = json.pregunta_2.distractor_2;
				q_distractor3[1] = json.pregunta_2.distractor_3;
				q_distractor4[1] = json.pregunta_2.distractor_4;
				q_respuesta[1] = json.pregunta_2.respuesta_correcta;
				q_retroIncorrecto1Intento[1] = json.pregunta_2.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[1] = json.pregunta_2.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[1] = json.pregunta_2.retoalimentacion_correcta;
				/////******
				//////Pregunta3
				q_enunciado[2] = json.pregunta_3.enunciado;
				q_numDistractores[2] = json.pregunta_3.num_distractores;
				q_distractor1[2] = json.pregunta_3.distractor_1;
				q_distractor2[2] = json.pregunta_3.distractor_2;
				q_distractor3[2] = json.pregunta_3.distractor_3;
				q_distractor4[2] = json.pregunta_3.distractor_4;
				q_respuesta[2] = json.pregunta_3.respuesta_correcta;
				q_retroIncorrecto1Intento[2] = json.pregunta_3.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[2] = json.pregunta_3.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[2] = json.pregunta_3.retoalimentacion_correcta;
				/////******
				//////Pregunta4
				q_enunciado[3] = json.pregunta_4.enunciado;
				q_numDistractores[3] = json.pregunta_4.num_distractores;
				q_distractor1[3] = json.pregunta_4.distractor_1;
				q_distractor2[3] = json.pregunta_4.distractor_2;
				q_distractor3[3] = json.pregunta_4.distractor_3;
				q_distractor4[3] = json.pregunta_4.distractor_4;
				q_respuesta[3] = json.pregunta_4.respuesta_correcta;
				q_retroIncorrecto1Intento[3] = json.pregunta_4.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[3] = json.pregunta_4.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[3] = json.pregunta_4.retoalimentacion_correcta;
				/////******
				//////Pregunta5
				q_enunciado[4] = json.pregunta_5.enunciado;
				q_numDistractores[4] = json.pregunta_5.num_distractores;
				q_distractor1[4] = json.pregunta_5.distractor_1;
				q_distractor2[4] = json.pregunta_5.distractor_2;
				q_distractor3[4] = json.pregunta_5.distractor_3;
				q_distractor4[4] = json.pregunta_5.distractor_4;
				q_respuesta[4] = json.pregunta_5.respuesta_correcta;
				q_retroIncorrecto1Intento[4] = json.pregunta_5.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[4] = json.pregunta_5.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[4] = json.pregunta_5.retoalimentacion_correcta;
				/////******
				//////Pregunta6
				q_enunciado[5] = json.pregunta_6.enunciado;
				q_numDistractores[5] = json.pregunta_6.num_distractores;
				q_distractor1[5] = json.pregunta_6.distractor_1;
				q_distractor2[5] = json.pregunta_6.distractor_2;
				q_distractor3[5] = json.pregunta_6.distractor_3;
				q_distractor4[5] = json.pregunta_6.distractor_4;
				q_respuesta[5] = json.pregunta_6.respuesta_correcta;
				q_retroIncorrecto1Intento[5] = json.pregunta_6.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[5] = json.pregunta_6.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[5] = json.pregunta_6.retoalimentacion_correcta;
				/////******
				//////Pregunta7
				q_enunciado[6] = json.pregunta_7.enunciado;
				q_numDistractores[6] = json.pregunta_7.num_distractores;
				q_distractor1[6] = json.pregunta_7.distractor_1;
				q_distractor2[6] = json.pregunta_7.distractor_2;
				q_distractor3[6] = json.pregunta_7.distractor_3;
				q_distractor4[6] = json.pregunta_7.distractor_4;
				q_respuesta[6] = json.pregunta_7.respuesta_correcta;
				q_retroIncorrecto1Intento[6] = json.pregunta_7.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[6] = json.pregunta_7.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[6] = json.pregunta_7.retoalimentacion_correcta;
				/////******
				//////Pregunta8
				q_enunciado[7] = json.pregunta_8.enunciado;
				q_numDistractores[7] = json.pregunta_8.num_distractores;
				q_distractor1[7] = json.pregunta_8.distractor_1;
				q_distractor2[7] = json.pregunta_8.distractor_2;
				q_distractor3[7] = json.pregunta_8.distractor_3;
				q_distractor4[7] = json.pregunta_8.distractor_4;
				q_respuesta[7] = json.pregunta_8.respuesta_correcta;
				q_retroIncorrecto1Intento[7] = json.pregunta_8.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[7] = json.pregunta_8.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[7] = json.pregunta_8.retoalimentacion_correcta;
				/////******
				
				//
				break;
			case 9:
				q_enunciado[0] = json.pregunta_1.enunciado;
				q_numDistractores[0] = json.pregunta_1.num_distractores;
				q_distractor1[0] = json.pregunta_1.distractor_1;
				q_distractor2[0] = json.pregunta_1.distractor_2;
				q_distractor3[0] = json.pregunta_1.distractor_3;
				q_distractor4[0] = json.pregunta_1.distractor_4;
				q_respuesta[0] = json.pregunta_1.respuesta_correcta;
				q_retroIncorrecto1Intento[0] = json.pregunta_1.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[0] = json.pregunta_1.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[0] = json.pregunta_1.retoalimentacion_correcta;
				/////******
				//////Pregunta2
				q_enunciado[1] = json.pregunta_2.enunciado;
				q_numDistractores[1] = json.pregunta_2.num_distractores;
				q_distractor1[1] = json.pregunta_2.distractor_1;
				q_distractor2[1] = json.pregunta_2.distractor_2;
				q_distractor3[1] = json.pregunta_2.distractor_3;
				q_distractor4[1] = json.pregunta_2.distractor_4;
				q_respuesta[1] = json.pregunta_2.respuesta_correcta;
				q_retroIncorrecto1Intento[1] = json.pregunta_2.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[1] = json.pregunta_2.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[1] = json.pregunta_2.retoalimentacion_correcta;
				/////******
				//////Pregunta3
				q_enunciado[2] = json.pregunta_3.enunciado;
				q_numDistractores[2] = json.pregunta_3.num_distractores;
				q_distractor1[2] = json.pregunta_3.distractor_1;
				q_distractor2[2] = json.pregunta_3.distractor_2;
				q_distractor3[2] = json.pregunta_3.distractor_3;
				q_distractor4[2] = json.pregunta_3.distractor_4;
				q_respuesta[2] = json.pregunta_3.respuesta_correcta;
				q_retroIncorrecto1Intento[2] = json.pregunta_3.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[2] = json.pregunta_3.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[2] = json.pregunta_3.retoalimentacion_correcta;
				/////******
				//////Pregunta4
				q_enunciado[3] = json.pregunta_4.enunciado;
				q_numDistractores[3] = json.pregunta_4.num_distractores;
				q_distractor1[3] = json.pregunta_4.distractor_1;
				q_distractor2[3] = json.pregunta_4.distractor_2;
				q_distractor3[3] = json.pregunta_4.distractor_3;
				q_distractor4[3] = json.pregunta_4.distractor_4;
				q_respuesta[3] = json.pregunta_4.respuesta_correcta;
				q_retroIncorrecto1Intento[3] = json.pregunta_4.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[3] = json.pregunta_4.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[3] = json.pregunta_4.retoalimentacion_correcta;
				/////******
				//////Pregunta5
				q_enunciado[4] = json.pregunta_5.enunciado;
				q_numDistractores[4] = json.pregunta_5.num_distractores;
				q_distractor1[4] = json.pregunta_5.distractor_1;
				q_distractor2[4] = json.pregunta_5.distractor_2;
				q_distractor3[4] = json.pregunta_5.distractor_3;
				q_distractor4[4] = json.pregunta_5.distractor_4;
				q_respuesta[4] = json.pregunta_5.respuesta_correcta;
				q_retroIncorrecto1Intento[4] = json.pregunta_5.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[4] = json.pregunta_5.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[4] = json.pregunta_5.retoalimentacion_correcta;
				/////******
				//////Pregunta6
				q_enunciado[5] = json.pregunta_6.enunciado;
				q_numDistractores[5] = json.pregunta_6.num_distractores;
				q_distractor1[5] = json.pregunta_6.distractor_1;
				q_distractor2[5] = json.pregunta_6.distractor_2;
				q_distractor3[5] = json.pregunta_6.distractor_3;
				q_distractor4[5] = json.pregunta_6.distractor_4;
				q_respuesta[5] = json.pregunta_6.respuesta_correcta;
				q_retroIncorrecto1Intento[5] = json.pregunta_6.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[5] = json.pregunta_6.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[5] = json.pregunta_6.retoalimentacion_correcta;
				/////******
				//////Pregunta7
				q_enunciado[6] = json.pregunta_7.enunciado;
				q_numDistractores[6] = json.pregunta_7.num_distractores;
				q_distractor1[6] = json.pregunta_7.distractor_1;
				q_distractor2[6] = json.pregunta_7.distractor_2;
				q_distractor3[6] = json.pregunta_7.distractor_3;
				q_distractor4[6] = json.pregunta_7.distractor_4;
				q_respuesta[6] = json.pregunta_7.respuesta_correcta;
				q_retroIncorrecto1Intento[6] = json.pregunta_7.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[6] = json.pregunta_7.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[6] = json.pregunta_7.retoalimentacion_correcta;
				/////******
				//////Pregunta8
				q_enunciado[7] = json.pregunta_8.enunciado;
				q_numDistractores[7] = json.pregunta_8.num_distractores;
				q_distractor1[7] = json.pregunta_8.distractor_1;
				q_distractor2[7] = json.pregunta_8.distractor_2;
				q_distractor3[7] = json.pregunta_8.distractor_3;
				q_distractor4[7] = json.pregunta_8.distractor_4;
				q_respuesta[7] = json.pregunta_8.respuesta_correcta;
				q_retroIncorrecto1Intento[7] = json.pregunta_8.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[7] = json.pregunta_8.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[7] = json.pregunta_8.retoalimentacion_correcta;
				/////******
				//////Pregunta9
				q_enunciado[8] = json.pregunta_9.enunciado;
				q_numDistractores[8] = json.pregunta_9.num_distractores;
				q_distractor1[8] = json.pregunta_9.distractor_1;
				q_distractor2[8] = json.pregunta_9.distractor_2;
				q_distractor3[8] = json.pregunta_9.distractor_3;
				q_distractor4[8] = json.pregunta_9.distractor_4;
				q_respuesta[8] = json.pregunta_9.respuesta_correcta;
				q_retroIncorrecto1Intento[8] = json.pregunta_9.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[8] = json.pregunta_9.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[8] = json.pregunta_9.retoalimentacion_correcta;
				/////******
				//
				break;
			case 10:
				q_enunciado[0] = json.pregunta_1.enunciado;
				q_numDistractores[0] = json.pregunta_1.num_distractores;
				q_distractor1[0] = json.pregunta_1.distractor_1;
				q_distractor2[0] = json.pregunta_1.distractor_2;
				q_distractor3[0] = json.pregunta_1.distractor_3;
				q_distractor4[0] = json.pregunta_1.distractor_4;
				q_respuesta[0] = json.pregunta_1.respuesta_correcta;
				q_retroIncorrecto1Intento[0] = json.pregunta_1.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[0] = json.pregunta_1.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[0] = json.pregunta_1.retoalimentacion_correcta;
				/////******
				//////Pregunta2
				q_enunciado[1] = json.pregunta_2.enunciado;
				q_numDistractores[1] = json.pregunta_2.num_distractores;
				q_distractor1[1] = json.pregunta_2.distractor_1;
				q_distractor2[1] = json.pregunta_2.distractor_2;
				q_distractor3[1] = json.pregunta_2.distractor_3;
				q_distractor4[1] = json.pregunta_2.distractor_4;
				q_respuesta[1] = json.pregunta_2.respuesta_correcta;
				q_retroIncorrecto1Intento[1] = json.pregunta_2.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[1] = json.pregunta_2.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[1] = json.pregunta_2.retoalimentacion_correcta;
				/////******
				//////Pregunta3
				q_enunciado[2] = json.pregunta_3.enunciado;
				q_numDistractores[2] = json.pregunta_3.num_distractores;
				q_distractor1[2] = json.pregunta_3.distractor_1;
				q_distractor2[2] = json.pregunta_3.distractor_2;
				q_distractor3[2] = json.pregunta_3.distractor_3;
				q_distractor4[2] = json.pregunta_3.distractor_4;
				q_respuesta[2] = json.pregunta_3.respuesta_correcta;
				q_retroIncorrecto1Intento[2] = json.pregunta_3.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[2] = json.pregunta_3.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[2] = json.pregunta_3.retoalimentacion_correcta;
				/////******
				//////Pregunta4
				q_enunciado[3] = json.pregunta_4.enunciado;
				q_numDistractores[3] = json.pregunta_4.num_distractores;
				q_distractor1[3] = json.pregunta_4.distractor_1;
				q_distractor2[3] = json.pregunta_4.distractor_2;
				q_distractor3[3] = json.pregunta_4.distractor_3;
				q_distractor4[3] = json.pregunta_4.distractor_4;
				q_respuesta[3] = json.pregunta_4.respuesta_correcta;
				q_retroIncorrecto1Intento[3] = json.pregunta_4.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[3] = json.pregunta_4.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[3] = json.pregunta_4.retoalimentacion_correcta;
				/////******
				//////Pregunta5
				q_enunciado[4] = json.pregunta_5.enunciado;
				q_numDistractores[4] = json.pregunta_5.num_distractores;
				q_distractor1[4] = json.pregunta_5.distractor_1;
				q_distractor2[4] = json.pregunta_5.distractor_2;
				q_distractor3[4] = json.pregunta_5.distractor_3;
				q_distractor4[4] = json.pregunta_5.distractor_4;
				q_respuesta[4] = json.pregunta_5.respuesta_correcta;
				q_retroIncorrecto1Intento[4] = json.pregunta_5.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[4] = json.pregunta_5.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[4] = json.pregunta_5.retoalimentacion_correcta;
				/////******
				//////Pregunta6
				q_enunciado[5] = json.pregunta_6.enunciado;
				q_numDistractores[5] = json.pregunta_6.num_distractores;
				q_distractor1[5] = json.pregunta_6.distractor_1;
				q_distractor2[5] = json.pregunta_6.distractor_2;
				q_distractor3[5] = json.pregunta_6.distractor_3;
				q_distractor4[5] = json.pregunta_6.distractor_4;
				q_respuesta[5] = json.pregunta_6.respuesta_correcta;
				q_retroIncorrecto1Intento[5] = json.pregunta_6.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[5] = json.pregunta_6.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[5] = json.pregunta_6.retoalimentacion_correcta;
				/////******
				//////Pregunta7
				q_enunciado[6] = json.pregunta_7.enunciado;
				q_numDistractores[6] = json.pregunta_7.num_distractores;
				q_distractor1[6] = json.pregunta_7.distractor_1;
				q_distractor2[6] = json.pregunta_7.distractor_2;
				q_distractor3[6] = json.pregunta_7.distractor_3;
				q_distractor4[6] = json.pregunta_7.distractor_4;
				q_respuesta[6] = json.pregunta_7.respuesta_correcta;
				q_retroIncorrecto1Intento[6] = json.pregunta_7.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[6] = json.pregunta_7.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[6] = json.pregunta_7.retoalimentacion_correcta;
				/////******
				//////Pregunta8
				q_enunciado[7] = json.pregunta_8.enunciado;
				q_numDistractores[7] = json.pregunta_8.num_distractores;
				q_distractor1[7] = json.pregunta_8.distractor_1;
				q_distractor2[7] = json.pregunta_8.distractor_2;
				q_distractor3[7] = json.pregunta_8.distractor_3;
				q_distractor4[7] = json.pregunta_8.distractor_4;
				q_respuesta[7] = json.pregunta_8.respuesta_correcta;
				q_retroIncorrecto1Intento[7] = json.pregunta_8.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[7] = json.pregunta_8.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[7] = json.pregunta_8.retoalimentacion_correcta;
				/////******
				//////Pregunta9
				q_enunciado[8] = json.pregunta_9.enunciado;
				q_numDistractores[8] = json.pregunta_9.num_distractores;
				q_distractor1[8] = json.pregunta_9.distractor_1;
				q_distractor2[8] = json.pregunta_9.distractor_2;
				q_distractor3[8] = json.pregunta_9.distractor_3;
				q_distractor4[8] = json.pregunta_9.distractor_4;
				q_respuesta[8] = json.pregunta_9.respuesta_correcta;
				q_retroIncorrecto1Intento[8] = json.pregunta_9.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[8] = json.pregunta_9.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[8] = json.pregunta_9.retoalimentacion_correcta;
				/////******
				//////Pregunta10
				q_enunciado[9] = json.pregunta_10.enunciado;
				q_numDistractores[9] = json.pregunta_10.num_distractores;
				q_distractor1[9] = json.pregunta_10.distractor_1;
				q_distractor2[9] = json.pregunta_10.distractor_2;
				q_distractor3[9] = json.pregunta_10.distractor_3;
				q_distractor4[9] = json.pregunta_10.distractor_4;
				q_respuesta[9] = json.pregunta_10.respuesta_correcta;
				q_retroIncorrecto1Intento[9] = json.pregunta_10.retroalimentacion_incorrectoPrimerIntento;
				q_retroIncorrecto2Intento[9] = json.pregunta_10.retroalimentacion_incorrectoSegundoIntento;
				q_retroCorrecto[9] = json.pregunta_10.retoalimentacion_correcta;
				/////******
				//
				break;
		}
		
		f_funcionLlenarPregunta(inicioNumPreguntas);
		//f_funcionLlenarPreguntas(GeneralNumPreguntas);
		
		//q_enunciado[0] = json.pregunta_+"1"+.numero_preguntas;
		
		//alert(Object.keys(json).length);
		//alert(json.pregunta_1.enunciado);
		//alert(GeneralNumPreguntas);
		
		$('#tituloInstrucciones').html(GeneralInstruccionesTitulo);
		$('#parrafoInstrucciones').html(GeneralInstruccionesParrafo);
		$('.titulo_act1').css("font-size", GeneralFontSizeTitulo);
		$('.titulo_act1').css("font-family", GeneralFontFamilyTitulo);
		$('.titulo_enunciado').css("font-family", GeneralFontFamilyTitulo);
		$('.titulo_numActividad').css("font-family", GeneralFontFamilyTitulo);
		$('.parrafo_act1').css("font-size", GeneralFontSizeParrafo);
		$('.parrafo_act1').css("font-family", GeneralFontFamilyParrafo);
		
	});
	f_animDecoradoImagen();
	f_animacionInstrucciones();
	
	///FUNCIONES GENERALES 
	function f_funcionLlenarPregunta(_numActualPreguntas)
	{
		//alert(q_enunciado[0]);
		//alert(q_numDistractores[_numActualPreguntas]);
		var data_numPregunta = String(_numActualPreguntas+1);
		$('.numPregunta').html(data_numPregunta+".");
		$('.enunciado').html(q_enunciado[_numActualPreguntas]);
		$('#distractor_1').html(q_distractor1[_numActualPreguntas]);
		$('#distractor_2').html(q_distractor2[_numActualPreguntas]);
		$('#distractor_3').html(q_distractor3[_numActualPreguntas]);
		$('#distractor_4').html(q_distractor4[_numActualPreguntas]);
		switch (q_numDistractores[_numActualPreguntas]) {
				case 2:
				$('#all_distractor1').show();
				$('#all_distractor2').show();
				$('#all_distractor3').hide();
				$('#all_distractor4').hide();
				
				break;
				
				case 3:
				$('#all_distractor1').show();
				$('#all_distractor2').show();
				$('#all_distractor3').show();
				$('#all_distractor4').hide();
				//
				break;
				case 4:
				$('#all_distractor1').show();
				$('#all_distractor2').show();
				$('#all_distractor3').show();
				$('#all_distractor4').show();
				//
				break;
				
		}
		
	}
	
	//FUNCIONES DE EVENTOS
	////Cerrar Instrucciones
	$( ".botonInstrucciones" ).click(function() {
		$('.contenedorInstrucciones_act1').hide('slide');
		$('.personaje').show();
		$('.personaje').addClass('animated bounceIn');
		f_controlarAnimPersonajeLoop();
		$('.contenedorPregunta').show();
		$('.contenedorPregunta').addClass('animated bounceIn');
		//$('.btn').show();
		//$('.contenedorRetroalimentacion').show();
		
		////Personaje
		
		
	});
	$( ".botonDistractor" ).each(function(index) {
		
		$(this).on("click", function(){
			$("#1").css('background-color', 'rgba(59, 58, 105, 1.00)');
			$("#2").css('background-color', 'rgba(59, 58, 105, 1.00)');
			$("#3").css('background-color', 'rgba(59, 58, 105, 1.00)');
			$("#4").css('background-color', 'rgba(59, 58, 105, 1.00)');
			$(this).css('background-color', '#E6BC39');
			q_respuestaUsuario = Number($(this).attr('id'));
			//alert(q_respuesta[inicioNumPreguntas] == q_respuestaUsuario);
			$(".botonDisparar").show();
			$('.botonDisparar').addClass('animated bounceIn');
			banderaPregunta = q_respuesta[inicioNumPreguntas] == q_respuestaUsuario;
			//f_validarGeneral(banderaPregunta);
			
			//alert($(this).attr('id'));
    	});
	});
	$(".botonAvanzar").on("click", function(){
		
		if(banderaPregunta == true)
			{
				puntajeGetCookie = puntajeGetCookie + puntajeEvaluacion;
				inicioNumPreguntas = inicioNumPreguntas + 1;
				segundoIntento = 0;
			}
		else{
			segundoIntento = segundoIntento + 2; ////Quitar si se quieren dos intentos
			///segundoIntento = segundoIntento + 1; /// Colocar para dos intentos de cada pregunta
			if(segundoIntento == 0 || segundoIntento == 2)
			{
				inicioNumPreguntas = inicioNumPreguntas + 1;
				segundoIntento = 0;///Quitar si se quieren dos intentos
			}
		}
		
		
		

		
		if (inicioNumPreguntas < GeneralNumPreguntas)
			{
				
				f_limpiarAnimacion();
				q_respuestaUsuario = 0;
				banderaPregunta = false;
				$(".botonAvanzar").hide();
				$(".contenedorRetroalimentacion").hide();
				$(".mascaraPregunta").hide();
				$('.contenedorPregunta').hide();
				$("#1").css('background-color', 'rgba(51,90,155,1.00)');
				$("#2").css('background-color', 'rgba(51,90,155,1.00)');
				$("#3").css('background-color', 'rgba(51,90,155,1.00)');
				$("#4").css('background-color', 'rgba(51,90,155,1.00)');
				$(".personaje").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
					f_funcionLlenarPregunta(inicioNumPreguntas);
					$('.contenedorPregunta').show();
					$('.contenedorPregunta').addClass('magictime swashIn');

				});
				
			}
		else {
			
			setCookie("2020_ID",true,10); //// TODO 
			var puntajeGetCookieS = String(puntajeGetCookie);
			setCookie("Evaluacion_DaviPay", puntajeGetCookieS, 10);
			$(".botonAvanzar").hide();
			$(".contenedorRetroalimentacion").hide();
			$(".mascaraPregunta").hide();
			$('.contenedorPregunta').hide();
			$('.personaje').hide();
			$(".personajeBienEstatico").hide();
			$(".personajeMalEstatico").hide();
			$(".retroGeneral").show();
			$('.retroGeneral').addClass('magictime swashIn');
			
			
			////Casos de puntaje
			if(puntajeGetCookie <= 50)
				{
					$(".retroGeneralMal").show();
					$(".puntajeMal").html(puntajeGetCookie+"/100");
					$(".textoRetroMal").html(d_GeneralRetroMal);
					
				}
			if(puntajeGetCookie > 50 && puntajeGetCookie < 80)
				{
					$(".retroGeneralRegular").show();
					$(".puntajeRegular").html(puntajeGetCookie+"/100");
					$(".textoRetroRegular").html(d_GeneralRetroRegular);
				}
			if(puntajeGetCookie >= 80)
				{
					$(".retroGeneralMuyBien").show();
					$(".puntajeMuyBien").html(puntajeGetCookie+"/100");
					$(".textoRetroMuyBien").html(d_GeneralRetroMuyBien);
				}

			
			
		}
		
		
	});
	
	$(".botonDisparar").on("click", function(){
		$(".miAudioDisparo").trigger('play');

			$(this).hide();
			if(banderaPregunta == true)
				{
					//alert("validarBien");
					f_validarBien();
				}
			else
				{
					//alert("validarMal");
					f_validarMal();
				}
		});

	
	////////
	function f_controlarAnimPersonajeLoop()
	{
			$(".personaje").animateSprite({
			fps: 10,
			animations: {
				personaje_inicial: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
				personaje_bien: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
			},
			loop: true,
			complete: function(){
				
				
				//alert("animation End");
			}
			});
		
		////
		
	}
	function f_controlarAnimPersonajeEstatico(_miBandera)
	{
			$(".personajeBienAnim").animateSprite({
			fps: 10,
			animations: {
				personaje_inicial: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
				personaje_bien: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
			},
			loop: false,
			complete: function(){
				
				// use complete only when you set animations with 'loop: false'
				//alert("animation End");
				
				$(".personajeBienEstatico").show();
				$(".personajeBienAnim").hide();
				$(".personajeBienEstatico").animateSprite('play', 'personaje_bienA');
				
				if(_miBandera == true)
					{
						$(".miAudioCorrecto").trigger('play');
						
						$('.contenedorRetroalimentacion').show();
						$('.textRetro').html(q_retroCorrecto[inicioNumPreguntas]);
						$('.mascaraPregunta').show();
						$('.botonAvanzar').show();
						
						
						//alert("RetroalimentacionPositiva")
					}
				else
					{
						$('.contenedorRetroalimentacion').show();
						
						if(segundoIntento == 0 || segundoIntento == 2)
						{
							$('.textRetro').html(q_retroIncorrecto1Intento[inicioNumPreguntas]);
						}
						else{
							$('.textRetro').html(q_retroIncorrecto2Intento[inicioNumPreguntas]);
						}
						
						$('.mascaraPregunta').show();
						$('.botonAvanzar').show();
						//alert("RetroalimentacionNegativa");
					}
					
				
			}
			});
		
		////
		
	}
	function f_controlarAnimPersonajeBien()
	{
			$(".personajeBienEstatico").animateSprite({
			fps: 10,
			animations: {
				personaje_inicial: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
				personaje_bien: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
				personaje_bienA: [19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
			},
			loop: true,
			complete: function(){
				
				
				//alert("animation End");
				
				
			}
			});
		
		////
		
	}
	
	////////
	function f_controlarAnimPersonajeEstaticoMal(_miBandera)
	{
			$(".personajeMalAnim").animateSprite({
			fps: 10,
			animations: {
				personaje_inicial: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
				personaje_bien: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
				personaje_bienA:[20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
				personaje_mal:[30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
				personaje_malA:[40, 41, 42, 43, 44, 45, 46, 47, 48, 49]
			},
			loop: false,
			complete: function(){
				
				// use complete only when you set animations with 'loop: false'
				//alert("animation End");
				
				$(".personajeMalEstatico").show();
				$(".personajeMalAnim").hide();
				$(".personajeMalEstatico").animateSprite('play', 'personaje_malA');
				
				if(_miBandera == true)
					{
						$('.contenedorRetroalimentacion').show();
						$('.textRetro').html(q_retroCorrecto[inicioNumPreguntas]);
						$('.mascaraPregunta').show();
						$('.botonAvanzar').show();
						//alert("RetroalimentacionPositiva")
					}
				else
					{
						$(".miAudioIncorrecto").trigger('play');
						$('.contenedorRetroalimentacion').show();
						if(segundoIntento == 0 || segundoIntento == 2)
						{
							$('.textRetro').html(q_retroIncorrecto1Intento[inicioNumPreguntas]);
						}
						else{
							$('.textRetro').html(q_retroIncorrecto2Intento[inicioNumPreguntas]);
						}
						$('.mascaraPregunta').show();
						$('.botonAvanzar').show();
						//alert("RetroalimentacionNegativa");
					}
					
				
			}
			});
		
		////
		
	}
	function f_controlarAnimPersonajeMal()
	{
			$(".personajeMalEstatico").animateSprite({
			fps: 10,
			animations: {
				personaje_inicial: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
				personaje_bien: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
				personaje_bienA:[20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
				personaje_mal:[30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
				personaje_malA:[40, 41, 42, 43, 44, 45, 46, 47, 48, 49]
			},
			loop: true,
			complete: function(){

				
				
			}
			});

		
	}
	
	
	
	

	
	function f_validarBien()
	{
		$(".personaje").hide();
		$(".personajeBienAnim").show();
		f_controlarAnimPersonajeEstatico(banderaPregunta);
		f_controlarAnimPersonajeBien();
		$(".personajeBienAnim").animateSprite('play', 'personaje_inicial');
		$(".personajeBienAnim").animateSprite('play', 'personaje_bien');
	}
	function f_validarMal()
	{
		$(".personaje").hide();
		$(".personajeMalAnim").show();
		f_controlarAnimPersonajeEstaticoMal(banderaPregunta);	
		f_controlarAnimPersonajeMal();
		$(".personajeMalAnim").animateSprite('play', 'personaje_inicial');
		$(".personajeMalAnim").animateSprite('play', 'personaje_mal');
	}
	function f_limpiarAnimacion()
	{
		$(".personajeBienEstatico").hide();
		$(".personajeMalEstatico").hide();
		$(".personaje").show();	
		$(".personaje").animateSprite('play', 'personaje_inicial');	
	}
	
	////FUNCIONES DE ANIMACION
	function f_animDecoradoImagen()
		{
			$( ".nubes_act1" ).animate({
					
				marginLeft:"-960px"

				}, {
				duration: 45000,
				specialEasing: {
				marginLeft: "linear"
				},
				complete: function() {
					
					$( ".nubes_act1" ).css('margin-left','0px');
					f_animDecoradoImagen();

				}
  			});
			
		}
	////Fin
	function f_animacionInstrucciones()
	{
		setTimeout(function(){
			
		$('.contenedorInstrucciones_act1').show();
		$('.contenedorInstrucciones_act1').addClass('magictime twisterInDown');
		$(".contenedorInstrucciones_act1").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
			$('.imagenInstrucciones_act').show();
			$('.contenidoInstrucciones_act1').show();
			$('.imagenInstrucciones_act').addClass('animated flipInX');
			$('.contenidoInstrucciones_act1').addClass('animated zoomIn');
			
		});
		$(".imagenInstrucciones_act").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
			$('.botonInstrucciones').show();
			$('.botonInstrucciones').addClass('magictime tinLeftIn');
			
		});
 
		/////
		
		}, 500);
		
		}
	
	
	
	
	
	
	
	
});