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

// Servírování statických souborů z adresáře 'public'
app.use(express.static('public'));

// Připojení k MongoDB Atlas pomocí e-mailu a hesla
mongoose.connect('mongodb+srv://mojmir12:elastiko12MS@cluster0.sit8o.mongodb.net/StampingAplikace?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
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
        console.log('Received registration request with data:', req.body); // Přidáno logování příchozího požadavku

        const { phoneNumber, password } = req.body;

        // Kontrola, zda uživatel už existuje
        const existingUser = await User.findOne({ phoneNumber });
        if (existingUser) {
            console.log('User already exists with phoneNumber:', phoneNumber); // Log, pokud uživatel existuje
            return res.status(400).json({ message: 'User already exists' });
        }

        // Heslo hashovat pomocí bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log('Password hashed:', hashedPassword); // Log heslo po hashování

        // Vytvořit nového uživatele
        const newUser = new User({ phoneNumber, password: hashedPassword });
        await newUser.save();
        console.log('New user created:', newUser); // Log úspěšného vytvoření uživatele

        res.status(201).json({ message: 'User registered successfully.' });
    } catch (error) {
        console.error('Error during registration:', error); // Logovat chybu, pokud nastane
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Přihlášení uživatele
app.post('/api/login', async (req, res) => {
    try {
        console.log('Received login request with data:', req.body); // Logování příchozího požadavku

        const { phoneNumber, password } = req.body;

        // Najít uživatele podle telefonního čísla
        const user = await User.findOne({ phoneNumber });
        if (!user) {
            console.log('User not found with phoneNumber:', phoneNumber); // Log, pokud uživatel není nalezen
            return res.status(400).json({ message: 'Invalid phone number or password' });
        }

        // Ověřit heslo
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log('Password mismatch for user:', phoneNumber); // Log, pokud heslo nesouhlasí
            return res.status(400).json({ message: 'Invalid phone number or password' });
        }

        // Vygenerovat JWT token
        const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
        console.log('User logged in and token generated:', token); // Log úspěšného přihlášení

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Error during login:', error); // Logovat chybu, pokud nastane
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Zapomenuté heslo (Odeslání resetovacího odkazu)
app.post('/api/forgot-password', async (req, res) => {
    try {
        const { phoneNumber } = req.body;

        console.log('Received password reset request for phoneNumber:', phoneNumber); // Logování příchozího požadavku

        // Najít uživatele podle telefonního čísla
        const user = await User.findOne({ phoneNumber });
        if (!user) {
            console.log('User not found with phoneNumber:', phoneNumber); // Log, pokud uživatel není nalezen
            return res.status(400).json({ message: 'User not found' });
        }

        // Vygenerovat token pro resetování hesla
        const resetToken = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '15m' });
        console.log(`Reset token for ${phoneNumber}: http://localhost:3000/reset-password?token=${resetToken}`); // Logování odkazu pro reset hesla

        res.status(200).json({ message: 'Password reset link has been sent.' });
    } catch (error) {
        console.error('Error during password reset request:', error); // Logovat chybu, pokud nastane
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Resetování hesla
app.post('/api/reset-password', async (req, res) => {
    try {
        const { token, newPassword } = req.body;

        console.log('Received password reset request with token:', token); // Logování tokenu pro reset hesla

        // Ověřit token
        const decoded = jwt.verify(token, secretKey);
        const userId = decoded.userId;

        // Najít uživatele podle ID
        const user = await User.findById(userId);
        if (!user) {
            console.log('Invalid token'); // Log, pokud je token neplatný
            return res.status(400).json({ message: 'Invalid token' });
        }

        // Zašifrovat nové heslo
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        await user.save();
        console.log('Password reset successful for user:', userId); // Log úspěšného resetování hesla

        res.status(200).json({ message: 'Password reset successful' });
    } catch (error) {
        console.error('Error during password reset:', error); // Logovat chybu, pokud nastane
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Spuštění serveru
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



