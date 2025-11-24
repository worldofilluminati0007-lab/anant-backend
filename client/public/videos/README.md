# Video Testimonials

Place your patient testimonial videos in this folder with the following naming convention:

- `sample_video_1.mp4` - First patient testimonial video
- `sample_video_2.mp4` - Second patient testimonial video
- `sample_video_3.mp4` - Third patient testimonial video

## Video Requirements

- **Format**: MP4 video format
- **Duration**: 30 seconds to 2 minutes recommended
- **Resolution**: 1920x1080 (Full HD) or higher
- **Codec**: H.264 video codec, AAC audio codec
- **File Size**: Keep under 50MB for optimal loading

## How Videos Work

1. Hover over any testimonial card to play the video automatically
2. Video will loop and play silently
3. On mouse leave, video pauses and resets to the beginning
4. Videos display a play button overlay before playing
5. Mobile users can tap to play

## Adding More Testimonials

To add more video testimonials:

1. Add new video file to this folder
2. Update the `VideoTestimonials.tsx` component with new testimonial data:
   - Update the `testimonials` array
   - Add corresponding video URL in the format `sample_video_N.mp4`
3. The component will automatically create new carousel cards and video hover functionality

## Video Compression Tips

Use FFmpeg to optimize videos:

```bash
ffmpeg -i input_video.mp4 -vcodec libx264 -crf 23 -acodec aac -b:a 128k output.mp4
```

This maintains good quality while reducing file size.
