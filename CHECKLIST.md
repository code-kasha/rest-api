# ✅ Assignment Checklist – RESTful API (Node.js & Express)

> **Student:** Akash Damle | **GitHub:** [@code-kasha](https://github.com/code-kasha)  
> **Repo:** [github.com/code-kasha/rest-api](https://github.com/code-kasha/rest-api)  
> **Total Marks: 100**

---

## 1. Project Initialization — 5 Marks

| #   | Task                                                                          | Marks | Done |
| --- | ----------------------------------------------------------------------------- | ----- | ---- |
| 1.1 | Set up a new Node.js project (`npm init`)                                     | –     | ✅   |
| 1.2 | Install Express (`npm install express`)                                       | –     | ✅   |
| 1.3 | Entry point (`index.js` or `app.js`) created and server starts without errors | 5     | ✅   |

---

## 2. REST API Routes — 25 Marks

| #   | Route              | Description                    | Marks | Done |
| --- | ------------------ | ------------------------------ | ----- | ---- |
| 2.1 | `GET /users`       | Returns array of all users     | 5     | ✅   |
| 2.2 | `GET /users/:id`   | Returns a single user by ID    | 5     | ✅   |
| 2.3 | `POST /user`       | Adds a new user to the list    | 5     | ✅   |
| 2.4 | `PUT /user/:id`    | Updates an existing user by ID | 5     | ✅   |
| 2.5 | `DELETE /user/:id` | Deletes a user by ID           | 5     | ✅   |

---

## 3. User Object Structure

| #   | Task                                                                | Done |
| --- | ------------------------------------------------------------------- | ---- |
| 3.1 | User object has `id`, `firstName`, `lastName`, and `hobby` fields   | ✅   |
| 3.2 | `id` is auto-generated (e.g., using `uuid` or incrementing counter) | ✅   |

---

## 4. Middleware — 30 Marks

### 4a. Request Logger — 15 Marks

| #   | Task                                                      | Marks | Done |
| --- | --------------------------------------------------------- | ----- | ---- |
| 4.1 | Middleware logs HTTP **method** for each request          | –     | ✅   |
| 4.2 | Middleware logs request **URL** for each request          | –     | ✅   |
| 4.3 | Middleware logs **status code** for each request          | –     | ✅   |
| 4.4 | Logger is applied globally (all routes) using `app.use()` | 15    | ✅   |

### 4b. Validation Middleware — 15 Marks

| #   | Task                                                                        | Marks | Done |
| --- | --------------------------------------------------------------------------- | ----- | ---- |
| 4.5 | Validation middleware applied to `POST /user`                               | –     | ✅   |
| 4.6 | Validation middleware applied to `PUT /user/:id`                            | –     | ✅   |
| 4.7 | Returns `400 Bad Request` with error message if required fields are missing | –     | ✅   |
| 4.8 | POST validates: `firstName`, `lastName`, and `hobby` are present            | –     | ✅   |
| 4.9 | PUT validates: at least one valid field is provided                         | 15    | ✅   |

---

## 5. Error Handling — 10 Marks

| #   | Task                                                     | Marks | Done |
| --- | -------------------------------------------------------- | ----- | ---- |
| 5.1 | Returns `200 OK` for successful GET/PUT/DELETE           | –     | ✅   |
| 5.2 | Returns `201 Created` for successful POST                | –     | ✅   |
| 5.3 | Returns `404 Not Found` when user ID doesn't exist       | –     | ✅   |
| 5.4 | Returns `400 Bad Request` for invalid/missing input      | –     | ✅   |
| 5.5 | Error responses include meaningful, descriptive messages | 10    | ✅   |

---

## 6. Data Source

| #   | Task                                                      | Done |
| --- | --------------------------------------------------------- | ---- |
| 6.1 | Users stored in an in-memory array (no database required) | ✅   |
| 6.2 | Array is initialized with at least one sample user        | ✅   |

---

## 7. Submission Requirements — 30 Marks

### 7a. Code Comments — 5 Marks

| #   | Task                                       | Marks | Done |
| --- | ------------------------------------------ | ----- | ---- |
| 7.1 | Comments explain the purpose of each route | –     | ✅   |
| 7.2 | Comments explain middleware logic          | –     | ✅   |
| 7.3 | Comments explain error handling logic      | 5     | ✅   |

### 7b. API Testing Screenshots — 25 Marks

| #    | Test Case                                                 | Marks | Done |
| ---- | --------------------------------------------------------- | ----- | ---- |
| 7.4  | Screenshot: `GET /users` – returns all users              | –     | ✅   |
| 7.5  | Screenshot: `GET /users/:id` – valid ID, returns user     | –     | ✅   |
| 7.6  | Screenshot: `GET /users/:id` – invalid ID, returns 404    | –     | ✅   |
| 7.7  | Screenshot: `POST /user` – valid body, user created (201) | –     | ✅   |
| 7.8  | Screenshot: `POST /user` – missing fields, returns 400    | –     | ✅   |
| 7.9  | Screenshot: `PUT /user/:id` – valid update, returns 200   | –     | ✅   |
| 7.10 | Screenshot: `PUT /user/:id` – invalid ID, returns 404     | –     | ✅   |
| 7.11 | Screenshot: `DELETE /user/:id` – valid ID, user deleted   | –     | ✅   |
| 7.12 | Screenshot: `DELETE /user/:id` – invalid ID, returns 404  | –     | ✅   |
| –    | Screenshots compiled in a document (PDF/Word)             | 25    | ✅   |

### 7c. Final Submission

| #    | Task                                     | Done |
| ---- | ---------------------------------------- | ---- |
| 7.13 | Code zipped and ready for submission     | ✅   |
| 7.14 | Screenshots document attached separately | ✅   |
| 7.15 | README.md included in the repo           | ✅   |

---

## 📊 Marks Summary

| Section                                | Max Marks | Status |
| -------------------------------------- | --------- | ------ |
| 1. Project Initialization              | 5         | ✅     |
| 2. REST API Routes                     | 25        | ✅     |
| 3. User Object Structure               | –         | ✅     |
| 4. Middleware                          | 30        | ✅     |
| 5. Error Handling                      | 10        | ✅     |
| 6. Data Source                         | –         | ✅     |
| 7. Submission (Comments + Screenshots) | 30        | ✅     |
| **Total**                              | **100**   |        |

---
