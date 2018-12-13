import React from 'react';
import cx from 'classnames';
import styles from './FileInput.module.scss';

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: null };
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.myRef.current.onchange = () => {
      if (this.myRef.current.files.length) {
        const { name: value } = this.myRef.current.files[0];
        this.setState({ value });
      } else {
        this.setState({ value: null });
      }
    };
  }

  render() {
    const { label, id, ...rest } = this.props;

    const { value } = this.state;

    return (
      <div className={styles.fileContainer}>
        <label className={cx(styles.label)} htmlFor={id}>
          {value ? `Uploaded file ${value}` : label}
          <input type="file" id={id} ref={this.myRef} {...rest} />
        </label>
      </div>
    );
  }
}

export default FileInput;
