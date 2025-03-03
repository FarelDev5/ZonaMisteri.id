const pageUrl = window.location.href;
const creativeAIDescriptionID = `
Mau tahu rahasia temanmu? Cek namanya di sini! Atau, tanya kerang ajaib buat dapat jawaban iseng! 👀
`;

const creativeAIDescriptionEN = `
Want to know your friend's secrets? Check their name here! Or, ask the magic shell for a whimsical answer! 👀
`;

function shareTo(platform) {
  switch (platform) {
    case 'whatsapp':
      // Kirim pesan ke WhatsApp dengan link halaman web dan deskripsi
      window.open(`https://wa.me/?text=${encodeURIComponent(pageUrl + '\n\n' + '*ID:*' + creativeAIDescriptionID + '\n\n' + '*EN:*' + creativeAIDescriptionEN)}`, '_blank');
      break;
    case 'facebook':
      // Bagikan link halaman ke Facebook dengan deskripsi
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl + '\n\n' + 'ID:' + creativeAIDescriptionID + '\n\n' + 'EN:' + creativeAIDescriptionEN)}`, '_blank');
      break;
    case 'telegram':
      // Bagikan link halaman ke Telegram dengan deskripsi
      window.open(`https://t.me/share/url?url=${encodeURIComponent(pageUrl + '\n\n' + 'ID:' + creativeAIDescriptionID + '\n\n' + 'EN:' + creativeAIDescriptionEN)}`, '_blank');
      break;
    case 'copyLink':
      // Menyalin link halaman ke clipboard
      navigator.clipboard.writeText(pageUrl).then(() => {
        console.log('Link telah disalin ke clipboard!');
      }).catch(err => {
        console.log('Gagal menyalin link: ' + err);
      });
      break;
    default:
      console.log('Platform tidak dikenali');
  }
}

function feedback() {
  let sender_feedback = 'Halo kak'
  window.open(`mailto:farel.alfareza.dev@gmail.com?body=${sender_feedback}&subject=Pesan Dari Pengguna.&cc=farel.developer55@gmail.com`)
}