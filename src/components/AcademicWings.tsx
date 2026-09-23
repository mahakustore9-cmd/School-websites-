import React from 'react';
import { BookOpen, Compass, Award, Cpu, Palette, Atom } from 'lucide-react';

export const AcademicWings: React.FC = () => {
  return (
    <section id="academics" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-wider mb-2">
            <span>शैक्षणिक प्रभाग</span>
            <span aria-hidden="true">·</span>
            <span>Academic Wings</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-display">
            सीबीएसई पाठ्यक्रम पर आधारित समग्र शिक्षण पद्धति
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            राष्ट्रीय शिक्षा नीति (NEP 2020) के अनुरूप गतिविधि-आधारित, विश्लेषणात्मक एवं कौशल-युक्त पाठ्यक्रम।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Wing 1 */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center mb-4">
                <Palette className="w-5 h-5" />
              </div>
              <div className="text-xs text-slate-400 font-semibold mb-1">प्रारंभिक प्रभाग · Nursery to Class 5</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                फाउंडेशनल एवं प्राइमरी विंग
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                खेल-खेल में शिक्षा, मोंटेसरी पद्धति, ध्वनिविज्ञान (Phonics), बुनियादी गणित, कला, संगीत और नैतिक कहानियों के माध्यम से भाषा व कल्पनाशक्ति का विकास।
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                <span>गतिविधि आधारित बाल-केंद्रित कक्षाएं</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                <span>स्मार्ट ऑडियो-विजुअल लर्निंग रूम</span>
              </div>
            </div>
          </div>

          {/* Wing 2 */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-800 flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <div className="text-xs text-slate-400 font-semibold mb-1">माध्यमिक प्रभाग · Class 6 to 8</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                मिडिल स्कूल (Experiential Learning)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                प्रायोगिक विज्ञान, कंप्यूटर कोडिंग, अटल टिंकरिंग लैब में रोबोटिक्स प्रोजेक्ट्स, हिंदी, संस्कृत व अंग्रेजी भाषा प्रवीणता, और सामाजिक विज्ञान।
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-600"></span>
                <span>वैज्ञानिक दृष्टिकोण व प्रोजेक्ट वर्क</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-600"></span>
                <span>अन्तर-सदनीय वाद-विवाद व क्विज</span>
              </div>
            </div>
          </div>

          {/* Wing 3 */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center mb-4">
                <Atom className="w-5 h-5" />
              </div>
              <div className="text-xs text-slate-400 font-semibold mb-1">उच्च माध्यमिक · Class 9 to 12</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                सीनियर सेकेंडरी (Career Streams)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                विज्ञान (PCM/PCB), वाणिज्य (Commerce with Maths/IP) एवं मानविकी (Arts)। बोर्ड परीक्षा के साथ-साथ JEE/NEET/CUET की नींव तैयार करने हेतु विशेष कोचिंग।
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                <span>100% बोर्ड परिणाम व टॉपर्स रिकॉर्ड</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                <span>कैरियर काउंसलिंग व मेंटरशिप प्रोग्राम</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
