// Simple slider + reviews cycling
document.addEventListener('DOMContentLoaded', function() {

  // Slider auto fade
    (function slider(){
        const slides = document.querySelectorAll('.slider .slide');
            if(!slides || slides.length===0) return;
                let idx = 0;
                    slides[idx].classList.add('active');
                        setInterval(()=>{
                              slides[idx].classList.remove('active');
                                    idx = (idx+1) % slides.length;
                                          slides[idx].classList.add('active');
                                              }, 3500);
                                                })();

                                                  // small accessibility: focus on first call to buy for keyboard users
                                                    const buyBtns = document.querySelectorAll('.btn-buy');
                                                      if(buyBtns && buyBtns[0]) {
                                                          // no auto focus to avoid annoying UX, keep for accessibility if needed
                                                            }

                                                              // make sure IG button has noopener
                                                                const ig = document.querySelector('.ig a');
                                                                  if(ig) ig.setAttribute('rel','noopener noreferrer');

                                                                  });