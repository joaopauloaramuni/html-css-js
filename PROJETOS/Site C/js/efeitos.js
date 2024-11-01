// Pre Carregar Imagens
imagem1 = new Image();
imagem1.src = "img/yt0.png";
imagem2 = new Image();
imagem2.src = "img/yt1.png";
imagem3 = new Image();
imagem3.src = "img/tw0.png";
imagem4 = new Image();
imagem4.src = "img/tw1.png";
imagem5 = new Image();
imagem5.src = "img/fb0.png";
imagem6 = new Image();
imagem6.src = "img/fb1.png";
imagem7 = new Image();
imagem7.src = "img/ok0.png";
imagem8 = new Image();
imagem8.src = "img/ok1.png";
imagem9 = new Image();
imagem9.src = "img/lk0.png";
imagem10 = new Image();
imagem10.src = "img/lk1.png";
imagem11 = new Image();
imagem11.src = "img/banner.png";
imagem12 = new Image();
imagem12.src = "img/banner2.png";
imagem13 = new Image();
imagem13.src = "img/banner3.png";

// Funcao para onMouseOver
function mouse_dentro(flag) {
if (flag == 0)
document.img0.src = "img/lk1.png";
else if (flag == 1)
document.img1.src = "img/yt1.png";
else if(flag == 2)
document.img2.src = "img/tw1.png";
else if (flag == 3)
document.img3.src = "img/fb1.png";
else if (flag == 4)
document.img4.src = "img/ok1.png";
}

// Funcao para onMouseOut
function mouse_fora(flag){
if (flag == 0)
document.img0.src = "img/lk0.png";
else if (flag == 1)
document.img1.src = "img/yt0.png";
else if (flag == 2)
document.img2.src = "img/tw0.png";
else if (flag == 3)
document.img3.src = "img/fb0.png";
else if (flag == 4)
document.img4.src = "img/ok0.png";
}

//Funcao para Banner Automatico
function banner_change(flag){
if (flag == 1){
document.banner.src="img/banner.png";
setTimeout( "banner_change(2)", 3000);
}
else if (flag == 2){
document.banner.src="img/banner2.png";
setTimeout("banner_change(3)", 3000);
}
else if (flag == 3){
document.banner.src="img/banner3.png";
setTimeout("banner_change(1)", 3000);
}
}
//JP Aramuni