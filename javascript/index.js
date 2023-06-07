const nowdate= document.getElementById("setdate")
const date = new Date()
nowdate.addEventListener("click",()=>{
    document.getElementById("showdate").innerHTML = ` ${date.getDate()} : ${date.getMonth()}: ${date.getFullYear()} ${date.getMinutes()}  `
})
