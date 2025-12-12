import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { ChefHat, Heart, Star } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="relative group">
             {/* Abstract image representation for privacy/placeholder */}
            <div className="absolute -inset-2 bg-gradient-to-r from-morocco-orange to-neon-cyan rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative h-[500px] w-full bg-gray-800 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/800/1000" 
                alt="אוריה מבשלת" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent"></div>
              <div className="absolute bottom-6 right-6 text-white">
                <p className="text-morocco-orange font-bold text-lg">שפית הבית</p>
                <h3 className="text-4xl font-bold">אוריה</h3>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <GlassCard>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <ChefHat className="text-morocco-orange" />
                <span className="bg-clip-text text-transparent bg-gradient-to-l from-morocco-orange to-white">
                  לא סתם סדנה, חוויה
                </span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                נעים מאוד, אני אוריה. המטבח אצלי הוא לא רק מקום שמכינים בו אוכל, הוא המקום שבו הלב נפתח. 
                גדלתי על הריחות, הצבעים והטעמים של המטבח המרוקאי האותנטי, ואני כאן כדי לגלות לכם שזה לא חייב להיות מסובך.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                אנחנו הולכים ללמוד איך להוציא מהידיים שלכם טעמים שיגרמו לאורחים שלכם להשתגע, 
                והכל באווירה הכי כיפית, קלילה וטכנולוגית שיש.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3 text-neon-cyan">
                  <Star className="w-5 h-5" />
                  <span>טכניקות מסורתיות</span>
                </div>
                 <div className="flex items-center gap-3 text-neon-cyan">
                  <Heart className="w-5 h-5" />
                  <span>אווירה משפחתית</span>
                </div>
              </div>
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
};