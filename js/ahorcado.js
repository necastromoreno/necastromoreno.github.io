$(document).ready(function() {
    var palabras = [
        "pruebas",
        "diseño",
        "analisis",
        "instalacion",
        "mantenimiento",
        "planificacion",
        "codificacion"
    ];

    var palabra_seleccionada = "";
    var itn = 0;
    var temp = new Array();

    var reiniciar = function() {
        $("#btn_listo").prop("disabled", true)
        $("#btn_intento").prop("disabled", true)
        $("#letra").prop("disabled", true)
        $("#img").hide()
        $("#img2").hide()
        var r = "";
        var seleccion = Math.floor(Math.random() * palabras.length);
        
        for (var i = 0; i < palabras[seleccion].length; i++) {
            if ((palabras[seleccion].length) - 1 == i) {
                r += '_';
            } else {
                r += '_ ';
            }
        };

        $("#incognita").text(r);
        $("#infoIntento").text(palabras[seleccion].length + 2);

        itn = palabras[seleccion].length + 2;
        temp = r.split(" ");
        palabra_seleccionada = palabras[seleccion];
        console.log(palabra_seleccionada);
        $("#letra").focus();
        $("#btn_listo").prop("disabled", false)
        $("#btn_intento").prop("disabled", false)
        $("#letra").prop("disabled", false)
    }
    reiniciar();

    $("#btn_intento").click(function() {
        itn--;
        $("#infoIntento").text(itn);
        if (itn > 0) {
            var letra = $("#letra").val().toLowerCase();
            for (var i = 0; i < temp.length; i++) {
                if (palabra_seleccionada[i] == letra) {
                    temp[i] = letra;
                } else {
                    if (temp[i] != "_") {
                        // Sin Acciones
                    } else {
                        temp[i] = "_ ";
                    }
                }
            };
            $("#incognita").text("");
            $("#incognita").html(temp);
            $("#letra").val("");
            $("#letra").focus();
            if (temp.join('') == palabra_seleccionada) {
                $("#img2").show()
                $("#btn_listo").prop("disabled", true)
                $("#btn_intento").prop("disabled", true)
                $("#letra").prop("disabled", true)
            }
        } else {
            $("#img").show()
            $("#btn_listo").prop("disabled", true)
            $("#btn_intento").prop("disabled", true)
            $("#letra").prop("disabled", true)
        }
    });
    $("#btn_listo").click(function() {
        var opcion = prompt("Ingresa tu palabra: ");
        if (opcion != null) {
            if (opcion == palabra_seleccionada) {
                $("#incognita").html(palabra_seleccionada);
                $("#img2").show()
            } else {
                $("#img").show()
            }
            $("#btn_listo").prop("disabled", true)
            $("#btn_intento").prop("disabled", true)
            $("#letra").prop("disabled", true)
        }
    });
    $("#btn_reiniciar").click(reiniciar);
});