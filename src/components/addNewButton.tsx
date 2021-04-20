import { FC } from 'react';
import { Modal, Button, ButtonGroup, Spinner, ButtonProps } from 'react-bootstrap';
import { FiPlus } from 'react-icons/fi';

export const AddNewButton: FC<ButtonProps> = ({ ...props }) => {
  return (
    <Button style={btnStyle} variant='outline-success' onClick={props.onClick}>
      <FiPlus />
      <span>Add new</span>
    </Button>
  );
};

const btnStyle: React.CSSProperties = {
  display: 'flex',
  alignContent: 'center',
  alignItems: 'center',
};
