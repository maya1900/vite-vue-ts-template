import HttpClient from '../utils/axios';
import type { ListParams, ListModel, RowItem } from './model/userModel';

export const getList = (params: ListParams) => {
  return HttpClient.get<ListModel>('/list', { params });
};
export const postData = (data: RowItem) => {
  return HttpClient.post<ListModel>('/post', {
    data,
  });
};
