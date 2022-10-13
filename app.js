const btn = document.querySelector('button');

function logger(){
    console.log("Button was Clicked");
}


btn.onclick = () => {
    alert('Hello World');
    logger();
}
