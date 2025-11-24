import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CHART_DATA } from '../constants';

const ImpactChart: React.FC = () => {
  return (
    <section id="impacto" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Creciendo junto a la comunidad
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              ReservApp ha facilitado miles de conexiones académicas y creativas este semestre. 
              Observa cómo crece nuestra comunidad de estudiantes activos y reservas exitosas.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="text-3xl font-bold text-primary-600 mb-1">1.9k+</div>
                <div className="text-sm text-gray-500 font-medium">Usuarios Activos</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="text-3xl font-bold text-gray-900 mb-1">95%</div>
                <div className="text-sm text-gray-500 font-medium">Satisfacción en Reservas</div>
              </div>
            </div>
          </div>

          <div className="h-[400px] w-full rounded-2xl bg-white shadow-lg border border-gray-100 p-6">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">Crecimiento Semestral</h3>
            <ResponsiveContainer width="100%" height="85%">
              <AreaChart data={CHART_DATA} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#16a34a" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#16a34a" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorReservations" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0f172a" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#0f172a" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                <CartesianGrid vertical={false} stroke="#f3f4f6" />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  itemStyle={{ fontSize: '14px', fontWeight: 500 }}
                />
                <Area 
                  type="monotone" 
                  dataKey="users" 
                  name="Usuarios"
                  stroke="#16a34a" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorUsers)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="reservations" 
                  name="Reservas"
                  stroke="#0f172a" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorReservations)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactChart;