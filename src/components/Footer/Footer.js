export default function Footer() {
    return (
      <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.partners}>
            <div className={styles.title}>{"Find on"}</div>
            <div className={styles.partner}>
              {PARTNERS.map((item) => (
                <Link key={item.link} to={item.link} alt={item.title}>
                  <item.Icon />
                </Link>
              ))}
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: "<div id='crypto-widget-CoinList' data-transparent='true' data-coins='ankr'></div>"
              }}
              className={styles.cryptoWidget}
            />
          </div>
          {LINKS.map((link) => (
            <div className={styles.link} key={`${link.name}`}>
              <div className={styles.title}>{link.name}</div>
              <div className={styles.list}>
                {link.list.map((item) => (
                  <Link key={`${item.name}-${item.link}`} to={item.link}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.service}>
          <div className={styles.column}>
            <span className={styles.copy}>
              <AnkrLogo />
              {"© 2022 Wappier All rights reserved | info@wappier.com"}
            </span>
          </div>
          <div>
            <Link to="https://www.ankr.com/terms/">{"Terms of service"}</Link>
            <Link to="https://www.ankr.com/privacy-policy/">
              {"Privacy Policy"}
            </Link>
          </div>
        </div>
      </div>
      </div>
    );
  }

  