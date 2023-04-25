const  timeinsert=document.getElementById("timeinsert")
const timerun=document.getElementById("timerun")
const animar=document.getElementsByClassName('reloj')
function timeaction(tiempo){
    if (tiempo==0){
    timerun.textContent='finish'
     return 
    } else{
    timerun.textContent=tiempo
    setTimeout (timeaction,1000,tiempo-1)
    }
}