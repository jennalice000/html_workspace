class rect{
    constructor(container, x, y, width, height, bg){
        
        this.container = container;
        this.div;
        this.x = x;
        this.y = y;
        this.bg = bg;
        this.width = width;
        this.height = height;

        this.div = document.createElement("div");
        this.div.style.width = width + "px";
        this.div.style.height = height + "px";
        this.div.style.left = x + "px";
        this.div.style.top = y + "px";
        this.div.style.background = bg;
        this.div.style.position = 'absolute';

        this.container.appendChild(this.div);

        // this.div.addEventListener('click', function(){
        //     flag = true;
        // })
    }
    move(){
        this.div.innerText = "x= "+this.x + "\ny = "+this.y;

        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    }
}