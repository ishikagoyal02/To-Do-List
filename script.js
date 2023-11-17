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

    btnplus.addEventListener('click', function () {
        result.innerText +=listitem.value + "\n";
    });

    dlt.addEventListener('click',function(){
        result.innerText=""
    })
});
