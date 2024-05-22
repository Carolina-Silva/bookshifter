import React from 'react';

const Alert = ({ message }) => {
    return (
        message && <div className="alert">{message}</div>
    );
};

export default Alert;