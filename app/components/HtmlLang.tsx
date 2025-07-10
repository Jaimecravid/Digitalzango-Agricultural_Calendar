"use client";
import { useEffect } from "react";
import { useLanguage } from "../contexts/language-context";

export default function HtmlLang() {
  useEffect(() => {
    document.documentElement.lang = 'pt';
  }, []);

  return null;
}