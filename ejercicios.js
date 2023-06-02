const btn_calcularmayor=document.getElementById("btn_calcularmayor");
btn_calcularmayor.addEventListener("click", function(){
    calcular_mayor();
});

const btn_calculardivision=document.getElementById("btn_calculardivision");
btn_calculardivision.addEventListener("click", function(){
    calcular_division();
});


function calcular_mayor(){
    const num1=Number(document.getElementById("num1").value);
    const num2=Number(document.getElementById("num2").value);

if(num1=="" || num2=="" ){
alert("Datos incompletos, por favor complete los dos números pedidos");
}

else{
    if (num1>num2){
        alert(num1+" es mayor que "+num2)
    }
    
    else if (num1==num2){
        alert("Son iguales")
    
    }
    
    else{
        alert(num2+" es mayor que "+num1) 
    }
}

 }

 function calcular_division(){
    const num3=Number(document.getElementById("num3").value);
    if(num3==""){
        alert("Por favor ingrese un número");
        }

    else{

        if(num3%2==0){
           alert(num3+ " sí es divisible entre 2");}
                
        else{
            alert(num3+ " no es divisible entre 2");}

    }
 }



// Codigo alterno sólo con alerts 

// let option = prompt("Introduce el ejercicio que deseas resolver:");


// switch(option){

// case '1':
//     var num1 = prompt("Introduce tu primer número:");
//     var num2 = prompt("Introduce tu segundo número:");

//     if(Number(num1) == num1 && Number(num2)==num2){ 

//         if(num1.length==0 || num2.length==0 ){
//             alert("Datos incompletos, por favor complete los dos números pedidos");
//         }

//         else{
//             if(Number(num1)>Number(num2)){
//                 alert(num1 + " es mayor que " + num2);
//             }

//             else{
//                 alert(num2 + " es mayor que " + num1);            
//             }
//         }

//     }

//     else{
//         alert("Introduce un número valido");
//     }
// break;

// case '2':

// var num3 = prompt("Introduce un número:");

// if(Number(num3) == num3){ 
//     if(num3.length==0){
//         alert("Por favor ingrese un número");
//     }

//     else{
//         if(num3%2==0){
//             alert(num3+ " sí es divisible entre 2");
//         }
    
//         else{
//             alert(num3+ " no es divisible entre 2");
//         }
//     }
// }

// else{
//    alert("Introduce un número valido");  
// }

//     break;

// default:
//     alert("Por favor, selecciona un valor del 1 al 2 ");
// }





