import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { propOr } from 'ramda';

import { errorModalSelector } from '../../selectors';
import { dismissError } from '../../actions';

const ErrorModal = ({ errorState, dismissError }) => {
  const { error, showModal } = errorState;

  return (
    <Modal backdrop={true} show={showModal} className="error-modal">
      <Modal.Header>
        <Modal.Title>{propOr('', 'message', error)}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={12}>
            <p>Oops&hellip; Something went wrong.</p>
            <p>Perhaps the information below can be used to help debug the issue.</p>
          </Col>
          <Col xs={12}>
            <pre>{propOr('', 'stack', error)}</pre>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={dismissError}>Done</Button>
      </Modal.Footer>
    </Modal>
  );
};

ErrorModal.propTypes = {
  errorState: PropTypes.shape({
    error: PropTypes.object.isRequired,
    showModal: PropTypes.bool.isRequired
  }).isRequired
};

const mapStateToProps = (state) => ({
  errorState: errorModalSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  dismissError: () => dispatch(dismissError())
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorModal);
