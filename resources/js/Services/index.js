$( document ).ready(function() {
    init();
    setCookie("c_logIn",false,10);
});
/* MIS FUNCIONES */
function init()
{
    $(".alertaRegistro").hide();
    $(".confirmacionRegistro").hide();
    $(".alertaLogin").hide();


}

/////Function registrar Usuario
function registroUsuario()
{
    var name = $.trim($("#name").val()); //// Recogemos el nombre
    var usuario = $.trim($("#usr").val()); //// Recogemos el usuario
    var password = $.trim($("#pwd").val()); //// Recogemos el password
    var password_r = $.trim($("#pwd_r").val()); //// Recogemos el password repetido
    var miContador = $('.miFormRegistro input').length;
    $( ".miFormRegistro input" ).each(function( index )
    {
        if(index >= 0 && index < miContador)
        {
            if($(this).val() == "")
            {

                $(this).focus();
                $(".alertaRegistro").show();
                $(".alertaRegistro").html("El campo <span class='resaltarForm'>"+$(this).attr("name")+"</span> no puede estar vacío");
                return false;
            }

        }
    });

    if( password != "" && password_r != "" && usuario != "" && name != "")
    {
        if(password != password_r)
        {
            $(".alertaRegistro").show();
            $(".alertaRegistro").html("<span class='resaltarForm'>Los password deben coincidir</span>");
        }
        else
        {
            $.ajax({
                url:'http://150.230.89.106:8080/api/user/new',
                data:JSON.stringify({
                    "name":name,
                    "nameUser":usuario,
                    "password":password,
                    "repeatpassword":password_r,
                }),
                type:'POST',
                contentType:'application/json',
                dataType:'json',
                error:function(result){
                    alert("Usuario NO registrado...!");
                    console.log(result);
                },
                success: function(respuesta){
                    console.log(respuesta);
                    if(respuesta.id == null)
                    {
                        $(".alertaRegistro").html("<span class='resaltarForm'>NO SE CREO LA CUENTA</span>");
                    }
                    else
                    {
                        $(".miFormRegistro").hide();
                        $(".confirmacionRegistro").show();
                    }

                }
            })
        }
    }


}
///// funcion Login
function login()
{
    var usuario_login = $.trim($("#usr_login").val()); //// Recogemos el usuario
    var password_login = $.trim($("#pwd_login").val()); //// Recogemos el password

    var miContadorLogin = $('.miFormLogin input').length;

    $( ".miFormLogin input" ).each(function( index )
    {
        if(index >= 0 && index < miContadorLogin)
        {
            if($(this).val() == "")
            {

                $(this).focus();
                $(".alertaLogin").show();
                $(".alertaLogin").html("El campo <span class='resaltarForm'>"+$(this).attr("name")+"</span> no puede estar vacío");
                return false;
            }

        }
    });
    console.log("usuario "+usuario_login);
    console.log("password "+password_login);
    if( usuario_login != "" && password_login != "")
    {
        $.ajax({
            url:"http://150.230.89.106:8080/api/user/"+usuario_login+"/"+password_login,
            type: "GET",
            datatype:"JSON",
            success:function(respuesta){
                console.log(respuesta);
                console.log("nombre Usuario "+respuesta.nameUser);
                if(respuesta.nameUser === "NO DEFINIDO")
                {
                    $("#usr_login").focus();
                    $(".alertaLogin").show();
                    $(".alertaLogin").html("<span class='resaltarForm'>Usuario o contraseña INCORRECTOS</span>");
                }
                else
                {
                    window.location.href = "perfil.html";
                    setCookie("ID",respuesta.id,10);
                    setCookie("NOMBRE",respuesta.name,10);
                    setCookie("USUARIO",respuesta.nameUser,10);
                    setCookie("PASSWORD",respuesta.password,10);
                    ////Login
                    setCookie("c_logIn",true,10);
                }
            }
        });
    }
}
////EVENTOS
///btn registrarse
$(document).on("click", ".btn_registrarse", function(){
    registroUsuario();

});
///btn login
$(document).on("click", ".btn_login", function(){
    login();

});