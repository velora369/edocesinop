import { motion } from "framer-motion";
import { generateWhatsAppLink } from "@/lib/utils";

export default function WhatsAppButton() {
  return (
    <motion.a 
      href={generateWhatsAppLink("5566999852299", "Olá, gostaria de fazer um pedido")}
      className="btn-whatsapp"
      aria-label="Contact via WhatsApp"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <i className="fab fa-whatsapp text-3xl"></i>
    </motion.a>
  );
}
