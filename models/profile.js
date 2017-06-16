import mongoose from 'mongoose';

var profileSchema = mongoose.Schema({
    user_id: {type: String, default: ''},
    username: {type: String, default: ''},
    email: {type: String},
    avatar: {type: String, default: ''},
    birthday: {type: Date, default: Date.now()},
    gender: {type: String, default: ''},
    address: {type: String, default: ''},
    job: {type: String, default: ''},
  }, {
    toJSON: {
      transform: function(profile, ret) {
        delete ret._id;
        delete ret.__v;
      }
    }
});

module.exports = mongoose.model('Profile', profileSchema);
