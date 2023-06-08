class DateBox{
    constructor(container, width, height, x, y, num, src, text){
        this.container=container;
        this.div;
        this.span;
        this.detail;
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;

        this.num = num;
        this.icon;
        this.src=src;
        this.text = text;

        this.div = document.createElement('div')
        this.span = document.createElement('span')
        this.detail= document.createElement('div')
        this.icon = document.createElement('img')

        this.div.style.width=this.width+'px'
        this.div.style.height=this.height+'px'
        this.div.style.position='absolute'
        this.div.style.left=this.x+'px'
        this.div.style.top=this.y+'px'
        this.div.style.border="1px solid black"
        this.div.appendChild(this.span)

        this.span.style.position='absolute'
        this.span.style.left=10+'px'
        this.span.style.top=10+'px'
        this.span.innerText=this.num;

        this.icon.src=this.src;
        this.icon.style.width=25+'px'
        this.icon.style.height=25+'px'
        this.icon.style.position='absolute'
        this.icon.style.right=10+'px'
        this.icon.style.top=10+'px'

        this.detail.style.width=80+'%'
        this.detail.style.height=30+'px'
        this.detail.style.left=10+'px'
        this.detail.style.top=60+'px'
        this.detail.style.position='absolute'
        this.detail.innerText=this.text;

        this.container.appendChild(this.div);
        this.div.appendChild(this.icon);
        this.div.appendChild(this.detail);
    }
}