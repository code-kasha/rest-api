# REST API – User Management

**Assignment:** Build a RESTful API using Node.js and Express (100 marks)

**Please check the screenshots folder if the screenshot.docx is not clear**

---

## 👤 Author

| Field          | Details                                                                  |
| -------------- | ------------------------------------------------------------------------ |
| **Name**       | Akash Damle                                                              |
| **GitHub**     | [@code-kasha](https://github.com/code-kasha)                             |
| **Repository** | [github.com/code-kasha/rest-api](https://github.com/code-kasha/rest-api) |

---

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [User Object Structure](#user-object-structure)
- [Middleware](#middleware)
- [Error Handling](#error-handling)
- [Testing](#testing)
- [Project Structure](#project-structure)

---

## Overview

This project implements a simple RESTful API for managing users. It covers core backend concepts including:

- Express routing and HTTP methods (GET, POST, PUT, DELETE)
- Request logging middleware
- Validation middleware for required fields
- Proper HTTP status codes and error responses
- In-memory data storage using an array

---

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Data Store:** In-memory array (no database)
- **Testing Tool:** ThunderClient

---

## Getting Started

### Prerequisites

- Node.js (v21 or above)
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/code-kasha/rest-api.git

# 2. Navigate into the project directory
cd rest-api

# 3. Install dependencies
npm install

# 4. Start the server
npm run dev
```

The server will start on `http://localhost:3000` by default.

---

## API Endpoints

| Method   | Endpoint     | Description         | Status Codes        |
| -------- | ------------ | ------------------- | ------------------- |
| `GET`    | `/users`     | Fetch all users     | `200`               |
| `GET`    | `/users/:id` | Fetch a user by ID  | `200`, `404`        |
| `POST`   | `/user`      | Add a new user      | `201`, `400`        |
| `PUT`    | `/user/:id`  | Update a user by ID | `200`, `400`, `404` |
| `DELETE` | `/user/:id`  | Delete a user by ID | `200`, `404`        |

### GET `/users`

Returns the full list of users.

```json
[
	{
		"id": "1",
		"firstName": "Anshika",
		"lastName": "Agarwal",
		"hobby": "Teaching"
	}
]
```

### GET `/users/:id`

Returns a single user matching the given ID.

```json
{
	"id": "1",
	"firstName": "Anshika",
	"lastName": "Agarwal",
	"hobby": "Teaching"
}
```

### POST `/user`

Creates a new user. Requires `firstName`, `lastName`, and `hobby` in the request body.

**Request Body:**

```json
{
	"firstName": "Akash",
	"lastName": "Damle",
	"hobby": "Coding"
}
```

### PUT `/user/:id`

Updates an existing user by ID. At least one field (`firstName`, `lastName`, or `hobby`) must be provided.

**Request Body:**

```json
{
	"hobby": "Reading"
}
```

### DELETE `/user/:id`

Deletes the user with the specified ID.

---

## User Object Structure

```json
{
	"id": "1",
	"firstName": "Anshika",
	"lastName": "Agarwal",
	"hobby": "Teaching"
}
```

| Field       | Type     | Description                      |
| ----------- | -------- | -------------------------------- |
| `id`        | `string` | Auto-generated unique identifier |
| `firstName` | `string` | User's first name                |
| `lastName`  | `string` | User's last name                 |
| `hobby`     | `string` | User's hobby                     |

---

## Middleware

### Request Logger

Logs details of every incoming request to the console:

- HTTP Method
- Request URL
- Response Status Code
- Timestamp

### Validation Middleware

Applied to `POST /user` and `PUT /user/:id` routes:

- **POST:** Validates that `firstName`, `lastName`, and `hobby` are all present in the request body.
- **PUT:** Validates that at least one valid field is provided.
- Returns `400 Bad Request` with a descriptive error message if validation fails.

---

## Error Handling

| Scenario                | Status Code | Response                                                             |
| ----------------------- | ----------- | -------------------------------------------------------------------- |
| User not found          | `404`       | `{ "error": "User not found" }`                                      |
| Missing required fields | `400`       | `{ "error": "Missing required fields: firstName, lastName, hobby" }` |
| Successful creation     | `201`       | New user object                                                      |
| Successful operation    | `200`       | Result data or success message                                       |

---

## Testing

The API was tested using **ThunderClient**.  
Screenshots of all test results are included in the submission document.

Tests cover:

- Fetching all users
- Fetching a specific user (valid and invalid ID)
- Creating a user (with and without required fields)
- Updating a user (valid and invalid ID)
- Deleting a user (valid and invalid ID)

---

## Project Structure

```
rest-api/
├── index.js          # Entry point – server setup and route registration
├── routes/
│   └── users.js      # All user-related route handlers
├── middleware/
│   ├── logger.js     # Request logging middleware
│   └── validate.js   # Validation middleware
├── data/
│   └── users.js      # In-memory users array
├── package.json
└── README.md
```

---

## License

This project is created for academic purposes as part of a Node.js & Express assignment.
