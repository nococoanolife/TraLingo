# TraLingo

TraLingo is a macOS desktop app for live transcription, translation, summaries, and export.

## What this app does

TraLingo captures microphone audio and system audio, shows the original line and the translated line together, and lets you generate a summary from the captions that are already visible on screen.

It is designed for:

- multilingual meetings
- livestreams and recorded video
- interviews and research sessions
- operator-style monitoring where both microphone and playback audio matter

## Important before you try it

TraLingo itself is free to download and use.

However, this app uses external AI providers for transcription and translation, so you need your own API key:

- OpenAI API key is required for OpenAI-based transcription, translation, and summary features
- DeepL API key is required only if you choose DeepL as the translation provider

The app is free, but usage charges from OpenAI or DeepL are billed separately under your own account.

## Download

- [Latest release](https://github.com/nococoanolife/TraLingo/releases/latest)
- [GitHub repository](https://github.com/nococoanolife/TraLingo)
- [Support / issues](https://github.com/nococoanolife/TraLingo/issues)
- [Project site](https://nococoanolife.github.io/TraLingo/)

## What is in this public repository

This public repository is only for distribution.

It contains:

- `README.md`
- `site/` for GitHub Pages
- `TraLingo.dmg` for the latest macOS build

It does not contain the private development source repository.

## Security and privacy summary

- API keys are stored locally
- audio is not automatically saved as files during normal use
- if you enable OpenAI or DeepL, the required audio or text is sent to that provider for processing
- current public builds are intended for limited tester style distribution unless full Developer ID signing and notarization are configured
