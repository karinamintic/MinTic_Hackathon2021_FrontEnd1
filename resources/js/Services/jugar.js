$( document ).ready(function() {
    console.log("Estoy en JUGAR");
    $('.modal').modal();
    //$('#modalJugar').modal('open');
    init();
});

function init()
{
    traerInformacion();
    $('.contenedorJuego').append('<iframe style="width: 100%;" class"responsive-iframe" src= "game_html5.html" frameborder="0" scrolling="no"></iframe>');

}
function traerInformacion(){
    urlString = "http://150.230.89.106:8080/api/crearJuego/all";
    $.ajax({
        method: "GET",
        url: urlString
    })
    .done(
        function(respuesta)
        {
            //alert("Datos"+respuesta);
            recuperarJson = respuesta;
            $('#tablaJugar').dataTable( {
                responsive: true,
                data : respuesta,
                columns: [
                    {"data": "titulo"},
                    {"data": "categoria"},
                    {"data": "nivel"},
                    {"defaultContent": "<button class='btn btn-danger btn-sm btnJugar'><i class='material-icons'>videogame_asset</i></button></div></div>"}
                ],
            });
            $('#tablaJugar').dataTable().ajax.reload();
        }
    )
    .fail(
        function()
        {
            //alert("Error servidor");
        }
    )
    .always(
        function()
        {
            //alert("siempre ejecutandose")
        }
    )
    ;
}
/////Función para capturar el indice del dataTable
$('#tablaJugar tbody').on( 'click', 'tr', function ()
{
        var table = $('#tablaJugar').DataTable();
        miIndice = table.row( this ).index();
        //alert( 'Row index: '+table.row( this ).index() );
        //alert(miIndice)
        miIndice = recuperarJson[miIndice].idGame;

        setCookie("MI_ID_JUGAR",miIndice,10);

});
$(document).on("click", ".btnJugar", function(){
    $('.contenedorJuego').empty();
    $('.contenedorJuego').append('<iframe class"responsive-iframe" width="960px" height = "610px" src= "game_html5.html" frameborder="0" scrolling="no"></iframe>');
    $('#modalJugar').modal('open');
    console.log("MI_ID_JUGAR = "+getCookie("MI_ID_JUGAR"));
});