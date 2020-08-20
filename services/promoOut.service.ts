import { PromoCodeModel } from '@models/DynamoDB/promocode';

export class PromoOutService {
  async createCode(promocode) {
    return await PromoCodeModel.create(promocode);
  }

  async readCode() {
    return await PromoCodeModel.scan().all().exec();
  }

  async deleteCode() {
    return await PromoCodeModel.delete('promo60');
  }

  async checkCode(code) {
    if (!code) {
      throw { message: 'Promotional code does not exist!' };
    }
    return await PromoCodeModel.queryOne({ code }).exec();
  }
}
