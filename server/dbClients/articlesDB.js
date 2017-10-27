  const mongoConnection = 'mongodb://localhost:27017/profile';
     
 const addArticle = (query, sucessCallBack) => {
    mongoose.connect(mongoConnection);
    const newProduct = new Product(query);
    newProduct.save(query, sucessCallBack);
    
};
 
module.exports = {addArticle}