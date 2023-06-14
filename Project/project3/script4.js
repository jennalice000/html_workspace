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

  // Get the current date
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // Months are zero-based

  inputMemo.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
      // Get the input values
      const memoText = box.value;
      const memoInputValue = inputMemo.value;

      // Generate the storage key based on the title
      const title = document.getElementById('title').innerText;
      const year = title.slice(0, 4);
      const month = title.slice(7);
      const storageKey = `${year}_${month}`;

      // Create an object with the data to store
      const dataToStore = {
        memo: memoText,
        year: currentYear,
        month: currentMonth,
        date: memoInputValue
      };

      // Store the data in local storage
      localStorage.setItem(storageKey, JSON.stringify(dataToStore));
    }
  });
});
