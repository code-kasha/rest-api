// Validation middleware for POST /user
// Ensures all required fields are present in the request body
export const validateUser = (req, res, next) => {
	// Reject if body is missing or empty
	if (!req.body || Object.keys(req.body).length === 0) {
		return res.status(400).json({
			status: "400 Bad Request",
			message: "Missing required fields: firstName, lastName, hobby",
		})
	}

	// Check which required fields are missing
	const requiredFields = ["firstName", "lastName", "hobby"]
	const missingFields = requiredFields.filter((field) => !req.body[field])

	// Reject if any required field is missing
	if (missingFields.length > 0) {
		return res.status(400).json({
			status: "400 Bad Request",
			message: `Missing required fields: ${missingFields.join(", ")}`,
		})
	}

	// All fields present — pass control to the route handler
	next()
}

// Validation middleware for PUT /user/:id
// Ensures at least one valid field is provided for the update
export const validateUserUpdate = (req, res, next) => {
	// Reject if body is missing or empty
	if (!req.body || Object.keys(req.body).length === 0) {
		return res.status(400).json({
			status: "400 Bad Request",
			message: "At least one valid field required: firstName, lastName, hobby",
		})
	}

	// Check if at least one valid field is present in the body
	const validFields = ["firstName", "lastName", "hobby"]
	const hasValidField = validFields.some(
		(field) => req.body[field] !== undefined,
	)

	// Reject if no valid fields are provided
	if (!hasValidField) {
		return res.status(400).json({
			status: "400 Bad Request",
			message: "At least one valid field required: firstName, lastName, hobby",
		})
	}

	// At least one valid field present — pass control to the route handler
	next()
}
