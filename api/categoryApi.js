import axios from 'axios';

export default {
  /**
   * Fetch all categories
   * @returns Promise
   */
  getCategories: async () => {
    return await axios.get('https://back.instaservice.io/api/categories/');
  },

  /**
   * Fetch category by slug
   * @param {String} categorySlug
   * @returns Promise
   */
  getCategoryBySlug: async (categorySlug) => {
    return await axios.get(
      'https://back.instaservice.io/api/category?slug=investments',
      {
        params: {
          slug: categorySlug,
        },
      }
    );
  },
};
