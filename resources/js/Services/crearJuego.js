var contadorPreguntas = 1;
$( document ).ready(function() {
    console.log("Estoy en crear Juego");
    console.log("ID usuario "+getCookie("ID"));
    console.log("NOMBRE usuario "+getCookie("NOMBRE"));
    console.log("USUARIO usuario "+getCookie("USUARIO"));
    console.log("PASSWORD usuario "+getCookie("PASSWORD"));
    init();
});

function init()
{
    //console.log();
    var miLogeo = getCookie("c_logIn");
        //alert("Buenas");
        $(".paso2").hide();
        $(".paso3").hide();
        $(".paso1").show();


        f_returnGame();
        $(".numeroPregunta").html("Pregunta "+contadorPreguntas);


}

function registroJuego()
{
    var nombreJuego = $.trim($("#cj_nombreJuego").val());
    var categoria = $.trim($("#cj_categoria").val());
    var nivel = parseInt($.trim($("#cj_nivel").val()));
    var objetivo = $.trim($("#cj_objetivo").val());
    var idUsuario = parseInt(getCookie("ID"));

    //console.log(nivel);

    console.log("Datos crearJuego NOMBRE= "+ nombreJuego);
    console.log("Datos crearJuego CATEGORIA= "+ categoria);
    console.log("Datos crearJuego NIVEL= "+ nivel);
    console.log("Datos crearJuego OBJETIVO= "+ objetivo);

    let myData = {
        titulo:nombreJuego,
        categoria:categoria,
        nivel:nivel,
        objetivo:objetivo,
        user:
        {
            id:idUsuario
        }

    }
    let dataToSend=JSON.stringify(myData);

    console.log(dataToSend);

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url:"http://150.230.89.106:8080/api/crearJuego/save",
        data: dataToSend,
        datatype:"json",
        cache: false,
        timeout: 600000,
        success:function(respuesta){
            //alert("Se creo Juego");
            f_returnGame();
            //setCookie("NOMBRE",respuesta.name,10);

        },
        error : function(e) {
            //alert("No FUNCIONA");
        },
        done : function(e) {
            //alert("No FUNCIONA");
        }
    });

}
function f_returnGame()
{
    /////GetGame
    $.ajax({
        url:"http://150.230.89.106:8080/api/crearJuego/all",
        type: "GET",
        datatype:"JSON",
        success:function(respuesta){
            for(i=0;i<respuesta.length;i++){
                console.log("IDGAME = "+respuesta[i].idGame);
                setCookie("IDGAME",respuesta[i].idGame,10);
            }
        }
    });
    ///
}
function registroPregunta()
{
    var nombreEnunciado = $.trim($("#cj_enunciado").val());
    var miIDGAME = parseInt(getCookie("IDGAME"));
    let myData = {
        enunciado:nombreEnunciado,
        crearJuego:
        {
            idGame:miIDGAME
        }

    }
    let dataToSend=JSON.stringify(myData);

    console.log(dataToSend);

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url:"http://150.230.89.106:8080/api/preguntas/save",
        data: dataToSend,
        datatype:"json",
        cache: false,
        timeout: 600000,
        success:function(respuesta){
            //alert("Se creo Pregunta");
            f_returnPreguntas();
            //setCookie("NOMBRE",respuesta.name,10);

        },
        error : function(e) {
            //alert("No FUNCIONA");
        },
        done : function(e) {
            //alert("No FUNCIONA");
        }
    });
}
function f_returnPreguntas()
{
    /////GetGame
    console.log("Entro al GetPreguntas");
    $.ajax({
        url:"http://150.230.89.106:8080/api/preguntas/all",
        type: "GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log("Entro al Success");
            console.log("All "+respuesta);
            for(i=0;i<respuesta.length;i++){
                console.log("IDPREGUNTAS = "+respuesta[i].idPregunta);
                setCookie("IDPREGUNTAS",respuesta[i].idPregunta,10);
            }
            registroRespuestas();
        }
    });
    ///
}
function registroRespuestas()
{
    console.log("Entro a Respuestas");
    var opcion1 = $.trim($("#cj_opcion1").val());
    var opcion2 = $.trim($("#cj_opcion2").val());
    var opcion3 = $.trim($("#cj_opcion3").val());
    var opcion4 = $.trim($("#cj_opcion4").val());
    var respuestaCorrecta = $.trim($("#cj_respuesta").val());

    var miIDPREGUNTAS = parseInt(getCookie("IDPREGUNTAS"));
    let myData = {
        opcionA:opcion1,
        opcionB:opcion2,
        opcionC:opcion3,
        opcionD:opcion4,
        esCorrecta:respuestaCorrecta,
        preguntas:
        {
            idPregunta:miIDPREGUNTAS
        }

    }
    let dataToSend=JSON.stringify(myData);

    console.log(dataToSend);

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url:"http://150.230.89.106:8080/api/respuestas/save",
        data: dataToSend,
        datatype:"json",
        cache: false,
        timeout: 600000,
        success:function(respuesta){
            //alert("Se creo Respuestas");
            f_clear();
            //f_returnGame();
            //setCookie("NOMBRE",respuesta.name,10);

        },
        error : function(e) {
            //alert("No FUNCIONA");
        },
        done : function(e) {
            //alert("No FUNCIONA");
        }
    });
}
function f_clear()
{
    $("#cj_enunciado").val("");
    $("#cj_opcion1").val("");
    $("#cj_opcion2").val("");
    $("#cj_opcion3").val("");
    $("#cj_opcion4").val("");
    $("#cj_repuesta").val("");

}

$(document).on("click", ".btn_enviarJuego", function(){

    if($("#cj_nombreJuego").val() != "" && $("#cj_categoria").val() != "" && $("#cj_nivel").val() != "" && $("#cj_objetivo").val() != "")
    {
        registroJuego();
        $(".paso1").hide();
        $(".paso2").show();
    }
    else
    {
        alert("Tienes que llenar todos los datos");
    }
    

});
$(document).on("click", ".btn_enviarPregunta", function(){

    if($("#cj_enunciado").val() != "" && $("#cj_opcion1").val() != "" && $("#cj_opcion2").val() != "" && $("#cj_opcion3").val() != "" && $("#cj_opcion4").val() != "" && $("#cj_repuesta").val() != "")
    {
        contadorPreguntas = contadorPreguntas + 1;
        $(".numeroPregunta").html("Pregunta "+contadorPreguntas);
        if(contadorPreguntas > 3)
        {
            alert("Por el momento...solo puedes realizar hasta 3 preguntas");
            $(".paso2").hide();
            $(".paso3").show();
            registroPregunta();
        }
        else
        {
            registroPregunta();
        }
    }
    else
    {
        alert("Tienes que llenar todos los datos");
    }


    

});
$(document).on("click", ".btnFinalizar", function(){

    console.log("Contados Preguntas = "+contadorPreguntas);
    if(contadorPreguntas <= 2)
    {
        alert("Debes crear tres preguntas");
    }
    else
    {
        $(".paso2").hide();
        $(".paso3").show();
        registroPregunta();
    }

});
$(".btn_logOut").on("click", ".btnFinalizar", function(){

    
    console.log("Contados Preguntas = "+contadorPreguntas);
    if(contadorPreguntas <= 2)
    {
        alert("Debes crear tres preguntas");
    }
    else
    {
        window.location.href = "perfil.html";
    }

    window.location.href = "index.html";
    setCookie("c_logIn",false.name,10);

});


