import { Order } from '@models/DynamoDB/order';
import { OrderOutService } from '@services/orderOut.service';
import { OrderService } from './order.service';

export class OrderManager {
  private readonly service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  createOrder(order: Order, orderOutService: OrderOutService) {
    //This is a condition if

    return this.service.createOrder(order, orderOutService);
  }

  readOrder(orderOutService: OrderOutService) {
    return this.service.readOrder(orderOutService);
  }

  deleteOrder(orderOutService: OrderOutService) {
    return this.service.deleteOrder(orderOutService);
  }
}
