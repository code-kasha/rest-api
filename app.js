import express from "express"

const app = express()

// User List
app.get("/users", (req, res) => {
	res.status(200).json({ status: "200 OK", message: "User List" })
})

// User Details
app.get("/users/:id", (req, res) => {
	const userId = req.params.id

	res.status(200).json({ status: "200 OK", message: `User ${userId}` })
})

// User Create
app.post("/user", (req, res) => {
	res.status(201).json({ status: "201 CREATED", message: "User Created" })
})

// User Update
app.put("/user/:id", (req, res) => {
	const userId = req.params.id

	res
		.status(201)
		.json({ status: "201 CREATED", message: `User ${userId} Updated` })
})

// User Delete
app.delete("/user/:id", (req, res) => {
	const userId = req.params.id

	res.status(200).json({ status: "200 OK", message: `User ${userId} Deleted` })
})

app.listen(3000)
