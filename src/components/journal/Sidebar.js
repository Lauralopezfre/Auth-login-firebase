import React from 'react'
import { useDispatch } from 'react-redux'

import { startLogout } from '../../actions/auth';

export const Sidebar = () => {

    const dispatch = useDispatch();

    const hanleLogout = () => {
        dispatch( startLogout() )
    }

    return (
        <aside>
            
            <div>

                <button
                    onClick={ hanleLogout }
                >
                    Logout
                </button>
            </div>

        </aside>
    )
}
