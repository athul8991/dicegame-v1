function diceGame(){
    
    var audio = new Audio('cling.wav');
    var draw=new Audio('draw.wav');

    document.querySelector(".btn").textContent="Play Again";

    var rand1 =Math.random();
    var rand2 =Math.random();

    rand1=Math.round((rand1*5)+1);
    rand2=Math.round((rand2*5)+1);

    console.log(rand1);
    console.log(rand2);

    document.querySelector(".img1").setAttribute("src","images/dice"+rand1+".png");
    document.querySelector(".img2").setAttribute("src","images/dice"+rand2+".png");

    if(rand1>rand2){
        document.querySelector("h1").textContent="😂 Player 1 Win";
        audio.play();
    }else if(rand1<rand2){
        document.querySelector("h1").textContent="Player 2 Win 😂";
        audio.play();

    }else if(rand1===rand2){
        document.querySelector("h1").textContent="Shake Hand 🤝";
        draw.play();
    }
    
  }