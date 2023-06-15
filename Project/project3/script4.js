let memo = document.getElementById('memo');
let box;
let inputMemo;

let createMemoBox = function() {
  box = document.createElement('textarea');
  box.setAttribute("id", "box");
  memo.appendChild(box);
}

let createInputMemo = function() {
  inputMemo = document.createElement('input');
  inputMemo.setAttribute("id", "inputMemo");
  inputMemo.placeholder = "몇 일 메모인가요?";
  memo.appendChild(inputMemo);
}

addEventListener('load', function() {
  createMemoBox();
  createInputMemo();

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; 

  inputMemo.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
      const memoText = box.value;
      const memoInputValue = inputMemo.value;

      const title = document.getElementById('title').innerText;
      const year = title.slice(0, 4);
      const month = title.slice(7);
      const storageKey = `${year}_${month}`;

      const dataToStore = {
        memo: memoText,
        year: currentYear,
        month: currentMonth,
        date: memoInputValue
      };

      localStorage.setItem(storageKey, JSON.stringify(dataToStore));
    }
  });
});
