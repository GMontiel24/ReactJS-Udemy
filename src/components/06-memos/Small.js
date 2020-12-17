import React from 'react';

export const Small = React.memo(({ value }) => {

    console.log('Component Small montado');

    return (
        <small>{value}</small>
    )
})
