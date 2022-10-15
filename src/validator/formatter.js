let trim=function(){
    return "    functionUp    ".trim()
}
//console.log(trim())

let changeToLowerCase=function(){
    return "MANU SRIVASTAVA".toLowerCase()
}
//console.log(changeToLowerCase())


let changeToUpperCase=function(){
    return "manu srivastava".toUpperCase()
}
//console.log(changeToUpperCase())

module.exports.trimString=trim
module.exports.toLowerCase=changeToLowerCase
module.exports.toUpperCase=changeToUpperCase