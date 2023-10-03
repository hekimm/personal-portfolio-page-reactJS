export const languageDescriptions = {
  CSS: {
    tr: `
    CSS, "Cascading Style Sheets" teriminin kısaltmasıdır ve HTML (ve bazen XML) elementlerinin ekranda, kağıtta(paper) veya diğer medyalarda nasıl gösterilmesi gerektiğini tanımlamak için kullanılan bir dildir.

 Web geliştiricilerin ve tasarımcıların web sayfalarına stiller (renkler, fontlar ve boşluklar gibi) uygulamasına olanak tanır.

  CSS, HTML elementlerinde satır içi, HTML belgesindeki bir stil bloğunda veya harici bir dosya olarak uygulanabilir.

   İçerik (HTML) ile sunum (CSS) ayrılarak, web siteleri daha erişilebilir, daha kolay bakımı yapılabilir ve daha hızlı yüklenebilir hâle getirilebilir.

    CSS kuralları bir seçici ve bir deklarasyon bloğundan oluşur. Seçici, stillerin hangi HTML elementlerine uygulanacağını belirler, ve deklarasyon bloğu stilleri kendisi içerir.
     Örneğin:

p {
  color: red;
  font-size: 16px;
}

Bu örnekte, seçici "p"dir (HTML paragraf elementine atıfta bulunur) ve deklarasyon bloğu, metin renginin kırmızı ve font büyüklüğünün 16 piksel olması gerektiğini belirtir.
    `,
    en: `
    CSS stands for "Cascading Style Sheets" and is a language used to describe how HTML (and sometimes XML) elements should be displayed on screen, on paper, or in other media.

It allows web developers and designers to apply styles (such as colors, fonts, and spacings) to web pages.

CSS can be applied inline within HTML elements, within a style block in the HTML document, or in an external file.

By separating content (HTML) from presentation (CSS), websites can be made more accessible, easier to maintain, and quicker to load.

CSS rules consist of a selector and a declaration block. The selector determines which HTML elements the styles will be applied to, and the declaration block contains the styles themselves. For example:

p {
  color: red;
  font-size: 16px;
}

In this example, the selector is "p" (referring to the HTML paragraph element), and the declaration block specifies that the text color should be red and the font size should be 16 pixels.

    `,
  },
  Bootstrap: {
    tr: `
  Bootstrap, web siteleri ve web uygulamalarını tasarlamak için ücretsiz ve açık kaynaklı bir frontend çerçevesidir.

Web'de yanıt verebilir ve mobil öncelikli projeler oluşturmayı kolaylaştıran HTML, CSS ve JavaScript bileşenlerinden oluşan bir koleksiyon sunar.

Bu çerçeve, navigasyon çubukları, modaller, düğmeler ve gridler gibi önceden tasarlanmış bileşenler sunar, bu bileşenler bir web sitesine kolayca entegre edilebilir, böylece sıfırdan tasarım yapmak için gereken zaman ve çaba azaltılır.

Twitter tarafından geliştirilmiş olan Bootstrap, kullanım kolaylığı ve geniş dokümantasyonu sayesinde en popüler ön yüz çerçevelerinden biri haline gelmiştir.

Bir projeye Bootstrap kütüphanesini dahil ederek, geliştiriciler çeşitli cihazlar ve ekran boyutlarında modern ve tutarlı bir görünüm ve hissi hızla elde edebilirler.
    `,
    en: `
Bootstrap is a free and open-source frontend framework for designing websites and web applications.

It offers a collection of HTML, CSS, and JavaScript components that facilitate the creation of responsive and mobile-first projects on the web.

This framework provides pre-designed components such as navigation bars, modals, buttons, and grids, which can be easily integrated into a website, thereby reducing the time and effort needed to design from scratch.

Developed by Twitter, Bootstrap has become one of the most popular front-end frameworks due to its ease of use and extensive documentation.

By incorporating the Bootstrap library into a project, developers can quickly achieve a modern and consistent look and feel across various devices and screen sizes.
    `,
  },
  JavaScript: {
    tr: `
    JavaScript, esas olarak web geliştirme alanındaki rolü ile bilinen çok yönlü, yüksek seviyeli, yorumlanan bir programlama dilidir.

 Web sitelerinde interaktif ve dinamik davranışları mümkün kılar. 

  Başlangıçta yalnızca web tarayıcılarında çalıştırılmak üzere tasarlanmışken, zamanla yetenekleri genişlemiş ve artık çeşitli ortamlarda, sunucular (Node.js) ve mobil cihazlar da dahil olmak üzere kullanılabilmektedir.

Bir web tarayıcısı bağlamında, JavaScript, içeriği güncellemek, formları doğrulamak, veri almak ve daha fazlasını yapmak üzere HTML ve CSS ile etkileşimde bulunur, böylece daha interaktif ve kullanıcı dostu bir deneyim sağlar.

AJAX gibi asenkron yetenekleri, web sayfalarının içeriği tüm sayfayı yeniden yüklemeden güncellemesini mümkün kılar.

İsimlerindeki benzerliklere rağmen JavaScript'in Java'dan farklı olduğunu belirtmek önemlidir.
    `,
    en: `
  JavaScript is a versatile, high-level, interpreted programming language, primarily known for its role in web development.

It enables interactive and dynamic behaviors on websites.

Initially designed to be executed only in web browsers, its capabilities have expanded over time, and it can now be used in various environments, including servers (via Node.js) and mobile devices.

Within the context of a web browser, JavaScript interacts with HTML and CSS to update content, validate forms, retrieve data, and more, providing a more interactive and user-friendly experience.

Asynchronous capabilities, like those provided by AJAX, allow the content of web pages to be updated without reloading the entire page.

Despite the similarity in their names, it is important to note that JavaScript is distinct from Java.
    `,
  },
  Angular: {
    tr: `
    Angular, HTML, CSS ve TypeScript ile istemci tarafı uygulamaları oluşturmak için bir platform ve çerçevedir.

Google tarafından geliştirilen ve bakımı yapılan Angular, geleneksel çok sayfalı web sitelerine kıyasla daha dinamik ve etkileşimli bir kullanıcı deneyimi sunan tek sayfalı uygulamalar (SPAs) oluşturmayı geliştiricilere olanak tanır.

Angular'ın ana özellikleri şunlardır:

Bileşenler: Angular, kullanıcı arayüzünü belirli bir görünüm veya işlevsellikten sorumlu yeniden kullanılabilir bileşenlere böler.

Çift Yönlü Veri Bağlama: Bu, uygulama durumundaki değişikliklerin UI'ı otomatik olarak güncellediği ve tersi durumda, bunları senkronize etmek için ek kod gerektirmediği anlamına gelir.

Bağımlılık Enjeksiyonu: Hizmetlerin veya nesnelerin sınıflara manuel olarak örneklenmeden "enjekte edildiği" bir tasarım kalıbıdır. Bu, modüler ve bakımı kolay koda olanak tanır.

Direktifler: Geliştiricilere yeni, özel davranışlar oluşturma olanağı tanıyarak HTML'in gücünü genişletir.

Hizmetler: Paylaşılan işlevselliği veya veriyi sağlamak için bileşenlere enjekte edilebilen singleton nesneler.

Yönlendirme: Görünümler arasında gezinmeyi sağlar ve tarayıcı geçmişini destekler.

Angular uygulamaları genellikle TypeScript'te yazılır, bu da statik tipler, arayüzler ve geliştirmeyle yardımcı olacak diğer özellikleri tanıtan JavaScript'in bir üst kümesidir.

Burada tanımlanan Angular çerçevesinin Angular 2 ve sonrasını ifade ettiğini belirtmek önemlidir. AngularJS, biraz farklı bir yapıya sahip ilk Angular sürümüdür.
    `,
    en: `
    Angular is a platform and framework for building client-side applications with HTML, CSS, and TypeScript.

Developed and maintained by Google, Angular allows developers to create Single Page Applications (SPAs), offering a more dynamic and interactive user experience compared to traditional multi-page websites.

The key features of Angular are:

Components: Angular breaks down the user interface into reusable components, each responsible for a specific look or functionality.

Two-Way Data Binding: This means that changes in the application state automatically update the UI and vice versa, requiring no additional code to synchronize them.

Dependency Injection: This is a design pattern where services or objects are "injected" into classes without being manually instantiated. This allows for modular and easily maintainable code.

Directives: These extend the power of HTML by giving developers the ability to create new, custom behaviors.

Services: Singleton objects that can be injected into components to provide shared functionality or data.

Routing: Enables navigation between views and supports browser history.

Angular applications are typically written in TypeScript, which is a superset of JavaScript, introducing static types, interfaces, and other features to assist with development.

It’s important to note that the Angular framework described here refers to Angular 2 and subsequent versions. AngularJS is the first version of Angular, having a somewhat different architecture.
    `,
  },
  "React.js": {
    tr: `
    React.js, yaygın olarak sadece React olarak anılan, özellikle tek sayfalı uygulamalar için kullanıcı arayüzleri oluşturmak amacıyla Facebook tarafından geliştirilmiş açık kaynaklı bir JavaScript kütüphanesidir.

Geliştiricilerin yeniden kullanılabilir UI bileşenleri oluşturmasına ve bir uygulamanın durumunu verimli bir şekilde yönetmesine olanak tanır.

React'ın ana özellikleri ve kavramları şunlardır:

Bileşenler: React uygulamaları, bireysel, yeniden kullanılabilir bileşenlerden oluşur. Her bileşen, belirli bir UI elementini veya element gruplarını temsil eder.

Sanal DOM: Veriler her değiştiğinde tüm sayfayı güncellemek veya DOM'u (Document Object Model) doğrudan manipüle etmek yerine, React DOM'un sanal bir temsilini kullanır. Değişiklikler meydana geldiğinde, React sanal DOM ile gerçek DOM'u karşılaştırır, güncellemeleri yapmanın en verimli yolunu hesaplar (bu işleme "uzlaştırma" denir) ve daha sonra gerçek DOM'daki sadece değişen kısımları günceller. Bu süreç performansı artırır.

JSX: JSX (JavaScript XML), React tarafından önerilen bir JavaScript sözdizimi uzantısıdır. Geliştiricilerin JavaScript kodu içinde UI bileşenlerini HTML'e benzer bir sözdizimi kullanarak yazmalarına izin verir, bu da UI elementlerini tasarlamanın daha sezgisel olmasını sağlar.

State & Props: State, zamanla değişebilen ve bileşenin davranışını ve render edilmesini etkileyen verilerdir. Props ( "özellikler" için kısaltma), verileri üst bileşenden alt bileşenlere geçirmenin bir yoludur. Bunlar salt okunur ve bileşenleri yeniden kullanılabilir yapmaya yardımcı olur.

Hooks: React 16.8'de tanıtılan hooks, geliştiricilere bir sınıf yazmadan state ve diğer React özelliklerini kullanma olanağı tanır. Yaygın hooklar useState ve useEffect'ı içerir.

React'ın odak noktası temelde görünüm katmanıdır, bu yüzden genellikle durum yönetimi için Redux veya yönlendirme için React Router gibi kütüphanelerle birlikte tam teşekküllü uygulamalar oluşturmak üzere diğer kütüphaneler veya çerçevelerle birlikte kullanılır.
    `,
    en: `
    React.js, commonly just referred to as React, is an open-source JavaScript library developed by Facebook, principally for creating user interfaces for single-page applications.

It allows developers to create reusable UI components and efficiently manage an application's state.

The main features and concepts of React are:

Components: React applications are composed of individual, reusable components. Each component represents a specific UI element or group of elements.

Virtual DOM: Instead of updating the whole page or directly manipulating the DOM (Document Object Model) every time the data changes, React utilizes a virtual representation of the DOM. When changes occur, React compares the virtual DOM with the actual DOM, calculates the most efficient way to make updates (this process is called "reconciliation"), and then only updates the changed parts in the real DOM. This process enhances performance.

JSX: JSX (JavaScript XML) is a JavaScript syntax extension recommended by React. It allows developers to write UI components within JavaScript code using a syntax similar to HTML, making the design of UI elements more intuitive.

State & Props: The state consists of data that can change over time and influences the behavior and rendering of the component. Props (short for "properties") are a way to pass data from a parent component to child components. They are read-only and help in making components reusable.

Hooks: Introduced in React 16.8, hooks offer developers the ability to use state and other React features without writing a class. Common hooks include useState and useEffect.

React's focus is fundamentally on the view layer, so it is often used with other libraries or frameworks like Redux for state management or React Router for routing to build full-fledged applications.
    `,
  },
  "Node.js": {
    tr: `
   Node.js, geliştiricilerin bir web tarayıcısının dışında JavaScript kodunu çalıştırmalarına izin veren açık kaynaklı, çapraz(cross) platformlu bir JavaScript çalışma zamanı ortamıdır(runtime environment).

Geleneksel olarak, JavaScript temel olarak web tarayıcılarında istemci tarafı betik oluşturma için kullanılırdı.

Node.js ile geliştiriciler artık JavaScript kullanarak sunucu tarafı kodu yazabilirler, bu da ölçeklenebilir ağ uygulamalarının geliştirilmesini mümkün kılar.

Node.js'in ana özellikleri ve kavramları şunları içerir:

Olaya Dayalı Mimarisi(Event-driven architecture): Node.js, chat uygulamaları veya çevrimiçi oyunlar gibi gerçek zamanlı uygulamalar için etkili ve uygun bir olaya dayalı, engelleme yapmayan I/O modelini kullanır.

npm (Node Package Manager): Node.js için yerleşik bir paket yöneticisi olan npm, geliştirme sürecinde yardımcı olacak büyük bir kütüphane ve araç koleksiyonu sağlar. Üçüncü taraf paketlerini yüklemeyi, güncellemeyi ve yönetmeyi kolaylaştırır.

Eşzamanlı Programlama: Node.js, işlemlerin ana iş parçacığını engellemeksizin eşzamanlı olarak yürütülebileceği eşzamanlı programlamaya vurgu yapar. Bu, geri çağırmalar, sözler ve async/await kullanılarak gerçekleştirilir.

V8 Motoru: Node.js, Chrome tarayıcısı için Google tarafından geliştirilen V8 JavaScript motorunda çalışır. Bu motor, JavaScript'i doğrudan yerel makine koduna derler, bu da performansı artırır.

Modülerlik: Node.js uygulamaları modülerdir. Çekirdek işlevselliğin modüllere ayrıldığı ve geliştiricilerin kodu düzenlemek ve yeniden kullanmak için kendi modüllerini oluşturabildiği bir yapıya sahiptir.

Engelleme yapmayan doğası(non-blocking nature) nedeniyle, Node.js özellikle gerçek zamanlı işleme gerektiren veya birçok eşzamanlı bağlantıyı yöneten görevler için uygundur, örneğin API sunucuları, akış hizmetleri ve çevrimiçi oyun platformları gibi.
    `,
    en: `
    Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript code outside of a web browser.

Traditionally, JavaScript was primarily used for client-side scripting within web browsers.

With Node.js, developers can now write server-side code using JavaScript, enabling the development of scalable network applications.

The main features and concepts of Node.js include:

Event-Driven Architecture: Node.js employs an effective and suitable event-driven, non-blocking I/O model for real-time applications like chat applications or online games.

npm (Node Package Manager): The built-in package manager for Node.js, npm, provides a large library and tool collection to aid the development process. It facilitates the installation, update, and management of third-party packages.

Concurrent Programming: Node.js emphasizes concurrent programming, where processes can be executed concurrently without blocking the main thread. This is achieved using callbacks, promises, and async/await.

V8 Engine: Node.js operates on the V8 JavaScript engine developed by Google for the Chrome browser. This engine compiles JavaScript directly into native machine code, enhancing performance.

Modularity: Node.js applications are modular, featuring a structure where core functionality is divided into modules, and developers can create their own modules for organizing and reusing code.

Due to its non-blocking nature, Node.js is particularly suitable for tasks that require real-time processing or managing many concurrent connections, such as API servers, streaming services, and online gaming platforms.
    `,
  },

  profileTitle: {
    tr: "Full Stack Web Geliştiricisi | Mobil Uygulama Geliştiricisi | English Master(C1+)",
    en: "Full Stack Web Developer | Mobile App Developer | English Master(C1+)",
  },
  card1: {
    tr: `Merhaba. Ben Hekimcan Aktaş, Kişisel gelişim sürecinin sürekli bir öğrenme ve yenilenme süreci olduğuna inanıyorum ve bu inançla, her yeni günü bir fırsat olarak görüp, bilgimi ve yeteneklerimi artırmaya devam ediyorum.

    Portfolyoma Hoşgeldiniz. 

    Yenilikçi Çözümlerle Dijital-Teknolojik Dönüşümde ve Gelişimde etkin rol alma hedefleriyle ilerliyorum.`,
    en: `Hello. I am Hekimcan Aktaş. I believe that the personal development process is a continuous learning and renewal process, and with this belief, I see each new day as an opportunity to enhance my knowledge and skills.
    
    Welcome to my Portfolio.

 I am progressing with the goals of actively playing a role in Digital-Technological Transformation and Development with Innovative Solutions.`,
  },
  card2: {
    tr: `2021 yılından beri Yazılım ve Programlama ile ilgileniyorum, çocukluğumdan beri her zaman bilgisayar ve teknolojiye çok ilgiliyim ve bu konuda çalışmalar yapıyorum.
    
    Html ve Python ile başladığım Yazılım ve Programlama yolculuğumda bugün pek çok modern web teknolojileri (TypeScript, Angular, React, React Router, Redux, Next.js) ve mobil uygulama geliştirme teknolojilerine (React Native, Flutter) hakimiyetim var.`,
    en: `Since 2021, I have been interested in Software and Programming. Since my childhood, I have always been very interested in computers and technology, and I have been working on this subject. In my Software and Programming journey, which I started with HTML and Python, today I have mastery over many modern web technologies (TypeScript, Angular, React, React Router, Redux, Next.js) and mobile application development technologies (React Native, Flutter).`,
  },
  card3: {
    tr: `2017 TEOG Sınavı Türkiye 1.siyim.
    
    Övgü Terzibaşıoğlu Anadolu Lisesi'nden 2021 yılında 94 ortalamayla mezun oldum.
    
    Şu anda Manisa Celal Bayar Üniversitesi Yazılım Mühendisliği bölümünde 2. sınıf öğrencisiyim.
    
    Bölümümde aldığım eğitimin yanı sıra, bireysel olarak da sürekli öğrenme ilkesiyle yeni teknolojileri, dilleri ve araçları öğrenmeye devam ediyorum.`,
    en: `I ranked first in Turkey in the 2017 TEOG Exam and graduated from Övgü Terzibaşıoğlu Anatolian High School in 2021 with an average of 94.
    
    Currently, I am a 2nd Grade student on  Software Engineering at Manisa Celal Bayar University.
    
    Alongside the education I receive in my department, I also persistently continue to learn new technologies, languages, and tools on an individual basis, adhering to the principle of continual learning.`,
  },
  projectsButton: {
    en: "My Projects",
    tr: "Projelerim",
  },

  startJourneyButton: {
    tr: "Yazılım  Geliştirme  ve Programlama Yolculuğum Nasıl Başladı?",
    en: "How Did My Software Development and Programming Journey Begin?", // İsterseniz başka dilleri de ekleyebilirsiniz.
  },
};
