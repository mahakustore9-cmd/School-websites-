import React from 'react';
import { ShieldCheck, Wifi, Bus, BookMarked } from 'lucide-react';

export const CampusFacilities: React.FC = () => {
  return (
    <section id="facilities" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-wider mb-2">
            <span>विश्वस्तरीय सुविधाएं</span>
            <span aria-hidden="true">·</span>
            <span>Campus Infrastructure</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-display">
            छात्रों के मानसिक, बौद्धिक व शारीरिक विकास हेतु पूर्ण व्यवस्था
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            हमारा 15 एकड़ का हरित परिसर सुरक्षित, आधुनिक तकनीक और खेलों के अत्याधुनिक संसाधनों से सुसज्जित है।
          </p>
        </div>

        {/* Feature Grid with Generated High-res Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Card 1: Science & STEM Lab */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex flex-col">
            <div className="aspect-16/10 relative overflow-hidden">
              <img
                src="/src/assets/images/school_stem_lab_1790176551715.jpg"
                alt="Students in School Science and STEM Robotics Laboratory"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6">
              <div className="text-xs text-slate-500 font-semibold mb-1">
                प्रायोगिक शिक्षा · Hands-on Discovery
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                आधुनिक विज्ञान, भौतिकी, रसायन एवं रोबोटिक्स प्रयोगशाला
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                अत्याधुनिक उपकरणों, डिजिटल माइक्रोस्कोप और रोबोटिक्स किट से लैस प्रयोगशालाएं जहाँ छात्र किताबों से बाहर निकलकर प्रयोगों द्वारा सीखते हैं।
              </p>
            </div>
          </div>

          {/* Card 2: Sports Ground */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex flex-col">
            <div className="aspect-16/10 relative overflow-hidden">
              <img
                src="/src/assets/images/school_sports_ground_1790176568745.jpg"
                alt="School Sports Complex and Athletic Track"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6">
              <div className="text-xs text-slate-500 font-semibold mb-1">
                खेल एवं स्वास्थ्य · Physical Fitness & Sports
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                अन्तरराष्ट्रीय मानक खेल मैदान व 400 मीटर एथलेटिक ट्रैक
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                फुटबॉल मैदान, क्रिकेट नेट, बास्केटबॉल कोर्ट, बैडमिंटन और इंडोर स्पोर्ट्स कॉम्प्लेक्स जहाँ योग्य राष्ट्रीय कोच विद्यार्थियों को प्रशिक्षित करते हैं।
              </p>
            </div>
          </div>
        </div>

        {/* Supporting 4-pillar Infrastructure highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center mb-3">
              <BookMarked className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 mb-1">समृद्ध डिजिटल लाइब्रेरी</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              15,000+ पुस्तकें, ई-जर्नल्स, संदर्भ ग्रंथ और शांतिपूर्ण वाचनालय कक्ष।
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center mb-3">
              <Bus className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 mb-1">सुरक्षित GPS युक्त बस सेवा</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              शहर व उपनगरों के सभी मार्गों पर सीसीटीवी एवं जीपीएस युक्त वातानुकूलित बसें।
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 mb-1">24x7 सुरक्षा एवं सीसीटीवी</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              परिसर में 120+ कैमरे, बायोमेट्रिक प्रवेश द्वार और प्रशिक्षित सुरक्षा दल।
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center mb-3">
              <Wifi className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 mb-1">हाई-स्पीड स्मार्ट क्लासरूम्स</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              इंटरैक्टिव टच पैनल, 3D विजुअलाइजेशन और प्रोजेक्टर्स से लैस आधुनिक कक्षाएं।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
