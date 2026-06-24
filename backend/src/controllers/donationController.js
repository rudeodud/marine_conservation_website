const db = require("../config/db");

const createDonation = async (req, res) => {
    try {
        const { userId, amount } = req.body;

        const [users] = await db.execute(
            "SELECT * FROM users WHERE id = ?",
            [userId]
        );

        if (users.length === 0) {
            return res.status(404).json({
                success: false,
                message: "사용자 없음"
            });
        }

        const user = users[0];

        await db.execute(
            `
            INSERT INTO donations
            (
                user_id,
                donor_name,
                amount
            )
            VALUES (?, ?, ?)
            `,
            [
                user.id,
                user.name,
                amount
            ]
        );

        return res.status(201).json({
            success: true,
            message: "후원 완료"
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "서버 오류"
        });
    }
};

module.exports = {
    createDonation
};