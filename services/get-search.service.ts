import axios from 'axios';

const baseURL = 'https://api.unsplash.com';
const client_id = 'k_uAJlDjzQOJ1wE47nT83aMH6z-tj0_JsoTt9jzVbZI';


export class GetSearchService {

  constructor() {
  }

  async getSearch(params) {
    const { data } = await axios({
      method: 'GET',
      url: `${baseURL}/search/photos`,
      params: {
        ...params,
        client_id,
      },
    });

    console.log(data.params)
    return data;
  }


}
