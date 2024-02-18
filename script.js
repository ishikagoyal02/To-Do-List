document.addEventListener('DOMContentLoaded', function () {
    const box=document.querySelector(".box");
    const listitem = document.getElementById("type");
    const btnplus = document.getElementById("plus");
    const dlt = document.querySelector(".plus.dlt");
    const m=document.querySelector(".m");

    const result= document.createElement("div");
    result.className="result";

    const dltbtn=document.createElement("button");
    dltbtn.textContent="Delete All"
    dltbtn.className="plus dlt";

    var flag=0;

    btnplus.addEventListener('click', function (event) {
        console.log("button clicked")
        addTask(event);
    });

    listitem.addEventListener('keypress', function (event) {                    //1st
        console.log("pressed")
        if (event.key === "Enter") {
            addTask(event);
        }
    });


    function addTask(event){                                                    //2nd
        
        const task=listitem.value;

        if (task.trim() !== '' || (event.key==='Enter')) {
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
                box.appendChild(dltbtn);
                m.appendChild(result);
                flag=1;
            }
            
            listitem.value = "";

            // Scroll to the bottom when a new task is added
            result.scrollTop = result.scrollHeight;
        }
    };

    dltbtn.addEventListener('click', function () {
        result.innerHTML = "";
        flag=0;
        box.removeChild(dltbtn);
    });

    box.addEventListener('click', function (event) {
        if (event.target.classList.contains('minusbtn')) {
            const taskDiv = event.target.parentNode;
            result.removeChild(taskDiv);
    
            // If result is empty, remove the Delete All button and result from the box
            if (result.innerHTML === "") {
                box.removeChild(dltbtn);
                m.removeChild(result);
                flag = 0;  // Reset the flag
            }
        }
    });
    
})
