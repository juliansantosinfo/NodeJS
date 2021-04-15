const User = require("../models/User");

module.exports = {

    async save(req, res) {

        try {
            var { name, email, phone, birth, color } = req.body;
            
            if(birth.indexOf("/") >= 0) {
                [day, month, year] = birth.split("/");
            } else if (birth.indexOf("-") >= 0) {
                [year, month, day] = birth.split("-");
            }

            birth = new Date(year, month - 1, day);

            const user = await User.create({
                name,
                email,
                phone,
                birth,
                color,
            });
            res.json({
                status: true,
                msg: "success",
                user: user,
            });
        } catch (error) {
            res
            .status(400)
            .json({
                status: false,
                msg: "error in insert - " + error,
                user: null,
            });
        }
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
                res.status(400).json({
                    status: false,
                    msg: "user not exists",
                    user: null
                });
            }
        } catch (error) {
            res.status(400).json(error);
        }
    },

    async update(req, res) {

        try {

            var user = await User.findByPk(req.body.id);

            if (user) {

                await Object.keys(req.body).forEach((element, index) => {
                    user.setDataValue(element, req.body[element]);
                });

                await user.save();

                res.json({
                    status: true,
                    msg: "success",
                    user: user,
                });

            } else {
                res.status(400).json({
                    status: false,
                    msg: "user not exists",
                    user: null,
                });
            }

        } catch (error) {
            res.status(400).json({
                status: false,
                msg: "error in update : " + error,
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
                return res.status(400).json({
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
