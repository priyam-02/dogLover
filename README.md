# 🐶 Fetch Dog Matcher

A responsive and user-friendly dog adoption platform built as a take-home assessment for Fetch. It allows users to log in, search adoptable dogs by breed, favorite potential matches, and receive a personalized match recommendation — all through a polished React + TypeScript interface.

---

## ✨ Features

- **🔐 User Authentication**  
  Simple login flow using name and email to authenticate with the Fetch API.

- **🔎 Dog Search Interface**

  - Filter results by breed
  - Paginated search with next/previous navigation
  - Sort alphabetically by breed (ascending/descending)

- **❤️ Favorite Dogs**  
  Users can add or remove favorites from search results with a single click.

- **🎯 Find My Match**
  Automatically generates a match based on favorited dogs using the Fetch API.

- **💎 Polished UI**
  - Unified gradient background across all pages
  - Modern card design for dogs
  - Styled dropdowns, buttons, and consistent spacing
  - Fully responsive layout

---

## 🧪 Demo

🚀 Deployed on: [https://priyam-02.github.io/dogLover/](https://priyam-02.github.io/dogLover/)

📽️ Screenshots:

1. Login Page:
<img width="1915" alt="Screenshot 2025-05-15 at 6 29 15 PM" src="https://github.com/user-attachments/assets/564fba1f-8e70-44b4-b2e2-6c7483d69851" />

2. Search Page:
<img width="1915" alt="Screenshot 2025-05-15 at 6 29 41 PM" src="https://github.com/user-attachments/assets/c2076bd4-ebb5-4abd-8558-a44f2632a836" />

3. Match Page:
<img width="1915" alt="Screenshot 2025-05-15 at 6 29 46 PM" src="https://github.com/user-attachments/assets/4b28058d-fc48-47e3-a4c6-6d549e4d9a95" />

---

## 🛠️ Tech Stack

| Tech             | Usage                           |
| ---------------- | ------------------------------- |
| **React**        | Frontend framework              |
| **TypeScript**   | Strong typing + maintainability |
| **Tailwind CSS** | UI styling and layout           |
| **Axios**        | HTTP requests to Fetch API      |
| **React Router** | Page navigation                 |

---

## 🗂️ Project Structure

```
src/
│
├── api/                 # Axios instance setup
│   └── api.ts
│
├── components/          # Reusable components
│   ├── DogCard.tsx
│   └── BreedFilter.tsx
│
├── pages/               # Page components
│   ├── LoginPage.tsx
│   ├── SearchPage.tsx
│   └── MatchPage.tsx
│
├── App.tsx              # Router setup
└── main.tsx             # Entry point
```

---

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/dogLover.git
cd dogLover
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

---

## 🧪 API Usage

All dog data is pulled from the provided Fetch API:

- `POST /auth/login`
- `GET /dogs/breeds`
- `GET /dogs/search`
- `POST /dogs`
- `POST /dogs/match`

> ✅ Cookies are handled automatically via `withCredentials` in Axios config.

---

## ✅ Completed Requirements

- [x] User login
- [x] Breed filter dropdown
- [x] Pagination and sorting
- [x] Display all Dog fields (except `id`)
- [x] Favorite toggle with visual feedback
- [x] Match generation via `/dogs/match`
- [x] Fully responsive and polished UI
- [x] Deployed and version-controlled

---

## 📩 Contact

Created by **Priyam Shah**  
📧 priyam10302@gmail.com  
🔗 [Portfolio](https://priyamshahh.com)

---

> This project was built as a take-home submission for the Fetch Frontend Challenge with an emphasis on clarity, user experience, and clean code structure.
