get = (req, res, next) => {
    console.log(req.params.id);
    
    if(req.params.id) {
        req.models.User.findById().then((user) => {
            return res.send(user);
        }).catch((error) => {
            next(error)
        })
    }else {
        req.models.User.find().then((users) => {
            return res.send(users);
        }).catch((error) => {
            next(error)
        })
    }
}

post = (req, res, next) => {
    req.models.User.create({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        address: {
            street: req.body.address.street,
            city: req.body.address.city,
            zipcode: req.body.address.zipcode
        }
    }).then((user) => {
        return res.status(201).send(` -${user.username} has been added.-`)
    }).catch((error) => {
        next(error)
    })
}

patch = (req, res, next) => {
    req.models.User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true},
    ).then((user) => {
        return res.status(200).send(` -${user.username} has been updated.-`)
    }).catch((error) => {
        next(error)
    })
}

deleteUser = (req, res, next) => {
    req.models.User.findByIdAndRemove(
        req.params.id,
    ).then((user) => {
        return res.status(200).send(` -${user.username} has been deleted.-`)
    }).catch((error) => {
        next(error)
    })
}

put = (req, res, next) => {
    req.models.User.findByIdAndUpdate(
        req.params.id,
        {name : req.body.name,
        username: req.body.username,
        email : req.body.email,
        address: {
            street: req.body.address.street,
            city: req.body.address.city,
            zipcode: req.body.address.zipcode
            }
        },
        {new:true},
    ).then((user) => {
        return res.status(200).send(` -${user.username} has replaced this user.-`)
    }).catch((error) => {
        next(error)
    })
}

module.exports = {
    get,
    post,
    put,
    deleteUser,
    patch
}