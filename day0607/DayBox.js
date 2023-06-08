class DayBox{
    constructor(container, width, height, x, y, text){
        this.container=container;
        this.div;
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.text=text;//요일이 들어갈 텍스트

        this.div = document.createElement("div");

        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.innerText=this.text;
        this.div.style.border="2px solid yellow";

        this.container.appendChild(this.div);
    }
}