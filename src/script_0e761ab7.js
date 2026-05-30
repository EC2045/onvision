const broadcastData = {
            './onvision4-26.mp4': {
                newsTitle: '象徴アール氏のネットワーク切断',
                newsBody: 'アーティストアール氏が公式ネットワークから切断されました。氏のアトリエからは標準プロトコル外の「禁止された色彩」が発見され、現在は公共アーカイブ内のデータへと移行されています。解析が進められています。',
                newsSource: 'SOURCE: WAC REPORT',
                newsStatus: 'ARCHIVED',
                newsStatusColor: 'text-red-600',
                symbol: '‽',
                symbolName: 'Name: Interrobang',
                symbolFunc: 'Function: Sync Stability',
                symbolBody: '驚愕と疑問を一つの座標に固定する記号です。理解不能な事態に遭遇した際は、思考を停止させ、ただこの記号を脳内に描いてください。',
                cultureTitle: '最適化ポテトサラダ配給開始',
                cultureScore: '100%',
                cultureBarWidth: '100%',
                cultureType: '第4世代: 咀嚼不要モデル',
                cultureBody: '最高級品種オリジン・ゴールドの食感を再現。無駄な振動エネルギーを最小限に抑えます。この完璧な均一性を享受してください。'
            },
            './onvision4-22.mp4': {
                newsTitle: '不適切な個人的演算による拘束',
                newsBody: '本日未明、音場の20代男性がノードラボ第3演算エネルギー濃度へ不正アクセス。標準言語プロトコルの監視を逃れ、未承認の「幸福な個人的演算」を3600秒間実行しました。この影響で演算精度に0.02%の遅延が発生しました。',
                newsSource: 'SOURCE: USSO INVESTIGATION',
                newsStatus: 'RESOLVED',
                newsStatusColor: 'text-emerald-600',
                symbol: '!A',
                symbolName: 'Name: Artist R Design',
                symbolFunc: 'Type: Universal Vowel',
                symbolBody: '文字のない時代にデザインされた、最もシンプルで根源的な記号です。調和は正しい記号の選択から生まれます。',
                cultureTitle: '明日の環境予測',
                cultureScore: '99.8%',
                cultureBarWidth: '99.8%',
                cultureType: '空の色: 固定エメラルド',
                cultureBody: 'ノードラボの配熱処理サイクルにより終日固定されます。違和感がある場合は彩度調整Lv.4を推奨。'
            }
        };

        // Update Time with 2044-2046 fluctuation logic
        function updateTime() {
            const timeElement = document.getElementById('current-time');
            const now = new Date();
            
            // Year fluctuates between 2044 and 2046
            // Using a slow sine wave or random jump for "glitch" feel
            const jitter = Math.sin(now.getTime() / 1000) * 1.5;
            const year = 2045 + Math.round(jitter);
            
            const h = 31;
            const m = 92 + (now.getSeconds() % 10);
            timeElement.textContent = `${year}.04.26 ${h}:${m}`;
        }
        setInterval(updateTime, 500);
        updateTime();

        // Smooth video reveal and archive logic
        window.onload = () => {
            const video = document.getElementById('main-video');
            video.style.opacity = '1';

            // Archive switching logic
            const archiveCards = document.querySelectorAll('.archive-card');
            const videoSource = document.getElementById('video-source');

            archiveCards.forEach(card => {
                card.addEventListener('click', () => {
                    const newSrc = card.getAttribute('data-video');
                    const data = broadcastData[newSrc];
                    
                    // Update active state
                    archiveCards.forEach(c => c.classList.remove('active'));
                    card.classList.add('active');

                    // Switch video source
                    video.pause();
                    videoSource.src = newSrc;
                    video.load();
                    video.play();

                    // Update Text Content
                    if (data) {
                        document.getElementById('news-title').textContent = data.newsTitle;
                        document.getElementById('news-body').textContent = data.newsBody;
                        document.getElementById('news-source').textContent = data.newsSource;
                        const statusEl = document.getElementById('news-status');
                        statusEl.textContent = data.newsStatus;
                        statusEl.className = `text-xs font-bold ${data.newsStatusColor}`;

                        document.getElementById('symbol-char-small').textContent = data.symbol;
                        document.getElementById('symbol-char').textContent = data.symbol;
                        document.getElementById('symbol-name').textContent = data.symbolName;
                        document.getElementById('symbol-func').textContent = data.symbolFunc;
                        document.getElementById('symbol-body').textContent = data.symbolBody;

                        document.getElementById('culture-title').textContent = data.cultureTitle;
                        document.getElementById('culture-score').textContent = data.cultureScore;
                        document.getElementById('culture-bar').style.width = data.cultureBarWidth;
                        document.getElementById('culture-type').textContent = data.cultureType;
                        document.getElementById('culture-body').textContent = data.cultureBody;
                    }

                    // Scroll to top
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                });
            });
        };
