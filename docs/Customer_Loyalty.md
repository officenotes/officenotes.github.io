# Customer Loyalty
## Customer Loyalty Program — Layanan Kereta MRT

| Atribut | Keterangan |
|---|---|
| Nama Dokumen | BRD Customer Loyalty Program MRT |
| Versi | 0.1 (Draft) |
| Tanggal | 12 November 2026 |
| Penyusun | [Usulan] isi nama penyusun |
| Sumber Acuan | Dokumen strategi "loyalty BRD" (strategi umum program loyalty untuk layanan MRT). Struktur mengikuti BRD_BeOne_Service_Desk.md |
| Status | Draft untuk diskusi dan validasi stakeholder |

**Keterangan penanda pada dokumen ini**

- **[FSD]** : berasal dari dokumen spesifikasi fungsional. Belum tersedia untuk proyek ini.
- **[Keputusan]** : sudah diputuskan pada diskusi analisis. Belum ada pada versi ini.
- **[Usulan]** : usulan penyusun berdasarkan dokumen strategi sumber, perlu divalidasi stakeholder.

Seluruh isi dokumen v0.1 bertanda **[Usulan]** karena sumber berupa strategi umum, bukan keputusan atau spesifikasi.

**Riwayat Revisi**

| Versi | Tanggal | Perubahan |
|---|---|---|
| 0.1 | 12 Nov 2026 | Draft awal dari dokumen strategi loyalty MRT |

---

## 2. Ringkasan Eksekutif

Program loyalty ini dirancang untuk penumpang layanan kereta MRT. Program memberi penghargaan atas frekuensi perjalanan dan pemakaian pada jam sepi, lalu menukar poin dengan perjalanan gratis, diskon, atau penawaran mitra di stasiun. Program dijalankan melalui aplikasi dan terhubung dengan metode pembayaran nontunai.

Program ditujukan untuk tiga hasil utama: menambah frekuensi penumpang reguler, menyeimbangkan beban penumpang antara jam sibuk dan jam sepi, dan meningkatkan pemakaian layanan mitra di stasiun. Cakupan fase awal, aturan poin, dan ambang tier masih **[Usulan]** dan perlu diputuskan sebelum pengembangan.

---

## 3. Latar Belakang dan Permasalahan

### 3.1 Latar Belakang

Layanan MRT melayani penumpang reguler (komuter), penumpang sesekali, dan turis. Kepadatan penumpang terjadi pada jam sibuk, sementara jam sepi belum termanfaatkan. Stasiun juga memiliki potensi trafik untuk mitra ritel dan F&B. **[Usulan]**

### 3.2 Permasalahan Kondisi Saat Ini

| No | Permasalahan | Dampak Bisnis |
|---|---|---|
| P1 | Belum ada insentif bagi penumpang reguler untuk menambah frekuensi perjalanan | Peluang kenaikan ridership tidak tergarap |
| P2 | Beban penumpang terkonsentrasi pada jam sibuk | Kepadatan tinggi pada jam sibuk, utilisasi jam sepi rendah |
| P3 | Belum ada program apresiasi dan retensi penumpang | Loyalitas dan retensi penumpang sulit dibangun |
| P4 | Mitra di stasiun belum memanfaatkan trafik penumpang secara terarah | Potensi pendapatan dari layanan pendukung belum optimal |
| P5 | Data perjalanan penumpang belum dipakai untuk penawaran yang dipersonalisasi | Promosi kurang tepat sasaran |
| P6 | Belum ada cara bergabung bagi penumpang tanpa smartphone atau turis | Sebagian penumpang tidak dapat ikut program |

> Permasalahan P1 sampai P6 disusun dari dokumen strategi sumber **[Usulan]** dan perlu divalidasi dengan data operasional.

---

## 4. Tujuan Bisnis dan Indikator Keberhasilan

### 4.1 Tujuan Bisnis

| ID | Tujuan |
|---|---|
| BO-01 | Meningkatkan frekuensi perjalanan penumpang reguler melalui insentif poin dan tier |
| BO-02 | Mendorong perjalanan pada jam sepi untuk menyeimbangkan beban penumpang |
| BO-03 | Meningkatkan kepuasan dan retensi penumpang melalui program apresiasi |
| BO-04 | Meningkatkan pemakaian layanan mitra di stasiun |
| BO-05 | Menyediakan dasar data untuk penawaran personal dan pemantauan program |

Seluruh tujuan bersifat **[Usulan]**.

### 4.2 Indikator Keberhasilan (KPI)

Target angka belum ditetapkan. Target ditentukan setelah baseline data tersedia.

| KPI | Definisi | Target |
|---|---|---|
| Jumlah perjalanan per anggota aktif | Rata-rata perjalanan per anggota dalam satu bulan | [Usulan] ditetapkan setelah baseline |
| Porsi perjalanan jam sepi | Persentase perjalanan anggota pada jam sepi | [Usulan] ditetapkan setelah baseline |
| Tingkat partisipasi | Persentase penumpang aktif yang menjadi anggota | [Usulan] ditetapkan setelah baseline |
| Tingkat retensi | Persentase anggota yang tetap aktif pada periode berikutnya | [Usulan] ditetapkan setelah baseline |
| Tingkat penukaran poin | Persentase poin yang ditukar terhadap poin yang diperoleh | [Usulan] ditetapkan setelah baseline |
| Kepuasan penumpang | Skor kepuasan dari survei anggota | [Usulan] ditetapkan setelah baseline |

---

## 5. Ruang Lingkup

### 5.1 Dalam Lingkup (In Scope)

| No | Modul | Keterangan | Sumber |
|---|---|---|---|
| 1 | Keanggotaan | Pendaftaran dan profil anggota dalam aplikasi | [Usulan] |
| 2 | Poin | Perolehan poin dari perjalanan dan isi ulang kartu | [Usulan] |
| 3 | Tier | Tingkatan anggota (contoh: Silver, Gold, Platinum) | [Usulan] |
| 4 | Penukaran | Tukar poin dengan perjalanan gratis, diskon, atau penawaran mitra | [Usulan] |
| 5 | Off-peak | Bonus poin atau diskon untuk perjalanan jam sepi | [Usulan] |
| 6 | Promosi mitra | Penawaran dari mitra ritel dan F&B di stasiun | [Usulan] |
| 7 | Referral | Insentif untuk pengajakan anggota baru | [Usulan] |
| 8 | Umpan balik | Survei dan masukan dari anggota | [Usulan] |
| 9 | Pelaporan | Dashboard performa program | [Usulan] |

### 5.2 Di Luar Lingkup (Out of Scope)

| Item | Catatan |
|---|---|
| Integrasi lintas moda (bus, ferry) | Usulan fase lanjutan **[Usulan]** |
| Kemitraan sepeda dan e-scooter | Usulan fase lanjutan **[Usulan]** |
| Cashback | Belum disebut sebagai kebutuhan **[Usulan]** |
| Donasi dan kegiatan komunitas berbasis poin | Usulan fase lanjutan **[Usulan]** |
| Prediksi operasional jadwal kereta | Di luar program loyalty, perlu proyek terpisah **[Usulan]** |
| Sistem pembayaran dan tiket | Dianggap sudah ada dan menjadi dependensi **[Usulan]** |

---

## 6. Stakeholder dan Aktor

| Aktor | Organisasi | Peran |
|---|---|---|
| Penumpang Reguler | Pengguna | Mengumpulkan poin dan menukar hadiah |
| Penumpang Sesekali / Turis | Pengguna | Bergabung dan menukar poin tanpa keharusan memakai smartphone |
| Operator MRT | Internal | Pemilik program dan pengambil keputusan aturan |
| Tim Pemasaran | Internal | Kampanye dan komunikasi program |
| Tim Operasional Stasiun | Internal | Pendampingan penumpang dan layanan di stasiun |
| Tim IT dan Data | Internal | Integrasi sistem dan analitik |
| Mitra (ritel, F&B) | Eksternal | Penyedia penawaran penukaran poin |
| Penyedia pembayaran | Eksternal | Pembacaan tap dan pencatatan transaksi |
| Sistem Loyalty | Sistem | Perhitungan poin, tier, dan penukaran |

> Peran ini **[Usulan]** dan perlu dikonfirmasi pada diskusi awal.

---

## 7. Proses Bisnis

### 7.1 Proses As-Is

```mermaid
flowchart TD
    A[Penumpang membeli tiket atau isi ulang kartu] --> B[Penumpang naik kereta]
    B --> C[Perjalanan tercatat tanpa imbalan]
    C --> D[Penumpang melanjutkan perjalanan]
```

| Langkah | Aktor | Aktivitas |
|---|---|---|
| 1 | Penumpang | Membeli tiket atau mengisi ulang kartu |
| 2 | Penumpang | Naik kereta |
| 3 | Sistem | Mencatat perjalanan tanpa imbalan |

### 7.2 Proses To-Be

```mermaid
flowchart TD
    A[Penumpang mendaftar sebagai anggota] --> B[Penumpang melakukan perjalanan atau isi ulang]
    B --> C[Sistem menghitung poin]
    C --> D{Perjalanan pada jam sepi?}
    D -- Ya --> E[Poin ditambah bonus jam sepi]
    D -- Tidak --> F[Poin dasar]
    E --> G[Sistem memperbarui saldo poin dan tier]
    F --> G
    G --> H[Penumpang menukar poin]
    H --> I{Jenis penukaran}
    I -- Perjalanan gratis atau diskon --> J[Sistem mengonfirmasi penukaran]
    I -- Penawaran mitra --> K[Mitra memvalidasi penukaran]
    K --> J
    J --> L[Notifikasi ke penumpang]
```

### 7.3 Perbandingan As-Is dan To-Be

| Aspek | As-Is | To-Be |
|---|---|---|
| Keanggotaan | Tidak ada | Pendaftaran melalui aplikasi atau cara alternatif **[Usulan]** |
| Imbalan perjalanan | Tidak ada | Poin per perjalanan dan isi ulang **[Usulan]** |
| Pemakaian jam sepi | Tidak ada dorongan khusus | Bonus poin pada jam sepi **[Usulan]** |
| Penukaran | Tidak tersedia | Perjalanan, diskon, dan penawaran mitra **[Usulan]** |
| Promosi mitra | Tidak terarah | Penawaran berdasarkan data dan lokasi stasiun **[Usulan]** |
| Pemantauan | Tidak tersedia | Dashboard performa program **[Usulan]** |

---

## 8. Aturan Bisnis (Business Rules)

Seluruh aturan bersifat **[Usulan]**. Nilai numerik belum ditetapkan dan ditandai sebagai placeholder.

### 8.1 Aturan Poin

| ID | Aturan | Sumber |
|---|---|---|
| BR-PT-01 | Poin diberikan untuk setiap perjalanan dan isi ulang kartu | [Usulan] |
| BR-PT-02 | Nilai poin per perjalanan ditetapkan oleh Operator MRT | [Usulan] |
| BR-PT-03 | Perjalanan pada jam sepi mendapat bonus poin dengan persentase yang ditetapkan Operator MRT | [Usulan] |
| BR-PT-04 | Poin memiliki masa berlaku yang ditetapkan Operator MRT | [Usulan] |
| BR-PT-05 | Poin yang kedaluwarsa tidak dapat ditukar | [Usulan] |
| BR-PT-06 | Setiap perubahan saldo poin dicatat dalam riwayat transaksi | [Usulan] |

### 8.2 Aturan Tier

| ID | Aturan | Sumber |
|---|---|---|
| BR-TR-01 | Tier ditentukan oleh frekuensi perjalanan dan/atau nilai belanja dalam periode tertentu | [Usulan] |
| BR-TR-02 | Ambang setiap tier ditetapkan Operator MRT | [Usulan] |
| BR-TR-03 | Tier yang lebih tinggi memberi manfaat tambahan (poin lebih besar, diskon, atau layanan khusus) | [Usulan] |
| BR-TR-04 | Tier dievaluasi ulang secara berkala | [Usulan] |

### 8.3 Aturan Penukaran

| ID | Aturan | Sumber |
|---|---|---|
| BR-RD-01 | Poin dapat ditukar dengan perjalanan gratis, diskon, atau penawaran mitra | [Usulan] |
| BR-RD-02 | Nilai tukar poin ditetapkan Operator MRT | [Usulan] |
| BR-RD-03 | Penukaran yang gagal mengembalikan poin ke saldo anggota | [Usulan] |
| BR-RD-04 | Penukaran dapat dibatalkan sesuai ketentuan yang ditetapkan | [Usulan] |

### 8.4 Aturan Promosi dan Mitra

| ID | Aturan | Sumber |
|---|---|---|
| BR-PM-01 | Mitra hanya dapat menawarkan promosi setelah kerja sama disepakati | [Usulan] |
| BR-PM-02 | Penawaran mitra dapat dibatasi berdasarkan stasiun, waktu, atau tier | [Usulan] |
| BR-PM-03 | Setiap penukaran di mitra tercatat sebagai transaksi | [Usulan] |

### 8.5 Aturan Referral

| ID | Aturan | Sumber |
|---|---|---|
| BR-RF-01 | Pengajak dan yang diajak mendapat imbalan setelah pendaftaran berhasil | [Usulan] |
| BR-RF-02 | Imbalan referral dibatasi jumlahnya per anggota | [Usulan] |

---

## 9. Kebutuhan Bisnis (Business Requirements)

Prioritas memakai skala MoSCoW: **M**ust, **S**hould, **C**ould, **W**on't. Seluruh prioritas bersifat **[Usulan]**.

### 9.1 Modul Keanggotaan

| ID | Kebutuhan | Aktor | Prioritas |
|---|---|---|---|
| REQ-MB-01 | Penumpang dapat mendaftar sebagai anggota melalui aplikasi | Penumpang | M |
| REQ-MB-02 | Penumpang dapat bergabung melalui cara alternatif tanpa smartphone | Penumpang sesekali, Turis | S |
| REQ-MB-03 | Anggota dapat melihat profil, saldo poin, dan tier | Anggota | M |

### 9.2 Modul Poin

| ID | Kebutuhan | Aktor | Prioritas |
|---|---|---|---|
| REQ-PT-01 | Sistem menghitung poin dari setiap perjalanan dan isi ulang kartu | Sistem | M |
| REQ-PT-02 | Sistem memberi bonus poin untuk perjalanan pada jam sepi | Sistem | S |
| REQ-PT-03 | Sistem mencatat riwayat transaksi poin | Sistem | M |
| REQ-PT-04 | Sistem menangani masa berlaku dan kedaluwarsa poin | Sistem | S |

### 9.3 Modul Tier

| ID | Kebutuhan | Aktor | Prioritas |
|---|---|---|---|
| REQ-TR-01 | Sistem menghitung tier anggota berdasarkan aturan yang berlaku | Sistem | M |
| REQ-TR-02 | Sistem menerapkan manfaat sesuai tier | Sistem | M |
| REQ-TR-03 | Operator MRT dapat mengubah ambang dan manfaat tier | Admin Operator | M |

### 9.4 Modul Penukaran

| ID | Kebutuhan | Aktor | Prioritas |
|---|---|---|---|
| REQ-RD-01 | Anggota dapat menukar poin dengan perjalanan gratis atau diskon | Anggota | M |
| REQ-RD-02 | Anggota dapat menukar poin dengan penawaran mitra | Anggota | S |
| REQ-RD-03 | Sistem mengembalikan poin jika penukaran gagal | Sistem | M |
| REQ-RD-04 | Anggota menerima notifikasi status penukaran | Anggota | S |

### 9.5 Modul Off-Peak dan Gamifikasi

| ID | Kebutuhan | Aktor | Prioritas |
|---|---|---|---|
| REQ-OP-01 | Sistem menampilkan informasi jam sepi dan bonus yang berlaku | Anggota | S |
| REQ-OP-02 | Operator MRT dapat membuat tantangan dengan imbalan untuk perjalanan pada waktu atau stasiun tertentu | Admin Operator | C |

### 9.6 Modul Promosi Mitra

| ID | Kebutuhan | Aktor | Prioritas |
|---|---|---|---|
| REQ-PM-01 | Mitra dapat mengelola penawaran di stasiun yang disepakati | Mitra | S |
| REQ-PM-02 | Sistem menampilkan penawaran sesuai stasiun, waktu, dan tier | Sistem | S |

### 9.7 Modul Referral

| ID | Kebutuhan | Aktor | Prioritas |
|---|---|---|---|
| REQ-RF-01 | Anggota dapat mengajak orang lain bergabung | Anggota | C |
| REQ-RF-02 | Sistem memberi imbalan referral sesuai aturan | Sistem | C |

### 9.8 Modul Umpan Balik, Pelaporan, dan Analitik

| ID | Kebutuhan | Aktor | Prioritas |
|---|---|---|---|
| REQ-FB-01 | Anggota dapat mengisi survei dan memberi masukan melalui aplikasi | Anggota | S |
| REQ-RP-01 | Sistem menyediakan dashboard performa program (ridership, jam sepi, penukaran, kepuasan) | Admin Operator | M |
| REQ-RP-02 | Sistem menyediakan data segmentasi anggota untuk penawaran personal | Tim Pemasaran | S |

### 9.9 Modul Aksesibilitas

| ID | Kebutuhan | Aktor | Prioritas |
|---|---|---|---|
| REQ-AK-01 | Program dapat diakses penumpang tanpa smartphone melalui kartu atau cara lain | Penumpang | S |
| REQ-AK-02 | Informasi program tersedia dalam bahasa yang mudah dipahami | Penumpang | S |

---

## 10. Siklus Status

### 10.1 Status Anggota

| Status | Arti | Pemicu |
|---|---|---|
| Terdaftar | Anggota baru, belum aktif | Pendaftaran berhasil |
| Aktif | Anggota dapat mengumpulkan dan menukar poin | Verifikasi selesai |
| Nonaktif | Anggota tidak dapat mengumpulkan poin | Tidak aktif sesuai aturan **[Usulan]** |
| Diblokir | Akses dihentikan | Pelanggaran atau permintaan anggota **[Usulan]** |

### 10.2 Status Penukaran

| Status | Arti | Pemicu |
|---|---|---|
| Diajukan | Permintaan penukaran dibuat | Anggota menukar poin |
| Berhasil | Penukaran dikonfirmasi | Sistem atau mitra mengonfirmasi |
| Gagal | Penukaran tidak berhasil | Kesalahan sistem atau validasi |
| Dibatalkan | Penukaran dibatalkan | Anggota atau sistem membatalkan |

### 10.3 Diagram Transisi Penukaran

```mermaid
stateDiagram-v2
    [*] --> Diajukan: Anggota menukar poin
    Diajukan --> Berhasil: Konfirmasi
    Diajukan --> Gagal: Validasi gagal
    Diajukan --> Dibatalkan: Dibatalkan
    Gagal --> [*]
    Berhasil --> [*]
    Dibatalkan --> [*]
```

---

## 11. Kebutuhan Data

### 11.1 Entitas Utama

| Entitas | Keterangan |
|---|---|
| Member | Data anggota (identitas, status, tier) |
| Point Ledger | Riwayat perubahan saldo poin |
| Trip | Data perjalanan dan isi ulang yang menjadi dasar poin |
| Tier | Parameter tingkatan anggota |
| Reward | Daftar hadiah dan nilai tukar |
| Redemption | Riwayat penukaran |
| Partner | Data mitra dan penawarannya |
| Referral | Data pengajakan anggota baru |
| Feedback | Data survei dan masukan |

### 11.2 Struktur Tabel Usulan

**Member** [Usulan]

| Kolom | Tipe | Keterangan |
|---|---|---|
| member_id | integer | PRIMARY KEY |
| card_id | varchar | Referensi kartu atau metode pembayaran |
| status | varchar | Terdaftar, Aktif, Nonaktif, Diblokir |
| tier_id | integer | FOREIGN KEY ke Tier |
| created_at | timestamp | DEFAULT CURRENT_TIMESTAMP |

**Point Ledger** [Usulan]

| Kolom | Tipe | Keterangan |
|---|---|---|
| ledger_id | integer | PRIMARY KEY |
| member_id | integer | FOREIGN KEY ke Member |
| trip_id | integer | FOREIGN KEY ke Trip, opsional |
| txn_code | varchar | NOT NULL, mengikuti Lampiran A |
| points | integer | NOT NULL, nilai positif atau negatif |
| expired_at | timestamp | Tanggal kedaluwarsa poin |
| created_at | timestamp | DEFAULT CURRENT_TIMESTAMP |

**Redemption** [Usulan]

| Kolom | Tipe | Keterangan |
|---|---|---|
| redemption_id | integer | PRIMARY KEY |
| member_id | integer | FOREIGN KEY ke Member |
| reward_id | integer | FOREIGN KEY ke Reward |
| points_used | integer | NOT NULL |
| status | varchar | Diajukan, Berhasil, Gagal, Dibatalkan |
| created_at | timestamp | DEFAULT CURRENT_TIMESTAMP |

### 11.3 Ketetapan Data

- Data pribadi anggota dikelola sesuai regulasi perlindungan data pribadi yang berlaku **[Usulan]**.
- Saldo poin hanya berubah melalui entri pada Point Ledger **[Usulan]**.
- Sumber data perjalanan berasal dari sistem pembayaran atau tiket **[Usulan]** dan perlu dikonfirmasi.

---

## 12. Kebutuhan Non-Fungsional

Seluruh angka bersifat **[Usulan]** dan perlu divalidasi.

| ID | Kategori | Kebutuhan |
|---|---|---|
| NFR-01 | Kinerja | Poin diperbarui setelah perjalanan dalam waktu yang disepakati **[Usulan]** |
| NFR-02 | Ketersediaan | Layanan tersedia selama jam operasional MRT dan memiliki target uptime yang ditetapkan saat perancangan teknis **[Usulan]** |
| NFR-03 | Keamanan | Akses berbasis peran untuk anggota, mitra, dan admin **[Usulan]** |
| NFR-04 | Keamanan | Data anggota dan transaksi terenkripsi saat disimpan dan dikirim **[Usulan]** |
| NFR-05 | Auditabilitas | Setiap perubahan poin dan tier tercatat dengan waktu dan pelaku **[Usulan]** |
| NFR-06 | Kompatibilitas | Aplikasi mobile (Android dan iOS) dan web browser modern **[Usulan]** |
| NFR-07 | Skalabilitas | Mendukung lonjakan penggunaan pada jam sibuk dan hari besar **[Usulan]** |
| NFR-08 | Aksesibilitas | Dapat digunakan penumpang tanpa smartphone melalui kartu atau metode lain **[Usulan]** |
| NFR-09 | Retensi data | Riwayat transaksi disimpan sesuai kebijakan perusahaan **[Usulan]** |

---

## 13. Asumsi, Batasan, dan Dependensi

### 13.1 Asumsi

1. Sistem pembayaran atau tiket sudah ada dan dapat memberi data perjalanan **[Usulan]**.
2. Operator MRT memiliki wewenang menetapkan aturan poin, tier, dan penukaran **[Usulan]**.
3. Mitra di stasiun bersedia menjadi penyedia penawaran **[Usulan]**.
4. Penumpang dapat memakai aplikasi atau kartu untuk bergabung **[Usulan]**.

### 13.2 Batasan

1. Nilai poin, ambang tier, dan nilai tukar belum ditetapkan.
2. Integrasi lintas moda berada di luar fase awal **[Usulan]**.
3. Dokumen ini berdasarkan strategi umum, bukan spesifikasi teknis.

### 13.3 Dependensi

| Dependensi | Keterangan |
|---|---|
| Sistem pembayaran dan tiket | Sumber data perjalanan dan isi ulang |
| Aplikasi MRT | Tempat program ditampilkan dan dikelola |
| Layanan notifikasi | Pemberitahuan poin, tier, dan penukaran |
| Kesepakatan mitra | Dasar penawaran penukaran |
| Layanan pembayaran nontunai | Pembacaan tap dan pembayaran mitra |

---

## 14. Risiko dan Mitigasi

| ID | Risiko | Dampak | Mitigasi |
|---|---|---|---|
| R1 | Nilai poin dan tier terlalu murah atau terlalu mahal | Biaya program membengkak atau anggota tidak tertarik | Uji coba terbatas dan evaluasi berkala **[Usulan]** |
| R2 | Insentif jam sepi tidak mengubah pola perjalanan | Tujuan BO-02 tidak tercapai | Ukur porsi perjalanan jam sepi dan sesuaikan bonus **[Usulan]** |
| R3 | Data perjalanan tidak lengkap dari sistem pembayaran | Poin tidak akurat | Validasi sumber data sebelum rilis **[Usulan]** |
| R4 | Penumpang tanpa smartphone tidak dapat ikut program | Program tidak inklusif | Sediakan kartu atau cara bergabung alternatif **[Usulan]** |
| R5 | Mitra tidak aktif menawarkan promosi | Pendapatan layanan pendukung tidak tercapai | Kesepakatan kerja sama dan pelaporan performa mitra **[Usulan]** |
| R6 | Kebocoran data pribadi anggota | Kerugian reputasi dan hukum | Enkripsi, kontrol akses, dan audit **[Usulan]** |
| R7 | Biaya program melebihi manfaat | Beban keuangan operator | Pantau dampak pendapatan dan sesuaikan aturan **[Usulan]** |

---

## 15. Traceability: Tujuan ke Kebutuhan

Belum ada user story untuk proyek ini. Traceability dibuat dari tujuan bisnis ke kebutuhan.

| Tujuan | Kebutuhan Terkait |
|---|---|
| BO-01 Meningkatkan frekuensi perjalanan | REQ-PT-01, REQ-TR-01, REQ-TR-02 |
| BO-02 Mendorong perjalanan jam sepi | REQ-PT-02, REQ-OP-01, REQ-OP-02 |
| BO-03 Meningkatkan kepuasan dan retensi | REQ-TR-02, REQ-RD-01, REQ-FB-01 |
| BO-04 Meningkatkan pemakaian mitra | REQ-RD-02, REQ-PM-01, REQ-PM-02 |
| BO-05 Dasar data dan pemantauan | REQ-RP-01, REQ-RP-02 |

---

## 16. Glosarium dan Langkah Selanjutnya

### 16.1 Glosarium

| Istilah | Arti |
|---|---|
| MRT | Mass Rapid Transit, layanan kereta perkotaan |
| Loyalty | Program yang memberi imbalan atas pemakaian berulang |
| Poin | Satuan imbalan yang dapat ditukar |
| Tier | Tingkatan anggota berdasarkan aktivitas |
| Off-peak | Jam sepi penumpang |
| Redemption | Penukaran poin dengan hadiah |
| Referral | Pengajakan anggota baru |
| Ledger | Riwayat perubahan saldo poin |

### 16.2 Langkah Selanjutnya

1. Tetapkan cakupan fase awal dan modul yang ditunda.
2. Tetapkan aturan poin, ambang tier, dan nilai tukar.
3. Tetapkan sumber data perjalanan dan sistem yang terlibat.
4. Tetapkan mitra awal dan jenis penawarannya.
5. Tetapkan target KPI setelah baseline data tersedia.
6. Review BRD bersama stakeholder dan perbarui ke versi 0.2.

---

## 17. Lampiran

### Lampiran A. Kode Transaksi Poin [Usulan]

| Tahap | txn_code | Keterangan |
|---|---|---|
| Perolehan | EARN_RIDE | Poin dari perjalanan |
| Perolehan | EARN_TOPUP | Poin dari isi ulang kartu |
| Perolehan | EARN_OFFPEAK | Bonus poin jam sepi |
| Perolehan | EARN_REFERRAL | Imbalan referral |
| Penukaran | REDEEM_RIDE | Penukaran perjalanan gratis atau diskon |
| Penukaran | REDEEM_PARTNER | Penukaran penawaran mitra |
| Koreksi | REFUND_REDEEM | Pengembalian poin karena penukaran gagal |
| Kedaluwarsa | EXPIRE | Poin kedaluwarsa |
