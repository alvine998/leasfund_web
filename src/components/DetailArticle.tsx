import { ArrowLeftIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import React from 'react'

export default function DetailArticle() {
  return (
    <div className='bg-white w-full min-h-screen lg:px-60 lg:pt-40'>
        <Link href={'/article'} className='text-black flex items-center gap-2'>
            <ArrowLeftIcon className='w-7'/>
            <p>Kembali</p>
        </Link>
        <div className='bg-white w-full h-auto shadow rounded p-4'>
            <h1 className='text-2xl font-bold text-black text-center'>Judul Artikel 1</h1>
            <p className='text-gray-800 text-md text-justify'>Isi Artikel</p>
        </div>
    </div>
  )
}
