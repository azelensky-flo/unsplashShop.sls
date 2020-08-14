import { PicturesService } from './pictures.service';
// import { PicturesUrl } from './pictures.interface';
import { GetPicturesService } from '@services/get-pictures.service';
import { AppError, CommonErrors } from '@helper/app-error';

export class PicturesManager {
  private readonly service: PicturesService;

  constructor() {
    this.service = new PicturesService()
  }

  getPictures(param, getPicturesService: GetPicturesService) {


    if (!param) {
      throw new AppError(CommonErrors.BadRequest, "The param 'url' is required.");
    }

    return this.service.getPictures(param, getPicturesService)
  }


}
