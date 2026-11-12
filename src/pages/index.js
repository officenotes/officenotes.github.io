import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const PILLARS = [
  {
    title: '01. Process & Lean Optimization',
    description:
      'Membedah alur kerja As-Is menggunakan BPMN 2.0 dan prinsip Lean Six Sigma untuk memangkas bottleneck sebelum merancang solusi perangkat lunak.',
  },
  {
    title: '02. Zero-Ambiguity Specifications',
    description:
      'Menyusun BRD, PRD, dan FSD lengkap dengan matriks Business Rules, skenario Edge-Case, serta aturan toleransi agar siap dieksekusi tim engineer.',
  },
  {
    title: '03. Data & System Alignment',
    description:
      'Menjembatani kebutuhan bisnis dan arsitektur teknis melalui perancangan ERD, kontrak REST API, serta skenario pengujian UAT yang terukur.',
  },
];

const CASE_STUDIES = [
  {
    title: 'Enterprise Office Procurement System',
    description:
      'Transformasi alur pengadaan barang dan jasa—mencakup pemodelan BPMN 2.0, multi-vendor RFQ, aturan toleransi selisih pajak, Short Close PO, hingga pembatalan pasca-approval.',
    tags: ['BPMN 2.0', 'BRD', 'FSD', 'Business Rules'],
    link: '/portfolio',
    linkLabel: 'Baca Spesifikasi & Alur →',
  },
  {
    title: 'Warehouse Management System (WMS)',
    description:
      'Perancangan struktur gudang 5-level, pelacakan bin 3D, konversi multi-satuan (Multi-UoM), manajemen barcode, dan alur Quality Control penerimaan barang.',
    tags: ['Supply Chain', 'FSD', 'Data Model', 'Multi-UoM'],
    link: '/portfolio',
    linkLabel: 'Lihat Arsitektur Sistem →',
  },
  {
    title: 'Enterprise Customer Loyalty Platform',
    description:
      'Spesifikasi arsitektur microservices untuk manajemen poin, tiering pelanggan, mesin aturan kampanye dinamis, dan BackOffice Command Center.',
    tags: ['Microservices', 'PRD', 'FSD', 'API Contract'],
    link: '/portfolio',
    linkLabel: 'Eksplorasi Dokumen →',
  },
];

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroInner}>
          <span className={styles.badge}>IT Business Analyst & Systems Architect</span>
          <h1 className={styles.heroTitle}>
            Menerjemahkan Kompleksitas Bisnis Menjadi Spesifikasi Sistem yang Presisi.
          </h1>
          <p className={styles.heroSubtitle}>
            Dokumentasi terbuka oleh <strong>Septian Narsa Putra</strong>. Berisi kumpulan studi kasus
            rekayasa kebutuhan (BRD & FSD), pemodelan proses BPMN 2.0, serta catatan praktis seputar
            analisis sistem dan transformasi digital.
          </p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/portfolio">
              Jelajahi Portofolio (BRD & FSD)
            </Link>
            <Link className="button button--secondary button--lg" to="/articles">
              Baca Materi Business Analyst
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="Portofolio IT Business Analyst, Dokumentasi BRD/FSD, dan Materi Analisis Sistem">
      <HomepageHeader />
      <main>
        {/* Bagian Metodologi Kerja */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Pendekatan Analisis & Dokumentasi</h2>
              <p className={styles.sectionDesc}>
                Standar kerja yang diterapkan pada setiap perancangan sistem untuk meminimalkan celah
                komunikasi antara stakeholder bisnis dan tim pengembang.
              </p>
            </div>
            <div className={styles.grid3}>
              {PILLARS.map((item, idx) => (
                <div key={idx} className={styles.card}>
                  <div>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardText}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bagian Studi Kasus Unggulan */}
        <section className={styles.sectionAlt}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Studi Kasus & Artefak Sistem</h2>
              <p className={styles.sectionDesc}>
                Seluruh studi kasus telah melalui proses sanitasi data untuk menjaga kerahasiaan
                entitas tanpa mengurangi kedalaman logika bisnis dan aturan sistem.
              </p>
            </div>
            <div className={styles.grid3}>
              {CASE_STUDIES.map((study, idx) => (
                <div key={idx} className={styles.card}>
                  <div>
                    <div className={styles.tagRow}>
                      {study.tags.map((tag, tIdx) => (
                        <span key={tIdx} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className={styles.cardTitle}>{study.title}</h3>
                    <p className={styles.cardText}>{study.description}</p>
                  </div>
                  <Link className={styles.cardLink} to={study.link}>
                    {study.linkLabel}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}