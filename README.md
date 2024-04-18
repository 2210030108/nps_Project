# NPS Project

![NPS Project Logo](https://media.istockphoto.com/id/472896728/ro/fotografie/omul-de-afaceri-ap%C4%83s%C3%A2nd-cu-degetul-butonul-de-c%C4%83utare-adresa-ip.jpg?s=1024x1024&w=is&k=20&c=luYraWHV7l6M56V-z2hn3E5TiVUCcBAns5f8OAW6OzI=)

The NPS (Network Scanner) project is a web application that allows users to sign up, log in, and perform various network-related tasks such as locating the location of an IP address, downloading CSV or PDF files of IP address data, and saving data to a database.

## Features

- **User Authentication**: Users can sign up for an account and log in securely to access the application's features.
- **IP Address Location**: Users can enter an IP address and find its geographic location using geolocation services.
- **Data Export**: Users can download IP address data in CSV or PDF format for further analysis or documentation purposes.
- **Database Integration**: IP address data can be saved to a database for storage and retrieval.

## Installation

To run the NPS project locally, follow these steps:

1. Clone the repository:
git clone https://github.com/your-username/nps_Project.git

2. Install dependencies:
npm install

3. Set up environment variables:
- Create a `.env` file in the root directory.
- Define environment variables such as database connection strings, API keys, and other configuration settings.

4. Start the server:
npm start

5. Access the application in your web browser at `http://localhost:3000`.

## Usage

1. **Sign Up**: Create a new account by providing a username, email address, and password.
2. **Log In**: Log in to your account with your username and password.
3. **IP Address Location**: Enter an IP address in the provided input field and click the "Locate" button to find its geographic location.
4. **Data Export**: Use the export feature to download IP address data in CSV or PDF format.
5. **Database Integration**: IP address data is automatically saved to the database when retrieved.

## Technologies Used

- Node.js
- Express.js
- MongoDB (or your preferred database)
- Passport.js (for authentication)
- Geolocation API (for IP address location)
- HTML, CSS, JavaScript
- Bootstrap (optional, for styling)

## Contributing

Contributions to the NPS project are welcome! To contribute, please fork the repository, create a new branch, make your changes, and submit a pull request.
