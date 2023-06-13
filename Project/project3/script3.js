let title;
let dayTitle;
let content;
let dayArray=["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]



function init(){
    title = document.getElementById('title')
    dayTitle = document.getElementById('day_title')
    content = document.getElementById('content')
}

addEventListener('load', function(){
    init();
})