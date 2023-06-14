let memo = document.getElementById('memo')

let createMemoBox = function(){
    let box = document.createElement('textArea');
    box.setAttribute("id", "box")
    memo.appendChild(box);
}

let createInputMemo = function(){
    let inputMemo = document.createElement('input')
    inputMemo.setAttribute("id", "inputMemo");
    inputMemo.placeholder="몇 일 메모인가요?"
    memo.appendChild(inputMemo);
    
}

addEventListener('load', function(){
    createMemoBox();
    createInputMemo();
})