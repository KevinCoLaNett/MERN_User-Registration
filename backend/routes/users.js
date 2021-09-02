const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const newUser = new User({
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    lastName: req.body.lastName,
    age: req.body.age,
    gender: req.body.gender,
    address: req.body.address,
    emailAddress: req.body.emailAddress,
    civilStatus: req.body.civilStatus
});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.firstName = req.body.firstName;
      user.middleName = req.body.middleName;
      user.lastName = req.body.lastName;
      user.age = req.body.age;
      user.gender = req.body.gender;
      user.address = req.body.address;
      user.emailAddress = req.body.emailAddress;
      user.civilStatus = req.body.civilStatus;

      user.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error1: ' + err));
    })
    .catch(err => res.status(400).json('Error2: ' + err));
});

module.exports = router;