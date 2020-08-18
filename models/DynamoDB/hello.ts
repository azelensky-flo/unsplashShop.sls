import * as dynamoose from 'dynamoose'
import { connectLocalDB } from '@services/db-local.service';
connectLocalDB(dynamoose);



export const HelloSchema = new dynamoose.Schema({
  hello: {
    type: String,
    hashKey: true,
    default: 'hi',
  }

});

export const HelloModel = dynamoose.model('Hello', HelloSchema);
