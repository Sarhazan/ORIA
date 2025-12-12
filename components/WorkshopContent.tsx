import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { Utensils, Flame, Coffee, Users } from 'lucide-react';
import { WorkshopFeature } from '../types';

const features: WorkshopFeature[] = [
  {
    title: "מנות דגל אותנטיות",
    description: "נלמד להכין קוסקוס בעבודת יד, טאג'ין בשר ופירות יבשים, וסלטים מבושלים בדיוק כמו במרקש.",
    icon: <Utensils className="w-8 h-8 text-morocco-orange" />,
  },
  {
    title: "סודות התיבול",
    description: "איך להשתמש בתבלינים בצורה שתקפיץ כל מנה, ואיפה קונים את הסחורה הכי טובה.",
    icon: <Flame className="w-8 h-8 text-morocco-orange" />,
  },
  {
    title: "אירוח מרוקאי",
    description: "במהלך הסדנה נהנה מתה נענע מסורתי, עוגיות מרוקאיות ומוזיקה שמכניסה לאווירה.",
    icon: <Coffee className="w-8 h-8 text-morocco-orange" />,
  },
  {
    title: "קבוצות בוטיק",
    description: "עבודה בקבוצות קטנות כדי שכל אחד יקבל יחס אישי והדרכה צמודה מאוריה.",
    icon: <Users className="w-8 h-8 text-morocco-orange" />,
  },
];

export const WorkshopContent: React.FC = () => {
  return (
    <section className="py-20 px-4 z-10 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            מה מחכה לכם <span className="text-neon-cyan">בסדנה?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            שלוש שעות של טעמים, ריחות וחוויות שלא תשכחו
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <GlassCard key={index} delay={index * 0.1} className="h-full">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 rounded-full bg-white/5 border border-white/10 shadow-[0_0_15px_rgba(255,153,0,0.3)]">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-100">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};