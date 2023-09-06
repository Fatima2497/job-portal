import { images } from "@/utils/Dataj";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

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
          <div className="border border-primaryColor px-4 py-5 rounded-md ">
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
          <div className="border border-primaryColor px-4 py-5 rounded-md ">
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
          <div className="border border-primaryColor px-4 py-5 rounded-md ">
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
          <div className="border border-primaryColor px-4 py-5 rounded-md ">
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
          <div className="border border-primaryColor px-4 py-5 rounded-md ">
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
          <div className="border border-primaryColor px-4 py-5 rounded-md ">
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
    </main>
  );
}
