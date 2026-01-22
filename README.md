# Within VR Downloader ![Version 1.2](https://img.shields.io/badge/Version-1.2-green.svg)

[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

[!CAUTION]
**Within no longer exists so this project is no longer supported**

[!WARNING]
**This project is not affiliated or endorsed by Within in any way, nor does it host any of their content.**

Within VR Downloader is a web app to download HD Stereoscopic 360 VR videos from Within VR. It was created out of a need for high quality VR test footage while developing several VR apps. 

:arrow_forward: [Click here to use Within VR Downloader.](http://jordanmajd.com/within_vr_downloader/)

_Use Chrome for best download experience._

## Spec

The tool supports downloading the following formats:

### Supported 360 Video Resolutions

- 320P: 640x320
- 640P: 1280x640
- 960P: 1920x960
- 2K:   2880x1440
- 4K:   4096x2048L
- 4K:   4096x2048H

### Supported Projection Types

As of writing, most stereo files are `over under`.

- stereo
- mono

### Supported Video File Types

- mp4
- webm

### Supported Audio Types

- mp3

## Getting started

1. Clone the project.
1. Install dependencies with `npm install`.
1. Run the development server with `npm start`.
1. Open browser to localhost:8080

## Using `wget` or `curl`

`wget` or `curl` can be used instead of the web interface to download the movie files.

To rip videos from Within Web Player format URLs as such:

```bash
wget http://player.with.in/6-EVOL/video/<filename>-WEBPLAYER_PROGRESSIVE-<stereo/mono>-<resolution>.<filetype>
```

Filenames can be pulled from from `https://with.in/unified.json`, `content[n].cameras.default.webplayer.name`. 

## Project RoadMap

- Autoupdate `unified.json` on install.
- Improve cross browser download support.

## License

See [LICENSE](/LICENSE)
