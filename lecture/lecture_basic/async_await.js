function findAndSaveUser(Users){
    Users.findOne({})
    .then((user) => {
        user.name = '1000zoo'
        return user.save();
    })
    .then((user) => {
        return Users.findOne()({gender: 'm'});
    })
    .then((user) => {
        //...
    })
}

// ==

async function findAndSaveUser(Users){
    let user = await Users.findOne({});
    user.name = '1000zoo';
    user = await user.save();
    user = await Users.findOne({gender: 'm'});
    //...
}