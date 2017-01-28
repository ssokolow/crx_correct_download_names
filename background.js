/* If any of these DownloadItem keys match, we'll consider it a match */
const MATCH_TYPES = ['url', 'finalUrl', 'referrer', 'filename'];

/* Definition for E-Hentai archive downloads */
const EH_DEFS = {
  'referrer': new RegExp(
    '^http://(\\d{1,3}\.){3}\\d{1,3}/archive/\\d+/[a-f0-9]+/\\d+/\\d+/?$'),
  'match': new RegExp('\\.zip$', 'i'),
  'replacement': '.cbz'
}

/* Definition for Twitter images */
const TWIMG_DEFS = {
    'url': new RegExp('^https://pbs.twimg.com/media/.+\\.jpg:large$'),
    'match': new RegExp('\\.jpe?g(:|-)large(\\.jpe?g)?$'),
    'replacement': '.jpg'
}

/* Mapping from domains to definitions */
const DOMAIN_MAP = {
  'exhentai.org': EH_DEFS,
  'g.e-hentai.org': EH_DEFS,
  'pbs.twimg.com': TWIMG_DEFS,
  'twitter.com': TWIMG_DEFS,
}

chrome.downloads.onDeterminingFilename.addListener(function(item, suggest) {
  // Get the hostname and return early if we have no rules for it.
  var domain = (new URL(item.referrer)).hostname.toLowerCase();
  if (!DOMAIN_MAP.hasOwnProperty(domain)) { return; }

  // Get the rules for the domain and return early if none match
  var rules = DOMAIN_MAP[domain];
  if (!MATCH_TYPES.some(function(attr, index, array) {
    return rules.hasOwnProperty(attr) && rules[attr].test(item[attr])
  })) { return; }

  // Apply the replacement and suggest the new name
  var new_fname = item.filename.replace(rules['match'], rules['replacement']);
  suggest({filename: new_fname});
});
