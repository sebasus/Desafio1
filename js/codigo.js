let valor = parseInt( prompt("Buen dia, por favor ingrese el monto total de su compra."))

while(valor < 0){
   valor = parseInt(prompt("Monto ingresado invalido, por favor vuelva a intentarlo"))
}

let cuotas = parseInt(prompt("Ahora ingrese el número de cuotas en las que desee hacer la compra:\n  3: 5% de interes.\n 6: 10% de interes. \n 12: 15%de interes. "))


if (cuotas == 3) {
        function total(valor, cuotas) {
            let resultado = valor / cuotas
            let porc = resultado / 100 * 5
            cuotaTotal = resultado + porc
            document.write("Usted deberá abonar " + cuotas + " cuotas de $" + cuotaTotal)
        }
        total (valor , cuotas)
}else if (cuotas == 6){
        function total(valor, cuotas) {
            let resultado = valor / cuotas
            let porc = resultado / 100 * 10
            cuotaTotal = resultado + porc
            document.write("Usted deberá abonar " + cuotas + " cuotas de $" + cuotaTotal)
        }
        total (valor , cuotas)
}else if (cuotas == 12){
        function total(valor, cuotas) {
            let resultado = valor / cuotas
            let porc = resultado / 100 * 15
            cuotaTotal = resultado + porc
            document.write("Usted deberá abonar " + cuotas + " cuotas de $" + cuotaTotal)
        }
        total (valor , cuotas)
}else{
    alert("Selecciono una cantidad de cuotas erronea, por favor recargue la pagina e inicie nuevamanete el proceso.")
}