import Link from 'next/link';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
             <nav>
          <ul className="flex gap-6 ">
            <li className='text-red-600 hover:text-red-300'><Link href="/about/mission">Mission</Link></li>
            <li className='text-red-600 hover:text-red-300'><Link href="/about/vision">Vision</Link></li>
            
          </ul>
        </nav>
            {children}
        </div>
    );
};

export default layout;