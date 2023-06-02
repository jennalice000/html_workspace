// 다이어리에 사용되는 모든 박스의 최상위 객체

class Box{
    constructor(container, width, height, x, y, text, bg){
        this.container = container;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.text = text;
        this.div;
        this.bg = bg; //background color
        // this.line = line; // border color
        //텍스트 대입
        
        this.div = document.createElement('div');
        this.div.innerText=this.text;
        this.div.style.width = this.width + 'px';
        this.div.style.height = this.height + 'px';
        this.div.style.border = '1px solid black';

        this.div.style.left = this.x + 'px'
        this.div.style.top = this.y + 'px'

        this.div.style.background = this.bg;

        this.container.appendChild(this.div);
    }
    // 태어난 후 text를 변경할 일이 있다면 아래의 메서드로 처리하기
    setText(text){
        this.text = text;
        this.div.innerText= text;
    }
}