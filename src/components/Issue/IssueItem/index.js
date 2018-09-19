/* eslint-disable react/no-danger */
import React from 'react';
import { withState } from 'recompose';

import Comments from '../../Comment';
import Link from '../../Link';
import Button from '../../Button';

import './style.css';

const IssueItems = ({
  issue,
  repositoryOwner,
  repositoryName,
  isShowComments,
  onShowComments,
}) => (
  <div className="IssueItem">
    <Button onClick={() => onShowComments(!isShowComments)}>
      {isShowComments ? '-' : '+'}
    </Button>

    <div className="IssueItem-content">
      <h3>
        <Link to={issue.url}>{issue.title}</Link>
      </h3>
      <div dangerouslySetInnerHTML={{ __html: issue.bodyHTML }} />

      {isShowComments && (
        <Comments
          repositoryName={repositoryName}
          repositoryOwner={repositoryOwner}
          issue={issue}
        />
      )}
    </div>
  </div>
);

export default withState('isShowComments', 'onShowComments', false)(IssueItems);
