// 총알을 정의함

class Bullet{
    constructor(container, src, x, y, width, height, velX, velY){
        this.container = container;
        this.img;
        this.src = src;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velX = velX;
        this.velY = velY;

        this.img = document.createElement("img");
        this.img.src = this.src;
        this.img.style.width = this.width+"%"
        this.img.style.height = this.height+"%"
        
        this.img.style.position = "absolute";
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";

        this.container.appendChild(this.img);
    }
    move(){
        this.x = this.x + this.velX;
        this.y = this.y + this.velY;

        this.img.style.left = this.x + "px"
        this.img.style.top = this.y + "px"
    }
}
