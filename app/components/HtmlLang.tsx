"use client";
import { useEffect } from "react";
import { useLanguage } from "../contexts/language-context";

export default function HtmlLang() {
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  return null;
}