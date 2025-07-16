// Basic language context for AI4ALL Armenia
export const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    programs: 'Programs',
    impact: 'Impact',
    news: 'News & Events',
    contact: 'Contact',
    applyNow: 'Apply Now',
    
    // Hero Section
    heroTitle: 'AI4ALL Armenia:',
    heroSubtitle: 'Empowering Our Nation\'s Future',
    heroTagline: 'with AI',
    heroDescription: 'An initiative bringing cutting-edge, human-centered AI education to every region of Armenia.',
    explorePrograms: 'Explore Programs',
    
    // Programs
    allPrograms: 'All Programs',
    forTeachers: 'For Teachers',
    forYouth: 'For Youth',
    
    // Stats
    studentsLabel: 'Students Trained',
    teachersLabel: 'Teachers Certified',
    schoolsLabel: 'School Partners',
    regionsLabel: 'Regions Covered',
    
    // Footer
    poweredBy: 'Enterprise Incubator Foundation',
    scrollToExplore: 'Scroll to explore',
  },
  
  hy: {
    // Navigation
    home: 'Գլխավոր',
    about: 'Մեր մասին',
    programs: 'Ծրագրեր',
    impact: 'Ազդեցություն',
    news: 'Նորություններ և իրադարձություններ',
    contact: 'Կապ',
    applyNow: 'Գրանցվել',
    
    // Hero Section
    heroTitle: 'AI4ALL Հայաստան:',
    heroSubtitle: 'Զորացնում ենք մեր ազգի ապագան',
    heroTagline: 'AI-ի միջոցով',
    heroDescription: 'Նախաձեռնություն, որը բերում է ծանուցակիցների, մարդկակենտրոն AI կրթությունը Հայաստանի բոլոր մարզերում:',
    explorePrograms: 'Ուսումնասիրել ծրագրերը',
    
    // Programs
    allPrograms: 'Բոլոր ծրագրերը',
    forTeachers: 'Ուսուցիչների համար',
    forYouth: 'Երիտասարդների համար',
    
    // Stats
    studentsLabel: 'Վերապատրաստված ուսանողներ',
    teachersLabel: 'Հավաստագրված ուսուցիչներ',
    schoolsLabel: 'Գործակից դպրոցներ',
    regionsLabel: 'Ծածկված մարզեր',
    
    // Footer
    poweredBy: 'Ձեռնարկատիրական ինկուբատորի հիմնադրամ',
    scrollToExplore: 'Ոլորեք՝ ուսումնասիրելու համար',
  },
  
  ru: {
    // Navigation
    home: 'Главная',
    about: 'О нас',
    programs: 'Программы',
    impact: 'Влияние',
    news: 'Новости и события',
    contact: 'Контакты',
    applyNow: 'Подать заявку',
    
    // Hero Section
    heroTitle: 'AI4ALL Армения:',
    heroSubtitle: 'Расширяем возможности будущего нашей нации',
    heroTagline: 'с помощью ИИ',
    heroDescription: 'Инициатива, которая приносит передовое, человеко-ориентированное образование по ИИ в каждый регион Армении.',
    explorePrograms: 'Изучить программы',
    
    // Programs
    allPrograms: 'Все программы',
    forTeachers: 'Для учителей',
    forYouth: 'Для молодежи',
    
    // Stats
    studentsLabel: 'Обученных студентов',
    teachersLabel: 'Сертифицированных учителей',
    schoolsLabel: 'Школ-партнеров',
    regionsLabel: 'Охваченных регионов',
    
    // Footer
    poweredBy: 'Фонд предпринимательского инкубатора',
    scrollToExplore: 'Прокрутите для изучения',
  }
}

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.en

export const getTranslation = (lang: Language, key: TranslationKey): string => {
  return translations[lang][key] || translations.en[key]
}
