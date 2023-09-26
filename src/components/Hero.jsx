import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="QuickSum logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/PrajwalLuitel")}
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Quickly Summarize Articles <br className="max-md:hidden" />
        <span className="orange_gradient">Powered by AI</span>
      </h1>

      <h2 className="desc">
        Increase the efficiency of your reading with QuickSum: an open-source
        online summarizer which uses the power of OpenAI GPT-4 to create clear
        and concise summaries for you.
      </h2>
    </header>
  );
};

export default Hero;
