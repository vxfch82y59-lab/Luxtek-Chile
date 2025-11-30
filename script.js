/* LuxTek Chile - script.js
   - Splash remove
      - Gallery slider
         - Dots control
            - Reviews rotation
               - Accessibility tiny helpers
               */

               /* SPLASH removal */
               setTimeout(() => {
                 const splash = document.getElementById('splash');
                   if (splash) {
                       splash.style.opacity = '0';
                           splash.style.pointerEvents = 'none';
                               setTimeout(()=> { try{ splash.remove(); } catch(e){} }, 700);
                                 }
                                 }, 2400);

                                 /* GALLERY slider */
                                 (function() {
                                   const slides = Array.from(document.querySelectorAll('.slide'));
                                     const dots = Array.from(document.querySelectorAll('.dot'));
                                       if (!slides.length) return;
                                         let index = 0, timer = null, interval = 3200;

                                           function show(i){
                                               slides.forEach((s, n) => s.classList.toggle('active', n === i));
                                                   dots.forEach((d, n) => d.classList.toggle('active', n === i));
                                                     }
                                                       function next(){ index = (index + 1) % slides.length; show(index); }
                                                         function start(){ timer = setInterval(next, interval); }
                                                           function reset(){ if (timer) clearInterval(timer); start(); }

                                                             dots.forEach((d, i) => {
                                                                 d.addEventListener('click', ()=> { index = i; show(i); reset(); });
                                                                     d.addEventListener('keydown', (e)=> { if (e.key === 'Enter' || e.key === ' ') d.click(); });
                                                                       });

                                                                         show(0); start();
                                                                         })();

                                                                         /* REVIEWS rotation */
                                                                         (function(){
                                                                           const reviews = Array.from(document.querySelectorAll('.review-item'));
                                                                             if (!reviews.length) return;
                                                                               let r = 0;
                                                                                 function showReview(i){
                                                                                     reviews.forEach((el,j)=> el.classList.toggle('show', j===i));
                                                                                       }
                                                                                         showReview(0);
                                                                                           setInterval(()=> { r = (r+1) % reviews.length; showReview(r); }, 4200);
                                                                                           })();

                                                                                           /* Floating WhatsApp: quick key 'w' */
                                                                                           (function(){
                                                                                             const fab = document.getElementById('whFab');
                                                                                               if (fab){
                                                                                                   fab.setAttribute('role','link');
                                                                                                       fab.setAttribute('aria-label','WhatsApp');
                                                                                                           // quick open key 'w' for seller convenience
                                                                                                               document.addEventListener('keydown', (e) => {
                                                                                                                     if (e.key.toLowerCase() === 'w' && !e.metaKey && !e.ctrlKey) {
                                                                                                                             window.open(fab.href, '_blank');
                                                                                                                                   }
                                                                                                                                       });
                                                                                                                                         }
                                                                                                                                         })();