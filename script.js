// Splash control: hide after 1.8s + remove for perf
window.addEventListener('load', () => {
  setTimeout(()=> {
      const s = document.getElementById('splash');
          if(s){ s.style.opacity = '0'; s.style.visibility = 'hidden'; setTimeout(()=> s.remove(), 600); }
            }, 1800);
            });

            // Slider (gallery)
            (function(){
              const slides = Array.from(document.querySelectorAll('.slide'));
                const dots = Array.from(document.querySelectorAll('.dot'));
                  let idx = 0, timer = null, interval = 3200;

                    function show(i){
                        slides.forEach((s,n)=> s.classList.toggle('active', n===i));
                            dots.forEach((d,n)=> d.classList.toggle('active', n===i));
                              }

                                function next(){ idx = (idx + 1) % slides.length; show(idx); }

                                  dots.forEach(d => {
                                      d.addEventListener('click', e => {
                                            idx = Number(e.currentTarget.dataset.i); show(idx); reset();
                                                });
                                                    d.addEventListener('keydown', e => { if(e.key === 'Enter' || e.key === ' ') d.click(); });
                                                      });

                                                        // touch support
                                                          let startX = 0;
                                                            const sliderEl = document.getElementById('gallery');
                                                              if(sliderEl){
                                                                  sliderEl.addEventListener('touchstart', e => startX = e.touches[0].clientX);
                                                                      sliderEl.addEventListener('touchend', e => {
                                                                            const dx = e.changedTouches[0].clientX - startX;
                                                                                  if(Math.abs(dx) > 30){
                                                                                          idx = dx < 0 ? (idx+1)%slides.length : (idx-1+slides.length)%slides.length;
                                                                                                  show(idx); reset();
                                                                                                        }
                                                                                                            });
                                                                                                              }

                                                                                                                function start(){ timer = setInterval(next, interval); }
                                                                                                                  function reset(){ if(timer) clearInterval(timer); start(); }

                                                                                                                    if(slides.length){
                                                                                                                        show(0);
                                                                                                                            start();
                                                                                                                              }
                                                                                                                              })();

                                                                                                                              // Reviews rotation (3 reviews - A seçeneği)
                                                                                                                              (function(){
                                                                                                                                const items = Array.from(document.querySelectorAll('.review-item'));
                                                                                                                                  let r = 0;
                                                                                                                                    function showReview(i){
                                                                                                                                        items.forEach((el, idx) => {
                                                                                                                                              el.classList.toggle('show', idx === i);
                                                                                                                                                  });
                                                                                                                                                    }
                                                                                                                                                      // initial
                                                                                                                                                        if(items.length){
                                                                                                                                                            showReview(0);
                                                                                                                                                                setInterval(()=> { r = (r+1) % items.length; showReview(r); }, 4200);
                                                                                                                                                                  }
                                                                                                                                                                  })();