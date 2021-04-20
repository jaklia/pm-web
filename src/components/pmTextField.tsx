import { FC } from 'react';

type FormFieldProps = {
  value: string;
  label: string;
  type: string;
  onChange: (value: string) => void;
};

export const PmTextField: FC<FormFieldProps> = ({ ...props }) => {
  const { value, label, type, onChange } = props;
  return (
    <div className='formField'>
      <label className='formFieldLabel' htmlFor='username'>
        {label}
      </label>
      <input
        type={type}
        className='formFieldInput'
        name='username'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  //  :focus-within ???  leaving style in css for now
};
