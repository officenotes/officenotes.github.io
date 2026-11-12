---
sidebar_position: 1
slug: /
title: Overview
---

# OfficeNotes: Engineering Clarity from Business Complexity

Selamat datang di repositori dokumentasi dan studi kasus **Septian Narsa Putra** — **IT Business Analyst & Systems Analyst** dengan fokus pada rekayasa kebutuhan (*Requirement Engineering*), pemetaan proses bisnis (**BPMN 2.0**), serta perancangan arsitektur fungsional berbasis prinsip **Lean**.

Situs ini berfungsi sebagai ruang kerja terbuka (*living portfolio*) yang mendokumentasikan bagaimana masalah operasional yang ambigu diterjemahkan menjadi spesifikasi sistem yang presisi, terukur, dan siap dieksekusi oleh tim *engineering*.

---

## Filosofi Kerja: Documentation-First Craftsmanship

Banyak proyek perangkat lunak gagal bukan karena kode yang buruk, melainkan karena spesifikasi yang tidak tuntas dan asumsi yang tidak teruji sejak awal. Pendekatan saya bertumpu pada tiga prinsip utama:

1. **Root Cause Over Symptoms:** Membedah proses *As-Is* dan menghilangkan *bottleneck* operasional terlebih dahulu sebelum merancang fitur sistem (*To-Be*).
2. **Zero-Ambiguity Specifications:** Menulis *Business Rules*, *State Transitions*, dan skenario *Edge-Case* secara eksplisit agar tim *developer* dan QA tidak perlu menebak logika bisnis.
3. **End-to-End Traceability:** Memastikan setiap tabel database, *endpoint* API, dan layar UI memiliki jejak keterkaitan langsung dengan tujuan bisnis di dalam BRD.

---

## Alur Kerja Rekayasa Kebutuhan (End-to-End BA Lifecycle)

Setiap studi kasus di dalam portofolio ini disusun mengikuti siklus standar analisis sistem berikut:

```mermaid
flowchart LR
    A[1. Discovery & MOM] --> B[2. Process Mapping]
    B --> C[3. BRD & PRD]
    C --> D[4. Functional Spec / FSD]
    D --> E[5. QA & UAT Readiness]

    A -.->|Stakeholder Interview & Gap Analysis| B
    B -.->|BPMN 2.0 As-Is vs To-Be| C
    C -.->|Scope, User Stories & KPI| D
    D -.->|Business Rules, Screen Spec & ERD| E