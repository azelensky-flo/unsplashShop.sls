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

  async checkCode(promotionalCode) {
    const response = await PromoCodeModel.scan('code').eq(promotionalCode).exec();

    if (response[0]) {
      return { discount: true };
    } else {
      return { discount: false };
    }
  }
}
