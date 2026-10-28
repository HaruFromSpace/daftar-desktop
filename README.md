# Daftar for Windows

Daftar keeps your GJU deadlines, classes, course files and notes in one place. This is where the Windows app's installers live.

**[Download the latest version](https://github.com/HaruFromSpace/daftar-desktop/releases/latest)**: open the release and click `Daftar-Setup-….exe`.

- It installs in a few seconds, with no questions asked, and adds Daftar to the Start menu.
- Sign in with your GJU account, the same one you use for Moodle or MyGJU.
- Turn on deadline reminders in Settings. Closing the window keeps Daftar running next to the clock, so reminders still arrive. Right-click its icon there to quit, or to stop it starting with Windows.
- It updates by itself.

Windows may say "Windows protected your PC" the first time, because the app isn't signed by a company. Click **More info**, then **Run anyway**.

Prefer the browser? Daftar also works at [due-next.onrender.com](https://due-next.onrender.com), and on phones it can be added to the home screen.

## How it's built

The app is a small window around the Daftar website, with reminders, a tray icon and updates added on top. Raising `version` in `package.json` on main makes GitHub build the installer on Windows and publish it as a release. Installed copies pick up the new version on their own.

Made by a GJU student. Not an official GJU app.
