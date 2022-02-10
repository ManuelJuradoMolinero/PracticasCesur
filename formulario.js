

function compararPass() {
  let tel = document.getElementById("telefono").value;
  if( !(/^\d{9}$/.test(tel)) ) {
    document.getElementById("error").style.display="block";
    document.getElementById("error").innerText = "Introduce un número de telefono válido.";
    document.getElementById("telefono").value="";
    return false;
  }
  
  if(getAge(document.getElementById("edad").value) < 18){
        alert("Debes ser mayor de edad, para tanto sufrimiento");
        document.getElementById("error").style.display="block";
        document.getElementById("error").innerText = "La edad es incorrecta.";
        document.getElementById("edad").value="";
        return false;
    }
    var p1 = document.getElementById("pass").value;
    var p2 = document.getElementById("pass2").value;
    if (p1 != p2) {
        alert("Las contraseñas no coinciden");
        document.getElementById("error").style.display="block";
        document.getElementById("pass").value="";
        document.getElementById("pass2").value="";
        document.getElementById("error").innerText = "Hay un error con la contraseña.";
        return false;
      } else {
        return true; 
      }
    }
    function Validar() {
      var c1 = document.getElementById('ch1').checked;
      var c2 = document.getElementById('ch2').checked;
      var c3 = document.getElementById('ch3').checked;
      var gustos = '';
      if (!(c1==true||c2==true|| c3==true)) {
        document.getElementById("error").style.display="block";
        document.getElementById("error").innerText = "Debe de seleccionar un sexo";
      }else{
        alert("Estás a un paso de pisar el grancioso estadio");
      }
    }

    function getAge(dateString) {
      var hoy = new Date();
      var cumpleaños = new Date(dateString);
      var edad = hoy.getFullYear() - cumpleaños.getFullYear();
      var mes = hoy.getMonth() - cumpleaños.getMonth();
      if (mes < 0 || (mes === 0 && hoy.getDate() < cumpleaños.getDate())) {
          edad--;
      }
      return edad;
    }


  
