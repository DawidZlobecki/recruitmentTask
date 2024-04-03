import axios, { AxiosResponse } from 'axios';

const API_BASE_URL = 'https://api.stackexchange.com/2.3';

export interface TagItem {
  name: string;
  count: number;
}

export interface TagsApiResponse {
  items: TagItem[];
  has_more: boolean;
}

interface fetchTagsParams {
  itemsOnPage: number;
  order: 'asc' | 'desc';
  sortBy: 'popular' | 'activity' | 'name';
  pageNumber: number;
}

export const fetchTags = async ({itemsOnPage, order, sortBy, pageNumber}: fetchTagsParams): Promise<{items: TagItem[]; hasNextPage: boolean}> => {
  try {
    const response: AxiosResponse<TagsApiResponse> = await axios.get(`${API_BASE_URL}/tags?page=${pageNumber}&pagesize=${itemsOnPage}&order=${order}&sort=${sortBy}&site=stackoverflow`);
    return {items: response.data.items, hasNextPage: response.data.has_more};
  } catch (error) {
    console.error('Error fetching tags:', error);
    throw error;
  }
};
