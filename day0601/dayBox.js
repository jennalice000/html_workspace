class DayBox{
    constructor(container, x, text){
        this.container = container //부모요소
        this.div; //멤버변수
        this.x=x;
        this.text = text;

        this.div = document.createElement('div');
        this.div.style.width = 100+'%';
        this.div.style.height = 100+'%';
        this.div.style.left = this.x + 'px';

        this.div.innerText = this.text;
        this.div.style.textAlign = 'center';
        this.div.style.fontSize = 25+'px';
        this.div.style.fontWeight = 500;
        this.div.style.color = 'purple';
        this.div.style.border = "2px solid black"

        this.container.appendChild(this.div)
    }
}