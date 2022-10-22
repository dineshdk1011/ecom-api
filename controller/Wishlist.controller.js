const models = require("../models");
const Wishlist = models.Wishlist;
const Product = models.Products;
const User = models.User;

const create = async (req, res) => {
  const data = req.body;
  await Wishlist.create(data)
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
  await Wishlist.findAll()
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

  await Wishlist.findAll({ where: { id: data } })
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

  await Wishlist.update(value, {
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

  await Wishlist.destroy({ where: { id: data } })
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

const mywishlist = async (req, res) => {
  const data = req.body.user_id;
  await Wishlist.findAll({ where: { user_id: data } })
    .then(async (data) => {
      if (data.length !== 0) {
        var orderdata = [];
        for (var i = 0; i < data.length; i++) {
          await Product.findAll({ where: { id: data[i].product_id } }).then(
            async (productdata) => {
              await User.findAll({ where: { user_id: req.body.user_id } }).then(
                (userdata) => {
                  orderdata.push({
                    product: productdata[0],
                    wishlist: data[i],
                    user: userdata[0],
                  });
                }
              );
            }
          );
        }
        res.send(orderdata);
      } else {
        res.send([]);
      }
    })
    .catch((err) => {
      console.log(err);
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
  mywishlist,
};
