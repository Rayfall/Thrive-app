const mongoose = require('../db/connection');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const saltRounds = 10;

const authSchema = new Schema ({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

authSchema.pre('save', function(next){
    if(this.isNew || this.isModified('password')){
        const document = this;
        bcrypt.hash(document.password, saltRounds, function(err, hashPassword){
            if(err){
                next(err);
            }
            else {
                document.password = hashPassword;
                next();
            }
        });
    }
    else{
        next();
    }
});

authSchema.methods.isCorrectPassword = function(password, callback) {
    bcrypt.compare(password, this.password, function(err, same) {
      if (err) {
        callback(err);
      } else {
        callback(err, same);
      }
    });
}
  
const AuthModel = mongoose.model('Secure', authSchema);
module.exports = AuthModel;