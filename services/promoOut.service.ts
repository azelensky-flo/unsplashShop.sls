import { PromoCodeModel } from '@models/DynamoDB/promocode';

export class PromoOutService {
  async createCode(promocode) {
    return await PromoCodeModel.create(promocode);
  }
}
