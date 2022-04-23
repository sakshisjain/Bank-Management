require('dotenv').config();
//mongodb+srv://DatabaseAdmin:aK08CGvRj4A0KAhZ@cluster0.cnyo8.mongodb.net/BankManagement?retryWrites=true&w=majority
module.exports = {
    mongoURI: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.cnyo8.mongodb.net/BankManagement?retryWrites=true&w=majority`,
    secretOrKey: "secret"
};