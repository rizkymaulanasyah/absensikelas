
// script.js

// Daftar Nama Murid
const murid = [
    "ade kusuma damanik", "aidil pratama", "asri nabila", "aurel indria nur", "beny jonatan nababan",
    "chelsea rama anggraini", "cindy enjelina gultom", "dimas bayu", "dorolla octavia sirait", "fadhir alfarizi",
    "farizd chairil hammas", "gita br panjaitan", "hariri", "ikhwan albukhory", "m.raditya farel",
    "mira maulidaa lubis", "m.rayhan", "nailanapiah hakim", "naza laily", "nur aida",
    "nur lina", "nursyahputri", "raihan arifin", "rasyah amanda", "riby",
    "rivandy arifin", "ruth arta vennasia", "rizky maulana syah", "salwa amanda nasution", "silfia vista silaban",
    "talitha ayu tsuraya", "wanda chairani", "wiwiek", "zahratun nafisya"
];

// Mengisi Daftar Murid di HTML dengan Dropdown Status
const daftarMurid = document.getElementById("daftar-murid");
murid.forEach((nama, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <label for="murid-${index}">
            ${nama}
            <select id="status-${index}">
                <option value="Hadir">Hadir</option>
                <option value="Tidak Hadir">Tidak Hadir</option>
                <option value="Izin">Izin</option>
                <option value="Sakit">Sakit</option>
            </select>
        </label>
    `;
    daftarMurid.appendChild(listItem);
});

// Fungsi untuk Rekap Absensi dan Simpan di localStorage
function rekapAbsensi() {
    const rekapData = [];
    const tanggal = new Date();
    const bulan = tanggal.getMonth() + 1;
    const hari = tanggal.getDate();
    const key = `absensi-${bulan}-${hari}`;
    const keyBulan = `rekap-bulanan-${bulan}`;

    murid.forEach((nama, index) => {
        const status = document.getElementById(`status-${index}`).value;
        rekapData.push({ nama, status });
    });

    // Simpan data absensi harian ke localStorage
    localStorage.setItem(key, JSON.stringify(rekapData));

    // Ambil data rekap bulanan yang sudah ada
    const rekapBulanan = JSON.parse(localStorage.getItem(keyBulan)) || [];
    rekapBulanan.push({ hari, data: rekapData });

    // Simpan kembali data rekap bulanan
    localStorage.setItem(keyBulan, JSON.stringify(rekapBulanan));

    alert(`Absensi tanggal ${hari}/${bulan} berhasil disimpan!`);
}
