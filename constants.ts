import { BookOpen, Palette, Briefcase } from 'lucide-react';
import { ServiceItem, StepItem, TestimonialItem, StatData } from './types';

export const NAV_LINKS = [
  { name: 'Cómo funciona', href: '#como-funciona' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Impacto', href: '#impacto' },
  { name: 'Testimonios', href: '#testimonios' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: 'Apoyo académico',
    description: 'Encuentra alumnos expertos en materias específicas que ofrecen tutorías personalizadas para ayudarte a pasar la materia.',
    icon: BookOpen,
    badge: 'Tutorías',
    badgeColor: 'text-green-700',
    badgeBg: 'bg-green-50',
  },
  {
    id: 2,
    title: 'Clases artísticas',
    description: 'Clases de música, dibujo, fotografía, edición de video y más, impartidas por compañeros que ya dominan estas habilidades.',
    icon: Palette,
    badge: 'Creatividad',
    badgeColor: 'text-amber-700',
    badgeBg: 'bg-amber-50',
  },
  {
    id: 3,
    title: 'Servicios personales',
    description: 'Desde asesorías de emprendimiento hasta sesiones de organización, puedes agendar servicios que impulsen tus proyectos.',
    icon: Briefcase,
    badge: 'Emprendimiento',
    badgeColor: 'text-red-700',
    badgeBg: 'bg-red-50',
  },
];

export const STEPS: StepItem[] = [
  {
    id: 1,
    title: 'Explora servicios',
    description: 'Filtra por tipo de actividad, horario y calificación. Todos los perfiles pertenecen a estudiantes del mismo campus.',
  },
  {
    id: 2,
    title: 'Reserva en la app',
    description: 'Elige el horario que mejor te quede, confirma la reserva y recibe un recordatorio antes de que empiece la sesión.',
  },
  {
    id: 3,
    title: 'Califica tu experiencia',
    description: 'Después de la actividad, deja una reseña y una calificación. Así fortaleces la confianza dentro de la comunidad estudiantil.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: 'Ana',
    role: '3er semestre · Ingeniería',
    avatarBg: 'bg-red-100',
    content: 'Gracias a las tutorías de ReservApp pude entender mejor cálculo y llegué mucho más segura al examen final.',
  },
  {
    id: 2,
    name: 'Luis',
    role: '5to semestre · Emprendedor',
    avatarBg: 'bg-green-100',
    content: 'Uso ReservApp para ofrecer asesorías de emprendimiento. Me ayuda a practicar, ganar experiencia y generar un ingreso extra.',
  },
];

export const CHART_DATA: StatData[] = [
  { name: 'Ene', users: 400, reservations: 240 },
  { name: 'Feb', users: 600, reservations: 380 },
  { name: 'Mar', users: 900, reservations: 650 },
  { name: 'Abr', users: 1200, reservations: 980 },
  { name: 'May', users: 1600, reservations: 1400 },
  { name: 'Jun', users: 1900, reservations: 1750 },
];