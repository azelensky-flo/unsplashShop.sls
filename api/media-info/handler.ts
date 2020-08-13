import { errorHandler } from '@helper/error-handler';
import { log } from '@helper/logger';
import { MediaInfoCurlService } from '@services/media-info-curl.service';
import { MediaInfoUrl } from './media-info.inteface';
import { MediaInfoManager } from './media-info.manager';

/**
 * This is a handler file
 * It should contain Lambda functions for one feature
 * For example, Media Info feature
 * Or CRUD operations for the user entity
 */

/**
 * This is a Lambda function
 * It implements some functionality of the feature
 *
 * It should only create a feature manager object and call the manager's method
 * All required data should be provided to the manager's method
 * Do not provide event or context objects
 * You should create interfaces for required data
 * All required services except feature service should be provided to the manager's method
 *
 * This function should handle all errors and return them with proper structure
 * @param event - APIGateway, SQS Trigger, SNS Trigger, etc. event object
 * @param context
 */
export async function getMediaInfo(event, context) {
  log(event);

  try {
    /**
     * Create the manager object
     */
    const manager = new MediaInfoManager();

    /**
     * Prepare required data
     */
    const mediaInfoUrl: MediaInfoUrl = event.body;

    /**
     * Prepare required services
     */
    const mediaInfoCurlService = new MediaInfoCurlService();

    /**
     * Call the manager's method
     */
    return await manager.getMediaInfo(mediaInfoUrl, mediaInfoCurlService);
  } catch (e) {
    /**
     * Handle all errors
     */
    errorHandler(e);
  }
}
