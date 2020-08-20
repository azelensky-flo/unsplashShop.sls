import * as dynamoose from 'dynamoose';
import { connectLocalDB } from '@services/db-local.service';
connectLocalDB(dynamoose);

export interface Promocode {
  code: string;
  discountPercent: number;
}

export const PromoCodeScheme = new dynamoose.Schema({
  code: {
    type: String,
  },
  discountPercent: {
    type: Number,
  },
});

export const PromoCodeModel = dynamoose.model<Promocode, string>('PromoCode', PromoCodeScheme);
