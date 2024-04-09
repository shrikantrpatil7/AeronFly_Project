import { useState } from 'react';
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const Header = ({ rtl }) => {
  const [isOpen, setOpen] = useState(false);

  const openVideo = (e) => {
    e.preventDefault();
    setOpen(true);
  }

  return (
    <header class="style-4" data-scroll-index="0">
      <div class="content">
        <div class="container">
          <div class="row gx-0">
            <div class="col-lg-6">
              <div class="info">
                {/* <small class="mb-50 title_small">{ rtl ? 'نوتيرو - تطبيق مذكرة سهل الاستخدام' : 'Notero - Easy Notes App' }</small> */}
                <h1 class="mb-30">{ rtl ? 'احفظ' : 'Bill Payment' } <span>{ rtl ? 'كل شئ' : 'Made Easy  With' }</span> { rtl ? 'على التطبيق' : 'AeronPay' }</h1>
                <p class="text">{ rtl ? 'لا يلزم الترميز لإجراء التخصيصات. يحتوي المُخصص المباشر' : 'One App For All Your Financial Needs , Start Your Payment' }<br />{ rtl ? 'على كل ما تحتاجه.' : ' Journey With AeronPay.' }</p>
                <div class="d-flex align-items-center mt-50">
                  <a href="https://www.apple.com/app-store" rel="noreferrer" class="btn rounded-pill bg-blue4 fw-bold text-white me-4" target="_blank">
                    <small> <i class="fab fa-apple me-2 pe-2 border-end"></i>{ rtl ? 'تحميل التطبيق' : 'Download App' }</small>
                  </a>

                  <a href="https://www.apple.com/app-store" rel="noreferrer" class="btn rounded-pill bg-blue4 fw-bold text-white me-4" target="_blank">
                    <small>  <i class="fab fa-google-play me-2 pe-2 border-end"></i> { rtl ? 'تحميل التطبيق' : 'Google Play' }</small>
                  </a>

                  {/* <a href="https://youtu.be/pGbIOC83-So?t=21" data-lity class="play-btn" onClick={openVideo}>
                    <span class="icon me-2">
                      <i class="fas fa-play ms-1"></i>
                    </span>
                    <strong class="small">{ rtl ? 'مشاهدة' : 'View' } <br />{ rtl ? 'البرومو' : 'Promotion' }</strong>
                  </a> */}
                </div>
                <span class="mt-100 me-5">
                  <small
                    class="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-2">
                    <i class="fas fa-sync"></i>
                  </small>
                  <small class="text-uppercase">{ rtl ? 'مجانى لمده 14 يوم' : 'Free 14 Days Trial' }</small>
                </span>
                <span class="mt-100">
                  <small
                    class="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-2">
                    <i class="fas fa-credit-card"></i>
                  </small>
                  <small class="text-uppercase">{ rtl ? 'دفعة لمرة واحدة' : 'One time payment' }</small>
                </span>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="img">
                {/* <img src="/assets/img/header/header_4.png" alt="" />  */}
               
                
<div class="col">
<div class="thumbnail">

<video class="banner-video ind-vid-rem purchase-img-light" loop autoPlay muted playsInline>
 <source src="/assets/img/header/home-bann.mp4" type="video/mp4" />
</video> 

<video class="banner-video1 ind-vid-res purchase-img-light" loop autoPlay muted playsInline>
 <source src="/assets/img/header/home-ban1.mp4" type="video/mp4" />
</video>

</div>  

</div>


  </div>
            </div>
          </div>
        </div>
        <img src="/assets/img/header/header_4_bubble.png" alt="" class="bubble" />
      </div>
      <img src="/assets/img/header/header_4_wave.png" alt="" class="wave" />
      {
        typeof window !== "undefined" && 
          (
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId="pGbIOC83-So"
              onClose={() => setOpen(false)}
            />
          )
      }
    </header>
  )
}

export default Header
