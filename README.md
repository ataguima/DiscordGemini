# Discord AI Assistant (Gemini API) - PASTE Approach

## Overview

This simple userscript allows you to send selected text from Discord to the free Gemini API and paste the AI-generated response back into the Discord chat input box, simulating a "paste" action.

## Features

- **Text Selection**: Capture selected text from Discord.
- **Gemini API Integration**: Send the selected text to the Gemini API for processing.
- **Auto Paste**: Paste the AI-generated response directly into the Discord chat input.
- **Shortcut Support**: Trigger the action using a customizable keyboard shortcut (Ctrl+Shift+K by default).

## Installation

1. Install [Tampermonkey](https://tampermonkey.net/) in your browser.
2. Create a new script in Tampermonkey and paste the provided code.
3. Replace the placeholder `YOUR_API_TOKEN` in the script with your actual Gemini API key.

## How It Works

- **Step 1**: Select some text in Discord.
- **Step 2**: Press `Ctrl+Shift+K` to send the selected text to the Gemini API.
- **Step 3**: The AI-generated response is automatically pasted into the Discord input box.

## Script Functions

### `fetchAIResponse(prompt, callback)`

- **Description**: Sends a prompt to the Gemini API and processes the response.
- **Parameters**:
  - `prompt` (string): The text to send to the Gemini API.
  - `callback` (function): A callback function that handles the API response.
  
- **Returns**: The AI-generated response text.

### `pasteTextInDiscord(text)`

- **Description**: Simulates a paste event and pastes the provided text into the Discord input box.
- **Parameters**:
  - `text` (string): The text to paste into Discord.

### Keyboard Shortcut

- **Ctrl+Shift+K**: Activates the script. Captures selected text, sends it to the Gemini API, and pastes the response into the Discord input box.

## Troubleshooting

- **No selected text**: If no text is selected, an alert will prompt you to select text first.
- **API errors**: If there is an error with the API request, the script will log the error to the console and display a message.
- **Discord input box not found**: If the Discord input box cannot be found, the script will alert you.

## Contributing

Feel free to fork this project and submit pull requests for any improvements or fixes!

## License

This project is licensed under the MIT License.

---

**Note**: This userscript is intended for personal use. Be sure to use your own Gemini API key and comply with any applicable terms of service.
