export interface Memory {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  tag: string;
}

export interface BirthdayData {
  recipientName: string;
  nickname: string;
  birthDate: string; // YYYY-MM-DD
  letter: {
    heading: string;
    body: string[];
    closing: string;
    signature: string;
  };
  memories: Memory[];
  gifts: {
    title: string;
    description: string;
    code: string;
    icon: string;
  }[];
}

export const birthdayData: BirthdayData = {
  recipientName: "SANJANA",
  nickname: "SANJU DON",
  birthDate: "2007-10-29", // अपनी पसंद की तारीख से बदलें
  letter: {
    heading: "A Very Special Wish For You ✨",
    body: [
      "Happy Birthday! Today is all about celebrating you, your journey, and every single milestone you've achieved so far.",
      "May this coming year bring you boundless happiness, thrilling breakthroughs, and endless opportunities to do what you love most.",
      "Thank you for being the amazing, thoughtful, and inspiring person that you are every single day. Here's to making countless more unforgettable memories together!"
    ],
    closing: "With love and warmest wishes,",
    signature: "Always by your side ❤️"
  },
  memories: [
    {
      id: 1,
      title: "Golden Days",
      date: "Memorable Trip",
      description: "One of those days where time just paused and smiles never faded.",
      image: "/images/most favourit.jpeg",
      tag: "Adventures"
    },
    {
      id: 2,
      title: "Talks",
      date: "Chilly Morning",
      description: "Classroom morning.",
      image: "/images/sanjana.jpeg",
      tag: "Vibes"
    },
    {
      id: 3,
      title: "Trip",
      date: "Celebration",
      description: "Celebratin",
      image: "/images/trip.jpg",
      tag: "Proud Moment"
    }
  ],
  gifts: [
    
    {
      title: "Day of Pure Relaxation",
      description: "A pass to do absolutely zero chores or work for 24 whole hours.",
      code: "LAZY-DAY-FREE",
      icon: "food"
    },
  ]
};