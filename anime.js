let flowerDivdiv = document.getElementById("animationDiv")
function createFlower() {
    const flowerTypes = ['flower1', 'flower2',"flower3","flower4","flower5","flower6"];
    const randomFlowerType = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
    const flower = document.createElement('div');
    flower.classList.add('flower', randomFlowerType);
    flower.style.left = Math.random() * window.innerWidth + 'px';
    flowerDivdiv.appendChild(flower);

    // Remove the flower after it reaches bottom
    setTimeout(() => {
      flower.remove();
    }, 5000);
  }

  setInterval(createFlower, 100);