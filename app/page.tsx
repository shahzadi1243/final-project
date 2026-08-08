import HouseSlider from "./modules/House Designs/hero";
// import HouseFilterSection from "./modules/House Designs/heer";
import HousePlansPortal from "./modules/House Designs/heero";
import BacksideSittingSection from "./modules/House Designs/heer3";
import HouseCatalog from "./modules/House Designs/heer";
import TvLoungeSection from "./modules/House Designs/s1";
import SwimmingPoolSection from "./modules/House Designs/sow";
import DiningRoomSection from "./modules/House Designs/d";
import ParkingSection from "./modules/House Designs/par";
import BuildingSectionsComponent from "./modules/House Designs/ar";
export default function HouseDesignsPage() {
  return (
    <>
 
      <HouseSlider />
      <HouseCatalog/>
      {/* <HouseFilterSection /> */}
      <HousePlansPortal />
      <BacksideSittingSection />
    <TvLoungeSection/>
    <SwimmingPoolSection/>
    <DiningRoomSection/>
    <ParkingSection/>
    <BuildingSectionsComponent/>
    </>
  );
}
