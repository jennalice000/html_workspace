class DateBox{
    constructor(container, x, y, text){
        this.container = container;
        this.div;
        this.x = x;
        this.y = y;
        this.text = text;

        this.div = document.createElement('div');
        this.div.style.width = 100+'px'
        this.div.style.height = 100+'px'
        
        this.div.style.position = 'absolute'
        this.div.style.left = this.x + 'px'
        this.div.style.top = this.y + 'px'
        
        this.div.innerText = this.text
        this.div.style.border = '1px solid black';
        this.div.style.fontSize = 20 + 'px'

        this.container.appendChild(this.div)
    }
}