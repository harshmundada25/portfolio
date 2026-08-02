import { useEffect } from "react";

function useScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const observerOptions = isMobile
      ? { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
      : { threshold: 0.15, rootMargin: "0px 0px -100px 0px" };

    // Use Intersection Observer for better performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Add stagger delay for multiple elements
            setTimeout(() => {
              entry.target.classList.add("active");
            }, index * 100);
          }
        });
      },
      observerOptions
    );

    reveals.forEach((element) => {
      observer.observe(element);
    });

    // Cleanup
    return () => {
      reveals.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
}

export default useScrollReveal;
