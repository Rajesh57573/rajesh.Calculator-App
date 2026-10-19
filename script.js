const buttons = document.querySelectorAll(".btn");
const input = document.querySelector(".input-row input");
const themeButton = document.querySelector("nav span");
const body = document.querySelector("body");

let string = "";
let arr = Array.from(buttons);

let currentMode = "light";

arr.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let buttonInput = e.target.innerHTML;

        if(buttonInput == "=") {
            string = eval(string);
            input.value = string;
        } else if (buttonInput == "AC" ) {
            string = "";
            input.value = string;
        } else if (buttonInput == "DEL" ) {
            string = string.substring(0, string.length-1);
            input.value = string;
        } else if (buttonInput == "%") {
            string = String(eval(string) / 100);
            input.value = string;
        }
        else {
            console.log(e.target);
            string += buttonInput;
            input.value = string;
        }
    })
})

// Switch light and dark mode
themeButton.addEventListener("click", () => {
    if(currentMode === "light") {
        body.classList.add("dark");
        body.classList.remove("light");
        themeButton.innerHTML = "<span class='material-symbols-outlined'>dark_mode</span>";
        currentMode = "dark";
    }
    else {
        body.classList.add("light");
        body.classList.remove("dark");
        themeButton.innerHTML = "<span class='material-symbols-outlined'>light_mode</span>";
        currentMode = "light";
    }
})