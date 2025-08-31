# Achievements & Timeline Section

This section displays a timeline of achievements with images, descriptions, and animated elements using GSAP.

## Adding Timeline Images

1. Add your timeline images to the `/public/assets/timeline/` directory
2. Required images:
   - `coding-start.jpg`
   - `first-project.jpg`
   - `hackathon.jpg`
   - `open-source.jpg`
   - `conference.jpg`

## Customizing Timeline Content

To customize the timeline content, edit the `timelineData` array in the `AchievementsTimeline.jsx` component:

```jsx
const timelineData = [
  {
    id: 1,
    year: '2018',
    title: 'Started Coding Journey',
    description: 'Began learning web development fundamentals and created my first website.',
    image: '/assets/timeline/coding-start.jpg',
    align: 'left',
  },
  // Add more timeline items here
];
```

## Animation Features

This component uses several GSAP animations:
- Timeline line drawing animation
- Staggered entrance of timeline items
- Scale animations for year markers
- Particle background effect

## Components Used

- `AchievementsTimeline.jsx` - Main timeline component
- `TimelineAnimation.jsx` - Handles entrance animations for timeline items
- `AnimatedHeader.jsx` - Creates letter-by-letter animation for the section header
- `TimelineBackground.jsx` - Creates a particle network background effect