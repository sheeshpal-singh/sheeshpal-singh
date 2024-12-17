let btns = document.querySelectorAll(".btn");
let submit=document.getElementById("submit");


btns.forEach(function(button) {
    button.addEventListener("click", function() {
        // Log button id for debugging
        console.log(button.id);

        // Hide all service cards by default
        document.getElementById("uid").style.display = "none";
        document.getElementById("webs").style.display = "none";
        document.getElementById("android").style.display = "none";

        // Show the corresponding service card based on button id
        if (button.id === "ui") {
            document.getElementById("uid").style.display = "block";
        } else if (button.id === "web") {
            document.getElementById("webs").style.display = "block";
        } else if (button.id === "mob") {
            document.getElementById("android").style.display = "block";
        } else if (button.id === "all") {
            // Show all sections when the "All" button is clicked
            document.getElementById("uid").style.display = "block";
            document.getElementById("webs").style.display = "block";
            document.getElementById("android").style.display = "block";
        }
    });
});

submit.addEventListener("click", function() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let msg = document.getElementById("msg");
    
    // Use '==""' or '=== ""' for checking if fields are empty
    if (name.value === "" || msg.value === "") {
        alert("Please fill in the details.");
    } else {
        alert("Thank you for contacting us.");
    }
});
