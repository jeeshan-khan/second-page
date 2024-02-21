let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let imgReveal = document.querySelector(".img1Hover");
let imgRevealImg = document.querySelector(".hoverDiv1>img");
let close = document.querySelector(".img1Close");
let displayImg = document.querySelector(".img1Hover>div>img");
let displayPara = document.querySelector(".img1Hover>div>p");

let img1Src =
  "./Assets/first1.jpg";

let img2Src =
  "./Assets/second1.jpg";

let img1Para =
  "first of all HAAPPPYYYYY ANNNIVEERSARY MERI JAANNNN.... This were us just 8 months ago celebrating our first meet outside the school and home without any of our parents...Motu this was the best june i ever had..mera jhut mut ka tumhare paas aana math ka bahana banake rona ye sochke ki tum chali jaogi aese nai mil payenge uss sab k beech maje karna june ki garmi mein bhi badminton khelna ek dusre ka jhuta khana beech beech mein thodu sa ladna phir pyaar se chummi dena ufff....phir tumhari mehnat aur planning se at last hum mil paye the bahar pehli baar hum kisike saamne hone par bhi haath pakad k beithe the kitne pyaare photos uthaye kitne acche se cheeks se cheeks milake cheeeky-cheeky photo uthaye hai kitne pyaare hai re ye photo mein mujhe pata tha ki hum 4 saal and counting.... ka story hi banayenge ab next photo pe jao usme pehle ki story hai";

let img2Para =
  "haa ab aaygayi to sunoooo HAPPPPPYYYY ANNNIIVVVEEERRRRSAARYYYY BABBBYYYYY... dekho ye photo hai tumhare pehli baar chattisgarh jane k pehle ka hai..Iss time sach mein mereko laga nai tha ki hum long distance bhi itne acche se chala payenge long distance chalega qo to pata tha but itna sahi kabhi nai idea tha...Ek cheez mark kiya meine wo galti ki jo tum iss time bohot karti thi spelling mistake ki wo ko qo likha hu dekhi ho mark ki to sabbash warna jhapad hihi...ye wo time tha jab mujhe lagta tha long distance to kya hi hard hoga yaha pe bhi boards k time kaha ek dusre se milte the reh hi lenge but mereko ghanta idea nai tha ki itna difficult hota hai sach mein yaar wo takleef jab tumhe chahiye wo insaan tumhare paas aa hi nai sakta nahi ek hug karke wo overthinking khatam hoti hai ...Mere to nakhre starting mein itne the bhai ab jab wo relaise ho rha na to bura lag raha ki meine tumhe kitna mentally torcher aur exhaust kiya hai bhai wo khali pili ka jealousy,tumhe hamesa time na dene pe sunana tumhe taana maarna supportive tha bohot tha but yaar nakhre bohot the ... I am really sorry meine tumhe agar kabhi jyada hurt kiya ho to meine bohot galtiya ki hai but kasam se sab sudhar liya hai aur bhi baki hai sudhar lunga ... ab ye sab baat chhodo bas itna samjho ki pyaaarrr chee aur khub cheee I LOVE YOU MOTU BABYYY ";

let isOpen = 0;

let clicked = (imgNum) => {
  let currentImg;
  if (imgNum == 1) {
    currentImg = img1Src;
    currentPara = img1Para;
  } else if (imgNum == 2) {
    currentPara = img2Para;
    currentImg = img2Src;
  }
  // console.log(currentImg);
  displayImg.setAttribute("src", currentImg);
  imgReveal.style.display = "block";
  displayPara.innerHTML = currentPara;
  isOpen = 1;
};

let closeDiv = () => {
  if (isOpen == 1) {
    imgReveal.style.display = "none";
  }
};
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
  let click = (imgNum) => {
    let currentImg;
    if (imgNum == 1) {
      currentImg = img1Src;
      currentPara = img1Para;
    } else if (imgNum == 2) {
      currentPara = img2Para;
      currentImg = img2Src;
    }
    
    displayImg.setAttribute("src", currentImg);
    imgReveal.style.display = "block";
    displayPara.innerHTML = currentPara;
    isOpen = 1;
  };
  
  let closeD = () => {
    if (isOpen == 1) {
      imgReveal.style.display = "none";
    }
  };
  
  let openGitHub = () => {
    window.location.href = "https://jeeshan-khan.github.io/new-image/","_blank","popup = ture";
  };
  