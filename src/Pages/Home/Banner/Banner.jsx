import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
const Banner = () => {
  return (
    <div className="my-10">
      <div className="carousel w-full h-[80vh] ">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full" />
          <div className="absolute h-full flex items-center gap-3 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] px-20">
            <div className="text-white w-1/2">
              <h2 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p className="my-8">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="space-x-3">
                <button className="px-5 py-4 bg-[#FF3811] rounded-md">Discover more</button>
                <button className="px-5 py-4 text-white border p-8 rounded-md">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
          <div className="absolute h-full flex items-center gap-3 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] px-20">
            <div className="text-white w-1/2">
              <h2 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p className="my-8">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="space-x-3">
                <button className="px-5 py-4 bg-[#FF3811] rounded-md">Discover more</button>
                <button className="px-5 py-4 text-white border p-8 rounded-md">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
          <div className="absolute h-full flex items-center gap-3 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] px-20">
            <div className="text-white w-1/2">
              <h2 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p className="my-8">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="space-x-3">
                <button className="px-5 py-4 bg-[#FF3811] rounded-md">Discover more</button>
                <button className="px-5 py-4 text-white border p-8 rounded-md">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
          <div className="absolute h-full flex items-center gap-3 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] px-20">
            <div className="text-white w-1/2">
              <h2 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p className="my-8">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="space-x-3">
                <button className="px-5 py-4 bg-[#FF3811] rounded-md">Discover more</button>
                <button className="px-5 py-4 text-white border p-8 rounded-md">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
