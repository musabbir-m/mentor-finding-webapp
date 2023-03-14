import React from 'react';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
    return (
        <div className='h-24 bg-slate-100 py-4 px-3 '>
            <div>
                <h6>Findmentor</h6>
            </div>
            <div>
                  <Link to='/login'></Link>
            </div>
        </div>
    );
};

export default Navbar2;