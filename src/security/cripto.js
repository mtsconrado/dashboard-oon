var CryptoJS = require("crypto-js");
import Cookies from 'js-cookie'

// Encripta informações sensiveis e armazena em cookies

// PARA DESEMCRIPTAR A INFORMACAO NO COOKIE 
//var bytes  = CryptoJS.AES.decrypt(ciphertext, 'OnnSeguros');
//var originalText = bytes.toString(CryptoJS.enc.Utf8);

function Cripta(e){
    var typeUser = e.data.role
    var ciphertext = CryptoJS.AES.encrypt(typeUser, 'OnnSeguros').toString();
    Cookies.set('userType', ciphertext) // salva userType
    
    let permissions = []
    let aux = []
    permissions = e.data.permissions

    permissions.map(item =>{
        aux.push(CryptoJS.AES.encrypt(item, 'OnnSeguros').toString())
    })

    Cookies.set('permissions', aux) // salva permissoes 

}

export default  Cripta;
