
import React from 'react';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import { ImageIcon, Users } from 'lucide-react';

// Gallery images with correct image paths
const images = [
  { 
    id: 1, 
    url: '/src/assets/gallery/image1.jpg', 
    alt: 'Environmental education field trip',
    caption: 'Environmental education field trip' 
  },
  { 
    id: 2, 
    url: '/src/assets/gallery/image2.jpg', 
    alt: 'Bday celebrations at Lakshya',
    caption: 'Birthday celebrations at Lakshya' 
  },
  { 
    id: 3, 
    url: '/src/assets/gallery/image3.jpg', 
    alt: 'Annual celebration event',
    caption: 'Annual cultural performance by our students' 
  },
  { 
    id: 4, 
    url: '/src/assets/gallery/image4.jpg', 
    alt: 'Educational art project',
    caption: 'Art and craft workshop for creative expression' 
  },
  { 
    id: 5, 
    url: '/src/assets/gallery/image5.jpg', 
    alt: 'Outdoor learning activities',
    caption: 'Teacher development workshop'
  },
  { 
    id: 6, 
    url: '/src/assets/gallery/image6.jpg', 
    alt: 'Teachers training session',
    caption: 'Environmental education field trip' 
  },
  { 
    id: 7, 
    url: '/src/assets/gallery/image7.jpg', 
    alt: 'Community outreach program',
    caption: 'Healthcare awareness camp in the community' 
  },
  { 
    id: 8, 
    url: '/src/assets/gallery/image8.jpg', 
    alt: 'Parent-teacher meeting',
    caption: 'Parents and teachers collaborate for child development' 
  },
  { 
    id: 9, 
    url: '/src/assets/gallery/image9.jpg', 
    alt: 'Special event celebration',
    caption: 'Celebrating Trips at Lakshya' 
  },
  { 
    id: 10, 
    url: '/src/assets/gallery/image10.jpg', 
    alt: 'Educational workshop',
    caption: 'Interactive learning session' 
  },
  { 
    id: 11, 
    url: '/src/assets/gallery/image11.jpg', 
    alt: 'Student achievements',
    caption: 'Celebrating student accomplishments' 
  }
];

// YouTube videos
const videos = [
  { id: 1, videoId: 'yrvyifeCtec', title: 'Lakshya NGO Introduction' },
  { id: 2, videoId: '1LU0q4UDfjs', title: "'Thank you God' by Rupali Ma'am" },
  { id: 3, videoId: 'E6Oh5NDnnPw', title: 'Easy tricks for maths' },
  { id: 4, videoId: 'AjhVAuhaaTk', title: 'vedic maths' },
  { id: 5, videoId: 'wsaLT3h1A4c', title: 'Be kind to animal by Bani Mam' },
  { id: 6, videoId: 'uWGUjzM66u4', title: 'English grammar ( noun ) by Maahi mam' }
  // More videos would be added here
];

const Gallery: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-lakshya-blue to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 font-serif">Our Gallery</h1>
            <p className="text-xl">
              Glimpses of our journey, events, and impact through images and videos
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 font-serif text-gray-800 text-center flex items-center justify-center gap-2">
            <ImageIcon className="h-8 w-8 text-lakshya-orange" />
            <span>Photo Gallery</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((image) => (
              <div key={image.id} className="overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105 duration-300">
                <img 
                  src={image.url} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-3 bg-white">
                  <p className="text-sm text-gray-700">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 font-serif text-gray-800 text-center">Video Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="shadow-md rounded-lg overflow-hidden">
                <YouTubeEmbed videoId={video.videoId} title={video.title} />
                <div className="p-4 bg-white">
                  <h3 className="font-bold text-lg">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href="https://www.youtube.com/@ManoramaGupta19" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lakshya-blue hover:text-blue-800 transition-colors"
            >
              Visit our YouTube channel for more videos →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
