// Styles
import './index.css';

export default function Footer(props) {
  const {
    className,
    contactEmail,
    author,
  } = props;

  return (
    <footer role="contentinfo" className={`${className} footer`}>
      <p className="footer-content">
        Author:
        {author}
      </p>
      <a href={`mailto:${contactEmail}`} className="footer-content">{contactEmail}</a>
    </footer>
  );
}
