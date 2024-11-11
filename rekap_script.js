function tampilkanRekap() {
    const bulan = document.getElementById("bulan").value;
    const rekapTabel = document.getElementById("rekap-tabel");

    // Hapus data lama sebelum menampilkan yang baru
    rekapTabel.innerHTML = `
        <tr>
            <th>Tanggal</th>
            <th>Nama</th>
            <th>Status</th>
        </tr>
    `;

    if (!bulan) return;

    const keyBulan = `rekap-bulanan-${bulan}`;
    const rekapBulanan = JSON.parse(localStorage.getItem(keyBulan)) || [];

    if (rekapBulanan.length === 0) {
        const row = document.createElement("tr");
        row.innerHTML = `<td colspan="3">Tidak ada data absensi untuk bulan ini.</td>`;
        rekapTabel.appendChild(row);
    } else {
        rekapBulanan.forEach(({ hari, data }) => {
            data.forEach(({ nama, status }) => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${hari}/${bulan}</td>
                    <td>${nama}</td>
                    <td>${status}</td>
                `;
                rekapTabel.appendChild(row);
            });
        });
    }
}

