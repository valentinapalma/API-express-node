const express = require('express');
const router = express.Router()

const helloWorld = require('./helloWorld.js');
const methods = require('./methods.js');
const body = require('./body.js');
const user = require('./user.js');

//middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

//middlewares
router.post("/middlewares", body.body);

//methods
router.get("/methods", methods.get);
router.post("/methods", methods.post);
router.put("/methods", methods.put);
router.delete("/methods", methods.delete);

//users
router.post("/user", user.post);
router.get("/user", user.get)
router.get("/user/:id", user.get)
router.put("/user/:id", user.put);
router.delete('/user/:id', user.deleteUser);
router.patch("/user/:id", user.patch)

// router.get("/", helloWorld.hello);

// router.get("/:pathParameter", helloWorld.params);

module.exports = router