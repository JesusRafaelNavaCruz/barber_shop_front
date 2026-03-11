import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Github,
  Twitch,
  MessageCircle,
  Link2,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

interface SocialIconProps {
  platform: string;
  className?: string;
}

export function SocialIcon({ platform, className = "" }: SocialIconProps) {
  const platformLower = platform.toLowerCase().trim();

  const iconProps = { className };

  const iconMap: Record<string, React.ReactNode> = {
    facebook: <Facebook {...iconProps} />,
    instagram: <Instagram {...iconProps} />,
    twitter: <Twitter {...iconProps} />,
    x: <Twitter {...iconProps} />,
    linkedin: <Linkedin {...iconProps} />,
    youtube: <Youtube {...iconProps} />,
    github: <Github {...iconProps} />,
    twitch: <Twitch {...iconProps} />,
    whatsapp: <MessageCircle {...iconProps} />,
    email: <Mail {...iconProps} />,
    mail: <Mail {...iconProps} />,
    phone: <Phone {...iconProps} />,
    telefono: <Phone {...iconProps} />,
    location: <MapPin {...iconProps} />,
    address: <MapPin {...iconProps} />,
    direccion: <MapPin {...iconProps} />,
    hours: <Clock {...iconProps} />,
    horarios: <Clock {...iconProps} />,
  };

  return (
    <>{iconMap[platformLower] || <Link2 {...iconProps} />}</>
  );
}
