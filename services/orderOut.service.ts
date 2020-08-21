import { OrderModel } from '@models/DynamoDB/order';

export class OrderOutService {
  async createOrder(order) {
    return await OrderModel.create(order);
  }

  async readOrder() {
    return await OrderModel.scan().all().exec();
  }

  async deleteOrder() {
    return await OrderModel.delete('');
  }
}
