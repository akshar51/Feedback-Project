# 📋 Student Feedback Form — Documentation

## 📌 Overview

The **Student Feedback Form** is a React-based web component that enables users (students) to submit feedback on faculty behavior using a 5-star rating system. The app collects basic information such as the student's name, GR ID, and textual feedback, then displays a confirmation modal with all the submitted data.

---

## 🚀 Features

- **Interactive Star Rating System** for faculty behavior.
- **Real-time form validation** and feedback collection.
- **Live modal preview** of submitted feedback.
- Built with **React Hooks** (`useState`) for state management.
- Uses **Bootstrap 5** for responsive and styled UI.
- Integrates **Font Awesome React Icons** for star ratings.

---

## 🛠️ Technologies Used

| Technology         | Purpose                          |
|--------------------|----------------------------------|
| React              | Frontend library                 |
| Bootstrap 5        | Styling and layout               |
| React Icons        | Icon support for star ratings    |
| HTML/CSS           | Structure and styling            |

---

## 📂 Folder Structure (if part of a larger project)

```
/src
 └── App.js         // Main React component
 └── index.js       // Entry point
 └── index.css      // Global styles (optional)
```

---

## ⚙️ Component Logic Breakdown

### State Management

| State Variable | Purpose |
|----------------|---------|
| `hover`        | Tracks hovered star index for live rating preview |
| `star`         | Holds selected rating value (1-5) |
| `feedback`     | Object storing form inputs (`student`, `Id`, `feedback`, `stars`) |
| `showModal`    | Boolean controlling modal visibility |

---

### ⭐ Star Rating Behavior

- On **mouse hover**, the stars are highlighted up to the current index.
- On **mouse leave**, the highlight returns to the selected rating.
- On **mouse down (click)**, the rating is locked in.
- Rating can be changed by hovering again and clicking a new value.

---

### 📤 Form Submission

- The form captures all input values and updates the `feedback` state.
- On `submit`, a modal pops up summarizing the collected data.
- Modal includes the student's name, rating, GR ID, and feedback text.
- Modal can be closed with a "Close" button that resets the visibility state.

---

## 🧪 Example Use Case

> A school admin system integrates this form to collect post-class feedback from students about faculty sessions, aggregating data for quality assessments.

---

## ✅ Validation Rules

- **Student Name** is a required field.
- **Feedback** text is optional but recommended.
- **GR ID** must be a number (optional).
- **Star Rating** is optional, but encouraged.

---

## 🖼️ UI Components

| Element             | Description |
|---------------------|-------------|
| `<input type="text">` | For student name |
| `<input type="number">` | For GR ID |
| `<textarea>`         | For detailed feedback |
| `<FaStar />`         | Star icons for rating |
| Bootstrap Modal      | For confirmation display |

---

## 📈 Possible Improvements

- Store feedback data in localStorage or a backend database.
- Add form validation libraries like `Formik` or `Yup`.
- Make the star component reusable and separate from the form logic.
- Add animations for the modal or stars using `Framer Motion`.

---

## 📦 How to Run

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open your browser at `http://localhost:3000`.

---

## 🔗 Dependencies

- `react`
- `react-dom`
- `react-icons`
- `bootstrap`

Install them via:

```bash
npm install react-icons bootstrap
```

---

## 📄 License

This project is open-source and free to use for educational and demonstration purposes.
