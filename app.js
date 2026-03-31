import express from "express"
import users from "./data/users.js"

import logger from "./middleware/loggger.js"
import { validateUser, validateUserUpdate } from "./middleware/validation.js"

const app = express()

app.use(express.json())
app.use(logger)

// User List
app.get("/users", (req, res) => {
	res.status(200).json({
		status: "200 OK",
		message: "User List",
		users: users,
	})
})

// User Details
app.get("/users/:id", (req, res) => {
	const userId = req.params.id

	const user = users.find((user) => String(user.id) === userId) // ← String()

	if (!user) {
		return res.status(404).json({ message: `User not found` }) // ← return
	}

	res.status(200).json(user)
})

// User Create
app.post("/user", validateUser, (req, res) => {
	const nextId = users.length + 1
	const firstName = req.body.firstName
	const lastName = req.body.lastName
	const hobby = req.body.hobby

	const newUser = {
		id: String(nextId), // ← store as string to stay consistent
		firstName: firstName,
		lastName: lastName,
		hobby: hobby,
	}

	users.push(newUser)

	res.status(201).json(newUser)
})

// User Update
app.put("/user/:id", validateUserUpdate, (req, res) => {
	const userId = req.params.id

	const user = users.find((user) => String(user.id) === userId) // ← String()

	if (!user) {
		return res.status(404).json({ message: `User not found` }) // ← return
	}

	const keys = Object.keys(user)

	keys.forEach((key) => {
		if (key === "id") return
		if (req.body[key] !== undefined) user[key] = req.body[key]
	})

	res.status(200).json(user) // ← 200 not 201
})

// User Delete
app.delete("/user/:id", (req, res) => {
	const userId = req.params.id

	const userIndex = users.findIndex((user) => String(user.id) === userId)

	if (userIndex === -1) {
		return res.status(404).json({ message: `User not found` })
	}

	users.splice(userIndex, 1)

	res.status(200).json({ status: "200 OK", message: `User deleted` })
})

app.use((err, req, res, next) => {
	console.error(err.message)
	res.status(500).json({
		status: "500 Internal Server Error",
		message: err.message,
	})
})

app.listen(3000, () => console.log("Server running on http://localhost:3000"))
