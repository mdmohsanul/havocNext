import Featured_Courses from "@/components/Featured_Courses";
import HeroSection from "@/components/HeroSection";
import Why_Choose_Us from "@/components/Why_Choose_Us";



export default function Home() {
  return (
 <main className="min-h-screen bg-black">
<HeroSection/>
<Featured_Courses/>
<Why_Choose_Us/>
 </main>
  );
}
