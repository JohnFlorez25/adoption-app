
import React from 'react';

import BottomNavBar from './BottomNavBar';

const Layout = (props) =>{
    return(
        <React.Fragment>
            {props.children}
            <BottomNavBar />
        </React.Fragment>
    )

}

export default Layout;