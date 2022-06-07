var CryptoJS = require("crypto-js");
import Cookies from 'js-cookie'

function UserTypeDecryption(){

    var userType = Cookies.get('userType')
    var msg  = CryptoJS.AES.decrypt(userType, 'OnnSeguros');
    var msgOri = msg.toString(CryptoJS.enc.Utf8);

    return msgOri
}

  function userPermissionsDescription(){
    var msg = Cookies.get('permissions')
    var infos = []
    var array = msg.split(',')

    var item 
    for (item of array){
        
        var msm = CryptoJS.AES.decrypt(item, 'OnnSeguros')
        infos.push(msm.toString(CryptoJS.enc.Utf8));

    } 
    
    return infos    

}
 

export default  {UserTypeDecryption, userPermissionsDescription }