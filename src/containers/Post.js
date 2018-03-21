import React from 'react'
import { withRouteData, Link } from 'react-static'
import Moment from 'react-moment'
import Markdown from 'react-markdown'
//
import Typography from 'material-ui/Typography'


export default withRouteData(({ post }) => (
  <div>
    <Typography type="body1" component={Link} to="/blog/" gutterBottom>
      {'<'} Back
    </Typography>
    <Typography type="title" gutterBottom>
      {post.data.title}
    </Typography>
    <Typography type="body1">
      <Moment format="MMMM Do, YYYY">{post.data.date}</Moment>
      <img className="image" src={post.data.thumbnail} alt="" />
      <Markdown source={post.content} escapeHtml={false} />
    </Typography>
  </div>
))
