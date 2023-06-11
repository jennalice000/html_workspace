/*날짜를 표현하는 박스정의*/
class DateBox{
    constructor(container, width, height, x, y, yy, mm, dd, src, text){
        this.container=container;
        this.div;
        this.span; //날짜 숫자를 담을 컨테이너(위치를 지정하기 위함)
        this.detail; //내용을 담게될 div
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;

        this.yy=yy;
        this.mm=mm;
        this.dd=dd;//날짜 숫자 표기 
        this.icon;//아이콘 표기 
        this.src=src; //아이콘의 이미지 경로
        this.text=text;//상세내용

        this.div=document.createElement("div");
        this.span=document.createElement("span");
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";

        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";

        this.span.style.position="absolute";
        this.span.style.left=10+"px";
        this.span.style.top=10+"px";
        this.div.appendChild(this.span);
        this.span.innerText=this.dd;//날짜 텍스트적용

        this.icon=document.createElement("img");
        this.icon.src=this.src;
        this.icon.style.width=25+"px";
        this.icon.style.position="absolute";
        this.icon.style.left=10+"px";
        this.icon.style.top=45+"px";
    
        this.detail = document.createElement("div");
        this.detail.style.width=80+"px";
        this.detail.style.height=28+"px";
        
        this.detail.style.position="absolute";
        this.detail.style.left=10+"px";
        this.detail.style.top=70+"px";
        this.detail.innerText=this.text; //내용대입
        this.detail.style.fontSize="9px";

        //박스 테두리 
        this.div.style.border="2px solid blue";
        this.div.style.boxSizing="border-box";

        //부착 
        this.div.appendChild(this.icon);//아이콘 부착 
        this.div.appendChild(this.detail);

        this.container.appendChild(this.div);//날짜 사각형을 부착

        //박스에 클릭 이벤트 연결하기 
        this.div.addEventListener("click", ()=>{
            //console.log(this.yy, this.mm, this.dd, "클릭햇어?");
            //우측영역에 상세내용 출력하기 

            //낱개로 넘기지 말고, 모든 정보를 가진 인스턴스를 넘기자
            getContent(this);
        });

    }    
}




