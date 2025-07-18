import React, { Fragment } from 'react';
import blogs from '../../api/blogs'
import { useRouter } from 'next/router'
import BlogSingle from '../../components/BlogDetails/BlogDetails';
import PageTitle from '../../components/pagetitle/PageTitle';
import Header4 from '../../components/header4/Header4';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';


const BlogDetails = (props) => {

    const router = useRouter()

    const BlogDetails = blogs.find(item => item.slug === router.query.slug)

    return (
        <Fragment>
            <div className='index_ico page_wrapper'>
                <Header4 />
                <main className="page_content">
                    <PageTitle pageTitle={BlogDetails?.title} pagesub={'Home'} />
                    <BlogSingle />
                </main>
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default BlogDetails;