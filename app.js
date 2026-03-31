import express from "express"
import users from "./data/users.js"

import logger from "./middleware/loggger.js"
import { validateUser, validateUserUpdate } from "./middleware/validation.js"

const app = express()

// Parse incoming JSON request bodies
app.use(express.json())

// Log every request's method, URL, and status code
app.use(logger)

// GET /users — returns the full list of users
app.get("/users", (req, res) => {
	res.status(200).json({
		status: "200 OK",
		message: "User List",
		users: users,
	})
})

// GET /users/:id — returns a single user by ID
app.get("/users/:id", (req, res) => {
	const userId = req.params.id

	// Convert id to string for consistent comparison
	const user = users.find((user) => String(user.id) === userId)

	// Return 404 if no user matches the given ID
	if (!user) {
		return res.status(404).json({ message: `User not found` })
	}

	res.status(200).json(user)
})

// POST /user — creates a new user
// validateUser middleware checks that all required fields are present
app.post("/user", validateUser, (req, res) => {
	// Auto-generate ID based on current array length
	const nextId = users.length + 1
	const firstName = req.body.firstName
	const lastName = req.body.lastName
	const hobby = req.body.hobby

	// Build the new user object
	const newUser = {
		id: String(nextId), // Store as string to stay consistent with params
		firstName: firstName,
		lastName: lastName,
		hobby: hobby,
	}

	// Add the new user to the in-memory array
	users.push(newUser)

	// Return 201 Created with the new user object
	res.status(201).json(newUser)
})

// PUT /user/:id — updates an existing user by ID
// validateUserUpdate middleware checks that at least one valid field is provided
app.put("/user/:id", validateUserUpdate, (req, res) => {
	const userId = req.params.id

	// Find the user by ID
	const user = users.find((user) => String(user.id) === userId)

	// Return 404 if no user matches the given ID
	if (!user) {
		return res.status(404).json({ message: `User not found` })
	}

	// Update only the fields provided in the request body, skip id
	const keys = Object.keys(user)
	keys.forEach((key) => {
		if (key === "id") return // Never overwrite the ID
		if (req.body[key] !== undefined) user[key] = req.body[key]
	})

	res.status(200).json(user)
})

// DELETE /user/:id — deletes a user by ID
app.delete("/user/:id", (req, res) => {
	const userId = req.params.id

	// Find the index of the user in the array
	const userIndex = users.findIndex((user) => String(user.id) === userId)

	// Return 404 if no user matches the given ID
	if (userIndex === -1) {
		return res.status(404).json({ message: `User not found` })
	}

	// Remove the user from the array
	users.splice(userIndex, 1)

	res.status(200).json({ status: "200 OK", message: `User deleted` })
})

// Global error handler — catches any unhandled errors and returns JSON
app.use((err, req, res, next) => {
	console.error(err.message)
	res.status(500).json({
		status: "500 Internal Server Error",
		message: err.message,
	})
})

app.listen(3000, () => console.log("Server running on http://localhost:3000"))
