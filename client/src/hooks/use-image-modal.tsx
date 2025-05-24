import { useState } from "react";

export function useImageModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [altText, setAltText] = useState("");

  const openModal = (url: string, alt: string = "") => {
    setImageUrl(url);
    setAltText(alt);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    imageUrl,
    altText,
    openModal,
    closeModal
  };
}