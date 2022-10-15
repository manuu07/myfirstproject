let printDate=function(){
    return Date();

}
//console.log(printDate())

let printMonth=function(){
    let date=new Date()
    return date.getMonth()+1
}
//console.log(printMonth())

let getBatchInfo=function(){
    let name="Lithium"
    let week="W3D5"
    return (name +", "+ week+", " +"the topic for today is Nodejs Module System")
}
//console.log(getBatchInfo())

module.exports.printDate=printDate
module.exports.printMonth=printMonth
module.exports.getBatchInfo=getBatchInfo

