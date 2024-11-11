// rekap.js

// Mengambil data rekap absensi dari localStorage
const rekapData = JSON.parse(localStorage.getItem("rekapAbsensi")) || [];
const rekapTabel = document.getElementById("rekap-tabel");

// Cek apakah ada data absensi yang tersimpan
if (rekapData.length === 0) {
    const row = document.createElement("tr");
    row.innerHTML = `<td colspan="4">Belum ada data absensi yang direkap.</td>`;
    rekapTabel.appendChild(row);
} else {
    // Menampilkan data rekap absensi di tabel
    rekapData.forEach((data) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${data.tanggal}</td>
            <td>${data.bulan}</td>
            <td>${data.nama}</td>
            <td>${data.status}</td>
        `;
        rekapTabel.appendChild(row);
    });
}


