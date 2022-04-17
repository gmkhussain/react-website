import React, { Fragment } from 'react';

import Header from './Header'

const DefaultLayout = ({ children }) => {
    return (
    <>
        <Header />
        <div className="navigationWrapper">
            <main>{children}</main>
        </div>
    </>
    );
};
export default DefaultLayout;