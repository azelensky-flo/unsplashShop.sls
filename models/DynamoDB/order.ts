import * as dynamoose from 'dynamoose'
import { connectLocalDB } from '@services/db-local.service';
connectLocalDB(dynamoose);

export interface Order {
  id: number
}

export const OrderSchema = new dynamoose.Schema({
  id: {
    type: Number,
    default: 0
  }
});

export const OrderModel = new dynamoose.model
