const pass = document.getElementById("password-content");
const length = document.getElementById("length-amount");
const slider = document.getElementById("password-range");
const copy = document.getElementById("copy-password");

const lowercaseCheck = document.getElementById("lowercase-check");
const uppercaseCheck = document.getElementById("uppercase-check");
const numbersCheck = document.getElementById("numbers-check");
const symbolsCheck = document.getElementById("symbols-check");
const duplicateCheck = document.getElementById("duplicate-check");
const spaceCheck = document.getElementById("spaces-check");

const uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercases = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()?/<>,.;:'[}]{_-=";
const space = " ";

const generateButton = document.getElementById("generate-password");

generateButton.addEventListener('click', generatePassword);
copyButton.addEventListener('click', copyPassword);

function generatePassword(){
    let passwordLength = slider.value;
    let password = "";
    let chars = "";

    if(uppercaseCheck.checked == true){
        chars+=uppercases;
    }

    if(lowercaseCheck.checked == true){
        chars+=lowercases;
    }

    if(numbersCheck.checked == true){
        chars+=numbers;
    }

    if(symbolsCheck.checked == true){
        chars+=symbols;
    }

    if(spaceCheck.checked == true){
        chars+=space;
        passwordLength--;
    }

    for(let counter = 0; counter < passwordLength; counter++){
        let generate = Math.floor(Math.random() * chars.length);
        password += chars.substring(generate, generate + 1);
    }

    if (spaceCheck.checked && !password.includes(space)) {
        let spaceGetter = Math.floor(Math.random() * password.length);
        password = password.substring(0, spaceGetter) + space + password.substring(spaceGetter);
    }

    pass.textContent = password;
}

function copyPassword(){

}

slider.addEventListener('input', function() {
    length.textContent = slider.value;
})