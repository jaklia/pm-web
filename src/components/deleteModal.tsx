import { FC, useState } from 'react';
import { Modal, Button, ButtonGroup, Spinner, Alert } from 'react-bootstrap';

type DeleteModalProps<T> = {
  title: string;
  // item: T;
  handleClose: () => void;
  handleDelete: () => void;
  children?: React.ReactNode;
  show: boolean;
};

export const DeleteModal = <T extends unknown>({ ...props }: DeleteModalProps<T>) => {
  const { title, show, handleClose, handleDelete, children } = props;
  return (
    <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      {/* <Modal.Body>
          {title}
          {children}
        </Modal.Body> */}
      <Modal.Footer>
        {/* <ButtonGroup style={{ display: 'flex', flex: 1 }}> */}
        <Button variant='outline-secondary' onClick={handleClose}>
          Cancel
        </Button>
        <Button variant='danger' onClick={handleDelete}>
          Delete
          {/* {isRequesting && <Spinner size='sm' animation='border' />} */}
        </Button>
        {/* </ButtonGroup> */}
      </Modal.Footer>
    </Modal>
  );
};
