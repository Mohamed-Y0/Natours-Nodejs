const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');

const getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
});

const getUser = (req, res) => {
  res.status(500).json({
    status: 'err',
    message: 'This Route Is Not Yet Defined!',
  });
};

const createUser = (req, res) => {
  res.status(500).json({
    status: 'err',
    message: 'This Route Is Not Yet Defined!',
  });
};

const updateUser = (req, res) => {
  res.status(500).json({
    status: 'err',
    message: 'This Route Is Not Yet Defined!',
  });
};

const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'err',
    message: 'This Route Is Not Yet Defined!',
  });
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
