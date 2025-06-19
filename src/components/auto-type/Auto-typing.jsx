
import TypeIt from 'typeit-react';

const AutoType = () => {
const text = "My name is DA RAKSA";
  return (
    <div className="w-full h-auto p-6 sm:p-8 bg-white shadow-xl rounded-2xl space-y-6">
      {/* Welcome Heading */}
      <h2
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800"
        style={{ fontFamily: '"Roboto Mono", monospace' }}
      >
        👋 WELCOME TO MY PORTFOLIO!
      </h2>

      {/* Typing Effect */}
      <TypeIt
        className="text-3xl sm:text-4xl font-bold font-mono text-[#5a29e4]"
        options={{
          speed: 100,
          waitUntilVisible: true,
          loop: true,
          cursor: true,
          cursorChar: '|',
          lifeLike: true,
        }}
      >
        {text}
      </TypeIt>

      {/* Info Note */}
      <h2
        className="text-lg sm:text-xl lg:text-2xl text-gray-600"
        style={{ fontFamily: '"Roboto Mono", monospace' }}
      >
        🔐 You need to register or log in to see my full information. Thank you 🙏
      </h2>
    </div>
  );
};
export default AutoType;
