const productData = require(".././data/productData");
const productSchema = require(".././models/productSchema");

const dataToDatabase = async () => {
  try {
    await productSchema.deleteMany({});
    const saveData = await productSchema.insertMany(productData);
    console.log(productData);
  } catch (error) {
    console.log("Error ----> " + error.message);
  }
};

module.exports = dataToDatabase();
