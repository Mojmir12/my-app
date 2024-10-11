const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = 3001;
const secretKey = 'YOUR_SECRET_KEY';

app.use(cors());
app.use(express.json());

// Připojení k MongoDB Atlas
mongoose.connect('mongodb+srv://mojmir12:elastiko12MS@cluster0.sit8o.mongodb.net/MetalStampingApp?retryWrites=true&w=majority')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Definice schématu pro uživatele
const userSchema = new mongoose.Schema({
    phoneNumber: { type: String, unique: true, required: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// Registrace uživatele
app.post('/api/register', async (req, res) => {
    try {
        const { phoneNumber, password } = req.body;

        // Kontrola, zda uživatel už existuje
        const existingUser = await User.findOne({ phoneNumber });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Heslo hashovat pomocí bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);

        // Vytvořit nového uživatele
        const newUser = new User({ phoneNumber, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully.' });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Přihlášení uživatele
app.post('/api/login', async (req, res) => {
    try {
        const { phoneNumber, password } = req.body;

        // Najít uživatele podle telefonního čísla
        const user = await User.findOne({ phoneNumber });
        if (!user) {
            return res.status(400).json({ message: 'Invalid phone number or password' });
        }

        // Ověřit heslo
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid phone number or password' });
        }

        // Vygenerovat JWT token
        const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Spuštění serveru
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



