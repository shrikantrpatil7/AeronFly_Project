import Link from 'next/link';


const Footer = ({ noWave, rtl }) => {
  const handleMouseMove = (event) => {
    const dropDownToggler = event.target.classList.contains('dropdown-toggle') ? event.target : event.target.querySelector('.dropdown-toggle');
    const dropDownMenu = dropDownToggler?.nextElementSibling;

    dropDownToggler?.classList?.add('show');
    dropDownMenu?.classList?.add('show');
  }

  const handleMouseLeave = (event) => {
    const dropdown = event.target.classList.contains('dropdown') ? event.target : event.target.closest('.dropdown');
    const dropDownToggler = dropdown.querySelector('.dropdown-toggle');
    const dropDownMenu = dropdown.querySelector('.dropdown-menu');

    dropDownToggler?.classList?.remove('show');
    dropDownMenu?.classList?.remove('show');
  }

  return (
    <footer class={`style-4 ${noWave ? 'mt-0 pt-100':''}`} data-scroll-index="8">
      <div class="container">

      <div class="inner">

<div class="content text-left">

    <div class="logo">

        <h4 class="theme-gradient" id="heading-table">Disclaimer:</h4>

    </div>

    <p class="sal-animate history-text" data-sal="slide-up" data-sal-duration="400"

        data-sal-delay="150">Please do not share your AeronPay Wallet password,

        Credit/Debit card pin, other confidential information with anyone even

        if he/she claims to be from AeronPay. We advise our customers to

        completely ignore such communications & report to us at<strong>

            <a href="mailto:disputes@aeronpay.in"> disputes@aeronpay.in

            </a></strong>

    </p>

            <p>Note: AeronPay is not a Payment Gateway but a technology platform for Utility Payments in partnership with NPCI-licensed Partners.</p>

</div>

</div>

<div class="footer-top">



<div class="container">


    <div class="row center-footer">

        <div class="col-12  fo-cc-re"> 

            <div class="rn-footer-widget">

                <div class="logo footer-imre">

                       
                </div>

               

            </div>

        </div>

        <div  class='pikachu'>
        <div class="inner">
        <a href="index">


<img class="logo-dark" src="/assets/img/logo-dark.png" alt="Corporate Logo" />

  
</a>

<h6 class="subtitle fo-co-rd">AeronPay Provides Utility Bill Payments and Secure Financial Services to the Indian Retailers and Customers.</h6>



</div>

        <div class="col-lg-2 col-md-6 col-sm-6 col-12 fo-op-re">

            <div class="rn-footer-widget">

                <h4 class="title">Company</h4>

                <div class="inner">

                    <ul class="footer-link link-hover">

                        <li><a href="index">Home</a></li>

                        <li><a href="about">About</a></li>

                        <li><a href="career">Careers</a></li>

                       <li><a href="pricing">Pricing</a></li>

                    </ul>

                </div>

            </div>

        </div>

        <div class="col-lg-2 col-md-6 col-sm-6 col-12 fo-op-re">

            <div class="rn-footer-widget">

                <div class="widget-menu-top">

                    <h4 class="title">Solutions</h4>

                    <div class="inner">

                        <ul class="footer-link link-hover">

                            <li><a href="contact">Contact</a></li>

                            <li><a href="blog.php">Blogs</a></li>

                            <li><a

                                    href="https://support.aeronpay.in/portal/en/home">Support</a>

                            </li>

                            <li><a href="faqs">Faqs</a></li>

                        </ul>

                    </div>

                </div>

            </div>

        </div>

        <div class="col-lg-2 col-md-6 col-sm-6 col-12 fo-op-re">

            <div class="rn-footer-widget">

                <div class="widget-menu-top">

                    <h4 class="title">Services</h4>

                    <div class="inner">

                        <ul class="footer-link link-hover">

                            <li><a href="retailer">Retailer</a></li>

                            <li><a href="distributor">Distributor</a></li>

                            <li><a href="franchise">Franchise</a></li>

                        </ul>

                    </div>

                </div>

            </div>

        </div>

        <div class="col-lg-2 col-md-6 col-sm-6 col-12 fo-op-re">

            <div class="rn-footer-widget">

                <div class="widget-menu-top">

                    <h4 class="title">Policies</h4>

                    <div class="inner">

                        <ul class="footer-link link-hover">

                            <li><a href="privacy-policy">Privacy Policy</a></li>

                            <li><a href="terms&conditions">Terms & conditions</a></li>

                            <li><a href="grievance-policy.php">Grievance Policy</a></li>

                            <li><a href="Cancellation&RefundPolicies.html">Cancellation & Refund Policies</a></li>

                        </ul>

                    </div>

                </div>

            </div>

        </div>



        </div>

 

    </div>

</div>

</div>












 {/* <div class="section-head text-center style-4">
          <h2 class="mb-10">{ rtl ? 'جاهز' : 'Ready To' } <span>{ rtl ? 'للتنزيل' : 'Download' }</span> </h2>
          <p>{ rtl ? 'اكتشف مساحاتك المفضلة الجديدة ، من ساو باولو إلى سيول. قم بالتنزيل من App Store أو Google Play.' : 'Discover your new favorite spaces, from Sao Paulo to Seoul. Download from App Store or Google Play.' }</p>
          <div class="d-flex align-items-center justify-content-center mt-50">
            <a href="https://www.apple.com/app-store" rel="noreferrer" class="btn rounded-pill bg-blue4 fw-bold text-white me-4" target="_blank">
              <small> <i class="fab fa-apple me-2 pe-2 border-end"></i> { rtl ? 'تنزيل من متجر التطبيقات' : 'Download On App Store' }</small>
            </a>
            <a href="https://play.google.com/store/apps" rel="noreferrer" class="btn rounded-pill hover-blue4 fw-bold border-blue4" target="_blank">
              <small> <i class="fab fa-google-play me-2 pe-2 border-end"></i> { rtl ? 'تنزيل من متجر ابل' : 'Download On Google Play' }</small>
            </a>
          </div>
        </div> */}



        <div class="foot mt-80">
          <div class="row align-items-center">
           
         
            <div class="col-lg-2">
             
              
            </div>
          </div>
        </div>
  



        <div class="copyright-area copyright-style-one">


<div class="container">

    <div class="row align-items-center fot-co-mr">

        <div class="col-lg-5 col-md-4 col-sm-12 col-12 tab-re">

            <div class="copyright-right">

                <p class="copyright-text fo-co-re">Copyright © 2018-2023 | AeronFly<br/> International Private Limited.

                    All Right Reserved</p>

            </div>

        </div>

        

        <div class="col-lg-3 col-md-4 col-sm-12 col-12 tab-re">

            <div class="copyright-right">

                <p class="copyright-text fo-co-re r-f-r">Made in <b>     <img
  src="https://flagcdn.com/in.svg"
  width="20"
  alt="India"/>
                
                </b> with <i class="fas fa-heart" style={{ color: '#b50f0f' }}></i></p>

            

            </div> 
           



        </div>

        

        <div class="col-lg-4">

            <ul class="social-icons">

                <li><a href="https://www.facebook.com/aeronpay"><i class="fab fa-facebook fa-2x me-2 pe-2 border-end"></i>
</a></li>

                <li><a href="https://www.instagram.com/aeronpay"><i class="fab fa-twitter  fa-2x me-2 pe-2 border-end"></i></a></li>

                <li><a href="https://twitter.com/aeronpay"><i class="fab fa-linkedin  fa-2x me-2 pe-2 border-end"></i>
</a></li>

                <li><a href="https://in.linkedin.com/company/aeronpay"><i class="fab fa-instagram  fa-2x me-2 pe-2 border-end"></i>
</a></li>

                <li><a href="https://www.youtube.com/channel/UCmJUvfu-ImvkE58MtBhHJBQ"> 
</a></li>

            </ul>

           

        

    </div>

</div>

</div>



</div>

       

       
      </div>


      { !noWave && <img src="/assets/img/footer/footer_4_wave.png" alt="" class="wave" /> }
    </footer>
  )
}

export default Footer
