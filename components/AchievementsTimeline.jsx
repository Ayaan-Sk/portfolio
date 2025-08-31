'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { cn } from '@/utils/cn';
import TimelineAnimation from './ui/TimelineAnimation';
import AnimatedHeader from './ui/AnimatedHeader';
import TimelineBackground from './ui/TimelineBackground';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const timelineData = [
  {
    id: 1,
    year: '2020',
    title: 'Started Coding Journey',
    description: 'Began learning web development fundamentals and Won many Coding and Paper presentations.',
    image: '/assets/timeline/coding-start.jpg',
    align: 'left',
  },
  {
    id: 2,
    year: '2023',
    title: 'First Professional Android Project',
    description: 'Completed my first client project using Java and delivered a responsive Android App OptoTalk.',
    image: '/assets/timeline/first-project.jpg',
    align: 'right',
  },
  {
    id: 3,
    year: '2024',
    title: 'Hackathon Runner Up',
    description: 'Got runner up place in a hackathon (more than 100+ teams) with an innovative solution for remote Blood Donation Connect app.',
    image: '/assets/timeline/hackathon.jpg',
    align: 'left',
  },
  {
    id: 4,
    year: '2024',
    title: 'Hosted Own Workshops',
    description: 'Became an active contributor to several open-source projects and gave insights to many aspiring developers through workshops.',
    image: '/assets/timeline/open-source.jpg',
    align: 'right',
  },
  {
    id: 5,
    year: '2025',
    title: 'Vice President CSE KRANS',
    description: 'Led the Computer Science Engineering department as Vice President and organized various technical events.',
    image: '/assets/timeline/conference.jpg',
    align: 'left',
  },
    {
    id: 6,
    year: '2025',
    title: 'Hosted and Successfully Managed a 8 Hour Hackathon',
    description: 'Successfully organized and managed a hackathon event, overseeing all aspects from planning to execution.',
    image: '/assets/timeline/Hack.jpg',
    align: 'right',
  },
];

const AchievementsTimeline = () => {
  const timelineRef = useRef(null);
  const timelineItemsRef = useRef([]);

  useEffect(() => {
    // Make sure we're in the browser environment
    if (typeof window === 'undefined') return;

    const timeline = timelineRef.current;
    const timelineItems = timelineItemsRef.current;

    // Create the timeline animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: timeline,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    });

    // Animate the timeline line
    tl.fromTo(
      '.timeline-line',
      { height: 0 },
      { height: '100%', duration: 1, ease: 'none' }
    );

    // Animate each timeline item
    timelineItems.forEach((item, index) => {
      if (!item) return;

      // Create a separate timeline for each item
      gsap.fromTo(
        item,
        { 
          opacity: 0,
          x: timelineData[index].align === 'left' ? -50 : 50 
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'bottom 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animate the year marker
      gsap.fromTo(
        item.querySelector('.year-marker'),
        { scale: 0 },
        {
          scale: 1,
          duration: 0.5,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'bottom 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animate the image
      gsap.fromTo(
        item.querySelector('.timeline-image-container'),
        { 
          y: 30,
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'bottom 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Cleanup function
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      
      timelineItems.forEach((item) => {
        const triggers = ScrollTrigger.getAll().filter(
          (trigger) => trigger.vars.trigger === item
        );
        triggers.forEach((trigger) => trigger.kill());
      });
    };
  }, []);

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      <TimelineBackground />
      <div className="container mx-auto px-4">
        <AnimatedHeader className="text-4xl font-bold text-center mb-16">
          Achievements & Timeline
        </AnimatedHeader>
        
        <div 
          ref={timelineRef}
          className="relative"
        >
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 z-0">
            <div className="timeline-line absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 to-purple-600 h-0"></div>
          </div>

          {/* Timeline items */}
          <div className="relative z-10">
            {timelineData.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => (timelineItemsRef.current[index] = el)}
                className={cn(
                  "flex items-center mb-24 relative",
                  item.align === 'left' ? 'justify-start' : 'justify-end',
                  item.align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse',
                  "flex-col md:flex-row"
                )}
              >
                {/* Year marker */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className="year-marker w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg">
                    {item.year}
                  </div>
                </div>

                {/* Content container */}
                <TimelineAnimation 
                  direction={item.align === 'left' ? 'left' : 'right'} 
                  delay={index * 0.2}
                  className={cn(
                    "w-full md:w-5/12 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg",
                    "flex flex-col md:flex-row gap-6 items-center",
                    item.align === 'left' ? 'md:mr-12' : 'md:ml-12',
                    "mt-16 md:mt-0"
                  )}
                >
                  {/* Image */}
                  <div className="timeline-image-container w-full md:w-1/3 aspect-square relative overflow-hidden rounded-lg">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Text content */}
                  <div className="w-full md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </TimelineAnimation>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsTimeline;