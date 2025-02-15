let special  = document.getElementById('special');
special.innerText = special.innerText.toUpperCase();

let responseBtn = document.querySelectorAll('#yehh');
let tryBtn = document.getElementById('trybtn');
let Dom = document.getElementById('Dom');


console.log(responseBtn[0].innerHTML)

if (responseBtn.length > 0) {
    responseBtn.forEach(respo => {
        respo.addEventListener('click', () => {
            if (respo.textContent.includes('YES')) {
                sessionStorage.setItem('Response', 'Yay! You just made my heart the happiest. I can’t wait to spend Valentine’s Day speaking  with you on the phone! ❤️, since i cant make it to Enugu 💔 But you know I Love you still Baby 😍');
                // window.location.href = 'yes-no.html';
            }else {
                let imggif = document.getElementById('imggif');
                if(imggif){
                    imggif.style.display = "none";
                }
                sessionStorage.setItem('Response', 'Wait... Are you sure? 😢 My heart is beating fast, Can you go back and try again pleaseee!!');
                
            }
            window.location.href = 'yes-no.html';
        });
    });
}
