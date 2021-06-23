import React from 'react';
// import PropTypes from 'prop-types';

import classes from './Article.module.css';
import Content from '../../Components/Content';
import ArticleForm from './ArticleForm/ArticleForm';
import { TextArea, Button, BUTTON_TYPE } from '../../UIElements';
import ArticleBanner from '../../Components/ArticleBanner';
import UserInfo from '../../Components/UserInfo';
import Comments from '../../Components/Comments';

const article = {
  id: '9CD6BE6-E533-FFA4-2DFB-D0A93D7F64BB',
  userName: 'Levi Henry',
  email: 'erat@adipiscingligulaAenean.net',
  date: 'May 21, 2021',
  title: 'That is the question',
  text: 'fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus o Curae; Phasellus ornare.',
  likes: 2,
};
const comments = [
  {
    id: '20CD6BE6-E003-FFA4-2DFB-D0AF3D7F64BB',
    userName: 'Odysseus Tyson',
    date: 'May 30, 2021',
    text: 'fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus cubilia Curae.',
  },
  {
    id: '20CD6BE6-E595-FFA4-2DFB-D0AF3D7F64BB',
    userName: 'Clinton Henderson',
    date: 'May 27, 2021',
    text: ' Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
  },
];
const Article = () => (
  <div className={classes.Article}>
    <ArticleBanner userName={article.userName} title={article.title} date={article.date} />
    <Content>
      <div className={classes.articleContent}>
        <p>{article.text}</p>
        <hr />
      </div>
      <div className={classes.articleActions}>
        <UserInfo userName={article.userName} title={article.title} date={article.date} />
        <Button btnType={BUTTON_TYPE.SECONDARY_OUTLINE}>Edit Article</Button>
        <Button btnType={BUTTON_TYPE.DANGER_OUTLINE}>Delete Article</Button>
      </div>
      <ArticleForm>
        <TextArea rows="8" name="texarea" placeholder="Write a comment..." />
        <Button btnType={BUTTON_TYPE.PRIMARY} type="button">Post Comment</Button>
      </ArticleForm>
      <Comments {...{ comments }} />
    </Content>
  </div>
);

// Article.defaultProps = {
//   comments: [],
// };
//
// Article.propTypes = {
//   article: PropTypes.shape({
//     date: PropTypes.string,
//     email: PropTypes.string,
//     id: PropTypes.string,
//     likes: PropTypes.number,
//     text: PropTypes.string,
//     title: PropTypes.string,
//     userName: PropTypes.string,
//   }).isRequired,
//   comments: PropTypes.arrayOf(PropTypes.shape({
//     date: PropTypes.string,
//     id: PropTypes.string,
//     text: PropTypes.string,
//     userName: PropTypes.string,
//   })),
// };

export default Article;
