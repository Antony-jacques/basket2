let ball = document.getElementById('innerBall');

document.onmousemove = function(){
    // clientX est la position de la souris de l'util sur l'axe X
    let x = event.clientX * 50 / window.innerWidth + '%';
    let y = event.clientY * 50 / window.innerHeight + '%';
   // console.log("x",x);
    //console.log("y",y);

    for(let i = 0; i<2; i++){
       // ball.style.left = x ;
      //  ball.style.top = y;
        ball.style.transform = "translate(-" + x + ",-" + y + ")";


    }

}