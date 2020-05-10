import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import getClassName from 'helpers/getClassName';
import selectors from 'selectors';

import './Container.scss';

class Container extends React.PureComponent {
  static propTypes = {
    isDisabled: PropTypes.bool,
    isOpen: PropTypes.bool,
    children: PropTypes.node.isRequired,
    activeHeaderItems: PropTypes.array.isRequired,
  }

  render() {
    const { isDisabled, children } = this.props;
    const className = getClassName('Container', this.props);

    if (isDisabled) {
      return null;
    }

    return (
      <div className={className} data-element="viewerContainer">
        {children}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isDisabled: selectors.isElementDisabled(state, 'viewerContainer'),
});

export default connect(mapStateToProps)(Container);
