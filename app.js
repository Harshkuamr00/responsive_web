document.getElementById("mysubmit").onclick=function(){
    document.getElementById("heading").style.color ="green"
    document.getElementById("heading").textContent= `Your Response Has Been Submitted`
    document.getElementById("h2").style.color="red"; 
    document.getElementById("h2").textContent= `Your Can See Color was Changed if you are not Blind`
    document.getElementById("responsive").style.backgroundColor="lightgreen"
    document.body.style.backgroundColor="lightblue"

    document.body.classList.add("celebrate")
    setTimeout(() => {
        document.body.classList.remove("celebrate")
    },2000)
}   