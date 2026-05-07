import facial from "@/assets/svc-facial.jpg";
import threading from "@/assets/svc-threading.jpg";
import haircut from "@/assets/svc-haircut.jpg";
import spa from "@/assets/svc-spa.jpg";
import manicure from "@/assets/svc-manicure.jpg";
import pedicure from "@/assets/svc-pedicure.jpg";
import bridal from "@/assets/svc-bridal.jpg";
import waxing from "@/assets/svc-waxing.jpg";

export const services = [
  { slug: "facial", title: "Signature Facial", img: facial, price: "from $75", duration: "60 min", desc: "Deep-cleansing, hydrating ritual tailored to your skin with hand-blended serums." },
  { slug: "threading", title: "Brow Threading", img: threading, price: "from $18", duration: "20 min", desc: "Precision brow & facial threading for clean, sculpted shapes." },
  { slug: "haircut", title: "Haircut & Style", img: haircut, price: "from $55", duration: "45 min", desc: "Modern cuts and styling by senior stylists, finished with a signature blow-out." },
  { slug: "spa", title: "Aroma Spa Massage", img: spa, price: "from $110", duration: "75 min", desc: "Hot stones, essential oils and slow strokes to melt every knot away." },
  { slug: "manicure", title: "Luxe Manicure", img: manicure, price: "from $40", duration: "45 min", desc: "Cuticle care, hand massage and a flawless polish — gel or classic." },
  { slug: "pedicure", title: "Spa Pedicure", img: pedicure, price: "from $55", duration: "60 min", desc: "Warm soak, exfoliation, foot massage and your perfect polish finish." },
  { slug: "bridal", title: "Bridal Makeup", img: bridal, price: "from $180", duration: "90 min", desc: "Soft-glam, long-wear bridal looks with on-site trials and touch-up kit." },
  { slug: "waxing", title: "Waxing & Smooth", img: waxing, price: "from $25", duration: "30 min", desc: "Gentle warm-wax treatments for silky, lasting smooth skin." },
];
