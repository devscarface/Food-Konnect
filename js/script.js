let menu= document.querySelector('#menubar');
let nav = document.querySelector('.navbar');

menu.onclick = () =>{
menu.classList.toggle('menubar');
nav.classList.toggle('active');
}


window.onscroll = () =>{
    menu.classList.remove('menubar');
    nav.classList.remove('active');

    if(window.scroll >60){
        document.querySelector('#scroll').classList.add('active');
    }else{
        document.querySelector('#scroll').classList.remove('active');
    }


}