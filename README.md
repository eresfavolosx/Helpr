# Helpr — Civic Mentorship Management Dashboard

[![Live Demo](https://img.shields.io/badge/Companion_App-hackea.novu.works-0f172a?style=flat-square)](https://hackea.novu.works)
[![Hackathon](https://img.shields.io/badge/Event-Hackea_por_una_Causa-E11D48?style=flat-square)](https://github.com/eresfavolosx/hackeaporunacausa)
[![Frontend](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20JS-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](https://opensource.org/licenses/MIT)

> **Civic Tech Project:** Helpr is the administrative web dashboard engineered during the premier Puerto Rico civic hackathon **[-]ACKEA-por-una-CAUSA**. It manages the recruitment, vetting, and meeting calendarization of professional mentors paired with at-risk youth across non-profit institutions in Puerto Rico.

---

## 🏗️ System Ecosystem

This civic initiative spans two coordinated components:

1. **Volunteer Mobile Web App:** ([`eresfavolosx/hackeaporunacausa`](https://github.com/eresfavolosx/hackeaporunacausa) / [hackea.novu.works](https://hackea.novu.works)) — Used by prospective professional mentors to register, select causes/institutions of interest, and accept calendarized mentorship invitations.
2. **Administrative Management Dashboard (This Repository):** Used by non-profit coordinators to review mentor profiles, approve credentials, and schedule 1-on-1 mentorship blocks.

```
flowchart TD
    Mentor["Prospective Mentor<br/>(Mobile Web App)"] -->|Submits Application| DB["Data Store / Cloud"]
    DB -->|Application Queue| Admin["Non-Profit Coordinator<br/>(Helpr Web Dashboard)"]
    Admin -->|Review & Approve| Schedule["Calendarization Engine"]
    Schedule -->|Meeting Alerts & Sync| Mentor
```

---

## ✨ Features

- **Mentor Ingestion Queue:** Real-time review table showing applicants, contact details, skill domains, and non-profit preferences.
- **Calendarization Engine (`Calendarization.html`):** Visual scheduling calendar to assign mentor-mentee meetings, send notification alerts, and prevent scheduling conflicts.
- **Institutional Multi-Tenancy:** Filters and categorizes applicants across participating Puerto Rico community non-profits.

---

## 📂 Project Structure

```
Helpr/
└── Helpr2/
    ├── index.html             # Administrative coordinator dashboard
    ├── Calendarization.html   # Mentorship scheduling & calendar engine
    ├── README.md              # Original Spanish hackathon specification
    └── Assets/
        ├── CSS/               # Dashboard layout & responsive styling
        ├── IMG/               # UI graphics & logos
        └── JS/                # Application logic & schedule handling
```

---

## 🚀 Running Locally

```bash
git clone https://github.com/eresfavolosx/Helpr.git
cd Helpr/Helpr2
python3 -m http.server 8080
# Open http://localhost:8080
```

---

## 👥 Hackathon Team (Grupo HELPR)

- **Fabián Vélez Vicente** (Growth & Engineering Lead)
- Luis Betancourt
- Leonardo Calderón
- Ryan González
- Arturo Santiago

---

## 👨‍💻 Author

**Fabián Vélez Vicente**  
- Portfolio: [novu.works](https://novu.works)  
- GitHub: [@eresfavolosx](https://github.com/eresfavolosx)  
- LinkedIn: [Fabián Vélez Vicente](https://www.linkedin.com/in/fabian-velez-vicente/)
