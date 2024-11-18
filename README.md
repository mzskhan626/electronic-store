# 🛒 Electronic Store Website

An **Electronic Store Website** built with **Angular** for the frontend and **PHP** for the backend. This application allows users to register, log in, explore various electronic items, add their favorite products to a cart, and proceed to purchase.

The project showcases a seamless integration of modern frontend technologies with robust backend support, providing a user-friendly and efficient e-commerce experience.

---

## 📌 Features

### Frontend

- **User Authentication**:

  - Users can register for a new account with email validation.
  - Secure login functionality with encrypted password storage.
  - Logged-in users can access personalized features such as a saved cart.

- **Product Exploration**:

  - A catalog of electronic items categorized for easy navigation.
  - Users can view detailed product information, including specifications, images, and pricing.

- **Shopping Cart**:

  - Add items to the cart with a single click.
  - Update item quantities directly from the cart page.
  - Remove unwanted items or clear the entire cart with ease.

- **Checkout Process**:

  - A user-friendly interface for reviewing cart contents before purchase.
  - Backend logic ensures accurate pricing and inventory management.

- **Responsive Design**:

  - Mobile-first design ensures compatibility across devices.
  - Optimized UI for desktops, tablets, and smartphones.

- **Interactive UI**:
  - Angular's dynamic components create a seamless browsing experience.
  - Real-time updates to the UI, such as adding/removing items from the cart.

### Backend

- **Data Handling**:

  - PHP-based backend for efficient data management and secure user interactions.
  - MySQL database stores user information, product details, and order history.

- **Order Management**:

  - Orders are processed and stored securely in the backend.
  - Users can view their purchase history and order details.

- **API Integration**:

  - Custom APIs built in PHP allow smooth data transfer between the frontend and backend.
  - Efficient endpoints handle product fetching, user authentication, and order processing.

- **Scalable Structure**:

  - Backend architecture designed to support additional features, such as a payment gateway or admin panel.

- **Error Handling**:
  - Comprehensive error handling ensures reliable user interactions with meaningful feedback for invalid actions.

---

## 🛠️ Technologies Used

### Frontend:

- **Angular**: Component-based architecture for a dynamic and modular UI.
- **TypeScript**: Strongly typed programming for better code maintainability.
- **HTML5 & CSS3**: Clean and responsive design.

### Backend:

- **PHP**: Server-side logic and data management.
- **MySQL**: Relational database for secure and organized data storage.

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (for Angular CLI)
- **Angular CLI**
- **XAMPP** or similar (for PHP and MySQL)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mzskhan626/electronic-store.git
   cd electronic-store
   ```

2. Install dependencies for the frontend:

   ```bash
   npm install
   ```

3. Set up the backend:

   - Copy the `backend` folder into your XAMPP `htdocs` directory (or equivalent).
   - Import the `electronic_store.sql` file into your MySQL database.
   - Configure the database connection in `backend/config.php`.

4. Start the frontend server:

   ```bash
   ng serve
   ```

   Navigate to: [http://localhost:4200/](http://localhost:4200/)

5. Start the backend server:
   - Start your local server (e.g., Apache) via XAMPP.

---

## 🧪 Testing

### Unit Tests:

Run unit tests for frontend components:

```bash
ng test
```

### End-to-End Tests:

Ensure the application behaves as expected:

```bash
ng e2e
```

---

## 🌟 Key Functionalities

1. **User Profiles**:  
   Each user gets a personalized profile, enabling features like a saved cart and order history.

2. **Dynamic Product Filtering**:  
   Users can filter products by categories, price range, or popular items.

3. **Real-Time Cart Updates**:

   - Instant addition or removal of items in the cart.
   - Automatic price calculation based on selected items and quantities.

4. **Admin Panel (Future Enhancement)**:

   - A planned feature to allow product management, order tracking, and user administration.

5. **Secure Checkout**:

   - Backend ensures all transactions are securely processed.
   - Inventory checks prevent overselling.

6. **Error-Free Navigation**:
   - Frontend and backend validations prevent invalid user actions (e.g., empty cart checkout).

---

## 📧 Contact

Developed by **Mohammed Khan**.

- **GitHub**: [mzskhan626](https://github.com/mzskhan626)

---
