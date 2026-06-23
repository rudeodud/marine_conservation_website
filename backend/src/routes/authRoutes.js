const express = require("express");
const bcrypt = require("bcrypt");
const db = require("../config/db");

const router = express.Router();

router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const [exists] = await db.execute(
            "SELECT * FROM users WHERE email = ?",
            [email]
        );

        if (exists.length > 0) {
            return res.status(400).json({
                success: false,
                message: "이미 가입된 이메일입니다."
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await db.execute(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
            [name, email, hashedPassword]
        );

        return res.status(201).json({
            success: true,
            message: "회원가입 성공"
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "서버 오류"
        });
    }

});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const [rows] = await db.execute(
            "SELECT * FROM users WHERE email = ?",
            [email]
        );

        if (rows.length === 0) {
            return res.status(401).json({
                success: false,
                message: "존재하지 않는 계정"
            });
        }

        const user = rows[0];

        const match = await bcrypt.compare(
            password,
            user.password
        );

        if (!match) {
            return res.status(401).json({
                success: false,
                message: "비밀번호 오류"
            });
        }

        return res.status(200).json({
            success: true,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "서버 오류"
        });
    }

});

module.exports = router;