import {
  ArrowRightIcon,
  ArrowTopRightIcon,
  ChatBubbleIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Cross1Icon,
  DesktopIcon,
  EnvelopeClosedIcon,
  HamburgerMenuIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  MagicWandIcon,
  MinusIcon,
  Pencil2Icon,
  PlusIcon,
  SewingPinIcon,
} from "@radix-ui/react-icons";
import { Calendar, Image, Mic, ShieldCheck, Youtube } from "lucide-react";

// The "Web icon/WhatsApp" glyph from the design, drawn with the same 2px line style as the others.
function WhatsAppIcon({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9l-5.05.9" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  );
}

const radix = {
  arrow: ArrowRightIcon,
  "arrow-up-right": ArrowTopRightIcon,
  chat: ChatBubbleIcon,
  check: CheckIcon,
  "chevron-down": ChevronDownIcon,
  "chevron-left": ChevronLeftIcon,
  "chevron-right": ChevronRightIcon,
  close: Cross1Icon,
  desktop: DesktopIcon,
  email: EnvelopeClosedIcon,
  menu: HamburgerMenuIcon,
  instagram: InstagramLogoIcon,
  linkedin: LinkedInLogoIcon,
  wand: MagicWandIcon,
  minus: MinusIcon,
  pencil: Pencil2Icon,
  plus: PlusIcon,
  pin: SewingPinIcon,
};

const lucide = {
  calendar: Calendar,
  image: Image,
  mic: Mic,
  shield: ShieldCheck,
  youtube: Youtube,
};

export default function Icon({ name, size = 16, className = "" }) {
  if (name === "whatsapp") return <WhatsAppIcon size={size} className={className} />;
  const R = radix[name];
  if (R) return <R width={size} height={size} className={className} aria-hidden="true" />;
  const L = lucide[name];
  if (L) return <L size={size} strokeWidth={1.75} className={className} aria-hidden="true" />;
  return null;
}
