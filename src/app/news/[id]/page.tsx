'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowLeft, Share2, Tag, Copy, Check, ExternalLink, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getArticleByNumericId, getText, Language } from '@/utils/articleHelpers'

interface NewsArticle {
  id: number
  type: string
  title: string
  date: string
  category: string
  excerpt: string
  image: string
  author: string
  content: string
  tags?: string[]
}

const newsArticles: NewsArticle[] = [
  {
    id: 1,
    type: 'news',
    title: 'AI4ALL Armenia Launches Nationwide Initiative',
    date: '2024-11-15',
    category: 'Launch',
    excerpt: 'AI4ALL Armenia officially launches its comprehensive AI education program, bringing cutting-edge artificial intelligence training to youth and teachers across all regions of Armenia.',
    image: '/news/AI4ALL Armenia Launches Nationwide Initiative.png',
    author: 'EIF Communications',
    tags: ['Launch', 'AI Education', 'Armenia', 'Initiative'],
    content: `
      <p>AI4ALL Armenia has officially launched its comprehensive artificial intelligence education program, marking a significant milestone in the country's journey toward digital transformation. This groundbreaking initiative aims to democratize AI education by bringing cutting-edge training opportunities to youth and teachers across all regions of Armenia.</p>
      
      <p>The program, developed in partnership with leading educational institutions and technology companies, offers structured learning paths designed to meet the diverse needs of Armenia's educational landscape. From foundational AI concepts to advanced machine learning techniques, participants will gain practical skills that prepare them for the rapidly evolving digital economy.</p>
      
      <h3>Comprehensive Program Structure</h3>
      <p>The AI4ALL Armenia initiative consists of two main tracks:</p>
      <ul>
        <li><strong>AI for Youth (Ages 15-29):</strong> A comprehensive 6-month program focusing on practical AI applications, coding fundamentals, and project-based learning</li>
        <li><strong>AI for Teachers:</strong> Professional development workshops designed to help educators integrate AI tools into their teaching methodologies</li>
      </ul>
      
      <p>Both programs emphasize hands-on learning experiences, with participants working on real-world projects that address local challenges and opportunities. The curriculum covers essential topics including machine learning fundamentals, data analysis, natural language processing, and ethical AI development.</p>
      
      <h3>National Reach and Impact</h3>
      <p>The initiative spans all regions of Armenia, with dedicated centers established in major cities including Yerevan, Gyumri, Vanadzor, and Goris. This decentralized approach ensures that participants from rural and urban areas alike have access to high-quality AI education.</p>
      
      <p>Regional coordinators work closely with local educational institutions to identify and support talented individuals who can become AI champions in their communities. The program also includes mentorship opportunities, connecting participants with industry professionals and academic experts.</p>
      
      <h3>Industry Partnerships</h3>
      <p>AI4ALL Armenia has established strategic partnerships with leading Armenian and international technology companies. These collaborations provide participants with internship opportunities, industry mentorship, and exposure to real-world AI applications in various sectors including healthcare, agriculture, finance, and manufacturing.</p>
      
      <p>The initiative has already garnered support from major tech companies operating in Armenia, who recognize the importance of building a skilled AI workforce for the country's digital future.</p>
      
      <h3>Looking Forward</h3>
      <p>The launch of AI4ALL Armenia represents a crucial step in positioning the country as a leader in AI education and innovation in the region. With over 1,000 participants expected in the first year, the program aims to create a generation of AI-literate citizens who can contribute to Armenia's technological advancement.</p>
      
      <p>Applications for the inaugural cohort are now open, with programs set to begin in January 2025. The initiative represents not just an educational program, but a movement toward a more innovative, technology-driven future for Armenia.</p>
    `
  },
  {
    id: 10,
    type: 'news',
    title: 'AI4ALL Armenia: Empowering Everyone with Artificial Intelligence',
    date: '2025-07-15',
    category: 'Program Overview',
    excerpt: 'Ձեռնարկությունների ինկուբատոր հիմնադրամի AI4ALL նախաձեռնությունը նպատակ ունի զինել մարդկանց AI գիտելիքներով և հմտություններով արդյունավետ կիրառման համար:',
    image: '/news/AI4ALL Armenia Launches Nationwide Initiative.png',
    author: 'EIF Armenia',
    tags: ['AI4ALL', 'Education', 'Armenia', 'EIF'],
    content: `
      <h3>AI4ALL - Արհեստական բանականությունը բոլորի համար</h3>
      <p>«Ձեռնարկությունների ինկուբատոր» հիմնադրամի (EIF) «AI4ALL»՝ «Արհեստական բանականությունը բոլորի համար» կրթական նախաձեռնությունը նպատակ ունի զինել տարբեր մասնագիտության և հետաքրքրությունների տեր մարդկանց գիտելիքներով և հմտություններով, որպեսզի ի վերջիններս կարողանան արդյունավետ կերպով կիրառել AI գործիքները և պատրաստ լինեն նոր փոփոխությունների։</p>
      
      <p>Նախաձեռնության դասընթացները և աշխատարաններն իրականացվում են հայերենով, մասնակիցների մատուցվում է ժամանակակից բովանդակություն։</p>
      
      <h3>Մեր տեսլականը</h3>
      <p>Մենք պատկերացնում ենք ներկա և ապագա, որտեղ՝</p>
      <ul>
        <li><strong>Երիտասարդը բովանդակություն է ստեղծում</strong> արհեստական բանականության գործիքներով</li>
        <li><strong>Ուսուցիչը բարելավում է ուսուցումը</strong>՝ օգտագործելով խելացի օգնականներ</li>
        <li><strong>Փոքր բիզնեսը ավտոմատացնում է ամենօրյա առաջադրանքները</strong>՝ ավելի խելացի աճելու համար</li>
        <li><strong>Հայաստանցի մասնագետը մրցում է համաշխարհային շուկայում</strong>՝ արհեստական բանականության հմտություններով</li>
      </ul>
      
      <h3>Ծրագրի առանձնահատկությունները</h3>
      <p>AI4ALL Armenia-ն առաջարկում է լայն սպեկտրի կրթական ծրագրեր, որոնք նախագծված են տարբեր խմբերի կարիքները բավարարելու համար։ Մեր ծրագրերը ներառում են՝</p>
      
      <h4>Պրակտիկ մոտեցում</h4>
      <ul>
        <li>Ռեալ նախագծերի վրա աշխատանք</li>
        <li>Ժամանակակից AI գործիքների օգտագործում</li>
        <li>Արդյունաբերության փորձագետների հետ հանդիպումներ</li>
        <li>Խմբային և անհատական աշխատանք</li>
      </ul>
      
      <h4>Հասանելի կրթություն</h4>
      <ul>
        <li>Դասընթացներն իրականացվում են հայերենով</li>
        <li>Անվճար մասնակցություն</li>
        <li>Օնլայն և ֆիզիկական ուսուցում</li>
        <li>Ճկուն գրաֆիկ</li>
      </ul>
      
      <h3>Հաջողության պատմություններ</h3>
      <p>Մեր մասնակիցները արդեն իսկ ցուցադրում են տպավորիչ արդյունքներ՝</p>
      <ul>
        <li>Ստեղծում են նորարարական AI լուծումներ տեղական խնդիրների համար</li>
        <li>Միանում են առաջատար տեխնոլոգիական ընկերություններին</li>
        <li>Սկսում են իրենց startup ծրագրերը</li>
        <li>Դառնում են AI դեսպաններ իրենց համայնքներում</li>
      </ul>
      
      <h3>Մեդիա և լրատվական անդրադարձ</h3>
      <p>AI4ALL Armenia-ի մասին լրատվական կառույցները և մեդիան ակտիվ գրում են։ Ներքևում տեսնում եք մի քանի կարևոր հղումներ՝</p>
      
      <h4>Հեռուստային հաղորդումներ</h4>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=egHbkaSYx6w" target="_blank">Արհեստական vs բանական | Լուսինե Ղուկասյան - ԱԲ-ն և կրթությունը․ AI4ALL ծրագիրը | Բուն TV</a></li>
        <li><a href="https://www.facebook.com/lurer1tv/videos/1744690016350601/" target="_blank">Արհեստական բանականությունը՝ դասապրոցեսում</a></li>
      </ul>
      
      <h4>Լրատվական հոդվածներ</h4>
      <ul>
        <li><a href="https://media.am/hy/newsroom/2025/06/23/43064/" target="_blank">Արհեստական բանականությունը դպրոցում․ ինչպես է փոխվում ուսուցչի դերը</a></li>
        <li><a href="https://arevik.armradio.am/2025/06/07/ai-" target="_blank">AI-ը մանկավարժների համար. ինչպե՞ս է ապագան գալիս դասարան</a></li>
        <li><a href="https://imradio.armradio.am/2025/03/29/it-" target="_blank">IT շաբաթ․ Արհեստական բանականությունը բոլորի համար</a></li>
      </ul>
      
      <h4>Բլոգային նյութեր</h4>
      <ul>
        <li><a href="https://blog.eif.am/hy/2025/06/02/ai4all" target="_blank">AI4all. Ինչպե՞ս է արհեստական բանակությունը փոխում կրթությունն ու աշխարհը</a></li>
        <li><a href="https://blog.eif.am/hy/2025/04/23/eif-ai4teachers/" target="_blank">EIF-ի AI4ALL նախաձեռնությունն ու մանկավարժները․ Ի՞նչ է մնում մեզ անել․ հարմարվել և սովորել</a></li>
      </ul>
      
      <h3>Միացե՛ք մեզ</h3>
      <p>AI4ALL Armenia-ն բաց է բոլորի համար, ովքեր ցանկանում են սովորել արհեստական բանականության մասին և կիրառել այն իրենց կարիերայում կամ բիզնեսում։ Մեր նպատակն է ապահովել, որ յուրաքանչյուր հայաստանցի ունենա հնարավորություն օգտվել AI-ի տրամադրած հնարավորություններից։</p>
      
      <p>Լրացուցիչ տեղեկությունների համար այցելեք մեր կայք կամ հետևեք մեր սոցիալական ցանցերում։</p>
    `
  },
  {
    id: 2,
    type: 'news',
    title: 'EIF\'s AI4ALL Initiative and Teachers: "What is left for us to do? Adapt and learn."',
    date: '2025-04-23',
    category: 'Teacher Stories',
    excerpt: 'Karine Mayilyan shares her transformative experience with ChatGPT and AI tools in education, highlighting the importance of adaptation in the digital age.',
    image: '/news/EIF\'s AI4ALL Initiative and Teachers Adapt.png',
    author: 'Karine Mayilyan',
    tags: ['Teachers', 'AI Tools', 'Education', 'Adaptation'],
    content: `
      <p>As an educator with over 15 years of experience, I never imagined that artificial intelligence would become such an integral part of my teaching practice. When I first heard about AI4ALL Armenia's teacher training program, I was skeptical. How could a machine possibly understand the nuances of human learning and creativity?</p>
      
      <p>My journey with AI began six months ago when I reluctantly attended my first AI4ALL workshop. The facilitator introduced us to ChatGPT, and I watched in amazement as it generated lesson plans, created assessment rubrics, and even suggested creative writing prompts that were surprisingly insightful.</p>
      
      <h3>The Initial Resistance</h3>
      <p>Like many of my colleagues, my first reaction was fear. "What is left for us to do if AI can do all of this?" I asked myself. The traditional role of the teacher as the primary source of knowledge seemed to be under threat. Were we becoming obsolete in our own classrooms?</p>
      
      <p>This concern was shared by many educators in our program. We had spent decades perfecting our craft, developing our own teaching methods, and building relationships with students. The idea that a computer program could replicate or even improve upon our work was both fascinating and terrifying.</p>
      
      <h3>A Paradigm Shift</h3>
      <p>The breakthrough came during our third workshop when our instructor, Dr. Armen Sarkissian, challenged us to think differently about AI. "AI is not here to replace teachers," he explained. "It's here to amplify our capabilities and free us to focus on what we do best – inspiring, mentoring, and connecting with our students."</p>
      
      <p>This perspective shift was transformative. Instead of seeing AI as a threat, I began to view it as a powerful teaching assistant that could help me become more effective in the classroom.</p>
      
      <h3>Practical Applications</h3>
      <p>Over the following months, I experimented with various AI tools in my English literature classes:</p>
      <ul>
        <li><strong>Personalized Learning:</strong> Using AI to create differentiated assignments based on individual student needs and learning styles</li>
        <li><strong>Creative Writing Support:</strong> Helping students overcome writer's block by using AI as a brainstorming partner</li>
        <li><strong>Assessment Efficiency:</strong> Utilizing AI to provide initial feedback on essays, allowing me to focus on higher-order thinking skills</li>
        <li><strong>Lesson Planning:</strong> Generating multiple activity options for different learning objectives</li>
      </ul>
      
      <h3>Student Engagement</h3>
      <p>Perhaps the most surprising outcome was how enthusiastic my students became about learning when AI was integrated thoughtfully into our lessons. They weren't just passive recipients of information; they became active collaborators in the learning process.</p>
      
      <p>One memorable project involved students using AI to research and present on Armenian historical figures. The AI helped them generate initial research questions, but they had to verify information, conduct additional research, and present their findings creatively. The quality of their work exceeded my expectations.</p>
      
      <h3>The Human Touch</h3>
      <p>What I've learned is that AI enhances rather than replaces the human elements of teaching. While AI can generate content and provide instant feedback, it cannot:</p>
      <ul>
        <li>Understand the emotional needs of a struggling student</li>
        <li>Provide the encouragement needed during difficult moments</li>
        <li>Celebrate achievements in a meaningful way</li>
        <li>Build the trust and rapport that are essential for effective learning</li>
      </ul>
      
      <h3>Adapting and Learning</h3>
      <p>The question "What is left for us to do?" now has a clear answer: Adapt and learn. Our role as educators is evolving, not disappearing. We must become facilitators of learning, critical thinking guides, and emotional supporters for our students.</p>
      
      <p>The AI4ALL Armenia program has taught me that professional development is not just about keeping up with technology – it's about reimagining our role in education. We must model lifelong learning for our students by embracing new tools and methodologies.</p>
      
      <h3>A Message to Fellow Educators</h3>
      <p>To my fellow teachers who may be hesitant about AI integration, I encourage you to take the leap. The future of education is not about choosing between human teachers and AI – it's about combining the best of both worlds to create more effective, engaging, and personalized learning experiences.</p>
      
      <p>The AI4ALL Armenia initiative has shown me that adaptation is not just necessary; it's exciting. By embracing AI as a tool rather than fearing it as a replacement, we can become better educators and better serve our students in preparing them for their future.</p>
      
      <p>As I continue to learn and grow with AI, I'm reminded that the most important skill we can teach our students – and model ourselves – is the ability to adapt, learn, and thrive in an ever-changing world.</p>
    `
  },
  {
    id: 3,
    type: 'news',
    title: 'AI4ALL: How Artificial Intelligence is Changing Education and Work',
    date: '2025-06-02',
    category: 'Industry Impact',
    excerpt: 'A comprehensive look at how AI is transforming both educational methodologies and workplace dynamics, with insights from AI4ALL Armenia participants.',
    image: '/news/How Artificial Intelligence is Changing Education.png',
    author: 'AI4ALL Armenia Team',
    tags: ['AI', 'Education', 'Future of Work', 'Digital Transformation'],
    content: `
      <p>The rapid advancement of artificial intelligence is fundamentally reshaping how we learn, teach, and work. As AI4ALL Armenia continues to expand its reach across the country, we're witnessing firsthand the transformative impact of AI education on both individual careers and broader societal structures.</p>
      
      <p>This comprehensive analysis explores the multifaceted ways AI is revolutionizing education and work, drawing from the experiences of over 2,000 AI4ALL Armenia participants and the insights of leading experts in the field.</p>
      
      <h3>The Educational Revolution</h3>
      <p>Traditional educational models, built on standardized curricula and one-size-fits-all approaches, are giving way to personalized, adaptive learning experiences. AI is not just changing what we learn, but how we learn.</p>
      
      <h4>Personalized Learning Paths</h4>
      <p>AI-powered educational platforms can analyze individual learning patterns, identify knowledge gaps, and adapt content delivery in real-time. Our participants report 40% faster learning speeds when using AI-assisted study methods compared to traditional approaches.</p>
      
      <p>Mariam Ghazaryan, a 19-year-old participant from Gyumri, shares her experience: "The AI tutoring system identified that I learn visual concepts better through interactive diagrams. It automatically adjusted my machine learning course to include more visual elements, and my comprehension improved dramatically."</p>
      
      <h4>Democratizing Access to Quality Education</h4>
      <p>AI is breaking down geographical and economic barriers to education. High-quality AI tutors and educational content are becoming accessible to students in remote areas of Armenia, providing opportunities previously available only in major cities.</p>
      
      <p>Our regional programs in Kapan, Goris, and Vanadzor have shown that students from smaller cities can achieve learning outcomes comparable to their counterparts in Yerevan when provided with AI-enhanced educational tools.</p>
      
      <h3>Transforming Teaching Methodologies</h3>
      <p>Educators are discovering that AI doesn't replace teachers but amplifies their capabilities. Our teacher training programs have equipped over 500 educators with AI tools that enhance their teaching effectiveness.</p>
      
      <h4>Automated Administrative Tasks</h4>
      <p>AI handles routine tasks such as grading, attendance tracking, and basic student inquiries, freeing teachers to focus on higher-value activities like mentoring, creative lesson planning, and providing emotional support to students.</p>
      
      <h4>Enhanced Content Creation</h4>
      <p>Teachers now use AI to generate diverse learning materials, create assessment questions, and develop interactive content. This has led to more engaging and varied classroom experiences.</p>
      
      <h3>The Changing Landscape of Work</h3>
      <p>The workplace transformation brought by AI is equally profound. Our alumni are entering a job market where AI literacy is increasingly essential across all sectors.</p>
      
      <h4>Emerging Job Categories</h4>
      <p>New roles are emerging that didn't exist five years ago:</p>
      <ul>
        <li><strong>AI Trainers:</strong> Professionals who teach AI systems to perform specific tasks</li>
        <li><strong>AI Ethicists:</strong> Experts who ensure AI systems are developed and deployed responsibly</li>
        <li><strong>Human-AI Collaboration Specialists:</strong> Professionals who optimize human-AI team dynamics</li>
        <li><strong>AI Product Managers:</strong> Leaders who guide AI-powered product development</li>
      </ul>
      
      <h4>Traditional Roles Evolving</h4>
      <p>Rather than disappearing, many traditional roles are evolving to incorporate AI capabilities:</p>
      <ul>
        <li><strong>Healthcare:</strong> Doctors using AI for diagnosis and treatment planning</li>
        <li><strong>Finance:</strong> Analysts leveraging AI for risk assessment and investment decisions</li>
        <li><strong>Marketing:</strong> Professionals using AI for customer insights and campaign optimization</li>
        <li><strong>Manufacturing:</strong> Engineers working with AI-powered predictive maintenance systems</li>
      </ul>
      
      <h3>Skills for the AI Era</h3>
      <p>Our program emphasizes developing skills that remain uniquely human while building AI literacy:</p>
      
      <h4>Technical Skills</h4>
      <ul>
        <li>Programming and data analysis</li>
        <li>Machine learning fundamentals</li>
        <li>AI tool integration and optimization</li>
        <li>Data visualization and interpretation</li>
      </ul>
      
      <h4>Human Skills</h4>
      <ul>
        <li>Critical thinking and problem-solving</li>
        <li>Emotional intelligence and empathy</li>
        <li>Creativity and innovation</li>
        <li>Communication and collaboration</li>
      </ul>
      
      <h3>Real-World Impact Stories</h3>
      <p>The transformative power of AI education is best illustrated through the success stories of our participants:</p>
      
      <h4>Armen Petrosyan - Agricultural Innovation</h4>
      <p>A farmer from Ararat region, Armen used AI to develop a crop monitoring system that increased his yield by 30% while reducing water usage by 25%. His innovation is now being adopted by other farmers in the region.</p>
      
      <h4>Sona Harutyunyan - Healthcare Solutions</h4>
      <p>A medical student from Yerevan, Sona developed an AI-powered diagnostic tool for early detection of diabetic retinopathy. Her project has attracted interest from healthcare institutions across Armenia.</p>
      
      <h4>Davit Martirosyan - Education Technology</h4>
      <p>A teacher from Vanadzor, Davit created an AI-powered language learning app specifically designed for Armenian students learning English. The app has been downloaded over 10,000 times and is being used in schools nationwide.</p>
      
      <h3>Challenges and Considerations</h3>
      <p>While the benefits of AI in education and work are substantial, we must also address several challenges:</p>
      
      <h4>Digital Divide</h4>
      <p>Ensuring equitable access to AI tools and education remains a priority. We're working to bridge the digital divide through partnerships with local governments and NGOs.</p>
      
      <h4>Ethical Considerations</h4>
      <p>As AI becomes more prevalent, understanding its ethical implications becomes crucial. Our curriculum includes mandatory modules on AI ethics and responsible AI development.</p>
      
      <h4>Job Displacement Concerns</h4>
      <p>While AI creates new opportunities, it also poses challenges for workers in certain sectors. Our retraining programs help professionals transition to AI-augmented roles.</p>
      
      <h3>The Future of Learning and Work</h3>
      <p>Looking ahead, we anticipate several key trends:</p>
      
      <h4>Continuous Learning</h4>
      <p>The pace of technological change necessitates lifelong learning. AI will play a crucial role in making continuous education more accessible and effective.</p>
      
      <h4>Human-AI Collaboration</h4>
      <p>The future workplace will be characterized by seamless collaboration between humans and AI systems, with each contributing their unique strengths.</p>
      
      <h4>Personalized Career Development</h4>
      <p>AI will help individuals identify career paths that align with their interests, skills, and market demand, providing personalized guidance for professional development.</p>
      
      <h3>Preparing for Tomorrow</h3>
      <p>The transformation of education and work by AI is not a distant future scenario – it's happening now. AI4ALL Armenia is committed to ensuring that our participants are not just prepared for this change but are leaders in shaping it.</p>
      
      <p>By combining technical AI skills with uniquely human capabilities like creativity, empathy, and critical thinking, we're building a workforce that can thrive in an AI-augmented world.</p>
      
      <p>The journey of AI transformation in education and work is just beginning. As we continue to explore and adapt to these changes, one thing remains clear: the future belongs to those who can effectively collaborate with AI while maintaining the human touch that makes learning and work meaningful.</p>
      
      <p>Join us in this exciting journey as we shape the future of education and work in Armenia. Together, we can ensure that AI serves humanity's best interests while creating opportunities for growth, innovation, and prosperity.</p>
    `
  },
  {
    id: 4,
    type: 'news',
    title: 'U.S. Company Plans 100MW AI Data Center in Armenia',
    date: '2025-07-11',
    category: 'Industry News',
    excerpt: 'Major AI infrastructure investment signals growing confidence in Armenia\'s tech ecosystem, creating new opportunities for AI4ALL Armenia graduates.',
    image: '/news/U.S. Company Plans 100MW AI Data Center in Armenia.png',
    author: 'Tech Armenia',
    tags: ['Data Center', 'Investment', 'AI Infrastructure', 'Tech Industry'],
    content: `
      <p>In a significant vote of confidence for Armenia's growing technology sector, a major U.S. technology company has announced plans to establish a 100-megawatt AI data center in Armenia. This landmark investment represents one of the largest technology infrastructure projects in the country's history and signals Armenia's emergence as a regional hub for AI and advanced computing.</p>
      
      <p>The announcement comes at a crucial time for Armenia's tech ecosystem, as the country continues to build its reputation as a destination for high-tech investment and innovation. The new data center will not only provide critical infrastructure for AI development but also create numerous employment opportunities for Armenia's growing pool of AI-skilled professionals.</p>
      
      <h3>Strategic Infrastructure Investment</h3>
      <p>The planned facility will be one of the most advanced AI data centers in the South Caucasus region, featuring cutting-edge cooling systems, renewable energy integration, and state-of-the-art security measures. The 100MW capacity will make it capable of supporting large-scale AI training and inference operations.</p>
      
      <p>Key features of the planned facility include:</p>
      <ul>
        <li>Advanced GPU clusters optimized for machine learning workloads</li>
        <li>Sustainable energy sourcing with planned solar and wind integration</li>
        <li>Redundant connectivity to ensure 99.99% uptime</li>
        <li>Compliance with international data protection standards</li>
      </ul>
      
      <h3>Impact on Armenia's Tech Ecosystem</h3>
      <p>The data center project is expected to create over 500 direct jobs and thousands of indirect employment opportunities. More importantly, it will provide local AI companies and startups with access to world-class computing infrastructure that was previously available only in major tech hubs.</p>
      
      <p>Dr. Armen Sarkissian, Director of AI4ALL Armenia, commented: "This investment validates our vision of Armenia as a leader in AI education and innovation. Our graduates will have unprecedented opportunities to work with cutting-edge technology right here in Armenia."</p>
      
      <h3>Opportunities for AI4ALL Armenia Graduates</h3>
      <p>The company has already expressed interest in partnering with AI4ALL Armenia to recruit qualified professionals. Specific opportunities include:</p>
      <ul>
        <li><strong>Data Center Operations:</strong> Monitoring and maintaining AI infrastructure</li>
        <li><strong>AI Engineering:</strong> Developing and optimizing AI models</li>
        <li><strong>DevOps and Cloud Services:</strong> Managing cloud infrastructure and deployment</li>
        <li><strong>Technical Support:</strong> Providing specialized AI technical assistance</li>
      </ul>
      
      <h3>Regional Implications</h3>
      <p>The investment is part of a broader trend of international technology companies recognizing Armenia's potential as a regional technology hub. The country's skilled workforce, competitive costs, and strategic location make it an attractive destination for tech investments.</p>
      
      <p>Government officials have indicated that this project could be the first of several major technology infrastructure investments, with additional data centers and research facilities under consideration.</p>
      
      <h3>Environmental Considerations</h3>
      <p>The project includes significant commitments to environmental sustainability, with plans to achieve carbon neutrality by 2030. The facility will utilize Armenia's renewable energy resources and implement advanced cooling technologies to minimize environmental impact.</p>
      
      <h3>Timeline and Next Steps</h3>
      <p>Construction is expected to begin in early 2026, with the first phase operational by 2027. The company is currently working with local authorities on regulatory approvals and site preparation.</p>
      
      <p>AI4ALL Armenia is collaborating with the company to develop specialized training programs that will prepare graduates for the specific technical requirements of AI data center operations. This partnership ensures that local talent will be ready to support the facility from day one.</p>
      
      <p>This investment represents more than just infrastructure – it's a testament to Armenia's growing position in the global AI landscape and a bright future for the country's technology sector.</p>
    `
  },
  {
    id: 5,
    type: 'news',
    title: 'AI4ALL Global Announces $2M Google.org Grant for Future of AI Education',
    date: '2025-06-09',
    category: 'Global Impact',
    excerpt: 'The global AI4ALL organization receives major funding to expand AI education initiatives, including support for programs like AI4ALL Armenia.',
    image: '/news/AI4ALL Global Announces $2M Google.org.png',
    author: 'AI4ALL Global',
    tags: ['Funding', 'Global Impact', 'AI Education', 'Google.org'],
    content: `
      <p>AI4ALL Global has announced a groundbreaking $2 million grant from Google.org to accelerate AI education initiatives worldwide. This significant funding will support the expansion of AI education programs across multiple countries, including substantial support for AI4ALL Armenia's innovative educational model.</p>
      
      <p>The grant represents one of the largest investments in AI education accessibility and will enable AI4ALL to reach underserved communities, develop new curriculum materials, and create sustainable pathways for AI career development globally.</p>
      
      <h3>Global Impact Initiative</h3>
      <p>The Google.org grant will fund a comprehensive three-year initiative focused on democratizing AI education in underrepresented regions. The program aims to:</p>
      <ul>
        <li>Train over 10,000 students and educators across 15 countries</li>
        <li>Develop localized AI curriculum for different cultural contexts</li>
        <li>Create sustainable career pathways in AI for program graduates</li>
        <li>Build partnerships with local technology companies and educational institutions</li>
      </ul>
      
      <h3>Support for AI4ALL Armenia</h3>
      <p>As part of this global initiative, AI4ALL Armenia will receive dedicated funding to expand its programs and enhance educational quality. Specific areas of support include:</p>
      
      <h4>Curriculum Development</h4>
      <p>Development of Armenian-language AI educational materials and culturally relevant case studies that connect AI concepts to local challenges and opportunities.</p>
      
      <h4>Infrastructure Enhancement</h4>
      <p>Upgrading technology infrastructure in regional centers to provide participants with access to high-performance computing resources necessary for advanced AI training.</p>
      
      <h4>Teacher Training Expansion</h4>
      <p>Scaling the successful AI for Teachers program to reach educators in all Armenian provinces, with specialized training modules for different subject areas.</p>
      
      <h4>Industry Partnerships</h4>
      <p>Facilitating connections between AI4ALL Armenia graduates and international technology companies, creating pathways for career advancement and entrepreneurship.</p>
      
      <h3>Innovation in AI Education</h3>
      <p>The grant will support the development of innovative educational approaches that make AI learning more accessible and engaging:</p>
      
      <h4>Gamified Learning Platforms</h4>
      <p>Creation of interactive, game-based learning experiences that make complex AI concepts more approachable for young learners.</p>
      
      <h4>Virtual Reality Training</h4>
      <p>Development of VR-based training modules that allow students to visualize and interact with AI systems in immersive environments.</p>
      
      <h4>Peer-to-Peer Learning Networks</h4>
      <p>Establishment of global networks connecting AI4ALL participants from different countries, enabling collaborative learning and cultural exchange.</p>
      
      <h3>Addressing Global Challenges</h3>
      <p>The initiative recognizes that AI education must address real-world challenges relevant to each region. For AI4ALL Armenia, this includes:</p>
      
      <h4>Agricultural Innovation</h4>
      <p>AI applications in precision agriculture, crop monitoring, and sustainable farming practices relevant to Armenia's agricultural sector.</p>
      
      <h4>Healthcare Technology</h4>
      <p>AI solutions for healthcare challenges specific to Armenia, including telemedicine and diagnostic support for rural areas.</p>
      
      <h4>Cultural Preservation</h4>
      <p>AI applications in preserving and promoting Armenian cultural heritage through digital archives and language processing technologies.</p>
      
      <h3>Measuring Impact</h3>
      <p>The Google.org grant includes comprehensive impact measurement requirements to ensure effective use of funds:</p>
      
      <h4>Quantitative Metrics</h4>
      <ul>
        <li>Number of students and educators trained</li>
        <li>Employment rates of program graduates</li>
        <li>Salary improvements for participants</li>
        <li>Number of AI projects developed by participants</li>
      </ul>
      
      <h4>Qualitative Assessments</h4>
      <ul>
        <li>Participant satisfaction and confidence levels</li>
        <li>Long-term career trajectory changes</li>
        <li>Community impact of graduate-led projects</li>
        <li>Feedback from employer partners</li>
      </ul>
      
      <h3>Sustainability and Long-term Vision</h3>
      <p>Beyond the three-year grant period, the initiative aims to create self-sustaining AI education ecosystems in each participating region. For Armenia, this includes:</p>
      
      <h4>Local Expertise Development</h4>
      <p>Training local instructors to become certified AI educators, reducing dependence on external trainers and ensuring program continuity.</p>
      
      <h4>Industry Integration</h4>
      <p>Establishing formal partnerships with Armenian technology companies to provide ongoing internship and employment opportunities for graduates.</p>
      
      <h4>Academic Partnerships</h4>
      <p>Collaborating with Armenian universities to integrate AI4ALL curriculum into formal academic programs.</p>
      
      <h3>Global Collaboration</h3>
      <p>The grant facilitates collaboration between AI4ALL programs worldwide, creating opportunities for knowledge sharing and best practice exchange. Armenian participants will have access to:</p>
      <ul>
        <li>International mentorship programs</li>
        <li>Global AI project competitions</li>
        <li>Cross-cultural collaboration opportunities</li>
        <li>Access to international job markets</li>
      </ul>
      
      <h3>Community Response</h3>
      <p>The announcement has generated significant excitement within Armenia's technology community. Local industry leaders have expressed enthusiasm for the expanded opportunities this funding will create.</p>
      
      <p>Tatevik Gasparyan, CEO of a prominent Armenian tech startup, commented: "This investment will accelerate Armenia's position as a regional AI hub. We're already seeing the quality of talent coming from AI4ALL Armenia, and this expanded program will only strengthen our technology ecosystem."</p>
      
      <h3>Looking Forward</h3>
      <p>The Google.org grant represents a significant milestone in AI4ALL's mission to democratize AI education globally. For Armenia, it provides the resources necessary to transform from a program with regional impact to a model that can be replicated worldwide.</p>
      
      <p>As AI continues to shape the future of work and society, initiatives like this ensure that the benefits of AI advancement are shared globally, not concentrated in traditional technology centers. The success of AI4ALL Armenia serves as inspiration for similar programs worldwide, demonstrating that with the right support and vision, any country can participate in the AI revolution.</p>
      
      <p>Applications for the expanded AI4ALL Armenia program will open in September 2025, with new cohorts beginning in January 2026. The program remains free for all participants, thanks to the generous support of Google.org and other partners.</p>
    `
  },
  {
    id: 7,
    type: 'announcement',
    title: 'Youth Program Applications Now Open',
    date: '2025-08-01',
    category: 'Application',
    excerpt: 'Applications for the Fall 2025 AI for Youth program are now open. Early bird deadline is August 15th.',
    image: '/news/Youth Program Applications Now Open.png',
    author: 'AI4ALL Armenia Team',
    tags: ['Applications', 'Youth Program', 'Early Bird', 'Fall 2025'],
    content: `
      <p>We are excited to announce that applications for the Fall 2025 AI for Youth program are now officially open! This comprehensive 6-month program is designed for young people aged 15-29 who are eager to dive into the world of artificial intelligence and build the skills needed for the future job market.</p>
      
      <h3>Program Overview</h3>
      <p>The AI for Youth program offers a structured learning path that takes participants from AI fundamentals to advanced project development. The curriculum includes:</p>
      <ul>
        <li>Introduction to AI and Machine Learning concepts</li>
        <li>Programming fundamentals (Python, data structures)</li>
        <li>Hands-on projects with real-world applications</li>
        <li>Industry mentorship and career guidance</li>
        <li>Soft skills development and teamwork</li>
      </ul>
      
      <h3>What's New for Fall 2025</h3>
      <p>This upcoming cohort introduces several exciting enhancements:</p>
      
      <h4>Expanded Regional Access</h4>
      <p>We're adding new learning centers in Kapan, Goris, and Alaverdi to better serve participants from southern and northern regions of Armenia.</p>
      
      <h4>Industry Partnerships</h4>
      <p>New partnerships with 15 Armenian and international tech companies provide expanded internship and job placement opportunities.</p>
      
      <h4>Specialized Tracks</h4>
      <p>Participants can now choose from specialized tracks in:</p>
      <ul>
        <li>AI for Agriculture and Environmental Sciences</li>
        <li>AI for Healthcare and Biotechnology</li>
        <li>AI for Creative Industries and Media</li>
        <li>AI for Finance and Business Analytics</li>
      </ul>
      
      <h3>Application Process</h3>
      <p>The application process is designed to be accessible and straightforward:</p>
      
      <h4>Step 1: Online Application</h4>
      <p>Complete the online application form available on our website. No prior programming experience is required, but a passion for learning and technology is essential.</p>
      
      <h4>Step 2: Assessment</h4>
      <p>Take a brief online assessment that evaluates logical thinking, problem-solving skills, and basic mathematics. This helps us understand your learning style and place you in the most suitable track.</p>
      
      <h4>Step 3: Interview</h4>
      <p>Participate in a virtual interview with our admissions team. This is an opportunity to discuss your interests, goals, and motivation for joining the program.</p>
      
      <h3>Important Dates</h3>
      <ul>
        <li><strong>Early Bird Deadline:</strong> August 15, 2025</li>
        <li><strong>Final Application Deadline:</strong> September 15, 2025</li>
        <li><strong>Interview Period:</strong> August 20 - September 30, 2025</li>
        <li><strong>Acceptance Notifications:</strong> October 1-15, 2025</li>
        <li><strong>Program Start:</strong> November 1, 2025</li>
      </ul>
      
      <h3>Early Bird Benefits</h3>
      <p>Applications submitted by August 15th qualify for early bird benefits:</p>
      <ul>
        <li>Priority consideration for preferred learning tracks</li>
        <li>Access to exclusive pre-program preparation materials</li>
        <li>Invitation to virtual meetups with current participants</li>
        <li>Early access to mentorship matching</li>
      </ul>
      
      <h3>Financial Support</h3>
      <p>The program remains completely free for all participants, thanks to support from Google.org and other generous partners. Additional support is available for:</p>
      <ul>
        <li>Transportation assistance for participants from remote areas</li>
        <li>Laptop lending program for those who need equipment</li>
        <li>Childcare support for young parents</li>
        <li>Flexible scheduling for working participants</li>
      </ul>
      
      <h3>Success Stories</h3>
      <p>Our previous cohorts have achieved remarkable success:</p>
      <ul>
        <li>85% of graduates found employment or internships within 6 months</li>
        <li>Average salary increase of 150% for employed participants</li>
        <li>Over 50 innovative AI projects developed by participants</li>
        <li>15 participants launched their own AI-focused startups</li>
      </ul>
      
      <h3>Application Requirements</h3>
      <p>To be eligible for the program, applicants must:</p>
      <ul>
        <li>Be between 15-29 years old</li>
        <li>Be a resident of Armenia</li>
        <li>Have completed high school or equivalent</li>
        <li>Demonstrate basic computer literacy</li>
        <li>Show commitment to completing the full 6-month program</li>
      </ul>
      
      <h3>How to Apply</h3>
      <p>Ready to start your AI journey? Visit our website at [website] to:</p>
      <ul>
        <li>Complete the online application form</li>
        <li>Upload required documents (ID, education certificates)</li>
        <li>Schedule your assessment and interview</li>
        <li>Connect with our admissions team for questions</li>
      </ul>
      
      <p>Don't miss this opportunity to be part of Armenia's AI revolution. Apply today and join a community of young innovators who are shaping the future of technology in Armenia and beyond!</p>
      
      
    `
  },
  {
    id: 8,
    type: 'announcement',
    title: 'New Partnership with Armenian Tech Companies',
    date: '2025-07-20',
    category: 'Partnership',
    excerpt: 'AI4ALL Armenia announces strategic partnerships with leading Armenian tech companies to provide internship opportunities.',
    image: '/news/New Partnership with Armenian Tech Companies.jpeg',
    author: 'AI4ALL Armenia Team',
    tags: ['Partnership', 'Internships', 'Tech Companies', 'Career Development'],
    content: `
      <p>AI4ALL Armenia is proud to announce the establishment of strategic partnerships with 15 leading Armenian technology companies, creating unprecedented opportunities for our program participants to gain real-world experience and launch their careers in the rapidly growing AI sector.</p>
      
      <p>These partnerships represent a significant milestone in our mission to bridge the gap between AI education and industry needs, ensuring that our graduates are not only well-trained but also have clear pathways to meaningful employment in Armenia's thriving tech ecosystem.</p>
      
      <h3>Partner Companies</h3>
      <p>Our new partner network includes some of Armenia's most innovative and successful technology companies:</p>
      
      <h4>Software Development Companies</h4>
      <ul>
        <li><strong>EPAM Armenia:</strong> Global software development leader with major operations in Yerevan</li>
        <li><strong>Synopsys Armenia:</strong> Leading electronic design automation company</li>
        <li><strong>ServiceTitan:</strong> Unicorn startup providing software solutions for service businesses</li>
        <li><strong>Arca Space:</strong> Pioneering space technology and satellite solutions</li>
      </ul>
      
      <h4>AI and Data Analytics</h4>
      <ul>
        <li><strong>Krisp:</strong> AI-powered noise cancellation technology company</li>
        <li><strong>Teamable:</strong> AI-driven recruiting and talent intelligence platform</li>
        <li><strong>Sourceloop:</strong> Digital transformation and AI consulting firm</li>
      </ul>
      
      <h4>Fintech and Blockchain</h4>
      <ul>
        <li><strong>Viva Wallet Armenia:</strong> Digital payment solutions provider</li>
        <li><strong>Digitain:</strong> Gaming and sports betting technology platform</li>
      </ul>
      
      <h4>Healthcare Technology</h4>
      <ul>
        <li><strong>Medic Mobile Armenia:</strong> Healthcare technology for underserved communities</li>
        <li><strong>HealthTech Armenia:</strong> AI-powered diagnostic and treatment solutions</li>
      </ul>
      
      <h3>Partnership Benefits</h3>
      <p>These strategic partnerships provide comprehensive support for AI4ALL Armenia participants:</p>
      
      <h4>Internship Opportunities</h4>
      <p>Over 200 internship positions are available annually across partner companies, offering:</p>
      <ul>
        <li>3-6 month paid internships with potential for full-time conversion</li>
        <li>Mentorship from senior AI engineers and data scientists</li>
        <li>Real-world project experience with cutting-edge technologies</li>
        <li>Professional development and technical skill building</li>
      </ul>
      
      <h4>Industry Mentorship</h4>
      <p>Each partner company provides experienced mentors who:</p>
      <ul>
        <li>Guide participants through industry-specific AI applications</li>
        <li>Provide career advice and professional networking opportunities</li>
        <li>Share insights about emerging trends and technologies</li>
        <li>Support project development and technical problem-solving</li>
      </ul>
      
      <h4>Curriculum Input</h4>
      <p>Partners actively contribute to curriculum development by:</p>
      <ul>
        <li>Identifying key skills and competencies needed in the industry</li>
        <li>Providing real-world case studies and project challenges</li>
        <li>Offering guest lectures and technical workshops</li>
        <li>Updating curriculum to reflect latest industry trends</li>
      </ul>
      
      <h3>Career Pathways</h3>
      <p>The partnerships create clear career progression paths for participants:</p>
      
      <h4>Entry-Level Positions</h4>
      <ul>
        <li>Junior AI Engineer</li>
        <li>Data Analyst</li>
        <li>Machine Learning Engineer</li>
        <li>AI Product Assistant</li>
      </ul>
      
      <h4>Mid-Level Opportunities</h4>
      <ul>
        <li>Senior AI Developer</li>
        <li>Data Scientist</li>
        <li>AI Project Manager</li>
        <li>Technical Team Lead</li>
      </ul>
      
      <h4>Advanced Roles</h4>
      <ul>
        <li>AI Research Scientist</li>
        <li>Machine Learning Architect</li>
        <li>AI Strategy Consultant</li>
        <li>Chief Technology Officer</li>
      </ul>
      
      <h3>Success Stories</h3>
      <p>Several AI4ALL Armenia graduates have already benefited from these partnerships:</p>
      
      <h4>Ani Vardanyan - Krisp</h4>
      <p>After completing the AI for Youth program, Ani joined Krisp as a junior machine learning engineer. She now works on improving the company's noise cancellation algorithms and has contributed to three patent applications.</p>
      
      <h4>Hakob Grigoryan - ServiceTitan</h4>
      <p>Hakob's internship project at ServiceTitan involved developing predictive maintenance algorithms for HVAC systems. His work was so impressive that he was offered a full-time position as an AI engineer.</p>
      
      <h4>Mariam Ghazaryan - EPAM</h4>
      <p>Starting as an intern, Mariam quickly advanced to a senior developer role at EPAM, where she leads AI integration projects for international clients.</p>
      
      <h3>Application Process</h3>
      <p>Participants can apply for partnership opportunities through:</p>
      
      <h4>During Program</h4>
      <ul>
        <li>Career counseling sessions to identify suitable opportunities</li>
        <li>Portfolio development workshops to prepare for applications</li>
        <li>Mock interviews and technical assessments</li>
        <li>Direct introductions to partner company representatives</li>
      </ul>
      
      <h4>After Graduation</h4>
      <ul>
        <li>Ongoing career support and job placement assistance</li>
        <li>Alumni network connections and referrals</li>
        <li>Continued access to partner company job postings</li>
        <li>Professional development opportunities and skill updates</li>
      </ul>
      
      <h3>Impact on Armenia's Tech Ecosystem</h3>
      <p>These partnerships contribute to the broader development of Armenia's technology sector by:</p>
      <ul>
        <li>Reducing the skills gap in AI and machine learning</li>
        <li>Encouraging more young people to pursue tech careers</li>
        <li>Strengthening connections between education and industry</li>
        <li>Promoting innovation and entrepreneurship in AI</li>
      </ul>
      
      <h3>Future Expansion</h3>
      <p>We are actively working to expand our partner network with additional companies in:</p>
      <ul>
        <li>International corporations with Armenian offices</li>
        <li>Emerging startups in AI and deep tech</li>
        <li>Government agencies implementing AI initiatives</li>
        <li>Academic institutions conducting AI research</li>
      </ul>
      
      <p>These partnerships represent a crucial step in ensuring that AI4ALL Armenia participants have access to the best career opportunities in Armenia's growing technology sector. We are committed to continuing to build bridges between education and industry, creating a sustainable pipeline of AI talent that will drive Armenia's digital transformation.</p>
      
      <p>Current and prospective participants interested in learning more about partnership opportunities should contact our career services team at careers@ai4all.am.</p>
    `
  },
  {
    id: 9,
    type: 'announcement',
    title: 'Summer Break Schedule - Programs Resume September 1st',
    date: '2025-07-15',
    category: 'Schedule',
    excerpt: 'All regular programs will take a summer break from July 20th to August 31st. Special summer workshops continue.',
    image: '/news/Summer Break Schedule - Programs Resume September 1st.png',
    author: 'AI4ALL Armenia Team',
    tags: ['Schedule', 'Summer Break', 'Workshops', 'Program Updates'],
    content: `
      <p>As we approach the summer season, AI4ALL Armenia is implementing a temporary schedule adjustment to accommodate the summer break period. We want to keep all participants, instructors, and stakeholders informed about the upcoming changes to our program schedule.</p>
      
      <h3>Summer Break Period</h3>
      <p>All regular AI4ALL Armenia programs will take a summer break from <strong>July 20th to August 31st, 2025</strong>. This break applies to:</p>
      <ul>
        <li>AI for Youth regular cohort sessions</li>
        <li>AI for Teachers professional development workshops</li>
        <li>Weekly mentorship meetings</li>
        <li>Regional center activities</li>
      </ul>
      
      <h3>Programs Resume September 1st</h3>
      <p>All regular programming will resume on <strong>September 1st, 2025</strong> with enhanced curriculum and new features based on participant feedback collected during the spring session.</p>
      
      <h3>Special Summer Workshops</h3>
      <p>While regular programs are on break, we're excited to offer special summer workshops that continue throughout the summer period:</p>
      
      <h4>AI Summer Camp for Youth (Ages 15-20)</h4>
      <ul>
        <li><strong>Dates:</strong> July 25-29, August 8-12, August 22-26</li>
        <li><strong>Duration:</strong> 5 days per session</li>
        <li><strong>Focus:</strong> Hands-on AI projects and creative applications</li>
        <li><strong>Location:</strong> Yerevan Tech Center</li>
      </ul>
      
      <h4>Teacher AI Integration Bootcamp</h4>
      <ul>
        <li><strong>Dates:</strong> August 1-5, August 15-19</li>
        <li><strong>Duration:</strong> 5 days per session</li>
        <li><strong>Focus:</strong> Integrating AI tools into classroom teaching</li>
        <li><strong>Location:</strong> Online and regional centers</li>
      </ul>
      
      <h4>AI for Agriculture Workshop</h4>
      <ul>
        <li><strong>Dates:</strong> July 28-30</li>
        <li><strong>Duration:</strong> 3 days</li>
        <li><strong>Focus:</strong> AI applications in farming and agriculture</li>
        <li><strong>Location:</strong> Ararat Agricultural Center</li>
      </ul>
      
      <h3>What to Expect When We Return</h3>
      <p>The fall session beginning September 1st will feature several exciting updates:</p>
      
      <h4>Enhanced Curriculum</h4>
      <ul>
        <li>New modules on large language models and generative AI</li>
        <li>Expanded project-based learning opportunities</li>
        <li>Industry-specific AI application tracks</li>
        <li>Advanced ethics and responsible AI development</li>
      </ul>
      
      <h4>New Technology Integration</h4>
      <ul>
        <li>Access to latest AI development tools and platforms</li>
        <li>Cloud computing resources for large-scale projects</li>
        <li>Virtual reality learning environments</li>
        <li>Collaborative coding and project management tools</li>
      </ul>
      
      <h4>Expanded Regional Presence</h4>
      <ul>
        <li>New learning centers in Kapan and Alaverdi</li>
        <li>Mobile learning units for rural areas</li>
        <li>Enhanced online learning capabilities</li>
        <li>Satellite workshops in partnership with local institutions</li>
      </ul>
      
      <h3>Summer Study Resources</h3>
      <p>To support continued learning during the break period, we're providing:</p>
      
      <h4>Online Learning Materials</h4>
      <ul>
        <li>Self-paced AI fundamentals courses</li>
        <li>Video tutorials and coding exercises</li>
        <li>Reading lists and research papers</li>
        <li>Practice problems and challenges</li>
      </ul>
      
      <h4>Community Support</h4>
      <ul>
        <li>Active online forums and discussion groups</li>
        <li>Virtual study groups and peer collaboration</li>
        <li>Monthly virtual meetups with instructors</li>
        <li>Access to mentorship through online platforms</li>
      </ul>
      
      <h3>Staff Development</h3>
      <p>During the summer break, our team will be:</p>
      <ul>
        <li>Attending international AI education conferences</li>
        <li>Participating in advanced training programs</li>
        <li>Developing new curriculum materials</li>
        <li>Planning strategic partnerships and expansions</li>
      </ul>
      
      <h3>Facility Maintenance</h3>
      <p>The break period will also allow us to:</p>
      <ul>
        <li>Upgrade technology infrastructure at all centers</li>
        <li>Expand and renovate learning spaces</li>
        <li>Install new equipment and software systems</li>
        <li>Improve accessibility and comfort features</li>
      </ul>
      
      <h3>Fall Registration</h3>
      <p>Registration for fall programs will open on August 1st, 2025:</p>
      <ul>
        <li><strong>AI for Youth:</strong> New cohort applications open</li>
        <li><strong>AI for Teachers:</strong> Professional development sessions</li>
        <li><strong>Advanced Programs:</strong> Specialized tracks for returning participants</li>
        <li><strong>Corporate Training:</strong> Customized programs for businesses</li>
      </ul>
      
      <h3>Contact Information</h3>
      <p>During the summer break, our team remains available for:</p>
      <ul>
        <li>General inquiries: info@ai4all.am</li>
        <li>Technical support: support@ai4all.am</li>
        <li>Summer workshop registration: workshops@ai4all.am</li>
        <li>Emergency contacts: Available on our website</li>
      </ul>
      
      <h3>Stay Connected</h3>
      <p>Follow us on social media for updates throughout the summer:</p>
      <ul>
        <li>Weekly progress updates on ongoing projects</li>
        <li>Summer workshop highlights and outcomes</li>
        <li>Preview of fall program enhancements</li>
        <li>Community achievements and success stories</li>
      </ul>
      
      <p>We look forward to reconvening on September 1st with renewed energy, enhanced programs, and exciting new opportunities for AI education in Armenia. Thank you for your continued support and participation in our mission to democratize AI education across the country.</p>
      
      <p>Enjoy your summer break, and we'll see you in September!</p>
    `
  },
  {
    id: 3,
    type: 'news',
    title: 'AI4ALL: How Artificial Intelligence is Changing Education and Work',
    date: '2025-06-02',
    category: 'Industry Impact',
    excerpt: 'A comprehensive look at how AI is transforming both educational methodologies and workplace dynamics, with insights from AI4ALL Armenia participants.',
    image: '/news/How Artificial Intelligence is Changing Education.png',
    author: 'AI4ALL Armenia Team',
    tags: ['AI', 'Education', 'Future of Work', 'Digital Transformation'],
    content: `
      <p>The rapid advancement of artificial intelligence is fundamentally reshaping how we learn, teach, and work. As AI4ALL Armenia continues to expand its reach across the country, we're witnessing firsthand the transformative impact of AI education on both individual careers and broader societal structures.</p>
      
      <p>This comprehensive analysis explores the multifaceted ways AI is revolutionizing education and work, drawing from the experiences of over 2,000 AI4ALL Armenia participants and the insights of leading experts in the field.</p>
      
      <h3>The Educational Revolution</h3>
      <p>Traditional educational models, built on standardized curricula and one-size-fits-all approaches, are giving way to personalized, adaptive learning experiences. AI is not just changing what we learn, but how we learn.</p>
      
      <h4>Personalized Learning Paths</h4>
      <p>AI-powered educational platforms can analyze individual learning patterns, identify knowledge gaps, and adapt content delivery in real-time. Our participants report 40% faster learning speeds when using AI-assisted study methods compared to traditional approaches.</p>
      
      <p>Mariam Ghazaryan, a 19-year-old participant from Gyumri, shares her experience: "The AI tutoring system identified that I learn visual concepts better through interactive diagrams. It automatically adjusted my machine learning course to include more visual elements, and my comprehension improved dramatically."</p>
      
      <h4>Democratizing Access to Quality Education</h4>
      <p>AI is breaking down geographical and economic barriers to education. High-quality AI tutors and educational content are becoming accessible to students in remote areas of Armenia, providing opportunities previously available only in major cities.</p>
      
      <p>Our regional programs in Kapan, Goris, and Vanadzor have shown that students from smaller cities can achieve learning outcomes comparable to their counterparts in Yerevan when provided with AI-enhanced educational tools.</p>
      
      <h3>Transforming Teaching Methodologies</h3>
      <p>Educators are discovering that AI doesn't replace teachers but amplifies their capabilities. Our teacher training programs have equipped over 500 educators with AI tools that enhance their teaching effectiveness.</p>
      
      <h4>Automated Administrative Tasks</h4>
      <p>AI handles routine tasks such as grading, attendance tracking, and basic student inquiries, freeing teachers to focus on higher-value activities like mentoring, creative lesson planning, and providing emotional support to students.</p>
      
      <h4>Enhanced Content Creation</h4>
      <p>Teachers now use AI to generate diverse learning materials, create assessment questions, and develop interactive content. This has led to more engaging and varied classroom experiences.</p>
      
      <h3>The Changing Landscape of Work</h3>
      <p>The workplace transformation brought by AI is equally profound. Our alumni are entering a job market where AI literacy is increasingly essential across all sectors.</p>
      
      <h4>Emerging Job Categories</h4>
      <p>New roles are emerging that didn't exist five years ago:</p>
      <ul>
        <li><strong>AI Trainers:</strong> Professionals who teach AI systems to perform specific tasks</li>
        <li><strong>AI Ethicists:</strong> Experts who ensure AI systems are developed and deployed responsibly</li>
        <li><strong>Human-AI Collaboration Specialists:</strong> Professionals who optimize human-AI team dynamics</li>
        <li><strong>AI Product Managers:</strong> Leaders who guide AI-powered product development</li>
      </ul>
      
      <h4>Traditional Roles Evolving</h4>
      <p>Rather than disappearing, many traditional roles are evolving to incorporate AI capabilities:</p>
      <ul>
        <li><strong>Healthcare:</strong> Doctors using AI for diagnosis and treatment planning</li>
        <li><strong>Finance:</strong> Analysts leveraging AI for risk assessment and investment decisions</li>
        <li><strong>Marketing:</strong> Professionals using AI for customer insights and campaign optimization</li>
        <li><strong>Manufacturing:</strong> Engineers working with AI-powered predictive maintenance systems</li>
      </ul>
      
      <h3>Skills for the AI Era</h3>
      <p>Our program emphasizes developing skills that remain uniquely human while building AI literacy:</p>
      
      <h4>Technical Skills</h4>
      <ul>
        <li>Programming and data analysis</li>
        <li>Machine learning fundamentals</li>
        <li>AI tool integration and optimization</li>
        <li>Data visualization and interpretation</li>
      </ul>
      
      <h4>Human Skills</h4>
      <ul>
        <li>Critical thinking and problem-solving</li>
        <li>Emotional intelligence and empathy</li>
        <li>Creativity and innovation</li>
        <li>Communication and collaboration</li>
      </ul>
      
      <h3>Real-World Impact Stories</h3>
      <p>The transformative power of AI education is best illustrated through the success stories of our participants:</p>
      
      <h4>Armen Petrosyan - Agricultural Innovation</h4>
      <p>A farmer from Ararat region, Armen used AI to develop a crop monitoring system that increased his yield by 30% while reducing water usage by 25%. His innovation is now being adopted by other farmers in the region.</p>
      
      <h4>Sona Harutyunyan - Healthcare Solutions</h4>
      <p>A medical student from Yerevan, Sona developed an AI-powered diagnostic tool for early detection of diabetic retinopathy. Her project has attracted interest from healthcare institutions across Armenia.</p>
      
      <h4>Davit Martirosyan - Education Technology</h4>
      <p>A teacher from Vanadzor, Davit created an AI-powered language learning app specifically designed for Armenian students learning English. The app has been downloaded over 10,000 times and is being used in schools nationwide.</p>
      
      <h3>Challenges and Considerations</h3>
      <p>While the benefits of AI in education and work are substantial, we must also address several challenges:</p>
      
      <h4>Digital Divide</h4>
      <p>Ensuring equitable access to AI tools and education remains a priority. We're working to bridge the digital divide through partnerships with local governments and NGOs.</p>
      
      <h4>Ethical Considerations</h4>
      <p>As AI becomes more prevalent, understanding its ethical implications becomes crucial. Our curriculum includes mandatory modules on AI ethics and responsible AI development.</p>
      
      <h4>Job Displacement Concerns</h4>
      <p>While AI creates new opportunities, it also poses challenges for workers in certain sectors. Our retraining programs help professionals transition to AI-augmented roles.</p>
      
      <h3>The Future of Learning and Work</h3>
      <p>Looking ahead, we anticipate several key trends:</p>
      
      <h4>Continuous Learning</h4>
      <p>The pace of technological change necessitates lifelong learning. AI will play a crucial role in making continuous education more accessible and effective.</p>
      
      <h4>Human-AI Collaboration</h4>
      <p>The future workplace will be characterized by seamless collaboration between humans and AI systems, with each contributing their unique strengths.</p>
      
      <h4>Personalized Career Development</h4>
      <p>AI will help individuals identify career paths that align with their interests, skills, and market demand, providing personalized guidance for professional development.</p>
      
      <h3>Preparing for Tomorrow</h3>
      <p>The transformation of education and work by AI is not a distant future scenario – it's happening now. AI4ALL Armenia is committed to ensuring that our participants are not just prepared for this change but are leaders in shaping it.</p>
      
      <p>By combining technical AI skills with uniquely human capabilities like creativity, empathy, and critical thinking, we're building a workforce that can thrive in an AI-augmented world.</p>
      
      <p>The journey of AI transformation in education and work is just beginning. As we continue to explore and adapt to these changes, one thing remains clear: the future belongs to those who can effectively collaborate with AI while maintaining the human touch that makes learning and work meaningful.</p>
      
      <p>Join us in this exciting journey as we shape the future of education and work in Armenia. Together, we can ensure that AI serves humanity's best interests while creating opportunities for growth, innovation, and prosperity.</p>
    `
  },
  {
    id: 4,
    type: 'news',
    title: 'U.S. Company Plans 100MW AI Data Center in Armenia',
    date: '2025-07-11',
    category: 'Industry News',
    excerpt: 'Major AI infrastructure investment signals growing confidence in Armenia\'s tech ecosystem, creating new opportunities for AI4ALL Armenia graduates.',
    image: '/news/U.S. Company Plans 100MW AI Data Center in Armenia.png',
    author: 'Tech Armenia',
    tags: ['Data Center', 'Investment', 'AI Infrastructure', 'Tech Industry'],
    content: `
      <p>In a significant vote of confidence for Armenia's growing technology sector, a major U.S. technology company has announced plans to establish a 100-megawatt AI data center in Armenia. This landmark investment represents one of the largest technology infrastructure projects in the country's history and signals Armenia's emergence as a regional hub for AI and advanced computing.</p>
      
      <p>The announcement comes at a crucial time for Armenia's tech ecosystem, as the country continues to build its reputation as a destination for high-tech investment and innovation. The new data center will not only provide critical infrastructure for AI development but also create numerous employment opportunities for Armenia's growing pool of AI-skilled professionals.</p>
      
      <h3>Strategic Infrastructure Investment</h3>
      <p>The planned facility will be one of the most advanced AI data centers in the South Caucasus region, featuring cutting-edge cooling systems, renewable energy integration, and state-of-the-art security measures. The 100MW capacity will make it capable of supporting large-scale AI training and inference operations.</p>
      
      <p>Key features of the planned facility include:</p>
      <ul>
        <li>Advanced GPU clusters optimized for machine learning workloads</li>
        <li>Sustainable energy sourcing with planned solar and wind integration</li>
        <li>Redundant connectivity to ensure 99.99% uptime</li>
        <li>Compliance with international data protection standards</li>
      </ul>
      
      <h3>Impact on Armenia's Tech Ecosystem</h3>
      <p>The data center project is expected to create over 500 direct jobs and thousands of indirect employment opportunities. More importantly, it will provide local AI companies and startups with access to world-class computing infrastructure that was previously available only in major tech hubs.</p>
      
      <p>Dr. Armen Sarkissian, Director of AI4ALL Armenia, commented: "This investment validates our vision of Armenia as a leader in AI education and innovation. Our graduates will have unprecedented opportunities to work with cutting-edge technology right here in Armenia."</p>
      
      <h3>Opportunities for AI4ALL Armenia Graduates</h3>
      <p>The company has already expressed interest in partnering with AI4ALL Armenia to recruit qualified professionals. Specific opportunities include:</p>
      <ul>
        <li><strong>Data Center Operations:</strong> Monitoring and maintaining AI infrastructure</li>
        <li><strong>AI Engineering:</strong> Developing and optimizing AI models</li>
        <li><strong>DevOps and Cloud Services:</strong> Managing cloud infrastructure and deployment</li>
        <li><strong>Technical Support:</strong> Providing specialized AI technical assistance</li>
      </ul>
      
      <h3>Regional Implications</h3>
      <p>The investment is part of a broader trend of international technology companies recognizing Armenia's potential as a regional technology hub. The country's skilled workforce, competitive costs, and strategic location make it an attractive destination for tech investments.</p>
      
      <p>Government officials have indicated that this project could be the first of several major technology infrastructure investments, with additional data centers and research facilities under consideration.</p>
      
      <h3>Environmental Considerations</h3>
      <p>The project includes significant commitments to environmental sustainability, with plans to achieve carbon neutrality by 2030. The facility will utilize Armenia's renewable energy resources and implement advanced cooling technologies to minimize environmental impact.</p>
      
      <h3>Timeline and Next Steps</h3>
      <p>Construction is expected to begin in early 2026, with the first phase operational by 2027. The company is currently working with local authorities on regulatory approvals and site preparation.</p>
      
      <p>AI4ALL Armenia is collaborating with the company to develop specialized training programs that will prepare graduates for the specific technical requirements of AI data center operations. This partnership ensures that local talent will be ready to support the facility from day one.</p>
      
      <p>This investment represents more than just infrastructure – it's a testament to Armenia's growing position in the global AI landscape and a bright future for the country's technology sector.</p>
    `
  },
  {
    id: 5,
    type: 'news',
    title: 'AI4ALL Global Announces $2M Google.org Grant for Future of AI Education',
    date: '2025-06-09',
    category: 'Global Impact',
    excerpt: 'The global AI4ALL organization receives major funding to expand AI education initiatives, including support for programs like AI4ALL Armenia.',
    image: '/news/AI4ALL Global Announces $2M Google.org.png',
    author: 'AI4ALL Global',
    tags: ['Funding', 'Global Impact', 'AI Education', 'Google.org'],
    content: `
      <p>AI4ALL Global has announced a groundbreaking $2 million grant from Google.org to accelerate AI education initiatives worldwide. This significant funding will support the expansion of AI education programs across multiple countries, including substantial support for AI4ALL Armenia's innovative educational model.</p>
      
      <p>The grant represents one of the largest investments in AI education accessibility and will enable AI4ALL to reach underserved communities, develop new curriculum materials, and create sustainable pathways for AI career development globally.</p>
      
      <h3>Global Impact Initiative</h3>
      <p>The Google.org grant will fund a comprehensive three-year initiative focused on democratizing AI education in underrepresented regions. The program aims to:</p>
      <ul>
        <li>Train over 10,000 students and educators across 15 countries</li>
        <li>Develop localized AI curriculum for different cultural contexts</li>
        <li>Create sustainable career pathways in AI for program graduates</li>
        <li>Build partnerships with local technology companies and educational institutions</li>
      </ul>
      
      <h3>Support for AI4ALL Armenia</h3>
      <p>As part of this global initiative, AI4ALL Armenia will receive dedicated funding to expand its programs and enhance educational quality. Specific areas of support include:</p>
      
      <h4>Curriculum Development</h4>
      <p>Development of Armenian-language AI educational materials and culturally relevant case studies that connect AI concepts to local challenges and opportunities.</p>
      
      <h4>Infrastructure Enhancement</h4>
      <p>Upgrading technology infrastructure in regional centers to provide participants with access to high-performance computing resources necessary for advanced AI training.</p>
      
      <h4>Teacher Training Expansion</h4>
      <p>Scaling the successful AI for Teachers program to reach educators in all Armenian provinces, with specialized training modules for different subject areas.</p>
      
      <h4>Industry Partnerships</h4>
      <p>Facilitating connections between AI4ALL Armenia graduates and international technology companies, creating pathways for career advancement and entrepreneurship.</p>
      
      <h3>Innovation in AI Education</h3>
      <p>The grant will support the development of innovative educational approaches that make AI learning more accessible and engaging:</p>
      
      <h4>Gamified Learning Platforms</h4>
      <p>Creation of interactive, game-based learning experiences that make complex AI concepts more approachable for young learners.</p>
      
      <h4>Virtual Reality Training</h4>
      <p>Development of VR-based training modules that allow students to visualize and interact with AI systems in immersive environments.</p>
      
      <h4>Peer-to-Peer Learning Networks</h4>
      <p>Establishment of global networks connecting AI4ALL participants from different countries, enabling collaborative learning and cultural exchange.</p>
      
      <h3>Addressing Global Challenges</h3>
      <p>The initiative recognizes that AI education must address real-world challenges relevant to each region. For AI4ALL Armenia, this includes:</p>
      
      <h4>Agricultural Innovation</h4>
      <p>AI applications in precision agriculture, crop monitoring, and sustainable farming practices relevant to Armenia's agricultural sector.</p>
      
      <h4>Healthcare Technology</h4>
      <p>AI solutions for healthcare challenges specific to Armenia, including telemedicine and diagnostic support for rural areas.</p>
      
      <h4>Cultural Preservation</h4>
      <p>AI applications in preserving and promoting Armenian cultural heritage through digital archives and language processing technologies.</p>
      
      <h3>Measuring Impact</h3>
      <p>The Google.org grant includes comprehensive impact measurement requirements to ensure effective use of funds:</p>
      
      <h4>Quantitative Metrics</h4>
      <ul>
        <li>Number of students and educators trained</li>
        <li>Employment rates of program graduates</li>
        <li>Salary improvements for participants</li>
        <li>Number of AI projects developed by participants</li>
      </ul>
      
      <h4>Qualitative Assessments</h4>
      <ul>
        <li>Participant satisfaction and confidence levels</li>
        <li>Long-term career trajectory changes</li>
        <li>Community impact of graduate-led projects</li>
        <li>Feedback from employer partners</li>
      </ul>
      
      <h3>Sustainability and Long-term Vision</h3>
      <p>Beyond the three-year grant period, the initiative aims to create self-sustaining AI education ecosystems in each participating region. For Armenia, this includes:</p>
      
      <h4>Local Expertise Development</h4>
      <p>Training local instructors to become certified AI educators, reducing dependence on external trainers and ensuring program continuity.</p>
      
      <h4>Industry Integration</h4>
      <p>Establishing formal partnerships with Armenian technology companies to provide ongoing internship and employment opportunities for graduates.</p>
      
      <h4>Academic Partnerships</h4>
      <p>Collaborating with Armenian universities to integrate AI4ALL curriculum into formal academic programs.</p>
      
      <h3>Global Collaboration</h3>
      <p>The grant facilitates collaboration between AI4ALL programs worldwide, creating opportunities for knowledge sharing and best practice exchange. Armenian participants will have access to:</p>
      <ul>
        <li>International mentorship programs</li>
        <li>Global AI project competitions</li>
        <li>Cross-cultural collaboration opportunities</li>
        <li>Access to international job markets</li>
      </ul>
      
      <h3>Community Response</h3>
      <p>The announcement has generated significant excitement within Armenia's technology community. Local industry leaders have expressed enthusiasm for the expanded opportunities this funding will create.</p>
      
      <p>Tatevik Gasparyan, CEO of a prominent Armenian tech startup, commented: "This investment will accelerate Armenia's position as a regional AI hub. We're already seeing the quality of talent coming from AI4ALL Armenia, and this expanded program will only strengthen our technology ecosystem."</p>
      
      <h3>Looking Forward</h3>
      <p>The Google.org grant represents a significant milestone in AI4ALL's mission to democratize AI education globally. For Armenia, it provides the resources necessary to transform from a program with regional impact to a model that can be replicated worldwide.</p>
      
      <p>As AI continues to shape the future of work and society, initiatives like this ensure that the benefits of AI advancement are shared globally, not concentrated in traditional technology centers. The success of AI4ALL Armenia serves as inspiration for similar programs worldwide, demonstrating that with the right support and vision, any country can participate in the AI revolution.</p>
      
      <p>Applications for the expanded AI4ALL Armenia program will open in September 2025, with new cohorts beginning in January 2026. The program remains free for all participants, thanks to the generous support of Google.org and other partners.</p>
    `
  },
  {
    id: 7,
    type: 'announcement',
    title: 'Youth Program Applications Now Open',
    date: '2025-08-01',
    category: 'Application',
    excerpt: 'Applications for the Fall 2025 AI for Youth program are now open. Early bird deadline is August 15th.',
    image: '/news/Youth Program Applications Now Open.png',
    author: 'AI4ALL Armenia Team',
    tags: ['Applications', 'Youth Program', 'Early Bird', 'Fall 2025'],
    content: `
      <p>We are excited to announce that applications for the Fall 2025 AI for Youth program are now officially open! This comprehensive 6-month program is designed for young people aged 15-29 who are eager to dive into the world of artificial intelligence and build the skills needed for the future job market.</p>
      
      <h3>Program Overview</h3>
      <p>The AI for Youth program offers a structured learning path that takes participants from AI fundamentals to advanced project development. The curriculum includes:</p>
      <ul>
        <li>Introduction to AI and Machine Learning concepts</li>
        <li>Programming fundamentals (Python, data structures)</li>
        <li>Hands-on projects with real-world applications</li>
        <li>Industry mentorship and career guidance</li>
        <li>Soft skills development and teamwork</li>
      </ul>
      
      <h3>What's New for Fall 2025</h3>
      <p>This upcoming cohort introduces several exciting enhancements:</p>
      
      <h4>Expanded Regional Access</h4>
      <p>We're adding new learning centers in Kapan, Goris, and Alaverdi to better serve participants from southern and northern regions of Armenia.</p>
      
      <h4>Industry Partnerships</h4>
      <p>New partnerships with 15 Armenian and international tech companies provide expanded internship and job placement opportunities.</p>
      
      <h4>Specialized Tracks</h4>
      <p>Participants can now choose from specialized tracks in:</p>
      <ul>
        <li>AI for Agriculture and Environmental Sciences</li>
        <li>AI for Healthcare and Biotechnology</li>
        <li>AI for Creative Industries and Media</li>
        <li>AI for Finance and Business Analytics</li>
      </ul>
      
      <h3>Application Process</h3>
      <p>The application process is designed to be accessible and straightforward:</p>
      
      <h4>Step 1: Online Application</h4>
      <p>Complete the online application form available on our website. No prior programming experience is required, but a passion for learning and technology is essential.</p>
      
      <h4>Step 2: Assessment</h4>
      <p>Take a brief online assessment that evaluates logical thinking, problem-solving skills, and basic mathematics. This helps us understand your learning style and place you in the most suitable track.</p>
      
      <h4>Step 3: Interview</h4>
      <p>Participate in a virtual interview with our admissions team. This is an opportunity to discuss your interests, goals, and motivation for joining the program.</p>
      
      <h3>Important Dates</h3>
      <ul>
        <li><strong>Early Bird Deadline:</strong> August 15, 2025</li>
        <li><strong>Final Application Deadline:</strong> September 15, 2025</li>
        <li><strong>Interview Period:</strong> August 20 - September 30, 2025</li>
        <li><strong>Acceptance Notifications:</strong> October 1-15, 2025</li>
        <li><strong>Program Start:</strong> November 1, 2025</li>
      </ul>
      
      <h3>Early Bird Benefits</h3>
      <p>Applications submitted by August 15th qualify for early bird benefits:</p>
      <ul>
        <li>Priority consideration for preferred learning tracks</li>
        <li>Access to exclusive pre-program preparation materials</li>
        <li>Invitation to virtual meetups with current participants</li>
        <li>Early access to mentorship matching</li>
      </ul>
      
      <h3>Financial Support</h3>
      <p>The program remains completely free for all participants, thanks to support from Google.org and other generous partners. Additional support is available for:</p>
      <ul>
        <li>Transportation assistance for participants from remote areas</li>
        <li>Laptop lending program for those who need equipment</li>
        <li>Childcare support for young parents</li>
        <li>Flexible scheduling for working participants</li>
      </ul>
      
      <h3>Success Stories</h3>
      <p>Our previous cohorts have achieved remarkable success:</p>
      <ul>
        <li>85% of graduates found employment or internships within 6 months</li>
        <li>Average salary increase of 150% for employed participants</li>
        <li>Over 50 innovative AI projects developed by participants</li>
        <li>15 participants launched their own AI-focused startups</li>
      </ul>
      
      <h3>Application Requirements</h3>
      <p>To be eligible for the program, applicants must:</p>
      <ul>
        <li>Be between 15-29 years old</li>
        <li>Be a resident of Armenia</li>
        <li>Have completed high school or equivalent</li>
        <li>Demonstrate basic computer literacy</li>
        <li>Show commitment to completing the full 6-month program</li>
      </ul>
      
      <h3>How to Apply</h3>
      <p>Ready to start your AI journey? Visit our website at [website] to:</p>
      <ul>
        <li>Complete the online application form</li>
        <li>Upload required documents (ID, education certificates)</li>
        <li>Schedule your assessment and interview</li>
        <li>Connect with our admissions team for questions</li>
      </ul>
      
      <p>Don't miss this opportunity to be part of Armenia's AI revolution. Apply today and join a community of young innovators who are shaping the future of technology in Armenia and beyond!</p>
      
      
    `
  },
  {
    id: 8,
    type: 'announcement',
    title: 'New Partnership with Armenian Tech Companies',
    date: '2025-07-20',
    category: 'Partnership',
    excerpt: 'AI4ALL Armenia announces strategic partnerships with leading Armenian tech companies to provide internship opportunities.',
    image: '/news/New Partnership with Armenian Tech Companies.jpeg',
    author: 'AI4ALL Armenia Team',
    tags: ['Partnership', 'Internships', 'Tech Companies', 'Career Development'],
    content: `
      <p>AI4ALL Armenia is proud to announce the establishment of strategic partnerships with 15 leading Armenian technology companies, creating unprecedented opportunities for our program participants to gain real-world experience and launch their careers in the rapidly growing AI sector.</p>
      
      <p>These partnerships represent a significant milestone in our mission to bridge the gap between AI education and industry needs, ensuring that our graduates are not only well-trained but also have clear pathways to meaningful employment in Armenia's thriving tech ecosystem.</p>
      
      <h3>Partner Companies</h3>
      <p>Our new partner network includes some of Armenia's most innovative and successful technology companies:</p>
      
      <h4>Software Development Companies</h4>
      <ul>
        <li><strong>EPAM Armenia:</strong> Global software development leader with major operations in Yerevan</li>
        <li><strong>Synopsys Armenia:</strong> Leading electronic design automation company</li>
        <li><strong>ServiceTitan:</strong> Unicorn startup providing software solutions for service businesses</li>
        <li><strong>Arca Space:</strong> Pioneering space technology and satellite solutions</li>
      </ul>
      
      <h4>AI and Data Analytics</h4>
      <ul>
        <li><strong>Krisp:</strong> AI-powered noise cancellation technology company</li>
        <li><strong>Teamable:</strong> AI-driven recruiting and talent intelligence platform</li>
        <li><strong>Sourceloop:</strong> Digital transformation and AI consulting firm</li>
      </ul>
      
      <h4>Fintech and Blockchain</h4>
      <ul>
        <li><strong>Viva Wallet Armenia:</strong> Digital payment solutions provider</li>
        <li><strong>Digitain:</strong> Gaming and sports betting technology platform</li>
      </ul>
      
      <h4>Healthcare Technology</h4>
      <ul>
        <li><strong>Medic Mobile Armenia:</strong> Healthcare technology for underserved communities</li>
        <li><strong>HealthTech Armenia:</strong> AI-powered diagnostic and treatment solutions</li>
      </ul>
      
      <h3>Partnership Benefits</h3>
      <p>These strategic partnerships provide comprehensive support for AI4ALL Armenia participants:</p>
      
      <h4>Internship Opportunities</h4>
      <p>Over 200 internship positions are available annually across partner companies, offering:</p>
      <ul>
        <li>3-6 month paid internships with potential for full-time conversion</li>
        <li>Mentorship from senior AI engineers and data scientists</li>
        <li>Real-world project experience with cutting-edge technologies</li>
        <li>Professional development and technical skill building</li>
      </ul>
      
      <h4>Industry Mentorship</h4>
      <p>Each partner company provides experienced mentors who:</p>
      <ul>
        <li>Guide participants through industry-specific AI applications</li>
        <li>Provide career advice and professional networking opportunities</li>
        <li>Share insights about emerging trends and technologies</li>
        <li>Support project development and technical problem-solving</li>
      </ul>
      
      <h4>Curriculum Input</h4>
      <p>Partners actively contribute to curriculum development by:</p>
      <ul>
        <li>Identifying key skills and competencies needed in the industry</li>
        <li>Providing real-world case studies and project challenges</li>
        <li>Offering guest lectures and technical workshops</li>
        <li>Updating curriculum to reflect latest industry trends</li>
      </ul>
      
      <h3>Career Pathways</h3>
      <p>The partnerships create clear career progression paths for participants:</p>
      
      <h4>Entry-Level Positions</h4>
      <ul>
        <li>Junior AI Engineer</li>
        <li>Data Analyst</li>
        <li>Machine Learning Engineer</li>
        <li>AI Product Assistant</li>
      </ul>
      
      <h4>Mid-Level Opportunities</h4>
      <ul>
        <li>Senior AI Developer</li>
        <li>Data Scientist</li>
        <li>AI Project Manager</li>
        <li>Technical Team Lead</li>
      </ul>
      
      <h4>Advanced Roles</h4>
      <ul>
        <li>AI Research Scientist</li>
        <li>Machine Learning Architect</li>
        <li>AI Strategy Consultant</li>
        <li>Chief Technology Officer</li>
      </ul>
      
      <h3>Success Stories</h3>
      <p>Several AI4ALL Armenia graduates have already benefited from these partnerships:</p>
      
      <h4>Ani Vardanyan - Krisp</h4>
      <p>After completing the AI for Youth program, Ani joined Krisp as a junior machine learning engineer. She now works on improving the company's noise cancellation algorithms and has contributed to three patent applications.</p>
      
      <h4>Hakob Grigoryan - ServiceTitan</h4>
      <p>Hakob's internship project at ServiceTitan involved developing predictive maintenance algorithms for HVAC systems. His work was so impressive that he was offered a full-time position as an AI engineer.</p>
      
      <h4>Mariam Ghazaryan - EPAM</h4>
      <p>Starting as an intern, Mariam quickly advanced to a senior developer role at EPAM, where she leads AI integration projects for international clients.</p>
      
      <h3>Application Process</h3>
      <p>Participants can apply for partnership opportunities through:</p>
      
      <h4>During Program</h4>
      <ul>
        <li>Career counseling sessions to identify suitable opportunities</li>
        <li>Portfolio development workshops to prepare for applications</li>
        <li>Mock interviews and technical assessments</li>
        <li>Direct introductions to partner company representatives</li>
      </ul>
      
      <h4>After Graduation</h4>
      <ul>
        <li>Ongoing career support and job placement assistance</li>
        <li>Alumni network connections and referrals</li>
        <li>Continued access to partner company job postings</li>
        <li>Professional development opportunities and skill updates</li>
      </ul>
      
      <h3>Impact on Armenia's Tech Ecosystem</h3>
      <p>These partnerships contribute to the broader development of Armenia's technology sector by:</p>
      <ul>
        <li>Reducing the skills gap in AI and machine learning</li>
        <li>Encouraging more young people to pursue tech careers</li>
        <li>Strengthening connections between education and industry</li>
        <li>Promoting innovation and entrepreneurship in AI</li>
      </ul>
      
      <h3>Future Expansion</h3>
      <p>We are actively working to expand our partner network with additional companies in:</p>
      <ul>
        <li>International corporations with Armenian offices</li>
        <li>Emerging startups in AI and deep tech</li>
        <li>Government agencies implementing AI initiatives</li>
        <li>Academic institutions conducting AI research</li>
      </ul>
      
      <p>These partnerships represent a crucial step in ensuring that AI4ALL Armenia participants have access to the best career opportunities in Armenia's growing technology sector. We are committed to continuing to build bridges between education and industry, creating a sustainable pipeline of AI talent that will drive Armenia's digital transformation.</p>
      
      <p>Current and prospective participants interested in learning more about partnership opportunities should contact our career services team at careers@ai4all.am.</p>
    `
  },
  {
    id: 11,
    type: 'event',
    title: 'Արհեստական բանականության աշխատարան հայ մանկավարժների համար',
    date: '2025-08-10',
    category: 'Workshop',
    excerpt: 'Մանկավարժների հատուկ աշխատարան՝ AI գործիքների ինտեգրման և դասարանում արդյունավետ կիրառման մասին: Հայերեն դասընթաց փորձառու մասնագետների հետ:',
    image: '/news/AI for Teachers Info Session.png',
    author: 'EIF Armenia',
    tags: ['Workshop', 'Teachers', 'Armenia', 'Armenian Language'],
    content: `
      <h3>Արհեստական բանականության աշխատարան հայ մանկավարժների համար</h3>
      <p>EIF-ի AI4ALL Armenia ծրագիրը հրավիրում է հայ մանկավարժներին մասնակցել հատուկ մեկօրյա աշխատարանին, որը նվիրված է արհեստական բանականության գործիքների դասարանում արդյունավետ ինտեգրմանը:</p>
      
      <h3>Աշխատարանի ծրագիրը</h3>
      
      <h4>Առավոտյան նիստ (10:00-12:00)</h4>
      <ul>
        <li><strong>AI-ի հիմունքները կրթության մեջ</strong> - ինչպես է AI-ն փոխում ուսուցման մեթոդները</li>
        <li><strong>Պրակտիկ գործիքներ</strong> - ChatGPT, Google Bard և այլ AI օգնականների ծանոթություն</li>
        <li><strong>Դասային պլանավորում</strong> - AI-ի օգնությամբ դասերի նախապատրաստում</li>
      </ul>
      
      <h4>Ցերեկային նիստ (13:00-14:30)</h4>
      <ul>
        <li><strong>Ինտերակտիվ բովանդակություն</strong> - AI-ով ստեղծագործական առաջադրանքների մշակում</li>
        <li><strong>Գնահատման գործիքներ</strong> - ավտոմատ ստուգում և արժեշտումներ</li>
        <li><strong>Անհատականացված ուսուցում</strong> - յուրաքանչյուր աշակերտի կարիքներին համապատասխան մոտեցում</li>
      </ul>
      
      <h4>Կեսօրից հետո (14:30-16:00)</h4>
      <ul>
        <li><strong>Խմբային աշխատանք</strong> - պրակտիկ դիսկուսիաներ և փորձի փոխանակում</li>
        <li><strong>Ապագա ծրագրեր</strong> - AI4ALL Armenia-ի հետագա հնարավորությունները</li>
        <li><strong>Ցանցակցում</strong> - նմանամիտ մանկավարժների հետ կապեր</li>
      </ul>
      
      <h3>Ով կարող է մասնակցել</h3>
      <ul>
        <li>Ակտիվ մանկավարժներ բոլոր մակարդակներից</li>
        <li>Դասախոսներ բարձրագույն ուսումնական հաստատություններից</li>
        <li>Կրթական ծրագրերի մենեջերներ</li>
        <li>Այն բոլորը, ովքեր հետաքրքրված են AI-ի կիրառմամբ կրթության մեջ</li>
      </ul>
      
      <h3>Աշխատարանի առավելությունները</h3>
      <ul>
        <li><strong>Հայերեն լեզվով</strong> - բոլոր նյութերը և քննարկումները հայերենով</li>
        <li><strong>Փորձառու մասնագետներ</strong> - միջազգային փորձ ունեցող դասախոսներ</li>
        <li><strong>Պրակտիկ մոտեցում</strong> - ոչ թե տեսություն, այլ կիրառական հմտություններ</li>
        <li><strong>Անվճար մասնակցություն</strong> - բոլոր նյութերը և ցկտուցում անվճար</li>
        <li><strong>Սերտիֆիկատ</strong> - ավարտին մասնակիցներին կտրվի մասնակցության սերտիֆիկատ</li>
      </ul>
      
      <h3>Ինչ կստանան մասնակիցները</h3>
      <ul>
        <li>Պրակտիկ գիտելիքներ AI գործիքների օգտագործման մասին</li>
        <li>Կարտի դասական պլաններ AI-ի ինտեգրմամբ</li>
        <li>Դասավանդման նոր մեթոդների գիտակցություն</li>
        <li>Մանկավարժների ցանց՝ փորձի փոխանակման համար</li>
        <li>Հետագա աջակցության հետեւառություն</li>
      </ul>
      
      <h3>Գրանցում և տեղեկություններ</h3>
      <p>Աշխատարանը կանցկացվի ԵԻՀ տեխնոլոգիական կենտրոնում, Երևանում: Տեղերի քանակը սահմանափակ է (50 մասնակից), գրանցումն իրականացվում է առաջնահերթության սկզբունքով:</p>
      
      <p><strong>Գրանցման համար անհրաժեշտ է լրացնել հայտը մեր կայքում կամ զանգահարել +374 10 500 000 համարով:</strong></p>
      
      <p>Աշխատարանը կներառի նաև տեխնիկական աջակցություն և հետագա խորհրդատվություն մանկավարժների համար, ովքեր ցանկանում են AI-ն ինտեգրել իրենց ուսուցչական պրակտիկայի մեջ:</p>
      
      <h3>Հարցեր և պատասխաններ</h3>
      <p><strong>Հ․</strong> Անհրաժեշտ է արդյոք նախապես տեխնիկական գիտելիք ունենալ AI-ի մասին?</p>
      <p><strong>Պ․</strong> Ոչ, աշխատարանը նախանակված է բոլորի համար՝ անկախ տեխնիկական կարողություններից:</p>
      
      <p><strong>Հ․</strong> Կկարողանա՞մ օգտագործել այս գիտելիքները բոլոր առարկաներում?</p>
      <p><strong>Պ․</strong> Այո, AI գործիքները կարող են կիրառվել ցանկացած առարկայի դասավանդման համար:</p>
      
      <p><strong>Հ․</strong> Արդյոք կտրվի ապառգացի գիտենիքները հնարավոր լյունակն?</p>
      <p><strong>Պ․</strong> Բոլոր մասնակիցները կստանան մասնակցության Սրտիֆիկատ և հասանելիություն օնլայն ռեսուրսներին:</p>
    `
  },
  {
    id: 10,
    type: 'news',
    title: 'Ուսուցիչները պատրաստ են թվային ապագայի համար',
    date: '2024-06-23',
    category: 'Կրթություն',
    excerpt: 'AI4ALL Armenia-ի ծրագրի շրջանակում 500-ից ավելի ուսուցիչ ստացավ արհեստական բանականության գիտելիքներ:',
    image: '/news/AI for Teachers Info Session.png',
    author: 'Մարիաննա Դանիելյան',
    tags: ['AI', 'Կրթություն', 'Ուսուցիչներ'],
    content: `
      <p>Ձեռնարկությունների ինկուբատոր հիմնադրամի AI4ALL ծրագիրը նշանակալի հաջողություններ է գրանցել հայ ուսուցիչների շրջանում արհեստական բանականության կրթության ոլորտում:</p>
      
      <p>Ծրագրի շրջանակում Հայաստանի տարբեր մարզերից 500-ից ավելի ուսուցիչ արդեն պատրաստ են արհեստական բանականությունն ինտեգրել իրենց ամենօրյա աշխատանքում։</p>
      
      <p>AI4ALL նախագծի համակարգող Գրետա Խաչատրյանը բացատրում է. "Ուսուցիչները մեզ համար մշտապես շատ կարևոր թիրախային խումբն են, որպեսզի նրանք հետ չմնան տեխնոլոգիական ոլորտում տեղի ունեցած փոփոխություններից և կարողանան համաքայլ առաջ գնալ ժամանակի ու իրենց աշակերտների հետ։"</p>
      
      <p>Արմավիրի մարզի Ալաշկերտ գյուղի դպրոցի ռուսաց լեզվի ուսուցիչ Նաիրա Մալխասյանը, որը 38 տարվա փորձ ունի, առաջիններից էր մասնակցել դասընթացին։ Նա պատմում է. "Ես հաճախ կատակով ասում եմ, որ մենք մրցում ենք Մարկ Ցուկերբերգի հետ։ Աշակերտներն ամբողջ օրը սոցիալական ցանցերում են։ Նրանց տեխնոլոգիական հմտությունները շատ բարձր են։"</p>
      
      <blockquote>"Արհեստական բանականությունը չի փոխարինելու ուսուցչին, այլ կդառնա նրա հզոր օգնականը կրթական գործընթացում" - Անի Դերձյան, ԱԲ մասնագետ</blockquote>
      
      <p>Ուսուցչուհի Մալխասյանը նկատում է, որ ԱԲ գործիքները նմանեցնում է դասավանդման համար նախատեսված այնպիսի օգնականի, որի օգնությամբ դասին պատրաստվելն ավելի հեշտ է դառնում։ Թեմատիկ պլանները, դասի պլանները շատ ավելի հեշտ ու արագ է կարելի պատրաստել։</p>
      
      <p>Վանաձորի տեխնոլոգիական կենտրոնի կրթական և ինժինեերական ծրագրերի մասնագետ Անի Դերձյանն ասում է, որ ծրագիրը ներառել է նաև չեզոքացնել ուսուցիչների մոտ առկա անորոշ պատկերացումները, որ ԱԲ-ն փոխարինելու է իրենց։ Օգնել նրանց հասկանալ, որ դա նրանց օգնականն է դառնալու։</p>
      
      <p>Ծրագիրը իրականացվում է Ձեռնարկությունների ինկուբատոր հիմնադրամի կողմից և ունի մեծ արձագանք ամբողջ երկրում։</p>
    `
  },
  {
    id: 11,
    type: 'news',
    title: 'ԱԲ-ի ինտեգրումը հայկական կրթական համակարգում',
    date: '2024-06-07',
    category: 'Տեխնոլոգիա',
    excerpt: 'Ձեռնարկությունների ինկուբատոր հիմնադրամի Վանաձորի տեխնոլոգիական կենտրոնը հաջողությամբ իրականացնում է մանկավարժների համար նախատեսված ԱԲ կրթական ծրագիրը:',
    image: '/news/AI Workshop - Vanadzor Tech Center.png',
    author: 'Եղիշե Սաֆարյան',
    tags: ['AI', 'Վանաձոր', 'Տեխնոլոգիա', 'Կրթություն'],
    content: `
      <p>Ձեռնարկությունների ինկուբատոր հիմնադրամի Վանաձորի տեխնոլոգիական կենտրոնը արդեն երրորդ տարին է հաջողությամբ իրականացնում «Արհեստական բանականություն մանկավարժների համար» կրթական ծրագիրը:</p>
      
      <p>Հայաստանի տարբեր համայնքներից մանկավարժներ անցնելով հեռավար այս դասընթացը խորացրել են գիտելիքները AI գործիքների կիրառման վերաբերյալ։ Այս ամենն ուղղված է դասավանդման արդյունավետության բարձրացմանը:</p>
      
      <p>Կրթական ծրագրի մանրամասներին ծանոթանալու համար հարցազրույց է տրվել Ձեռնարկությունների ինկուբատոր հիմնադրամի Վանաձորի տեխնոլոգիական կենտրոնի կրթական և ինժինեերական ծրագրերի ղեկավար Եղիշե Սաֆարյանի հետ:</p>
      
      <h3>Ծրագրի նպատակները</h3>
      <p>«Մենք ցանկանում ենք մեր ուսուցիչները լինեն տեխնոլոգիական արդիականացման առաջապահները՝ իրենց աշակերտների հետ միասին առաջ շարժվելով դեպի ապագան», - ասում է Սաֆարյանը:</p>
      
      <p>Ծրագիրը ներառում է ԱԲ գործիքների տեսական և գործնական ուսուցումը, ինչպես նաև դրանց կիրառությունը տարբեր առարկաների դասավանդման մեջ:</p>
      
      <h3>Մասնակիցների արձագանքը</h3>
      <p>Կարինե Մայիլյանը, որը Վայոց ձորի մարզի դպրոցներից մեկի ուսուցիչ է, պատմում է. «Սկզբում մտավախություն կար, բայց հիմա գիտակցում եմ, որ ԱԲ-ն իրական օգնական է։ Դասերս ավելի հետաքրքիր են դարձել, և աշակերտները ավելի ակտիվ են մասնակցում»:</p>
      
      <blockquote>"Ուսուցիչները պետք է սովորեն հարմարվել նոր տեխնոլոգիաներին, ոչ թե վախենան դրանցից" - Կարինե Մայիլյան</blockquote>
      
      <h3>Ապագայի ծրագրերը</h3>
      <p>Վանաձորի տեխնոլոգիական կենտրոնը պլանավորում է ընդլայնել ծրագիրը՝ ներառելով նաև այլ մարզերի ուսուցիչներին և ավելացնելով գործնական վարժանքների թիվը:</p>
      
      <p>«Մեր նպատակն է, որ յուրաքանչյուր հայ ուսուցիչ ունենա ԱԲ գործիքների կիրառման հմտություններ՝ մեր երիտասարդներին ապագայի աշխատանքային շուկայի համար պատրաստելու նպատակով», - եզրափակում է Սաֆարյանը:</p>
    `
  }
]

export default function NewsArticle({ params }: { params: { id: string } }) {
  const { t, language } = useLanguage()
  const [isShareOpen, setIsShareOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const shareRef = useRef<HTMLDivElement>(null)
  
  // Try to get translated article first, fallback to original articles
  const translatedArticle = getArticleByNumericId(parseInt(params.id))
  
  // Map article IDs to their correct image filenames
  const getImagePath = (articleId: number) => {
    const imageMap: { [key: number]: string } = {
      1: '/news/AI4ALL Armenia Launches Nationwide Initiative.png',
      2: '/news/EIF\'s AI4ALL Initiative and Teachers Adapt.png'
    }
    return imageMap[articleId] || '/news/AI4ALL Armenia Launches Nationwide Initiative.png'
  }
  
  const article = translatedArticle ? {
    id: parseInt(params.id),
    type: 'news',
    title: getText(translatedArticle.title, language as Language),
    date: translatedArticle.publishDate,
    category: getText(translatedArticle.category, language as Language),
    excerpt: getText(translatedArticle.subtitle, language as Language),
    image: getImagePath(parseInt(params.id)),
    author: getText(translatedArticle.author, language as Language),
    content: '', // Will be rendered differently
    tags: []
  } : newsArticles.find(a => a.id === parseInt(params.id))

  // Close share dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (shareRef.current && !shareRef.current.contains(event.target as Node)) {
        setIsShareOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{t('articleNotFound')}</h1>
          <p className="text-gray-600 mb-6">{t('articleNotFoundDescription')}</p>
          <Link href="/news" className="text-primary-600 hover:text-primary-700 font-medium">
            ← {t('backToNews')}
          </Link>
        </div>
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareText = `${article.title} - ${article.excerpt}`

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl)
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
        setIsShareOpen(false) // Close dropdown after copying
      }, 1500)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const handleShare = (platform: string) => {
    const encodedUrl = encodeURIComponent(currentUrl)
    const encodedText = encodeURIComponent(shareText)
    
    let shareUrl = ''
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
        break
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`
        break
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
        break
      default:
        return
    }
    
    window.open(shareUrl, '_blank', 'noopener,noreferrer')
    setIsShareOpen(false) // Close dropdown after sharing
  }

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: currentUrl,
        })
      } catch (err) {
        console.error('Error sharing: ', err)
      }
    } else {
      setIsShareOpen(!isShareOpen)
    }
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              href="/news" 
              className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('backToNews')}
            </Link>
            
            <div className="flex items-center mb-4">
              <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {article.category}
              </span>
              <span className="text-blue-200 text-sm ml-4">{formatDate(article.date)}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {article.excerpt}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <User className="w-5 h-5 text-blue-200 mr-2" />
                <span className="text-blue-200">{article.author}</span>
                
              </div>
              
              <div className="relative" ref={shareRef}>
                <button 
                  onClick={handleNativeShare}
                  className="flex items-center text-blue-200 hover:text-white transition-colors"
                >
                  <Share2 className="w-5 h-5 mr-2" />
                  {t('share')}
                </button>
                
                {/* Share Dropdown */}
                {isShareOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsShareOpen(false)} />
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-200 z-50 overflow-hidden"
                    >
                      <div className="py-2">
                        <div className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {t('shareThisArticle')}
                        </div>
                        <hr className="border-gray-100" />
                        <button
                          onClick={() => handleShare('facebook')}
                          className="w-full flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          <div className="w-5 h-5 mr-3 bg-blue-600 rounded-md flex items-center justify-center">
                            <span className="text-white text-xs font-bold">f</span>
                          </div>
                          Facebook
                        </button>
                        <button
                          onClick={() => handleShare('twitter')}
                          className="w-full flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          <div className="w-5 h-5 mr-3 bg-blue-400 rounded-md flex items-center justify-center">
                            <span className="text-white text-xs font-bold">𝕏</span>
                          </div>
                          Twitter
                        </button>
                        <button
                          onClick={() => handleShare('linkedin')}
                          className="w-full flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          <div className="w-5 h-5 mr-3 bg-blue-700 rounded-md flex items-center justify-center">
                            <span className="text-white text-xs font-bold">in</span>
                          </div>
                          LinkedIn
                        </button>
                        <hr className="border-gray-100 my-1" />
                        <button
                          onClick={handleCopyLink}
                          className="w-full flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          {copied ? (
                            <Check className="w-5 h-5 mr-3 text-green-600" />
                          ) : (
                            <Copy className="w-5 h-5 mr-3 text-gray-500" />
                          )}
                          {copied ? t('linkCopied') : t('copyLink')}
                        </button>
                      </div>
                    </motion.div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Featured Image */}
            <div className="mb-12">
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              {translatedArticle ? (
                // Render translated content using the structured format
                <div className="prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-800 prose-p:leading-relaxed prose-p:text-base prose-a:text-primary-600 prose-a:no-underline hover:prose-a:text-primary-700 prose-strong:text-gray-900 prose-ul:text-gray-800 prose-ol:text-gray-800 prose-li:text-gray-800 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4 prose-h4:text-lg prose-h4:font-medium prose-h4:mt-6 prose-h4:mb-3">
                  {translatedArticle.content.map((block, index) => {
                    switch (block.type) {
                      case 'paragraph':
                        return (
                          <p key={index} className="mb-4 text-gray-800 leading-relaxed">
                            {getText(block.text, language as Language)}
                          </p>
                        )
                      case 'heading':
                        return (
                          <h3 key={index} className="text-xl font-semibold mb-3 mt-8 text-primary">
                            {getText(block.text, language as Language)}
                          </h3>
                        )
                      case 'list':
                        return (
                          <ul key={index} className="mb-4 space-y-2">
                            {block.items?.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start text-gray-800">
                                <span className="text-accent mr-2">•</span>
                                {item ? getText(item, language as Language) : ''}
                              </li>
                            ))}
                          </ul>
                        )
                      default:
                        return <div key={index}></div>
                    }
                  })}
                </div>
              ) : (
                // Fallback to original content for articles without translation
                <div 
                  dangerouslySetInnerHTML={{ __html: article.content }}
                  className="prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-800 prose-p:leading-relaxed prose-p:text-base prose-a:text-primary-600 prose-a:no-underline hover:prose-a:text-primary-700 prose-strong:text-gray-900 prose-ul:text-gray-800 prose-ol:text-gray-800 prose-li:text-gray-800 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4 prose-h4:text-lg prose-h4:font-medium prose-h4:mt-6 prose-h4:mb-3"
                  style={{ 
                    color: '#1f2937',
                    fontSize: '16px',
                    lineHeight: '1.7'
                  }}
                />
              )}
            </div>

            {/* Tags */}
            {article.tags && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center mb-4">
                  <Tag className="w-5 h-5 text-gray-500 mr-2" />
                  <span className="text-gray-700 font-medium">{t('tags')}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('relatedArticles')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {newsArticles
                .filter(a => a.id !== article.id)
                .slice(0, 2)
                .map((relatedArticle) => (
                  <Link
                    key={relatedArticle.id}
                    href={`/news/${relatedArticle.id}`}
                    className="block group"
                  >
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow" style={{ height: '400px' }}>
                      <div className="h-48 bg-gray-200 relative overflow-hidden">
                        <Image
                          src={relatedArticle.image}
                          alt={relatedArticle.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6 h-[calc(400px-12rem)] flex flex-col">
                        <div className="flex items-center mb-3">
                          <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                            {relatedArticle.category}
                          </span>
                          <span className="text-gray-500 text-sm ml-3">
                            {formatDate(relatedArticle.date)}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2" style={{ height: '3.5rem' }}>
                          {relatedArticle.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-3 flex-1" style={{ height: '4.5rem' }}>
                          {relatedArticle.excerpt}
                        </p>
                        <div className="mt-auto pt-4 border-t border-gray-100">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500 truncate">{relatedArticle.author}</span>
                            <span className="text-primary-600 font-medium text-sm inline-flex items-center">
                              {t('readMore')}
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
