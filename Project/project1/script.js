document.addEventListener('DOMContentLoaded', function() {
  const stickerContainer = document.getElementById('stickerContainer');
  const sticker = document.getElementById('sticker');

  // Set initial position of the sticker
  sticker.style.left = '50px';
  sticker.style.top = '50px';

  let isDragging = false;
  let dragOffsetX = 0;
  let dragOffsetY = 0;

  sticker.addEventListener('mousedown', function(e) {
    // Create a copy of the sticker
    const stickerCopy = sticker.cloneNode(true);
    stickerContainer.appendChild(stickerCopy);

    // Set initial position of the copied sticker
    const offsetX = e.clientX - stickerContainer.getBoundingClientRect().left;
    const offsetY = e.clientY - stickerContainer.getBoundingClientRect().top;
    stickerCopy.style.left = offsetX + 'px';
    stickerCopy.style.top = offsetY + 'px';

    isDragging = true;
    dragOffsetX = offsetX;
    dragOffsetY = offsetY;
  });

  document.addEventListener('mousemove', function(e) {
    if (isDragging) {
      const containerRect = stickerContainer.getBoundingClientRect();
      const x = e.clientX - containerRect.left - dragOffsetX;
      const y = e.clientY - containerRect.top - dragOffsetY;
      const stickerCopy = stickerContainer.lastElementChild;
      stickerCopy.style.left = x + 'px';
      stickerCopy.style.top = y + 'px';
    }
  });

  document.addEventListener('mouseup', function() {
    isDragging = false;
  });
});
