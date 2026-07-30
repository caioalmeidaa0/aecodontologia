scripts: [
  {
    src: "https://www.googletagmanager.com/gtag/js?id=AW-10857266319",
    async: true,
  },
  {
    children: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-10857266319');

      function gtag_report_conversion(url) {
        var callback = function () {
          if (typeof(url) != 'undefined') {
            window.location = url;
          }
        };
        gtag('event', 'conversion', {
          'send_to': 'AW-10857266319/DH1VCNjK7tgcEI_5krko',
          'event_callback': callback
        });
        return false;
      }

      function gtag_report_conversion_form() {
        gtag('event', 'conversion', {
          'send_to': 'AW-10857266319/KDE6COD519gcEI_5krko'
        });
      }
    `,
  },
],
