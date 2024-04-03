import axios, { AxiosResponse } from 'axios';

const API_BASE_URL = 'https://api.stackexchange.com/2.3';

export interface TagItem {
  name: string;
  count: number;
}

interface TagsApiResponse {
  items: TagItem[];
}

interface fetchTagsParams {
  itemsOnPage: number;
  order: 'asc' | 'desc';
}

export const fetchTags = async ({itemsOnPage, order}: fetchTagsParams): Promise<TagItem[]> => {
  try {
    const response: AxiosResponse<TagsApiResponse> = await axios.get(`${API_BASE_URL}/tags?pagesize=${itemsOnPage}&order=${order}&sort=popular&site=stackoverflow`);
    return response.data.items;
  } catch (error) {
    console.error('Error fetching tags:', error);
    throw error;
  }
};