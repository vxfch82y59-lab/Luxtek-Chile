/* splash removal */
setTimeout(() => {
  const s = document.getElementById('splash');
    if (s) {
        s.style.opacity = '0';
            s.style.pointerEvents = 'none';
                setTimeout(()=> { try{ s.remove(); } catch(e){} }, 700);
                  }
                  }, 2200);

                  /* hero mini slider (index.html) - cycle 3 images */
                  (function heroCycle(){
                    const hero = document.querySelector('.hero-slider');
                      if(!hero) return;
                        const imgs = Array.from(hero.querySelectorAll('img'));
                          let h = 0;
                            setInterval(()=> {
                                imgs.forEach((im,i)=> {
                                      im.style.opacity = i===h? '1' : '0';
                                            im.style.transform = i===h? 'none':'scale(1.03)';
                                                });
                                                    h = (h+1) % imgs.length;
                                                      }, 3000);
                                                      })();

                                                      /* gallery slider (tienda.html + index product slides) */
                                                      (function gallery(){
                                                        const slides = Array.from(document.querySelectorAll('.gallery .slide'));
                                                          const dots = Array.from(document.querySelectorAll('.dots .dot'));
                                                            if(slides.length){
                                                                let idx = 0, timer;
                                                                    function show(i){
                                                                          slides.forEach((s,n)=> s.classList.toggle('active', n===i));
                                                                                if(dots.length) dots.forEach((d,n)=> d.classList.toggle('active', n===i));
                                                                                    }
                                                                                        function start(){ timer = setInterval(()=> { idx = (idx+1)%slides.length; show(idx); }, 3600); }
                                                                                            function reset(){ if(timer) clearInterval(timer); start(); }
                                                                                                // thumbs on product page
                                                                                                    const thumbs = Array.from(document.querySelectorAll('.thumb'));
                                                                                                        thumbs.forEach((t,i)=> t.addEventListener('click', ()=> { idx = i; show(i); reset(); thumbs.forEach(x=> x.classList.toggle('active', x===t)); }));
                                                                                                            show(0); start();
                                                                                                              }
                                                                                                              })();

                                                                                                              /* dots (index gallery controls if present) */
                                                                                                              (function dotsControl(){
                                                                                                                const dots = Array.from(document.querySelectorAll('.dots .dot'));
                                                                                                                  if(!dots.length) return;
                                                                                                                    dots.forEach(d=> {
                                                                                                                        d.addEventListener('click', ()=> {
                                                                                                                              const i = Number(d.getAttribute('data-i'));
                                                                                                                                    const slides = Array.from(document.querySelectorAll('.gallery .slide'));
                                                                                                                                          slides.forEach((s,n)=> s.classList.toggle('active', n===i));
                                                                                                                                                dots.forEach(x=> x.classList.toggle('active', x===d));
                                                                                                                                                    });
                                                                                                                                                      });
                                                                                                                                                      })();

                                                                                                                                                      /* reviews rotation */
                                                                                                                                                      (function reviews(){
                                                                                                                                                        const reviews = Array.from(document.querySelectorAll('.review-item'));
                                                                                                                                                          if(!reviews.length) return;
                                                                                                                                                            let r = 0;
                                                                                                                                                              function show(i){ reviews.forEach((el,j)=> el.classList.toggle('show', j===i)); }
                                                                                                                                                                show(0);
                                                                                                                                                                  setInterval(()=> { r = (r+1) % reviews.length; show(r); }, 4200);
                                                                                                                                                                  })();

                                                                                                                                                                  /* quick open WhatsApp with key 'w' for seller convenience */
                                                                                                                                                                  (function quickWhats(){
                                                                                                                                                                    const fab = document.getElementById('whFab');
                                                                                                                                                                      if(!fab) return;
                                                                                                                                                                        document.addEventListener('keydown', (e)=> {
                                                                                                                                                                            if(e.key.toLowerCase()==='w' && !e.metaKey && !e.ctrlKey) window.open(fab.href, '_blank');
                                                                                                                                                                              });
                                                                                                                                                                              })();