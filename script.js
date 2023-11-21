document.addEventListener('DOMContentLoaded', function () {
    const listitem = document.getElementById("type");
    const btnplus = document.getElementById("plus");
    //const result = document.querySelector(".result.type");
    const dlt = document.querySelector(".plus.dlt");
    const m=document.querySelector(".m");
    const result= document.createElement("div");
    result.className="result";

    var flag=0;

    btnplus.addEventListener('click', function () {
        const task = listitem.value;


        if (task.trim() !== '') {
            const taskDiv = document.createElement('div');
            const newbutton = document.createElement('button');
            newbutton.textContent = '-';
            newbutton.className = "minusbtn";
            taskDiv.className="result type";

            

            taskDiv.textContent = task;
            taskDiv.appendChild(newbutton);

            result.appendChild(taskDiv);

            if(flag==0)
            {
                m.appendChild(result);
                flag=1;
            }
            
            listitem.value = "";

            // Scroll to the bottom when a new task is added
            result.scrollTop = result.scrollHeight;
        }
    });

    dlt.addEventListener('click', function () {
        result.innerHTML = "";
    });

    result.addEventListener('click', function (event) {
        if (event.target.classList.contains('minusbtn')) {
            const taskDiv = event.target.parentNode;
            result.removeChild(taskDiv);
        }
    });
});
