import HomeAbout from "@/components/Home/HomeAbout";
import HomeBanner from "@/components/Home/HomeBanner";
import HomeIngredient from "@/components/Home/HomeIngredient";
import HomeMenu from "@/components/Home/HomeMenu";
import HomeReviews from "@/components/Home/HomeReviews";
export default function Home()
{
  return (
    <>
      <HomeBanner />
      <HomeAbout />
      <HomeIngredient/>
      <HomeMenu/>
      <HomeReviews/>
    </>
  );
}
