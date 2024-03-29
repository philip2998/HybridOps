import FooterLink from './FooterLink';
import FooterBorder from './FooterBorder';
import navLinks from '../navigationBar/navlinks';
import logo from '../../../assets/img/GreenLogo.svg';
import SocialIcon from './SocialIcon';
import { iconsData } from './iconsData';

const Footer = () => {
  return (
    <section className="footer px-0 pb-3">
      <div className="d-flex me-auto ms-auto">
        <div className="container position-relative">
          <div className="row">
            <div className="col-12">
              <footer className="row footer-section d-flex flex-wrap mb-3">
                <div
                  className={`col-md-3 col-sm-12 ${
                    window.innerWidth < 576 ? 'text-center' : 'text-end'
                  }`}
                >
                  <img
                    src={logo}
                    alt="Logo"
                    className="footer-logo col-md-4 mb-3 mb-md-0"
                  />
                </div>

                <div className="col-md-6 pt-3">
                  <ul className="nav justify-content-evenly">
                    {navLinks.map((link, index) => {
                      return (
                        <FooterLink
                          key={index}
                          href={link.href}
                          label={link.label}
                        />
                      );
                    })}
                  </ul>
                </div>
                <div
                  className={`col-md-3 d-flex ${
                    window.innerWidth < 576
                      ? 'justify-content-center'
                      : 'justify-content-start'
                  }`}
                >
                  {iconsData.map((icon, index) => {
                    if (icon.href && icon.href.startsWith('http')) {
                      return (
                        <SocialIcon
                          key={index}
                          icon={icon.icon}
                          href={icon.href}
                        />
                      );
                    }
                    return null;
                  })}
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
      <FooterBorder />
    </section>
  );
};

export default Footer;
