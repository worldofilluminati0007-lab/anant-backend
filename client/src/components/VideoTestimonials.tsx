import { useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, Quote, Send, Star } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import testimonial1 from "@assets/generated_images/patient_testimonial_video_thumbnail.png";
import testimonial2 from "@assets/generated_images/recovery_testimonial_video_frame.png";
import testimonial3 from "@assets/generated_images/patient_success_story_testimonial.png";

interface Review {
  id: string;
  name: string;
  email: string;
  rating: number;
  content: string;
  timestamp: string;
}

const testimonials = [
  {
    image: testimonial1,
    alt: "Patient testimonial - Diabetes treatment success story",
    name: "Rajesh Kumar",
    condition: "Diabetes Management",
    testimonial: "After years of struggling with diabetes, the personalized homoeopathic treatment at अनंत आरोग्य सदन has significantly improved my blood sugar levels. The doctors are compassionate and truly care about my well-being.",
    videoUrl: "sample_video_1.mp4",
  },
  {
    image: testimonial2,
    alt: "Recovery testimonial - Arthritis pain relief success",
    name: "Priya Sharma",
    condition: "Arthritis Relief",
    testimonial: "The chronic joint pain that limited my daily activities has reduced dramatically. I'm grateful for the gentle yet effective treatment approach. I can now enjoy my morning walks again!",
    videoUrl: "sample_video_2.mp4",
  },
  {
    image: testimonial3,
    alt: "Patient success story - Skin condition treatment",
    name: "Amit Patel",
    condition: "Skin Health",
    testimonial: "My persistent skin condition cleared up within months of treatment. The natural remedies worked wonders where conventional treatments failed. Highly recommend their expertise!",
    videoUrl: "sample_video_3.mp4",
  },
];

export default function VideoTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 5,
    content: "",
  });
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setPlayingIndex(null);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setPlayingIndex(null);
  };

  const handleMouseEnter = (index: number) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index]?.play().catch(() => {
        // Video play failed - might be due to autoplay restrictions
      });
      setPlayingIndex(index);
    }
  };

  const handleMouseLeave = (index: number) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index]?.pause();
      videoRefs.current[index]!.currentTime = 0;
      setPlayingIndex(null);
    }
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.content.trim()) {
      alert("Please fill in all fields");
      return;
    }

    const newReview: Review = {
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      rating: formData.rating,
      content: formData.content,
      timestamp: new Date().toLocaleDateString("en-IN", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    };

    setReviews([newReview, ...reviews]);
    setFormData({ name: "", email: "", rating: 5, content: "" });
    setShowReviewForm(false);

    // Show success message
    const successMsg = document.createElement("div");
    successMsg.className =
      "fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-bounce";
    successMsg.textContent = "✓ Review posted successfully!";
    document.body.appendChild(successMsg);
    setTimeout(() => successMsg.remove(), 3000);
  };

  return (
    <section id="video-testimonials" className="py-24 md:py-32 bg-gradient-to-br from-primary/8 via-transparent to-accent/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Patient Success Stories - Video Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear directly from our patients about their healing journey - hover to watch videos
          </p>
        </div>

        {/* Video Testimonials Grid */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`overflow-hidden transition-all duration-300 cursor-pointer border border-primary/10 shadow-md hover:shadow-2xl hover:-translate-y-2 ${
                  index === currentIndex ? "ring-2 ring-primary scale-105" : "opacity-70 hover:opacity-100"
                }`}
                onClick={() => {
                  setCurrentIndex(index);
                  setPlayingIndex(null);
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div className="relative aspect-video bg-gray-900 overflow-hidden group">
                  {/* Video or Image */}
                  {playingIndex === index ? (
                    <video
                      ref={(el) => {
                        videoRefs.current[index] = el;
                      }}
                      className="w-full h-full object-cover"
                      loop
                      muted
                      src={`/videos/${testimonial.videoUrl}`}
                    />
                  ) : (
                    <img
                      src={testimonial.image}
                      alt={testimonial.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  )}

                  {/* Overlay with Play Button */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50 flex items-center justify-center group-hover:from-black/40 group-hover:to-black/60 transition-all">
                    <div className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 text-secondary ml-1" />
                    </div>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-5">
                  <h4 className="font-bold text-base text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground font-medium">{testimonial.condition}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Active Testimonial Display */}
          <Card className="p-10 relative border border-primary/10 shadow-lg bg-gradient-to-br from-white to-primary/5">
            <Quote className="w-12 h-12 text-primary/15 absolute top-6 left-6" />
            <div className="relative z-10">
              <p className="text-xl md:text-2xl font-medium mb-8 leading-relaxed text-foreground">
                "{testimonials[currentIndex].testimonial}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-lg text-foreground">{testimonials[currentIndex].name}</p>
                  <p className="text-muted-foreground">{testimonials[currentIndex].condition}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" onClick={prevTestimonial}>
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={nextTestimonial}>
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setPlayingIndex(null);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-primary/20"></div>

        {/* Reviews Section */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">Patient Reviews</h3>
            <Button
              onClick={() => setShowReviewForm(!showReviewForm)}
              className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:-translate-y-1 transition-all font-semibold rounded-lg px-6 py-2"
            >
              {showReviewForm ? "Cancel" : "Post Review"}
            </Button>
          </div>

          {/* Review Form */}
          {showReviewForm && (
            <Card className="p-8 mb-8 border border-primary/20 shadow-lg bg-gradient-to-br from-white to-primary/5">
              <form onSubmit={handleSubmitReview} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                    <Input
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-primary/30 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-primary/30 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => setFormData({ ...formData, rating })}
                        className="transition-all"
                      >
                        <Star
                          className={`w-8 h-8 ${
                            rating <= formData.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300 hover:text-yellow-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Your Review</label>
                  <Textarea
                    placeholder="Share your experience with our treatment..."
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    className="min-h-32 border-primary/30 focus:border-primary resize-none"
                  />
                </div>

                <div className="flex gap-3 justify-end">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowReviewForm(false)}
                    className="px-6 py-2"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:-translate-y-1 transition-all font-semibold rounded-lg px-6 py-2 flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Post Review
                  </Button>
                </div>
              </form>
            </Card>
          )}

          {/* Reviews List */}
          <div className="space-y-4">
            {reviews.length === 0 ? (
              <Card className="p-8 text-center border border-primary/10 bg-gradient-to-br from-white to-primary/5">
                <p className="text-muted-foreground text-lg">No reviews yet. Be the first to share your experience!</p>
              </Card>
            ) : (
              reviews.map((review) => (
                <Card key={review.id} className="p-6 border border-primary/10 shadow-md hover:shadow-lg transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-semibold text-foreground text-lg">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.timestamp}</p>
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed">{review.content}</p>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
