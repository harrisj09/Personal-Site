/*
- Grabs view ports of elements targeted.
- If the distance between between your viewport and the actual location of the element is a certain amount of pxs (or any form of measurement)
execute the fade in animation.
 */

// Start all of the targeted elements to display none

//https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API


/*

                        NOT WORKING
    A threshold of 1.0 means that when 100% of the target
    is visible within the element specified by the root option, the callback is invoked.
 */
    let about = {
        root: document.querySelector("#about"),
        rootMargin: '0px',
        threshold: 1.0
    };

let observer = new IntersectionObserver(callback, about);

