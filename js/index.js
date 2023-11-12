// Get the animated element
const animatedElement1 = document.getElementById("animatedElement1");
const animatedElement2 = document.getElementById("animatedElement2");
const animatedElement3 = document.getElementById("animatedElement3");
const animatedElement4 = document.getElementById("animatedElement4");
const animatedElement5 = document.getElementById("animatedElement5");
const animatedElement = document.getElementById("animatedElement");


// Options for the Intersection Observer
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};


// Callback function to handle intersection changes
const handleIntersection1 = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add Animate.css classes when the element is in the viewport
            animatedElement1.classList.add("animate__fadeInUp");

        } else {
            // // Remove Animate.css classes when the element is out of the viewport
            animatedElement1.classList.remove("animate__fadeInUp");

        }
    });
};

// Create an Intersection Observer with the callback and options
const observer1 = new IntersectionObserver(handleIntersection1, options);

// Start observing the target element
observer1.observe(animatedElement1);

// Callback function to handle intersection changes
const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add Animate.css classes when the element is in the viewport
            animatedElement.classList.add("animate__fadeInUp");

        } else {
            // // Remove Animate.css classes when the element is out of the viewport
            animatedElement.classList.remove("animate__fadeInUp");

        }
    });
};

// Create an Intersection Observer with the callback and options
const observer = new IntersectionObserver(handleIntersection, options);

// Start observing the target element
observer.observe(animatedElement);


// Callback function to handle intersection changes
const handleIntersection2 = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add Animate.css classes when the element is in the viewport
            animatedElement2.classList.add("animate__fadeInUp");

        } else {
            // // Remove Animate.css classes when the element is out of the viewport
            animatedElement2.classList.remove("animate__fadeInUp");

        }
    });
};

// Create an Intersection Observer with the callback and options
const observer2 = new IntersectionObserver(handleIntersection2, options);

// Start observing the target element
observer2.observe(animatedElement2);

// Callback function to handle intersection changes
const handleIntersection3 = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add Animate.css classes when the element is in the viewport
            animatedElement3.classList.add("animate__fadeInUp");

        } else {
            // // Remove Animate.css classes when the element is out of the viewport
            animatedElement3.classList.remove("animate__fadeInUp");

        }
    });
};

// Create an Intersection Observer with the callback and options
const observer3 = new IntersectionObserver(handleIntersection3, options);

// Start observing the target element
observer3.observe(animatedElement3);


// Callback function to handle intersection changes
const handleIntersection4 = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add Animate.css classes when the element is in the viewport
            animatedElement4.classList.add("animate__fadeInUp");

        } else {
            // // Remove Animate.css classes when the element is out of the viewport
            animatedElement4.classList.remove("animate__fadeInUp");

        }
    });
};

// Create an Intersection Observer with the callback and options
const observer4 = new IntersectionObserver(handleIntersection4, options);

// Start observing the target element
observer4.observe(animatedElement4);


// Callback function to handle intersection changes
const handleIntersection5 = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add Animate.css classes when the element is in the viewport
            animatedElement5.classList.add("animate__fadeInUp");

        } else {
            // // Remove Animate.css classes when the element is out of the viewport
            animatedElement5.classList.remove("animate__fadeInUp");

        }
    });
};

// Create an Intersection Observer with the callback and options
const observer5 = new IntersectionObserver(handleIntersection5, options);

// Start observing the target element
observer5.observe(animatedElement5);





