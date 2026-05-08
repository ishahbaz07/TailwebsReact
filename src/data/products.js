import icuImage from "../assets/icuImage.png";
import vaccinationImage from "../assets/vaccinationImage.png";
import StateLed from "../assets/State-led-Thumb.jpg";
import DOtSeptember from "../assets/DOT-September-Thumb.jpg";
import dot2025 from "../assets/dot-2025-5.jpg";
import ScalerArticle from "../assets/Scaler-Article-Thumb-1.jpg";
import Systems from "../assets/Systems-to-Ecosystems-Thumb.jpg";
import Elected from "../assets/Elected-Representative-Thumb.webp";
import publicData from "../assets/public-data-privacy.jpg";
import PravimalStory from "../assets/Pravimal-StoryThumb-1.jpg";
import propertyTax from "../assets/property-tax-thumb.jpg";
import NIUA from "../assets/NIUA-SP-Thumb-1.png";
import Sanitation from "../assets/Sanitation-SP-Thumb-1.png";
import PFM from "../assets/PFM-SP-Thumb-1.png";
import PunjabEeGov from "../assets/Punjab-eGov-Mou.jpg";
import Punjab from "../assets/Punjab-eGov-Mou.jpg";
import leardership from "../assets/leardership-talk.jpg";
import sujoog from "../assets/sujoog.jpg";
import egram from "../assets/egram.jpg";
import billMelinda from "../assets/billi-melinda.png";
import tataTrusts from "../assets/tatatrusts.png";
import coDevelop from "../assets/co-develop.png";
import globalFund from "../assets/global-fund.png";
import nilekani from "../assets/nilekani.png";

export const categories = [
  "What's New",
  "Articles",
  "Whitepapers",
  "Case Studies",
  "Strategy Papers",
  "News & Media",
  "Videos",
  "Newsletter",
];

export const initialState = {
  items: [
    {
      id: 1,
      category: "What's New",
      image: StateLed,
      title: "State-led Urban Digital Transformation",
      author: "Mathews P Joseph +2 More",
      date: "13 Mar 2026",
      price: "Free Resource",
      tags: [
        "Odisha",
        "Kerala",
        "Local Governance",
        "Andhra Pradesh",
        "Punjab",
      ],
    },
    {
      id: 2,
      category: "What's New",
      image: DOtSeptember,
      title: "DOT – A DIGIT QUARTERLY NEWSLETTER",
      author: "eGov Foundation +2 More",
      date: "20 Jan 2026",
      price: "Free Resource",
      tags: [],
    },
    {
      id: 3,
      category: "What's New",
      image: dot2025,
      title: "DOT 2025 | TOP STORIES OF PARTNERSHIPS & IMPACT",
      author: "eGov Foundation +2 More",
      date: "30 Dec 2025",
      price: "Free Resource",
      tags: [],
    },
    {
      id: 4,
      category: "Articles",
      image: ScalerArticle,
      title: "Tech for Billions, Talent for None: Fixing GovTech's Biggest Gap",
      author: "Darshana Ramdev",
      date: "10 Mar 2025",
      price: "Free Resource",
      tags: ["DIGIT"],
    },
    {
      id: 5,
      category: "Articles",
      image: Systems,
      title:
        "From Systems to Ecosystems: A Shared Journey to Build Digital Public Goods",
      author: "Viraj Tyagi",
      date: "10 Jan 2025",
      price: "Free Resource",
      tags: [
        "Digital Public Infrastructure",
        "Digital Public Goods",
        "Local Governance",
      ],
    },
    {
      id: 6,
      category: "Whitepapers",
      image: Elected,
      title: "Our Journey to National-Scale Impact",
      author: "eGov Foundation",
      date: "22 Aug 2024",
      price: "Premium",
      tags: ["eGov", "Impact", "National Scale"],
    },
    {
      id: 7,
      category: "Whitepapers",
      image: publicData,
      title: "How Public Should Public Data Be Privacy & E-governance in India",
      author: "eGov Foundation",
      date: "22 Aug 2024",
      price: "Premium",
      tags: ["eGovernance", "Data Privacy", "India"],
    },
    {
      id: 8,
      category: "Case Studies",
      image: PravimalStory,
      title:
        "Enabling Social Benefit Delivery through Digital Public Infrastructure",
      author: "eGov Foundation",
      date: "12 Sep 2024",
      price: "Free Resource",
      tags: ["Odisha", "Public Finance", "Social Benefits Delivery"],
    },
    {
      id: 9,
      category: "Case Studies",
      image: propertyTax,
      title:
        "Accelerating Revenue Mobilisation through Digital Public Infrastructure (DPI)",
      author: "eGov Foundation",
      date: "11 Sep 2024",
      price: "Free Resource",
      tags: [
        "DPI",
        "Local Governance",
        "Andhra Pradesh",
        "Revenue Mobilization",
      ],
    },
    {
      id: 10,
      category: "Strategy Papers",
      image: NIUA,
      title: "National Urban Innovation Stack – Strategy & Approach",
      author: "eGov Foundation",
      date: "13 Aug 2024",
      price: "Premium",
      tags: ["Urban", "NIUA", "Strategy"],
    },
    {
      id: 11,
      category: "Strategy Papers",
      image: Sanitation,
      title:
        "Reimagining Sanitation Services with Digital Public Infrastructure – A Strategy Note",
      author: "eGov Foundation",
      date: "13 Aug 2024",
      price: "Free Resource",
      tags: ["WASH", "Sanitation"],
    },
    {
      id: 12,
      category: "Strategy Papers",
      image: PFM,
      title: "Strategy and Approach to Public Financial Management",
      author: "eGov Foundation",
      date: "12 Aug 2024",
      price: "Premium",
      tags: ["PFM", "Public Finance"],
    },
    {
      id: 13,
      category: "News & Media",
      image: PunjabEeGov,
      title:
        "Karnataka's Centre for Smart Governance and eGov Foundation Announce Strategic Partnership",
      author: "eGov Foundation",
      date: "11 Aug 2025",
      price: "Free Resource",
      tags: ["Local Governance", "Press Releases"],
    },
    {
      id: 14,
      category: "News & Media",
      image: Punjab,
      title:
        "AI for Sustainable Cities: AIRAWAT and eGov Foundation Launch Strategic Partnership",
      author: "eGov Foundation",
      date: "27 Jun 2025",
      price: "Free Resource",
      tags: ["Local Governance", "Press Releases"],
    },
    {
      id: 15,
      category: "Videos",
      image: leardership,
      title:
        "Leadership Talks: Viraj Tyagi on lessons learnt on driving digital innovation",
      author: "eGov Foundation",
      date: "06 May 2025",
      price: "Free Resource",
      tags: ["Tech for Good", "EkScaleKatha", "Public Services", "Innovation"],
    },
    {
      id: 16,
      category: "Videos",
      image: sujoog,
      title: "SUJOG in Odisha",
      author: "eGov Foundation",
      date: "17 Apr 2025",
      price: "Free Resource",
      tags: ["Odisha", "Water and Sanitation", "SUJOG"],
    },
    {
      id: 17,
      category: "Videos",
      image: egram,
      title: "mGramSeva Punjab",
      author: "eGov Foundation",
      date: "31 Jan 2025",
      price: "Free Resource",
      tags: ["Local Governance", "mGramSeva", "Punjab"],
    },
    {
      id: 18,
      category: "Newsletter",
      image: DOtSeptember,
      title: "DOT – A DIGIT QUARTERLY NEWSLETTER",
      author: "eGov Foundation",
      date: "20 Jan 2026",
      price: "Free Resource",
      tags: [],
    },
    {
      id: 19,
      category: "Newsletter",
      image: dot2025,
      title: "DOT 2025 | TOP STORIES OF PARTNERSHIPS & IMPACT",
      author: "eGov Foundation",
      date: "30 Dec 2025",
      price: "Free Resource",
      tags: [],
    },
  ],
};

export const boldApproaches = [
  {
    id: 1,
    category: "Public Health",
    cards: [
      {
        number: "210+",
        text: "cities LIVE with 10BedICU across India",
        color: "cyan",
        image: icuImage,
      },
      {
        number: "2 Bn",
        text: "COVID-19 vaccination certificates issued",
        color: "blue",
        image: vaccinationImage,
      },
    ],
  },
  {
    id: 2,
    category: "Public Finance",
    cards: [
      {
        number: "₹50K Cr+",
        text: "revenue collected through digital platforms",
        color: "cyan",
      },
      {
        number: "1000+",
        text: "urban local bodies managing finances digitally",
        color: "blue",
      },
    ],
  },
  {
    id: 3,
    category: "Local Governance",
    cards: [
      {
        number: "3000+",
        text: "cities and towns using DIGIT platform",
        color: "cyan",
      },
      {
        number: "100M+",
        text: "citizen services processed annually",
        color: "blue",
      },
    ],
  },
  {
    id: 4,
    category: "Water & Sanitation",
    cards: [
      {
        number: "500+",
        text: "water supply systems digitally monitored",
        color: "cyan",
      },
      {
        number: "25M+",
        text: "households with improved water billing",
        color: "blue",
      },
    ],
  },
];

export const supporters = [
  { name: "Co-Develop", logo: coDevelop },
  {
    name: "Bill & Melinda Gates Foundation",
    logo: billMelinda,
  },
  { name: "Tata Trusts", logo: tataTrusts },
  { name: "The Global Fund", logo: globalFund },
  { name: "Nandan Nilekani Philanthropies", logo: nilekani },
];
