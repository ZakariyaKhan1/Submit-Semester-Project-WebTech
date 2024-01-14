import { productModel } from '../model/product.js';

const getProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const postProduct = async (req, res) => {
  try {
    const product = req.body;
    console.log(product);
    const newProduct = new productModel(product);

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { _id } = req.params;

    const deletedProduct = await productModel.findByIdAndRemove(_id);

    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(deletedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const editProduct = async (req, res) => {
  try {
    const { _id } = req.params;
    const updatedProduct = req.body;

    const product = await productModel.findByIdAndUpdate(_id, updatedProduct, { new: true });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export { getProducts, postProduct, deleteProduct ,editProduct};
