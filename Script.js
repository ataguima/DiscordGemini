// ==UserScript==
// @name         Discord AI Assistant (Gemini API) - PASTE Approach
// @namespace    http://tampermonkey.net/
// @version      0.9
// @description  Sends selected text to the API and pastes the response into Discord simulating a paste action.
// @match        https://discord.com/*
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function () {
  "use strict";

  function fetchAIResponse(prompt, callback) {
    const apiKey =
      "YOUR_API_TOKEN"; // Replace with your actual API key
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    GM_xmlhttpRequest({
      method: "POST",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify({
        model: "gemini-2.0-flash",
        contents: [
          {
            role: "user",
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      }),
      onload: function (response) {
        console.log("API Response:", response.responseText);
        try {
          const data = JSON.parse(response.responseText);
          if (data?.candidates?.[0]?.content) {
            const candidate = data.candidates[0].content;
            const text = candidate.parts?.[0]?.text;
            callback(text ? text.trim() : "No API response.");
          } else {
            callback("No API response.");
          }
        } catch (err) {
          console.error("Error processing API response:", err);
          callback("Error processing API response.");
        }
      },
      onerror: function (err) {
        console.error("Request error:", err);
        callback("Error during API request.");
      },
    });
  }

  function pasteTextInDiscord(text) {
    const input = document.querySelector('div[role="textbox"]');
    if (!input) {
      alert("Could not find the Discord input box.");
      return;
    }
    input.focus();

    const clipboardData = new DataTransfer();
    clipboardData.setData("text/plain", text);

    const pasteEvent = new ClipboardEvent("paste", {
      clipboardData,
      bubbles: true,
      cancelable: true,
    });

    input.dispatchEvent(pasteEvent);
  }

  document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.shiftKey && e.key === "K") { // Change your shortcut here, if you want
      console.log("Shortcut Ctrl+Shift+K activated!");
      const selectedText = window.getSelection().toString();

      if (!selectedText) {
        alert("Please select some text first.");
        return;
      }

      const prompt =
        "" +
        selectedText; // You can add a propmt if you want to

      console.log("Sending to API...");
      fetchAIResponse(prompt, function (aiResponse) {
        pasteTextInDiscord(aiResponse);
      });
    }
  });
})();
      
