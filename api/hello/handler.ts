import { log } from '@helper/logger';
import { errorHandler } from '@helper/error-handler';
import { HelloModel } from '@models/DynamoDB/hello';


export async function createHello(event) {
  log('create Hello', event);

  try {
    const hello = event.body;
    return await HelloModel.create(hello);
  } catch (e) {
    errorHandler(e);
  }
}


export async function getHello(event) {
  log('get Hello', event);

  try {
    return await HelloModel.scan().all().exec();
  } catch (e) {
    errorHandler(e);
  }

}

