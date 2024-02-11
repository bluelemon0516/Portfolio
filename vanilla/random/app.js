const $c = document.querySelector("canvas");
const ctx = $c.getContext(`2d`);


const product = [
  "떡볶이", '돈가스', "초밥", "피자", "냉면", "치킨", '족발', "피자", "삼겹살", "마라탕", "덮밥", "김밥", "라면", "파스타", "햄버거", "핫도그", "샌드위치", "굶기",
];

const colors = ["#79E0EE", "#98EECC", "#D0F5BE", "#FBFFDC ", "#ECF2FF", "#E3DFFD", "#E5D1FA", "#FFF4D2","#FFCCCC",];

const newMake = () => {
    const [cw, ch] = [$c.width / 2, $c.height / 2];
    const arc = Math.PI / (product.length / 2);
  
    for (let i = 0; i < product.length; i++) {
      ctx.beginPath();
      ctx.fillStyle = colors[i % (colors.length -1)];
      ctx.moveTo(cw, ch);
      ctx.arc(cw, ch, cw, arc * (i - 1), arc * i);
      ctx.fill();
      ctx.closePath();
    }

    ctx.fillStyle = "darkgrey";
    ctx.font = "13px Pretendard";
    ctx.textAlign = "center";

    for (let i = 0; i < product.length; i++) {
      const angle = (arc * i) + (arc / 2);

      ctx.save()  ;

      ctx.translate(
        cw + Math.cos(angle) * (cw - 50),
        ch + Math.sin(angle) * (ch - 50),
      );

      ctx.rotate(angle + Math.PI / 2);

      product[i].split(" ").forEach((text, j) => {
        ctx.fillText(text, 0, 30 * j);
      });

      ctx.restore();
    }
}

const rotate = () => {
  $c.style.transform = `initial`;
  $c.style.transition = `initial`;
  
  setTimeout(() => {
    
    const ran = Math.floor(Math.random() * product.length);

    const arc = 360 / product.length;
    const rotate = (ran * arc) + 3600 + (arc * 5);
    
    $c.style.transform = `rotate(-${rotate}deg)`;
    $c.style.transition = `2s`;
    
    setTimeout(() => alert(`오늘의 메뉴는~ ${product[ran]} 입니다!`), 2000);
  }, 1);
};

newMake();