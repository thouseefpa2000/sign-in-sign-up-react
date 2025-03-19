React Login Form

This is a simple login and signup form built using React.js. It includes an interactive UI with dynamic form switching between login and signup modes.

🚀 Features

Toggle between Login & Signup

Smooth UI design with CSS styling

Dynamic state management using React Hooks

User input fields for Username, Email, and Password

Interactive button styling and hover effects

 📂 Project Structure

```
📦 login-form
├── 📂 src
│   ├── 📂 assets         # Icons for username, email, and password
│   ├── 📂 components     # Reusable components
│   ├── 📜 Login.js       # Main login component
│   ├── 📜 login.css      # Styling for the login page
│   ├── 📜 App.js         # Main App component
│   ├── 📜 index.js       # Entry point
│
├── 📜 README.md          # Project documentation
├── 📜 package.json       # Dependencies and scripts
├── 📜 .gitignore         # Ignored files for Git
```

 🎨 UI Preview

![Login UI Preview](./preview.png) *(Replace with actual screenshot)*

 🛠 Installation & Setup

1. Clone the repository**
  
   git clone https://github.com/yourusername/react-login-form.git
   cd react-login-form
  

2. Install dependencies**
  
   npm install


3. Start the development server**
 
   npm start


4. Open the project in the browser**
  
   http://localhost:3000
  

 🏗 Technologies Used

*React.js - Frontend framework
- CSS - Styling
- React Hooks (useState)** - State management

📝 How It Works

- Clicking **Sign In** switches the form to **Login mode**, hiding the username field.
- Clicking **Sign Up** switches back, revealing the username field.
- The buttons update dynamically based on the current mode.

