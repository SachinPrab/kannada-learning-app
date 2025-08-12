const About = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-green-100 via-white to-yellow-100 flex flex-col items-center justify-center px-6 py-12 text-black">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Welcome to Kannada Kaliyiri
        </h1>

        <p className="text-lg md:text-xl mb-6 leading-relaxed">
          Your friendly companion for learning the beautiful Kannada language!
        </p>

        <p className="mb-6 text-base md:text-lg leading-relaxed">
          Our mission is to make Kannada accessible and enjoyable for everyone, whether you’re a beginner eager to learn the basics or someone looking to deepen your knowledge and fluency. We believe language is the key to connecting with culture, community, and history — and Kannada has a rich heritage waiting to be explored.
        </p>

        <p className="mb-6 text-base md:text-lg leading-relaxed">
          With interactive lessons, real-life examples, and easy-to-follow content, Kannada Kaliyiri helps you learn Kannada naturally and confidently. Our app is designed for learners of all ages and backgrounds, fostering a supportive environment where you can grow at your own pace.
        </p>

        <blockquote className="text-xl md:text-2xl italic font-semibold text-green-800 mb-4">
          "ಬನ್ನಿ, ಒಟ್ಟಿಗೆ ಕನ್ನಡ ಕಲಿಯೋಣ!"
        </blockquote>
        <p className="text-base md:text-lg font-medium">(Let’s come together and learn Kannada!)</p>
      </div>
    </div>
  );
};

export default About;
