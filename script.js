document.addEventListener("DOMContentLoaded", function () {
    const words = [
    // التحيات والمجاملات
    { word: "Hallo", translations: ["مرحبًا", "مرحبا", "هلا", "أهلًا", "اهلا", "hello", "salut", "ciao", "hola"] },
    { word: "Guten Morgen", translations: ["صباح الخير", "صباح النور", "good morning", "bonjour", "buenos días", "buongiorno"] },
    { word: "Guten Tag", translations: ["نهارك سعيد", "طاب يومك", "good day", "bonjour", "buen día", "buona giornata"] },
    { word: "Guten Abend", translations: ["مساء الخير", "good evening", "bonsoir", "buenas tardes", "buona sera"] },
    { word: "Gute Nacht", translations: ["ليلة سعيدة", "تصبح على خير", "good night", "bonne nuit", "buenas noches", "buona notte"] },
    { word: "Wie geht’s?", translations: ["كيف حالك؟", "كيفك؟", "شلونك؟", "أخبارك؟", "how are you?", "comment ça va?", "¿cómo estás?", "come stai?"] },
    { word: "Mir geht’s gut", translations: ["أنا بخير", "بخير الحمد لله", "I’m fine", "je vais bien", "estoy bien", "sto bene"] },
    { word: "Danke", translations: ["شكرًا", "شكرا", "مشكور", "جزاك الله خيرًا", "thanks", "merci", "gracias", "grazie"] },
    { word: "Bitte", translations: ["من فضلك", "لو سمحت", "عفوًا", "you're welcome", "s'il vous plaît", "de nada", "prego"] },

    // الأماكن والاتجاهات
    { word: "Wo", translations: ["أين؟", "وين؟", "where?", "où?", "¿dónde?", "dove?"] },
    { word: "Hier", translations: ["هنا", "هون", "here", "ici", "aquí", "qui"] },
    { word: "Da", translations: ["هناك", "over there", "là-bas", "allí", "lì"] },
    { word: "Links", translations: ["يسار", "شمال", "left", "gauche", "izquierda", "sinistra"] },
    { word: "Rechts", translations: ["يمين", "يمينك", "right", "droite", "derecha", "destra"] },
    { word: "Geradeaus", translations: ["على طول", "الي الأمام", "straight ahead", "tout droit", "recto", "dritto"] },
    { word: "Bahnhof", translations: ["محطة القطار", "train station", "gare", "estación de tren", "stazione ferroviaria"] },
    { word: "Flughafen", translations: ["مطار", "airport", "aéroport", "aeropuerto", "aeroporto"] },
    { word: "Hotel", translations: ["فندق", "hotel", "hôtel", "hotel", "albergo"] },
    { word: "Restaurant", translations: ["مطعم", "مطعَم", "restaurant", "restaurante", "ristorante"] },

    // الأسرة والأصدقاء
    { word: "Familie", translations: ["عائلة", "الأهل", "family", "famille", "familia", "famiglia"] },
    { word: "Vater", translations: ["أب", "بابا", "father", "père", "padre", "padre"] },
    { word: "Mutter", translations: ["أم", "ماما", "mother", "mère", "madre", "madre"] },
    { word: "Bruder", translations: ["أخ", "أخويا", "brother", "frère", "hermano", "fratello"] },
    { word: "Schwester", translations: ["أخت", "أختي", "sister", "sœur", "hermana", "sorella"] },
    { word: "Freund", translations: ["صديق", "رفيق", "friend", "ami", "amigo", "amico"] },
    { word: "Freundin", translations: ["صديقة", "رفيقة", "girlfriend", "amie", "amiga", "amica"] },
    { word: "Kind", translations: ["طفل", "ولد", "ابن", "kid", "enfant", "niño", "bambino"] },
    { word: "Eltern", translations: ["والدين", "الأبوان", "parents", "parents", "padres", "genitori"] },

    // الطعام والشراب
    { word: "Brot", translations: ["خبز", "عيش", "bread", "pain", "pan", "pane"] },
    { word: "Wasser", translations: ["ماء", "مياه", "water", "eau", "agua", "acqua"] },
    { word: "Milch", translations: ["حليب", "لبن", "milk", "lait", "leche", "latte"] },
    { word: "Kaffee", translations: ["قهوة", "coffee", "café", "café", "caffè"] },
    { word: "Saft", translations: ["عصير", "juice", "jus", "zumo", "succo"] },
    { word: "Obst", translations: ["فواكه", "fruits", "fruits", "frutas", "frutta"] },
    { word: "Gemüse", translations: ["خضروات", "خضار", "vegetables", "légumes", "verduras", "verdure"] },
    { word: "Fleisch", translations: ["لحم", "meat", "viande", "carne", "carne"] },
    { word: "Fisch", translations: ["سمك", "fish", "poisson", "pescado", "pesce"] },

    // أفعال أساسية
    { word: "sein", translations: ["يكون", "to be", "être", "ser", "essere"] },
    { word: "haben", translations: ["يملك", "to have", "avoir", "tener", "avere"] },
    { word: "gehen", translations: ["يذهب", "to go", "aller", "ir", "andare"] },
    { word: "kommen", translations: ["يأتي", "to come", "venir", "venir"] }
    
 ];


    let score = 0;
    let lives = 3;
    let currentWordIndex = 0;
    let playerName = "";
    let gameActive = false;

    const nameInputContainer = document.getElementById("nameInputContainer");
    const gameContainer = document.getElementById("gameContainer");
    const leaderboard = document.getElementById("leaderboard");
    const leaderboardButton = document.getElementById("leaderboardButton");
    const leaderboardList = document.getElementById("leaderboardList");
    const playerNameInput = document.getElementById("playerName");
    const startGameButton = document.getElementById("startGameButton");
    const wordElement = document.getElementById("word");
    const userInput = document.getElementById("userInput");
    const checkAnswerButton = document.getElementById("checkAnswerButton");
    const result = document.getElementById("result");
    const scoreElement = document.getElementById("score");
    const livesElement = document.getElementById("lives");
    const playSoundButton = document.getElementById("playSoundButton");
    const addWordButton = document.getElementById("addWordButton");
    const addWordPopup = document.getElementById("addWordPopup");
    const saveWordButton = document.getElementById("saveWordButton");
    const closePopupButton = document.getElementById("closePopupButton");

    function startGame() {
        playerName = playerNameInput.value.trim();
        if (playerName === "") {
            alert("يرجى إدخال اسمك للبدء!");
            return;
        }
        nameInputContainer.style.display = "none";
        gameContainer.style.display = "block";
        resetGame();
        gameActive = true;
    }

    function resetGame() {
        if (words.length === 0) {
            alert("يجب إضافة كلمات قبل بدء اللعبة!");
            return;
        }
        score = 0;
        lives = 3;
        scoreElement.textContent = score;
        updateLivesDisplay();
        shuffleWords();
        showNextWord();
    }

    function shuffleWords() {
        words.sort(() => Math.random() - 0.5);
        currentWordIndex = 0;
    }

    function showNextWord() {
        if (words.length === 0) {
            alert("لا توجد كلمات لعرضها، يرجى إضافة كلمات جديدة.");
            return;
        }
        if (currentWordIndex >= words.length) {
            currentWordIndex = 0;
        }
        wordElement.textContent = words[currentWordIndex].word;
        userInput.value = "";
        result.textContent = "";
    }

    function checkAnswer() {
        if (words.length === 0) {
            alert("لا توجد كلمات للتحقق منها!");
            return;
        }

        let userAnswer = userInput.value.trim().replace(/[ًٌٍَُِْ]/g, "");
        let correctAnswers = words[currentWordIndex].translations.map(t => t.replace(/[ًٌٍَُِْ]/g, ""));
        
        if (correctAnswers.includes(userAnswer)) {
            result.textContent = "✅ إجابة صحيحة!";
            result.style.color = "green";
            score++;
            scoreElement.textContent = score;
        } else {
            result.textContent = `❌ خطأ! الإجابة الصحيحة: ${words[currentWordIndex].translations.join(", ")}`;
            result.style.color = "red";
            lives--;
            updateLivesDisplay();
        }

        currentWordIndex++;
        setTimeout(() => {
            if (lives > 0) {
                showNextWord();
            } else {
                endGame();
            }
        }, 1500);
    }

    function updateLivesDisplay() {
        livesElement.innerHTML = "❤️".repeat(lives);
    }

    function endGame() {
        alert("انتهت محاولاتك! سيتم إعادة تشغيل اللعبة.");
        saveScore();
        gameActive = false;
        nameInputContainer.style.display = "block";
        gameContainer.style.display = "none";
    }

    function playSound() {
        let text = wordElement.textContent;
        let utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "de-DE";
        utterance.rate = 0.8;
        speechSynthesis.speak(utterance);
    }

    function toggleLeaderboard() {
        leaderboard.style.display = leaderboard.style.display === "block" ? "none" : "block";
        displayLeaderboard();
    }

    function saveScore() {
        let leaderboardData = JSON.parse(localStorage.getItem("leaderboard")) || [];
        leaderboardData.push({ name: playerName, score: score });
        leaderboardData.sort((a, b) => b.score - a.score);
        leaderboardData = leaderboardData.slice(0, 10);
        localStorage.setItem("leaderboard", JSON.stringify(leaderboardData));
    }

    function displayLeaderboard() {
        leaderboardList.innerHTML = "";
        let leaderboardData = JSON.parse(localStorage.getItem("leaderboard")) || [];
        leaderboardData.forEach((entry, index) => {
            let li = document.createElement("li");
            li.textContent = `${index + 1}. ${entry.name} - ${entry.score} نقطة`;
            leaderboardList.appendChild(li);
        });
    }

    saveWordButton.addEventListener("click", function () {
        let newGermanWord = document.getElementById("newGermanWord").value.trim();
        let newArabicTranslation = document.getElementById("newArabicTranslation").value.trim();

        if (newGermanWord === "" || newArabicTranslation === "") {
            alert("يرجى إدخال الكلمة بالألمانية والترجمة بالعربية!");
            return;
        }

        words.push({ word: newGermanWord, translations: newArabicTranslation.split(",") });

        alert("تمت إضافة الكلمة بنجاح!");
        document.getElementById("newGermanWord").value = "";
        document.getElementById("newArabicTranslation").value = "";
        addWordPopup.style.display = "none";
    });


    // عناصر HTML
    const translateButton = document.getElementById("translateButton");
    const WordElement = document.getElementById("word"); // الكلمة المطلوب ترجمتها

    // قائمة اللغات مع أعلامها
    const languages = [
        { code: "en", flag: "🇬🇧" }, // الإنجليزية
        { code: "es", flag: "🇪🇸" }, // الإسبانية
        { code: "fr", flag: "🇫🇷" }, // الفرنسية
        { code: "ar", flag: "🇸🇦" }  // العربية (العودة للوضع الأصلي)
    ];

    let currentLanguageIndex = 0; // تبدأ بالعربية

    // عند الضغط على زر الترجمة
    translateButton.addEventListener("click", function () {
    currentLanguageIndex = (currentLanguageIndex + 1) % languages.length; // الانتقال للغة التالية
    const selectedLanguage = languages[currentLanguageIndex];

    // تحديث الزر ليصبح علم اللغة المختارة
    translateButton.textContent = selectedLanguage.flag;

    // ترجمة الصفحة
    translatePage(selectedLanguage.code);
});

// 🔄 وظيفة ترجمة الصفحة بالكامل (ما عدا الكلمة المطلوب ترجمتها)
function translatePage(lang) {
    document.querySelectorAll("h1, h2, h3, p, span, button, label, input[placeholder]").forEach(element => {
        if (element === wordElement || element === translateButton) return; // ✅ استثناء الكلمة المطلوبة وزر الترجمة

        let text = element.innerText || element.placeholder;
        if (text.trim() !== "") {
            fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=ar|${lang}`)
                .then(response => response.json())
                .then(data => {
                    if (element.placeholder) {
                        element.placeholder = data.responseData.translatedText;
                    } else {
                        element.innerText = data.responseData.translatedText;
                    }
                })
                .catch(error => {
                    console.error("خطأ في الترجمة:", error);
                });
        }
    });
    window.addEventListener("beforeunload", function (event) {
        if (gameActive) {
            event.preventDefault();
            event.returnValue = "هل أنت متأكد أنك تريد الخروج؟ ستخسر اللعبة!";
        }
    });
   
}


    startGameButton.addEventListener("click", startGame);
    checkAnswerButton.addEventListener("click", checkAnswer);
    playSoundButton.addEventListener("click", playSound);
    leaderboardButton.addEventListener("click", toggleLeaderboard);
    addWordButton.addEventListener("click", () => addWordPopup.style.display = "block");
    closePopupButton.addEventListener("click", () => addWordPopup.style.display = "none");
});
