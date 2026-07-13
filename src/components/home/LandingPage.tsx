"use client";

import { useState, useEffect, useRef } from 'react';

interface ScrollItem {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
  imageAlt: string;
}

interface LocationItem {
  id: string;
  title: string;
  image: string;
  srcSet: string;
  address: string;
  mapLink: string;
}

export default function LandingPage() {
  const [activeScrollItem, setActiveScrollItem] = useState<string>('scroll1');
  const [activeLocation, setActiveLocation] = useState<string>('Singapore');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const textItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  
  const scrollItems: ScrollItem[] = [
    {
      id: 'scroll1',
      title: 'Accelerate your revenue growth.',
      description: 'Digitise and expand your base by offering your merchants, suppliers and end customers with more ways to pay, in just a few clicks.',
      buttonText: 'Explore our payment solutions',
      buttonLink: '/platform/payments',
      imageUrl: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63187a6b5d483c5a0d6b1067_00__Homepage%20-%20Feat%201.png',
      imageAlt: 'Payment options dashboard'
    },
    {
      id: 'scroll2',
      title: 'Get more done with smarter workflows.',
      description: 'Instant notifications and intelligent flows make merchant onboarding, transaction monitoring, chargeback and dispute management, and more, a breeze.',
      buttonText: 'Explore our merchant services',
      buttonLink: '/platform/merchant-services',
      imageUrl: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63248eebe3ce6c477fefd39c_01__Homepage%20-%20Feat%202.png',
      imageAlt: 'Workflow management'
    },
    {
      id: 'scroll3',
      title: 'Grow your market share with the latest technology.',
      description: 'Launch quickly with modular, easy to configure microservices and features. Let the tech do the heavy lifting.',
      buttonText: 'Explore the smart tech',
      buttonLink: '/platform/technology',
      imageUrl: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/63248de10957f67b02f7882c_01__Homepage%20-%20Feat%203.png',
      imageAlt: 'Technology modules'
    }
    ];
  

  const locations: LocationItem[] = [
    {
      id: 'London',
      title: 'London',
      image: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/62fe4b5d954f0f5bedcdf72e_image-1.jpg',
      srcSet: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/62fe4b5d954f0f5bedcdf72e_image-1-p-500.jpg 500w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/62fe4b5d954f0f5bedcdf72e_image-1-p-800.jpg 800w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/62fe4b5d954f0f5bedcdf72e_image-1-p-1080.jpg 1080w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/62fe4b5d954f0f5bedcdf72e_image-1-p-1600.jpg 1600w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/62fe4b5d954f0f5bedcdf72e_image-1-p-2000.jpg 2000w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/62fe4b5d954f0f5bedcdf72e_image-1.jpg 2362w',
      address: 'Level 24, One Canada Square\nCanary Wharf, London E14 5AB\nUnited Kingdom',
      mapLink: 'https://goo.gl/maps/1QFYcNr8yUfW9ZG28'
    },
    {
      id: 'Singapore',
      title: 'Singapore',
      image: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/62fe4b5ccc7c8829021f8ce6_image-1-1.jpg',
      srcSet: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/62fe4b5ccc7c8829021f8ce6_image-1-1-p-500.jpg 500w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/62fe4b5ccc7c8829021f8ce6_image-1-1-p-800.jpg 800w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/62fe4b5ccc7c8829021f8ce6_image-1-1-p-1080.jpg 1080w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/62fe4b5ccc7c8829021f8ce6_image-1-1-p-1600.jpg 1600w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/62fe4b5ccc7c8829021f8ce6_image-1-1.jpg 1766w',
      address: 'The Great Room\n391B Orchard Rd\nLevel 22 Ngee Ann City Tower B\nSingapore 238874',
      mapLink: 'https://maps.app.goo.gl/gbRtMeXoNLTL8ZLNA'
    },
    {
      id: 'Ho Chi Minh City',
      title: 'Ho Chi Minh City',
      image: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6541f3fd1eb0104326f2ad7e_The%20Hive.jpg',
      srcSet: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6541f3fd1eb0104326f2ad7e_The%20Hive-p-500.jpg 500w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6541f3fd1eb0104326f2ad7e_The%20Hive-p-800.jpg 800w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6541f3fd1eb0104326f2ad7e_The%20Hive-p-1080.jpg 1080w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6541f3fd1eb0104326f2ad7e_The%20Hive-p-1600.jpg 1600w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6541f3fd1eb0104326f2ad7e_The%20Hive-p-2000.jpg 2000w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6541f3fd1eb0104326f2ad7e_The%20Hive.jpg 2346w',
      address: 'The Hive\n26 Huynh Khuong Ninh, Dakao\nDistrict 1, Ho Chi Minh City\nVietnam',
      mapLink: 'https://maps.app.goo.gl/G3KM2WuTmCs5QSan8'
    },
    {
      id: 'Bangkok',
      title: 'Bangkok',
      image: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6541f591797f9b25180ab4ec_Gaysorn%20Tower.jpg',
      srcSet: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6541f591797f9b25180ab4ec_Gaysorn%20Tower-p-500.jpg 500w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6541f591797f9b25180ab4ec_Gaysorn%20Tower-p-800.jpg 800w, https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/6541f591797f9b25180ab4ec_Gaysorn%20Tower.jpg 881w',
      address: 'The Great Room\n127 Ratchadamri Road, Unit A\nGaysorn Tower, Level 26 & 25 Lumpini, Pathumwan\nBangkok 10330',
      mapLink: 'https://maps.app.goo.gl/N8FGhgzbzNrz9LFr9'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!imageContainerRef.current) return;

      const containerRect = imageContainerRef.current.getBoundingClientRect();
      const containerBottom = containerRect.bottom;
      const triggerThreshold = containerRect.height * 0.2;

      textItemsRef.current.forEach((item, index) => {
        if (!item) return;
        
        const itemRect = item.getBoundingClientRect();
        if (itemRect.top <= containerBottom - triggerThreshold && 
            itemRect.bottom >= containerBottom - triggerThreshold) {
          setActiveScrollItem(scrollItems[index].id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && 
          !menuRef.current.contains(event.target as Node) && 
          menuButtonRef.current && 
          !menuButtonRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  

  
  const currentLocation = locations.find(loc => loc.id === activeLocation) || locations[1];

  return (
    <div className="font-sans text-black bg-white min-h-screen">
      {/* Navbar */}
      

      {/* Hero Section */}
      
      
      {/* Tabbed Section */}
      

      {/* Sticky Scroll Section */}
      

      {/* Security Section */}

      {/* Customized Solutions Section */}
      

      {/* Locations Section */}
      
      
      {/* CTA Section */}
      

      {/* Footer */}
      
    </div>
  );
}