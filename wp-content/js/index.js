const copyAddress = document.querySelector('.contractAddress');
let text = document.querySelector('.copyBox__text'); 
let btnText = text.textContent; 
let timeout;

copyAddress.addEventListener('click', () => { 
    navigator.clipboard.writeText(text.textContent).then(function () {
        text.textContent = 'Copied';  

        clearTimeout(timeout);  
        timeout = setTimeout(function () {
            text.textContent = btnText;  
        }, 2000);
    }).catch(function (err) {
        console.error('Failed to copy text: ', err);
    });
});
