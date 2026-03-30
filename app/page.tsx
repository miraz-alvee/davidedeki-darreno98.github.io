import Footer from "@/components/home/footer/footer";
import Hero from "@/components/home/hero/hero";
import Navbar from "@/components/home/navbar/navbar";
import Pricing from "@/components/home/pricing/pricing";
import Register from "@/components/home/register/register";
import Services from "@/components/home/services/services";
import Steps from "@/components/home/steps/steps";


export default function Home() {
  return (
    <div>
     <Navbar></Navbar>
     <Hero></Hero>
     <Services></Services>
     <Register></Register>
     <Steps></Steps>
     <Pricing></Pricing>
     <Footer></Footer>
    </div>
  );
}
