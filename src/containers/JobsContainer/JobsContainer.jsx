import React from 'react';
import uuid from 'uuid/v4';
import SideBySide from '../../components/SideBySide';
import config from '../../config';
import styles from './JobsContainer.module.scss';
import Button from '../../components/Button';
import JobForm from '../../components/JobForm/JobForm';
import WidthControl from '../../components/WidthControl';
import ContentContainer from '../ContentContainer';

const defaultNumberofJobsToShow = 4;

class JobsContainer extends React.Component {
  state = {
    isJobsListExpanded: false,
    jobIdToShow: null,
  };

  render() {
    const { isJobsListExpanded, jobIdToShow } = this.state;

    return (
      <>
        <div className={styles.jobsContainer}>
          <WidthControl>
            <SideBySide
              left={
                <div className="heading-underline-teal">
                  <ContentContainer section="join-us" />
                </div>
              }
              right={
                <div className={styles.positionsContainer}>
                  <h3>Positions</h3>
                  <ul className={styles.positions}>
                    {config.jobs
                      .slice(
                        0,
                        isJobsListExpanded
                          ? config.jobs.length
                          : defaultNumberofJobsToShow
                      )
                      .map((job, i) => (
                        <div key={uuid()} className={styles.job}>
                          <li className={styles.jobTitle}>{job.title}</li>
                          <button
                            className={styles.apply}
                            type="button"
                            onClick={() => this.setState({ jobIdToShow: i })}
                          >
                            Apply
                          </button>
                        </div>
                      ))}
                  </ul>
                  {config.jobs.length > defaultNumberofJobsToShow && (
                    <div className={styles.buttonContainer}>
                      <Button
                        onClick={() =>
                          this.setState({ isJobsListExpanded: !isJobsListExpanded })
                        }
                      >
                        {isJobsListExpanded ? 'View less' : 'View more'}
                      </Button>
                    </div>
                  )}
                </div>
              }
            />
          </WidthControl>
        </div>
        {jobIdToShow !== null && (
          <div className={styles.modal}>
            <JobForm
              jobId={jobIdToShow}
              onClose={() => this.setState({ jobIdToShow: null })}
            />
          </div>
        )}
      </>
    );
  }
}

export default JobsContainer;
