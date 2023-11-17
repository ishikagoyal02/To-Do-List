// document.addEventListener('DOMContentLoaded', function () {
//     const listitem = document.getElementById("type");
//     const btnplus = document.getElementById("plus");
//     const result = document.querySelector(".result.type");
//     const dlt = document.querySelector(".plus.dlt");

    

//     btnplus.addEventListener('click', function () {
//         result.innerText += listitem.value;

//         const newbutton = document.createElement('button');
//         newbutton.textContent = '-';
//         newbutton.className = "minusbtn";
//         result.appendChild(newbutton); // Append new button to the result container
        
//         //result.innerText += "\n";
//     });

//     dlt.addEventListener('click', function () {
//         result.innerText = "";
//     });

//     newbutton.addEventListener('click', function () {
//         result.innerText = "";
//     });
// });
document.addEventListener('DOMContentLoaded', function () {
    const listitem = document.getElementById("type");
    const btnplus = document.getElementById("plus");
    const result = document.querySelector(".result.type");
    const dlt = document.querySelector(".plus.dlt");

    btnplus.addEventListener('click', function () {
        const task = listitem.value;
        
        // Create a new div to hold the task and its corresponding minus button
        const taskDiv = document.createElement('div');

        // Create a span for the task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = task;

        // Create a minus button for the task
        const newbutton = document.createElement('button');
        newbutton.textContent = '-';
        newbutton.className = "minusbtn";

        // Append the task text and the minus button to the task div
        taskDiv.appendChild(taskSpan);
        taskDiv.appendChild(newbutton);

        // Append the task div to the result container
        result.appendChild(taskDiv);

        // Clear the input field after adding the task
        listitem.value = "";
    });

    // Event listener to clear all tasks
    dlt.addEventListener('click', function () {
        result.innerHTML = "";
    });

    // Event delegation for dynamically created minus buttons
    result.addEventListener('click', function (event) {
        if (event.target.classList.contains('minusbtn')) {
            // Remove the corresponding task div when a minus button is clicked
            const taskDiv = event.target.parentNode;
            result.removeChild(taskDiv);
        }
    });
});
