import React from 'react';
import { Quote } from 'lucide-react';

export const PrincipalMessage: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Principal Image */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="aspect-square rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <img
                  src="/src/assets/images/principal_mukesh_portrait_1790177251206.jpg"
                  alt="Mukesh Chaudhary, Principal"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Caption Card without pill badges */}
              <div className="mt-4 text-center lg:text-left">
                <h3 className="text-lg font-bold text-slate-900">
                  श्री मुकेश चौधरी (Mukesh Chaudhary)
                </h3>
                <p className="text-xs text-amber-800 font-semibold mt-0.5">
                  प्रधानाचार्य / निदेशक (Principal & Academic Director)
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  समर्पित शैक्षणिक नेतृत्व एवं अनुशासन
                </p>
              </div>
            </div>
          </div>

          {/* Principal Welcome Prose */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-wider">
              <span>प्रधानाचार्य का संदेश</span>
              <span aria-hidden="true">·</span>
              <span>Principal&apos;s Desk</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight font-display text-balance">
              &ldquo;शिक्षा केवल परीक्षा उत्तीर्ण करने का साधन नहीं, बल्कि चरित्र और आत्मनिर्भरता का निर्माण है।&rdquo;
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                प्रिय विद्यार्थियों, अभिभावकों एवं सुधीजनों, आदर्श विद्या निकेतन परिवार की ओर से आप सभी का हार्दिक अभिनंदन। हमारे विद्यालय का मूल मंत्र &ldquo;सा विद्या या विमुक्तये&rdquo; है — अर्थात् सच्ची विद्या वही है जो मनुष्य को अज्ञान, भय और संकीर्णता से मुक्त कर ज्ञान के आलोक से आलोकित करे।
              </p>
              <p>
                आज के 21वीं सदी के तकनीकी युग में हम अपने विद्यार्थियों को आधुनिक स्टेम (STEM) लैब्स, कोडिंग, स्मार्ट क्लासेस के साथ-साथ हमारी भारतीय संस्कृति, संस्कारों और खेल भावना से जोड़कर सर्वांगीण विकास प्रदान करते हैं।
              </p>
              <p>
                हमारा विद्यालय परिसर विद्यार्थियों की सुरक्षा, उनके स्वास्थ्य और शैक्षणिक उत्कृष्टता के लिए पूरी तरह समर्पित है। सभी अभिभावकों से मेरा आग्रह है कि वे विद्यालय के नोटिस बोर्ड और गतिविधियों से निरंतर जुड़े रहें।
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center gap-8 text-xs text-slate-500">
              <div>
                <span className="font-semibold text-slate-800 block">लक्ष्य (Vision)</span>
                वैश्विक ज्ञान एवं भारतीय नैतिक मूल्यों का समन्वय
              </div>
              <div>
                <span className="font-semibold text-slate-800 block">दृष्टिकोण (Mission)</span>
                प्रत्येक छात्र की स्वाभाविक प्रतिभा का पोषण
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
