class Footer {
  get ['Twitter link icon']() {
    return $('a[href="https://twitter.com/saucelabs"]');
  }

  get ['Facebook link icon']() {
    return $('a[href="https://www.facebook.com/saucelabs"]');
  }

  get ['LinkedIn link icon']() {
    return $('a[href="https://www.linkedin.com/company/sauce-labs/"]');
  }
}

module.exports = Footer;
