let pass="ABCDEFGHIjklmnopqrstuvwxyxz0123456789~!@#$%^&*()_+"
let length = 8
function password(){
    setInterval(()=>{
        let newpass=""
    for(var i= 0 ;i<length ;i++){
       var   newpass1 = Math.floor(Math.random()*pass.length
    )
    newpass+=pass[newpass1]
}
document.getElementById("pass").innerText = newpass
},5000)

}
password()
   