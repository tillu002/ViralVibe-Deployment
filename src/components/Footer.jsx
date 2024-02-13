export function Footer() {
  return (
    <div>
      <div className="footer-section" id="footer-sec">
        <footer className="footer">
          <h1 className="footer-heading">About Us</h1>

          <div className="container-footer grid-footer grid--footer">
            <div class="logo-col">
              <a href="https://imgbb.com/">
                <img
                  src="https://i.ibb.co/bW4b3Xs/Untitled-1.png"
                  alt="Untitled-1"
                  border="0"
                  className="agency-logo"
                />
              </a>

              <ul class="social-links">
                <li>
                  <a class="footer-link" href="#">
                    <ion-icon
                      class="social-icon"
                      name="logo-instagram"
                    ></ion-icon>
                  </a>
                </li>
                <li>
                  <a class="footer-link" href="#">
                    <ion-icon
                      class="social-icon"
                      name="logo-facebook"
                    ></ion-icon>
                  </a>
                </li>
                <li>
                  <a class="footer-link" href="#">
                    <ion-icon
                      class="social-icon"
                      name="logo-twitter"
                    ></ion-icon>
                  </a>
                </li>
              </ul>

              <p class="copyright">
                Copyright &copy; 2023 By Viral Vibe, Inc. All rights reserved.
              </p>
            </div>

            <div class="address-col">
              <p class="footer-headings">Contact us</p>
              <address class="contacts">
                <p class="address">Pavan Sohith, Parul University, Vadodara</p>
                <p>
                  <a class="footer-link" href="tel:415-201-6370">
                    6309833957
                  </a>
                  <br />
                  <a class="footer-link" href="mailto:hello@omnifood.com">
                    viralvibe@gmail.com
                  </a>
                </p>
              </address>
            </div>

            <nav class="nav-col">
              <p class="footer-headings">Account</p>
              <ul class="footer-nav">
                <li>
                  <a class="footer-link" href="#">
                    Create account
                  </a>
                </li>
                <li>
                  <a class="footer-link" href="#">
                    Sign in
                  </a>
                </li>
                <li>
                  <a class="footer-link" href="#">
                    iOS app
                  </a>
                </li>
                <li>
                  <a class="footer-link" href="#">
                    Android app
                  </a>
                </li>
              </ul>
            </nav>

            <nav class="nav-col">
              <p class="footer-headings">Company</p>
              <ul class="footer-nav">
                <li>
                  <a class="footer-link" href="#">
                    About Viral Vibe
                  </a>
                </li>
                <li>
                  <a class="footer-link" href="#">
                    For Business
                  </a>
                </li>
                <li>
                  <a class="footer-link" href="#">
                    Media partners
                  </a>
                </li>
                <li>
                  <a class="footer-link" href="#">
                    Careers
                  </a>
                </li>
              </ul>
            </nav>

            <nav class="nav-col">
              <p class="footer-headings">Resources</p>
              <ul class="footer-nav">
                <li>
                  <a class="footer-link" href="#">
                    Know More
                  </a>
                </li>
                <li>
                  <a class="footer-link" href="#">
                    Help center
                  </a>
                </li>
                <li>
                  <a class="footer-link" href="#">
                    Privacy & terms
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  );
}
