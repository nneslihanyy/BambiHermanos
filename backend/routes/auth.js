const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User.js");

const generateRandomAvatar = () => {
  const randomAvatar = Math.floor(Math.random() * 71);
  return `https://i.pravatar.cc/300?img=${randomAvatar}`;
};

// POST /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, password } = req.body;
    const defaultAvatar = generateRandomAvatar();
    // Şifreyi bcrypt ile hashle
    const hashedPassword = await bcrypt.hash(password, 10); // 10 salting rounds kullanarak hash oluştur

    // Yeni kullanıcı nesnesini oluştur
    const newUser = new User({ firstName, lastName, email, phoneNumber, password: hashedPassword ,  avatar: defaultAvatar,});

    // Yeni kullanıcıyı veritabanına kaydet
    await newUser.save();

    // Başarılı yanıt gönder
    res.status(201).json(newUser);
  } catch (error) {
    // Hata durumunda uygun hata mesajını gönder
    console.error('Kayıt hatası:', error);
    res.status(500).json({ error: 'Kayıt sırasında bir hata oluştu' });
  }
});
//Kullanıcı girişi (login)
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid email." });
    }

    const isPasswordValid = await bcrypt.compare(password,user.password)
    if(!isPasswordValid){
      return res.status(401).json({ error: "Invalid password." });
    }
    res.status(200).json({
      id: user._id,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;
