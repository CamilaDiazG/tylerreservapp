import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ¿Qué puedes encontrar en ReservApp?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            La app está diseñada para que el talento estudiantil no se pierda. 
            Cualquier alumno puede ofrecer un servicio y cualquier alumno puede reservarlo.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group relative rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary-100"
            >
              <div className={`mb-4 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${service.badgeBg} ${service.badgeColor}`}>
                {service.badge}
              </div>
              
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-gray-900 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
                <service.icon size={24} strokeWidth={2} />
              </div>

              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;