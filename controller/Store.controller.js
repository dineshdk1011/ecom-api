const models = require("../models");
const Store = models.Store;
const db = require("../models");

const create = async (req, res) => {
  const data = req.body;
  await Store.create(data)
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
  await Store.findAll()
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

const viewbyuser = async (req, res) => {
  const data = req.body.id;
  await Store.findAll({ where: { user_id: data } })
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
const view = async (req, res) => {
  const data = req.body.id;

  await Store.findAll({ where: { id: data } })
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

  await Store.update(value, {
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
  await Store.destroy({ where: { id: data },include: [db.Category,db.Navbar,db.Coverimg,db.Journal,db.Products] })
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
  view,
  update,
  destroy,
  viewbyuser,
};
