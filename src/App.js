import {  Headline } from "./features/header";
import { AssetManagement } from "./components/asset-management";
import { VamcoCardImg } from "./components/vamco-card-img";
import { AssetStrategies } from "./components/asset-strategies";
import { PortfolioManagement } from "./components/portfolio-management";
import { FeaturedNews } from "./components/featured-news";

function App() {
  return (
    <>
      <Headline />
      <AssetManagement />
      <VamcoCardImg />
      <AssetStrategies />
      <PortfolioManagement />
      <FeaturedNews />
    </>
  );
}

export default App;
