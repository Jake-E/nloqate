import axios from 'axios';
import { ILoqateOptions, IReqOptions } from './types';
import { LOQATE_API } from './constants';

const NLoqate = ({ key, origin = 'UK', countries = ['UK'] }: ILoqateOptions) => {
  const client = axios.create({ baseURL: LOQATE_API });

  const query = (endPoint: string, options: IReqOptions) => {
    options.params.Key = key;
    return client.get(`${endPoint}/json3.ws`, options);
  };

  return {
    async search(partialAddress: string, container?: string) {
      const resp = await query('Find/v1.1', {
        params: {
          Countries: countries,
          Origin: origin,
          Text: partialAddress,
          Container: container
        },
      });
      return resp.data.Items;
    },
    async get(addressId: string) {
      const resp = await query('Retrieve/v1.2', {
        params: {
          Id: addressId,
        },
      });
      return resp.data.Items[0];
    },
  };
};

export default NLoqate;
