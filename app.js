console.log("probando javascript en el Dom");
const resultado = document.getElementById("valor-resultado");
const muestra = document.addEventListener("click", (e)=> {
    let value = Number(e.target.innerHTML);
    if (e.target.classList.contains("dato")){
    console.log(`el valor seleccionado es ${value}`);
    resultado.innerHTML = value;
    }
});
// GRUPO DE DESEMPEÑO - SELECCION GRUPO

const selectorGrupo = document.getElementById("seleccion-grupo");
const operadorGrupo = document.addEventListener("click",(e)=>{
    let valorGrupo = Number(e.target.innerHTML);
    if (e.target.classList.contains("valor-grupo")){
    console.log(`el valor seleccionado es ${valorGrupo}`);
    selectorGrupo.innerHTML = valorGrupo;
    }
});

// TOMANDO VALORES DEL INPUT

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

// OPERANDO CON EL PRECIO SELECCIONADO, GRUPO SELECCIONADO Y LOS INPUTS

// la operacion es resultado + num1*30 + num2*30 + selectorGrupo*num2

const totalEnvio = document.getElementById("total");
const suma = document.getElementById("sumar");
suma.addEventListener("click",(e)=>{
e.preventDefault();
totalEnvio.innerHTML =`$ ${Number(resultado.textContent)+(Number(num1.value)*30)+(Number(num2.value)*30)+(Number(selectorGrupo.textContent)*Number(num2.value))}`;
});
