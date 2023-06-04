function calcularTotal (){
    const pricio = 700000;
    let span1 = document.querySelector("#total-compra");
    let span2 = document.querySelector("#cantidad");
    let computadora = document.querySelector("#tipo");
    let cantidadcomputadora = computadora.value;
    let total = cantidadcomputadora * pricio;
        span2.innerHTML =cantidadcomputadora;
        span1.innerHTML = total;
    }
    

        
    function color(){
        let selection = document.querySelector("#colores");
        let circulo =document.getElementById("circulo1");
        let colorSelection = selection.value;
        circulo.style.backgroundColor= colorSelection;
    }