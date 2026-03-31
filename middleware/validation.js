export const validateUser = (req, res, next) => {
	if (!req.body || Object.keys(req.body).length === 0) {
		return res.status(400).json({
			status: "400 Bad Request",
			message: "Missing required fields: firstName, lastName, hobby",
		})
	}

	const requiredFields = ["firstName", "lastName", "hobby"]
	const missingFields = requiredFields.filter((field) => !req.body[field])

	if (missingFields.length > 0) {
		return res.status(400).json({
			status: "400 Bad Request",
			message: `Missing required fields: ${missingFields.join(", ")}`,
		})
	}

	next()
}

export const validateUserUpdate = (req, res, next) => {
	if (!req.body || Object.keys(req.body).length === 0) {
		return res.status(400).json({
			status: "400 Bad Request",
			message: "At least one valid field required: firstName, lastName, hobby",
		})
	}

	const validFields = ["firstName", "lastName", "hobby"]
	const hasValidField = validFields.some(
		(field) => req.body[field] !== undefined,
	)

	if (!hasValidField) {
		return res.status(400).json({
			status: "400 Bad Request",
			message: "At least one valid field required: firstName, lastName, hobby",
		})
	}

	next()
}
