let productimg = document.getElementById("productimg");
let btn = document.getElementsByClassName("btn");
console.log(btn);

for(let i = 0 ; i< btn.length ; i++)
{
    console.log(btn[i])

}
btn[0].onclick = function(){
    productimg.src= "image/image1.png";
    this.classList.add('active');
    btn[1].classList.remove('active');
    btn[2].classList.remove('active')

};
btn[1].onclick = function(){
    productimg.src= "image/image2.png";
    this.classList.add('active')
    btn[0].classList.remove('active');
    btn[2].classList.remove('active')
};
btn[2].onclick = function(){
    productimg.src= "image/image3.png";
    this.classList.add('active');
    btn[0].classList.remove('active');
    btn[1].classList.remove('active')

};
