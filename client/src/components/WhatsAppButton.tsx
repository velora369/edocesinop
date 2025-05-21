import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a 
      href="https://wa.me/5566999852299?text=Olá,%20gostaria%20de%20fazer%20um%20pedido"
      className="btn-whatsapp"
      aria-label="Contact via WhatsApp"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <i className="fab fa-whatsapp text-3xl"></i>
    </motion.a>
  );
}
