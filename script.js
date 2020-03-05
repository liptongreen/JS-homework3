function Jerry(){
    this.coordX = 100;
    this.coordY = 500;
    this.width = 25;
    this.height = 25;
    this.name = "Jerry";
    this.speedx = 15;
    this.speedY = 15;

    this.state = function(edit){
        if(edit === "top"){
            edit -= this.speedY;
        } else if(edit === "bottom"){
            edit += this.speedY;
        } else if(edit === "left"){
            edit -= this.speedX;
        } else if(edit === "right"){
            edit += this.speedX;
        }
    }
}


function Tomas(){
    this.coordX = 50;
    this.cooedY = 50;
    this.width = 50;
    this.height = 50;
    this.name = "Tomas";
    this.speedX = 15;
    this.speedY = 7.5;

    this.reload = function(k){  
        if(k === 0){// где к - признак того что джерри жив
            i++; 
            nT[i] = new Tomas();               //счетчик количества томов
            setInterval(nT(i),8000);
        }
        else{
        alert("GAME OVER");
        }
    }
}
