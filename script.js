function process(action) {
    if (action === 'encrypt') {
        encrypt();
    } else if (action === 'decrypt') {
        decrypt();
    }
}

function encrypt() {
    var message = document.getElementById("textInput").value;
    var key = document.getElementById("keyInput").value;

    // Encrypt with AES
    var encryptedAES = CryptoJS.AES.encrypt(message, key).toString();

   
    localStorage.setItem('inputText', message);
    localStorage.setItem('encryptedAES', encryptedAES);

    // Redirect to output page
    window.location.href = "output.html";
}

function decrypt() {
    var encryptedAES = document.getElementById("textInput").value;
    var key = document.getElementById("keyInput").value;

    // Decrypt with AES
    try {
        var decryptedBytes = CryptoJS.AES.decrypt(encryptedAES, key);
        var decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);

        // Display decrypted text
        console.log("Decrypted text:", decryptedText);
    } catch (error) {
        console.error("Decryption failed:", error.message);
    }
}

