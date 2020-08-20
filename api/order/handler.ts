import { log } from '@helper/logger';
import { Order } from '@models/DynamoDB/order';
import { errorHandler } from '@helper/error-handler';
import { OrderOutService } from '@services/orderOut.service';
import { OrderManager } from './order.manager';

async function createOrder(event, context) {
  log('create order', event);

  try {
    const order: Order = event.body;
    const manager = new OrderManager();
    const orderOutService: OrderOutService = new OrderOutService();

    return await manager.createOrder(order, orderOutService);
  } catch (e) {
    errorHandler(e);
  }
}
