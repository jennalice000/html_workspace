let title;
let dayTitle;
let content;
let dayArray = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]
let dateArray = [];
let nowDate;

//1. 요일박스를 만들어 붙인다
//2. 날짜박스를 만들어 붙인다
//3. 날짜 정보를 갖다 붙인다.
//1. 시작 날짜가 어느 요일부터 시작하는가
//2. 마지막 날짜가 '몇 일'로 끝나는가

//4. 버튼 및 키보드를 누르면 이전, 이후 달로 이동


//요일박스만들기
function createDayBox() {
    for (let i = 0; i < dayArray.length; i++) {
        new DayBox(dayTitle, 100, 60, i * 100, 0, dayArray[i]);
    }
}

//날짜박스만들기
function createDateBox() {
    for (let a = 0; a < 6; a++) { //층
        let arr = new Array(7);//빈 배열 생성
        for (let i = 0; i < dayArray.length; i++) {
            let dateBox = new DateBox(days, 100, 100, i * 100, a * 100, "");
            arr[i] = dateBox;

            dateBox.div.addEventListener("click", function () {
                console.log(innerText + '다');
            })
        };
        dateArray.push(arr);
    }
}

//달력제목세팅하기
function setTitle(){
    let year = nowDate.getFullYear();
    let month = nowDate.getMonth();
    title.innerText=year+"년 "+(month+1)+"월";
}

//마지막 날짜 구하기
function getLastDateOfMonth(){
    let d = new Date(nowDate.getFullYear(), nowDate.getMonth()+1); //현재 기준 다음 달
    d.setDate(0); //d가 다음달이므로 다음달의 이전달인 이 달의 마지막날짜가 됨
    return d.getDate();
}

//날짜박스에 날짜넣기
function printDateNum(){
    let startDay=nowDate.getDay(); //오늘 요일구하기 (init에서 오늘을 1일로 세팅해둠)
    let lastDay=getLastDateOfMonth();

    let count=0;
    let n=0;

    for(let i=0; i<dateArray.length; i++){
        for(let j=0; j<dateArray[i].length;j++){
            if(count>=startDay && n<lastDay){
                n++;
                dateArray[i][j].setText(n);
            }else{
                dateArray[i][j].setText("");
            }
            count++;
        }
    }
}


//초기화
function init() {
    //html의 요소들을 js로 가져온다.
    title = document.getElementById('title')
    dayTitle = document.getElementById('day_title')
    content = document.getElementById('content')
    days = document.getElementById('days')

    nowDate= new Date();
    nowDate.setDate(1);
    setTitle();
    printDateNum();

}

//로드
addEventListener('load', function () {
    init();
    createDayBox();
    createDateBox();
    printDateNum()

    this.addEventListener('keydown', function(e){
        if(e.key === 'ArrowLeft'){
            nowDate.setMonth(nowDate.getMonth()-1);
            nowDate.setDate(1);
            setTitle();
            printDateNum();
        }
    })
    
    this.addEventListener('keydown', function(e){
        if(e.key === 'ArrowRight'){
            nowDate.setMonth(nowDate.getMonth()+1);
            nowDate.setDate(1);
            setTitle();
            printDateNum();
        }
    })
})
