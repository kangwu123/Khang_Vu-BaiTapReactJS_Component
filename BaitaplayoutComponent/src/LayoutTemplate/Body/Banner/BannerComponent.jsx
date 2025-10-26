import React from 'react'

const BannerComponent = () => {
    return (
        <div>
            <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow-sm text-left">
                <a href="#">
                    <h2 className="mb-2 text-6xl tracking-tight text-gray-900">A Warm Welcome!</h2>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, magni quod delectus ad beatae architecto dolorum sapiente alias officiis, recusandae molestias eum pariatur, quam repellat! Odit alias voluptatem ipsam nam.</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 hover:bg-red-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default BannerComponent
