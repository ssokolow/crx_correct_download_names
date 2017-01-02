const CBZ_DOMAINS = ['g.e-hentai.org', 'exhentai.org'];
const ZIP_EXT_RE = new RegExp('\\.zip$', 'i');
const PROBABLE_RE = new RegExp('^http://(\\d{1,3}\.){3}\\d{1,3}/archive/\\d+/[a-f0-9]+/\\d+/\\d+/?$');

chrome.downloads.onDeterminingFilename.addListener(function(item, suggest) {
  var domain = (new URL(item.referrer)).hostname.toLowerCase();

  if (CBZ_DOMAINS.includes(domain) || PROBABLE_RE.test(item.referrer)) {
    var new_filename = item.filename.replace(ZIP_EXT_RE, ".cbz")
    suggest({filename: new_filename});
  } else {
    console.log(item.referrer);
  }
});
