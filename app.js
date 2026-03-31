import express from "express"
import users from "./data/users.js"

import logger from "./middleware/loggger.js"

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

	const user = users.find((user) => user.id === userId)

	if (!user) {
		res.status(404).json({ message: `User not found` })
	}

	res.status(200).json(user)
})

// User Create
app.post("/user", (req, res) => {
	const nextId = users.length + 1
	const firstName = req.body.firstName
	const lastName = req.body.lastName
	const hobby = req.body.hobby

	const newUser = {
		id: nextId,
		firstName: firstName,
		lastName: lastName,
		hobby: hobby,
	}

	users.push(newUser)

	res.status(201).json(newUser)
})

// User Update
app.put("/user/:id", (req, res) => {
	const userId = req.params.id

	const user = users.find((user) => user.id === userId)

	if (!user) {
		res.status(404).json({ message: `User not found` })
	}

	const keys = Object.keys(user)

	keys.forEach((key) => {
		if (key === "id") return
		user[key] = req.body[key]
	})

	res.status(201).json(user)
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

app.listen(3000)
