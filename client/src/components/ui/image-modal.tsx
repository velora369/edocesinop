import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

type ImageModalProps = {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  altText?: string;
};

export function ImageModal({ isOpen, onClose, imageUrl, altText = "Product image" }: ImageModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden bg-transparent border-none">
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 z-50 p-2 rounded-full bg-white/80 text-black hover:bg-white/100 transition-colors"
          aria-label="Close"
        >
          <X size={24} />
        </button>
        <div className="relative w-full h-full flex items-center justify-center">
          <img 
            src={imageUrl} 
            alt={altText} 
            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}