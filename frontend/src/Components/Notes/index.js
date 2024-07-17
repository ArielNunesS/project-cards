import React from 'react';

function Notes({ data }) {
    return (
<>
    <li className='notepad-info'>
        <div>
            <strong>{data.title}</strong>
                    <div>
                        x
                    </div>

        </div>
        <textarea defaultValue={data.notes}></textarea>
    </li>
</>
    )
}

export default Notes;