const logger = (req, res, next) => {
	res.on("finish", () => {
		console.log(
			`Method:[${req.method}] Url:${req.url} - Status:${res.statusCode}`,
		)
	})
	next()
}

export default logger
