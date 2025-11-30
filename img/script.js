/* Intro hide */
(function(){
  const intro = document.getElementById('intro');
    window.addEventListener('load', () => {
        setTimeout(()=> {
              intro.classList.add('hidden');
                  }, 900);
                    });
                    })();

                    /* Slider */
                    (function(){
                      const slides = Array.from(document.querySelectorAll('.slide'));
                        const dotsWrap = document.getElementById('dots');
                          if(!slides.length) return;
                            let idx = 0, timer = null, interval = 3600;
                              slides.forEach((s,i)=>{
                                  const d = document.createElement('div');
                                      d.className = 'dot' + (i===0? ' active':'');
                                          d.dataset.i = i;
                                              d.addEventListener('click', ()=> goto(i));
                                                  dotsWrap.appendChild(d);
                                                    });
                                                      function goto(i){
                                                          slides[idx].classList.remove('active');
                                                              dotsWrap.children[idx].classList.remove('active');
                                                                  idx = i;
                                                                      slides[idx].classList.add('active');
                                                                          dotsWrap.children[idx].classList.add('active');
                                                                              // update viewer image
                                                                                  const viewerImg = document.getElementById('viewerImg');
                                                                                      if(viewerImg) viewerImg.src = slides[idx].querySelector('img').src;
                                                                                          reset();
                                                                                            }
                                                                                              function next(){ goto((idx+1) % slides.length); }
                                                                                                function reset(){ clearInterval(timer); timer = setInterval(next, interval); }
                                                                                                  // touch support
                                                                                                    let startX = 0;
                                                                                                      const slider = document.getElementById('slider');
                                                                                                        if(slider){
                                                                                                            slider.addEventListener('touchstart', e=> startX = e.touches[0].clientX, {passive:true});
                                                                                                                slider.addEventListener('touchend', e=>{
                                                                                                                      const endX = e.changedTouches[0].clientX;
                                                                                                                            const diff = endX - startX;
                                                                                                                                  if(Math.abs(diff) > 40){
                                                                                                                                          if(diff < 0) next();
                                                                                                                                                  else goto((idx-1+slides.length)%slides.length);
                                                                                                                                                        }
                                                                                                                                                              reset();
                                                                                                                                                                  }, {passive:true});
                                                                                                                                                                    }
                                                                                                                                                                      reset();
                                                                                                                                                                      })();

                                                                                                                                                                      /* Viewer 3D illusion */
                                                                                                                                                                      (function(){
                                                                                                                                                                        const inner = document.getElementById('inner');
                                                                                                                                                                          if(!inner) return;
                                                                                                                                                                            let down=false,sx=0,sy=0,rx=0,ry=0;
                                                                                                                                                                              inner.addEventListener('pointerdown', e=>{ down=true; sx=e.clientX; sy=e.clientY; inner.setPointerCapture(e.pointerId); });
                                                                                                                                                                                window.addEventListener('pointerup', ()=> down=false);
                                                                                                                                                                                  window.addEventListener('pointermove', e=>{ if(!down) return; const dx=e.clientX-sx, dy=e.clientY-sy; ry += dx*0.12; rx = Math.max(-25, Math.min(25, rx - dy*0.12)); inner.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`; sx=e.clientX; sy=e.clientY; });
                                                                                                                                                                                    // idle subtle motion
                                                                                                                                                                                      let t=0; setInterval(()=>{ if(!down){ t++; inner.style.transform = `rotateX(${Math.sin(t/80)*3}deg) rotateY(${Math.cos(t/90)*4}deg)`; } },120);
                                                                                                                                                                                      })();

                                                                                                                                                                                      /* Reviews auto scroll */
                                                                                                                                                                                      (function(){
                                                                                                                                                                                        const wrap = document.getElementById('reviews');
                                                                                                                                                                                          if(!wrap) return;
                                                                                                                                                                                            const items = Array.from(wrap.children);
                                                                                                                                                                                              if(!items.length) return;
                                                                                                                                                                                                let r=0;
                                                                                                                                                                                                  items.forEach(it=> { it.style.minWidth='100%'; it.style.transition='transform .8s cubic-bezier(.2,.8,.2,1)'; });
                                                                                                                                                                                                    setInterval(()=> { r=(r+1)%items.length; items.forEach((it,i)=> it.style.transform = `translateX(${(i-r)*100}%)`); }, 4200);
                                                                                                                                                                                                    })();

                                                                                                                                                                                                    /* Modal open/close */
                                                                                                                                                                                                    function openModal(){ const m = document.getElementById('modal'); if(m) m.style.display='flex'; }
                                                                                                                                                                                                    function closeModal(){ const m = document.getElementById('modal'); if(m) m.style.display='none'; }

                                                                                                                                                                                                    /* Smooth anchor */
                                                                                                                                                                                                    document.querySelectorAll('a[href^="#"]').forEach(a=> a.addEventListener('click', e=>{ e.preventDefault(); const id=a.getAttribute('href').slice(1); const el=document.getElementById(id); if(el) el.scrollIntoView({behavior:'smooth',block:'start'}); }));

                                                                                                                                                                                                    /* Image fallback */
                                                                                                                                                                                                    document.querySelectorAll('img').forEach(img=> img.onerror = ()=> img.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500"><rect width="100%" height="100%" fill="%230b0b0b"/><text x="50%" y="50%" fill="%23ddd" font-family="Arial" font-size="18" text-anchor="middle" alignment-baseline="middle">Imagen no disponible</text></svg>'; );