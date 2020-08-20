import { Promocode } from '@models/DynamoDB/promocode';
import { PromoOutService } from '@services/promoOut.service';
import { AppError, CommonErrors } from '@helper/app-error';

export class PromoService {
  async createCode(promocode: Promocode, promoOutService: PromoOutService) {
    try {
      return await promoOutService.createCode(promocode);
    } catch (e) {
      throw new AppError(CommonErrors.InternalServerError, e.message);
    }
  }
}
