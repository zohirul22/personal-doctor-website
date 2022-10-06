import React from 'react';
import { Helmet } from 'react-helmet';

const TittlePage = ({ title }) => {
    return (
        <div>
            <Helmet>
                <title> {title}-personal doctor website</title>

            </Helmet>
        </div>
    );
};

export default TittlePage;