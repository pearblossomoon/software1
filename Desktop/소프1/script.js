// script.js
let isSearchMode = false;

function renderCards(filterText = '') {
    const mainContainer = document.getElementById('view-main');
    const container = document.getElementById('cardsContainer');
    const lowerFilter = filterText.toLowerCase();

    // Only render cards when viewing the main home.
    container.innerHTML = '';

    treeData.forEach(lec => {
        let match = false;
        
        let aggregateData = lec.title.toLowerCase();
        lec.subs.forEach(s => {
            aggregateData += s.subTitle.toLowerCase() + s.content.toLowerCase();
        });
        
        if (lec.id === 'tf') {
            const quizStr = quizzes.map(q => q.question + q.answer + q.desc).join(' ').toLowerCase();
            aggregateData += quizStr;
        }

        if (aggregateData.includes(lowerFilter)) {
            match = true;
        }
        
        if (match) {
            const card = document.createElement('div');
            card.className = 'card';
            card.style.borderTop = `4px solid ${lec.color}`;
            
            card.innerHTML = `
                <h4>${lec.title}</h4>
            `;
            
            card.addEventListener('click', () => {
                openSubListView(lec, lowerFilter);
            });
            
            container.appendChild(card);
        }
    });
}

function openSubListView(lecData, filterText = '') {
    // Hide main, show sub
    document.getElementById('view-main').classList.remove('active');
    document.getElementById('view-detail').classList.remove('active');
    document.getElementById('view-sub').classList.add('active');
    
    document.getElementById('subTitle').innerText = `${lecData.title}`;
    
    const container = document.getElementById('subListContainer');
    container.innerHTML = '';

    lecData.subs.forEach(sub => {
        // If searching, we optionally highlight or filter sub items.
        // For sublists, we show all belonging to this matched category.
        const dItem = document.createElement('div');
        dItem.className = 'sub-item';
        dItem.innerHTML = `<span style="border-left: 4px solid ${lecData.color}; border-radius: 4px; display: inline-block; height: 18px; margin-right: 12px;"></span> ${sub.subTitle}`;
        
        dItem.addEventListener('click', () => {
            openDetailReadingView(lecData, sub, filterText);
        });
        
        container.appendChild(dItem);
    });
}

function getQuizHtml() {
    let html = '';
    quizzes.forEach(quiz => {
        html += `
            <div class="tf-item">
                <div class="tf-q">
                    <span class="tf-mark ${quiz.type}">${quiz.label}</span>
                    ${quiz.question}
                </div>
                <div class="tf-a">
                    <strong style="color: #ef4444; font-size: 0.95rem;">정답: ${quiz.answer}</strong>
                    <p style="margin-top: 0.5rem; font-size: 0.9rem; color: #52525b; line-height: 1.5;">${quiz.desc}</p>
                </div>
            </div>
        `;
    });
    return html;
}

function openDetailReadingView(lecData, subData, filterText = '') {
    document.getElementById('view-main').classList.remove('active');
    document.getElementById('view-sub').classList.remove('active');
    document.getElementById('view-detail').classList.add('active');
    
    // Light nav switch
    document.querySelector('.glass-nav').classList.add('light-nav');
    
    document.getElementById('detailTitle').innerText = subData.subTitle;
    document.getElementById('detailBackBtn').innerText = `← ${lecData.title}`;
    
    // Wire back button
    const backBtn = document.getElementById('detailBackBtn');
    // Remove previous listeners
    const newBtn = backBtn.cloneNode(true);
    backBtn.parentNode.replaceChild(newBtn, backBtn);
    
    newBtn.addEventListener('click', () => {
        document.querySelector('.glass-nav').classList.remove('light-nav');
        openSubListView(lecData, document.getElementById('searchInput').value);
    });

    const body = document.getElementById('readingBody');
    
    let injectedContent = subData.content;
    if (injectedContent.includes('_QUIZ_PLACEHOLDER_')) {
        injectedContent = getQuizHtml();
    }
    
    // Highlight if search exist
    if (filterText) {
        const regex = new RegExp(filterText, 'gi');
        // Do not highlight inside html tags. Hard to do simple replace, but we'll try a safe approach
        // for cheat sheet it's fine
        // Simple highlighting wrapper
        const highlightWrapper = (match) => `<mark style="background:#fef08a; padding: 0 2px;">${match}</mark>`;
        // This regex highlights text outside of tags roughly.
        injectedContent = injectedContent.replace(/(?![^<]*>)(text_to_replace)/gi.source.replace('text_to_replace', filterText), highlightWrapper);
    }
    
    body.innerHTML = injectedContent;
    window.scrollTo(0,0);
}

// Nav Buttons
document.getElementById('subBackBtn').addEventListener('click', () => {
    document.getElementById('view-sub').classList.remove('active');
    document.getElementById('view-main').classList.add('active');
});

// Search input wrapper
document.getElementById('searchInput').addEventListener('input', (e) => {
    // Return to main view immediately upon searching
    document.getElementById('view-sub').classList.remove('active');
    document.getElementById('view-detail').classList.remove('active');
    document.querySelector('.glass-nav').classList.remove('light-nav');
    document.getElementById('view-main').classList.add('active');
    
    renderCards(e.target.value);
});

// Initial render
renderCards();
