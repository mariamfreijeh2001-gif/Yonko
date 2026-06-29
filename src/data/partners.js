// "Our Partners" — add a partner by appending an object to this array.
// Each partner needs: name, url (opens in new tab), logo (file in /public/assets/partners).

export const partnersHeading = "Our Partners";

export const partners = [
  {
    name: "Azur & Partners",
    url: "https://azurandpartners.com/",
    logo: "/assets/partners/azurandpartners.png",
    small: true, // tall logo — render a bit smaller to match the others
  },
  {
    name: "Vault Asset Management",
    url: "https://vault-am.lu/",
    logo: "/assets/partners/vault.png",
  },
  {
    name: "Vault Group",
    url: "https://vaultgroup.com/",
    logo: "/assets/partners/vault_group_eu_logo.png",
  },
  {
    name: "Abu Dhabi Investment Office (ADIO)",
    url: "https://www.investwithabudhabi.com/",
    logo: "/assets/partners/ADIO_logo.png",
    big: true, // wide logo with fine text — render larger so it reads clearly
  },
  {
    name: "Abu Dhabi Global Market (ADGM)",
    url: "https://www.adgm.com/",
    logo: "/assets/partners/ADGM.png",
  },
  {
    name: "UAE Ministry of Investment",
    url: "https://www.investuae.gov.ae/",
    logo: "/assets/partners/UAE-Ministry-of-Investment.png",
    small: true, // tall logo — render a bit smaller to match the others
  },
];
