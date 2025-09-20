"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const reviews = [
  {
    name: "Ashish Dwivedi",
    image: "/images/review/Ashish Dwivedi.png",
    date: "4 days ago",
    short: "Excellent services, very helpful and humble. I recommend EazyVisas for all your visa needs!",
    full: "Excellent services, very helpful and humble. I recommend EazyVisas for all your visa needs! The team guided me through every step and made the process seamless.",
  },
  {
    name: "macsen jose",
    image: "/images/review/macsen jose.png",
    date: "16 days ago",
    short: "Had taken Shaheens assistance from EazyVisas and it was a smooth process. Highly recommended!",
    full: "Had taken Shaheens assistance from EazyVisas and it was a smooth process. Highly recommended! The support was prompt and professional.",
  },
  {
    name: "Aditya Bhardwaj",
    image: "/images/review/Aditya Bhardwaj.png",
    date: "2 weeks ago",
    short: "Very professional and prompt service. Got my visa without any hassle. Thank you!",
    full: "Very professional and prompt service. Got my visa without any hassle. Thank you! Will definitely use their services again.",
  },
  {
    name: "Mozammil Khan",
    image: "/images/review/Mozammil Khan.png",
    date: "1 week ago",
    short: "Great experience! The team was very supportive throughout the process.",
    full: "Great experience! The team was very supportive throughout the process. They answered all my queries and made sure everything was in order.",
  },
  {
    name: "Ramachandran",
    image: "/images/review/Ramachandran R S.png",
    date: "3 weeks ago",
    short: "Very helpful and efficient service. Highly recommend EazyVisas!",
    full: "Very helpful and efficient service. Highly recommend EazyVisas! The process was quick and easy.",
  },
  {
    name: "SHUBHAM JAIN",
    image: "/images/review/SHUBHAM JAIN.png",
    date: "2 weeks ago",
    short: "Quick response and very professional. Got my visa on time. Thank you!",
    full: "Quick response and very professional. Got my visa on time. Thank you! The staff was courteous and helpful.",
  },
  {
    name: "Siddhant Doshi",
    image: "/images/review/Siddhant Doshi.png",
    date: "1 month ago",
    short: "Amazing service and very friendly staff. Will use again for sure!",
    full: "Amazing service and very friendly staff. Will use again for sure! The process was smooth and transparent.",
  },
  {
    name: "Sonia Bhatti",
    image: "/images/review/Sonia Bhatti.png",
    date: "3 weeks ago",
    short: "Very satisfied with the service. Got my visa quickly and easily.",
    full: "Very satisfied with the service. Got my visa quickly and easily. Highly recommend their services.",
  },
  {
    name: "Vachan Kudmule",
    image: "/images/review/Vachan Kudmule.png",
    date: "2 weeks ago",
    short: "Superb experience! The process was smooth and transparent.",
    full: "Superb experience! The process was smooth and transparent. The team was always available for support.",
  },
  {
    name: "vinit mehta",
    image: "/images/review/vinit mehta.png",
    date: "1 month ago",
    short: "Very happy with the support and guidance. Highly recommend!",
    full: "Very happy with the support and guidance. Highly recommend! The team is knowledgeable and efficient.",
  },
];

const FeedbackReviewComponent = () => {
  const [activeReview, setActiveReview] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const container = document.getElementById('review-carousel');
    if (!container) return;

    let animationId;
    let lastTimestamp = 0;
    const scrollSpeed = 0.8; // Slightly faster for better visibility

    const autoScroll = (timestamp) => {
      if (isPaused) {
        animationId = requestAnimationFrame(autoScroll);
        return;
      }

      if (timestamp - lastTimestamp >= 16) { // ~60fps
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        // Check if we can actually scroll (has overflow content)
        if (maxScroll <= 0) {
          animationId = requestAnimationFrame(autoScroll);
          return;
        }
        
        if (container.scrollLeft >= maxScroll - 1) { // Small buffer to prevent stuck
          // Smooth reset to beginning with a small delay
          setTimeout(() => {
            if (container) {
              container.scrollLeft = 0;
            }
          }, 1000); // 1 second pause before reset
          // Pause briefly during reset
          setIsPaused(true);
          setTimeout(() => setIsPaused(false), 1500);
        } else {
          container.scrollLeft += scrollSpeed;
        }
        
        lastTimestamp = timestamp;
      }
      
      animationId = requestAnimationFrame(autoScroll);
    };

    // Fallback mechanism to prevent getting stuck
    const stuckCheckInterval = setInterval(() => {
      if (!isPaused && container) {
        const currentPosition = container.scrollLeft;
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        // If position hasn't changed and we're not at the beginning, reset
        if (currentPosition === lastScrollPosition && currentPosition > 0 && maxScroll > 0) {
          container.scrollLeft = 0;
          setLastScrollPosition(0);
        } else {
          setLastScrollPosition(currentPosition);
        }
      }
    }, 3000); // Check every 3 seconds

    // Start auto-scroll after a small delay to ensure container is ready
    const startTimeout = setTimeout(() => {
      animationId = requestAnimationFrame(autoScroll);
    }, 500);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      if (startTimeout) {
        clearTimeout(startTimeout);
      }
      if (stuckCheckInterval) {
        clearInterval(stuckCheckInterval);
      }
    };
  }, [isPaused, lastScrollPosition]);

  return (
    <section className="py-20 bg-white">
        <div className="max-w-[1420px] mx-auto px-6 sm:px-10 lg:px-12">
          {/* Heading */}
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              See What Our Happy Clients Say
            </h2>
          </div>

          {/* Google Rating Summary */}
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center mb-1">
              <FcGoogle size={32} className="mr-2" />
              <span className="text-2xl font-semibold text-gray-800">Excellent on Google</span>
            </div>
            <div className="text-lg font-medium text-gray-700">5.0 out of 5 based on 50 reviews</div>
            <div className="flex mt-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">★</span>
              ))}
            </div>
          </div>

          {/* Hardcoded Google Reviews - Carousel/Slider */}
          <div className="relative">
            {/* Left scroll button */}
            <button
              onClick={() => {
                setIsPaused(true);
                const container = document.getElementById('review-carousel');
                if (container) {
                  container.scrollBy({ left: -350, behavior: 'smooth' });
                  // Resume auto-scroll after manual scroll completes
                  setTimeout(() => setIsPaused(false), 1000);
                }
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md text-blue-500 h-10 w-10 rounded-full hidden md:flex items-center justify-center z-10 hover:bg-blue-50 transition-colors"
              style={{marginLeft: '-20px'}}
            >
              <FaAngleLeft size={22} />
            </button>
            {/* Carousel container */}
            <div
              id="review-carousel"
              className="flex gap-6 overflow-x-auto scroll-smooth py-2 px-1 hide-scrollbar"
              style={{scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch'}}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {reviews.map((review, idx) => (
                <div
                  key={review.name}
                  className="bg-white rounded-xl shadow-md p-4 flex-shrink-0 flex flex-col justify-between h-full hover:shadow-lg transition-shadow w-[220px] max-w-[90vw] min-h-[220px] md:min-h-[240px]"
                >
                  <div className="flex items-center mb-2 w-full">
                    <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full mr-3 object-cover" />
                    <div className="w-full">
                      <div className="font-semibold truncate w-full">{review.name}</div>
                      <div className="text-xs text-gray-500">{review.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-lg">★</span>
                    ))}
                  </div>
                  <div className="text-gray-700 text-sm mb-2 line-clamp-4">{review.short}</div>
                  <button
                    className="text-blue-500 text-xs font-medium mt-auto self-start underline hover:text-blue-700"
                    onClick={() => setActiveReview(idx)}
                  >
                    Read more
                  </button>
                </div>
              ))}
            </div>
            {/* Right scroll button */}
            <button
              onClick={() => {
                setIsPaused(true);
                const container = document.getElementById('review-carousel');
                if (container) {
                  container.scrollBy({ left: 350, behavior: 'smooth' });
                  // Resume auto-scroll after manual scroll completes
                  setTimeout(() => setIsPaused(false), 1000);
                }
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md text-blue-500 h-10 w-10 rounded-full hidden md:flex items-center justify-center z-10 hover:bg-blue-50 transition-colors"
              style={{marginRight: '-20px'}}
            >
              <FaAngleRight size={22} />
            </button>
          </div>

          {/* Star/Thank-you flows removed per request */}

          {/* Review Popup */}
          {activeReview !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
              <div className="bg-white rounded-xl shadow-2xl p-8 max-w-lg w-full relative animate-fadeIn">
                <button
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
                  onClick={() => setActiveReview(null)}
                >
                  ×
                </button>
                <div className="flex items-center mb-2">
                  <img src={reviews[activeReview].image} alt={reviews[activeReview].name} className="w-12 h-12 rounded-full mr-3 object-cover" />
                  <div>
                    <div className="font-semibold text-lg">{reviews[activeReview].name}</div>
                    <div className="text-xs text-gray-500">{reviews[activeReview].date}</div>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">★</span>
                  ))}
                </div>
                <div className="text-gray-800 text-base mt-4 whitespace-pre-line">{reviews[activeReview].full}</div>
              </div>
            </div>
          )}
        </div>
      </section>
  );
};

export default FeedbackReviewComponent;
