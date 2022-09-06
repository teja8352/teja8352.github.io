/**
* Template Name: MyResume - v4.8.1
* Template URL: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/


const _API = 'https://wb-be-app.herokuapp.com/';

(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function (e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function (e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function (direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function (e) {
        e.preventDefault();
        portfolioFilters.forEach(function (el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function () {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Initiate portfolio details lightbox 
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})();

let testimonialsList = [];
let testmonialsWrapper = document.getElementById('testmonials-wrapper');  /**
   * Date calucaltor - To get difference from to dates.
   */
const getDifferenceInDates = () => {
  const years = document.getElementById('years');
  const fromDate = new Date("02/05/2018");
  const currentDate = new Date();
  const differenceInMilliSeconds = Math.abs(currentDate - fromDate);
  // Comments: For Days
  const diffInDays = Math.ceil(differenceInMilliSeconds / (1000 * 60 * 60 * 24));
  // Comments: For Years
  const diffInYears = differenceInMilliSeconds / (1000 * 60 * 60 * 24 * 30 * 12);
  years.innerText = (diffInDays / 365).toFixed(1);
}

getDifferenceInDates();

/**
 * Testmonials - To write a new testmonials
 */

const getTestmonials = () => {
  fetch(_API + 'testimonial')
    .then(resp => {
      console.log(resp);
      if (resp?.status !== 200 && resp?.ok === false) {
        console.error("Error while getting testimonials::::::\n", resp);
      } else {
        console.log(resp);
        testimonialsList = resp;
        let testmonialText = "";
        testimonialsList.forEach(testmonial => {
          const img = testmonial?.img !== undefined && testmonial?.img !== null && testmonial?.img?.length > 0 ? testmonial.img : "assets/img/user.png";
          testmonialText = testmonialText + `\n\n\n<div class="swiper-slide">
              <div class="testimonial-item">
                <img src="${img}" class="testimonial-img" alt="">
                <h3>${testmonial.name}</h3>
                <h4>${testmonial.role ? testmonial.role : 'Unknown'}</h4>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  ${testmonial.comment}
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>`;
        });
        testmonialsWrapper.innerHTML = testmonialText;
      }
    }, err => {
      console.error("Error while getting testimonials::::::\n", err);
    }).catch((e) => {
      console.error("Exception while getting testimonials::::::\n", e);
    });
}

const loadTestmonials = () => {

}

getTestmonials();

async function addTestmonials() {
  let testmonialName = document.getElementById('testimonial-name');
  let testmonialImg = document.getElementById('testimonial-img');
  let testmonialComment = document.getElementById('testimonial-comment');
  if (testmonialName.value === null || testmonialName.value === undefined || testmonialName.value.length <= 0) {
    alert("Enter your name.");
    return;
  }

  if (testmonialComment.value === null || testmonialComment.value === undefined || testmonialComment.value.length <= 0) {
    alert("Enter your comment.");
    return;
  }

  testmonialName.value = "";
  testmonialImg.value = "";
  testmonialComment.value = "";
  let closeBtn = document.getElementById('close');
  closeBtn.click();

  const rawResponse = await fetch(_API + 'testimonial/add', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: {
      name: testmonialName.value,
      img: testmonialImg.value || "",
      comment: testmonialComment.value
    }
  });
  const content = await rawResponse.json();

  console.log(content);

  getTestmonials();
};