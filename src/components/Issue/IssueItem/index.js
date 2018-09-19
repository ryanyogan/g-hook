/* eslint-disable react/no-danger */
import React from 'react';

import Link from '../../Link';

import './style.css';

const IssueItems = ({ issue }) => (
  <div className="IssueItem">
    <div className="IssueItem-content">
      <h3>
        <Link to={issue.url}>{issue.title}</Link>
      </h3>
      <div dangerouslySetInnerHTML={{ __html: issue.bodyHTML }} />
    </div>
  </div>
);

export default IssueItems;
