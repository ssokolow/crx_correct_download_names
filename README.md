# Correct Download Naming Mistakes
![MIT Licensed](https://img.shields.io/github/license/ssokolow/crx_correct_download_names.svg)

A simple Chrome extension which watches for mistakes I've observed in download
names from websites so you don't have to correct them manually.

**This extension currently corrects:**

* Twitter images having `.jpg-large.jpg` as their extensions.
* E-Hentai archives having `.zip` extensions rather than `.cbz`

## Installation

**Firefox:** Support waiting on [issue 1245652](https://bugzilla.mozilla.org/show_bug.cgi?id=1245652) (Implement `chrome.downloads.onDeterminingFilename`).

**Chrome:** I'm ideologically opposed to the $5 developer signup fee for the
Chrome App Store and this is a "scratching my own itch" project, so you'll have
to install it unsigned.

To build your own unsigned CRX and install it:

1. Download this into a folder on your hard drive
2. Edit your Chrome launcher to add `--enable-easy-off-store-extension-install`
   to the end of the command-line.
3. Launch Chrome
4. Go into your extensions listing and click the "Pack Extension" button.
5. Select the folder for this in the first field and leave the second blank.
6. Once the CRX file has been made, drag and drop it onto the list of installed
   extensions.

If you've added `--incognito` to your Chrome launcher to work around Chrome's
lack of a Firefox-like "clear [...] on exit" option, don't forget (like I did)
that you have to opt into allowing each extension to run while incognito.

(It should be simple enough for anyone with even the slightest bit of
programming experience to look at the one source file and see that it's not
doing anything shady.)
