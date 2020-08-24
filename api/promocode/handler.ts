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

export async function deleteCode(event, context) {
  log('delete promocode', event);

  try {
    const manager = new PromoManager();
    const promoOutService: PromoOutService = new PromoOutService();

    return await manager.deleteCode(promoOutService);
  } catch (e) {
    errorHandler(e);
  }
}

export async function checkCode(event, context) {
  log('check promocode', event);

  try {
    const promotionalCode: string = event.body.promotionalCode;
    const manager = new PromoManager();
    const promoOutService: PromoOutService = new PromoOutService();

    return await manager.checkCode(promotionalCode, promoOutService);
  } catch (e) {
    errorHandler(e);
  }
}
