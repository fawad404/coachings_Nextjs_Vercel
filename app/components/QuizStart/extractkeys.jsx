'use client';

import React, { useEffect } from "react";
import * as mammoth from "mammoth";

const ExtractKeys = ({ onKeysExtracted }) => {
  useEffect(() => {
    const fetchKeys = async () => {
      try {
        const fileUrl = "/Uanswers.docx";  // Path to the answer key file
        const response = await fetch(fileUrl);
        const arrayBuffer = await response.arrayBuffer();
        const result = await mammoth.extractRawText({ arrayBuffer });
        const rawText = result.value;
        const keys = extractKeysFromText(rawText);
        onKeysExtracted(keys);  // Pass keys back to parent component
      } catch (error) {
        console.error("Error fetching or parsing the .docx file:", error);
      }
    };

    fetchKeys();
  }, [onKeysExtracted]);

  const extractKeysFromText = (text) => {
    const lines = text.split("\n");
    const keys = [];

    lines.forEach((line) => {
      const trimmedLine = line.trim();
      const match = trimmedLine.match(/^\d+:\s*(\w)/);  // Matches "1: a", "2: b" pattern
      if (match) {
        const key = match[1].toUpperCase();
        keys.push(key);
      }
    });
    return keys;
  };

  return null; // No UI is needed, just the extraction logic
};

export default ExtractKeys;
