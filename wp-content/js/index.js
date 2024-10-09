const copyAddress = document.querySelector('.contractAddress');
let text = document.querySelector('.copyBox__text'); 
let btnText = text.textContent; // menyimpan teks awal
let timeout;

copyAddress.addEventListener('click', () => { 
    navigator.clipboard.writeText(text.textContent).then(function () {
        text.textContent = 'Copied'; // ubah teks menjadi 'Copied'

        clearTimeout(timeout); // clear timeout jika ada yang belum selesai
        timeout = setTimeout(function () {
            text.textContent = btnText; // kembalikan teks awal setelah 2 detik
        }, 2000);
    }).catch(function (err) {
        console.error('Failed to copy text: ', err);
    });
});
