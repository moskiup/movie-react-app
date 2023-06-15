import axiosClient from './axiosClient';

export const category = {
  movie: 'movie',
  tv: 'tv',
};

export const movieType = {
  upcoming: 'upcoming',
  popular: 'popular',
  top_rated: 'top_rated',
};

export const tvType = {
  upcoming: 'upcoming',
  on_the_air: 'on_the_air',
  top_rated: 'top_rated',
};

const tmdApi = {
  getMovieList: (type, params) => {
    const url = 'movie/' + movieType[type];
    return axiosClient.get(url, { params: params });
  },
  getTvList: (type, params) => {
    const url = 'tv/' + tvType[type];
    return axiosClient.get(url, { params: params });
  },
  getVideos: (cate, id) => {
    const url = category[cate] + '/' + id + '/videos';
    return axiosClient.get(url, { params: {} });
  },
  search: (cate, params) => {
    const url = 'search/' + category[cate];
    return axiosClient.get(url, { params: params });
  },
  detail: (cate, id, params) => {
    const url = category[cate] + '/' + id;
    return axiosClient.get(url, { params: params });
  },
  credits: (cate, id) => {
    const url = category[cate] + '/' + id + '/credits';
    return axiosClient.get(url, { params: {} });
  },
  similar: (cate, id) => {
    const url = category[cate] + '/' + id + '/similar';
    return axiosClient.get(url, { params: {} });
  },
};

export default tmdApi;
