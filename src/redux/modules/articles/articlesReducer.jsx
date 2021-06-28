import { SET_ARTICLES, PAGINATED_ARTICLES, SET_SELECTED_ARTICLE } from './articlesTypes';

const initialState = {
  pagination: {
    offset: 0,
    limit: 10,
  },
  articlesList: [],
  articlesPerPage: 10,
  articlesCount: 0,
  selectedArticle: {},
};

export const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    // eslint-disable-next-line max-len
    case SET_ARTICLES: return { ...state, articlesList: action.payload.articles, articlesCount: action.payload.articlesCount };
    case PAGINATED_ARTICLES: return { ...state, pagination: { limit: state.pagination.limit, offset: action.payload } };
    case SET_SELECTED_ARTICLE: return { ...state, selectedArticle: action.payload.article };
    default: return state;
  }
};
