import React from 'react';
import { Star, User, MoreHorizontal, Calendar } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-24 lg:pb-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col items-start">
            <div className="mb-4 inline-flex items-center rounded-full border border-primary-100 bg-primary-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary-600">
              Proyecto Estudiantil · Tecmilenio
            </div>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
              Descubre y reserva actividades en tu <span className="text-primary-600">campus</span>.
            </h1>
            <p className="mb-8 max-w-lg text-lg text-gray-600 leading-relaxed">
              ReservApp conecta a estudiantes que ofrecen tutorías, clases artísticas y otros servicios 
              con quienes los necesitan, diseñado específicamente para utilizarse en los campus de Tecmilenio.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">
                Pruébala ahora
              </Button>
              <Button variant="ghost">
                Ver cómo funciona
              </Button>
            </div>
            <div className="mt-6 text-sm font-medium text-gray-500">
              ✓ Sin costo para estudiantes · ✓ Perfiles verificados
            </div>
          </div>

          {/* Visual / Mockup */}
          <div className="relative mx-auto w-full max-w-[400px] lg:max-w-none">
            <div className="relative rounded-[2.5rem] border-8 border-gray-900 bg-gray-900 shadow-2xl">
              <div className="absolute left-1/2 top-0 h-5 w-32 -translate-x-1/2 rounded-b-xl bg-gray-900"></div>
              <div className="h-[600px] w-full overflow-hidden rounded-[2rem] bg-gray-50 flex flex-col">
                
                {/* Mockup Header */}
                <div className="bg-white p-5 pt-10 border-b border-gray-100 flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">Hola, Alex 👋</h3>
                    <p className="text-xs text-gray-500">¿Qué quieres aprender hoy?</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-sm">
                    <img src="https://picsum.photos/100/100" alt="User" className="h-full w-full object-cover" />
                  </div>
                </div>

                {/* Mockup Body */}
                <div className="p-4 flex-1 overflow-y-auto">
                  <div className="mb-4 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                     {['Todo', 'Académico', 'Arte', 'Deporte'].map((tab, i) => (
                        <span key={tab} className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap ${i === 0 ? 'bg-gray-900 text-white' : 'bg-white border border-gray-200 text-gray-600'}`}>
                          {tab}
                        </span>
                     ))}
                  </div>

                  {/* Cards inside mockup */}
                  <div className="space-y-3">
                    {/* Consistent with new logo colors: Green (Academic), Orange (Art), Red (Personal/Other) */}
                    {[
                      { title: 'Tutoría de Cálculo', time: 'Hoy · 5:00 p.m.', rating: 5.0, color: 'bg-green-100' },
                      { title: 'Clase de Pintura', time: 'Mañana · 4:30 p.m.', rating: 4.8, color: 'bg-amber-100' },
                      { title: 'Asesoría de CV', time: 'Viernes · 3:00 p.m.', rating: 5.0, color: 'bg-red-100' },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex gap-3 items-center">
                        <div className={`h-12 w-12 rounded-full ${item.color} flex items-center justify-center shrink-0`}>
                           <User size={20} className="text-gray-700 opacity-50" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <h4 className="font-bold text-sm text-gray-800">{item.title}</h4>
                            <MoreHorizontal size={16} className="text-gray-400" />
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                            <Calendar size={12} />
                            <span>{item.time}</span>
                          </div>
                          <div className="flex items-center gap-1 mt-1.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={10} className={`${i < Math.floor(item.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                            ))}
                            <span className="text-[10px] font-bold text-gray-400 ml-1">{item.rating}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mockup Navigation */}
                <div className="bg-white border-t border-gray-100 p-4 flex justify-around text-gray-400">
                   <div className="text-primary-600 flex flex-col items-center gap-1">
                      <div className="h-1 w-1 rounded-full bg-primary-600 mb-0.5"></div>
                      <span className="w-6 h-6 bg-gray-100 rounded-md block"></span>
                   </div>
                   <span className="w-6 h-6 bg-gray-50 rounded-md block"></span>
                   <span className="w-6 h-6 bg-gray-50 rounded-md block"></span>
                </div>

              </div>
            </div>
            
            {/* Decorative Elements - Matching Logo colors */}
            <div className="absolute -z-10 top-20 -right-20 h-72 w-72 rounded-full bg-green-200/30 blur-3xl"></div>
            <div className="absolute -z-10 bottom-10 -left-20 h-72 w-72 rounded-full bg-red-200/30 blur-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;