import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Helmet } from "react-helmet";

createRoot(document.getElementById("root")!).render(
  <>
    <Helmet>
      <title>ÉDoce - Confeitaria Artesanal</title>
      <meta name="description" content="Confeitaria artesanal ÉDoce com ingredientes selecionados a dedo para tornar seus momentos especiais inesquecíveis. Bolos, taças e doces para todas as ocasiões." />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@300;400;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content="ÉDoce - Confeitaria Artesanal" />
      <meta property="og:description" content="Confeitaria artesanal com ingredientes selecionados a dedo para tornar seus momentos especiais inesquecíveis." />
      <meta property="og:type" content="website" />
    </Helmet>
    <App />
  </>
);
