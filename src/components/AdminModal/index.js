import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

import { adminModalSelector } from '../../selectors';
import './admin-modal.css';

const AdminModal = ({ adminModal, addBooks, deleteAllBooks, setVisibility, updateTotalToAdd }) => {
  const { totalBooks, totalToAdd, showModal } = adminModal;

  return (
    <Modal backdrop={true} show={true} className="admin-modal">
      <Modal.Header>
        <Modal.Title>Admin Panel</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={12} className="text-center">
            {false && <h3>An impressive bookshelf</h3>}
            {false && <h3>A small school library</h3>}
            {false && <h3>A medium university library</h3>}
            {false && <h3>A large metropolitan library</h3>}
            <h3>A huge national library</h3>
            <small>*or the amount of programming books I have purchased and have not got around to reading yet</small>
          </Col>
        </Row>
        <Row>
          <Col xsOffset={1} xs={10}>
            <Slider
              onChange={updateTotalToAdd}
              marks={{2: '100', 3: '1k', 4: '10k', 5: '100k', 6: '1m'}}
              step={null}
              min={2}
              max={6} />
          </Col>
          <Col xs={12}>
            <Button bsStyle="success" onClick={addBooks} className="add-button" block>
              Create Books
            </Button>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={12} className="text-center">
            There are {12000 || totalBooks} books in the database
          </Col>
          <Col xs={12}>
            <Button bsStyle="danger" onClick={deleteAllBooks} className="delete-button" block>
              Delete All Books
            </Button>
          </Col>
        </Row>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={() => setVisibility(false)} >Done</Button>
      </Modal.Footer>
    </Modal>
  );
};

AdminModal.propTypes = {
  adminModal: PropTypes.shape({
    totalBooks: PropTypes.func.isRequired,
    totalToAdd: PropTypes.func.isRequired,
    showModal: PropTypes.bool.isRequired
  }),
  addBooks: PropTypes.func.isRequired,
  deleteAllBooks: PropTypes.func.isRequired,
  setVisibility: PropTypes.func.isRequired,
  updateTotalToAdd: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  adminModal: adminModalSelector(state)
};

const mapDispatchToProps = (dispatch) => ({
  addBooks: () => console.log('addBooks'),
  deleteAllBooks: () => console.log('deleteAllBooks'),
  setVisibility: () => console.log('setVisibility'),
  updateTotalToAdd: console.log
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminModal);
