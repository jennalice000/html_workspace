const icon = document.querySelector('#header .icon');
const button = document.querySelector('.button');
const header = document.getElementById('header');
const div = document.createElement('div')

//navigator.geolocation.getCurrentPosition()-> 현재위치에 대한 정보를 끌어올 수 있다. (버튼은 실행부일뿐)
button.addEventListener('click', () => {
    getWeather();
});

//API키 변수로 지정
const API_KEY = '75e0fa0f573bccc184d63daabf91e9ff';


//API이용해서 위도, 경도를 인수로 넣어 날씨에 대해 원하는 값 구하기

//axios버전 (내가 더 선호하기 때문에 이거 씀, 이유 : 간편하고 보기 편해서)
const getWeather = () => {
    axios
      .get(`http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${API_KEY}`)
      .then((response) => {
        const data = response.data;
        const iconImg = data.weather[0].icon;
        icon.src = `./weather/icons/${iconImg}.png`;
        icon.style.width="50px"
        icon.style.height="50px"
        const description = data.weather[0].description;
        div.textContent = description;
        header.appendChild(div);
      })
      .catch((error) => {
        alert(error);
      });
  };
  