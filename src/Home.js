import "./App.css";
import logo from "./img/frontend-backend.png";
import logo1 from "./img/about-us.jpg";
// import  book  from "bootstrap-icons/icons/book.svg";
function App() {
  return (
    <>
      <div>
        {/* Navbar Start */}
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
          <a
            href="index.html"
            className="navbar-brand d-flex align-items-center px-4 px-lg-5"
          >
            <h2 className="m-0 text-primary">
              {/* <FontAwesomeIcon icon="fa-solid fa-book" />Web Design */}
              {/* <i className="fa fa-book me-3"> Web Design</i> */}
            </h2>
          </a>
          <button
            type="button"
            className="navbar-toggler me-4"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
              <a href="index.html" className="nav-item nav-link active">
                Trang chủ
              </a>
              <a href="about.html" className="nav-item nav-link">
                Giới thiệu
              </a>
              <a href="courses.html" className="nav-item nav-link">
                Lộ trình
              </a>
              <div className="nav-item dropdown">
                <a
                  href="/#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Khóa học
                </a>
                <div className="dropdown-menu fade-down m-0">
                  <a href="frontend.html" className="dropdown-item">
                    Front-End
                  </a>
                  <a href="backend.html" className="dropdown-item">
                    Back-End
                  </a>
                </div>
              </div>
              <a href="contact.html" className="nav-item nav-link">
                Liên hệ
              </a>
            </div>
            <a href className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
              Đăng nhập
              <i className="fa fa-arrow-right ms-3" />
            </a>
          </div>
        </nav>
        {/* Navbar End */}
        {/* Carousel Start */}
        <div className="container-fluid p-0 mb-5">
          <div className="owl-carousel header-carousel position-relative">
            <div className="owl-carousel-item position-relative">
              <img className="img-fluid" src={logo} alt="" />
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" />
            </div>
          </div>
        </div>
        {/* Carousel End */}
        {/* Service Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-4">
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="service-item text-center pt-3">
                  <div className="p-4">
                    <i className="fa fa-3x fa-graduation-cap text-primary mb-4" />
                    <h5 className="mb-3">HD kinh nghiệm</h5>
                    {/* <p>
            Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
            amet diam
          </p> */}
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="service-item text-center pt-3">
                  <div className="p-4">
                    <i className="fa fa-3x fa-globe text-primary mb-4" />
                    <h5 className="mb-3">Lớp học Online</h5>
                    {/* <p>
            Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
            amet diam
          </p> */}
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="service-item text-center pt-3">
                  <div className="p-4">
                    <i className="fa fa-3x fa-home text-primary mb-4" />
                    <h5 className="mb-3">Dự án tại nhà</h5>
                    {/* <p>
            Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
            amet diam
          </p> */}
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className="service-item text-center pt-3">
                  <div className="p-4">
                    <i className="fa fa-3x fa-book-open text-primary mb-4" />
                    <h5 className="mb-3">Thư viện Sách</h5>
                    {/* <p>
            Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
            amet diam
          </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Service End */}
        {/* About Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              <div
                className="col-lg-6 wow fadeInUp"
                data-wow-delay="0.1s"
                style={{ minHeight: 400 }}
              >
                <div className="position-relative h-100">
                  <img
                    className="img-fluid position-absolute w-100 h-100"
                    src={logo1}
                    alt=""
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <h6 className="section-title bg-white text-start text-primary pe-3">
                  Giới thiệu về chúng tôi
                </h6>
                <h1 className="mb-4">Sứ mệnh</h1>
                <p className="mb-4">
                  Chúng tôi cam kết xây dựng một nền tảng giáo dục công nghệ cho
                  tương lai để phát triển các giá trị của một công dân địa
                  phương - toàn cầu
                </p>
                <h1 className="mb-4">Tầm nhìn</h1>
                <p className="mb-4">
                  Đào tạo một thế hệ không chỉ có khả năng thích ứng với thế
                  giới về công nghệ đang thay đổi mà còn góp phần thay đổi thế
                  giới bằng công nghệ và kỹ năng.
                </p>
                <h1 className="mb-4">Giá trị cốt lõi</h1>
                <div className="row gy-2 gx-4 mb-4">
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2" /> Đam
                      mê
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2" /> Niềm
                      tin
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2" />
                      Đoàn kết
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2" />
                      Trách nhiệm
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2" /> Sáng
                      tạo công nghệ
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2" />
                      Hướng tới kết quả
                    </p>
                  </div>
                </div>
                <a className="btn btn-primary py-3 px-5 mt-2" href="about.html">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
        {/* Program Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title bg-white text-center text-primary px-3">
                Chương trình học
              </h6>
              <h1 className="mb-5">Lộ trình</h1>
            </div>
            <div className="row g-4 justify-content-center">
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="course-item bg-light">
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid" src="img/front-end.jpg" alt="" />
                    <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                      <a
                        href="frontend.html"
                        className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
                        style={{ borderRadius: "30px 0 0 30px" }}
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                  <div className="text-center p-4 pb-0">
                    <h3 className="mb-4">Lộ trình học Front-end</h3>
                    <p className="mb-4">
                      Lập trình viên Front-end là người xây dựng ra giao diện
                      websites.Trong phần này chúng tôi sẽ chia sẻ cho bạn lộ
                      trình để trở thành lập trình viên Front-end nhé.
                    </p>
                  </div>
                  <div className="d-flex border-top">
                    {/* <small class="flex-fill text-center border-end py-2"
            ><i class="fa fa-user-tie text-primary me-2"></i>John
            Doe</small
          >
          <small class="flex-fill text-center border-end py-2"
            ><i class="fa fa-clock text-primary me-2"></i>1.49 Hrs</small
          >
          <small class="flex-fill text-center py-2"
            ><i class="fa fa-user text-primary me-2"></i>30
            Students</small
          > */}
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="course-item bg-light">
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid" src="img/back-end1.jpg" alt="" />
                    <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                      <a
                        href="backend.html"
                        className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
                        style={{ borderRadius: "30px 0 0 30px" }}
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                  <div className="text-center p-4 pb-0">
                    <h3 className="mb-0">Lộ trình học Back-end</h3>
                    <p className="mb-4">
                      Trái với Front-end thì lập trình Back-end là người làm
                      việc với dữ liệu, công việc thường nặng tính logic hơn.
                      Chúng ta sẽ cùng tìm hiểu thêm về lộ trình học Back-end
                      nhé.
                    </p>
                  </div>
                  <div className="d-flex border-top">
                    {/* <small class="flex-fill text-center border-end py-2"
            ><i class="fa fa-user-tie text-primary me-2"></i>John
            Doe</small
          >
          <small class="flex-fill text-center border-end py-2"
            ><i class="fa fa-clock text-primary me-2"></i>1.49 Hrs</small
          >
          <small class="flex-fill text-center py-2"
            ><i class="fa fa-user text-primary me-2"></i>30
            Students</small
          > */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Courses End */}
        {/* Categories Start */}
        <div className="container-xxl py-5 category">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title bg-white text-center text-primary px-3">
                Khóa học
              </h6>
              <h1 className="mb-5">Các khóa học</h1>
            </div>
            <div className="row g-3">
              <div className="col-lg-7 col-md-6">
                <div className="row g-3">
                  <div
                    className="col-lg-12 col-md-12 wow zoomIn"
                    data-wow-delay="0.1s"
                  >
                    <a
                      className="position-relative d-block overflow-hidden"
                      href
                    >
                      <img
                        className="img-fluid"
                        src="img/html-va-css.jpg"
                        alt=""
                      />
                      <div
                        className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                        style={{ margin: 1 }}
                      >
                        <h5 className="m-0">HTML CSS cơ bản</h5>
                        <small className="text-primary">65 Bài học</small>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-lg-6 col-md-12 wow zoomIn"
                    data-wow-delay="0.3s"
                  >
                    <a
                      className="position-relative d-block overflow-hidden"
                      href
                    >
                      <img
                        className="img-fluid"
                        src="img/responsive.png"
                        alt=""
                      />
                      <div
                        className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                        style={{ margin: 1 }}
                      >
                        <h5 className="m-0">Responsive</h5>
                        <small className="text-primary">36 Bài học</small>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-lg-6 col-md-12 wow zoomIn"
                    data-wow-delay="0.5s"
                  >
                    <a
                      className="position-relative d-block overflow-hidden"
                      href
                    >
                      <img
                        className="img-fluid"
                        src="img/javascript.png"
                        alt=""
                      />
                      <div
                        className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                        style={{ margin: 1 }}
                      >
                        <h5 className="m-0">JavaScript cơ bản</h5>
                        <small className="text-primary">30 Bài học</small>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-5 col-md-6 wow zoomIn"
                data-wow-delay="0.7s"
                style={{ minHeight: 350 }}
              >
                <a
                  className="position-relative d-block h-100 overflow-hidden"
                  href
                >
                  <img
                    className="img-fluid position-absolute w-100 h-100"
                    src="img/nodejs.jpg
          "
                    alt=""
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                    style={{ margin: 1 }}
                  >
                    <h5 className="m-0">Node &amp; ExpressJS</h5>
                    <small className="text-primary">26 Bài học</small>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Categories Start */}
        {/* Bai viet Start */}
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
            <div className="text-center">
              <h6 className="section-title bg-white text-center text-primary px-3">
                Bài viết
              </h6>
              <h1 className="mb-5">Bài viết nổi bật</h1>
            </div>
            <div className="owl-carousel testimonial-carousel position-relative">
              <div className="testimonial-item text-center">
                <img
                  className="p-2 mx-auto mb-3"
                  src="img/baiviet1.jpg"
                  style={{ height: 157 }}
                  alt=""
                />
                <h5 className="mb-0">
                  Tạo dự án ReactJS với Webpack với Babel
                </h5>
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="p-2 mx-auto mb-3"
                  src="img/baiviet2.png"
                  alt=""
                  style={{ height: 157 }}
                />
                <h5 className="mb-0">
                  Cách đưa code lên Github và tạo Github Pages
                </h5>
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="p-2 mx-auto mb-3"
                  src="img/baiviet3.png"
                  alt=""
                  style={{ height: 157 }}
                />
                <h5 className="mb-0">
                  Các nguồn tài nguyên hữu ích cho front-end developer
                </h5>
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="p-2 mx-auto mb-3"
                  src="img/baiviet4.jpg"
                  alt=""
                  style={{ height: 157 }}
                />
                <h5 className="mb-0">Học như thế nào là phù hợp?</h5>
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="p-2 mx-auto mb-3"
                  src="img/baiviet5.png"
                  alt=""
                  style={{ height: 157 }}
                />
                <h5 className="mb-0">Tổng hợp tài liệu tự học tiếng anh</h5>
              </div>
            </div>
          </div>
        </div>
        {/* Team End */}
        {/* Testimonial Start */}
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
            <div className="text-center">
              <h6 className="section-title bg-white text-center text-primary px-3">
                Video
              </h6>
              <h1 className="mb-5">Video nổi bật</h1>
            </div>
            <div className="owl-carousel testimonial-carousel position-relative">
              <div className="testimonial-item text-center">
                <iframe
                  width={296}
                  height={156}
                  src="https://www.youtube.com/embed/DpvYHLUiZpc"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
                <h5 className="mb-0">Phương pháp học lập trình của Sơn Đặng</h5>
              </div>
              <div className="testimonial-item text-center">
                <iframe
                  width={296}
                  height={156}
                  src="https://www.youtube.com/embed/oF7isq9IjZM"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
                <h5 className="mb-0">
                  Ai có thu nhập cao và đi xa trong ngành IT?
                </h5>
              </div>
              <div className="testimonial-item text-center">
                <iframe
                  width={296}
                  height={156}
                  src="https://www.youtube.com/embed/dDMkDfLXeOQ"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
                <h5 className="mb-0">
                  Cách viết CV xin việc cho sinh viên chưa có kinh nghiệm
                </h5>
              </div>
              <div className="testimonial-item text-center">
                <iframe
                  width={296}
                  height={156}
                  src="https://www.youtube.com/embed/YH-E4Y3EaT4"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
                <h5 className="mb-0">
                  Sinh viên đi thực tập doanh nghiệp cần biết những gì?
                </h5>
              </div>
              <div className="testimonial-item text-center">
                <iframe
                  width={296}
                  height={156}
                  src="https://www.youtube.com/embed/TDwmbc9lhsk"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
                <h5 className="mb-0">
                  Không phải ai cũng tạo được tài khoản chatGPT
                </h5>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial End */}
        {/* Footer Start */}
        <div
          className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-lg-6 col-md-6">
                <h4 className="text-white mb-3">Quick Link</h4>
                <a className="btn btn-link" href>
                  Giới thiệu
                </a>
                <a className="btn btn-link" href>
                  Liên hệ
                </a>
                <a className="btn btn-link" href>
                  Chính sách và quy định
                </a>
                <a className="btn btn-link" href>
                  Hỗ trợ
                </a>
              </div>
              <div className="col-lg-6 col-md-6">
                <h4 className="text-white mb-3">Liên hệ</h4>
                <p className="mb-2">
                  <i className="fa fa-map-marker-alt me-3" />
                  Yên Nghĩa, Hà Đông, Hà Nội
                </p>
                <p className="mb-2">
                  <i className="fa fa-phone-alt me-3" />
                  032 579 6589
                </p>
                <p className="mb-2">
                  <i className="fa fa-envelope me-3" />
                  dung103nguyen@gmail.com
                </p>
                <div className="d-flex pt-2">
                  <a className="btn btn-outline-light btn-social" href>
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-outline-light btn-social" href>
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-outline-light btn-social" href>
                    <i className="fab fa-youtube" />
                  </a>
                  <a className="btn btn-outline-light btn-social" href>
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                  © 2023
                  {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                </div>
                <div className="col-md-6 text-center text-md-end">
                  <div className="footer-menu">
                    <a href>Trang chủ</a>
                    <a href>Hỗ trợ</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End */}
        {/* Back to Top */}
        <a
          href="/#"
          className="btn btn-lg btn-primary btn-lg-square back-to-top"
        >
          <i className="bi bi-arrow-up" />
        </a>
      </div>
    </>
  );
}

export default App;
