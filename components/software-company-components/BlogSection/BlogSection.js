import React from 'react'
import blogs from '../../../api/blogs'
import Link from 'next/link'
import icon1 from '/public/images/icons/icon_calendar.svg'
import shape1 from '/public/images/shapes/shape_line_7.svg'
import shape2 from '/public/images/shapes/shape_angle_4.webp'
import Image from 'next/image'



const BlogSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="blog_section blog_section_space section_decoration">
            <div className="container">
                <div className="heading_block text-center">
                    <div className="heading_focus_text has_underline d-inline-flex" style={{ backgroundImage: `url(${'/images/shapes/shape_title_under_line.svg'})` }}>
                        Our Articles
                    </div>
                    <h2 className="heading_text mb-0">
                        Latest <mark>Articles</mark>
                    </h2>
                </div>

                <div className="row justify-content-center">
                    {blogs.slice(3, 6).map((blog, Bitem) => (
                        <div className="col-lg-4" key={Bitem}>
                            <div className="blog_post_block layout_2">
                                <div className="blog_post_image">
                                    <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`} className="image_wrap">
                                        <Image src={blog.screens} alt="" />
                                        <i className="fa-solid fa-arrow-up-right"></i>
                                    </Link>
                                </div>
                                <div className="blog_post_content p-0">
                                    <h3 className="blog_post_title mb-0">
                                        <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>
                                            {blog.title}
                                        </Link>
                                    </h3>
                                    <ul className="post_meta unordered_list">
                                        <li>
                                            <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>
                                                <i className="fa-regular fa-circle-user"></i> By <b>{blog.author}</b>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>
                                                <Image src={icon1} alt="Icon Calendar" /> {blog.create_at}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}><i className="fa-regular fa-comment-lines"></i> 24</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <div className="decoration_item shape_image_1">
                <Image src={shape1} alt="Techco Shape" />
            </div>
            <div className="decoration_item shape_image_2">
                <Image src={shape2} alt="Techco Shape Angle" />
            </div>
        </section>
    )
}

export default BlogSection;