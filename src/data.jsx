// import icons
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaDiscord,
} from 'react-icons/fa';
// import images
import AboutImg from '../src/assets/img/about/plate.png';
import pizza from '../src/assets/img/pizza.png';
import bg from '../src/assets/img/hero/bg.png';
import MenuImg1 from '../src/assets/img/menu/1.png';
import MenuImg2 from '../src/assets/img/menu/2.png';
import MenuImg3 from '../src/assets/img/menu/3.png';
import MenuImg4 from '../src/assets/img/menu/4.png';
import MenuImg5 from '../src/assets/img/menu/5.png';
import MenuImg6 from '../src/assets/img/menu/6.png';
import MenuImg7 from '../src/assets/img/menu/7.png';
import MenuImg8 from '../src/assets/img/menu/8.png';
import img1 from '../src/assets/img/experiences/img1.jpg';
import img2 from '../src/assets/img/experiences/img2.jpeg';
import img3 from '../src/assets/img/experiences/img.jpg';

export const navData = [
  { href: '#', name: 'Home' },
  { href: '/#about', name: 'About' },
  { href: '/#menu', name: 'Menu' },
  { href: '/#critics', name: 'Experiences' },
  { href: '/#contact', name: 'Contact' },
];


export const frontData = {
  pretitle: '',
  title: 'Cheesy Crust',
  bg: bg,
  subtitle:
    '"Where pizza dreams come true!"',
  btnText: 'Hungry?',
};

export const socialData = [
  { href: 'https://www.instagram.com/explore/tags/pizza/', target:"_blank", icon: <FaInstagram /> },
  { href: 'https://www.facebook.com/hashtag/pizza', target:"_blank", icon: <FaFacebookF /> },
  { href: 'https://www.youtube.com/hashtag/pizza', target:"_blank", icon: <FaYoutube /> },
];

export const aboutData = {
  pretitle: 'who we are',
  title: '',
  subtitle:
    `Cheesy Crust Pizzeria, founded by renowned chef Giovanni Russo, offers a delightful range of pizzas that spans Neapolitan, New York-style, Chicago deep-dish, and unique fusion creations. Chef Russo's passion and commitment to excellence have made Cheesy Crust a beloved pizzeria, captivating taste buds worldwide with its diverse and mouthwatering pizza selection.`,
  image: AboutImg,
};

export const menuData = {
  title: 'Flavors of the Oven',
  subtitle: 'MENU',
  modelImg: pizza,
  btnText: 'view complete menu',
  menuItems: [
    {
      image: MenuImg1,
      name: 'Margherita',
      price: '$10.99',
      description: 'Classic thin crust with fresh tomato and basil.',
    },
    {
      image: MenuImg2,
      name: 'Pepperoni Supreme',
      price: '$12.99',
      description: 'Abundant pepperoni on tangy tomato sauce.',
    },
    {
      image: MenuImg3,
      name: 'Veggie Delight',
      price: '$11.99',
      description: 'Colorful veggies on savory tomato sauce.',
    },
    {
      image: MenuImg4,
      name: 'Hawaiian Paradise',
      price: '$12.99',
      description: 'Pineapple and ham for tropical flavors.',
    },
  ],
  menuItems2: [
    {
      image: MenuImg5,
      name: `Meat Lover's`,
      price: '$14.99',
      description: 'Loaded with assorted meats and cheese.',
    },
    {
      image: MenuImg6,
      name: 'Margherita Di Bufala',
      price: '$13.99',
      description: 'Buffalo mozzarella, fresh tomatoes, and basil.',
    },
    {
      image: MenuImg7,
      name: 'Four Cheese',
      price: '$11.99',
      description: `Creamy blend of four cheeses combined.`,
    },
    {
      image: MenuImg8,
      name: 'Mediterranean Delight',
      price: '$13.99',
      description: 'Sun-dried tomatoes, olives, feta, and spinach.',
    },
  ],
};



export const experiencesData = {
  title: "Dining Experiences",
  subtitle: '1500+ statisfied clients',
  modelImg: pizza,
  slider: [
    {
      message:
        `I can't get enough of the pizzas at Cheesy Crust! The combination of flavors in their 'Mediterranean Delight' pizza is simply divine. The crust is perfectly crispy, and the generous toppings create a burst of savory goodness in every bite. Kudos to the talented chefs at Cheesy Crust for delivering such a fantastic dining experience!`,
      name: 'Sarah Johnson',
      image: img1,
    },
    {
      message:
        `Hands down, the best pizza in town! Cheesy Crust never fails to impress with their 'Ultimate Meat Feast' pizza. The chef's mastery of blending various meats and cheeses creates a symphony of flavors. The crust is light and fluffy, providing the perfect canvas for the mouthwatering toppings. Whenever I crave an unforgettable pizza, Cheesy Crust is my go-to place!`,
      name: 'Michael Rodriguez',
      image: img2,
    },
    {
      message:
        `Cheesy Crust Pizzeria has stolen my heart with their 'Garden Fresh' pizza. As a vegetarian, it can be challenging to find a pizza that caters to my dietary preferences without compromising on taste. But Cheesy Crust nailed it! The combination of fresh vegetables, tangy sauce, and their special herb-infused crust is a vegetarian's dream come true. I highly recommend this place for delicious and veggie-friendly pizza!`,
      name: 'Emily Thompson',
      image: img3,
    },
  ],
};

export const footerData = {
  contact: {
    title: 'Delivery or Pickup',
    address: `123 Main Street, Anytown, USA`,
    phone: '(381) 456-6682',
  },
  hours: {
    title: 'Visit us',
    program: [
      {
        days: 'monday - friday',
        hours: '11:00 AM - 11:00 PM',
      },
      {
        days: 'saturday - sunday',
        hours: '11:00 AM - 12:00 PM',
      },
    ],
  },
  social: {
    icons: [
      { href:"/", icon: <FaFacebookF /> },
      { href: '/', icon: <FaInstagram /> },
    ],
  },
};
