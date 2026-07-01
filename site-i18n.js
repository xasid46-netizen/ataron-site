(() => {
  const rtlLanguages = new Set(["he", "ar"]);
  const storageKey = "ataron.site.language";

  const dictionaries = {
    ru: {
      lang: "ru",
      title: "Ataron / אתרון — всё по проекту в одном месте",
      description: "Ataron — приложение для строительных проектов: фото, документы, чертежи, чат, участники, заметки и история проекта в одном рабочем пространстве.",
      common: {
        features: "Функции",
        audience: "Для кого",
        contact: "Связаться",
        launch: "Запуск",
        privacy: "Privacy",
        terms: "Terms",
        demo: "Открыть демо",
        footerCopy: "© 2026 Ataron. MVP demo.",
        privacyPolicy: "Privacy Policy",
        termsOfUse: "Terms of Use"
      },
      home: {
        eyebrow: "MVP для строительных проектов",
        h1: "Всё по проекту в одном месте.",
        lead: "Ataron помогает кабланам, прорабам, архитекторам, работникам и заказчикам хранить адрес, фотографии, документы, чертежи, чат, участников, заметки и историю проекта в одном рабочем пространстве.",
        primary: "Открыть демо",
        secondary: "Посмотреть возможности",
        trust: ["🏗️ Проекты", "📷 Фото", "📄 Документы", "💬 Чат"],
        phoneProject: "Тестовый объект MVP",
        phoneAddress: "📍 Хайфа, порт 1",
        map: "📍 Карта объекта",
        tiles: [
          ["📷", "Фото", "0 фото"],
          ["📄", "Документы", "1 документ"],
          ["💬", "Чат", "3 сообщения"],
          ["📝", "Заметки", "4 раздела"]
        ],
        demoEyebrow: "Демо MVP",
        demoTitle: "Покажите Ataron за 30 секунд",
        demoText: "Сейчас сайт показывает главный сценарий продукта: один проект, карта объекта, быстрые разделы, фото, документы, чат, заметки и участники. Этого достаточно, чтобы объяснить идею инвестору, партнёру или будущему пользователю.",
        demoButtons: ["Что умеет MVP", "Privacy", "Terms"],
        featuresEyebrow: "Основные функции",
        featuresTitle: "Рабочее пространство для каждого строительного проекта",
        featuresCards: [
          ["Проекты", "Каждый объект хранится как отдельный проект с адресом, статусом, участниками и историей."],
          ["Фото объекта", "Фото привязаны к конкретному проекту и помогают фиксировать этапы работ."],
          ["Документы и чертежи", "PDF, изображения и файлы проекта собраны в одном месте и доступны команде."],
          ["Чат проекта", "Вопросы к каблану, архитектору, прорабу и работникам остаются внутри проекта."],
          ["Биржа работников", "Будущий раздел для поиска рабочих, бригад и вакансий в строительной отрасли рядом с вашими проектами."],
          ["Заметки", "Материалы, вопросы заказчику, проверки и решения архитектора быстро фиксируются в проекте."],
          ["QR-код проекта", "QR-код можно разместить на объекте, чтобы быстро открыть карточку проекта."]
        ],
        audienceEyebrow: "Для кого",
        audienceTitle: "Ataron создаётся для реальной стройки",
        audienceText: "Приложение универсально для строительной отрасли: кабланы, прорабы, сантехники, плиточники, архитекторы, заказчики, поставщики и команды на объекте.",
        audienceList: ["👷 Кабланы и прорабы", "🏢 Строительные компании", "📐 Архитекторы и проектировщики", "🧱 Рабочие и бригады", "🤝 Заказчики", "🏪 Поставщики"],
        contactEyebrow: "Связаться",
        contactTitle: "Хотите посмотреть Ataron для вашей стройки?",
        contactText: "Напишите нам, если хотите получить демо, обсудить пилотный проект или первыми попробовать Ataron в строительной компании.",
        contactLabel: "Почта для связи",
        contactButton: "Оставить заявку",
        formLabels: {
          name: "Имя",
          phone: "Телефон",
          company: "Компания",
          message: "Сообщение"
        },
        formPlaceholders: {
          name: "Михаил",
          phone: "+972",
          company: "Ataron Demo",
          message: "Хочу посмотреть демо Ataron"
        },
        formNote: "После отправки откроется письмо с уже заполненной заявкой.",
        formSubject: "Заявка на демо Ataron",
        formStatus: "Готово. Открылось письмо с вашей заявкой.",
        launchEyebrow: "Запуск",
        launchTitle: "Сначала web app, затем Google Play и App Store",
        launchText: "Ataron стартует как PWA на домене ataron.co.il. После стабилизации MVP приложение можно упаковать для Google Play и Apple App Store.",
        launchSteps: ["Сайт: ataron.co.il", "Web app / PWA", "Google Play", "App Store"]
      },
      privacy: {
        title: "Privacy Policy",
        intro: "Политика конфиденциальности Ataron / אתרון. Последнее обновление: 29.06.2026.",
        note: "Этот документ подготовлен для MVP и будущей публикации приложения. Перед коммерческим запуском рекомендуется юридическая проверка.",
        sections: [
          ["1. Кто мы", ["Ataron — приложение для управления строительными проектами. В приложении можно хранить информацию о проектах, адреса объектов, фотографии, документы, чертежи, сообщения, участников, заметки и историю работ."]],
          ["2. Какие данные мы можем собирать", ["данные аккаунта: имя, телефон, email, пароль в защищённом виде;", "данные компании: название компании, сотрудники, роли и права доступа;", "данные проектов: название проекта, адрес, описание, статус, участники;", "загруженные файлы: фотографии, документы, чертежи и изображения;", "сообщения и заметки внутри проекта;", "технические данные: тип устройства, браузер, язык, примерное время использования, ошибки приложения."], "list"],
          ["3. Как мы используем данные", ["для работы приложения и отображения проектов пользователю;", "для хранения фото, документов, сообщений и истории проекта;", "для управления доступом участников проекта;", "для улучшения стабильности, безопасности и качества сервиса;", "для связи с пользователем по вопросам аккаунта, безопасности или поддержки."], "list"],
          ["4. Фото, документы и данные объектов", ["Фотографии, документы, чертежи, адреса и сообщения относятся к конкретным строительным проектам. Мы не продаём эти данные третьим лицам. Доступ к данным проекта получают только пользователи, которым владелец проекта или компания предоставили доступ."]],
          ["5. Передача данных третьим сервисам", ["Для работы приложения могут использоваться поставщики инфраструктуры: хостинг, база данных, хранение файлов, аналитика ошибок, отправка email или SMS. Такие поставщики получают доступ только к данным, необходимым для предоставления технической услуги."]],
          ["6. Хранение и безопасность", ["Мы стремимся защищать данные пользователей с помощью разумных технических и организационных мер. Это включает ограничение доступа, защищённую передачу данных, контроль сессий и хранение паролей в защищённом виде."]],
          ["7. Права пользователя", ["Пользователь может запросить доступ к своим данным, исправление данных, удаление аккаунта или удаление данных, если это не противоречит законным обязательствам и правам других участников проекта."]],
          ["8. Удаление аккаунта", ["В будущей production-версии Ataron будет доступна функция удаления аккаунта. После удаления аккаунта личные данные пользователя будут удалены или обезличены, если их хранение не требуется для законных целей, безопасности или истории проекта компании."]],
          ["9. Дети", ["Ataron предназначен для профессионального использования в строительной отрасли и не предназначен для детей."]],
          ["10. Изменения политики", ["Мы можем обновлять эту политику. Новая версия будет опубликована на этой странице с датой последнего обновления."]],
          ["11. Контакты", ["По вопросам конфиденциальности можно связаться с нами через официальный сайт Ataron. Для production-версии будет указан рабочий email поддержки: privacy@ataron.co.il."]]
        ]
      },
      terms: {
        title: "Terms of Use",
        intro: "Условия использования Ataron / אתרון. Последнее обновление: 29.06.2026.",
        note: "Этот документ подготовлен для MVP и будущей публикации приложения. Перед коммерческим запуском рекомендуется юридическая проверка.",
        sections: [
          ["1. О сервисе", ["Ataron — приложение для управления строительными проектами. Сервис помогает хранить данные проекта, фотографии, документы, чертежи, чат, участников, заметки и историю работ в одном рабочем пространстве."]],
          ["2. Принятие условий", ["Используя Ataron, пользователь соглашается с этими условиями. Если пользователь не согласен с условиями, он не должен использовать сервис."]],
          ["3. Аккаунт пользователя", ["пользователь должен предоставлять достоверную информацию при регистрации;", "пользователь отвечает за сохранность доступа к аккаунту;", "пользователь обязан сообщить нам о подозрении на несанкционированный доступ;", "компания или владелец проекта отвечает за управление участниками и ролями внутри проекта."], "list"],
          ["4. Данные проекта", ["Пользователь отвечает за данные, которые он загружает в Ataron: фотографии, документы, чертежи, сообщения, адреса, заметки и другую информацию. Пользователь должен иметь право загружать и использовать эти материалы."]],
          ["5. Разрешённое использование", ["Ataron предназначен для законного профессионального использования в строительной отрасли. Нельзя использовать сервис для незаконной деятельности, нарушения прав третьих лиц, распространения вредоносного кода или попыток несанкционированного доступа."]],
          ["6. Роли и доступ", ["В проекте могут быть разные роли: владелец, каблан, прораб, работник, архитектор, заказчик и другие участники. Владелец проекта или компания отвечает за то, кому предоставляется доступ к проекту и какие права получает участник."]],
          ["7. Beta и MVP", ["На этапе MVP некоторые функции могут быть недоступны, работать в тестовом режиме или изменяться. Разделы поставщиков, аренды техники и биржи работников могут запускаться постепенно."]],
          ["8. Подписка и ограничения", ["В будущем Ataron может предлагать бесплатный тариф и платные подписки. Предварительная концепция: бесплатно до 2 проектов, платная подписка для большего количества проектов или расширенных функций."]],
          ["9. Доступность сервиса", ["Мы стремимся обеспечить стабильную работу Ataron, но не гарантируем, что сервис всегда будет доступен без перерывов, ошибок или технических работ."]],
          ["10. Ограничение ответственности", ["Ataron помогает организовывать информацию по строительным проектам, но не заменяет профессиональный контроль, инженерную проверку, юридическую консультацию, бухгалтерию или официальное управление строительными работами. Пользователь самостоятельно отвечает за решения, принятые на основе данных в сервисе."]],
          ["11. Интеллектуальная собственность", ["Название Ataron / אתרון, логотип, дизайн и элементы бренда принадлежат владельцу проекта Ataron. Пользователь сохраняет права на материалы, которые он загружает в свои проекты, при условии что эти материалы принадлежат ему или используются законно."]],
          ["12. Прекращение доступа", ["Мы можем ограничить или прекратить доступ к сервису при нарушении условий, угрозе безопасности, незаконном использовании или злоупотреблении сервисом."]],
          ["13. Изменения условий", ["Мы можем обновлять эти условия. Новая версия будет опубликована на этой странице с датой последнего обновления."]],
          ["14. Контакты", ["По вопросам условий использования можно связаться с нами через официальный сайт Ataron. Для production-версии будет указан рабочий email поддержки: support@ataron.co.il."]]
        ]
      }
    },
    en: {
      lang: "en",
      title: "Ataron / אתרון — everything about the project in one place",
      description: "Ataron is a construction project app for photos, documents, drawings, chat, participants, notes and project history in one workspace.",
      common: {
        features: "Features",
        audience: "For whom",
        contact: "Contact",
        launch: "Launch",
        privacy: "Privacy",
        terms: "Terms",
        demo: "Open demo",
        footerCopy: "© 2026 Ataron. MVP demo.",
        privacyPolicy: "Privacy Policy",
        termsOfUse: "Terms of Use"
      },
      home: {
        eyebrow: "MVP for construction projects",
        h1: "Everything about the project in one place.",
        lead: "Ataron helps contractors, foremen, architects, workers and clients keep the address, photos, documents, drawings, chat, participants, notes and project history in one workspace.",
        primary: "Open demo",
        secondary: "Explore features",
        trust: ["🏗️ Projects", "📷 Photos", "📄 Documents", "💬 Chat"],
        phoneProject: "MVP test project",
        phoneAddress: "📍 Haifa, port 1",
        map: "📍 Project map",
        tiles: [["📷", "Photos", "0 photos"], ["📄", "Documents", "1 document"], ["💬", "Chat", "3 messages"], ["📝", "Notes", "4 sections"]],
        demoEyebrow: "MVP demo",
        demoTitle: "Show Ataron in 30 seconds",
        demoText: "The site presents the main product flow: one project, project map, quick sections, photos, documents, chat, notes and participants. It is enough to explain the idea to an investor, partner or future user.",
        demoButtons: ["What the MVP does", "Privacy", "Terms"],
        featuresEyebrow: "Core features",
        featuresTitle: "A workspace for every construction project",
        featuresCards: [["Projects", "Each site is stored as a separate project with address, status, participants and history."], ["Project photos", "Photos are linked to the exact project and help document work stages."], ["Documents and drawings", "PDFs, images and project files are kept in one place and available to the team."], ["Project chat", "Questions for the contractor, architect, foreman and workers stay inside the project."], ["Worker marketplace", "A future section for finding workers, crews and construction vacancies near your projects."], ["Notes", "Materials, client questions, checks and architect decisions can be recorded quickly."], ["Project QR code", "A QR code can be placed on site to open the project card quickly."]],
        audienceEyebrow: "For whom",
        audienceTitle: "Ataron is built for real construction work",
        audienceText: "The app is universal for the construction industry: contractors, foremen, plumbers, tilers, architects, clients, suppliers and field teams.",
        audienceList: ["👷 Contractors and foremen", "🏢 Construction companies", "📐 Architects and planners", "🧱 Workers and crews", "🤝 Clients", "🏪 Suppliers"],
        contactEyebrow: "Contact",
        contactTitle: "Want to see Ataron for your construction work?",
        contactText: "Write to us if you want a demo, to discuss a pilot project, or to be among the first to try Ataron in a construction company.",
        contactLabel: "Contact email",
        contactButton: "Request demo",
        formLabels: {
          name: "Name",
          phone: "Phone",
          company: "Company",
          message: "Message"
        },
        formPlaceholders: {
          name: "Michael",
          phone: "+972",
          company: "Ataron Demo",
          message: "I want to see an Ataron demo"
        },
        formNote: "After submitting, an email with your request will open.",
        formSubject: "Ataron demo request",
        formStatus: "Done. An email with your request has opened.",
        launchEyebrow: "Launch",
        launchTitle: "First web app, then Google Play and App Store",
        launchText: "Ataron starts as a PWA on ataron.co.il. After the MVP stabilizes, it can be packaged for Google Play and Apple App Store.",
        launchSteps: ["Website: ataron.co.il", "Web app / PWA", "Google Play", "App Store"]
      }
    },
    he: {
      lang: "he",
      title: "אתרון | Ataron — כל הפרויקט במקום אחד",
      description: "אתרון היא אפליקציה לניהול פרויקטים בבנייה: תמונות, מסמכים, תוכניות, צ'אט, משתתפים, הערות והיסטוריה במקום אחד.",
      common: {
        features: "יכולות",
        audience: "למי זה מתאים",
        contact: "יצירת קשר",
        launch: "השקה",
        privacy: "פרטיות",
        terms: "תנאים",
        demo: "פתיחת דמו",
        footerCopy: "© 2026 Ataron. דמו MVP.",
        privacyPolicy: "מדיניות פרטיות",
        termsOfUse: "תנאי שימוש"
      },
      home: {
        eyebrow: "MVP לפרויקטים בבנייה",
        h1: "כל הפרויקט במקום אחד.",
        lead: "אתרון עוזרת לקבלנים, מנהלי עבודה, אדריכלים, עובדים ולקוחות לשמור כתובת, תמונות, מסמכים, תוכניות, צ'אט, משתתפים, הערות והיסטוריית פרויקט במקום עבודה אחד.",
        primary: "פתיחת דמו",
        secondary: "צפייה ביכולות",
        trust: ["🏗️ פרויקטים", "📷 תמונות", "📄 מסמכים", "💬 צ'אט"],
        phoneProject: "פרויקט בדיקה MVP",
        phoneAddress: "📍 חיפה, נמל 1",
        map: "📍 מפת הפרויקט",
        tiles: [["📷", "תמונות", "0 תמונות"], ["📄", "מסמכים", "מסמך 1"], ["💬", "צ'אט", "3 הודעות"], ["📝", "הערות", "4 אזורים"]],
        demoEyebrow: "דמו MVP",
        demoTitle: "להציג את Ataron ב-30 שניות",
        demoText: "האתר מציג את התרחיש המרכזי של המוצר: פרויקט אחד, מפה, אזורים מהירים, תמונות, מסמכים, צ'אט, הערות ומשתתפים. זה מספיק כדי להסביר את הרעיון למשקיע, שותף או משתמש עתידי.",
        demoButtons: ["מה ה-MVP עושה", "פרטיות", "תנאים"],
        featuresEyebrow: "יכולות מרכזיות",
        featuresTitle: "מרחב עבודה לכל פרויקט בנייה",
        featuresCards: [["פרויקטים", "כל אתר נשמר כפרויקט נפרד עם כתובת, סטטוס, משתתפים והיסטוריה."], ["תמונות מהאתר", "התמונות מקושרות לפרויקט ומאפשרות לתעד שלבי עבודה."], ["מסמכים ותוכניות", "PDF, תמונות וקבצי פרויקט מרוכזים במקום אחד וזמינים לצוות."], ["צ'אט פרויקט", "שאלות לקבלן, לאדריכל, למנהל העבודה ולעובדים נשארות בתוך הפרויקט."], ["שוק עובדים", "אזור עתידי למציאת עובדים, צוותים ומשרות בענף הבנייה ליד הפרויקטים שלכם."], ["הערות", "חומרים, שאלות ללקוח, בדיקות והחלטות אדריכל נרשמים במהירות."], ["קוד QR לפרויקט", "אפשר להציב QR באתר כדי לפתוח במהירות את כרטיס הפרויקט."]],
        audienceEyebrow: "למי זה מתאים",
        audienceTitle: "Ataron נבנית לעבודה אמיתית בשטח",
        audienceText: "האפליקציה מתאימה לענף הבנייה כולו: קבלנים, מנהלי עבודה, אינסטלטורים, רצפים, אדריכלים, לקוחות, ספקים וצוותי שטח.",
        audienceList: ["👷 קבלנים ומנהלי עבודה", "🏢 חברות בנייה", "📐 אדריכלים ומתכננים", "🧱 עובדים וצוותים", "🤝 לקוחות", "🏪 ספקים"],
        contactEyebrow: "יצירת קשר",
        contactTitle: "רוצים לראות את Ataron עבור אתר הבנייה שלכם?",
        contactText: "כתבו לנו אם תרצו לקבל דמו, לדבר על פיילוט או להיות בין הראשונים שמנסים את Ataron בחברת בנייה.",
        contactLabel: "אימייל ליצירת קשר",
        contactButton: "בקשת דמו",
        formLabels: {
          name: "שם",
          phone: "טלפון",
          company: "חברה",
          message: "הודעה"
        },
        formPlaceholders: {
          name: "מיכאל",
          phone: "+972",
          company: "Ataron Demo",
          message: "אני רוצה לראות דמו של Ataron"
        },
        formNote: "לאחר השליחה ייפתח אימייל עם הבקשה שלכם.",
        formSubject: "בקשה לדמו של Ataron",
        formStatus: "בוצע. נפתח אימייל עם הבקשה שלכם.",
        launchEyebrow: "השקה",
        launchTitle: "קודם web app, אחר כך Google Play ו-App Store",
        launchText: "Ataron מתחילה כ-PWA בדומיין ataron.co.il. אחרי ייצוב ה-MVP אפשר לארוז אותה ל-Google Play ול-Apple App Store.",
        launchSteps: ["אתר: ataron.co.il", "Web app / PWA", "Google Play", "App Store"]
      }
    },
    ar: {
      lang: "ar",
      title: "Ataron / אתרון — كل ما يخص المشروع في مكان واحد",
      description: "Ataron تطبيق لإدارة مشاريع البناء: الصور، المستندات، المخططات، الدردشة، المشاركون، الملاحظات وتاريخ المشروع في مساحة عمل واحدة.",
      common: {
        features: "المزايا",
        audience: "لمن",
        contact: "تواصل",
        launch: "الإطلاق",
        privacy: "الخصوصية",
        terms: "الشروط",
        demo: "فتح العرض",
        footerCopy: "© 2026 Ataron. عرض MVP.",
        privacyPolicy: "سياسة الخصوصية",
        termsOfUse: "شروط الاستخدام"
      },
      home: {
        eyebrow: "MVP لمشاريع البناء",
        h1: "كل ما يخص المشروع في مكان واحد.",
        lead: "يساعد Ataron المقاولين والمشرفين والمهندسين والعمال والعملاء على حفظ العنوان والصور والمستندات والمخططات والدردشة والمشاركين والملاحظات وتاريخ المشروع في مساحة عمل واحدة.",
        primary: "فتح العرض",
        secondary: "مشاهدة المزايا",
        trust: ["🏗️ مشاريع", "📷 صور", "📄 مستندات", "💬 دردشة"],
        phoneProject: "مشروع اختبار MVP",
        phoneAddress: "📍 حيفا، الميناء 1",
        map: "📍 خريطة المشروع",
        tiles: [["📷", "صور", "0 صور"], ["📄", "مستندات", "مستند 1"], ["💬", "دردشة", "3 رسائل"], ["📝", "ملاحظات", "4 أقسام"]],
        demoEyebrow: "عرض MVP",
        demoTitle: "اعرض Ataron خلال 30 ثانية",
        demoText: "يعرض الموقع السيناريو الأساسي للمنتج: مشروع واحد، خريطة، أقسام سريعة، صور، مستندات، دردشة، ملاحظات ومشاركون. هذا يكفي لشرح الفكرة لمستثمر أو شريك أو مستخدم مستقبلي.",
        demoButtons: ["ما الذي يفعله MVP", "الخصوصية", "الشروط"],
        featuresEyebrow: "المزايا الأساسية",
        featuresTitle: "مساحة عمل لكل مشروع بناء",
        featuresCards: [["المشاريع", "كل موقع محفوظ كمشروع مستقل مع العنوان والحالة والمشاركين والتاريخ."], ["صور الموقع", "الصور مرتبطة بالمشروع وتساعد على توثيق مراحل العمل."], ["المستندات والمخططات", "ملفات PDF والصور وملفات المشروع محفوظة في مكان واحد ومتاحة للفريق."], ["دردشة المشروع", "أسئلة المقاول والمهندس والمشرف والعمال تبقى داخل المشروع."], ["سوق العمال", "قسم مستقبلي للعثور على عمال وفرق ووظائف في قطاع البناء بالقرب من مشاريعك."], ["الملاحظات", "المواد والأسئلة والفحوصات وقرارات المهندس تُسجل بسرعة."], ["رمز QR للمشروع", "يمكن وضع رمز QR في الموقع لفتح بطاقة المشروع بسرعة."]],
        audienceEyebrow: "لمن",
        audienceTitle: "Ataron مصمم للعمل الحقيقي في مواقع البناء",
        audienceText: "التطبيق مناسب لقطاع البناء كله: المقاولون، المشرفون، السباكون، المبلطون، المهندسون، العملاء، الموردون وفرق العمل.",
        audienceList: ["👷 مقاولون ومشرفون", "🏢 شركات بناء", "📐 مهندسون ومخططون", "🧱 عمال وفرق", "🤝 عملاء", "🏪 موردون"],
        contactEyebrow: "تواصل",
        contactTitle: "هل تريد مشاهدة Ataron لموقع البناء الخاص بك؟",
        contactText: "راسلنا إذا كنت تريد عرضاً تجريبياً أو مناقشة مشروع تجريبي أو تجربة Ataron مبكراً في شركة بناء.",
        contactLabel: "البريد للتواصل",
        contactButton: "طلب عرض",
        formLabels: {
          name: "الاسم",
          phone: "الهاتف",
          company: "الشركة",
          message: "الرسالة"
        },
        formPlaceholders: {
          name: "ميخائيل",
          phone: "+972",
          company: "Ataron Demo",
          message: "أريد مشاهدة عرض Ataron"
        },
        formNote: "بعد الإرسال سيتم فتح بريد إلكتروني يحتوي على طلبك.",
        formSubject: "طلب عرض Ataron",
        formStatus: "تم. تم فتح بريد إلكتروني يحتوي على طلبك.",
        launchEyebrow: "الإطلاق",
        launchTitle: "أولاً web app ثم Google Play و App Store",
        launchText: "يبدأ Ataron كتطبيق PWA على ataron.co.il. بعد استقرار MVP يمكن تجهيزه لـ Google Play و Apple App Store.",
        launchSteps: ["الموقع: ataron.co.il", "Web app / PWA", "Google Play", "App Store"]
      }
    }
  };

  dictionaries.en.privacy = {
    title: "Privacy Policy",
    intro: "Ataron / אתרון Privacy Policy. Last updated: 29.06.2026.",
    note: "This document is prepared for the MVP and future app publication. Legal review is recommended before commercial launch.",
    sections: [
      ["1. Who we are", ["Ataron is an app for managing construction projects. The app can store project information, site addresses, photos, documents, drawings, messages, participants, notes and work history."]],
      ["2. Data we may collect", ["account data: name, phone, email and protected password;", "company data: company name, employees, roles and permissions;", "project data: project name, address, description, status and participants;", "uploaded files: photos, documents, drawings and images;", "messages and notes inside a project;", "technical data: device type, browser, language, approximate usage time and app errors."], "list"],
      ["3. How we use data", ["to run the app and show projects to users;", "to store photos, documents, messages and project history;", "to manage participant access;", "to improve stability, security and product quality;", "to contact users about account, security or support matters."], "list"],
      ["4. Photos, documents and site data", ["Photos, documents, drawings, addresses and messages belong to specific construction projects. We do not sell this data to third parties. Access is provided only to users approved by the project owner or company."]],
      ["5. Third-party services", ["The app may use infrastructure providers for hosting, databases, file storage, error analytics, email or SMS. Providers receive only the data needed to provide the technical service."]],
      ["6. Storage and security", ["We aim to protect user data with reasonable technical and organizational measures, including access limits, secure transmission, session controls and protected password storage."]],
      ["7. User rights", ["A user may request access, correction, account deletion or data deletion when this does not conflict with legal obligations or the rights of other project participants."]],
      ["8. Account deletion", ["The future production version of Ataron will include account deletion. After deletion, personal data will be deleted or anonymized unless retention is required for legal, security or company project-history reasons."]],
      ["9. Children", ["Ataron is intended for professional use in construction and is not intended for children."]],
      ["10. Changes", ["We may update this policy. The new version will be published on this page with the last updated date."]],
      ["11. Contact", ["For privacy questions, contact us through the official Ataron website. Production support email: privacy@ataron.co.il."]]
    ]
  };

  dictionaries.en.terms = {
    title: "Terms of Use",
    intro: "Ataron / אתרון Terms of Use. Last updated: 29.06.2026.",
    note: "This document is prepared for the MVP and future app publication. Legal review is recommended before commercial launch.",
    sections: [
      ["1. About the service", ["Ataron is an app for managing construction projects. It helps keep project data, photos, documents, drawings, chat, participants, notes and work history in one workspace."]],
      ["2. Acceptance", ["By using Ataron, the user agrees to these terms. If the user does not agree, they should not use the service."]],
      ["3. User account", ["the user must provide accurate registration information;", "the user is responsible for protecting account access;", "the user must notify us about suspected unauthorized access;", "the company or project owner manages participants and roles inside the project."], "list"],
      ["4. Project data", ["The user is responsible for data uploaded to Ataron: photos, documents, drawings, messages, addresses, notes and other information. The user must have the right to upload and use these materials."]],
      ["5. Permitted use", ["Ataron is intended for lawful professional use in construction. It may not be used for illegal activity, rights violations, harmful code or unauthorized access attempts."]],
      ["6. Roles and access", ["Projects may include roles such as owner, contractor, foreman, worker, architect, client and other participants. The project owner or company is responsible for access and permissions."]],
      ["7. Beta and MVP", ["During the MVP stage, some features may be unavailable, work in test mode or change. Suppliers, equipment rental and worker marketplace sections may launch gradually."]],
      ["8. Subscription", ["In the future Ataron may offer a free plan and paid subscriptions. Preliminary concept: free up to 2 projects and paid subscription for more projects or advanced features."]],
      ["9. Availability", ["We aim to keep Ataron stable, but do not guarantee uninterrupted or error-free availability."]],
      ["10. Limitation of responsibility", ["Ataron helps organize construction project information, but does not replace professional supervision, engineering review, legal advice, accounting or official construction management."]],
      ["11. Intellectual property", ["The Ataron / אתרון name, logo, design and brand assets belong to the Ataron project owner. Users retain rights to materials they legally upload."]],
      ["12. Termination", ["We may limit or terminate access for terms violations, security threats, illegal use or abuse of the service."]],
      ["13. Changes", ["We may update these terms. The new version will be published on this page with the last updated date."]],
      ["14. Contact", ["For terms questions, contact us through the official Ataron website. Production support email: support@ataron.co.il."]]
    ]
  };

  dictionaries.he.privacy = {
    title: "מדיניות פרטיות",
    intro: "מדיניות הפרטיות של Ataron / אתרון. עודכן לאחרונה: 29.06.2026.",
    note: "מסמך זה הוכן עבור MVP ופרסום עתידי של האפליקציה. לפני השקה מסחרית מומלץ לבצע בדיקה משפטית.",
    sections: [
      ["1. מי אנחנו", ["Ataron היא אפליקציה לניהול פרויקטים בבנייה. באפליקציה ניתן לשמור מידע על פרויקטים, כתובות אתרים, תמונות, מסמכים, תוכניות, הודעות, משתתפים, הערות והיסטוריית עבודה."]],
      ["2. אילו נתונים אנו עשויים לאסוף", ["נתוני חשבון: שם, טלפון, אימייל וסיסמה מוגנת;", "נתוני חברה: שם חברה, עובדים, תפקידים והרשאות;", "נתוני פרויקטים: שם, כתובת, תיאור, סטטוס ומשתתפים;", "קבצים שהועלו: תמונות, מסמכים, תוכניות ותמונות;", "הודעות והערות בתוך פרויקט;", "נתונים טכניים: סוג מכשיר, דפדפן, שפה, זמן שימוש משוער ושגיאות אפליקציה."], "list"],
      ["3. איך אנו משתמשים בנתונים", ["להפעלת האפליקציה והצגת פרויקטים;", "לשמירת תמונות, מסמכים, הודעות והיסטוריית פרויקט;", "לניהול גישה של משתתפים;", "לשיפור יציבות, אבטחה ואיכות השירות;", "ליצירת קשר בנושאי חשבון, אבטחה או תמיכה."], "list"],
      ["4. תמונות, מסמכים ונתוני אתר", ["תמונות, מסמכים, תוכניות, כתובות והודעות שייכים לפרויקטים ספציפיים. איננו מוכרים נתונים אלו לצדדים שלישיים. הגישה ניתנת רק למשתמשים שאושרו על ידי בעל הפרויקט או החברה."]],
      ["5. שירותי צד שלישי", ["האפליקציה עשויה להשתמש בספקי תשתית כגון אחסון, מסד נתונים, שמירת קבצים, ניתוח שגיאות, אימייל או SMS. ספקים מקבלים רק את הנתונים הנדרשים לשירות הטכני."]],
      ["6. שמירה ואבטחה", ["אנו שואפים להגן על נתוני משתמשים באמצעים טכניים וארגוניים סבירים, כולל הגבלת גישה, העברה מאובטחת, בקרת סשנים ושמירת סיסמאות מוגנת."]],
      ["7. זכויות משתמש", ["משתמש יכול לבקש גישה, תיקון, מחיקת חשבון או מחיקת נתונים, כל עוד הדבר אינו סותר חובות חוקיות או זכויות של משתתפים אחרים בפרויקט."]],
      ["8. מחיקת חשבון", ["בגרסת production עתידית תהיה אפשרות למחיקת חשבון. לאחר המחיקה נתונים אישיים יימחקו או יעברו אנונימיזציה, אלא אם נדרש לשמור אותם מטעמי חוק, אבטחה או היסטוריית פרויקט של החברה."]],
      ["9. ילדים", ["Ataron מיועדת לשימוש מקצועי בענף הבנייה ואינה מיועדת לילדים."]],
      ["10. שינויים", ["אנו עשויים לעדכן מדיניות זו. הגרסה החדשה תפורסם בעמוד זה עם תאריך העדכון."]],
      ["11. יצירת קשר", ["לשאלות פרטיות ניתן לפנות דרך האתר הרשמי של Ataron. אימייל תמיכה עתידי: privacy@ataron.co.il."]]
    ]
  };

  dictionaries.he.terms = {
    title: "תנאי שימוש",
    intro: "תנאי השימוש של Ataron / אתרון. עודכן לאחרונה: 29.06.2026.",
    note: "מסמך זה הוכן עבור MVP ופרסום עתידי של האפליקציה. לפני השקה מסחרית מומלץ לבצע בדיקה משפטית.",
    sections: [
      ["1. על השירות", ["Ataron היא אפליקציה לניהול פרויקטים בבנייה. השירות עוזר לשמור נתוני פרויקט, תמונות, מסמכים, תוכניות, צ'אט, משתתפים, הערות והיסטוריית עבודה במקום אחד."]],
      ["2. קבלת התנאים", ["בשימוש ב-Ataron המשתמש מסכים לתנאים אלו. אם המשתמש אינו מסכים, עליו לא להשתמש בשירות."]],
      ["3. חשבון משתמש", ["על המשתמש למסור מידע נכון בהרשמה;", "המשתמש אחראי לשמירת הגישה לחשבון;", "המשתמש חייב להודיע על חשד לגישה לא מורשית;", "החברה או בעל הפרויקט אחראים לניהול משתתפים ותפקידים בפרויקט."], "list"],
      ["4. נתוני פרויקט", ["המשתמש אחראי לנתונים שהוא מעלה ל-Ataron: תמונות, מסמכים, תוכניות, הודעות, כתובות, הערות ומידע נוסף. עליו להיות בעל הזכות להעלות ולהשתמש בחומרים אלו."]],
      ["5. שימוש מותר", ["Ataron מיועדת לשימוש מקצועי וחוקי בענף הבנייה. אין להשתמש בשירות לפעילות לא חוקית, פגיעה בזכויות, הפצת קוד מזיק או ניסיונות גישה לא מורשית."]],
      ["6. תפקידים וגישה", ["בפרויקט יכולים להיות תפקידים שונים: בעלים, קבלן, מנהל עבודה, עובד, אדריכל, לקוח ומשתתפים נוספים. בעל הפרויקט או החברה אחראים לניהול הגישה וההרשאות."]],
      ["7. Beta ו-MVP", ["בשלב MVP חלק מהיכולות עשויות לא להיות זמינות, לעבוד במצב בדיקה או להשתנות. אזורי ספקים, השכרת ציוד ובורסת עובדים יושקו בהדרגה."]],
      ["8. מנוי", ["בעתיד Ataron עשויה להציע מסלול חינמי ומנויים בתשלום. רעיון ראשוני: חינם עד 2 פרויקטים ומנוי בתשלום לפרויקטים נוספים או יכולות מתקדמות."]],
      ["9. זמינות", ["אנו שואפים לשמור על שירות יציב, אך איננו מבטיחים זמינות רציפה או נטולת שגיאות."]],
      ["10. הגבלת אחריות", ["Ataron מסייעת לארגן מידע בפרויקטים בבנייה, אך אינה מחליפה פיקוח מקצועי, בדיקה הנדסית, ייעוץ משפטי, הנהלת חשבונות או ניהול בנייה רשמי."]],
      ["11. קניין רוחני", ["השם Ataron / אתרון, הלוגו, העיצוב ונכסי המותג שייכים לבעל פרויקט Ataron. המשתמש שומר זכויות על חומרים שהוא מעלה כדין."]],
      ["12. הפסקת גישה", ["אנו עשויים להגביל או להפסיק גישה במקרה של הפרת תנאים, סיכון אבטחתי, שימוש לא חוקי או ניצול לרעה של השירות."]],
      ["13. שינויים", ["אנו עשויים לעדכן תנאים אלו. הגרסה החדשה תפורסם בעמוד זה עם תאריך העדכון."]],
      ["14. יצירת קשר", ["לשאלות בנושא התנאים ניתן לפנות דרך האתר הרשמי של Ataron. אימייל תמיכה עתידי: support@ataron.co.il."]]
    ]
  };

  dictionaries.ar.privacy = {
    title: "سياسة الخصوصية",
    intro: "سياسة الخصوصية لـ Ataron / אתרון. آخر تحديث: 29.06.2026.",
    note: "تم إعداد هذا المستند لمرحلة MVP والنشر المستقبلي للتطبيق. يوصى بمراجعة قانونية قبل الإطلاق التجاري.",
    sections: dictionaries.en.privacy.sections.map(([title, items, type]) => [title.replace(/^\d+\.\s*/, (m) => m), items, type])
  };

  dictionaries.ar.privacy.sections = [
    ["1. من نحن", ["Ataron تطبيق لإدارة مشاريع البناء. يمكن تخزين معلومات المشروع، عناوين المواقع، الصور، المستندات، المخططات، الرسائل، المشاركين، الملاحظات وتاريخ العمل."]],
    ["2. البيانات التي قد نجمعها", ["بيانات الحساب: الاسم، الهاتف، البريد الإلكتروني وكلمة مرور محمية;", "بيانات الشركة: اسم الشركة، الموظفون، الأدوار والصلاحيات;", "بيانات المشاريع: الاسم، العنوان، الوصف، الحالة والمشاركون;", "الملفات المرفوعة: الصور، المستندات، المخططات والصور;", "الرسائل والملاحظات داخل المشروع;", "بيانات تقنية: نوع الجهاز، المتصفح، اللغة، وقت الاستخدام التقريبي وأخطاء التطبيق."], "list"],
    ["3. كيف نستخدم البيانات", ["لتشغيل التطبيق وعرض المشاريع;", "لحفظ الصور والمستندات والرسائل وتاريخ المشروع;", "لإدارة وصول المشاركين;", "لتحسين الاستقرار والأمان وجودة الخدمة;", "للتواصل بشأن الحساب أو الأمان أو الدعم."], "list"],
    ["4. الصور والمستندات وبيانات الموقع", ["الصور والمستندات والمخططات والعناوين والرسائل مرتبطة بمشاريع بناء محددة. لا نبيع هذه البيانات لأطراف ثالثة. يحصل على الوصول فقط المستخدمون الذين يوافق عليهم مالك المشروع أو الشركة."]],
    ["5. خدمات الطرف الثالث", ["قد يستخدم التطبيق مزودي بنية تحتية مثل الاستضافة وقواعد البيانات وتخزين الملفات وتحليل الأخطاء والبريد الإلكتروني أو الرسائل. يحصل المزودون فقط على البيانات اللازمة للخدمة التقنية."]],
    ["6. التخزين والأمان", ["نسعى لحماية بيانات المستخدمين بإجراءات تقنية وتنظيمية معقولة، بما في ذلك تقييد الوصول، النقل الآمن، التحكم في الجلسات وتخزين كلمات المرور بشكل محمي."]],
    ["7. حقوق المستخدم", ["يمكن للمستخدم طلب الوصول أو التصحيح أو حذف الحساب أو حذف البيانات عندما لا يتعارض ذلك مع الالتزامات القانونية أو حقوق المشاركين الآخرين."]],
    ["8. حذف الحساب", ["في نسخة الإنتاج المستقبلية من Ataron ستكون هناك إمكانية حذف الحساب. بعد الحذف سيتم حذف البيانات الشخصية أو إخفاء هويتها ما لم يكن الاحتفاظ بها مطلوباً قانونياً أو أمنياً أو لتاريخ المشروع."]],
    ["9. الأطفال", ["Ataron مخصص للاستخدام المهني في قطاع البناء وليس موجهاً للأطفال."]],
    ["10. التغييرات", ["قد نقوم بتحديث هذه السياسة. سيتم نشر النسخة الجديدة في هذه الصفحة مع تاريخ آخر تحديث."]],
    ["11. التواصل", ["لأسئلة الخصوصية يمكن التواصل عبر الموقع الرسمي لـ Ataron. بريد الدعم المستقبلي: privacy@ataron.co.il."]]
  ];

  dictionaries.ar.terms = {
    title: "شروط الاستخدام",
    intro: "شروط استخدام Ataron / אתרון. آخر تحديث: 29.06.2026.",
    note: "تم إعداد هذا المستند لمرحلة MVP والنشر المستقبلي للتطبيق. يوصى بمراجعة قانونية قبل الإطلاق التجاري.",
    sections: [
      ["1. حول الخدمة", ["Ataron تطبيق لإدارة مشاريع البناء. يساعد على حفظ بيانات المشروع، الصور، المستندات، المخططات، الدردشة، المشاركين، الملاحظات وتاريخ العمل في مساحة واحدة."]],
      ["2. قبول الشروط", ["باستخدام Ataron يوافق المستخدم على هذه الشروط. إذا لم يوافق المستخدم، يجب ألا يستخدم الخدمة."]],
      ["3. حساب المستخدم", ["يجب على المستخدم تقديم معلومات صحيحة عند التسجيل;", "المستخدم مسؤول عن حماية الوصول إلى الحساب;", "يجب إبلاغنا عند الاشتباه بوصول غير مصرح به;", "الشركة أو مالك المشروع مسؤول عن إدارة المشاركين والأدوار داخل المشروع."], "list"],
      ["4. بيانات المشروع", ["المستخدم مسؤول عن البيانات التي يرفعها إلى Ataron: الصور، المستندات، المخططات، الرسائل، العناوين، الملاحظات وأي معلومات أخرى. يجب أن يملك الحق في رفع واستخدام هذه المواد."]],
      ["5. الاستخدام المسموح", ["Ataron مخصص للاستخدام المهني والقانوني في قطاع البناء. لا يجوز استخدامه لنشاط غير قانوني أو انتهاك حقوق أو نشر كود ضار أو محاولات وصول غير مصرح بها."]],
      ["6. الأدوار والوصول", ["قد تتضمن المشاريع أدواراً مختلفة مثل المالك، المقاول، المشرف، العامل، المهندس، العميل ومشاركين آخرين. مالك المشروع أو الشركة مسؤول عن الصلاحيات والوصول."]],
      ["7. Beta و MVP", ["خلال مرحلة MVP قد تكون بعض الوظائف غير متاحة أو تعمل كتجربة أو تتغير. سيتم إطلاق أقسام الموردين وتأجير المعدات وسوق العمال تدريجياً."]],
      ["8. الاشتراك", ["في المستقبل قد يقدم Ataron خطة مجانية واشتراكات مدفوعة. الفكرة الأولية: مجاناً حتى مشروعين واشتراك مدفوع للمزيد من المشاريع أو المزايا المتقدمة."]],
      ["9. التوفر", ["نسعى للحفاظ على استقرار الخدمة، لكن لا نضمن توفرها دون انقطاع أو أخطاء."]],
      ["10. تحديد المسؤولية", ["يساعد Ataron في تنظيم معلومات مشاريع البناء، لكنه لا يستبدل الإشراف المهني أو الفحص الهندسي أو الاستشارة القانونية أو المحاسبة أو إدارة البناء الرسمية."]],
      ["11. الملكية الفكرية", ["اسم Ataron / אתרון والشعار والتصميم وأصول العلامة التجارية تعود لمالك مشروع Ataron. يحتفظ المستخدم بحقوق المواد التي يرفعها بشكل قانوني."]],
      ["12. إنهاء الوصول", ["قد نقيّد أو ننهي الوصول عند انتهاك الشروط أو وجود تهديد أمني أو استخدام غير قانوني أو إساءة استخدام الخدمة."]],
      ["13. التغييرات", ["قد نقوم بتحديث هذه الشروط. سيتم نشر النسخة الجديدة في هذه الصفحة مع تاريخ آخر تحديث."]],
      ["14. التواصل", ["لأسئلة الشروط يمكن التواصل عبر الموقع الرسمي لـ Ataron. بريد الدعم المستقبلي: support@ataron.co.il."]]
    ]
  };

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => Array.from(document.querySelectorAll(selector));
  const setText = (selector, value) => {
    const node = $(selector);
    if (node && value != null) node.textContent = value;
  };
  const setAllText = (selector, values) => {
    $$(selector).forEach((node, index) => {
      const value = Array.isArray(values) ? values[index] : values;
      if (value != null) node.textContent = value;
    });
  };

  function applyCommon(dict) {
    document.documentElement.lang = dict.lang;
    document.documentElement.dir = rtlLanguages.has(dict.lang) ? "rtl" : "ltr";
    document.title = dict.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", dict.description);

    const common = dict.common;
    setAllText('header nav a[href="#features"], header nav a[href="/#features"]', common.features);
    setAllText('header nav a[href="#audience"], header nav a[href="/#audience"]', common.audience);
    setAllText('header nav a[href="#contact"], header nav a[href="/#contact"]', common.contact);
    setAllText('header nav a[href="#launch"], header nav a[href="/#launch"]', common.launch);
    setAllText('header nav a[href="/privacy"]', common.privacy);
    setAllText('header nav a[href="/terms"]', common.terms);
    setAllText(".header-cta", common.demo);
    setText(".site-footer > span", common.footerCopy);
    setAllText('.footer-links a[href="/privacy"]', common.privacyPolicy);
    setAllText('.footer-links a[href="/terms"]', common.termsOfUse);
  }

  function applyHome(dict) {
    const home = dict.home;
    if (!home) return;
    setText(".hero .eyebrow", home.eyebrow);
    setText(".hero h1", home.h1);
    setText(".hero .lead", home.lead);
    setText(".hero-actions .primary", home.primary);
    setText(".hero-actions .secondary", home.secondary);
    setAllText(".trust-row span", home.trust);
    setText(".project-card h2", home.phoneProject);
    setText(".project-card p", home.phoneAddress);
    setText(".map-strip span", home.map);
    $$(".tile-grid span").forEach((tile, index) => {
      const data = home.tiles[index];
      if (!data) return;
      tile.innerHTML = `${data[0]}<strong>${data[1]}</strong><em>${data[2]}</em>`;
    });
    setText(".demo-panel .eyebrow", home.demoEyebrow);
    setText(".demo-panel h2", home.demoTitle);
    setText(".demo-panel p:not(.eyebrow)", home.demoText);
    setAllText(".demo-actions .button", home.demoButtons);
    setText("#features .eyebrow", home.featuresEyebrow);
    setText("#features h2", home.featuresTitle);
    $$(".feature-grid article").forEach((card, index) => {
      const data = home.featuresCards[index];
      if (!data) return;
      card.querySelector("h3").textContent = data[0];
      card.querySelector("p").textContent = data[1];
    });
    setText("#audience .eyebrow", home.audienceEyebrow);
    setText("#audience h2", home.audienceTitle);
    setText("#audience p:not(.eyebrow)", home.audienceText);
    setAllText(".audience-list span", home.audienceList);
    setText("#contact .eyebrow", home.contactEyebrow);
    setText("#contact h2", home.contactTitle);
    setText("#contact p:not(.eyebrow)", home.contactText);
    setText(".contact-box span", home.contactLabel);
    setText(".contact-box .button", home.contactButton);
    setAllText('[data-form-label="name"]', home.formLabels.name);
    setAllText('[data-form-label="phone"]', home.formLabels.phone);
    setAllText('[data-form-label="company"]', home.formLabels.company);
    setAllText('[data-form-label="message"]', home.formLabels.message);
    const form = $("[data-lead-form]");
    if (form) {
      form.dataset.subject = home.formSubject;
      form.dataset.status = home.formStatus;
      Object.entries(home.formPlaceholders).forEach(([name, placeholder]) => {
        const field = form.elements[name];
        if (field) field.placeholder = placeholder;
      });
    }
    setText("[data-form-note]", home.formNote);
    setText("#launch .eyebrow", home.launchEyebrow);
    setText("#launch h2", home.launchTitle);
    setText("#launch p:not(.eyebrow)", home.launchText);
    $$(".launch-steps span").forEach((step, index) => {
      const label = home.launchSteps[index];
      const number = index + 1;
      if (label) step.innerHTML = `<strong>${number}</strong> ${label}`;
    });
  }

  function setupLeadForm() {
    const form = $("[data-lead-form]");
    if (!form) return;
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const name = data.get("name") || "";
      const phone = data.get("phone") || "";
      const company = data.get("company") || "";
      const message = data.get("message") || "";
      const subject = form.dataset.subject || "Ataron demo request";
      const body = [
        "Ataron demo request",
        "",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Company: ${company}`,
        "",
        "Message:",
        message
      ].join("\n");
      window.location.href = `mailto:info@ataron.co.il?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      const note = $("[data-form-note]");
      if (note) note.textContent = form.dataset.status || "";
    });
  }

  function renderLegal(pageDict) {
    if (!pageDict) return;
    setText(".legal-hero h1", pageDict.title);
    setText(".legal-hero p:not(.eyebrow)", pageDict.intro);
    const card = $(".legal-card");
    if (!card) return;
    card.innerHTML = "";
    const note = document.createElement("p");
    note.className = "legal-note";
    note.textContent = pageDict.note;
    card.append(note);
    pageDict.sections.forEach(([heading, items, type]) => {
      const h2 = document.createElement("h2");
      h2.textContent = heading;
      card.append(h2);
      if (type === "list") {
        const ul = document.createElement("ul");
        items.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item;
          ul.append(li);
        });
        card.append(ul);
      } else {
        items.forEach((item) => {
          const p = document.createElement("p");
          p.textContent = item;
          card.append(p);
        });
      }
    });
  }

  function applyLanguage(language) {
    const dict = dictionaries[language] || dictionaries.ru;
    const page = document.body.dataset.page || "home";
    applyCommon(dict);
    if (page === "home") applyHome(dict);
    if (page === "privacy") renderLegal(dict.privacy);
    if (page === "terms") renderLegal(dict.terms);
    $$("[data-language-select]").forEach((select) => {
      select.value = dict.lang;
    });
    localStorage.setItem(storageKey, dict.lang);
  }

  const initialLanguage = localStorage.getItem(storageKey) || (navigator.language || "ru").slice(0, 2);
  applyLanguage(dictionaries[initialLanguage] ? initialLanguage : "ru");
  $$("[data-language-select]").forEach((select) => {
    select.addEventListener("change", (event) => applyLanguage(event.target.value));
  });
  setupLeadForm();
})();
