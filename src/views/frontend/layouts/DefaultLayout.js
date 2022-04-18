import React, { Fragment } from 'react';

import Header from './Header'
import Footer from './Footer'

const DefaultLayout = ({ children }) => {
    return (
    <>
        <Header />
        <div className="navigationWrapper">
            <main>{children}</main>
        </div>
        <Footer />
    </>
    );
};
export default DefaultLayout;