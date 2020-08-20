import { Order } from '@models/DynamoDB/order';
import { OrderOutService } from '@services/orderOut.service';

export class OrderManager {
  private readonly service;

  constructor() {
    this.service = new OrderService();
  }

  createOrder(order: Order, orderOutService: OrderOutService) {
    //This is a condition if

    return this.service.createOrder(order, orderOutService);
  }
}
