
let star1 = document.getElementById('star1');
let star2 = document.getElementById('star2');
let star3 = document.getElementById('star3');
let star4 = document.getElementById('star4');
let star5 = document.getElementById('star5');

let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');

let btn = document.getElementById('btn');

function show1(){
    if(one.onclick){
        star1.style.display='block';
        star2.style.display='none';
        star3.style.display='none';
        star4.style.display='none';
        star5.style.display='none';

        btn.href='./thankyou1.html';
    }

    else{
        star1.style.display='none';
        btn.href='#';
    }
}

function show2(){
    if(two.onclick){
        star1.style.display='block';
        star2.style.display='block';
        star3.style.display='none';
        star4.style.display='none';
        star5.style.display='none';

        btn.href='./thankyou2.html';
    }

    else{
        star1.style.display='none';
        star2.style.display='none';
        btn.href='#';
    }
}

function show3(){
    if(three.onclick){
        star1.style.display='block';
        star2.style.display='block';
        star3.style.display='block';
        star4.style.display='none';
        star5.style.display='none';

        btn.href='./thankyou3.html';
    }

    else{
        star1.style.display='none';
        star2.style.display='none';
        star3.style.display='none';
        btn.href='#';
    }
}

function show4(){
    if(four.onclick){
        star1.style.display='block';
        star2.style.display='block';
        star3.style.display='block';
        star4.style.display='block';
        star5.style.display='none';

        btn.href='./thankyou4.html';
    }

    else{
        star1.style.display='none';
        star2.style.display='none';
        star3.style.display='none';
        star4.style.display='none';
        btn.href='#';
    }
}

function show5(){
    if(five.onclick){
        star1.style.display='block';
        star2.style.display='block';
        star3.style.display='block';
        star4.style.display='block';
        star5.style.display='block';

        btn.href='./thankyou5.html';
    }

    else{
        star1.style.display='none';
        star2.style.display='none';
        star3.style.display='none';
        star4.style.display='none';
        star5.style.display='none';
        btn.href='#';
    }
}