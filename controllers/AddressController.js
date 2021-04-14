const Address = require("../models/Address");
const { update } = require("../models/Address");
const Adress = require("../models/Address");

module.exports = {
    async save(req, res) {
        try {
            const address = await Adress.create(req.body);

            res.json({
                status: true,
                msg: "success",
                address: address,
            });
        } catch (error) {
            res.json({
                status: false,
                msg: "error in insert - " + error,
                address: null,
            });
        }
    },

    async remove(req, res) {
        const { id } = req.body;

        try {
            const address = await Adress.findByPk(id);
            if (address) {
                (await address).destroy();
                res.json({
                    status: true,
                    msg: "success",
                    address: address,
                });
            } else {
                res.json({
                    status: false,
                    msg: "addres not exists.",
                    address: null,
                });
            }
        } catch (error) {
            res.json({
                status: false,
                msg: "error on delete - " + error,
                address: address,
            });
        }
    },

    async update(req, res) {

        try {

            var address = await Address.findByPk(req.body.id);

            if (address) {
                await Object.keys(req.body).forEach((element, index) => {
                    address.setDataValue(element, req.body[element]);
                });
                
                await address.save();

                res.json({
                    status: true,
                    msg: "success",
                    address: address
                })

            } else {
                res.json({
                    status: false,
                    msg: "address not exists.",
                    address: null,
                });
            }
        } catch (error) {
            res.json({
                status: false,
                msg: "error in update - " + error,
                address: null,
            });
        }
    },

    async list(req, res) {

        try {
            const id = req.query.id;
            if (id) {
                const address = await Address.findByPk(id);
                if (address) {
                    res.json({
                        status: true,
                        msg: "success",
                        addresses: address
                    })
                } else {
                    res.json({
                        status: false,
                        msg: "address not exists.",
                        addresses: null
                    })
                }
            } else {
                const addresses = await Address.findAll();
                res.json({
                    status: true,
                    msg: "success",
                    addresses: addresses
                })
            }
        } catch (error) {
            
        }

    },
};
