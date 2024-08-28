function generatePassword() {
    let passwordLength = document.getElementById("passwordLength").value;
    let useLowercase = document.getElementById("lowercaseCb").checked;
    let useUppercase = document.getElementById("uppercaseCb").checked;
    let useDigits = document.getElementById("digitsCb").checked;
    let useSpecials = document.getElementById("specialsCb").checked;

    let dictionary = "";
    if (useLowercase) dictionary += "abcdefghijklmnopqrstuvwxyz";
    if (useUppercase) dictionary += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (useDigits) dictionary += "0123456789";
    if (useSpecials) dictionary += "!@#$%^&*()_+-={}:<>";

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        password += dictionary.charAt(Math.floor(Math.random() * dictionary.length));
    }

    document.getElementById("generatedPassword").innerHTML = password;
}
