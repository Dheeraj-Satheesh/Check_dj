/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
'use client';import { blog_data } from '@/Assets/assets';
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { assets } from '@/Assets/assets';
import Footer from '@/Components/Footer';
import Link from 'next/link';
import axios from 'axios';

const Page = ({ params }) => {
  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    const response= await axios.get('/api/blog',{
      params:{
        id:params.id
      }
    })
    setData(response.data);
  }

  useEffect(()=>{
    fetchBlogData();
  },[])

  return (data?<>
    <div className='bg-gray-200 py-5 px-5 md:px-1 lg:px-28'>
      <div className='flex justify-between items-center'>
          <Link href='/'>
          <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto '/>
          </Link>
          <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border  border-black shadow-[-7px_7px_0px_#000000]'>
          Get started 
          <Image src={assets.arrow} alt='' />
         </button>
      </div>
      <div className='text-center my-24'>
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
        <Image className='mx-auto mt-6 border border-white rounded-full' src={data.authorImg} width={60} height={60} />
        <p className='mt-1 pb-2 text-large max-w-[740px] mx-auto'>{data.author}</p>
      </div>
    </div>
    <div className='max-w-[800px] mx-auto md:max-w-auto mt-[-100px] mb-10'>
         <Image className='border-4 border-white' src={data.image} width={1280} height={720} alt='' />
         
         <div className='blog-content' dangerouslySetInnerHTML={{__html:data.description}}></div>
         
         
         <div className='my-24'>
          <p className='text-black font:semi-bold my-4 '>Share this article on Social Media</p>
          <div className='flex'>
              <Image className='' src={assets.facebook_icon} width={50} alt=''/>
              <Image className='' src={assets.twitter_icon} width={50} alt=''/>
              <Image className='' src={assets.googleplus_icon} width={50} alt=''/>
          </div>
      </div>
    </div>
    <Footer/>
    </>:<></>
  )
}

export default Page;
