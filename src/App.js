import {  Headline } from "./features/header";
import { AssetManagement } from "./components/asset-management";
import { VamcoCardImg } from "./components/vamco-card-img";
import { AssetStrategies } from "./components/asset-strategies";
import { PortfolioManagement } from "./components/portfolio-management";

function App() {
  return (
    <>
      <Headline />
      <AssetManagement />
      <VamcoCardImg />
      <AssetStrategies />
      <PortfolioManagement />
    </>
  );
}

export default App;
