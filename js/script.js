tabsbox = document.querySelector('.tabs-box')

let isdragging=false
const arrow=document.querySelectorAll('.icon ');
const tabs = document.querySelectorAll('.tab')
const overlay=document.querySelector('.overlay')

const handleIcons = ()=>{
    arrow[0].style.display=tabsbox.scrollLeft>0?'flex':'none'//
    arrow[1].style.display=tabsbox.scrollWidth-tabsbox.clientWidth>tabsbox.scrollLeft?'flex':'none'
}


arrow.forEach(icon=>{
    icon.addEventListener("click",()=>{
        tabsbox.scrollLeft += icon.id === "left"? -105 : 105;
        setTimeout(()=>handleIcons(),50)
    })
})


tabs.forEach(tab=>{
    tab.addEventListener("click",()=>{
       tabsbox.querySelector('.active').classList.remove('active')
       tab.classList.add('active')
    })
})


const dragging = function(e){
    if(!isdragging) return;
    tabsbox.classList.add('dragging')
    tabsbox.scrollLeft-=e.movementX;
    handleIcons()
}

const dragstop=()=>{
    isdragging = false
    tabsbox.classList.remove('dragging')
}

tabsbox.addEventListener("mousedown",()=>isdragging=true)
tabsbox.addEventListener("mousemove",dragging)
document.addEventListener("mouseup", dragstop)



