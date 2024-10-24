AOS.init({
  once: true
});


let originalText = {
    element1: '0x85A3. . .9e40ab9', // Teks asli elemen pertama
    element2: '0x85A3. . .9e40ab9', // Teks asli elemen pertama 
  };
  
  function handleCopy(elementId) {
    const textRef = document.getElementById(elementId); // Mendapatkan elemen berdasarkan ID
    const textToCopy = textRef.getAttribute('data-text'); // Mendapatkan data-text dari elemen
    
    // Salin teks ke clipboard
    navigator.clipboard.writeText(textToCopy).then(() => {
      // Ubah teks menjadi "COPIED"
      textRef.textContent = 'COPIED'; // Ubah teks di elemen
  
      // Setelah 2 detik, kembalikan teks ke nilai aslinya
      setTimeout(() => {
        textRef.textContent = '0x85A3. . .9e40ab9'  
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }
  
  // Contoh penggunaan, tambahkan event listener pada kedua tombol
  document.getElementById('copyButton1').addEventListener('click', () => handleCopy('textToCopy1'));
  document.getElementById('copyButton2').addEventListener('click', () => handleCopy('textToCopy2'));
  document.getElementById('copyButton3').addEventListener('click', () => handleCopy('textToCopy3'));
  


  // video background

// function updateVideoSource() {
//   const video = document.getElementById('background_video');
//   const source = video.querySelector('source');
  
//   if (window.innerWidth < 1000) {
//       source.setAttribute('src', '../img/video/bgMobile.mp4'); // Video untuk mobile
//   } else {
//       source.setAttribute('src', '../img/video/bgDesktop.mp4'); // Video untuk desktop
//   }
  
//   // Load ulang video dengan source baru
//   video.load();
// } 
// window.onload = updateVideoSource;
 
// window.onresize = updateVideoSource;

// speed video
// Mengatur kecepatan setelah video bisa diputar
document.getElementById('background_video').addEventListener('canplay', function() {
  this.playbackRate = 1.1;
});
document.getElementById('background_video2').addEventListener('canplay', function() {
  this.playbackRate = 1.1;
});