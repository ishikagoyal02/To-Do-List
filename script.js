// const listitem=document.getElementById("type");

// const btnplus=document.getElementById("plus");
// const result=document.getElementsByClassName("result type")[0];


// btnplus.addEventListener('click',function(){

//     result.innerText+=listitem.value;
// });

document.addEventListener('DOMContentLoaded', function () {
    const listitem = document.getElementById("type");
    const btnplus = document.getElementById("plus");
    const result = document.querySelector(".result.type");
    const dlt=document.querySelector(".plus.dlt");

    const newbutton=document.createElement('button');
    newbutton.textContent='-';

    btnplus.addEventListener('click', function () {
        result.innerText +=listitem.value + "\n";

        
        result.appendChild(newbutton)
    });

    dlt.addEventListener('click',function(){
        result.innerText=""
    })
});
