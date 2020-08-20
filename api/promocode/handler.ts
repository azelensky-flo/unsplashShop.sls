import { log } from '@helper/logger';
import { Promocode } from '@models/DynamoDB/promocode';
import { PromoOutService } from '@services/promoOut.service';
import { errorHandler } from '@helper/error-handler';
import { PromoManager } from './promo.manager';

export async function createCode(event, context) {
  log('create promocode', event);

  try {
    const manager = new PromoManager();
    const promocode: Promocode = event.body;
    const promoOutService: PromoOutService = new PromoOutService();

    return await manager.createCode(promocode, promoOutService);
  } catch (e) {
    errorHandler(e);
  }
}

export async function readCode(event, context) {
  log('read promocode', event);

  try {
    const manager = new PromoManager();
    const promoOutService: PromoOutService = new PromoOutService();

    return await manager.readCode(promoOutService);
  } catch (e) {
    errorHandler(e);
  }
}
