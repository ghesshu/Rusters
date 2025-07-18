
import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Header4 from '../../components/header4/Header4';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import TokenSection from '../../components/Memecoin-Components/TokenSection/TokenSection';

const TokenPage = (props) => {

    return (
        <Fragment>
            <div className='index_ico page_wrapper'>
                <Header4 />
                <main className="page_content">
                    <PageTitle pageTitle={'Get Token'} pagesub={'Token'} />
                    <TokenSection tokenClass={'token-sec pt-0'}/>
                </main>
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default TokenPage;