/*게임에 등장하는 모든 객체들의 최상위 객체를 정의
왜 해야 하나? 최상위 객체를 정의해놓으면, 
코드를 재사용할수 있으므로...
왜 재사용해야 하나? 경제성때문....
*/
class GameObject{
    constructor(container, src, width, height,x,y,velX,velY){
        this.container=container;
        this.img;
        this.src=src;
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.velX=velX;
        this.velY=velY;

        //스타일적용
        this.img=document.createElement("img");
        this.img.src=this.src;
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";

        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";

        this.container.appendChild(this.img);
    }

    tick(){
        this.x+=this.velX;
        this.y+=this.velY;        
    }

    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";        
    }
}















