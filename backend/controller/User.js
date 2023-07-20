const db = require('../models')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const getUser = async (req, res) => {
    const allUser = await db.User.findAll()
    if(!allUser) {
        res.status(400).send({ message: "Users not found."})
    } else {
        res.status(200).send({
            Users: allUser
        })
    }
}

const requsterUser = async (req, res) => {
    const { firstname, lastname, username, password } = req.body;
    const targetUser = await db.User.findOne({ where: { username: username }});
    if(targetUser) {
        res.status(400).send({ message: 'Username already token.'})
    } else {
        const salt = bcryptjs.genSaltSync(10);
        const hashedPassword = bcryptjs.hashSync(password, salt);

        await db.User.create({
            firstname: firstname,
            lastname: lastname,
            username: username,
            password: hashedPassword
        });

        res.status(201).send({ message: 'Register completed' })
    }
}

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    const targetUser = await db.User.findOne({ where: {username: username }});
    if(!targetUser) {
        res.status(400).send({ message: "Username or Password is wrong. "});
    } else {
        const iscorrentpassword = bcryptjs.compareSync(password, targetUser.password)
        if (!!iscorrentpassword) {
            const payload = {
                id:  targetUser.id,
                username: targetUser.username,
                password: targetUser.password
            };
            const token = jwt.sign(payload, "Secrectorkeys", { expiresIn: 3600 })

            res.status(200).send({
                token: token,
                message: "Login Successful"
            })
        } else {
            res.status(400).send({ message: "Username or Password is wrong. "})
        }
    }
}

module.exports = {
    requsterUser,
    loginUser,
    getUser
}