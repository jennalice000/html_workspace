class Sensor{
    constructor(container, width, height, x, y, bg){
        this.container=container;
        this.div;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.bg = bg;

        this.div=document.createElement("div");
        this.div.style.width=width+"px";
        this.div.style.height=height+"px";
        this.div.style.position="absolute";
        this.div.style.left=x+"px";
        this.div.style.top=y+"px";
        this.div.style.background = bg;

        this.container.appendChild(this.div)

        //sensor-> wrapper
    }
}