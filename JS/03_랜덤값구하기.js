// //0-5랜덤값 구하기
// function getRandom(n){
//     let result;
//    result = parseInt( Math.random()*(n+1)); //1보다 작은 난수 발생 (최댓값 = n.xx)

// }
//최소값부터 최대값까지 랜덤을 구하는 함수
//2와 5 사이의 랜덤값을 원하면
// 호출시 getRandomByRange(2, 5)
function getRandomByRange(min, max){
        let result = min+parseInt(((max-min)+1)*Math.random())
        return result
}

function getRandom(max){
        let r = Math.random();
        let n = r*max;
        return parseInt(n);
}