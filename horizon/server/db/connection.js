import mongoose from 'mongoose'

const username='horizon';
const password='fa21-bse-033';

const url=`mongodb+srv://${username}:${password}@clusterstore.qyq8k42.mongodb.net/?retryWrites=true&w=majority`;

const connection = mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})

export {connection};