import React from 'react';
import uuid from 'uuid/v4';
import { withPrefix } from 'gatsby';

import styles from './JobForm.module.scss';

import config from '../../config';
import CloseButton from '../CloseButton';
import Input from '../Input';
import FileInput from '../FileInput';
import Checkbox from '../Checkbox';
import Button from '../Button';

const JobForm = ({ jobId, onClose }) => {
  const job = config.jobs[jobId];

  return (
    <form
      id="form-job"
      acceptCharset="UTF-8"
      encType="multipart/form-data"
      method="post"
      action="https://dduk.wufoo.com/forms/q1fny08a17izgqy/"
    >
      <input
        type="hidden"
        id="idstamp"
        name="idstamp"
        value="BeW0fITSFZDiHbYLvgftDUEN/tSI4bb6WoVsZNRc9H0="
      />
      <input
        id="hidden-input-job-title"
        name="Field1"
        type="hidden"
        value={job.title}
      />
      <div className={styles.flex}>
        <div className={styles.closeButton}>
          <CloseButton onClick={onClose} />
        </div>
        <div className={styles.container}>
          <div className={styles.heading}>Dear Deloitte Technology Hub</div>
          <div className={styles.heading}>
            {`I am interested in the role of ${job.title}, South West Tech Hub`}
          </div>
          {job.description.map(description => (
            <p key={uuid()} className={styles.description}>
              {description}
            </p>
          ))}
          <p>
            <i>
              Detailed job description <a href={withPrefix(job.url)} target="_blank" rel="noopener noreferrer">here</a>.
            </i>
          </p>
        </div>
        <div className={styles.formSection}>
          <div className={styles.container}>
            <Input
              type="text"
              placeholder="My name"
              id="Field2"
              name="Field2"
              required
            />
            <Input
              type="email"
              placeholder="My email"
              id="Field4"
              name="Field4"
              required
            />
            <Input
              type="url"
              placeholder="My url"
              id="Field11"
              name="Field11"
            />
            <Input
              type="url"
              placeholder="My LinkedIn url"
              id="Field12"
              name="Field12"
            />
            <FileInput
              label="Have a CV or Portfolio?"
              id="Field216"
              name="Field216"
              size="12"
              data-file-max-size="10"
              data-wufoo-field="file-upload"
            />
            <Checkbox
              id="Field15"
              name="Field15"
              label={
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
              }
            />
            <Checkbox
              id="Field115"
              name="Field115"
              label="I have the right to work in the UK."
            />
          </div>
        </div>
        <div className={styles.formApplySection}>
          <div className={styles.container}>
            <div className={styles.heading}>All the best for the future,</div>
            <div className={styles.center}>
              <Button type="submit" buttonStyle="solid">
                Apply
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default JobForm;
