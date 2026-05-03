import Banner from "@/components/Banner";
import FeaturedAnimals from "@/components/FeaturedAnimals";
import TipsTops from "@/components/TipsTops";


export default function Home() {
  return (
    <div className="pb-28">
      <Banner></Banner>
      <FeaturedAnimals></FeaturedAnimals>
      <TipsTops></TipsTops>
    </div>
  );
}
