import { FC } from 'react';
import { Modal, Button, ButtonGroup, Spinner } from 'react-bootstrap';

type DeleteModalProps<T> = {
  title: string;
  item: T;
  handleClose: () => void;
  handleDelete: () => void;
};

export const DeleteModal: FC = () => {
  return (
    <></>
    // <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
    //   <Modal.Header closeButton>
    //     <Modal.Title>{edited.id === 0 ? 'Create project' : 'Edit project'}</Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body></Modal.Body>
    //   <Modal.Footer>
    //     <ButtonGroup style={{ display: 'flex', flex: 1 }}>
    //       <Button variant='outline-secondary' onClick={handleClose}>
    //         Cancel
    //       </Button>
    //       <Button variant='danger' onClick={handleSave}>
    //         'Delete'
    //         {isRequesting && <Spinner size='sm' animation='border' />}
    //       </Button>
    //     </ButtonGroup>
    //   </Modal.Footer>
    // </Modal>
  );
};
