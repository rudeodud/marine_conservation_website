const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.post("/", async (req, res) => {
    try {
        const {
            userId,
            donorName,
            amount,
        } = req.body;

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
                userId,
                donorName,
                amount,
            ]
        );

        res.status(201).json({
            success: true,
            message: "후원 완료",
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "서버 오류",
        });
    }
});

router.get("/stats/:userId", async (req, res) => {
    try {
        const userId =
            req.params.userId;

        const [totalRows] =
            await db.execute(
                `
                SELECT
                IFNULL(
                    SUM(amount),
                    0
                ) AS total
                FROM donations
                `
            );

        const [myRows] =
            await db.execute(
                `
                SELECT
                IFNULL(
                    SUM(amount),
                    0
                ) AS total
                FROM donations
                WHERE user_id = ?
                `,
                [userId]
            );

        res.json({
            success: true,
            totalDonation:
                totalRows[0].total,
            myDonation:
                myRows[0].total,
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "서버 오류",
        });
    }
});

module.exports = router;