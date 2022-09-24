const boxes = document.querySelectorAll(".box");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting);
        // if (entry.isIntersecting) observer.unobserve(entry.target); // stops observing after initial load-in (useful for images)
    });
}, {
    threshold: .5,       // percentage of how much of the element should be visible before trigger
    root: document,     // specifies what element the observer should be observing
    rootMargin: "0px"   // intersection trigger margin (useful for pre-loading images)
});

boxes.forEach(box => {
    observer.observe(box);
});