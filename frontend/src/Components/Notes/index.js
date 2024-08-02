import React, { useState } from 'react';
import { AiFillDelete, AiOutlineExclamation } from 'react-icons/ai';
import './styles.css';
import './styles-priority.css';
import api from '../../services/api';

function Notes({ data }) {

        const handleMouseEnter = (e) => {
            e.currentTarget.classList.add('hover');
        };

        const handleMouseLeave = (e) => {
            e.currentTarget.classList.remove('hover');
        };

        const [ changedNote, setChangedNote ] = useState('');

        async function handleSave (notes) {
            if(changedNote && changedNote !== notes){
                await api.post(`/contents/${data._id}`, {
                    notes: changedNote,
                });
            }
        }


    return (
<>
    <li className={data.priority ? "notepad-info-priority" : "notepad-info"}
        onMouseOver={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    >
        <div>
            <strong>{data.title}</strong>
                    <div>
                        <span id='deleteBtn'>
                            <AiFillDelete size="18"/>
                        </span>
                            <div>
                                <span id='priorityBtn'>
                                    <AiOutlineExclamation size="20"/>
                                </span>
                            </div>
                    </div>
        </div>
            <textarea
            defaultValue={data.notes}
            onChange={e => setChangedNote(e.target.value)}
            onBlur={e => handleSave(e.target, data.notes)}
            />
    </li>
</>)
}

export default Notes;
