$( document ).ready(function() {
    console.log("ID usuario "+getCookie("ID"));
    console.log("NOMBRE usuario "+getCookie("NOMBRE"));
    console.log("USUARIO usuario "+getCookie("USUARIO"));
    console.log("PASSWORD usuario "+getCookie("PASSWORD"));
    
    $(".users-view-name").html(getCookie("NOMBRE"));
    $(".users-view-id").html(getCookie("ID"));
});