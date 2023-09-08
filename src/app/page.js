"use client";
import { images } from "@/utils/Dataj";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="relative bg-secondaryColor">
        <div className="absolute top-[18%] left-[5%] animate-pulse rounded-full">
          <Image
            className=""
            src="/image/Ellipse 1.png"
            alt="background"
            width={40}
            height={40}
          />
        </div>
        <div className="absolute md:top-[20%] md:left-[50%] animate-spin">
          <Image
            className=""
            src="/image/Ellipse 6.png"
            alt="background"
            width={40}
            height={40}
          />
        </div>
        <div className="absolute top-[50%] left-[50%] animate-spin">
          <Image
            className=""
            src="/image/Ellipse 2.png"
            alt="background"
            width={70}
            height={70}
          />
        </div>
        <div className="absolute md:top-[45%] md:left-[30%] animate-spin">
          <Image
            className=""
            src="/image/Ellipse 7.png"
            alt="background"
            width={20}
            height={20}
          />
        </div>
        <div className="absolute top-[85%] left-[5%] animate-bounce">
          <Image
            className=""
            src="/image/Ellipse 12.png"
            alt="background"
            width={20}
            height={20}
          />
        </div>
        <div className="container flex flex-col md:flex-row items-center gap-5">
          <div className="mx-auto mt-3 md:basis-1/2 lg:basis-2/5">
            <h1 className="text-primaryTextColor font-bold text-5xl md:text-3xl mt-3 font-readex">
              The <span className="text-primaryColor">Easiest Way</span> to Get
              Your New Job
            </h1>
            <p className="text-textColor text-sm md:text-xs font-hindu ml-2 mt-2">
              Each month, more than 3 million job seekers turn to website in
              their search for work, making over 140,000 applications every
              single day.
            </p>
            <div className="flex flex-col items-start gap-2">
              <div className="flex justify-start items-center p-1">
                <button className="btn btn-primary me-2">Find a job</button>
                <p className="text-primaryTextColor text-xs tracking-tighter">
                  Find a Candidate
                </p>
              </div>
              <div className="bg-white px-4 py-4 rounded-sm flex justify-center items-center">
                <button className="border rounded-sm border-textColor p-2 text-textColor text-xs">
                  Graphic Designer
                </button>
                <select
                  className="ms-2 w-24 p-2 border rounded-sm border-textColor text-textColor text-xs"
                  defaultValue="Category"
                >
                  <option className="text-textColor">Category</option>
                </select>
                <button className="btn btn btn-primary ms-2 flex items-center text-sm">
                  <AiOutlineSearch className="text-base me-2" /> Search
                </button>
              </div>
            </div>
          </div>
          <div className="mx-auto md:basis-1/2 lg:basis-2/5 animate-movingY mt-4">
            <Image
              src="/image/bghero.png"
              alt="hero-section"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>

      <section className="container">
        <div className="text-center">
          <h6 className="text-primaryColor text-base font-readex tracking-tighter">
            Featured Tours Packages
          </h6>
          <h2 className="text-primaryTextColor text-4xl font-bold font-readex tracking-tight">
            Brows Top Categories
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center mt-10">
          {images.map((item, index) => {
            return (
              <div
                className="w-48 h-auto border border-slate-300 bg-white rounded-xl shadow-lg relative"
                key={index}
              >
                <div className="w-16 h-16 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondaryColor even:bg-primaryColor  flex items-center justify-center">
                  <div>
                    <Image
                      className=""
                      src={item.images}
                      alt="featured"
                      width={30}
                      height={30}
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center relative mt-14">
                  <h6 className="tracking-tighter text-primaryTextColor font-readex text-base font-medium">
                    {item.title}
                  </h6>
                  <p className="mb-4 tracking-tighter text-textColor text-xs font-hindu">
                    12 open positions
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center mt-8">
          <button className="btn btn-primary">Explore more</button>
        </div>
      </section>

      <section className="">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="container flex flex-col md:basis-1/2 lg:basis-2/4">
            <div>
              <h1 className="text-primaryTextColor font-readex font-bold text-4xl text-center md:text-left md:text-3xl">
                Most Viewed and all-time top-selling service
              </h1>
              <p className="text-textColor font-readex text-sm text- mt-2">
                Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
                vehicula Mauris ut cursus nunc. Morbi eleifend, ligula at
                consectetur vehicula
              </p>
            </div>
            <div className="flex justify-center md:justify-start items-center gap-5 mt-3">
              <div className="w-12 h-12 rounded-full p-2 bg-primaryColor flex items-center justify-center">
                <Image
                  src="/image/first.png"
                  alt="content"
                  width={20}
                  height={20}
                />
              </div>
              <div>
                <h6 className="text-primaryTextColor font-readex font-bold tracking-tighter text-lg">
                  Post a job
                </h6>
                <p className="text-xs text-textColor font-hindu tracking-tighter">
                  Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
                  vehicula{" "}
                </p>
              </div>
            </div>
            <div className="flex justify-center md:justify-start gap-5 mt-3">
              <div className="w-12 h-12 rounded-full p-2 bg-primaryColor flex items-center justify-center">
                <Image
                  src="/image/second.png"
                  alt="content"
                  width={20}
                  height={20}
                />
              </div>
              <div>
                <h6 className="text-primaryTextColor font-readex font-bold tracking-tighter text-lg">
                  Choose Freelancer
                </h6>
                <p className="text-xs text-textColor font-hindu tracking-tighter">
                  Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
                  vehicula{" "}
                </p>
              </div>
            </div>
            <div className="flex justify-center md:justify-start items-center gap-5 mt-3">
              <div className="w-12 h-12 rounded-full p-2 bg-primaryColor flex items-center justify-center">
                <Image
                  src="/image/third.png"
                  alt="content"
                  width={20}
                  height={20}
                />
              </div>
              <div>
                <h6 className="text-primaryTextColor font-readex font-bold tracking-tighter text-lg">
                  Pay Safely
                </h6>
                <p className="text-xs text-textColor font-hindu tracking-tighter">
                  Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
                  vehicula{" "}
                </p>
              </div>
            </div>
            <div className="flex justify-center md:justify-start items-center gap-5 mt-3">
              <div className="w-12 h-12 rounded-full p-2 bg-primaryColor flex items-center justify-center">
                <Image
                  src="/image/forth.png"
                  alt="content"
                  width={20}
                  height={20}
                />
              </div>
              <div>
                <h6 className="text-primaryTextColor font-readex font-bold tracking-tighter text-lg">
                  We,re here to help
                </h6>
                <p className="text-xs text-textColor font-hindu tracking-tighter">
                  Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
                  vehicula{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto  md:basis-1/2 lg:basis-2/4">
            <Image src="/image/boy.png" alt="" width={500} height={500} />
          </div>
        </div>
      </section>

      <section className="container">
        <div className="text-center">
          <h1 className="text-primaryTextColor font-readex font-bold text-4xl md:text-3xl">
            Latest Job
          </h1>
          <p className="text-textColor font-readex text-base mt-2">
            Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
            vehicula Mauris ut cursus nunc. Morbi eleifend, ligula at
            consectetur vehicula
          </p>
        </div>
        <div className="flex flex-wrap gap-4 items-center justify-center mt-5">
          <div className="border border-primaryColor text-primaryColor p-2 text-xs rounded-md flex items-center justify-center">
            <Image
              className="me-2"
              src="/image/content.png"
              alt="featured"
              width={20}
              height={20}
            />
            Accounting
          </div>
          <div className="hover:border hover:border-primaryColor hover:text-primaryColor p-2 text-xs rounded-md flex items-center justify-center">
            <Image
              className="me-2"
              src="/image/social.png"
              alt="featured"
              width={20}
              height={20}
            />
            Marketing
          </div>
          <div className="hover:border hover:border-primaryColor hover:text-primaryColor p-2 text-xs rounded-md flex items-center justify-center">
            <Image
              className="me-2"
              src="/image/it.png"
              alt="featured"
              width={20}
              height={20}
            />
            IT Contract
          </div>
          <div className="hover:border hover:border-primaryColor hover:text-primaryColor p-2 text-xs rounded-md flex items-center justify-center">
            <Image
              className="me-2"
              src="/image/exchange.png"
              alt="featured"
              width={20}
              height={20}
            />
            Translation
          </div>
          <div className="hover:border hover:border-primaryColor hover:text-primaryColor p-2 text-xs rounded-md flex items-center justify-center">
            <Image
              className="me-2"
              src="/image/graphic.png"
              alt="featured"
              width={20}
              height={20}
            />
            Graphic Design
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
          <div className="border border-secondaryColor px-4 py-5 rounded-md ">
            <div className="flex justify-start items-center gap-2">
              <div>
                <Image
                  src="/image/Rectangle 36.png"
                  alt="projects"
                  width={50}
                  height={50}
                />
              </div>
              <div className="mb-6">
                <p className="text-sm text-primaryTextColor font-hindu font-bold">
                  Linkedin
                </p>
                <div className="flex items-center justify-start">
                  <HiOutlineLocationMarker className="text-base text-textColor font-hindu " />
                  <p className="text-xs text-textColor font-hindu ms-1">
                    Mumbai,India
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold font-readex text-primaryTextColor">
                UI&#47;UX Designer
              </h3>
              <div className="flex items-center justify-start gap-2 mt-2">
                <Image
                  src="/image/parttime.png"
                  alt="time-image"
                  width={20}
                  height={20}
                />
                <p className="text-xs text-textColor">Full Time</p>
                <Image
                  src="/image/back-in-time.png"
                  alt="time-image"
                  width={20}
                  height={20}
                />
              </div>
              <p className="text-sm tracking-tighter text-textColor mt-2">
                ed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium.
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div className="bg-secondaryColor p-2 rounded-sm text-center text-xs  text-textColor">
                  Adobe XD
                </div>
                <div className="bg-secondaryColor p-2 rounded-sm text-center text-xs  text-textColor">
                  Figma
                </div>
                <div className="bg-secondaryColor p-2 rounded-sm text-center text-xs  text-textColor">
                  PhotoShop
                </div>
              </div>
              <div className="flex justify-between items-center mt-3">
                <p className="text-sm text-primaryColor font-readex font-medium">
                  $600&#47;
                  <span className="text-xs text-textColor font-normal">
                    hour
                  </span>
                </p>
                <div className="bg-secondaryColor p-2 rounded-sm text-center text-xs  text-primaryColor">
                  Apply Now
                </div>
              </div>
            </div>
          </div>
          <div className="border border-secondaryColor px-4 py-5 rounded-md ">
            <div className="flex justify-start items-center gap-2">
              <div>
                <Image
                  src="/image/Rectangle 41.png"
                  alt="projects"
                  width={50}
                  height={50}
                />
              </div>
              <div className="mb-6">
                <p className="text-sm text-primaryTextColor font-hindu font-bold">
                  Linkedin
                </p>
                <div className="flex items-center justify-start">
                  <HiOutlineLocationMarker className="text-base text-textColor font-hindu " />
                  <p className="text-xs text-textColor font-hindu ms-1">
                    Mumbai,India
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold font-readex text-primaryTextColor">
                Full Stack Developer
              </h3>
              <div className="flex items-center justify-start gap-2 mt-2">
                <Image
                  src="/image/parttime.png"
                  alt="time-image"
                  width={20}
                  height={20}
                />
                <p className="text-xs text-textColor">Full Time</p>
                <Image
                  src="/image/back-in-time.png"
                  alt="time-image"
                  width={20}
                  height={20}
                />
              </div>
              <p className="text-sm tracking-tighter text-textColor mt-2">
                ed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium.
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div className="bg-secondaryColor p-2 rounded-sm text-center text-xs  text-textColor">
                  React
                </div>
                <div className="bg-secondaryColor p-2 rounded-sm text-center text-xs  text-textColor">
                  Node js
                </div>
                <div className="bg-secondaryColor p-2 rounded-sm text-center text-xs  text-textColor">
                  Php
                </div>
              </div>
              <div className="flex justify-between items-center mt-3">
                <p className="text-sm text-primaryColor font-readex font-medium">
                  $600&#47;
                  <span className="text-xs text-textColor font-normal">
                    hour
                  </span>
                </p>
                <div className="bg-primaryColor p-2 rounded-sm text-center text-xs  text-whiteColor">
                  Apply Now
                </div>
              </div>
            </div>
          </div>
          <div className="border border-secondaryColor px-4 py-5 rounded-md ">
            <div className="flex justify-start items-center gap-2">
              <div>
                <Image
                  src="/image/Rectangle 46.png"
                  alt="projects"
                  width={50}
                  height={50}
                />
              </div>
              <div className="mb-6">
                <p className="text-sm text-primaryTextColor font-hindu font-bold">
                  Linkedin
                </p>
                <div className="flex items-center justify-start">
                  <HiOutlineLocationMarker className="text-base text-textColor font-hindu " />
                  <p className="text-xs text-textColor font-hindu ms-1">
                    Mumbai,India
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold font-readex text-primaryTextColor md:whitespace-nowrap">
                Snr Software Engineering
              </h3>
              <div className="flex items-center justify-start gap-2 mt-2">
                <Image
                  src="/image/parttime.png"
                  alt="time-image"
                  width={20}
                  height={20}
                />
                <p className="text-xs text-textColor">Full Time</p>
                <Image
                  src="/image/back-in-time.png"
                  alt="time-image"
                  width={20}
                  height={20}
                />
              </div>
              <p className="text-sm tracking-tighter text-textColor mt-2">
                ed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium.
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div className="bg-secondaryColor p-2 rounded-sm text-center text-xs  text-textColor">
                  Python
                </div>
                <div className="bg-secondaryColor p-2 rounded-sm text-center text-xs  text-textColor">
                  Php
                </div>
                <div className="bg-secondaryColor p-2 rounded-sm text-center text-xs  text-textColor">
                  JavaScript
                </div>
              </div>
              <div className="flex justify-between items-center mt-3">
                <p className="text-sm text-primaryColor font-readex font-medium">
                  $600&#47;
                  <span className="text-xs text-textColor font-normal">
                    hour
                  </span>
                </p>
                <div className="bg-secondaryColor p-2 rounded-sm text-center text-xs  text-primaryColor">
                  Apply Now
                </div>
              </div>
            </div>
          </div>
          <div className="border border-secondaryColor px-4 py-5 rounded-md ">
            <div className="flex justify-start items-center gap-2">
              <div>
                <Image
                  src="/image/Rectangle 53.png"
                  alt="projects"
                  width={50}
                  height={50}
                />
              </div>
              <div className="mb-6">
                <p className="text-sm text-primaryTextColor font-hindu font-bold">
                  Linkedin
                </p>
                <div className="flex items-center justify-start">
                  <HiOutlineLocationMarker className="text-base text-textColor font-hindu " />
                  <p className="text-xs text-textColor font-hindu ms-1">
                    Mumbai,India
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold font-readex text-primaryTextColor">
                FrontEnd Developer
              </h3>
              <div className="flex items-center justify-start gap-2 mt-2">
                <Image
                  src="/image/parttime.png"
                  alt="time-image"
                  width={20}
                  height={20}
                />
                <p className="text-xs text-textColor">Full Time</p>
                <Image
                  src="/image/back-in-time.png"
                  alt="time-image"
                  width={20}
                  height={20}
                />
              </div>
              <p className="text-sm tracking-tighter text-textColor mt-2">
                ed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium.
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div className="bg-secondaryColor p-2 rounded-sm text-center text-xs  text-textColor">
                  Html
                </div>
                <div className="bg-secondaryColor p-2 rounded-sm text-center text-xs  text-textColor">
                  CSS
                </div>
                <div className="bg-secondaryColor p-2 rounded-sm text-center text-xs  text-textColor">
                  Bootstrap
                </div>
              </div>
              <div className="flex justify-between items-center mt-3">
                <p className="text-sm text-primaryColor font-readex font-medium">
                  $600&#47;
                  <span className="text-xs text-textColor font-normal">
                    hour
                  </span>
                </p>
                <div className="bg-secondaryColor p-2 rounded-sm text-center text-xs  text-primaryColor">
                  Apply Now
                </div>
              </div>
            </div>
          </div>
          <div className="border border-secondaryColor px-4 py-5 rounded-md ">
            <div className="flex justify-start items-center gap-2">
              <div>
                <Image
                  src="/image/Rectangle 54.png"
                  alt="projects"
                  width={50}
                  height={50}
                />
              </div>
              <div className="mb-6">
                <p className="text-sm text-primaryTextColor font-hindu font-bold">
                  Linkedin
                </p>
                <div className="flex items-center justify-start">
                  <HiOutlineLocationMarker className="text-base text-textColor font-hindu " />
                  <p className="text-xs text-textColor font-hindu ms-1">
                    Mumbai,India
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold font-readex text-primaryTextColor">
                Senior System Engineer
              </h3>
              <div className="flex items-center justify-start gap-2 mt-2">
                <Image
                  src="/image/parttime.png"
                  alt="time-image"
                  width={20}
                  height={20}
                />
                <p className="text-xs text-textColor">Full Time</p>
                <Image
                  src="/image/back-in-time.png"
                  alt="time-image"
                  width={20}
                  height={20}
                />
              </div>
              <p className="text-sm tracking-tighter text-textColor mt-2">
                ed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium.
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div className="bg-secondaryColor p-2 rounded-sm text-center text-xs  text-textColor">
                  React
                </div>
                <div className="bg-secondaryColor p-2 rounded-sm text-center text-xs  text-textColor">
                  Node js
                </div>
                <div className="bg-secondaryColor p-2 rounded-sm text-center text-xs  text-textColor">
                  Php
                </div>
              </div>
              <div className="flex justify-between items-center mt-3">
                <p className="text-sm text-primaryColor font-readex font-medium">
                  $600&#47;
                  <span className="text-xs text-textColor font-normal">
                    hour
                  </span>
                </p>
                <div className="bg-secondaryColor p-2 rounded-sm text-center text-xs  text-primaryColor">
                  Apply Now
                </div>
              </div>
            </div>
          </div>
          <div className="border border-secondaryColor px-4 py-5 rounded-md ">
            <div className="flex justify-start items-center gap-2">
              <div>
                <Image
                  src="/image/Rectangle 55.png"
                  alt="projects"
                  width={50}
                  height={50}
                />
              </div>
              <div className="mb-6">
                <p className="text-sm text-primaryTextColor font-hindu font-bold">
                  Linkedin
                </p>
                <div className="flex items-center justify-start">
                  <HiOutlineLocationMarker className="text-base text-textColor font-hindu " />
                  <p className="text-xs text-textColor font-hindu ms-1">
                    Mumbai,India
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold font-readex text-primaryTextColor">
                Product Manager
              </h3>
              <div className="flex items-center justify-start gap-2 mt-2">
                <Image
                  src="/image/parttime.png"
                  alt="time-image"
                  width={20}
                  height={20}
                />
                <p className="text-xs text-textColor">Full Time</p>
                <Image
                  src="/image/back-in-time.png"
                  alt="time-image"
                  width={20}
                  height={20}
                />
              </div>
              <p className="text-sm tracking-tighter text-textColor mt-2">
                ed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium.
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div className="bg-secondaryColor p-2 rounded-sm text-center text-xs  text-textColor">
                  React
                </div>
                <div className="bg-secondaryColor p-2 rounded-sm text-center text-xs  text-textColor">
                  Node js
                </div>
                <div className="bg-secondaryColor p-2 rounded-sm text-center text-xs  text-textColor">
                  Php
                </div>
              </div>
              <div className="flex justify-between items-center mt-3">
                <p className="text-sm text-primaryColor font-readex font-medium">
                  $600&#47;
                  <span className="text-xs text-textColor font-normal">
                    hour
                  </span>
                </p>
                <div className="bg-secondaryColor p-2 rounded-sm text-center text-xs  text-primaryColor">
                  Apply Now
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-6 flex items-center justify-center">
          <button className="btn btn-primary">View all</button>
        </div>
      </section>

      <section className="container">
        <div className="flex flex-col items-center justify-center">
          <h6 className="text-primaryColor text-sm font-medium">
            Client Testomonials
          </h6>
          <h2 className="text-primaryTextColor text-2xl font-readex tracking-tight font-bold">
            What a job holder says about us
          </h2>
          <p className="text-textColor text-center text-base font-light tracking-tight">
            Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
            vehicula Mauris ut cursus nunc. Morbi eleifend, ligula at
            consectetur vehicula
          </p>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          modules={[Pagination]}
          className="container mt-4"
        >
          <SwiperSlide className="relative flex items-center justify-center">
            <div className="w-full md:w-80 h-auto bg-secondaryColor rounded-md px-2 py-2 shadow-lg relative">
              <div className="border border-primaryColor w-20 h-20 absolute top-[9%] left-1/2  -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center">
                <div>
                  <Image
                    className=""
                    src="/image/woman.png"
                    alt="featured"
                    width={70}
                    height={70}
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center relative mt-14">
                <h3 className=" text-center font-medium ">Andnew Smith</h3>
                <h6 className="text-primaryColor whitespacing-nowrap text-xs text-center">
                  One Year With Us
                </h6>
                <p className="text-textColor text-center text-sm">
                  Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
                  vehicula Mauris ut cursus nunc. Morbi eleifend, ligula at
                  consectetur vehicula
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative flex items-center justify-center">
            <div className="w-full md:w-80 h-auto bg-secondaryColor rounded-md px-2 py-2 shadow-lg relative">
              <div className="border border-primaryColor w-20 h-20 absolute top-[9%] left-1/2  -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center">
                <div>
                  <Image
                    className=""
                    src="/image/person.png"
                    alt="featured"
                    width={70}
                    height={70}
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center relative mt-14">
                <h3 className=" text-center font-medium ">Andnew Smith</h3>
                <h6 className="text-primaryColor whitespacing-nowrap text-xs text-center">
                  One Year With Us
                </h6>
                <p className="text-textColor text-center text-sm">
                  Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
                  vehicula Mauris ut cursus nunc. Morbi eleifend, ligula at
                  consectetur vehicula
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative flex items-center justify-center">
            <div className="w-full md:w-80 h-auto bg-secondaryColor rounded-md px-2 py-2 shadow-lg relative">
              <div className="border border-primaryColor w-20 h-20 absolute top-[9%] left-1/2  -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center">
                <div>
                  <Image
                    className=""
                    src="/image/happy.png"
                    alt="featured"
                    width={70}
                    height={70}
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center relative mt-14">
                <h3 className=" text-center font-medium ">Andnew Smith</h3>
                <h6 className="text-primaryColor whitespacing-nowrap text-xs text-center">
                  One Year With Us
                </h6>
                <p className="text-textColor text-center text-sm">
                  Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
                  vehicula Mauris ut cursus nunc. Morbi eleifend, ligula at
                  consectetur vehicula
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative flex items-center justify-center">
            <div className="w-full md:w-80 h-auto bg-secondaryColor rounded-md px-2 py-2 shadow-lg relative">
              <div className="border border-primaryColor w-20 h-20 absolute top-[9%] left-1/2  -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center">
                <div>
                  <Image
                    className=""
                    src="/image/woman.png"
                    alt="featured"
                    width={70}
                    height={70}
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center relative mt-14">
                <h3 className=" text-center font-medium ">Andnew Smith</h3>
                <h6 className="text-primaryColor whitespacing-nowrap text-xs text-center">
                  One Year With Us
                </h6>
                <p className="text-textColor text-center text-sm">
                  Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
                  vehicula Mauris ut cursus nunc. Morbi eleifend, ligula at
                  consectetur vehicula
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative flex items-center justify-center">
            <div className="w-full md:w-80 h-auto bg-secondaryColor rounded-md px-2 py-2 shadow-lg relative">
              <div className="border border-primaryColor w-20 h-20 absolute top-[9%] left-1/2  -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center">
                <div>
                  <Image
                    className=""
                    src="/image/person.png"
                    alt="featured"
                    width={70}
                    height={70}
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center relative mt-14">
                <h3 className=" text-center font-medium ">Andnew Smith</h3>
                <h6 className="text-primaryColor whitespacing-nowrap text-xs text-center">
                  One Year With Us
                </h6>
                <p className="text-textColor text-center text-sm">
                  Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
                  vehicula Mauris ut cursus nunc. Morbi eleifend, ligula at
                  consectetur vehicula
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative flex items-center justify-center">
            <div className="w-full md:w-80 h-auto bg-secondaryColor rounded-md px-2 py-2 shadow-lg relative">
              <div className="border border-primaryColor w-20 h-20 absolute top-[9%] left-1/2  -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center">
                <div>
                  <Image
                    className=""
                    src="/image/happy.png"
                    alt="featured"
                    width={70}
                    height={70}
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center relative mt-14">
                <h3 className=" text-center font-medium ">Andnew Smith</h3>
                <h6 className="text-primaryColor whitespacing-nowrap text-xs text-center">
                  One Year With Us
                </h6>
                <p className="text-textColor text-center text-sm">
                  Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
                  vehicula Mauris ut cursus nunc. Morbi eleifend, ligula at
                  consectetur vehicula
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="container">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-primaryTextColor text-2xl font-readex tracking-tight font-bold">
            News & Blogs
          </h2>
          <p className="text-textColor text-center text-base font-light tracking-tight">
            Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
            vehicula Mauris ut cursus nunc. Morbi eleifend, ligula at
            consectetur vehicula
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center  mt-4">
          <div className="border border-secondaryColor px-4 py-4 w-64 rounded-md">
            <div>
              <Image
                src="/image/Rectangle 72.png"
                alt="blog"
                width={400}
                height={400}
              />
            </div>
            <div>
              <button className="bg-secondaryColor p-1 w-14 h-auto text-sm text-primaryColor mt-4 rounded-sm">
                News
              </button>
              <h2 className="mt-2 text-primaryTextColor font-bold font-readex text-sm">
                21 Job interview Tips: How To make a great impression{" "}
              </h2>
              <p className="text-textColor font-light tracking-tight text-sm text-justify ">
                Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
                vehicula Mauris ut cursus nunc. Morbi eleifend, ligula at
                consectetur vehicula
              </p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center justify-start w-24 me-4">
                <Image
                  src="/image/Ellipse 47.png"
                  alt="blog"
                  width={40}
                  height={40}
                />
                <div>
                  <h6 className="font-bold text-xs whitespace-nowrap text-primaryTextColor ">
                    Sarah Hardling
                  </h6>
                  <p className="text-textColor text-xs font-light">
                    6 July 2023
                  </p>
                </div>
              </div>
              <div className="text-xs mt-4 text-textColor font-light">
                8 minutes ago
              </div>
            </div>
          </div>
          <div className="border border-secondaryColor px-4 py-4 w-64 rounded-md">
            <div>
              <Image src="/image/72.png" alt="blog" width={400} height={400} />
            </div>
            <div>
              <button className="bg-secondaryColor p-1 w-14 h-auto text-sm text-primaryColor mt-4 rounded-sm">
                News
              </button>
              <h2 className="mt-2 text-primaryTextColor font-bold font-readex text-sm">
                21 Job interview Tips: How To make a great impression{" "}
              </h2>
              <p className="text-textColor font-light tracking-tight text-sm text-justify ">
                Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
                vehicula Mauris ut cursus nunc. Morbi eleifend, ligula at
                consectetur vehicula
              </p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center justify-start w-24 me-4">
                <Image src="/image/9.png" alt="blog" width={40} height={40} />
                <div>
                  <h6 className="font-bold text-xs whitespace-nowrap text-primaryTextColor ">
                    Sarah Hardling
                  </h6>
                  <p className="text-textColor text-xs font-light">
                    6 July 2023
                  </p>
                </div>
              </div>
              <div className="text-xs mt-4 text-textColor font-light">
                8 minutes ago
              </div>
            </div>
          </div>
          <div className="border border-secondaryColor px-4 py-4 w-64 rounded-md">
            <div>
              <Image src="/image/73.png" alt="blog" width={400} height={400} />
            </div>
            <div>
              <button className="bg-secondaryColor p-1 w-14 h-auto text-sm text-primaryColor mt-4 rounded-sm">
                News
              </button>
              <h2 className="mt-2 text-primaryTextColor font-bold font-readex text-sm">
                21 Job interview Tips: How To make a great impression{" "}
              </h2>
              <p className="text-textColor font-light tracking-tight text-sm text-justify ">
                Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
                vehicula Mauris ut cursus nunc. Morbi eleifend, ligula at
                consectetur vehicula
              </p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center justify-start w-24 me-4">
                <Image src="/image/7.png" alt="blog" width={40} height={40} />
                <div>
                  <h6 className="font-bold text-xs whitespace-nowrap text-primaryTextColor ">
                    Sarah Hardling
                  </h6>
                  <p className="text-textColor text-xs font-light">
                    6 July 2023
                  </p>
                </div>
              </div>
              <div className="text-xs mt-4 text-textColor font-light">
                8 minutes ago
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[url(/image/Group 73.png)] bg-contain bg-center container max-w-4xl ">
          <div className="rounded-lg bg-primaryColor p-4 flex items-center justify-between">
            <div className="w-96 px-2 py-2">
              <h1 className="text-white text-xl font-readex font-bold">
                Lets Get Connected And Start Finding Your Dream Job
              </h1>
            </div>
            <div className="w-96 px-2 py-2 flex items-end justify-end">
              <button className="bg-white text-xs font-readex w-24 p-2 rounded-sm font-light text-primaryTextColor">
                Click Here
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer>
        <section className="footer">
          <div className="container">
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5">
              <li>
                <div className="">
                  <Link
                    href="#"
                    className="text-2xl font-bold text-primaryTextColor tracking-tighter"
                  >
                    Hire<span className="text-primaryColor">ON</span>
                  </Link>
                  <p className="text-xs">
                    Mauris ut cursus nunc.Morbi eleifend,ligula at consectetur
                    vehicula Mauris ut cursus nunc.Morbi eleifend,ligula at
                    consectetur vehicula
                  </p>
                </div>
              </li>

              <li>
                <div className="flex flex-col gap-2">
                  <h3 className="text-sm capitalize tracking-tight font-readex text-primaryTextColor font-bold">
                    Useful Links
                  </h3>
                  <Link
                    href="#"
                    className="text-xs tracking-tight font-medium text-primaryTextColor"
                  >
                    Find a job
                  </Link>
                  <Link
                    href="#"
                    className="text-xs tracking-tight font-medium text-primaryTextColor"
                  >
                    Companies
                  </Link>
                  <Link
                    href="#"
                    className="text-xs tracking-tight font-medium text-primaryTextColor"
                  >
                    About Us
                  </Link>
                  <Link
                    href="#contact"
                    className="text-xs tracking-tight font-medium text-primaryTextColor"
                  >
                    Post a job
                  </Link>
                  <Link
                    href="#contact"
                    className="text-xs tracking-tight font-medium text-primaryTextColor"
                  >
                    Testimonals
                  </Link>
                </div>
              </li>

              <li>
                <div className="flex flex-col gap-2">
                  <h3 className="text-sm capitalize tracking-tight font-readex text-primaryTextColor font-bold">
                    Category
                  </h3>
                  <Link
                    href="#"
                    className="text-xs tracking-tight font-medium text-primaryTextColor"
                  >
                    UI Designer
                  </Link>
                  <Link
                    href="#"
                    className="text-xs tracking-tight font-medium text-primaryTextColor"
                  >
                    Graphic Designer
                  </Link>
                  <Link
                    href="#"
                    className="text-xs tracking-tight font-medium text-primaryTextColor"
                  >
                    Software Engineer
                  </Link>
                  <Link
                    href="#contact"
                    className="text-xs tracking-tight font-medium text-primaryTextColor"
                  >
                    Web Developer
                  </Link>
                  <Link
                    href="#contact"
                    className="text-xs tracking-tight font-medium text-primaryTextColor"
                  >
                    More
                  </Link>
                </div>
              </li>

              <li>
                <div className="flex flex-col gap-2">
                  <h3 className="text-sm capitalize tracking-tight font-readex text-primaryTextColor font-bold">
                    Follow Us
                  </h3>
                  <Link
                    href="#"
                    className="text-xs tracking-tight font-medium text-primaryTextColor"
                  >
                    Linkedin
                  </Link>
                  <Link
                    href="#"
                    className="text-xs tracking-tight font-medium text-primaryTextColor"
                  >
                    Facebook
                  </Link>
                  <Link
                    href="#"
                    className="text-xs tracking-tight font-medium text-primaryTextColor"
                  >
                    Instagram
                  </Link>
                  <Link
                    href="#contact"
                    className="text-xs tracking-tight font-medium text-primaryTextColor"
                  >
                    Dribble
                  </Link>
                  <Link
                    href="#contact"
                    className="text-xs tracking-tight font-medium text-primaryTextColor"
                  >
                    Behance
                  </Link>
                </div>
              </li>

              <li className="">
                <div>
                  <Link
                    href="#"
                    className="text-xs font-bold text-primaryTextColor"
                  >
                    NewsLetter
                  </Link>
                  <p className="text-xs">
                    Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
                    vehicula
                  </p>
                  <div className="w-42 border border-primaryColor rounded-sm px-2 py-1 mt-2 flex items-center justify-between">
                    <input
                      type="email"
                      placeholder="Enter email address"
                      className="w-16 outline-none placeholder:text-xs"
                    />
                    <button className="bg-primaryColor text-white text-xs p-1 ms-4 rounded-sm">
                      Send
                    </button>
                  </div>
                </div>
              </li>
            </ul>

            <div className="flex flex-col items-center border-t mt-8 w-full border-slate-200 py-5 ">
              <p className="text-sm font-medium font-readex tracking-tight">
              Design &#38; Developed by <span className="text-primaryColor">ZySoftec</span>.
              </p>
            </div>
          </div>
        </section>
      </footer>
    </main>
  );
}
