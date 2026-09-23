import { Notice } from '../types/notice';

export const INITIAL_NOTICES: Notice[] = [
  {
    id: 'notice-1',
    title: 'सत्र 2026-27: अर्धवार्षिक परीक्षा (Mid-Term Exam) समय-सारणी जारी',
    content:
      'कक्षा 6वीं से 12वीं तक के सभी छात्र-छात्राओं एवं अभिभावकों को सूचित किया जाता है कि अर्धवार्षिक परीक्षाएं आगामी 12 अक्टूबर 2026 से प्रारंभ होंगी। विस्तृत डेटशीट एवं एडमिट कार्ड विद्यालय के परीक्षा विभाग से प्राप्त करें अथवा छात्र पोर्टल से डाउनलोड करें। समय पर उपस्थिति अनिवार्य है।',
    date: '2026-09-23',
    category: 'Exams',
    priority: 'urgent',
    targetAudience: 'All',
    isPinned: true,
    author: 'परीक्षा नियंत्रक (Controller of Examination)',
    circularNumber: 'AVN/2026-27/EXAM-14',
    createdAt: Date.now() - 3600000 * 2,
  },
  {
    id: 'notice-2',
    title: 'नवीन प्रवेश प्रारंभ सत्र 2026-27 (Nursery to Class IX & XI)',
    content:
      'आदर्श विद्या निकेतन में सत्र 2026-27 हेतु कक्षा नर्सरी से 9वीं एवं 11वीं (विज्ञान, वाणिज्य, कला) में सीमित सीटों पर प्रवेश पंजीकरण प्रारंभ हो चुका है। प्रवेश परीक्षा एवं साक्षात्कार हेतु विद्यालय कार्यालय में प्रातः 9:00 से दोपहर 2:00 बजे तक संपर्क करें या वेबसाइट पर ऑनलाइन फॉर्म भरें।',
    date: '2026-09-22',
    category: 'Admissions',
    priority: 'urgent',
    targetAudience: 'Parents',
    isPinned: true,
    author: 'प्रवेश प्रकोष्ठ (Admission Cell)',
    circularNumber: 'AVN/2026-27/ADM-08',
    createdAt: Date.now() - 3600000 * 24,
  },
  {
    id: 'notice-3',
    title: 'गांधी जयंती एवं दशहरा अवकाश सूचना (School Holiday Notice)',
    content:
      'विद्यालय के समस्त विद्यार्थियों, शिक्षकों एवं कर्मचारियों को सूचित किया जाता है कि गांधी जयंती एवं दशहरा महोत्सव के उपलक्ष्य में विद्यालय 2 अक्टूबर से 5 अक्टूबर 2026 तक बंद रहेगा। विद्यालय पुनः सोमवार, 6 अक्टूबर को पूर्ववत समय पर खुलेगा।',
    date: '2026-09-21',
    category: 'Holidays',
    priority: 'normal',
    targetAudience: 'All',
    isPinned: false,
    author: 'प्रधानाचार्य कार्यालय (Principal Office)',
    circularNumber: 'AVN/2026-27/HOL-09',
    createdAt: Date.now() - 3600000 * 48,
  },
  {
    id: 'notice-4',
    title: 'अन्तर-विद्यालयीन खेलकूद प्रतियोगिता (Annual Sports Trials)',
    content:
      'कक्षा 8वीं से 12वीं के इच्छुक छात्रों को सूचित किया जाता है कि जिला स्तरीय एथलेटिक्स, फुटबॉल और वॉलीबॉल प्रतियोगिता के लिए चयन ट्रायल 28 सितम्बर 2026 को विद्यालय के मुख्य खेल मैदान में दोपहर 2:30 बजे से आयोजित किए जाएंगे। सभी प्रतिभागी खेल पोशाक में उपस्थित हों।',
    date: '2026-09-20',
    category: 'Events',
    priority: 'normal',
    targetAudience: 'Students',
    isPinned: false,
    author: 'शारीरिक शिक्षा विभाग (Sports Dept)',
    circularNumber: 'AVN/2026-27/SPT-05',
    createdAt: Date.now() - 3600000 * 72,
  },
  {
    id: 'notice-5',
    title: 'द्वितीय त्रैमासिक शुल्क जमा करने की अंतिम तिथि (Quarterly Fee Notice)',
    content:
      'सभी सम्मानित अभिभावकों से सादर अनुरोध है कि सत्र 2026-27 की द्वितीय तिमाही (जुलाई से सितम्बर) की शेष ट्यूशन फीस 30 सितम्बर 2026 तक विद्यालय के एकाउंट्स काउंटर पर अथवा ऑनलाइन पोर्टल द्वारा जमा कराने का कष्ट करें ताकि परीक्षा अनुमति पत्र जारी करने में कोई असुविधा न हो।',
    date: '2026-09-18',
    category: 'Fees',
    priority: 'normal',
    targetAudience: 'Parents',
    isPinned: false,
    author: 'लेखा विभाग (Accounts Dept)',
    circularNumber: 'AVN/2026-27/FEE-03',
    createdAt: Date.now() - 3600000 * 96,
  },
];
