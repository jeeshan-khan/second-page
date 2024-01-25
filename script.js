let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let imgReveal = document.querySelector(".img1Hover");
let imgRevealImg = document.querySelector(".hoverDiv1>img");
let close = document.querySelector(".img1Close");
let displayImg = document.querySelector(".img1Hover>div>img");
let displayPara = document.querySelector(".img1Hover>div>p");

let img1Src =
  "https://images.pexels.com/photos/18844139/pexels-photo-18844139/free-photo-of-coffee-shop-kitchen-50-six-in-llandudno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

let img2Src =
  "https://images.pexels.com/photos/10897817/pexels-photo-10897817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

let img1Para =
  "Lorem ipsum 1 , dolor sit amet consectetur adipisicing elit.Consequuntur, quos perferendis. Ducimus minus ullam dicta? Itaque,quaerat. Ratione repellat molestiae nihil iste nesciunt facere totamipsum, voluptatem eum magnam consectetur vero expedita nulla harumconsequatur quos. Minima praesentium vel vitae optio inventore?Praesentium alias, molestias aspernatur, ipsum amet reprehenderit,aut ipsa dolores facere hic similique! Animi, perferendis ipsa.Excepturi, eligendi. Lorem ipsum, dolor sit amet consecteturadipisicing elit. Consequuntur, quos perferendis. Ducimus minusullam dicta? Itaque, quaerat. Ratione repellat molestiae nihil istenesciunt facere totam ipsum, voluptatem eum magnam consectetur veroexpedita nulla harum consequatur quos. Minima praesentium vel vitaeoptio inventore? Praesentium alias, molestias aspernatur, ipsum ametreprehenderit, aut ipsa dolores facere hic similique! Animi,perferendis ipsa. Excepturi, eligendi. Excepturi, eligendi. Loremipsum, dolor sit amet consectetur adipisicing elit. Consequuntur,quos perferendis. Ducimus minus ullam dicta? Itaque, quaerat.Ratione repellat molestiae nihil iste nesciunt facere totam ipsum,voluptatem eum magnam consectetur vero expedita nulla harumconsequatur quos. Minima praesentium vel vitae optio inventore?Praesentium alias, molestias aspernatur, ipsum amet reprehenderit,aut ipsa dolores facere hic similique! Animi, perferendis ipsa.Excepturi, eligendi ";

let img2Para =
  "Lorem ipsum 2 , dolor sit amet consectetur adipisicing elit.Consequuntur, quos perferendis. Ducimus minus ullam dicta? Itaque,quaerat. Ratione repellat molestiae nihil iste nesciunt facere totamipsum, voluptatem eum magnam consectetur vero expedita nulla harumconsequatur quos. Minima praesentium vel vitae optio inventore?Praesentium alias, molestias aspernatur, ipsum amet reprehenderit,aut ipsa dolores facere hic similique! Animi, perferendis ipsa.Excepturi, eligendi. Lorem ipsum, dolor sit amet consecteturadipisicing elit. Consequuntur, quos perferendis. Ducimus minusullam dicta? Itaque, quaerat. Ratione repellat molestiae nihil istenesciunt facere totam ipsum, voluptatem eum magnam consectetur veroexpedita nulla harum consequatur quos. Minima praesentium vel vitaeoptio inventore? Praesentium alias, molestias aspernatur, ipsum ametreprehenderit, aut ipsa dolores facere hic similique! Animi,perferendis ipsa. Excepturi, eligendi. Excepturi, eligendi. Loremipsum, dolor sit amet consectetur adipisicing elit. Consequuntur,quos perferendis. Ducimus minus ullam dicta? Itaque, quaerat.Ratione repellat molestiae nihil iste nesciunt facere totam ipsum,voluptatem eum magnam consectetur vero expedita nulla harumconsequatur quos. Minima praesentium vel vitae optio inventore?Praesentium alias, molestias aspernatur, ipsum amet reprehenderit,aut ipsa dolores facere hic similique! Animi, perferendis ipsa.Excepturi, eligendi ";

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
  console.log(currentImg);
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
