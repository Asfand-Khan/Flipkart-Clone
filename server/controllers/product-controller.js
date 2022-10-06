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
