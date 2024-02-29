const social = document.querySelector(".social")

function update_insta(){
    document.addEventListener("click",(e)=>{
        e.preventDefault();
        document.querySelector(".youtube1").style.display="none"
        document.querySelector(".instagram1").style.display="flex"

    })
}

function update_youtube(){
    document.addEventListener("click",(e)=>{
        e.preventDefault();
        document.querySelector(".instagram1.shady").style.display='none';
        document.querySelector(".youtube1").style.display="flex"
    })
}