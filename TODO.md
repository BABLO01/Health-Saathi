# Health Saathi delivery outcomes

## 1. Responsive branded app shell and motion
Build a real responsive HEALTH SAATHI app inspired by the supplied mint/teal glass health reference, with the exact app name, heart/ECG/leaf/water visual language, polished mobile-first layout, desktop adaptation, sticky navigation, animated 3-second splash/open experience, subtle heartbeat/ECG/card/drop/progress/button/save/reminder motion, accessible touch targets, reduced-motion support, empty states, toasts and developer credit `Developed by Muhammad Usman`.

## 2. Dashboard, Quick Add and daily wellness
Provide a functional dashboard with branding, greeting/profile, profile photo, language selector, search, notification indicator, rotating Today's Health Tip, useful snapshot cards, and working Quick Add actions for Blood Pressure, Blood Sugar/Glucose, Weight, Water, Medicine, Appointment and Notes.

## 3. Health measurement trackers and local history
Implement functional Blood Pressure (systolic, diastolic, pulse, date, time, optional notes), Blood Glucose/Sugar (value, unit, before/after meal, date, time, notes), Weight (value, unit, date, time, notes), and Water (goal, intake, glass visualization, plus/minus and animated progress) features. Save locally, show previous records, allow edits/deletes where relevant, and provide simple trends without unsafe medical diagnoses.

## 4. Medicine management and smart capture
Implement medicine add/edit/delete/taken flows with name, dosage, instructions, notes, reminder time, repeat schedule and upcoming reminders. Support real gallery and supported-camera selection with persistent attached image. Provide a smart capture review flow that previews the image, best-effort extracts recognizable name/dosage/unit text where possible, keeps all fields editable, and requires user confirmation; never present medical diagnosis or unsafe dosage advice.

## 5. Reminder capability and honest fallback
Request browser notification permission only from a user action, show reminder state in-app, use browser notifications where supported, and clearly explain limitations/fallbacks where background delivery is unavailable.

## 6. Profile and appointments
Implement personal profile editing for name, gallery photo, age, blood group, basic health information and preferences, without family-member management. Implement appointment add/edit/delete/view for doctor, specialty, date, time, reason and notes.

## 7. History, notes, favorites and search
Create central Health Records/History with filters All, BP, Sugar, Weight, Water, Medicines, Appointments and Notes. Implement notes CRUD with date/time and categories General, Diet, Exercise, Doctor, Medicine and Symptoms/observations. Implement removable favorites and global search across health sections, medicines, records, appointments and notes with quick suggestions.

## 8. Settings, English/Urdu and themes
Implement working settings for English and proper Urdu RTL, Light/Dark/System theme, notifications, Install App, Data/Backup, Privacy, About and Share App. Urdu must use proper Urdu script, RTL alignment and usable responsive navigation; themes must remain readable and health-oriented rather than simple inversion.

## 9. PWA, offline-first persistence and sharing
Implement a real installable PWA with manifest, 192x192 and 512x512 icons, Apple touch icon, service worker, offline app-shell caching, standalone mode, theme color and real install prompt where supported. Keep dashboard, saved records, medicines, water, weight, BP, sugar, notes, appointments, profile and preferences after refresh/reopen/offline. Provide JSON backup export/import and native share with copy-link fallback.

## 10. Validation and handoff
Run build/runtime checks, verify route manifest, resolve actionable TypeScript diagnostics, inspect responsive behavior, verify major flows and persistence, checkpoint the project, and deliver the working Preview URL plus a clean source archive when complete.
