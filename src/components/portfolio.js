import { useEffect, useState } from 'react';
import Image from 'next/image.js';
import classNames from 'classnames';
import SectionHeading from './common/section-heading.js';

export default function Portfolio() {
  const [visible, setVisible] = useState(0);

  const images = [
    '/images/carousel/carousel-1.jpg',
    '/images/carousel/carousel-2.jpg',
    '/images/carousel/carousel-3.jpg',
  ];

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setVisible((visible) => (visible + 1) % images.length);
  //   }, 2000);
  //   return () => clearInterval(timer);
  // });

  const handlePrevClick = () => {
    setVisible((visible) => (visible === 0 ? images.length - 1 : visible - 1));
  };

  return (
    <section
      id="portfolio"
      className="flex justify-center items-center flex-col gap-16 mt-16"
    >
      <SectionHeading label="Portfolio" />
      <div className="w-full relative">
        <div className="relative overflow-hidden rounded-lg h-96">
          {images.map((image, index) => (
            <div
              key={index}
              className={classNames(
                'duration-700 ease-in-out absolute w-full inset-0 transition-transform transform',
                { '-translate-x-0 z-10': index - visible === -1 },
                { 'translate-x-0 z-20': index - visible === 0 },
                { 'translate-x-full z-10': index - visible === 1 }
              )}
            >
              <Image
                src={image}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="image"
                width={1000}
                height={1000}
              />
            </div>
          ))}
        </div>
        {/* <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div> */}
        <button
          type="button"
          class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handlePrevClick}
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </section>
  );
}
