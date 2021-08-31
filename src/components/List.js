// component to be used to render an unordered list!

import React from 'react';

const List =({ data =[], renderItem, renderEmpty })=> {
    return !data.length ? (
        renderEmpty
    ) : (
        <ul className="list">
            {data.map((item, i) => (
                <li key={i}>{renderItem(item)}</li>
            ))}
        </ul>
    )
}

export default List;