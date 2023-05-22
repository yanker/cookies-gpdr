document.addEventListener('DOMContentLoaded', function () {
    let website_name = 'Name Website';
    let website_url = 'Url Full Link Politic Cookies';
    let website_theme = 'light' //light-dark;

    cookieconsent.run({
      "notice_banner_type": "simple",
      "consent_type": "express",
      "palette": website_theme, // dark
      "language": "es", // language
      "page_load_consent_levels": ["strictly-necessary"],
      "notice_banner_reject_button_hide": false,
      "preferences_center_close_button_hide": false,
      "website_name": website_name,
      "website_privacy_policy_url": website_url
    });
  });