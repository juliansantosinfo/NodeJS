const User = require("../models/User");

module.exports = {
    async save(req, res) {
        var { name, email, phone, birth, color } = req.body;

        // formate birth
        [day, month, year] = dateString = birth.split("/");

        birth = new Date(year, month - 1, day);

        const user = await User.create({
            name,
            email,
            phone,
            birth,
            color,
        });
        return res.json({
            status: true,
            msg: "success",
            user: user,
        });
    },

    async remove(req, res) {
        const { id } = req.body;
        try {
            const user = await User.findByPk(id);
            if (user) {
                await user.destroy();
                res.json({
                    status: true,
                    msg: "success",
                    user: user
                });
            } else {
                res.json({
                    status: false,
                    msg: "user not exists",
                    user: null
                });
            }
        } catch (error) {
            res.json(error);
        }
    },

    async update(req, res) {

        const user = await User.findByPk(req.body.id);

        if (user) {

            Object.keys(req.body).forEach((element, index) => {
                user.setDataValue(element, req.body[element]);
            });

            try {
                await user.save();
                res.json({
                    status: true,
                    msg: "success",
                    user: user,
                });
            } catch (error) {
                res.json({
                    status: false,
                    msg: "error in update : " + error,
                    user: null,
                });
            }
            
        } else {
            res.json({
                status: false,
                msg: "user not exists",
                user: null,
            });
        }
    },

    async list(req, res) {
        const userId = req.query.id;

        if (userId) {
            const user = await User.findByPk(userId);
            if (user) {
                return res.json({
                    status: true,
                    msg: "success",
                    user: user,
                });
            } else {
                return res.json({
                    status: false,
                    msg: "user not exists.",
                    user: null,
                });
            }
        } else {
            const users = await User.findAll();
            return res.json({
                status: true,
                msg: "success",
                users: users,
            });
        }
    },
};
