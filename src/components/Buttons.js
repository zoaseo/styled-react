import React from 'react';
import classNames from 'classname';
import './Button.scss';

const Buttons = ({children, size, color, outline, fullWidth}) => {
    return (
        // <button className={`button ${size} ${color}`}>{children}</button>
        <button className={classNames('button',size, color, {outline, fullWidth})}>{children}</button>
    );
};

export default Buttons;