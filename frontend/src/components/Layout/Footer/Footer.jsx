import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div>
    <div className="ticiContainer hazirBlokContent">
<div className="txrow">

</div>
</div>
  </div>
      <div className="subscribe-row">
        <div className="container">
          <div className="footer-row-wrapper">
            <div className="footer-subscribe-wrapper">
              <div className="footer-subscribe">
                <div className="footer-subscribe-top">
                  <h3 className="subscribe-title">Bizden Haber Alın</h3>
                  <p className="subscribe-desc">
                    E bültenimize kayıt olun, tüm indirim ve kampanyalardan
                    haber alın!
                  </p>
                </div>
                <div className="footer-subscribe-bottom">
                  <form>
                    <input
                      type="text"
                      placeholder="E-posta adresinizi yazın."
                    />
                  </form>
                  <button className="btn">Gönder</button>
                  <p className="privacy-text">
                    <input type="checkbox" />
                    <span>
                      {" "}
                      İndirim ve kampanyalardan e-posta ve SMS ile haberdar
                      olmak istiyorum ve pazarlama iletileri onay formunu kabul
                      ediyorum.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="widgets-row">
        <div className="container">
          <div className="footer-widgets">
            <div className="brand-info">
              <div className="footer-logo">
                <a href="index.html" className="logo">
                  <img
                    src="https://static.ticimax.cloud/5412/uploads/editoruploads/bambistore-logo%20(1).png"
                    alt=""
                  />
                </a>
              </div>
              <div className="footer-desc">
                <p className="bold">Bize Ulaşın</p>
                <p>info@bambiayakkabi.com</p>
                <p>
                  <i className="bi bi-telephone"></i> 0850 200 3 500
                </p>
              </div>
              <div className="footer-contact">
                <p className="bold">Bizi Takip edin</p>
                <i className="bi bi-facebook"></i>

                <i className="bi bi-twitter-x"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-youtube"></i>
                <p className="bold">Uygulamaları İndirin</p>
                <i className="bi bi-google-play"></i>
                <i className="bi bi-apple"></i>
              </div>
            </div>
            <div className="widget-nav-menu">
              <h4>Kategoriler</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">Kadın Günlük Ayakkabı</a>
                </li>
                <li>
                  <a href="#">Erkek Günlük Ayakkabı</a>
                </li>
                <li>
                  <a href="#">Sandalet & Terlik</a>
                </li>
                <li>
                  <a href="#">Topuklu Ayakkabı</a>
                </li>
                <li>
                  <a href="#">Kadın Spor Ayakkabı</a>
                </li>
                <li>
                  <a href="#">Erkek Spor Ayakkabı</a>
                </li>
                <li>
                  <a href="#">Çanta</a>
                </li>
              </ul>
            </div>
            <div className="widget-nav-menu">
              <h4>Kurumsal</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">Hakkımızda</a>
                </li>
                <li>
                  <a href="#">Kişisel Verilerin Korunması Politikamız</a>
                </li>
                <li>
                  <a href="#">KVKK Aydınlatma Metni</a>
                </li>
                <li>
                  <a href="#">Gizlilik - Veri Güvenliği ve Çerez Politikası</a>
                </li>
                <li>
                  <a href="#">Bilgi Toplumu</a>
                </li>
              </ul>
            </div>
            <div className="widget-nav-menu">
              <h4>Müşteri Hizmetleri</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">İletişim</a>
                </li>
                <li>
                  <a href="#">Sıkça Sorulan Sorular</a>
                </li>
                <li>
                  <a href="#">Değişim ve İade</a>
                </li>
              </ul>
            </div>
            <div className="widget-nav-menu">
              <h4>Hesabım</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">Hesap Bilgilerim</a>
                </li>
                <li>
                  <a href="#">Sipariş Takip</a>
                </li>
                <li>
                  <a href="#">Sepetim</a>
                </li>
                <li>
                  <a href="#">Kargom Nerede</a>
                </li>
                <li>
                  <a href="#">İade Taleplerim</a>
                </li>
                <li>
                  <a href="#">Favorilerim</a>
                </li>
              </ul>
            </div>
            <div className="footer-img">
              <img
                src="https://static.ticimax.cloud/5412/uploads/editoruploads/banks-logo.jpg"
                alt=""
              />
            </div>
            
          </div>
        </div>
      </div>
      <div className="FooterBottom">
<div className="ticiContainer">
<div className="footertext">
<p>Bambi 1961 senesinde faaliyetine Beyoglunda başladı.Bir mağaza ile perakende olarak ticaret hayatına adım atan firma, 1966da üretime başladı, 1971 senesinde de yan kuruluş olan Arar firmasını bünyesine kattı. Zaman içerisinde Bambi mağazalar zinciri ve bayilikler kuruldu, dolayısıyla perakende satışlarda söz sahibi olundu. Bugün Bambinin Türkiye genelinde 113 satış noktası bulunmaktadır.</p>
</div>
</div>
</div>
    </footer>
  );
};

export default Footer;