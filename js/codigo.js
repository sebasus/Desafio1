let compra = parseInt( prompt("Buen dia, por favor ingrese el monto total de su compra."))

while(compra < 0){
   compra = parseInt(prompt("Monto ingresado invalido, por favor vuelva a intentarlo"))
};

let cuotas = parseInt(prompt("Ahora ingrese el número de cuotas en las que desee hacer la compra:\n  3: 5% de interes.\n 6: 10% de interes. \n 12: 15%de interes. "))
let confirmacion = 0;

if (cuotas == 3) {
   function total (compra, cuotas) {
      cuotaPura3 = compra / cuotas;
      porc = cuotaPura3 / 100 * 5;
      totalCuota = cuotaPura3 + porc;
      confirmacion = parseInt (prompt("El monto de su cuota seria de $" + totalCuota + " para confirmar ingrese 1, para volver a calcular con otro monto ingrese 2." ))
      } 
}else if(cuotas == 6){
   function Total (compra, cuotas) {
      cuotaPura6 = compra / cuotas 
      porc = cuotaPura6 / 100 *  10
      totalCuota = cuotaPura6 + porc
      confirmacion = parseInt (prompt("El monto de su cuota seria de $" + totalCuota3 + " para confirmar ingrese 1, para volver a calcular con otro monto ingrese 2." ))
      if (confirmacion ==1) {
         document.write("Usted debera abonar " + cuotas + " de $" + totalCuota)
      } else {      
      }   
      } 
}else if(cuotas == 12){
   function Total (compra, cuotas) {
      cuotaPura12 = compra / cuotas 
      porc = cuotaPura12 / 100 *  15
      totalCuota = cuotaPura12 + porc
      confirmacion = parseInt (prompt("El monto de su cuota seria de $" + totalCuota3 + " para confirmar ingrese 1, para volver a calcular con otro monto ingrese 2." ))
      if (confirmacion ==1) {
         document.write("Usted debera abonar " + cuotas + " de $" + totalCuota)
      } else {      
      }   
      } 

}
else{
   cuotas = parseInt(prompt("Cantidad de cuotas invalida, por favor vuelva a intentarlo"))
}

if (confirmacion ==1) {
   document.write("Usted debera abonar " + cuotas + " de $" + totalCuota)
} 