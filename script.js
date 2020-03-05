// import Highway from '@dogstudio/highway';
// import {TimelineLite} from 'gsap';

const enterBtn = document.querySelector('.btn');

// class Fade extends Highway.Transition {
//     in({from, to, done}) {
//         const tl = new TimelineLite();
//         tl.fromTo(to, 0.5, 
//             {left: '-100%', top: '50%'}, {left: '0%'})
//         .fromTo(to, 0.5, 
//             {height: '2vh'}, 
//             {height: '90vh', top: '10%', onComplete: function() {
//                 from.remove();
//                 done();
//             }}
//         )
//         .fromTo(to.children[0], 2, {opacity: 0}, {opacity: 1})
//     }
//     out({from, done}) {
//         done();
//     }
// }

// const H = new Highway.core({
//     transitions: {
//         default: Fade
//     }
// });


function enterDigiWorld() {
    window.location.href = 'questions.html'
    console.log("maybe?")
}

enterBtn.addEventListener('click', enterDigiWorld);