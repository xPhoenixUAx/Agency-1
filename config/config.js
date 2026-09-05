/* Client settings: update brand assets, identity and mail delivery here. */
window.SITE_CONFIG = {
  "brand": {
    "name": "ScaleSignal",
    "legalName": "{{brand.name}}",
    "tagline": "Google Ads Performance Agency",
    "copyrightHolder": "{{brand.name}}",
    "logo": "/assets/brand/logo.svg",
    "favicon": "/assets/brand/favicon.svg"
  },

  "form": {
    "handlerPath": "/php/send-form.php"
  },

  "mail": {
    "recipientEmail": "",
    "senderEmail": "",
    "senderName": "{{brand.name}} Website"
  }
};
