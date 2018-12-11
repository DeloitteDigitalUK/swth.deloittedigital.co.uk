import React from 'react';

import styles from './JobForm.module.scss';

import config from '../../config';
import CloseButton from '../CloseButton';
import Input from '../Input';
import Checkbox from '../Checkbox';
import Button from '../Button';

const JobForm = ({ jobId, onClose }) => {
  const job = config.jobs[jobId];

  return (
    <div className={styles.flex}>
      <div className={styles.closeButton}>
        <CloseButton onClick={onClose} />
      </div>
      <div className={styles.container}>
        <div className={styles.heading}>Dear Deloitte Technology Hub</div>
        <div className={styles.heading}>{`I am interested in the role of ${
          job.title
        }, South West Tech Hub`}
        </div>
        {job.description.map(description => (
          <p className={styles.description}>{description}</p>
        ))}
        <p>
          <i>
            Detailed job description <a href={job.url}>here</a>.
          </i>
        </p>
      </div>
      <div className={styles.formSection}>
        <div className={styles.container}>
          <Input type="text" placeholder="My name" />
          <Input type="email" placeholder="My email" />
          <Input type="text" placeholder="My url" />
          <Input type="text" placeholder="My LinkedIn url" />
          <Checkbox
            label={(
              <span>
                {"I've read your "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www2.deloitte.com/global/en/misc/en-privacy.html"
                >
                  Privacy Statement
                </a>
                {' and '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www2.deloitte.com/ro/en/legal/legal.html"
                >
                  Terms of Use
                </a>
                .
              </span>
)}
          />
          <Checkbox label="I have the right to work in the UK." />
        </div>
      </div>
      <div className={styles.formApplySection}>
        <div className={styles.container}>
          <div className={styles.heading}>All the best for the future.</div>
          <div className={styles.center}>
            <Button buttonStyle="solid">Apply</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobForm;
