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
  