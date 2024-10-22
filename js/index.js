let copyStatus = '  0x85A3. . .9e40ab9'; // Teks asli
const textRef = document.getElementById('textToCopy'); // Menggunakan ID untuk mendapatkan elemen

function handleCopy() {
  const textToCopy = textRef.getAttribute('data-text');
  
  // Salin teks ke clipboard
  navigator.clipboard.writeText(textToCopy).then(() => {
    // Ubah teks menjadi "COPIED"
    copyStatus = 'COPIED';
    textRef.textContent = copyStatus; // Ubah teks di elemen
    
    // Setelah 2 detik, kembalikan teks ke nilai aslinya
    setTimeout(() => {  
      copyStatus = textToCopy;
      textRef.textContent = copyStatus; // Kembalikan teks di elemen
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
}

// Contoh penggunaan, tambahkan event listener
document.getElementById('copyButton').addEventListener('click', handleCopy);
