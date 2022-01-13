document.getElementById("btn1").addEventListener("click", encrypt);
document.getElementById("btn2").addEventListener("click", decrypt);

function encrypt() {
            
    let secret = (document.getElementById('secret').value).trim() 
    let text = (document.getElementById('text').value).trim() 
 
    if(secret.length > 0 || text.length > 0 ) {
        let encrypted = CryptoJS.AES.encrypt(text, secret) 
        if (encrypted) {
        document.getElementById('text').value = encrypted
    } else {
        alert('Error occured!')
    }
    }
};

function decrypt() {
    let secret = (document.getElementById('secret').value).trim() 
    let text = (document.getElementById('text').value).trim() 

    let decrypted = CryptoJS.AES.decrypt(text, secret)
    if (decrypted) {
        const originalText = decrypted.toString(CryptoJS.enc.Utf8);
      document.getElementById('text').value = originalText
    } else {
        alert('Error occured!')
    }
}