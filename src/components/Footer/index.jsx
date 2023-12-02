// Styles
import './index.css';

export default function Footer(props) {
  return (
    <footer role='footer' className={`${props.className} footer`}>
      <p className='footer-content'>
        Author: {props.author}<br/>
        <a href={`mailto:${props.contactEmail}`}>{props.contactEmail}</a>
      </p>
    </footer>
  )
}