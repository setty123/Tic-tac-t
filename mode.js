// document.addEventListener("DOMContentLoaded", function() {
//     const singleMode = document.querySelectorAll(".single");
//     // const multiMode = document.querySelector(".multi");
//     // const blitzMode = document.querySelector(".blitz");
//     const proceedButton = document.querySelector(".proceed");
//     const single = document.querySelector(".single")


//     function showProceedButton() {
//         proceedButton.style.display = "block";
//     }

//     singleMode.addEventListener("click", showProceedButton);
//     // multiMode.addEventListener("click", showProceedButton);
//     // blitzMode.addEventListener("click", showProceedButton);
 

//     proceedButton.addEventListener("click", function() {
//         window.location.href = "name.html";
//     });

//     singleMode(singleMode => {
//         singleMode.addEventListener('click', () =>{
//             document.querySelector('.single')?.classList.remove('.single');
//             singleMode.classList.add('.single')
//         })
//     })
// });


document.addEventListener("DOMContentLoaded", function() {
    const singleMode = document.querySelectorAll(".single");
    const proceedButton = document.querySelector(".proceed");

    function showProceedButton() {
        proceedButton.style.display = "block";
    }
    
    singleMode.forEach(singleMode => {
        singleMode.addEventListener("click", showProceedButton);
    });

    proceedButton.addEventListener("click", function() {
        window.location.href = "name.html";
    });

    // Loop through each element with the class 'single'
    singleMode.forEach(singleMode => {
        singleMode.addEventListener('click', function() {
            document.querySelector('.single.active')?.classList.remove('active');
            singleMode.classList.add('active');
        });
    });
});
