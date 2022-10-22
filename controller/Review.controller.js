const models = require("../models");
const Review = models.Review;
const User = models.User;
const Product = models.Products;

const create = async (req, res) => {
  const data = req.body;
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  await Review.create(data)
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
  await Review.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred in query.",
      });
    });
};

const view = async (req, res) => {
  const data = req.body.id;
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  await Review.findAll({ where: { id: data } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred in query.",
      });
    });
};

const update = async (req, res) => {
  const value = req.body;
  const id = req.body.id;
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  await Review.update(value, {
    where: {
      id: id,
    },
  })
    .then(() => {
      res.send("Updated Successfully");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred in query.",
      });
    });
};

const destroy = async (req, res) => {
  const data = req.body.id;

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  await Review.destroy({ where: { id: data } })
    .then(() => {
      res.send("Deleted Successfully");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred in query.",
      });
    });
};

const Myreview = async (req, res) => {
  await Review.findAll()
    .then(async (data) => {
      if (data.length !== 0) {
        var reviewdata = [];
        for (var i = 0; i < data.length; i++) {
          await User.findAll({ where: { user_id: data[i].userid } }).then(
            async (userdata) => {
              await Product.findAll({ where: { id: data[i].productid } }).then(
                (productdata) => {
                  reviewdata.push({
                    review: data[i],
                    user: userdata[0],
                    product: productdata[0],
                  });
                }
              );
            }
          );
        }
        res.send(reviewdata);
      } else {
        res.send([]);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred in query.",
      });
    });
};

module.exports = {
  create,
  viewall,
  view,
  update,
  destroy,
  Myreview,
};
