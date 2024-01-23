import React from 'react';

interface Props {
  title: string;
  onDismiss?: React.MouseEventHandler;
}
const Button: React.FC<Props> = ({title, onDismiss}) => {
  return (
    <div>
      <button className="w-25 btn btn-primary mt-2" onClick={onDismiss}>
        {title}
      </button>
    </div>
  );
};

export default Button;