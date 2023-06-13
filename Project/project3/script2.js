// Create and add 10 images to the leftSide
function getRandomByRange(min, max) {
    let result = min + parseInt(((max - min) + 1) * Math.random());
    return result;
}

function createStickerImages() {
    const leftSide = document.getElementById('leftSide');
    const imageNames = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png', '21.png', '22.png'];

    for (let i = 0; i < 22; i++) {
        const img = document.createElement('img');
        img.src = './sticker/' + imageNames[i];
        img.classList.add('sticker');
        img.style.position = 'absolute';


        const storedStickers = JSON.parse(localStorage.getItem('stickers')) || {};
        const stickerData = storedStickers[i.toString()];
        if (stickerData) {
            img.style.left = stickerData.left + 'px';
            img.style.top = stickerData.top + 'px';
        } else {
            const maxWidth = leftSide.clientWidth - img.width;
            const maxHeight = leftSide.clientHeight - img.height;
            const randomX = getRandomByRange(16, 194);
            const randomY = getRandomByRange(117, 546);
            img.style.left = randomX + 'px';
            img.style.top = randomY + 'px';
        }



        img.addEventListener('mousedown', startDragging);
        img.addEventListener('dblclick', removeSticker);

        leftSide.appendChild(img);
    }
}

function startDragging(event) {
    const sticker = event.target;
    const offsetX = event.clientX - sticker.offsetLeft;
    const offsetY = event.clientY - sticker.offsetTop;

    function moveSticker(event) {
        const x = event.clientX - offsetX;
        const y = event.clientY - offsetY;
        sticker.style.left = x + 'px';
        sticker.style.top = y + 'px';

        const storedStickers = JSON.parse(localStorage.getItem('stickers')) || {};
        storedStickers[sticker.id] = { left: x, top: y };
        localStorage.setItem('stickers', JSON.stringify(storedStickers));
    }
    function stopDragging() {
        document.removeEventListener('mousemove', moveSticker);
        document.removeEventListener('mouseup', stopDragging);
    }

    document.addEventListener('mousemove', moveSticker);
    document.addEventListener('mouseup', stopDragging);
}

function removeSticker(event) {
    const sticker = event.target;
    sticker.remove();
}


createStickerImages();
