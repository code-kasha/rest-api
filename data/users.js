const rawUsers = [
	{ firstName: "Anshika", lastName: "Agarwal", hobby: "Teaching" },
	{ firstName: "Ravi", lastName: "Sharma", hobby: "Coding" },
	{ firstName: "Priya", lastName: "Mehta", hobby: "Painting" },
	{ firstName: "Arjun", lastName: "Verma", hobby: "Gaming" },
	{ firstName: "Sneha", lastName: "Iyer", hobby: "Dancing" },
	{ firstName: "Karan", lastName: "Patel", hobby: "Cooking" },
	{ firstName: "Neha", lastName: "Gupta", hobby: "Reading" },
	{ firstName: "Rohit", lastName: "Joshi", hobby: "Cycling" },
	{ firstName: "Pooja", lastName: "Nair", hobby: "Sketching" },
	{ firstName: "Vikram", lastName: "Singh", hobby: "Photography" },
	{ firstName: "Aarav", lastName: "Desai", hobby: "Hiking" },
	{ firstName: "Meera", lastName: "Pillai", hobby: "Yoga" },
	{ firstName: "Siddharth", lastName: "Rao", hobby: "Music" },
	{ firstName: "Kavya", lastName: "Bhat", hobby: "Writing" },
]

export const users = rawUsers.map((user, index) => ({
	id: String(index + 1),
	...user,
}))

export let nextId = rawUsers.length + 1
