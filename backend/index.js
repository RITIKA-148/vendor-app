// To connect with your mongoDB database
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017', {
// 	name: 'ritikadeep',
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true
// }, err => err ? console.log(err) :
// 	console.log('Connected to ritikadeep database'));
const mongoose = require('mongoose');
const mongoDBUrl = 'mongodb://127.0.0.1:27017/test'; // Replace with your MongoDB URL

// , {
//     //   useNewUrlParser: true,
//     //   "user": "sa",
//     //   "pass": "123456",
//     //   useUnifiedTopology: true
//     }
mongoose.connect(mongoDBUrl)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
// Schema for users of app
const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	bankaccount: {
		type: String,
		required: true,
	},
	Address1: {
		type: String,
        required: true,

	},
});
const User = mongoose.model('users', UserSchema);
User.createIndexes();

// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {

	resp.send("App is Working");

});

app.post("/register", async (req, resp) => {
	try {
        console.log(req.body)
		const user = new User(req.body);
		let result = await user.save();
		result = result.toObject();
		if (result) {
			// delete result.password;
            resp.status(201).json(req.body)
			// resp.send(req.body);
			console.log(result);
		} else {
			console.log("User already register");
            resp.status(200).json(req.body)


		}

	} catch (e) {
        resp.status(500).json("Something went wrong")

        console.log(e)
		// resp.send("Something Went Wrong");
	}
});
app.listen(5000);
