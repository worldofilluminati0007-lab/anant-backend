# Video Testimonials Component Documentation

## Overview

The `VideoTestimonials` component is an enhanced testimonial section with the following features:

- **Video Testimonials**: Carousel of patient testimonial videos with hover-to-play functionality
- **Patient Reviews**: Dynamic review system where visitors can post reviews
- **Star Ratings**: 5-star rating system for reviews
- **Local Storage**: Reviews are stored in component state (persists during session)
- **Responsive Design**: Fully responsive on mobile, tablet, and desktop

## Features

### 1. Video Carousel

- **3 Video Slots**: Ready to host patient testimonial videos
- **Hover-to-Play**: Videos automatically play when you hover over them
- **Auto-Pause**: Videos pause and reset when you move mouse away
- **Responsive Cards**: 3-column grid on desktop, 1-column on mobile
- **Active Selection**: Click a card to make it the main testimonial
- **Pagination Dots**: Visual indicator and navigation for switching testimonials

### 2. Review System

#### Features:
- **Post Review Button**: Toggle to show/hide review form
- **Name & Email**: Collect reviewer information
- **5-Star Rating**: Interactive star rating selector
- **Text Review**: Multi-line text area for detailed reviews
- **Success Notification**: Toast message confirms review was posted
- **Reviews Display**: New reviews appear at the top of the list
- **Date Stamping**: Automatic timestamp for each review

#### Form Validation:
- All fields required (name, email, review text)
- Email format validation
- Star rating selection (1-5)
- Error alerts for missing fields

### 3. UI Elements

- **Header Section**: Title and description with CTA
- **Testimonial Cards**: 3-column grid with video previews
- **Active Testimonial Display**: Full testimonial quote and info
- **Navigation Controls**: Previous/Next buttons and pagination dots
- **Divider**: Visual separator between testimonials and reviews
- **Review Form**: Styled form with input fields and submit
- **Reviews List**: Cards displaying all posted reviews with ratings

## File Structure

```
client/
├── src/
│   └── components/
│       └── VideoTestimonials.tsx (new component)
└── public/
    └── videos/
        ├── sample_video_1.mp4
        ├── sample_video_2.mp4
        ├── sample_video_3.mp4
        └── README.md
```

## Setup Instructions

### 1. Add Video Files

1. Navigate to `client/public/videos/`
2. Add your video files:
   - `sample_video_1.mp4`
   - `sample_video_2.mp4`
   - `sample_video_3.mp4`

### 2. Update Testimonial Data

Edit `VideoTestimonials.tsx` and update the `testimonials` array:

```tsx
const testimonials = [
  {
    image: testimonial1,
    alt: "Description for accessibility",
    name: "Patient Name",
    condition: "Health Condition",
    testimonial: "Patient's quote about their experience...",
    videoUrl: "sample_video_1.mp4",
  },
  // ... more testimonials
];
```

### 3. Use in Home Page

The component is already integrated in `Home.tsx`:

```tsx
import VideoTestimonials from "@/components/VideoTestimonials";

export default function Home() {
  return (
    <>
      {/* other components */}
      <VideoTestimonials />
      {/* footer */}
    </>
  );
}
```

## Video Specifications

### Recommended Settings

- **Format**: MP4
- **Codec**: H.264 video, AAC audio
- **Resolution**: 1920x1080 (Full HD)
- **Frame Rate**: 30fps
- **Duration**: 30 seconds to 2 minutes
- **File Size**: Under 50MB for optimal performance
- **Aspect Ratio**: 16:9 (widescreen)

### Video Encoding (FFmpeg Example)

```bash
ffmpeg -i input.mp4 -vcodec libx264 -crf 23 -acodec aac -b:a 128k output.mp4
```

## Component Props

The component is self-contained and doesn't require props. All data is managed internally.

## State Management

### Local State Variables

```tsx
const [currentIndex, setCurrentIndex] = useState(0);           // Active testimonial index
const [reviews, setReviews] = useState<Review[]>([]);         // Posted reviews
const [showReviewForm, setShowReviewForm] = useState(false);   // Form visibility
const [playingIndex, setPlayingIndex] = useState<number | null>(null);  // Currently playing video
const [formData, setFormData] = useState({                    // Review form data
  name: "",
  email: "",
  rating: 5,
  content: "",
});
```

## User Interactions

### Video Playback

1. **Desktop**: Hover over a testimonial card → video plays automatically
2. **Mobile**: Tap a testimonial card → video plays
3. **Pause**: Move mouse away (desktop) → video pauses and resets

### Navigation

- Click pagination dots to jump to testimonial
- Use Previous/Next buttons to navigate
- Click testimonial card to make it active

### Review Posting

1. Click "Post Review" button
2. Fill in name, email, rating, and review text
3. Click "Post Review" to submit
4. Success notification appears
5. Review appears in the list above other reviews

## Styling

The component uses Tailwind CSS with:

- Gradient backgrounds: `from-primary/8 to-accent/8`
- Hover effects: `hover:shadow-2xl hover:-translate-y-2`
- Responsive grid: `grid md:grid-cols-3`
- Card styling: `Card` component from shadcn/ui
- Star ratings: Yellow stars `fill-yellow-400 text-yellow-400`
- Accent colors: Primary and secondary brand colors

## Data Persistence

### Current Session
- Reviews are stored in component state
- Persists during browser session
- Resets on page refresh

### Future Enhancement
To persist reviews permanently, integrate with a backend database:

```tsx
// Example: Save review to backend
const response = await fetch("/api/reviews", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(newReview),
});
```

## Accessibility Features

- Proper semantic HTML
- ARIA labels for buttons and controls
- Alt text for images
- Color contrast compliant
- Keyboard navigable (Tab through buttons)
- Screen reader friendly

## Mobile Responsiveness

- **Mobile (< 768px)**:
  - 1 column testimonial grid
  - Adjusted card sizes
  - Touch-friendly buttons
  - Full-width review form

- **Tablet (768px - 1024px)**:
  - 2-column testimonial grid
  - Optimized spacing

- **Desktop (> 1024px)**:
  - 3-column testimonial grid
  - Full features enabled

## Performance Tips

1. **Video Optimization**:
   - Use H.264 codec for browser compatibility
   - Limit file size to < 50MB
   - Consider lazy loading for multiple videos

2. **Image Optimization**:
   - Use WebP format where possible
   - Compress PNG/JPEG thumbnails
   - Lazy load images with `loading="lazy"`

3. **Component Optimization**:
   - Video refs prevent memory leaks
   - Reviews list can be paginated for large datasets
   - Consider virtualization if 100+ reviews

## Troubleshooting

### Videos Not Playing

**Issue**: Hover doesn't trigger video playback
- **Solution**: Check video file exists in `client/public/videos/`
- Verify video URL matches filename exactly
- Check browser console for 404 errors

### Videos Not Muted

**Issue**: Videos have audio enabled
- **Solution**: Ensure `muted` attribute is on video element
```tsx
<video muted loop ref={...} src={...} />
```

### Reviews Not Saving

**Issue**: Reviews disappear on page refresh
- **Solution**: Currently expected behavior (session-only storage)
- To persist: Implement backend database integration

### Image Sizing Issues

**Issue**: Testimonial images look distorted
- **Solution**: Ensure images are 16:9 aspect ratio
- Check image is not smaller than container

## Future Enhancements

1. **Backend Integration**: Save reviews to database
2. **Video Upload**: Allow admins to upload videos via CMS
3. **Filtering**: Filter reviews by rating
4. **Pagination**: Paginate reviews for large datasets
5. **Video Analytics**: Track video play counts
6. **Review Moderation**: Admin approval system
7. **Verified Purchases**: Show verified patient badge
8. **Video Lazy Loading**: Defer loading videos until needed

## API Integration Example

If you want to persist reviews to a backend:

```tsx
// Add after form submission
const saveReviewToBackend = async (review: Review) => {
  const response = await apiRequest({
    method: "POST",
    endpoint: "/api/reviews",
    payload: review,
  });
  return response;
};
```

## Browser Compatibility

- Chrome/Edge: 90+
- Firefox: 88+
- Safari: 14+
- Mobile browsers: All modern versions

## Notes

- Component is self-contained with no external dependencies beyond existing imports
- Reviews are ephemeral (session-based) by design
- Videos use the `muted` attribute for autoplay compatibility
- Fully responsive design with mobile-first approach
- Gradient backgrounds match site's primary and accent colors
