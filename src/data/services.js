// How It Works
export const howItWorksData = {
  sectionBadge: 'Getting Started',
  heading: 'Connected in',
  headingAccent: '4 Simple Steps',
  subheading: 'From sign-up to full-speed internet — our process is fast, transparent, and hassle-free.',
  steps: [
    {
      number: '01',
      icon: 'ClipboardList',
      title: 'Choose Your Plan',
      title_bn: 'প্ল্যান বেছে নিন',
      description:
        'Browse our home or corporate internet packages and pick the one that fits your speed needs and budget. All plans are BTRC approved.',
      description_bn:
        'আমাদের হোম বা কর্পোরেট ইন্টারনেট প্যাকেজ দেখুন এবং আপনার প্রয়োজন ও বাজেট অনুযায়ী বেছে নিন। সকল প্ল্যান BTRC অনুমোদিত।',
    },
    {
      number: '02',
      icon: 'Phone',
      title: 'Contact & Confirm',
      title_bn: 'যোগাযোগ করুন ও নিশ্চিত করুন',
      description:
        'Call our helpline, WhatsApp us, or fill the online form. Our team will confirm coverage in your area within minutes.',
      description_bn:
        'আমাদের হেল্পলাইনে কল করুন, WhatsApp করুন বা অনলাইন ফর্ম পূরণ করুন। আমাদের দল কয়েক মিনিটের মধ্যে এলাকায় কভারেজ নিশ্চিত করবে।',
    },
    {
      number: '03',
      icon: 'Wrench',
      title: 'Free Installation',
      title_bn: 'বিনামূল্যে ইনস্টলেশন',
      description:
        'Our certified engineers visit your location and complete the full setup — router, cabling, and configuration — at zero charge.',
      description_bn:
        'আমাদের সার্টিফাইড ইঞ্জিনিয়াররা আপনার ঠিকানায় এসে রাউটার, ক্যাবলিং ও কনফিগারেশনসহ সম্পূর্ণ সেটআপ বিনামূল্যে সম্পন্ন করবেন।',
    },
    {
      number: '04',
      icon: 'Rocket',
      title: 'Go Live & Enjoy',
      title_bn: 'লাইভ হন ও উপভোগ করুন',
      description:
        'Your connection goes live within 24 hours. Access the Self Care portal to monitor usage, pay bills, and manage your account anytime.',
      description_bn:
        'আপনার সংযোগ ২৪ ঘণ্টার মধ্যে লাইভ হবে। Self Care পোর্টালে ব্যবহার মনিটর করুন, বিল পরিশোধ করুন ও যেকোনো সময় অ্যাকাউন্ট পরিচালনা করুন।',
    },
  ],
}

export const servicesData = {
  sectionBadge: 'What We Offer',
  heading: 'A Complete Suite of',
  headingAccent: 'Connectivity Services',
  subheading:
    'From enterprise-grade connectivity to smart home internet — Red Data delivers every solution your business and life demands.',
  items: [
    {
      icon: 'Building2',
      to: '/corporate-internet',
      title: 'Corporate Internet',
      title_bn: 'কর্পোরেট ইন্টারনেট',
      description:
        'Enterprise-grade dedicated bandwidth with SLA guarantees. Keep your business operations running at full speed with redundant high-capacity connections.',
      description_bn:
        'SLA গ্যারান্টি সহ এন্টারপ্রাইজ-গ্রেড ডেডিকেটেড ব্যান্ডউইথ। রিডান্ড্যান্ট হাই-ক্যাপাসিটি সংযোগে ব্যবসায়িক কার্যক্রম দ্রুতগতিতে চলুন।',
      tag: 'Enterprise',
      tag_bn: 'এন্টারপ্রাইজ',
      ctaUrl: '/corporate-internet',
      intro:
        'At Red Data, we understand that a reliable and high-speed internet connection is critical for the success of your business. Our Corporate Internet Connectivity service offers robust, secure, and scalable internet solutions tailored to meet the unique demands of your enterprise. With dedicated bandwidth, 24/7 customer support, and guaranteed uptime, we ensure your business operations run smoothly and efficiently.',
      highlights: [
        { icon: 'bolt', text: 'Blazing Fast Speeds' },
        { icon: 'shield', text: 'Dedicated & Secure Bandwidth' },
        { icon: 'infinite', text: 'Unlimited Bandwidth' },
        { icon: 'chip', text: 'Future-Proof Fiber Technology' },
        { icon: 'star', text: 'Superior Quality & Low Latency' },
        { icon: 'clock', text: '24/7 Enterprise Support' },
      ],
      features: [
        'Dedicated leased-line with guaranteed SLA',
        'Redundant fiber backbone across Bangladesh',
        'BGP routing with multiple upstream carriers',
        'Real-time NOC monitoring & proactive alerts',
        'Free integration & on-site technical support',
        'Scalable bandwidth — upgrade any time',
      ],
    },
    {
      icon: 'Home',
      to: '/home-internet',
      title: 'Home Internet',
      title_bn: 'হোম ইন্টারনেট',
      description:
        'Enjoy uninterrupted streaming, gaming, and browsing. Our high-speed home plans are engineered for modern families who demand performance.',
      description_bn:
        'নিরবচ্ছিন্ন স্ট্রিমিং, গেমিং ও ব্রাউজিং দরুন। আমাদের হাই-স্পিড হোম প্ল্যান আধুনিক পরিবারের জন্য তৈরি।',
      tag: 'Residential',
      tag_bn: 'রেসিডেন্শিয়াল',
      ctaUrl: '/home-internet',
      intro:
        'Red Data Home Internet delivers ultra-fast fiber broadband engineered for modern households. From buffer-free 4K streaming and lag-free gaming to seamless video calls and smart-home devices — all on one blisteringly fast connection.',
      highlights: [
        { icon: 'play', text: 'Buffer-less YouTube & Streaming' },
        { icon: 'device', text: 'Unlimited Connected Devices' },
        { icon: 'phone', text: 'Free TalkTime Minutes Included' },
        { icon: 'tv', text: 'OTT Subscription on Higher Plans' },
        { icon: 'wrench', text: 'Free Installation' },
        { icon: 'clock', text: '24/7 Customer Care' },
      ],
      features: [
        'Plans from 15 Mbps up to 100 Mbps',
        'Symmetric upload & download speeds',
        'One-time setup cost from ৳500 only',
        'Free talk-time with every plan',
        'OTT platform access on Crimson & above',
        'No data caps — truly unlimited usage',
      ],
      packages: [
        { name: 'Rose', speed: '15 Mbps', price: '৳525/mo' },
        { name: 'Cherry', speed: '20 Mbps', price: '৳630/mo' },
        { name: 'Raspberry', speed: '30 Mbps', price: '৳735/mo' },
        { name: 'Maroon', speed: '40 Mbps', price: '৳840/mo' },
        { name: 'Scarlet', speed: '50 Mbps', price: '৳1,050/mo' },
        { name: 'Carmine', speed: '100 Mbps', price: '৳2,520/mo' },
      ],
    },
    {
      icon: 'Link2',
      to: '/data-connectivity',
      title: 'Data Connectivity',
      title_bn: 'ডেটা কানেক্টিভিটি',
      description:
        'Seamless data transfer and secure inter-office communication. Our fiber-backed data links ensure zero packet loss at every endpoint.',
      description_bn:
        'নিরবচ্ছিন্ন ডেটা ট্রান্সফার ও সুরক্ষিত অফিসের মধ্যে যোগাযোগ। আমাদের ফাইবার-সমর্থিত লিংকে শূন্য প্যাকেট লস নিশ্চিত।',
      tag: 'Infrastructure',
      tag_bn: 'ইনফ্রাস্ট্রাকচার',
      ctaUrl: '/contact',
      intro:
        `Red Data's Data Connectivity solutions interconnect your offices, data centres, and remote sites with secure, high-throughput fiber links. Backed by a nationwide fiber backbone, our point-to-point and MPLS services deliver carrier-grade reliability with full SLA commitments.`,
      highlights: [
        { icon: 'bolt', text: 'Gigabit-Speed Fiber Links' },
        { icon: 'shield', text: 'Encrypted & Private Circuits' },
        { icon: 'infinite', text: 'Zero Packet Loss Guarantee' },
        { icon: 'chart', text: 'Real-Time Traffic Analytics' },
        { icon: 'wrench', text: 'Dedicated Account Manager' },
        { icon: 'clock', text: '99% Uptime' },
      ],
      features: [
        'Point-to-point & MPLS VPN circuits',
        'Layer 2 / Layer 3 switching options',
        'SDH / OTN transport available',
        'Nationwide coverage across all 64 districts',
        'Rapid provisioning within 5 business days',
        'Fully managed or self-managed options',
      ],
    },
    {
      icon: 'Phone',
      to: '/ip-telephony',
      title: 'IP Telephony',
      title_bn: 'আইপি টেলিফোনি',
      description:
        'Crystal-clear VoIP solutions that cut communication costs while boosting call quality. Modernise your business phone system today.',
      description_bn:
        'স্পষ্ট ভয়েস কোয়ালিটি সহ VoIP সমাধান যোগাযোগ খরচ কমায়। আজই আপনার ব্যবসায়িক ফোন সিস্টেম আধুনিক করুন।',
      tag: 'Voice',
      tag_bn: 'ভয়েস',
      ctaUrl: '/ip-telephony',
      intro:
        `Elevate your business communications with Red Data's IP Telephony Service. Enjoy superior voice quality, seamless integration, cost-effective calling plans, and a wide range of advanced features such as voicemail, call forwarding, and conferencing. Designed for businesses of all sizes.`,
      highlights: [
        { icon: 'phone', text: 'Hosted & On-Premise IPPBX' },
        { icon: 'cloud', text: 'Cloud PBX Service' },
        { icon: 'users', text: 'Call Centre Solution' },
        { icon: 'chart', text: 'Dynamic IVR & Auto-Dialing' },
        { icon: 'link', text: 'CRM Integration' },
        { icon: 'bolt', text: 'Toll-Free & SIP Trunk' },
      ],
      features: [
        'Hosted & On-Premise IPPBX deployment',
        'Cloud PBX with soft-phone apps',
        'Dynamic IVR & auto-attendant',
        'Short code parking & hunting groups',
        'Analog PBX integration',
        'Call forwarding, voicemail & conferencing',
        'CRM & helpdesk integration',
        'Toll-free service & SIP trunk',
      ],
    },
    {
      icon: 'MessageSquare',
      to: '/sms-service',
      title: 'SMS Service',
      title_bn: 'SMS সার্ভিস',
      description:
        'Bulk messaging, transactional alerts, and marketing campaigns — all from a single, intuitive platform with real-time delivery reports.',
      description_bn:
        'বাল্ক মেসেজিং, থানঘতমূলক অ্যালার্ট ও মার্কেটিং ক্যাম্পেইন — রিয়েল-টাইম ডিলিভারি রিপোর্টসহ একটি প্ল্যাটফর্মে।',
      tag: 'Messaging',
      tag_bn: 'মেসেজিং',
      ctaUrl: '/contact',
      intro:
        `Red Data's SMS platform lets businesses send millions of personalised messages with a single API call. Whether it's OTP authentication, order alerts, promotional campaigns, or appointment reminders — our gateway ensures near-instant delivery across all BD operators.`,
      highlights: [
        { icon: 'bolt', text: 'Near-Instant Delivery' },
        { icon: 'chart', text: 'Real-Time Delivery Reports' },
        { icon: 'link', text: 'RESTful API & SMPP Gateway' },
        { icon: 'users', text: 'Bulk & Personalised Messaging' },
        { icon: 'shield', text: 'Masked & Unmasked SMS' },
        { icon: 'star', text: 'All BD Operators Supported' },
      ],
      features: [
        'Bulk, transactional & OTP SMS',
        'RESTful API & SMPP protocol support',
        'Sender ID masking available',
        'Real-time delivery status reports',
        'Scheduled message campaigns',
        'All major Bangladesh operators covered',
      ],
    },
    {
      icon: 'Globe',
      to: '/domain-hosting',
      title: 'Domain & Hosting',
      title_bn: 'ডোমেইন ও হোস্টিং',
      description:
        'Register your domain and host with confidence. 99% uptime, NVMe storage, free SSL, and one-click CMS installs included.',
      description_bn:
        'আস্থার সাথে ডোমেইন নির্ধারণ ও হোস্ট করুন। ৯৯.৯% আপটাইম, NVMe স্টোরেজ, বিনামূল্যে SSL।',
      tag: 'Web',
      tag_bn: 'ওয়েব',
      ctaUrl: '/contact',
      intro:
        `Get your business online with Red Data's domain registration and web hosting services. From lightweight business sites to high-traffic e-commerce stores, our NVMe-powered servers deliver blazing-fast load times with enterprise security built in.`,
      highlights: [
        { icon: 'shield', text: 'Free SSL Certificate' },
        { icon: 'bolt', text: 'NVMe SSD Storage' },
        { icon: 'star', text: '99% Uptime Guarantee' },
        { icon: 'wrench', text: 'One-Click CMS Install' },
        { icon: 'cloud', text: 'Daily Automated Backups' },
        { icon: 'users', text: 'cPanel + Email Hosting' },
      ],
      features: [
        '.com, .net, .org, .com.bd domain registration',
        'Shared, VPS & dedicated server options',
        'Free SSL certificate included',
        'NVMe storage for ultra-fast page loads',
        'cPanel control panel & webmail',
        'One-click WordPress / Joomla install',
        'Daily automated backups',
        '24/7 technical support',
      ],
    },
    {
      icon: 'Shield',
      to: '/managed-services',
      title: 'Managed Services',
      title_bn: 'ম্যানেজড সার্ভিস',
      description:
        'Focus on your core business while our certified engineers manage your entire IT infrastructure — monitoring, maintenance, and rapid response.',
      description_bn:
        'আপনার মূল ব্যবসায়ে মনোযোগ দিন, আমাদের সার্টিফাইড ইঞ্জিনিয়াররা আপনার IT ইনফ্রাস্ট্রাকচার পরিচালনা করাবে।',
      tag: 'IT Management',
      tag_bn: 'IT ম্যানেজমেন্ট',
      ctaUrl: '/contact',
      intro:
        `Red Data Managed IT Services offloads the headaches of infrastructure management from your team. Our certified engineers provide proactive monitoring, rapid incident response, and strategic IT consulting — so your systems stay online and your team stays focused`,
      highlights: [
        { icon: 'clock', text: '24/7 NOC Monitoring' },
        { icon: 'bolt', text: 'Rapid Incident Response' },
        { icon: 'shield', text: 'Network Security Management' },
        { icon: 'wrench', text: 'Preventive Maintenance' },
        { icon: 'chart', text: 'Monthly Performance Reports' },
        { icon: 'users', text: 'Dedicated Account Engineer' },
      ],
      features: [
        'Round-the-clock NOC monitoring',
        'Network security & firewall management',
        'Hardware & software maintenance',
        'On-site and remote support',
        'Disaster recovery planning',
        'Monthly SLA & performance reporting',
      ],
    },
  ],
}

// Stats
export const statsData = [
  { value: '13+', label: 'Years Experience', label_bn: 'যুগুন্ত অভিজ্ঞতা', description: 'Serving homes and businesses since 2012', description_bn: '২০১২ সাল থেকে ঘর ও ব্যবসায় সেবা প্রদান' },
  { value: '99%', label: 'Network Uptime', label_bn: 'নেটওয়ার্ক আপটাইম', description: 'reliable connectivity you can count on', description_bn: 'SLA-সমর্থিত নির্ভরযোগ্যতা' },
  { value: '64', label: 'Districts Covered', label_bn: 'জেলায় কভারেজ', description: 'Nationwide fiber backbone across Bangladesh', description_bn: 'বাংলাদেশজুড়ে ফাইবার ব্যাকবোন' },
  { value: '24 / 7', label: 'Customer Support', label_bn: 'গ্রাহক সহায়তা', description: 'Round-the-clock technical assistance', description_bn: 'সার্বক্ষণিক টেকনিক্যাল সহায়তা' },
]

// Why Choose Us
export const whyUsData = {
  sectionBadge: 'Our Advantages',
  heading: 'Why Thousands Choose',
  headingAccent: 'Red Data',
  items: [
    { icon: 'Zap',         title: 'Free Integration', title_bn: 'বিনামূল্যে ইন্টিগ্রেশন', description: 'We set up everything from scratch — no hidden charges, no hassle.', description_bn: 'আমরা শুরু থেকে সবকিছু সেটআপ করি — কোনো লুকানো চার্জ নেই, কোনো ঝামেলা নেই।' },
    { icon: 'Rocket',      title: 'Fast Installation', title_bn: 'দ্রুত ইনস্টলেশন', description: 'Get connected within 24 hours of sign-up with our rapid deployment team.', description_bn: 'সাইন আপের ২৪ ঘণ্টার মধ্যে আমাদের দ্রুত ডিপ্লয়মেন্ট দল সংযুক্ত করবে।' },
    { icon: 'Lock',        title: 'Blazing-Fast & Secure', title_bn: 'দ্রুততম ও নিরাপদ', description: 'Fiber-grade speeds with enterprise-class network security at every level.', description_bn: 'ফাইবার-গ্রেড গতি এবং সব স্তরে এন্টারপ্রাইজ-ক্লাস নেটওয়ার্ক সিকিউরিটি।' },
    { icon: 'DollarSign',  title: 'Competitive Pricing', title_bn: 'প্রতিযোগিতামূলক মূল্য', description: 'Premium performance without premium price tags. BTRC approved tariff.', description_bn: 'প্রিমিয়াম পারফর্মান্স, প্রিমিয়াম মূল্য ছাড়াই। BTRC অনুমোদিত ট্যারিফ।' },
    { icon: 'TrendingUp',  title: 'Continuous Improvement', title_bn: 'নিরন্তর উন্নতি', description: 'We invest constantly in network upgrades to keep you ahead of demand.', description_bn: 'আমরা নিরন্তর নেটওয়ার্ক আপগ্রেডে বিনিয়োগ করি।' },
    { icon: 'Headphones',  title: '24×7 Proactive Support', title_bn: '২৪×৭ প্রোঅ্যাক্টিভ সহায়তা', description: 'Round-the-clock NOC monitoring resolves issues before you notice.', description_bn: 'আমাদের NOC দল সার্বক্ষণিক আপনার সংযোগ মনিটর করে, যেন সমস্যা বোঝার আগেই সমাধান হয়।' },
  ],
}
