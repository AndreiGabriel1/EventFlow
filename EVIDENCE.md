\# 🧾 EventFlow – EVIDENCE



Fișierul \*\*EVIDENCE.md\*\* documentează dovezile de testare, validare și stabilitate pentru proiectul \*\*EventFlow\*\*.  

Scopul este să demonstreze că aplicația funcționează conform cerințelor definite, într-un mod reproductibil și verificabil.



---



\## 1. 🔍 Scopul documentului

Acest fișier oferă o sinteză a testelor efectuate asupra proiectului \*\*EventFlow\*\*, incluzând:

\- Validarea principalelor fluxuri de utilizare (UI + backend);

\- Teste manuale și automatizate (unde e cazul);

\- Capturi de ecran / log-uri / rezultate observate;

\- Concluzii și pași următori.



---



\## 2. 🧩 Contextul testării

| Element | Descriere |

|----------|------------|

| \*\*Aplicație\*\* | EventFlow |

| \*\*Versiune\*\* | `v1.0.0` |

| \*\*Data testării\*\* | `19 octombrie 2025` |

| \*\*Mediu\*\* | Local (localhost) |

| \*\*Browser\*\* | Chrome 129 / Edge 128 |

| \*\*Responsabil testare\*\* | Andrei Gabriel |



---



\## 3. ✅ Cazuri testate (scenarii principale)



| Nr. | Funcționalitate | Descriere test | Rezultat așteptat | Rezultat obținut | Status |

|----:|------------------|----------------|-------------------|------------------|--------|

| 1 | Creare eveniment | Se completează formularul și se salvează evenimentul | Evenimentul apare în listă | Confirmat vizual în UI | ✅ PASS |

| 2 | Editare eveniment | Se modifică titlul și data unui eveniment existent | Modificările se salvează corect | OK | ✅ PASS |

| 3 | Ștergere eveniment | Se apasă butonul „Delete” și se confirmă | Evenimentul dispare din listă | OK | ✅ PASS |

| 4 | Validare formular | Se lasă câmpuri goale și se trimite | Se afișează mesaje de eroare | OK | ✅ PASS |

| 5 | Responsivitate | Aplicația redimensionată la 375px (mobil) | Layout-ul se adaptează fără scroll orizontal | OK | ✅ PASS |



---



\## 4. 📸 Dovezi vizuale



\- `screenshots/test-1-create-event.png`  

\- `screenshots/test-5-responsive-mobile.png`



---



\## 5. ⚙️ Observații tehnice

\- Componentele React se reîncarcă fără erori în console;

\- Hook-urile `useState` și `useEffect` se comportă corect în fazele de update;

\- API-ul mock pentru evenimente returnează datele în format JSON valid;

\- Nu au fost identificate memory leaks sau warnings semnificative.



---



\## 6. 🚧 Riscuri și limitări

\- Nu există încă testare automată (Jest / Cypress);

\- Datele nu sunt persistate într-o bază reală (doar mock data);

\- Posibilitate de îmbunătățire a gestionării erorilor în rețea.



---



\## 7. 🔁 Următorii pași

\- Adăugarea testelor unitare pentru componente majore (React);

\- Implementarea persistării reale cu backend Node.js + MongoDB;

\- Optimizare UI/UX și documentarea flow-urilor detaliate;

\- Integrare CI/CD (GitHub Actions pentru testare automată).



---



\## 8. 🧠 Concluzie

Toate funcționalitățile de bază testate în versiunea `v1.0.0` funcționează conform așteptărilor.  

Proiectul este stabil pentru faza actuală și pregătit pentru trecerea la etapa de \*\*testare automată + backend integration\*\*.



