import SquareLeftImg from "../assets/square-cross-left.svg";
import SquareRightImg from "../assets/square-cross-right.svg";
import TransactionCard from "../assets/transaction-card.svg";
import PaymentCard from "../assets/payment-card.svg";

import InvestCard1 from "../assets/invest-card-1.svg";
import InvestCard2 from "../assets/invest-card-2.svg";
import InvestCard3 from "../assets/invest-card-3.svg";

import StrategiesIcon1 from "../assets/strategies-icon-1.svg";
import StrategiesIcon2 from "../assets/strategies-icon-2.svg";
import StrategiesIcon3 from "../assets/strategies-icon-3.svg";

export const assetInvestmentData = [
  {
    id: 1,
    squareLeftImg: SquareLeftImg,
    assetTitleTop: "valente asset management",
    assetTitleBtw: "We are building your financial future.",
    assetTitleBelow: "We are keeping you protected",
    squareRightImg: SquareRightImg,
    transCard: TransactionCard,
    transCardTopText: "We are keeping you protected, We are Simple",
    transCardBottomText:
      "At Vamco, our approach is transparent, our processes streamlined, and our communication clear. We believe in building trust through openness.",
    paymentCard: PaymentCard,
  },
];

export const investmentStrategiesData = [
  {
    id: 1,
    squareLeftImg: SquareLeftImg,
    assetTitleTop: "OUR INVESTMENT STRATEGIES",
    assetTitleBelow: "Tailored Solutions for Every Investor.",
    squareRightImg: SquareRightImg,
    transCard: TransactionCard,
    transCardTopText: "Mutual Funds",
    transCardBottomText:
      "We believe in empowering investors to achieve their financial goals through strategic and diversified investment solutions.",
    paymentCard: PaymentCard,
  },
];

export const investmentCardsData = [
  {
    id: 1,
    logo: InvestCard1,
    title: "We’re building your financial future",
    text: "At VAMCO, we are dedicated to empowering individuals and businesses to achieve their financial goals.",
    color: "red"
  },
  {
    id: 2,
    logo: InvestCard2,
    title: "We’re Simple",
    text: "At VAMCO, our approach is transparent, our processes streamlined, and our communication clear.",
     color: "red"
  },
  {
    id: 3,
    logo: InvestCard3,
    title: "We’re keeping you protected",
    text: "At VAMCO, safeguarding your financial interests is our top priority. We are committed to protecting and growing.",
     color: "red"
  },
];

export const strategiesCardData = [
  {
    id: 1,
    logo: StrategiesIcon1,
    title: "Wealth Management",
    text: "Advisory services to HNI clients  to enable them make the most informed investment decisions.",
     color: "white"
  },
  {
    id: 2,
    logo: StrategiesIcon2,
    title: "Liquidity Management",
    text: "At VAMCO, we are dedicated to helping you optimize your cash flow with precision and foresight.",
     color: "white"
  },
  {
    id: 3,
    logo: StrategiesIcon3,
    title: "Structured Products",
    text: "We help in providing innovative investment solutions designed to meet the diverse needs of investors in today's market environment.",
     color: "white"
  },
];