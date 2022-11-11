const models = require("../models");
const User = models.User;
const Order = models.Order;
const Product = models.Products;
const Variation = models.Variations;
const Review = models.Review;
const { v1: uuidv1 } = require("uuid");
const bcrypt = require("bcryptjs");
const secret = "4641316895";
const jwt = require("jsonwebtoken");
const e = require("express");

const create = async (req, res) => {
  const data = req.body;
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(req.body.password, salt);
  data["user_id"] = uuidv1();
  data["password"] = hash;
  await User.findAll({ where: { email: req.body.email } }).then(
    async (userdata) => {
      if (userdata.length === 0) {
        await User.create(data)
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
      } else {
        res.json({
          status: 400,
          message: "Already have Account...",
        });
      }
    }
  );
};

const viewall = async (req, res) => {
  await User.findAll()
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

  await User.findAll({ where: { id: data } })
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
const viewUser = async (req, res) => {
  const data = req.body.user_id;

  await User.findAll({ where: { user_id: data } })
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

  await User.update(value, {
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

  await User.destroy({ where: { id: data } })
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

const Myorder = async (req, res) => {
  const data = req.body.user_id;

  await Order.findAll({ where: { user_id: data } })
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
                }).then(async (userdata) => {
                  await Review.findAll({
                    where: { orderid: data[i].id },
                  }).then((reviewdata) => {
                    orderdata.push({
                      product: productdata[0],
                      order: data[i],
                      variation: variationdata[0],
                      user: userdata[0],
                      review: reviewdata[0],
                    });
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
const Myorder_store = async (req, res) => {
  const data = req.body.id;
  await Order.findAll({ where: { store: data } })
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
                  where: { user_id: data[i].user_id },
                }).then(async (userdata) => {
                  await Review.findAll({
                    where: { orderid: data[i].id },
                  }).then((reviewdata) => {
                    orderdata.push({
                      product: productdata[0],
                      order: data[i],
                      variation: variationdata[0],
                      user: userdata[0],
                      review: reviewdata[0],
                    });
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
      console.log(err);
      res.json({
        status: 400,
        message: "Some error occurred in query",
      });
    });
};
const Completedorder = async (req, res) => {
  const data = req.body.id;
  await Order.findAll({ where: { store: data, status: "Completed" } })
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
                  where: { user_id: data[i].user_id },
                }).then(async (userdata) => {
                  await Review.findAll({
                    where: { orderid: data[i].id },
                  }).then((reviewdata) => {
                    orderdata.push({
                      product: productdata[0],
                      order: data[i],
                      variation: variationdata[0],
                      user: userdata[0],
                      review: reviewdata[0],
                    });
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
      console.log(err);
      res.json({
        status: 400,
        message: "Some error occurred in query",
      });
    });
};
const Pendingorder = async (req, res) => {
  const data = req.body.id;
  await Order.findAll({ where: { store: data, status: "Booked" } })
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
                  where: { user_id: data[i].user_id },
                }).then(async (userdata) => {
                  await Review.findAll({
                    where: { orderid: data[i].id },
                  }).then((reviewdata) => {
                    orderdata.push({
                      product: productdata[0],
                      order: data[i],
                      variation: variationdata[0],
                      user: userdata[0],
                      review: reviewdata[0],
                    });
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
      console.log(err);
      res.json({
        status: 400,
        message: "Some error occurred in query",
      });
    });
};
const Processingorder = async (req, res) => {
  const data = req.body.id;
  await Order.findAll({ where: { store: data, status: "Processing" } })
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
                  where: { user_id: data[i].user_id },
                }).then(async (userdata) => {
                  await Review.findAll({
                    where: { orderid: data[i].id },
                  }).then((reviewdata) => {
                    orderdata.push({
                      product: productdata[0],
                      order: data[i],
                      variation: variationdata[0],
                      user: userdata[0],
                      review: reviewdata[0],
                    });
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
      console.log(err);
      res.json({
        status: 400,
        message: "Some error occurred in query",
      });
    });
};
const Cancelorder = async (req, res) => {
  const data = req.body.id;
  await Order.findAll({ where: { store: data, status: "Cancel" } })
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
                  where: { user_id: data[i].user_id },
                }).then(async (userdata) => {
                  await Review.findAll({
                    where: { orderid: data[i].id },
                  }).then((reviewdata) => {
                    orderdata.push({
                      product: productdata[0],
                      order: data[i],
                      variation: variationdata[0],
                      user: userdata[0],
                      review: reviewdata[0],
                    });
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
      console.log(err);
      res.json({
        status: 400,
        message: "Some error occurred in query",
      });
    });
};

const login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  await User.findAll()
    .then(async (data) => {
      if (data.length == 0) {
        res.json({
          status: 400,
          message: "Please Register...",
        });
      } else {
        var checkuser = await data.filter((datanew) => {
          return datanew.email === email;
        });
        if (checkuser.length !== 0) {
          let passwordresult = await bcrypt.compare(
            password,
            checkuser[0].password
          );

          if (passwordresult == true) {
            let token = jwt.sign({ userid: checkuser[0].user_id }, secret, {
              expiresIn: "24h",
            });
            res.json({
              status: 200,
              message: "SUCCESS",
              data: { token, checkuser },
            });
          } else {
            res.json({
              status: 400,
              message: "Wrong Password.. Please Check",
            });
          }
        } else {
          res.json({
            status: 400,
            message: "Not Valid User..",
          });
        }
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
  Myorder,
  login,
  viewUser,
  Myorder_store,
  Completedorder,
  Pendingorder,
  Processingorder,
  Cancelorder
};
