var mongoose = require('mongoose');

const dbUri = "YarkoL:*****@cluster0-shard-00-00-fhuun.mongodb.net:27017,cluster0-shard-00-01-fhuun.mongodb.net:27017,cluster0-shard-00-02-fhuun.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";

mongoose.connect('mongodb://' + dbUri);