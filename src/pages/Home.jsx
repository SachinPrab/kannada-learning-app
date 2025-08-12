import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom";
function Home() {
  const Navigate = useNavigate();
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-100 via-white to-pink-100 flex flex-col items-center justify-center px-6 py-12 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold underline text-blue-700 mb-6">
        Welcome to Kannada Kaliyiri!
      </h1>
      <p className="text-2xl md:text-3xl text-black font-semibold">
        ಬನ್ನಿ, ಒಟ್ಟಿಗೆ ಕನ್ನಡ ಕಲಿಯೋಣ!
      </p>
      <Button className="mt-8 bg-blue-500 text-black hover:bg-white cursor-pointer transition-colors" onClick={() => Navigate('/menu')}> 
        Get Started
      </Button>
      <Button className="mt-8 ml-2 bg-blue-500 text-black hover:bg-white cursor-pointer transition-colors" onClick={() => Navigate('/quiz')}> 
        Take a Quiz
      </Button>
      <p className="italic text-gray-600 mt-6">
  "ಭಾಷೆ ಕಲಿಯುವುದು ಮನಸ್ಸಿಗೆ ಬೆಳಕನ್ನು ಹಚ್ಚುವುದು." — Learning a language lights up the mind.
</p>
    </div>
  );
}

export default Home;
