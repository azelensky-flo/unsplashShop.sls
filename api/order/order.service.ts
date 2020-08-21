import { OrderOutService } from '@services/orderOut.service';
import { Order } from '@models/DynamoDB/order';
import { AppError, CommonErrors } from '@helper/app-error';

export class OrderService {
  async createOrder(order: Order, orderOutService: OrderOutService) {
    try {
      return await orderOutService.createOrder(order);
    } catch (e) {
      throw new AppError(CommonErrors.InternalServerError, e.message);
    }
  }

  async readOrder(orderOutService: OrderOutService) {
    try {
      return await orderOutService.readOrder();
    } catch (e) {
      throw new AppError(CommonErrors.InternalServerError, e.message);
    }
  }

  async deleteOrder(orderOutService: OrderOutService) {
    try {
      return await orderOutService.deleteOrder();
    } catch (e) {
      throw new AppError(CommonErrors.InternalServerError, e.message);
    }
  }
}
