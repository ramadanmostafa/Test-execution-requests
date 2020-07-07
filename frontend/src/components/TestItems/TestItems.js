import React from 'react';
import TestItem from './TestItem/TestItem';

const items = (props) => (
  props.items.map((item) => {
    return (
        <TestItem
            key={item.id}
            ID={item.id}
            createdAt={item.created_at}
            env_name={item.env_name}
            requestedBy={item.requested_by}
            status={item.status}
            path={item.displayPath}
            click={props.clicked.bind(this, item.id)}
        />
    );
  })
);

export default items;