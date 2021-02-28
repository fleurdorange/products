let div1 = document.getElementsByClassName("communication-img")[0];
div1.addEventListener('click',f);
function f(){
    
    window.scrollTo(0,document.body.scrollHeight);

}
let div2 = document.getElementsByClassName('logo')[0];
div2.addEventListener('click',f1);
function f1(){
    window.scrollTo(0,0);
}



