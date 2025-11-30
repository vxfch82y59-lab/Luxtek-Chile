// SPLASH removal
setTimeout(() => {
  const s = document.getElementById('splash');
    if (s) {
        s.style.opacity = '0';
            s.style.pointerEvents = 'none';
                setTimeout(()=> { try{ s.remove(); } catch(e){} }, 700);
                  }
                  }, 2200);

                  /* HERO preview slider */
                  (function heroCycle(){
                    const hero = document.querySelector('.hero-slider');
                      if(!hero) return;
                        const imgs = Array.from(hero.querySelectorAll('img'));
                          let idx = 0;
                            setInterval(()=> {
                                imgs.forEach((im,i)=> {
                                      im.style.opacity = i===idx? '1' : '0';
                                            im.style.transform = i===idx? 'none' : 'scale(1.04)';
                                                });
                                                    idx = (idx+1) % imgs.length;
                                                      }, 3200);
                                                      })();

                                                      /* GALLERY slider (index & tienda) */
                                                      (function gallery(){
                                                        const slides = Array.from(document.querySelectorAll('.gallery .slide'));
                                                          const dots = Array.from(document.querySelectorAll('.dots .dot'));
                                                            if(!slides.length) return;
                                                              let index = 0, timer;
                                                                function show(i){
                                                                    slides.forEach((s,n)=> s.classList.toggle('active', n===i));
                                                                        if(dots.length) dots.forEach((d,n)=> d.classList.toggle('active', n===i));
                                                                          }
                                                                            function start(){ timer = setInterval(()=> { index = (index+1)%slides.length; show(index); }, 3600); }
                                                                              function reset(){ if(timer) clearInterval(timer); start(); }
                                                                                // thumbs
                                                                                  const thumbs = Array.from(document.querySelectorAll('.thumb'));
                                                                                    thumbs.forEach((t,i)=> t.addEventListener('click', ()=> { index = i; show(i); reset(); thumbs.forEach(x=> x.classList.toggle('active', x===t)); }));
                                                                                      // dots click
                                                                                        dots.forEach(d=> d.addEventListener('click', ()=> { index = Number(d.getAttribute('data-i')); show(index); reset(); }));
                                                                                          show(0); start();
                                                                                          })();

                                                                                          /* 3D reviews rotation */
                                                                                          (function reviews3D(){
                                                                                            const revs = Array.from(document.querySelectorAll('.review-3d .review'));
                                                                                              if(!revs.length) return;
                                                                                                let r = 0;
                                                                                                  function render(i){
                                                                                                      revs.forEach((el,idx)=>{
                                                                                                            el.classList.remove('show','left','right');
                                                                                                                  if(idx === i) el.classList.add('show');
                                                                                                                        else if(idx === (i+1) % revs.length) el.classList.add('right');
                                                                                                                              else if(idx === (i-1 + revs.length) % revs.length) el.classList.add('left');
                                                                                                                                  });
                                                                                                                                    }
                                                                                                                                      render(0);
                                                                                                                                        setInterval(()=> { r = (r+1) % revs.length; render(r); }, 4200);
                                                                                                                                        })();

                                                                                                                                        /* quick WhatsApp open with 'w' */
                                                                                                                                        (function quickWhats(){
                                                                                                                                          const fab = document.getElementById('whFab');
                                                                                                                                            if(!fab) return;
                                                                                                                                              document.addEventListener('keydown', (e)=> {
                                                                                                                                                  if(e.key.toLowerCase()==='w' && !e.metaKey && !e.ctrlKey) window.open(fab.href, '_blank');
                                                                                                                                                    });
                                                                                                                                                    })();