import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import selectors from 'selectors';

class Container extends React.PureComponent {
  static propTypes = {
    isDisabled: PropTypes.bool,
    isOpen: PropTypes.bool,
    children: PropTypes.node.isRequired,
    activeHeaderItems: PropTypes.array.isRequired,
  }

  render() {
    const { isDisabled, children } = this.props;

    if (isDisabled) {
      return null;
    }

    return (
      <div data-element="viewerContainer">
        {children}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isDisabled: selectors.isElementDisabled(state, 'viewerContainer'),
});

export default connect(mapStateToProps)(Container);
