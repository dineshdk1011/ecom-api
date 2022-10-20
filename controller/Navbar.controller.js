const models = require("../models");
const Navbar = models.Navbar;

const create = async (req, res) => {
  const data = req.body;
  await Navbar.create(data)
    .then((data) => {
      res.json({
        status: 200,
        message: "SUCCESS",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        status: 400,
        message: "Some error occurred in query",
      });
    });
};

const viewall = async (req, res) => {
  await Navbar.findAll()
    .then((data) => {
      res.json({
        status: 200,
        message: "SUCCESS",
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        status: 400,
        message: "Some error occurred in query",
      });
    });
};
const viewbystore = async (req, res) => {
  const data = req.body.id;

  await Navbar.findAll({ where: { store: data } })
    .then((data) => {
      res.json({
        status: 200,
        message: "SUCCESS",
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        status: 400,
        message: "Some error occurred in query",
      });
    });
};

const update = async (req, res) => {
  const value = req.body;
  const id = req.body.id;

  await Navbar.update(value, {
    where: {
      id: id,
    },
  })
    .then(() => {
      res.json({
        status: 200,
        message: "Updated Successfully",
      });
    })
    .catch((err) => {
      res.json({
        status: 400,
        message: "Some error occurred in query",
      });
    });
};

const destroy = async (req, res) => {
  const data = req.body.id;

  await Navbar.destroy({ where: { id: data } })
    .then(() => {
      res.json({
        status: 200,
        message: "Deleted Successfully",
      });
    })
    .catch((err) => {
      res.json({
        status: 400,
        message: "Some error occurred in query",
      });
    });
};

module.exports = {
  create,
  viewall,
  update,
  destroy,
  viewbystore,
};
