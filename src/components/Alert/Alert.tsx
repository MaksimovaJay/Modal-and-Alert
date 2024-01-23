import React from 'react';

interface Props extends React.PropsWithChildren {
  text: string;
  type: string;
  show: boolean;
  onDismiss?: React.MouseEventHandler;

}

const Alert: React.FC<Props> = ({text, type, show, children, onDismiss}) => {
  let buttonCLose: boolean = true;
  buttonCLose = onDismiss ? true : false;

  return (
    <>
      <div role="alert" className={`fade alert alert-${type} alert-dismissible show`}
           style={{display: show ? 'block' : 'none'}}>

        <button type="button" className="btn-close" aria-label="Close"
                onClick={onDismiss} style={{display: buttonCLose ? 'block' : 'none'}}
        >
        </button>

        <p>{text}</p>
        {children}

      </div>
    </>
  )
    ;
};

export default Alert;