const { update } = require('../models/User');
const User = require('../models/User');

module.exports = {

    async save(req, res) {
        const { name, email, phone } = req.body;
        const user = await User.create({
            name,
            email,
            phone
        });
        return res.json(user);
    },

    async remove(req, res) {
        const { id } = req.body;
        try {
            const user = await User.findByPk(id);
            if (user) {
                await user.destroy();
                res.json({
                    deleted: true,
                    msg: "success"
                });
            } else {
                res.json({
                    deleted: false,
                    msg: "user not exists"
                })
            }
        } catch (error) {
            res.json(error);
        }
    },

    async update(req, res) {
        const { id, name, email, phone} = req.body;
        const user = await User.findByPk(id);
        if (user) {
            user.name = name;
            user.email = email;
            user.phone = phone;
            user.save();
            res.json({
                changed: true,
                msg: "success",
                user: user
            })
        } else {
            res.json({
                changed: false,
                msg: "user not exists"
            })
        }
    },

    async list(req, res) {
        const users = await User.findAll();
        return res.json(users);
    }
}