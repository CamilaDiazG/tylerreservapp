import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Lo que dicen los estudiantes
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            ReservApp nace como un proyecto estudiantil para mejorar la vida en el campus. 
            Estos son algunos ejemplos de cómo está ayudando hoy.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm relative">
              <Quote className="absolute top-6 right-6 text-gray-100" size={48} />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className={`h-12 w-12 rounded-full ${testimonial.avatarBg} flex items-center justify-center text-gray-700 font-bold`}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
              
              <p className="text-gray-700 italic relative z-10">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;