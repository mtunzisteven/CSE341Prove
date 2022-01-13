// Remember Team Activity 01?
// This is the same solution, but implemented in our app using
// proper routing for the view engine
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

let msg = false; // helps us manage error essage
const userList = []; // will hold all user names

router.post('/add-user', (req, res, next) => {
  let user = req.body.newUser;

  console.log(user);

  if(!userList.includes(user)){

    userList.push(user);

    msg = false; // helps us manage error essage

  }else{

    msg = 'User already exists';

  }

  res.redirect("/ta02");

});

router.post('/delete-user', (req, res, next) => {
  let user = req.body.oldUser;

  let userIndex = userList.indexOf(user)

  if(userIndex == -1){

    msg = 'User does not exists';

  }else{

    userList.splice(userIndex, 1);

    msg = false; // helps us manage error essage

  }

  res.redirect("/ta02");

});

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: '/ta02',
    users: userList,
    message: msg
  });
});

module.exports = router;
