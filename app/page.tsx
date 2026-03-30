import Hero from "@/components/home/hero/hero";
import Navbar from "@/components/home/navbar/navbar";
import Register from "@/components/home/register/register";
import Services from "@/components/home/services/services";


export default function Home() {
  return (
    <div>
     <Navbar></Navbar>
     <Hero></Hero>
     <Services></Services>
     <Register></Register>
    </div>
  );
}
