import AboutSection from "@ui/AboutSection";
import BlogSection from "@ui/BlogSection";
import HeroSection from "@ui/HeroSection";
import Layout from "@ui/Layout";
import OutStandSection from "@ui/OutStandSection";
import PartnerSection from "@ui/PartnerSection";
import ShopSection from "@ui/ShopSection";
import SportsSection from "@ui/SportsSection";
import SubscribeSection from "@ui/SubscribeSection";

export default function Home() {
  return (
    <Layout >
      <>
        <HeroSection />
        <PartnerSection />
        <SportsSection />
        <AboutSection />
        <OutStandSection />
        <ShopSection />
        <BlogSection />
        <SubscribeSection />
      </>
    </Layout>
  );
}
