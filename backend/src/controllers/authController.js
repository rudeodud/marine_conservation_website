const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {
    findByEmail,
    createUser,
} = require("../models/userModel");

exports.signup = async (req, res) => {
    try {
        const {
            name,
            email,
            password,
        } = req.body;

        const user =
            await findByEmail(email);

        if (user) {
            return res.status(400).json({
                message:
                    "이미 가입된 이메일입니다.",
            });
        }

        const hashedPassword =
            await bcrypt.hash(password, 10);

        await createUser(
            name,
            email,
            hashedPassword
        );

        return res.status(201).json({
            message: "회원가입 성공",
        });
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.login = async (req, res) => {
    try {
        const {
            email,
            password,
        } = req.body;

        const user =
            await findByEmail(email);

        if (!user) {
            return res.status(401).json({
                message:
                    "존재하지 않는 계정",
            });
        }

        const isMatch =
            await bcrypt.compare(
                password,
                user.password
            );

        if (!isMatch) {
            return res.status(401).json({
                message:
                    "비밀번호 오류",
            });
        }

        const token = jwt.sign(
            {
                id: user.id,
                role: user.role,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d",
            }
        );

        return res.json({
            token,

            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        return res.status(500).json(error);
    }
};