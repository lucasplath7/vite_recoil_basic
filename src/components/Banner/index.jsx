// Node Module Imports
import reactLogo from '../../assets/react.svg';

// Styles
import './index.css';

export default function Banner(props) {
  const { title, className } = props;

  return (
    <header role="banner" className={`banner ${className}`}>
      <img src={reactLogo} className="logo react" alt="React logo" />
      <h1 className="banner-heading">{title}</h1>
    </header>
  );
}
