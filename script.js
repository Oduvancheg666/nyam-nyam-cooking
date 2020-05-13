let phrases = [
  "Do something with passion or not it all — Делай что-то со страстью или не делай вообще",												
  "Illusion is the first of all pleasures — Иллюзия — высшее наслаждение",												
  "It's better to have ideals and dreams than nothing — Лучше иметь мечты и идеалы, чем ничего",												
  "Only my dream keeps me alive — Только моя мечта сохраняет меня живой",												
  "Be loyal to the one who is loyal to you — Будь верен тому, кто верен тебе",												
  "Everything happens for a reason — Все происходит по какой-то причине",												
  "If you never try you will never know — Если не попробуешь — не узнаешь",												
  "It’s never too late to be what you might have been — Никогда не поздно стать тем, кем вы могли бы быть",												
  "Some people are poor, all they have is money — Некоторые люди бедны, все, что у них есть — это деньги",												
  "Популярны и высказывания о самом процессе размышления, о воспоминаниях и мечтах.",												
  "The memory warms you up inside, but it also breaks your soul apart. — Память не только греет изнутри, но и разрывает душу на части.",												
  "Stretching his hand out to catch the stars, he forgets the flowers at his feet. — Протягивая руки к звездам, человек забывает о цветах у его ног.",												
  "When you start thinking a lot about your past, it becomes your present and you can’t see your future without it. — Когда начинаешь много думать о прошлом, оно становится твоим настоящим, за которым ты уже не можешь разглядеть будущее.",												
  "Memories take us back, dreams take us forward. — Воспоминания тянут нас назад, мечты заставляют двигаться вперед.",												
"Be careful with your thoughts. — they are the beginning of deeds — Будь осторожен со своими мыслями, ведь они — начало поступков.",												
  "Remember that the most dangerous prison is the one in your head. — Помни, что самая опасная тюрьма находится в твоей голове.",												
  "Все мы проживаем разную жизнь, совершаем свои собственные ошибки, достигаем определенных успехов и реализуем свои задумки. Но в большинстве своем, наша жизнь похожа на жизнь других, поэтому нам близки высказывания о ней:",												
  "Life is what happens while you’re busy making other plans — Жизнь — это то, что случается, пока ты строишь другие планы",												
  "Life is a one time offer, use it well. — Жизнь — это одноразовое предложение, используй его с умом.",												
  "Life begins at the end of your comfort zone — Жизнь начинается в конце вашей зоны комфорта.",												
  "Life is short. Smile while you still have teeth — Жизнь коротка. Улыбайтесь, пока у вас еще есть зубы.",												
  "Live each day as if it’s your last. — Живи каждый день так, будто он последний.",												
  "Life is beautiful. Enjoy the ride. — Жизнь прекрасна. Наслаждайся поездкой.",												
  "Do not squander time – this is stuff life is made of. — Не растрачивай время — это та штука, из которой сделана жизнь.",												
  "Life is a succession of lessons which must be lived to be understood. — Жизнь — это череда уроков, которые необходимо прожить, чтобы понять.",												
  "The future belongs to those who believe in their dreams. — Будущее принадлежит тем, кто верит в свои мечты.",												
  "И конечно, самые красивые фразы рождаются благодаря самому красивому чувству на свете — любви.",												
  "The best thing in our life is love. — Лучшее, что есть в нашей жизни — это любовь.",												
  "The inevitable price we pay for our happiness is eternal fear to lose it — Неминуемая цена, которую мы платим за наше счастье — это вечный страх потерять его.",												
  "For the world you may be just one person, but for one person you may be the whole world. — Для мира ты можешь быть просто кем-то, но для кого-то ты — целый мир.",												
  "The course of true love never did run smooth. — Путь истинной любви не бывает гладким.",												
  "It was love at first sight, at last sight, at ever and ever sight. — Это была любовь с первого взгляда, с последнего взгляда, с извечного взгляда.",												
  "Real beauty lives in the heart, is reflected in the eyes and leads to action. — Настоящая красота живёт в сердце, отражается в глазах и проявляется в поступках.",												
  "Youth is counted sweetest by those who are no longer young — Молодость милее всего тем, кто уже не молод (Джонни Грин)",												
  "Life is wasted on the living — Жизнь растрачивается на жизнь (Дуглас Адамс)",												
  "To succeed in life, you need two things: ignorance and confidence — Чтобы добиться успеха в жизни, нужны две вещи: невежество и самоуверенность (Марк Твен)",												
  "Never regret anything that made you smile — Никогда не сожалей о том, что заставляет тебя улыбаться (Марк Твен)",												
  "To live is the rarest thing in the world. Most people exist, that's all — Жить — редчайшее в мире явление. Большинство людей просто существуют (Оскар Уайлд)",												
  "To a great mind nothing is little — Для великого ума нет ничего малого (Артур Конан Дойл)",												
  "When words fail, music speaks — Когда слова бессильны, говорит музыка (Ганс Христиан Андерсен)",												
  "Anyone who lives within their means suffers from a lack of imagination — Любой, кто живет в пределах своих возможностей, страдает от недостатка воображения (Оскар Уайльд)",												
  "Always dream and shoot higher than you know you can do. Do not bother just to be better than your contemporaries or predecessors. Try to be better than yourself — Всегда мечтайте и стремитесь превысить предел ваших возможностей. Не ставьте целью быть лучше, чем ваши современники или предшественники. Стремитесь быть лучше самих себя (Уильям Фолкнер)",												
  "Success does not consist in never making mistakes but in never making the same one a second time — Секрет успеха заключается не в том, чтобы не делать ошибок, а в том, чтобы не повторять одних и тех же ошибок дважды (Бернард Шоу)",												
  "От мастеров писательского ремесла не отстают и другие известные люди: политические деятели, мыслители, ученые и предприниматели.",												
  "Simplicity is the ultimate sophistication — Простота есть высшая степень утонченности (Леонардо да Винчи)",												
  "Have no fear of perfection; you’ll never reach it — Не бойтесь совершенства; вам его никогда не достичь (Сальвадор Дали)",												
  "Either write something worth reading or do something worth writing — Или напишите то, что стоит прочитать, или сделайте то, о чём стоит написать (Бенджамин Франклин)",												
  "Your time is limited, so don’t waste it living someone else’s life — Ваше время ограничено, так что не теряйте его, проживая чужую жизнь (Стив Джобс)",												
  "Life would be tragic if it weren’t funny — Жизнь была бы трагичной, если бы не была такой забавной (Стивен Хокинг)",												
  "I don't like those cold, precise, perfect people, who, in order not to speak wrong, never speak at all, and in order not to do wrong never do anything — Я не люблю этих холодных, аккуратных, совершенных людей, которые, чтобы не сказать неправильно, вообще ничего не говорят, а чтобы не совершить неправильного поступка — вообще ничего не делают (Генри Бичер)",												
  "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle — Есть только два способа прожить свою жизнь. Первый — так, будто чудес нет. Второй — так, словно все на свете чудо (Альберт Эйнштейн)",												
  "Build your own dreams, or someone else will hire you to build theirs — Воплощайте собственные мечты, или кто-то другой наймет вас, чтобы воплощать свои (Фаррах Грей)",												
  "Success is not the key to happiness. Happiness is the key to success — Успех — не ключ к счастью. Это счастье — ключ к успеху (Альберт Швейцер)",												
  "When I do good, I feel good. When I do bad, I feel bad. That’s my religion — Когда я делаю добро, я чувствую себя хорошо. Когда я поступаю плохо, я чувствую себя плохо. Вот моя религия (Авраам Линкольн)",												
  "I am not a product of my circumstances. I am a product of my decisions — Я не продукт моих обстоятельств. Я продукт моих решений (Стивен Кови)",												
  "Также, своими цитатами известны работники кино и музыканты, чья тонкая душевная организация подарила миру много прекрасных фраз.",												
  "Love is a fire. But whether it is going to warm your hearth or burn down your house, you can never tell — Любовь — это огонь. Но согреет ли он твой очаг или сожжет твой дом — никогда не знаешь наверняка (Джоан Кроуфорд)",												
  "The key to immortality is first living a life worth remembering — Ключом к бессмертию является прежде всего жизнь, достойная запоминания (Брюс Ли)",												
  "Love the life you live, and live the life you love — Люби жизнь, которой живешь и живи жизнью, которую любишь (Боб Марли)",												
  "Dream as if you’ll live forever, live as if you’ll die today — Мечтай так, будто будешь жить вечно, живи так, будто сегодня умрешь (Джеймс Дин)",												
  "Music can change the world because it can change people — Музыка может изменить мир, потому что может менять людей (Боно)",												
  "Music, at its essence, is what gives us memories. And the longer a song has existed in our lives, the more memories we have of it — Музыка, по сути своей, дает нам воспоминания. И чем дольше песня существует в нашей жизни, тем больше у нас о ней воспоминаний (Стиви Уандер)",												
  "Безнадёжно — это когда на крышку гроба падает земля. Остальное можно исправить. ©Стетхэм",												
  "Люди-идиоты + алкоголь. Вот вам рецепт любой потасовки ©Стетхэм",												
  "Не спешите вытаскивать людей из дерьма. Возможно, это их естественная среда обитания. ©Стетхэм",												
  "Ты свободен, а значит всерьёз за себя отвечаешь. ©Стетхэм",												
  "•  Я Господь, Бог твой... Да не будет у тебя других богов пред лицем Моим (1-я заповедь)",												
  "•  Не делай себе кумира и никакого изображения того, что на небе вверху, и что на земле внизу, и что в воде ниже земли. Не поклоняйся им и не служи им (2-я заповедь)",												
  "•  Не произноси имени Господа, Бога твоего, напрасно; ибо Господь не оставит без наказания того, кто произносит имя Его напрасно (3-я заповедь)",												
  "•  Помни день субботний, чтобы святить его. Шесть дней работай, и делай всякие дела твои; а день седьмый — суббота Господу Богу твоему: не делай в оный никакого дела ни ты, ни сын твой, ни дочь твоя... Ибо в шесть дней создал Господь небо и  землю, море и все, что в них; а в день седьмый почил. Посему благословил Господь день субботний и освятил его (4-я заповедь)",												
  "•  Почитай отца твоего и мать твою, чтобы продлились дни твои на земле, которую Господь, Бог твой, дает тебе (5-я заповедь)",												
  "•  Не убивай (6-я заповедь)",												
  "•  Не прелюбодействуй (7-я заповедь)",												
  "•  Не кради (8-я заповедь)",
  "Поражение неминуемо ждет лишь того, кто отчаялся заранее, – возразил Гэндальф. – Признать неизбежность опасного пути, когда все другие дороги отрезаны, – это и есть истинная мудрость.",
  "Людям, сотворенным вслед за эльфами в том же облике, смерть дарована в виде особой милости, как таинственный залог иного, высшего назначенья, высшего, нежели даже блаженство.",
  "Ни силы в тебе нет, ни мудрости. Однако же избран ты, а значит, придется тебе стать сильным, мудрым и доблестным.",
  "Добрую половину из вас я знаю вдвое хуже, чем следует, а худую половину люблю вдвое меньше, чем надо бы.",
  "Маг не приходит поздно, Фродо Бэггинс, и рано он тоже не приходит. Он появляется тогда, когда нужно.",
  "Возвращался ли ты домой по зову серебряных труб?",
  "Мы не выбираем времена, мы можем лишь решать, как жить во времена, которые выбрали для нас.",
  "Опасное это дело, Фродо, выходить за порог: стоит ступить на дорогу и, если дашь волю ногам, неизвестно куда тебя занесет.",
  "И слабейший из смертных может изменить ход будущего.",
  "Пирог хорош в любое время дня.",
  "То, что ты показываешь характер, вовсе не говорит о том, что этот характер у тебя есть.",
  "Алкоголь в баре — это не более чем смазка для неформального общения.",
  "Держись подальше от тех, кто поздно ложится спать, и не вмешивайся в спор между мужем и женой.",
  "Ну а сейчас, ты меня уж извини, но я пойду домой и упаду там с сердечным приступом. «Криминальное чтиво»",
  "Давай разработаем систему коммуникации. Если тебе по роже прилетает локтем, значит, тебе пора заткнуться.",
  "Я сейчас поднимусь… И если там нету трупа... То будет!",
  "Ты никогда не слышал такую философию, что как только человек признает, что он не прав, то ему сразу прощается все, что он неправильно сделал?",
  "Я такой же реальный как пончик, ублюдок",
  "Стремитесь не к успеху, а к ценностям, которые он дает",
  "Сложнее всего начать действовать, все остальное зависит только от упорства.",
  "Надо любить жизнь больше, чем смысл жизни.",
	"ЧО СМОТРИШЬ?",
  
												
]

le2t randIndex = Math.floor(Math.random() * phrases.length);
alert(phrases[randIndex]);

