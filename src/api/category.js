import API from './index';

export const getCategory = (slug) =>
  API.get(`${process.env.REACT_APP_API}/category/${slug}`);

export const getCategories = () =>
  API.get(`${process.env.REACT_APP_API}/categories`);
console.log('api/category.js');
