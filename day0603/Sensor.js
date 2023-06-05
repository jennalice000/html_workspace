// collisionCheck() 함수는 매개변수로 인스턴스를 원한다.
// 모든 센서들의 최상위 객체
class Sensor{
    constructor(container, width, height, x, y){
                //좌측 센서 
                this.container = container;
                this.div = document.createElement("div");
                this.width = width;;
                this.height = height;
                this.x = x;
                this.y = y;

                this.div.style.background="red";
                this.div.style.width=this.width+"px";
                this.div.style.height=this.height+"px";
                this.div.style.position="absolute"; //wrapper의 자식
                this.div.style.left=this.x+"px";
                this.div.style.top=this.y+"px";
                this.container.appendChild(this.div);
    }
}