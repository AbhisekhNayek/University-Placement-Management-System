# 🎓 University Placement Management System

## Table of Contents
- [📖 Introduction](#introduction)
- [✨ Features](#features)
- [🛠️ Technology Stack](#technology-stack)
- [⚙️ Installation](#installation)
- [🚀 Usage](#usage)
- [📁 Project Structure](#project-structure)
- [👥 Contributors](#contributors)
- [📜 License](#license)

## 📖 Introduction
The University Placement Management System is designed to streamline and enhance the placement process for universities, students, and companies. Built using the MERN stack, the system provides a user-friendly platform for job matching, communication, and data management.

## ✨ Features
- **Efficient Placement Management**: Automates and streamlines the placement process, reducing manual administrative tasks.
- **User-friendly Interface**: Provides an intuitive interface for students, companies, and administrators.
- **Job Matching Algorithm**: Utilizes machine learning to match students with job opportunities based on their skills and interests.
- **Communication Tools**: Facilitates efficient interaction between students and recruiters.
- **Real-time Updates**: Keeps users informed with real-time notifications and updates.
- **Secure Data Management**: Ensures the security and privacy of user data.

## 🛠️ Technology Stack
- **Frontend**: React.js ⚛️
- **Backend**: Node.js, Express.js 🟢
- **Database**: MongoDB 🍃
- **Machine Learning**: TF-IDF vectorization, Cosine Similarity, Multinomial Naive Bayes for chatbots 🤖
- **Others**: JWT for authentication 🔐, Bootstrap for responsive design 🎨

## ⚙️ Installation

### Prerequisites
- Node.js and npm installed 📦
- MongoDB installed and running 🍃

### Steps
1. **Clone the repository:**
    ```bash
    git clone https://github.com/AbhisekhNayek/University-Placement-Management-System.git
    cd University-Placement-Management-System
    ```

2. **Install backend dependencies:**
    ```bash
    cd backend
    npm install
    ```

3. **Install frontend dependencies:**
    ```bash
    cd ../frontend
    npm install
    ```

4. **Set up environment variables:**
    - Create a `.env` file in the `backend` directory with the following variables:
      ```plaintext
      MONGO_URI=your_mongo_database_uri
      JWT_SECRET=your_jwt_secret
      ```

5. **Run the application:**
    - Start the backend server:
      ```bash
      cd backend
      npm start
      ```
    - Start the frontend server:
      ```bash
      cd ../frontend
      npm start
      ```

6. **Access the application:**
    - Open your browser and navigate to `http://localhost:3000` 🌐

## 🚀 Usage
- **Students**: Create profiles, upload resumes, and apply for job opportunities. 🎓
- **Companies**: Post job openings, view student applications, and schedule interviews. 💼
- **Administrators**: Manage student and company data, track placement statistics, and coordinate the placement process. 🏫


## 👥 Contributors
- [**Abhisekh Nayek**](https://github.com/abhisekhnayek)
- [**Sekh Mehboob**](https://github.com/)
- [**Manab Pratim Maity**](https://github.com/)
- [**Soumya Sankar Das**](https://github.com/)

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

