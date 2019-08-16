// let target = document.querySelector('#listItem');
// observer.observe(target);

// let callback = (entries, observer) => { 
//     entries.forEach(entry => {
//       // Each entry describes an intersection change for one observed
//       // target element:
//       //   entry.boundingClientRect
//       //   entry.intersectionRatio
//       //   entry.intersectionRect
//       //   entry.isIntersecting
//       //   entry.rootBounds
//       //   entry.target
//       //   entry.time
//     });
//   };


const targets = document.querySelectorAll('img');

const lazyLoad = target => {
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            console.log('image-load!!');

            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-lazy');

                img.setAttribute('src', src);
                img.classList.add('fade');

                observer.disconnect();
            }
        });
    });
    io.observe(target);
}
targets.forEach(lazyLoad)

/* BAD */
// const targets = document.querySelectorAll('img');

// window.addEventListener('scroll', (event) => {
//     targets.forEach(img => {
//         console.log('bad code!')
//         const rect = img.getBoundingClientRect().top;
//         console.log(rect);
//         if(rect <= window.innerHeight) {
//             const src = img.getAttribute('data-lazy');
//             img.setAttribute('src', src);
//             img.classList.add('fade');
//         }
//     })
// })