import React from 'react';
import { STEPS } from '../constants';
import { ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-20 bg-gray-50 border-y border-gray-200">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Cómo funciona
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Pensado para ser simple: explora servicios, reserva en segundos y califica tu experiencia 
            para ayudar a otros estudiantes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10"></div>

          {STEPS.map((step) => (
            <div key={step.id} className="relative flex flex-col items-center text-center">
              <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white border-4 border-white shadow-lg">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-600 text-xl font-bold text-white">
                  {step.id}
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">{step.title}</h3>
              <p className="text-gray-600 max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;