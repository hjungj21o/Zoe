import React from "react";
import "./footer.css";

// window.addEventListener("load", () => {
//   const devNames = document.querySelectorAll(".dev-name");
//   const sites = document.querySelectorAll(".sites");

//   for (let i = 0; i < devNames.length; i++) {
//     devNames[i].addEventListener("mouseenter", () => {
//       sites[i].classList.toggle("hide");
//     });
//     devNames[i].addEventListener("mouseleave", () => {
//       sites[i].classList.toggle("hide");
//     });
//   }
// });

class Footer extends React.Component {
  render() {
    return (
      <div className={`footer-container ${this.props.klass}`}>
        <div className="dev-name">
          Haejun
          <ul className="sites">
            <li>
              <a href="https://www.linkedin.com/in/haejunchung/" target="blank">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/hjungj21o" target="blank">
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="http://hjungj21o.github.io/" target="blank">
                <i class="fas fa-user-circle"></i>
              </a>
            </li>
            <li>
              <a href="https://angel.co/u/haejun-chung-19" target="blank">
                <i class="fab fa-angellist"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="dev-name">
          Jo
          <ul className="sites">
            <li>
              <a href="https://www.linkedin.com/in/jchen143/" target="blank">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/jchen143" target="blank">
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="http://jchen143.github.io/" target="blank">
                <i class="fas fa-user-circle"></i>
              </a>
            </li>
            <li>
              <a href="https://angel.co/u/jonathan-chen-44" target="blank">
                <i class="fab fa-angellist"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="dev-name">
          June
          <ul className="sites">
            <li>
              <a href="https://www.linkedin.com/in/juneseong/" target="blank">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/juneseong" target="blank">
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="http://juneseong.com" target="blank">
                <i class="fas fa-user-circle"></i>
              </a>
            </li>
            <li>
              <a href="https://angel.co/u/june-seong" target="blank">
                <i class="fab fa-angellist"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="dev-name">
          Ken
          <ul className="sites">
            <li>
              <a
                href="https://www.linkedin.com/in/ken-ting-752a1768/"
                target="blank"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/kaleungting" target="blank">
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="http://kaleungting.github.io/" target="blank">
                <i class="fas fa-user-circle"></i>
              </a>
            </li>
            <li>
              <a href="https://angel.co/u/ken-ting-1" target="blank">
                <i class="fab fa-angellist"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="dev-name">
          Marwa
          <ul className="sites">
            <li>
              <a
                href="https://www.linkedin.com/in/marwaelnashar"
                target="blank"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/mnashar" target="blank">
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.marwaelnashar.com/" target="blank">
                <i class="fas fa-user-circle"></i>
              </a>
            </li>
            <li>
              <a href="https://angel.co/u/marwa-elnashar" target="blank">
                <i class="fab fa-angellist"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
