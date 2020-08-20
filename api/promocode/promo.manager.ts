import { Promocode } from '@models/DynamoDB/promocode';
import { PromoOutService } from '@services/promoOut.service';
import { PromoService } from './promo.service';

export class PromoManager {
  private readonly service: PromoService;

  constructor() {
    this.service = new PromoService();
  }

  createCode(promocode: Promocode, promoOutService: PromoOutService) {
    //This is a condition if

    return this.service.createCode(promocode, promoOutService);
  }

  readCode(promoOutService: PromoOutService) {
    return this.service.readCode(promoOutService);
  }

  deleteCode(promoOutService: PromoOutService) {
    return this.service.deleteCode(promoOutService);
  }

  checkCode(code, promoOutService: PromoOutService) {
    return this.service.checkCode(code, promoOutService);
  }
}
