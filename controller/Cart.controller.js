const models = require("../models");
const Cart = models.Cart;
const User = models.User;
const Product = models.Products;
const Variation = models.Variations;

const create = async (req, res) => {
  const data = req.body;
  await Cart.create(data)
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
  await Cart.findAll()
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

  await Cart.findAll({ where: { id: data } })
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

  await Cart.update(value, {
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

  await Cart.destroy({ where: { id: data } })
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

const mycart = async (req, res) => {
  const data = req.body.user_id;

  await Cart.findAll({ where: { user_id: data } })
    .then(async (data) => {
      if (data.length !== 0) {
        var orderdata = [];
        for (var i = 0; i < data.length; i++) {
          await Product.findAll({ where: { id: data[i].product_id } }).then(
            async (productdata) => {
              await Variation.findAll({
                where: { id: data[i].variations },
              }).then(async (variationdata) => {
                await User.findAll({
                  where: { user_id: req.body.user_id },
                }).then((userdata) => {
                  orderdata.push({
                    product: productdata[0],
                    cart: data[i],
                    variation: variationdata[0],
                    user: userdata[0],
                  });
                });
              });
            }
          );
        }
        res.send(orderdata);
      } else {
        res.send([]);
      }
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
  mycart,
};
