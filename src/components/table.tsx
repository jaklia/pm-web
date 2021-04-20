import { Table, Button } from 'react-bootstrap';

import { FiEdit, FiTrash } from 'react-icons/fi';

export type TableProps<T> = {
  header: string[];
  renderRow: (item: T) => JSX.Element;
  data: T[];
  onEdit: (item: T) => void;
  onDelete: (item: T) => void;
};

const PmTable = <T extends unknown>({ ...props }: TableProps<T>) => {
  const { header, renderRow, data, onEdit, onDelete } = props;
  //  className={'pmtable'}  doesn't work, it puts this className first, and overwrites it with it's own styles
  //   FIXME:   inline style only, because className won't work
  return (
    <div>
      <Table striped bordered hover className={'pmtable'}>
        <thead>
          <tr>
            {header.map((item) => (
              <th key={item}>{item}</th>
            ))}
            <th key={'actions_'}></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr key={i.toString()}>
                {renderRow(item)}
                <td>
                  {/* <ButtonToolbar> */}
                  <Button
                    style={styles.btnRightMargin}
                    variant='outline-primary'
                    onClick={() => onEdit(item)}>
                    <FiEdit style={styles.btnIcon} />
                  </Button>
                  <Button
                    style={styles.btn}
                    variant='outline-danger'
                    onClick={() => onDelete(item)}>
                    <FiTrash style={styles.btnIcon} />
                  </Button>
                  {/* </ButtonToolbar> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
export default PmTable;

const styles: { [key: string]: React.CSSProperties } = {
  btnRightMargin: {
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 12,
  },
  btn: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  btnIcon: {
    display: 'flex',
    alignSelf: 'center',
  },
};

/*


import { FC } from 'react';
import { Table, Button } from 'react-bootstrap';

import { FiEdit, FiTrash } from "react-icons/fi";

export type TableProps<T> = {
  header: string[],
  renderRow: (item: T) => JSX.Element,
  data: T[]
}

const PmTable = <T extends { id: number }>(
  { ...props }: TableProps<T>
) => {
  const {
    header,
    renderRow,
    data
  } = props;
  return (
    <Table striped bordered hover className={'pmtable'} >
      <thead>
        {
          header.map(item => <th>{item}</th>)
        }
        <th></th>
      </thead>
      <tbody>
        {
          data.map((item) => {
            return (
              <tr>
                {renderRow(item)}
                <td style={{ verticalAlign: 'middle' }}>
                  <Button variant='outline-primary'>
                    <FiEdit />
                  </Button>

             <Button variant='outline-danger'>
             <FiTrash />
           </Button>
         </td>
       </tr>
     );
   })
 }
</tbody>
</Table>
)
}
export default PmTable;

*/
