import * as dynamoose from 'dynamoose';
import { v4 as uuidv4 } from 'uuid';
import { connectLocalDB } from '@services/db-local.service';
import { Promocode } from '@models/DynamoDB/promocode';
connectLocalDB(dynamoose);

export interface Order {
  id: string;
  shopItemsBay: [];
  sumAllItems: Number;
  dateBuy: Date;
  // activatedPromotionalCode: boolean;
  // promotionalCode?: Promocode;
}

export const OrderSchema = new dynamoose.Schema({
  id: {
    type: String,
    default: uuidv4,
    hashKey: true,
  },
  shopItemsBay: {
    type: [Object],
  },
  sumAllItems: {
    type: Number,
  },
  dateBuy: {
    type: String,
  },
  // activatedPromotionalCode: {
  //   type: Boolean,
  // },
  // promotionalCode: {
  //   type: Object,
  // },
});

export const OrderModel = dynamoose.model('Order', OrderSchema);
