// btnLi=document.querySelectorAll(".btn")
// btnArr=Array.from(btnLi)
// console.log(btnArr)
function togglebtn(a){
    if (a==1){
        console.log("btn 1")
        document.getElementById("ans1").classList.toggle('hidden')
    }
    if (a==2){
        document.getElementById("ans2").classList.toggle('hidden')

    }
    if (a==3){
        document.getElementById("ans3").classList.toggle('hidden')

    }
    if (a==4){
        document.getElementById("ans4").classList.toggle('hidden')

    }
    if (a==5){
        document.getElementById("ans5").classList.toggle('hidden')

    }
}