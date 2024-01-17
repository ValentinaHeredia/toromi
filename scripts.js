// let nombre=prompt("Ingrese su nombre")
// alert("Hola " + nombre)

// let n1= 2023
// let edad= parseInt(prompt("Ingrese edad")); /*ParseInt y Parsefloat convierten los prompt en un Int o Float*/
// let nacimiento= n1-edad
// console.log("Su año de nacimiento es: " + nacimiento)

// let frase1= prompt("Ingrese la primera frase")
// let frase2= prompt("Ingrese la segunda frase")
// alert(frase1 +" " + frase2)

let num1;
let num2;
let opcion=prompt("Ingrese la opcion deseada= +, -, *, /, 0")

while (opcion!= "0"){
    do{
        num1=parseInt(prompt("Ingrese un numero"))
    }while (isNaN(num1));
    do{
        num2=parseInt(prompt("Ingrese un numero"))
    }while (isNaN(num2));

    switch (opcion){
        case "+":
            alert("El resultado de la suma es: "+ (num1+num2));
            break;
        case "-":
            alert("El resultado de la resta es: "+ (num1-num2));
            break;
        case "*":
            alert("El resultado de la multiplicación es: "+ (num1*num2))
            break;
        case "/":
            if(num1==0 && num2==0){
                alert("El resultado es indeterminado")
            } else{
                alert("El resultado de la division es :" + (num1/num2))
            }
            break;
        case "0":
            alert("ADIOS");
            break;
        default:
            alert("Opcion incorrecta");
    }
    opcion=prompt("Ingrese la opcion deseada= +, -, *, /, 0")
}