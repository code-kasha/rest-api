// Logger middleware — logs method, URL, and status code for every request
const logger = (req, res, next) => {
	// "finish" fires after the response is sent, so status code is available
	res.on("finish", () => {
		console.log(
			`Method:[${req.method}] Url:${req.url} - Status:${res.statusCode}`,
		)
	})

	// Pass control to the next middleware or route handler
	next()
}

export default logger
