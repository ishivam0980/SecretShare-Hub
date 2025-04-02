# SecretShare Hub

## 📝 Overview

SecretShare Hub is a web application that allows users to discover, create, and manage secrets from users around the world. It leverages the [Secrets API](https://secrets-api.appbrewery.com/) to provide a user-friendly interface for interacting with secrets.

## ✨ Features

- Browse through 50+ user secrets
- View secret details including scores, usernames, and creation timestamps
- Create your own secrets with custom messages and scores
- Update and delete secrets that you've created
- User-friendly interface with responsive design

## 📚 Technology Stack

- **Backend**: Express.js
- **Frontend**: EJS (Embedded JavaScript templates)
- **HTTP Client**: Axios for API requests
- **Styling**: Custom CSS with responsive design
- **Icons**: Font Awesome
- **Fonts**: Poppins, Roboto Mono (Google Fonts)

## 🚀 How to Use

    Prerequisites

- Node.js (version 14 or above)
- npm (Node Package Manager)

    Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ishivam0980/SecretShare-Hub.git
   cd SecretShare-Hub
   ```
2. Install dependencies:

   ```bash
   npm install 
   ```
3. Update the bearer token:
   Open `index.js` and replace the `bearerToken` value with your own:

   ```javascript
   const bearerToken = "your-bearer-token-here";
   ```

   > ⚠️ **Important**:The bearerToken can be generated using the website : https://secrets-api.appbrewery.com/
   >

    Running the Application

1. Start the server:

   ```bash
   node index.js
   ```
2. Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

## 📋 API Endpoints

The application interacts with the following Secrets API endpoints:

| Method | Endpoint      | Description                           |
| ------ | ------------- | ------------------------------------- |
| GET    | /secrets/{id} | Retrieve a specific secret by ID      |
| POST   | /secrets      | Create a new secret                   |
| PUT    | /secrets/{id} | Replace an existing secret completely |
| PATCH  | /secrets/{id} | Update parts of an existing secret    |
| DELETE | /secrets/{id} | Delete a secret                       |

## 💡 How It Works

- **View Secret**: Fetches a secret by its ID
- **Create Secret**: Posts a new secret with your message and score
- **Replace Secret**: Completely replaces an existing secret with new data
- **Update Secret**: Partially updates an existing secret
- **Delete Secret**: Removes a secret from the database

> **Note**: 
>
> * You are initially provided with 50 secrets of different users. You can further create your own.
>
> * You can only modify (update, replace, delete) secrets that you've created with your account.

## 🔒 Security Notes

- Each secret you create is associated with your username
- Keep your bearer token secure and don't share it publicly
- The App Brewery may clear all data periodically, so don't rely on this for long-term storage

## 🧩 Project Structure

```
SecretShare-Hub/
├── index.js                # Main server file
├── package.json            # Project dependencies
├── public/                 # Static assets
└── views/
    └── index.ejs           # Main application view
```

## 📌 Additional Resources

- [Secrets API Documentation](https://secrets-api.appbrewery.com/)
- [Express.js Documentation](https://expressjs.com/)
- [EJS Documentation](https://ejs.co/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
