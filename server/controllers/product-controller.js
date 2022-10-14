import Product from "../models/product-model.js";

export const getallproducts = async (req, res) => {
  try {
    const products = await Product.find({});

    if (products) {
      return res.status(200).json(products);
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error while fetching products: ${error.message}` });
  }
};

export const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOne({ id: id });
    if (product) {
      return res.status(200).json(product);
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error while fetching products: ${error.message}` });
  }
};
