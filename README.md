# Portfolio Management Table – Documentation

# Overview
This React project displays a portfolio of loan records in a structured table format in a portfolio option in sidebar. Users can filter, sort, and add new loan records via a pop-up form. The project utilizes React Table for efficient data handling and UI components.

---

# Project Structure

/PortfolioApp  
│── /src
│   ├── /components
│   │   ├── Sidebar.js
│   │   ├── Sidebar.css
│   │   ├── Table.js
│   ├── /pages
│   │   ├── Portfolio.js
│   │   ├── Portfolio.css
│   │   ├── Dashboard.js
│   │   ├── Notifications.js
│   │   ├── Notices.js
│   │   ├── Auction.js
│   │   ├── DataUpload.js
│   │   ├── ControlPanel.js
│   │   ├── UserManagement.js
│   │   ├── Permissions.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│── package.json
│── README.md

# 1. Portfolio.js (Main Component)
This is the core component that:
- Displays a table of loan records.
- Implements filtering, sorting, and search functionality.
- Provides an "Upload" button that opens a form to add new loan records.

# 2. Portfolio.css (Styling)
Contains styles for:
- The table layout.
- Form pop-up (modal).
- Buttons and filters.

# 3. App.js (Main App Entry)
Imports and renders the Portfolio component.

# 4. index.js (Root File)
Mounts the React app to the DOM.

---

## Libraries & Technologies Used

# 1. React.js
- Core framework for building UI components.

# 2. @tanstack/react-table (React Table)
- Efficiently handles tabular data.
- Provides sorting, filtering, and row management.

# 3. CSS (Styling)
- Custom styles for form layout and table appearance.

---

## Key Features & Functionality

# 1. Data Handling
- Loan records are stored in the useState hook.
- New records can be added dynamically.

# 2. Filtering & Sorting
- A search bar filters loans by Loan No, Borrower Name, or Amount.
- Sort buttons organize records based on Amount, Region, or Loan Type.

# 3. Upload Feature (Modal Form)
- A form pops up when the user clicks the "Upload" button.
- Form fields are structured in a two-column layout.
- Upon submission, the new loan is added to the table.


---

## How It Works

1. The user enters a search term to filter records.
2. The "More Filters" button provides sorting options.
3. Clicking "Upload" opens a form modal.
4. The user fills in the form and clicks "Submit," adding a new loan entry.
5. Clicking "Reset" reloads the page.

---

## Conclusion
This project is a simple React-based table management system with search, sorting, and an upload form. It efficiently handles data using React Table while keeping the UI responsive and user-friendly.

## Deploy Link
https://devpraja.github.iyo/portfolio-react/