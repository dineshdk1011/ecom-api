const models = require("../models");
const Product = models.Products;
const Gallery = models.Gallery;
const Variation = models.Variations;

const create = async (req, res) => {
  const data = req.body;
  await Product.create(data)
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
  await Product.findAll()
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

const view_by_slug = async (req, res) => {
  const data = req.body.slug;

  await Product.findAll({ where: { slug: data } })
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

  await Product.findAll({ where: { store: data } })
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

  await Product.findAll({ where: { id: data } })
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
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  await Product.update(value, {
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

  await Product.destroy({ where: { id: data } })
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

const viewsingle = async (req, res) => {
  try {
    const productid = req.body.id;
    var finaldata = [];
    await Product.findAll({ where: { id: productid } }).then(async (data) => {
      await Variation.findAll({ where: { productID: productid } }).then(
        async (datavariation) => {
          await Gallery.findAll({ where: { productID: productid } }).then(
            (datagallery) => {
              finaldata.push({
                product: data[0],
                gallery: datagallery,
                variation: datavariation,
              });
            }
          );
        }
      );
    });
    res.json({
      status: 200,
      message: "SUCCESS",
      data: finaldata,
    });
  } catch (error) {
    res.json({
      status: 400,
      message: error,
    });
  }
};
const updatestock = async (req, res) => {
  const productid = req.body.id;
  const stock = req.body.stock;
  await Product.findAll({ where: { id: productid } }).then(async (data) => {
    if (Number(data[0].stock) >= stock) {
      var finalstock = Number(data[0].stock) - Number(stock);
      var newdata = {
        stock: finalstock,
      };
      await Product.update(newdata, {
        where: {
          id: productid,
        },
      }).then(() => {
        res.json({
          status: 200,
          message: "Updated Successfully",
        });
      });
    } else {
      res.json({
        status: 200,
        message: "Out Of Stock...Please reduce Quantity",
      });
    }
  });
};

module.exports = {
  create,
  viewall,
  view,
  update,
  destroy,
  viewsingle,
  updatestock,
  view_by_slug,
  viewbystore,
};
