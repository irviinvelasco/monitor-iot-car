
let respuesta = document.getElementById("respuesta");


function callApiRequest() {
    axios
        .get(
            "https://3.131.13.213/iot-car-control/back-end/apis/getRegistro.php")
        .then(function (response) {
            // manejar respuesta exitosa
            console.log(response);

            let respuestaServidor = 
            response.data == "f" ? "ADELANTE" : 
            response.data == "b" ? "ATRAS" : 
            response.data == "l" ? "IZQUIERDA" : 
            response.data == "r" ? "DERECHA" : 
            response.data == "s" ? "DETENER" : 
            response.data;
            console.log(respuestaServidor);

            respuesta.innerHTML = "Respuesta: <strong>" + respuestaServidor + "</strong>";
        })
        .catch(function (error) {
            // manejar error
            console.log(error);
        })
        .finally(function () {
            // siempre sera executado
        });
}
setInterval(callApiRequest, 2000);


