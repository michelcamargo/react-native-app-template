import axios from 'axios';

import ResourcesConfig from "../config/resources";
import { BannerCustomData } from "../lib/content";

class CustomContentService {

  public static fetchAllGroupsByRef = async (reference: string) => {
    try {
      const { data } = await axios.get(
        `${ResourcesConfig.INTERNAL_RESOURCES_URL}/content/banners/find-by-title/${reference}`,
        {
          headers: {
            Accept: 'application/json',
          },
        },
      );
      // console.log(`${ResourcesConfig.INTERNAL_RESOURCES_URL}/content/banners/find-by-title/${reference}`);
      // console.log(JSON.stringify(data, null, 4));
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'Algo inesperado aconteceu';
      }
    }
  };
  
  public static fetchFirstGroupByRef = async (reference: string) => {
    try {
      const { data } = await axios.get(
        `${ResourcesConfig.INTERNAL_RESOURCES_URL}/content/banners/find-by-title/${reference}`,
        {
          headers: {
            Accept: 'application/json',
          },
        },
      );
      // console.log(`${ResourcesConfig.INTERNAL_RESOURCES_URL}/content/banners/find-by-title/${reference}`);
      //console.log(JSON.stringify(data, null, 4));
      return data[0];
      
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // console.log('error message: ', error.message);
        return error.message;
      } else {
        // console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  };
  
  public static fetchAllBannersByRef = async (reference: string) => {
    try {
      const { data } = await axios.get(
        `${ResourcesConfig.INTERNAL_RESOURCES_URL}/content/banners/find-by-title/${reference}`,
        {
          headers: {
            Accept: 'application/json',
          },
        },
      );
      // console.log(`${ResourcesConfig.INTERNAL_RESOURCES_URL}/content/banners/find-by-title/${reference}`);
      //console.log(JSON.stringify(data, null, 4));
      const bannerList: Array<BannerCustomData> = [];
      
      if(data.length > 0) {
        data.forEach(customContent => {
          if(customContent.banners && customContent.banners.length > 0) {
            customContent.banners.forEach(banner => {
              bannerList.push(banner);
            });
          }
        });
      }
      
      return bannerList;
      
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'Algo inesperado aconteceu';
      }
    }
  };
  
  /**
   * Busca primeiro grupo de banners por referência
   * @param reference
   */
  public static fetchFirstBannerGroupByRef = async (reference: string): Promise<BannerCustomData> => {
    try {
      const { data } = await axios.get(
        `${ResourcesConfig.INTERNAL_RESOURCES_URL}/content/banners/find-by-title/${reference}`,
        {
          headers: {
            Accept: 'application/json',
          },
        },
      );
      
      // console.log(`${ResourcesConfig.INTERNAL_RESOURCES_URL}/content/banners/find-by-title/${reference}`)
      
      if(data && data.length > 0 && data[0].banners) {
        // console.log(JSON.stringify(data, null, 4));
        return data[0].banners;
      }
      
      //console.log(JSON.stringify(data, null, 4));
      throw Error('NO CONTENT');
      
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('[CUSTOM CONTENT]', reference ,error.message);
      } else {
        console.log('[CUSTOM CONTENT] unexpected error: ', error);
      }
    }
  };
  
  public static fetchBannersByName = async (bannerName: string): Promise<Array<BannerCustomData>> => {
    const options = {
      headers: {
        Accept: 'application/json'
      },
    };
    
    // console.log(`${ResourcesConfig.INTERNAL_RESOURCES_URL}/content/banners/find-by-banner-name/${bannerName}`)
    const response = await axios.get(
      `${ResourcesConfig.INTERNAL_RESOURCES_URL}/content/banners/find-by-banner-name/${bannerName}`,
      options
    );
    
    return response.data;
  };

}

export default CustomContentService;
