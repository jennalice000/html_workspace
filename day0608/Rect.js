// 셀 선택시 포인터 역할을 하는 사각형 정의

class Rect{
    constructor(container, width, height, x, y, velX, velY){
        this.container = container;
        this.div;
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.velX=velX;
        this.velY=velY;
        this.a=0.1

        this.div=document.createElement("div")
        this.div.style.width=this.width+"px"
        this.div.style.height=this.height+"px"
        
        this.div.style.position="absolute"
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
        
        this.div.style.border="4px solid red";
        this.div.style.boxSizing="border-box";

        this.container.appendChild(this.div)
    }
    tick(){
        this.x = this.x+this.a*(targetX-this.x)
        this.y = this.y+this.a*(targetY-this.y)
    }
    render(){
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
    }
}