# Rocket Link | Link Sharing App

## Overview

Rocket Link is a web application that allows users to create personalized pages to share all their links in one place, similar to linktr.ee. Users can register, log in, create, update, and delete links, and manage their profile through the user-friendly interface.

## Features

- User Registration and Login
- Profile Management
- Link Management (Create, Read, Update, Delete)
- User Dashboard
- Admin Panel

## Frontend

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/rocket-link-frontend.git
    ```
2. Navigate to the project directory:
    ```bash
    cd rocket-link-frontend
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```

### File Structure

- `login.js`: Handles user login and registration.
- `user.js`: Displays the user's profile page with their links.
- `admin.js`: Admin panel for managing user links.

## Backend
Backend developed by [Mustafa Kemal Gördesli](https://github.com/mustafakemalgordesli). You can find the relevant repository [here](https://github.com/mustafakemalgordesli/rocket-link-backend)
### Base URL

https://rocket-link-backend.vercel.app/api


### User Endpoints

- **Register:** `/users/register` [POST]
    ```json
    {
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "password": "string",
        "username": "string"
    }
    ```

- **Login:** `/users/login` [POST]
    ```json
    {
        "username": "string",
        "password": "string"
    }
    ```

- **Update Profile Picture:** `/users/profilepic` [POST]
    - Header: `Authorization: Bearer {{token}}`
    - FormData: `profilepic: image`

- **Get User Info:** `/users/` [GET]
    - Header: `Authorization: Bearer {{token}}`

### Link Endpoints

- **Create Link:** `/links/` [POST]
    - Header: `Authorization: Bearer {{token}}`
    - Body:
    ```json
    {
        "title": "string",
        "link": "string"
    }
    ```

- **Get All User Links (Admin):** `/links/` [GET]
    - Header: `Authorization: Bearer {{token}}`

- **Get Active Links by Username:** `/links/:username` [GET]

- **Update Link:** `/links/:id` [PUT]
    - Header: `Authorization: Bearer {{token}}`
    - Body:
    ```json
    {
        "title": "string",
        "link": "string"
    }
    ```

- **Delete Link:** `/links/:id` [DELETE]
    - Header: `Authorization: Bearer {{token}}`

## Contribution

Feel free to fork this project, create a feature branch, and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.
