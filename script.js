const lectures = [
    { id: "1-2", emoji: "💻", title: "하드웨어 & 데이터 표현", color: "#3b82f6" },
    { id: "2-1", emoji: "⚙️", title: "소프트웨어 & 운영체제", color: "#ef4444" },
    { id: "2-2", emoji: "🌐", title: "네트워크 & 인터넷", color: "#f59e0b" },
    { id: "3-1", emoji: "🧠", title: "계산적 사고 & 알고리즘", color: "#eab308" },
    { id: "3-2", emoji: "📝", title: "프로그래밍 언어", color: "#8b5cf6" },
    { id: "4-1", emoji: "☁️", title: "클라우드 & 가상화", color: "#22c55e" },
    { id: "4-2", emoji: "🐧", title: "리눅스 OS 기초", color: "#0ea5e9" },
    { id: "5-1", emoji: "⌨️", title: "쉘(Shell) 명령어", color: "#6366f1" },
    { id: "5-2", emoji: "📂", title: "파일 & 디렉토리", color: "#d946ef" },
    { id: "6-1", emoji: "👤", title: "프로세스 & 입출력", color: "#ec4899" },
    { id: "tf", emoji: "✅", title: "T/F & 단답 키워드", color: "#22c55e" }
];

const quizzes = [
    {
        type: "tf",
        label: "T/F",
        question: "디지털 통신은 연속적인 값을 이용하며 정보의 손실이 발생하기 쉽다.",
        answer: "False",
        desc: "아날로그 통신에 대한 설명입니다. 디지털 통신은 0과 1로 부호화되어 정보의 손실이 적고 강건성이 높습니다."
    },
    {
        type: "short",
        label: "주관식",
        question: "대상 시스템의 동작을 그대로 모사하여 흉내 내는 기술을 무엇이라 하는가?",
        answer: "에뮬레이션 (Emulation)",
        desc: "시스템 동작의 결과를 산출하는 시뮬레이션과 달리, 대상 자체의 동작을 그대로 모사하는 것은 에뮬레이션입니다."
    },
    {
        type: "tf",
        label: "T/F",
        question: "리눅스에서는 디렉토리를 포함한 거의 모든 입출력을 파일로 간주한다.",
        answer: "True",
        desc: "리눅스는 '모든 것은 파일이다'라는 철학을 가지고 있어 하드웨어 디바이스나 디렉토리도 파일처럼 취급합니다."
    },
    {
        type: "tf",
        label: "T/F",
        question: "쉘(Shell)은 커널의 핵심 기능으로서 하드웨어를 직접 제어한다.",
        answer: "False",
        desc: "쉘은 사용자의 명령을 해석하여 커널에 전달하는 '껍데기(인터페이스)' 역할을 합니다. 하드웨어를 제어하는 것은 커널(Kernel)입니다."
    },
    {
        type: "short",
        label: "주관식",
        question: "컴퓨터가 효과적으로 수행할 수 있도록 문제를 정의하고 답을 기술하는 사고 과정을 무엇이라 하는가?",
        answer: "계산적 사고 (Computational Thinking)",
        desc: "데이터 모델링, 자료 추상화, 알고리즘을 이용한 문제 해결 과정 전반을 뜻합니다."
    },
    {
        type: "tf",
        label: "T/F",
        question: "운영체제(OS)는 오직 응용 프로그램만 관리할 뿐 사용자 인터페이스는 제공하지 않는다.",
        answer: "False",
        desc: "운영체제는 응용 프로그램에게 실행 환경을 제공하며, 사용자에게도 시스템 자원을 이용할 수 있는 인터페이스(쉘, GUI 등)를 제공합니다."
    },
    {
        type: "short",
        label: "주관식",
        question: "리눅스에서 시스템에 등록된 사용자들의 계정 정보가 담겨있는 파일의 경로는?",
        answer: "/etc/passwd",
        desc: "해당 파일에는 사용자의 이름, UID, GID, 홈 디렉토리, 기본 쉘 등의 정보가 기록되어 있습니다."
    }
];

function getQuizHtml() {
    let html = '<h3>T/F & 단답형 핵심 문제</h3><hr><div style="margin-top: 2rem;">';
    quizzes.forEach(quiz => {
        html += `
            <div class="quiz-item">
                <div class="quiz-question">
                    <span class="quiz-type ${quiz.type}">${quiz.label}</span>
                    <span class="q-text">${quiz.question}</span>
                </div>
                <div class="quiz-answer">
                    <span class="answer-text">정답: ${quiz.answer}</span>
                    <span class="answer-desc">${quiz.desc}</span>
                </div>
            </div>
        `;
    });
    html += '</div>';
    return html;
}

function renderCards(filterText = '') {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = '';

    const lowerFilter = filterText.toLowerCase();

    lectures.forEach(lec => {
        let match = false;
        
        if (lec.id === 'tf') {
            const quizStr = quizzes.map(q => q.question + q.answer + q.desc).join(' ').toLowerCase();
            if (lec.title.toLowerCase().includes(lowerFilter) || quizStr.includes(lowerFilter)) {
                match = true;
            }
        } else {
            const dataStr = (typeof detailsData !== 'undefined' && detailsData[lec.id]) ? detailsData[lec.id].toLowerCase() : '';
            if (lec.title.toLowerCase().includes(lowerFilter) || dataStr.includes(lowerFilter)) {
                match = true;
            }
        }
        
        if (match) {
            const card = document.createElement('div');
            card.className = 'card';
            card.style.borderTop = `4px solid ${lec.color}`;
            
            card.innerHTML = `
                <div class="card-icon">${lec.emoji}</div>
                <h4>${lec.title}</h4>
            `;
            
            card.addEventListener('click', () => {
                const modal = document.getElementById('detailModal');
                const title = document.getElementById('modalTitle');
                const body = document.getElementById('modalBody');
                
                title.innerText = lec.title;
                
                if (lec.id === 'tf') {
                    body.innerHTML = getQuizHtml();
                } else {
                    const detailText = (typeof detailsData !== 'undefined' && detailsData[lec.id]) 
                        ? detailsData[lec.id] 
                        : '상세 정보가 아직 준비되지 않았습니다.';
                    body.innerHTML = detailText;
                }
                
                modal.style.display = 'block';
            });
            
            container.appendChild(card);
        }
    });
}

document.getElementById('searchInput').addEventListener('input', (e) => {
    renderCards(e.target.value);
});

// 검색 후 Enter 키보드 입력 시 제일 상단 검색 결과 오픈
document.getElementById('searchInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const text = e.target.value.toLowerCase().trim();
        if(!text) return;
        
        const match = lectures.find(lec => {
            if (lec.id === 'tf') {
                const quizStr = quizzes.map(q => q.question + q.answer + q.desc).join(' ').toLowerCase();
                return lec.title.toLowerCase().includes(text) || quizStr.includes(text);
            } else {
                const dataStr = detailsData[lec.id] ? detailsData[lec.id].toLowerCase() : '';
                return dataStr.includes(text) || lec.title.toLowerCase().includes(text);
            }
        });
        
        if (match) {
            const modal = document.getElementById('detailModal');
            const title = document.getElementById('modalTitle');
            const body = document.getElementById('modalBody');
            
            title.innerText = match.title;
            
            if (match.id === 'tf') {
                body.innerHTML = getQuizHtml();
            } else {
                let detailText = detailsData[match.id] || '상세 정보가 아직 준비되지 않았습니다.';
                const regex = new RegExp(text, 'gi');
                detailText = detailText.replace(regex, matchStr => `<mark style="background:var(--accent-glow);color:white;padding:0 2px;border-radius:2px;">${matchStr}</mark>`);
                body.innerHTML = detailText;
            }
            modal.style.display = 'block';
        }
    }
});

// Modal Close Event
document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('detailModal').style.display = 'none';
});
window.addEventListener('click', (e) => {
    const modal = document.getElementById('detailModal');
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Initial render
renderCards();
