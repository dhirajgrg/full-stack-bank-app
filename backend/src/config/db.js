//===========================================
const dns = require('node:dns');
// Set Node's DNS servers to Google's Public DNS
dns.setServers(['8.8.8.8', '8.8.4.4']);
//============================================

const mongoose = require('mongoose');

// Ensure MONGO_URI and DB_PASSWORD exist before trying to replace
const dbUrl = process.env.MONGO_URI.replace(
	'<db_password>',
	process.env.DB_PASSWORD
);

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(dbUrl);
		console.log(`DB connected successfully!!!`);
	} catch (error) {
		console.error('Unable to connect DB:', error.message);
		process.exit(1);
	}
};

module.exports = connectDB;
