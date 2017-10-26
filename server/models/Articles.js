
const nameSchema = new mongoose.Schema({
  title: String,
  fullContent: String
});
const article = mongoose.model("article", nameSchema);


module.exports=Articles