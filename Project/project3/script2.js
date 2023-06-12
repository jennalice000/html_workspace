const icon = document.querySelector('.icon');
const button = document.querySelector('.button');

//navigator.geolocation.getCurrentPosition()-> 현재위치에 대한 정보를 끌어올 수 있다. (버튼은 실행부일뿐)
button.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(success);
});

//API키 변수로 지정
const API_KEY = '75e0fa0f573bccc184d63daabf91e9ff';

//success -> ㅇㅇ위치에 대한 위도 경도를 getWeather에 대입하기
const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    getWeather(37.2750804, 126.9540775);
};

//API이용해서 위도, 경도를 인수로 넣어 날씨에 대해 원하는 값 구하기 (아직 신규가입이라 인증안됨)
const getWeather = (lat, lon) => {
    fetch(
        `https://api.openweathermap.org/data/2.8/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
    )
        .then((json) => {
            const icon = json.weather[0].icon;
            const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            icon.setAttribute('src', iconURL); //속성추가
            icon.style.width = 50+'px'
            icon.style.height = 50+'px'

        })
        .catch((error) => {
            alert(error);
        });
}