import React from 'react';
import { faClock, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
    return (
        <div className='header p-2 flex'>
            <div>
                <button className='text-sm'>
                    <FontAwesomeIcon icon={faPhone} className='mx-2'/>
                    (718) 717-2150
                </button>
                <button>
                <FontAwesomeIcon icon={faEnvelope} className='mx-2'/>
                    (718) 717-2150
                </button>
                <button>
                <FontAwesomeIcon icon={faClock}  className='mx-2'/>
                    (718) 717-2150
                </button>
            </div>
            <div>

            </div>
        </div>
    );
}
