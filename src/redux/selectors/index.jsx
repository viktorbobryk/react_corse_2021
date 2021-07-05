// import {createSelector} from 'reselect';

export const selectPagination = (state) => state.articles.pagination;

export const selectArticlesList = (state) => state.articles.articlesList;

export const selectArticlesPerPage = (state) => state.articles.articlesPerPage;

export const selectArticlesCount = (state) => state.articles.articlesCount;

export const selectTagsList = (state) => state.tags.tagsList;

export const selectComments = (state) => state.comments.commentsList;

export const selectArticle = (state) => state.articles.selectedArticle;

export const selectAuthor = (state) => state.articles.selectedArticleAuthor;
