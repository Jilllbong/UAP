function hitungTotal() {
  const kodeBarang = document.getElementById('kodeBarang').value;
  const jumlahBarang = document.getElementById('jumlahBarang').value;
  const hargaBarang = getHargaByKode(kodeBarang);
  const total = hargaBarang * jumlahBarang;

  alert('Total: Rp. ' + total);

  const jumlahUang = prompt('Masukkan Jumlah Uang :');

  const kembalian = hitungKembalian(total, jumlahUang);

  alert('Kembalian: Rp. ' + kembalian);
}

function getHargaByKode(kode) {
  // Fungsi ini dapat diperluas sesuai dengan kebutuhan
  switch (kode) {
    case '001':
      return 10000;
    case '002':
      return 20000;
    case '003':
      return 30000;
    default:
      return 0;
  }
}

function hitungKembalian(total, jumlahUang) {
  return jumlahUang - total;
}