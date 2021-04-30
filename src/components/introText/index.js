import './index.css';

const IntroText = ({ text }) => {
  return (
    <div className="intro text-appear">
      <p className="text-glow">
        {text}
      </p>
    </div>
  );
}

export default IntroText;