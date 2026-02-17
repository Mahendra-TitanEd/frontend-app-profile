import React from 'react';
import { ProgressBar } from '@openedx/paragon';
import { useIntl } from '@edx/frontend-platform/i18n';

import messages from './CustomProfileCompletion.messages';
import './customProfileComplition.scss';

const CustomProfileCompletion = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="profile-completion-container">
      <h2 className='container-header'>{formatMessage(messages['profile.completion.title'])}</h2>
      <div className="d-flex align-items-center">
        <ProgressBar
          now={65}
          max={100}
          variant="primary"
          className="flex-grow-1 mr-2 profile-progress"
        />
        <span>65%</span>
      </div>

      <p>{formatMessage(messages['profile.completion.message'])}</p>
    </div>
  );
};

export default CustomProfileCompletion;
