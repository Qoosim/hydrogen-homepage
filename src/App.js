import {  Headline } from "./features/header";
import { AssetManagement } from "./components/asset-management";
import { VamcoCardImg } from "./components/vamco-card-img";
import { AssetStrategies } from "./components/asset-strategies";
import { PortfolioManagement } from "./components/portfolio-management";
import { FeaturedNews } from "./components/featured-news";
import { InvestorToday } from "./components/investor-today";
import { Footer } from "./features/footer";
import ReliableWealth from "./components/reliable-wealth";

function App() {
  return (
    <>
      <Headline />
      <AssetManagement />
      <VamcoCardImg />
      <AssetStrategies />
      <ReliableWealth />
      <PortfolioManagement />
      <FeaturedNews />
      <InvestorToday />
      <Footer />
    </>
  );
}

export default App;
