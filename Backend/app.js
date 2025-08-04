const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const cookieParser = require('cookie-parser'); // ⬅ Di chuyển lên trước

const connectToDb = require('./db/db')
const userRoutes = require('./routes/user.routes')
const captainRoutes = require('./routes/captain.routes')

// Middleware
app.use(cors(
    {
        origin: 'http://localhost:3000', // ✅ Đúng origin frontend
        credentials: true                // ✅ Cho phép gửi cookie qua CORS
    }
));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser()); // ⬅ Đặt trước các route sử dụng cookie

connectToDb();

app.use('/users', userRoutes)
app.use('/captains', captainRoutes)


module.exports = app;
