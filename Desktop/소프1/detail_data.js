const quizzes = [
    { type: "tf", label: "T/F", question: "디지털 통신은 연속적인 값을 이용하며 정보의 손실이 발생하기 쉽다.", answer: "False", desc: "아날로그 통신에 대한 설명입니다. 디지털 통신은 0과 1로 부호화되어 정보의 손실이 적고 강건성이 높습니다." },
    { type: "short", label: "단답", question: "대상 시스템의 동작을 그대로 모사하여 흉내 내는 기술을 무엇이라 하는가?", answer: "에뮬레이션 (Emulation)", desc: "시스템 동작의 결과를 산출하는 시뮬레이션과 달리, 내부 동작을 그대로 복제하는 것은 에뮬레이션입니다." },
    { type: "tf", label: "T/F", question: "리눅스에서는 디렉토리를 포함한 거의 모든 입출력을 파일로 간주한다.", answer: "True", desc: "리눅스는 '모든 것은 파일이다'라는 철학을 가집니다." },
    { type: "tf", label: "T/F", question: "쉘(Shell)은 커널의 핵심 기능으로서 하드웨어를 직접 제어한다.", answer: "False", desc: "쉘은 '껍데기(인터페이스)' 역할을 하며, 하드웨어를 제어하는 것은 커널(Kernel)입니다." },
    { type: "short", label: "단답", question: "리눅스에서 시스템에 등록된 사용자들의 계정 정보가 담겨있는 파일의 경로는?", answer: "/etc/passwd", desc: "해당 파일에 사용자의 이름, UID, 기본 쉘 등의 정보가 기록되어 있습니다." }
];

const treeData = [
    {
        id: "1-2", emoji: "💻", title: "하드웨어 & 데이터 표현", color: "#3b82f6",
        subs: [
            {
                subTitle: "컴퓨터란 무엇인가?",
                content: `
                    <h4>컴퓨터의 정의 (Wikipedia)</h4>
                    <div class="pre-box">A computer is a device that can be instructed to carry out sequences of arithmetic or logical operations automatically via computer programming.</div>
                    <p>컴퓨터는 프로그래밍을 통해 자동으로 일련의 산술 또는 논리 연산을 수행할 수 있는 장치입니다(전자계산기).</p>
                    <p>과거 중국어로는 전뇌(电脑)라고도 불렸으며 단순히 연산을 넘어 데이터(Data)를 기반으로 형태 있는 정보(Information)를 창출해냅니다.</p>
                    <hr>
                    <h4>컴퓨터가 가지는 4대 주요 기능</h4>
                    <ul>
                        <li><strong>입력 (Input)</strong></li>
                        <li><strong>처리 (Process)</strong></li>
                        <li><strong>저장 (Storage/Memory)</strong></li>
                        <li><strong>출력 (Output)</strong></li>
                    </ul>
                    <p><em>이러한 기능의 조합을 통해 단순한 계산부터 인공지능이 바둑을 이기는 수준의 작업도 가능합니다.</em></p>
                `
            },
            {
                subTitle: "디지털 정보의 표현법 & 2의 보수",
                content: `
                    <h4>디지털과 2진수</h4>
                    <ul>
                        <li><strong>디지털 모델:</strong> 0(꺼짐/거짓)과 1(켜짐/참)을 조합한 디지털 정보로 모든 데이터를 표현</li>
                        <li><strong>비트(Bit):</strong> 디지털 회로의 가장 작은 단위.</li>
                        <li><strong>바이트(Byte):</strong> 8개 비트의 묶음. 영대소문자, 숫자 등을 충분히 표현하기 위해 채택.</li>
                    </ul>
                    <hr>
                    <h4>음수의 표현 - 2의 보수 (2's complement)</h4>
                    <div class="pre-box">
Rule 1. 비트 반전 (1의 보수): 0은 1로, 1은 0으로 바꿈<br>
Rule 2. 1 더하기: 그렇게 바뀐 비트열에 1을 더함
                    </div>
                    <p>2의 보수법을 사용하는 가장 큰 이유는 기존의 '덧셈' 회로를 그대로 사용하여 '뺄셈' 연산까지 모두 처리할 수 있어 하드웨어 설계가 매우 단순해지기 때문입니다.</p>
                `
            },
            {
                subTitle: "하드웨어 구성 요소와 메모리 계층",
                content: `
                    <h4>하드웨어 구성 4요소</h4>
                    <ul>
                        <li><strong>중앙처리장치 (CPU):</strong> 제어장치(명령어 해석), ALU(산술논리연산), 레지스터로 구성됨.</li>
                        <li><strong>주기억장치 (Memory):</strong> RAM(전원 차단시 소실), ROM(읽기 전용). 실행 중인 프로세스의 명령어/데이터가 저장됨. 공간은 일련의 주소(Address)로 관리됨.</li>
                        <li><strong>보조기억장치 (Storage):</strong> HDD(자기디스크), SSD(플래시 메모리). 반영구적 저장소.</li>
                        <li><strong>입출력장치 (I/O):</strong> 마우스, 키보드, 모니터, 네트워크 카드 등.</li>
                    </ul>
                    <hr>
                    <h4>메모리 계층 구조 (Memory Hierarchy)</h4>
                    <p>접근 속도가 빠르고 비트를 저장하는 비용이 비쌀수록 CPU와 가까운 상위에 위치하게 됩니다.</p>
                    <ol>
                        <li>레지스터 (Registers)</li>
                        <li>캐시 메모리 (Cache)</li>
                        <li>주기억장치 (Main Memory)</li>
                        <li>보조기억장치 (Storage)</li>
                    </ol>
                `
            }
        ]
    },
    {
        id: "2-1", emoji: "⚙️", title: "소프트웨어 & 운영체제", color: "#ef4444",
        subs: [
            {
                subTitle: "소프트웨어의 분류",
                content: `
                    <h4>소프트웨어란?</h4>
                    <div class="pre-box">Computer software, is a collection of data or computer instructions that tell the computer how to work.</div>
                    <p>하드웨어만으로는 아무것도 할 수 없으며 하드웨어에게 작업을 지시하는 모든 명령어 집합을 뜻합니다.</p>
                    <hr>
                    <h4>시스템 소프트웨어 vs 응용 소프트웨어</h4>
                    <ul>
                        <li><strong>시스템 소프트웨어:</strong> 컴퓨터 시스템을 운용하거나 개발을 지원하는 기반 소프트웨어 (운영체제, 컴파일러, 링커/로더).</li>
                        <li><strong>응용 소프트웨어:</strong> 문서 편집(워드), 웹서핑, 게임 등 사용자 특유의 목적을 달성하기 위한 응용 프로그램.</li>
                    </ul>
                `
            },
            {
                subTitle: "운영체제 (OS)의 개념 및 역할",
                content: `
                    <h4>운영체제란 (Operating System)?</h4>
                    <p>컴퓨터 시스템이 살아가기 위해 반드시 필요한 가장 중요한 시스템 소프트웨어 모음입니다. (Windows, MacOS, Linux 등)</p>
                    <hr>
                    <h4>운영체제의 주요 역할</h4>
                    <ul>
                        <li><strong>자원 관리 (Resource Management):</strong> 프로세서(CPU) 시간, 메모리 공간 확보, 파일 시스템 등을 효율적으로 관리하고 분배합니다.</li>
                        <li><strong>인터페이스 제공:</strong> 사용자와 응용 프로그램이 복잡한 하드웨어를 쉽게 사용할 수 있도록 추상화된 환경 및 시스템 콜(System calls)을 제공합니다. (예: 텍스트 에디터, 쉘)</li>
                    </ul>
                    <h4>OS의 분류 기준</h4>
                    <p>운용 대상 시스템(범용 vs 내장형), 사용자 수(Single-User vs Multi-User), 프로세서 수, 작업 방식(시분할 vs 다중프로그래밍) 등에 따라 분류됩니다.</p>
                `
            },
            {
                subTitle: "프로그래밍 언어의 실행 모델",
                content: `
                    <h4>컴파일러 vs 인터프리터</h4>
                    <p>사람이 짠 소스코드(고수준 프로그래밍 언어)는 하드웨어가 바로 이해할 수 없으므로 번역 과정이 필수적입니다.</p>
                    <ul>
                        <li><strong>컴파일러 (Compiler) 장점:</strong>
                            <ul>
                                <li>실행 이전에 코드를 미리 한 번에 번역/최적화 해치우므로 프로그램 <strong>실행 속도(효율)</strong>가 압도적으로 빠름.</li>
                            </ul>
                        </li>
                        <li><strong>인터프리터 (Interpreter) 장점:</strong>
                            <ul>
                                <li>실시간으로 번역하며 실행하므로 다른 컴퓨터 인프라 환경으로 이식성(Portability)이 뛰어남.</li>
                                <li>개발 시 피드백을 바로바로 받을 수 있는 대화형 개발/디버깅에 용이함.</li>
                            </ul>
                        </li>
                    </ul>
                `
            }
        ]
    },
    {
        id: "2-2", emoji: "🌐", title: "네트워크 & 인터넷", color: "#f59e0b",
        subs: [
            {
                subTitle: "아날로그와 디지털 통신의 차이",
                content: `
                    <h4>방식 비교</h4>
                    <ul>
                        <li><strong>아날로그 (Analog):</strong> 자연 상태에서 나타나는 <strong>연속적</strong>인 값을 정보로 표현합니다. (유선 라디오, 전화선 등)</li>
                        <li><strong>디지털 (Digital):</strong> 0과 1 (이산적)의 조합으로 부호화된 신호로 정보를 표현합니다. (휴대폰 5G, IPTV 등)</li>
                    </ul>
                    <hr>
                    <h4>디지털 통신의 강력한 이점</h4>
                    <div class="pre-box">
- 정보의 손실이 적음 (가장 중요)<br>
- 신호가 왜곡되어도 단순히 0, 1만을 판단하면 되므로 통신 잡음에 대해 <strong>강건성(Robust)</strong>이 뛰어납니다.<br>
- 약해진 신호를 증폭할 때 원본(0, 1)으로의 완전한 자가 오류 정정/복원이 뛰어납니다.<br>
- 암호화가 용이하며 매체 다중화 처리에 유리.
                    </div>
                `
            },
            {
                subTitle: "통신 방식과 프로토콜 (Protocol)",
                content: `
                    <h4>단방향 / 전이중</h4>
                    <ul>
                        <li><strong>단방향 (Simplex):</strong> 키보드 입력, 라디오 방송처럼 무조건 한 쪽으로만 송신합니다.</li>
                        <li><strong>반이중 (Half Duplex):</strong> 양쪽 송신이 가능하지만 "동시"에는 불가능합니다. (예: 무전기)</li>
                        <li><strong>전이중 (Full Duplex):</strong> 네트워크 망이나 휴대폰처럼 동시에 실시간 양방향 전송이 가능합니다.</li>
                    </ul>
                    <hr>
                    <h4>프로토콜 (Protocol)</h4>
                    <p>서로 다른 물리적인 환경을 가진 컴퓨터들이 인터넷 위에서 데이터를 문제없이 주고받기 위해 정의된 모두의 <strong>약속 및 규약</strong>입니다. 현재의 인터넷망은 TCP/IP 프로토콜을 근간으로 통신을 제어합니다.</p>
                `
            }
        ]
    },
    {
        id: "3-1", emoji: "🧠", title: "계산적 사고 & 알고리즘", color: "#eab308",
        subs: [
            {
                subTitle: "계산적 사고 (Computational Thinking)",
                content: `
                    <h4>패러다임의 선회</h4>
                    <p>과거에는 소수의 전문가가 사용하는 '숨어 있는 기계'였지만, 현재는 패러다임이 변하여 '모든 사람의 주머니'에 존재하는 모든 측면의 혁신 도구가 되었습니다.</p>
                    <hr>
                    <h4>계산적 사고란?</h4>
                    <p>단순히 사고하는 것을 의미하는 것이 아니라, 컴퓨터(혹은 사람)가 <strong>효과적으로 문제를 풀이할 수 있도록</strong> 문제를 정의하고, 답을 명확하게 도출하는 사고 과정 전반을 뜻합니다.</p>
                    <div class="pre-box">
1. 문제 분해 (Decomposition)<br>
2. 패턴 인식 (Pattern Recognition)<br>
3. 추상화 (Abstraction) - 핵심 이외의 디테일 제거<br>
4. 알고리즘 설계 (Algorithms)
                    </div>
                `
            },
            {
                subTitle: "알고리즘(Algorithm)",
                content: `
                    <h4>알고리즘의 뜻과 목적</h4>
                    <p>알고리즘은 어떤 문제를 해결하기 위한 구체적이고 명확한 절차 및 순서들의 스텝 모음입니다.</p>
                    <p>계산적 사고의 최종 목표 역시, 이 알고리즘을 구축하여 문제를 사람이 일일이 푸는 게 아니라 <strong>자동화(Automation)</strong> 하는 데 목적이 있습니다.</p>
                `
            }
        ]
    },
    {
        id: "3-2", emoji: "📝", title: "프로그래밍 언어", color: "#8b5cf6",
        subs: [
            {
                subTitle: "프로그래밍 과정과 언어",
                content: `
                    <h4>계산적 사고의 특징 정리</h4>
                    <ul>
                        <li>자료를 분석 & 논리적으로 조직화하기</li>
                        <li>데이터를 모형화하고 추상화를 달성</li>
                        <li>알고리즘적 사고를 바탕으로 도출된 해결책을 <strong>자동화</strong>하기</li>
                        <li>문제를 <strong>일반화(Generalization)</strong> 하여 유사한 다른 문제 영역에 응용/적용하기</li>
                    </ul>
                    <hr>
                    <h4>프로그래밍 언어의 역할</h4>
                    <p>컴퓨터는 0과 1만을 이해하고 인간은 한글이나 영어를 사용합니다. 즉 의사소통 방식이 근본적으로 다릅니다.</p>
                    <p>프로그래밍 언어는 <strong>이를 중재하기 위한 수단</strong>으로서, 인간이 배울 수 있는 구문(함수, 루프 등)을 사용해 알고리즘을 작성하면 기계어 번역기를 통해 컴퓨터를 자동 조종할 수 있게 도와줍니다.</p>
                `
            }
        ]
    },
    {
        id: "4-1", emoji: "☁️", title: "가상화 & 클라우드 컴퓨팅", color: "#22c55e",
        subs: [
            {
                subTitle: "시뮬레이션과 에뮬레이션",
                content: `
                    <h4>시뮬레이션 (Simulation)</h4>
                    <p>시스템 동작의 몇 가지 특성/결과 수학 모델만을 빌려 유사한 <strong>"결과를 산출해 내는 것"</strong>에 초점이 맞춰져 있습니다.</p>
                    <h4>에뮬레이션 (Emulation)</h4>
                    <p>결과뿐 아니라 대상 시스템 구성 요소의 <strong>"내부 동작 프로세스까지 그대로 모사(복제)하여 흉내"</strong> 내는 강력한 가상화 기법입니다.</p>
                    <hr>
                    <p>이러한 가상 실험들은 물리적인 비용/실패 리스크 감소와 정밀한 데이터 관측이라는 엄청난 경제적/학술적 이점을 지닙니다.</p>
                `
            },
            {
                subTitle: "추상화 (Abstraction)",
                content: `
                    <h4>추상화란?</h4>
                    <p>가장 중요한 뼈대/핵심 특징만을 남기고 복잡한 부분을 제거하는 사고입니다.</p>
                    <div class="pre-box">
[OS에서의 추상화 사례]<br>
- 복잡한 하드디스크 섹터 배열 → 손쉬운 "파일(File)" 구조로 추상화<br>
- 복잡한 물리 주소와 RAM 용량 → 무한대에 가까운 편안한 "가상 메모리 주소"로 추상화
                    </div>
                `
            },
            {
                subTitle: "클라우드 서비스 모델",
                content: `
                    <h4>모델 종류 (IaaS, PaaS, SaaS)</h4>
                    <ul>
                        <li><strong>IaaS (Infrastructure as a Service):</strong> 하드웨어/인프라스트럭처 자체(가상 가동 서버, 스토리지)를 원격으로 빌려줍니다. (AWS EC2)</li>
                        <li><strong>PaaS (Platform as a Service):</strong> 개발자가 애플리케이션만 올릴 수 있도록 소프트웨어 개발 플랫폼(DB, 런타임 등) 환경을 빌려줍니다.</li>
                        <li><strong>SaaS (Software as a Service):</strong> 사용자가 브라우저만 켜면 쓸 수 있도록 이미 개발이 완료된 상용 완제품 소프트웨어를 빌려줍니다. (예: Google Workspace, 노션)</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: "4-2", emoji: "🐧", title: "리눅스 OS 기초", color: "#0ea5e9",
        subs: [
            {
                subTitle: "리눅스(Linux) 소개와 특징",
                content: `
                    <h4>리눅스 란?</h4>
                    <p>리누스 토발즈(Linus Torvalds)에 의해 시작된 오픈소스 형태의 커널/운영체제입니다. 현재 사실상 거의 모든 데이터센터의 주류 OS로 채택되어 있습니다.</p>
                    <hr>
                    <h4>가장 중요한 3가지 특징</h4>
                    <ul>
                        <li><strong>무료 / 오픈소스 (Open Source):</strong> 소스 코 외부에 전면 공개되어 수많은 사람과 해커들이 집단 지성으로 취약점을 개선하고 배포합니다.</li>
                        <li><strong>방대한 이식성과 하드웨어 지원 플랫폼:</strong> 소형 임베디드 장비(라즈베리 파이, 안드로이드 스마트폰)부터 초대형 슈퍼컴퓨터까지 거의 모든 프로세서 구조에 포팅되어 있습니다.</li>
                        <li><strong>UNIX 기반:</strong> 수십년 전부터 강력한 서버용 멀티유저/멀티태스킹 OS였던 유닉스의 뼈대와 철학, 쉘 환경을 물려받아 설계되었습니다.</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: "5-1", emoji: "⌨️", title: "리눅스 쉘 명령어", color: "#6366f1",
        subs: [
            {
                subTitle: "명령어 기본 조작 (ls, cd, mkdir, man)",
                content: `
                    <h4>조회 및 이동 명령어</h4>
                    <ul>
                        <li><code>ls [options]</code> : 현재 디렉토리 목록 확인<br>
                            - <code>-a</code> : 숨겨진 파일 전부 표출<br>
                            - <code>-l</code> : 권한, 소유자, 용량, 날짜 등 상세 형태 표출<br>
                            - <code>-R</code> : 하위 디렉토리까지 재귀적으로(Recursive) 전부 표출
                        </li>
                        <li><code>cd [경로]</code> : 디렉토리 이동.<br>
                            - <code>.</code> (현재), <code>..</code> (상위 폴더), <code>~</code> (홈 디렉토리) 지칭 가능.
                        </li>
                        <li><code>pwd</code> : 터미널이 위치한 현재 작업 디렉토리의 절대 경로 출력</li>
                        <li><code>man [명령어]</code> : 명령어의 자세한 매뉴얼/사용법 확인 (빠져나오려면 q 입력)</li>
                    </ul>
                    <hr>
                    <h4>디렉토리 조작 실습 및 옵션</h4>
                    <ul>
                        <li><code>mkdir [폴더명]</code> : 새 폴더 생성</li>
                        <li><code>rmdir [폴더명]</code> : 빈 폴더 삭제. 폴더 내부에 파일이 있으면 삭제 실패함.</li>
                        <li><code>pushd [경로]</code> & <code>popd</code> : 현재 위치를 큐에 임시 저장하고 넘어가거나 방금 저장한 곳으로 되돌아옴.</li>
                    </ul>
                `
            },
            {
                subTitle: "파일 조작 명령어 (cp, mv, rm, cat)",
                content: `
                    <h4>복사, 이동 및 제거</h4>
                    <ul>
                        <li><code>cp [options] 원본 사본</code> : 복사<br>
                            - <code>-a</code> : 파일 권한 등 원본의 모든 특성 유지<br>
                            - <code>-r</code> : 디렉토리를 복사할 땐 반드시 넣어야 하는 재귀옵션
                        </li>
                        <li><code>mv 원본 목적지</code> : 파일 이동 혹은 이름 변경(동일 위치일 경우)</li>
                        <li><code>rm [options] 대상</code> : 파일 및 폴더 강제 삭제<br>
                            - <code>-i</code> : 지울 때마다 물어봄<br>
                            - <code>-r</code> : 폴더/하위 파일 싹 지움<br>
                            - <code>-f</code> : 물어보지 않고 강제로 지움 (경고: <strong>rm -rf</strong>는 리눅스에서 묻지도 따지지도 않고 모든 것을 폭파시키므로 극도의 주의 요망)
                        </li>
                    </ul>
                    <hr>
                    <h4>내용 확인 및 검색</h4>
                    <ul>
                        <li><code>cat [options] 파일명</code> : 파일 전체 내용을 터미널에 뿌림<br>
                            - <code>-n</code> : 모든 행에 줄번호(라인 넘버) 붙임<br>
                            - <code>-e</code> : 행 끝에 '$' 표기<br>
                        </li>
                        <li><code>more 파일명</code> : 내용이 너무 길어 화면 밖으로 넘어갈 때 페이지 단위(Space)로 볼 수 있게 함.</li>
                        <li><code>find [옵션] [조건표현식]</code> :<br>
                            - <code>-name</code>: 특정 이름 매칭 파일 검색<br>
                            - <code>-mtime n</code>: n일 내에 수정된 파일 검색 등 정밀 탐색.
                        </li>
                    </ul>
                `
            },
            {
                subTitle: "와일드카드 패턴 및 파일 소유권 (chmod, chown)",
                content: `
                    <h4>와일드카드 (Wildcard) 문법</h4>
                    <ul>
                        <li><code>*</code> : 글자 수 제한 없이 임의의 모든 문자열을 수용<br>
                            - <em>예: <code>rm *</code> (현재 폴더 파일 전부 삭제), <code>rm s*s</code> (s로 시작해서 s로 끝나는 것 삭제)</em>
                        </li>
                        <li><code>?</code> : 단 하나의 단일 문자를 대체</li>
                        <li><code>[a-s]</code> : a부터 s 사이에 존재하는 단일 문자 1개 대체</li>
                    </ul>
                    <hr>
                    <h4>권한 설계 및 소유자 변경 (중요)</h4>
                    <ul>
                        <li><code>chown [옵션] 소유자:그룹 파일명</code> : 파일/디렉토리의 소유자를 변경합니다. <br>
                            - <em>예: <code>chown root vimrc</code> (파일 시스템 코어작업이므로 root 권한 필요)</em>
                        </li>
                        <li><code>chmod [옵션] 모드 파일명</code> : 읽기(r), 쓰기(w), 실행(x) 등의 사용 권한(Permission)을 변경합니다. <br>
                            - <em>예: <code>chmod ug-w newdir</code> (user와 group에서 쓰기 제어권 회수)</em><br>
                            - <em>예: <code>chmod go-x newdir</code> (group과 others에서 실행 권한 회수)</em>
                        </li>
                        <li><code>chgrp 그룹명 파일명</code> : 파일의 그룹 소유자를 변경합니다. (root 권한 필요)</li>
                    </ul>
                    <hr>
                    <h4>프로세스 및 압축 확인</h4>
                    <ul>
                        <li><code>ps aux</code> : 현재 시스템 내 모든 프로세스의 상태 및 CPU/메모리 점유율 표출</li>
                        <li><code>tar</code> / <code>bzip2</code> / <code>gzip</code> : 여러 파일을 하나로 묶거나(Archive) 압축.</li>
                    </ul>
                `
            },
            {
                subTitle: "디렉토리 조작 및 터미널 실습 예제",
                content: `
                    <h4>전형적인 터미널 명령어 실습 플로우 (해설)</h4>
                    <div class="pre-box" style="font-family: monospace; background: #18191b; color: #a1a1aa; line-height: 1.8;">
<span style="color:#71717a;"># 1. 현재 내가 위치해 있는 폴더의 절대 경로 확인하기</span><br>
<span style="color:#10b981;">yihwa@ubuntu:~$</span> pwd<br>
/home/yihwa<br><br>

<span style="color:#71717a;"># 2. 현재 내 방(home)에 어떤 파일들이 있는지 목록 조회</span><br>
<span style="color:#10b981;">yihwa@ubuntu:~$</span> ls<br>
Desktop Documents Downloads<br><br>

<span style="color:#71717a;"># 3. 'test'라는 이름의 새 텅빈 디렉토리 하나 생성하기</span><br>
<span style="color:#10b981;">yihwa@ubuntu:~$</span> mkdir test<br><br>

<span style="color:#71717a;"># 4. 방금 만든 'test' 폴더가 잘 생겼는지 목록 다시 조회</span><br>
<span style="color:#10b981;">yihwa@ubuntu:~$</span> ls<br>
Desktop Documents Downloads test<br><br>

<span style="color:#71717a;"># 5. 만든 'test' 폴더 안으로 쏙 들어가기 (작업 위치 이동)</span><br>
<span style="color:#10b981;">yihwa@ubuntu:~$</span> cd test<br><br>

<span style="color:#71717a;"># 6. 위치가 바뀌었는지 다시 한 번 현재 경로 확인</span><br>
<span style="color:#10b981;">yihwa@ubuntu:~/test$</span> pwd<br>
/home/yihwa/test<br><br>

<span style="color:#71717a;"># 7. 볼일이 끝났으니 한 칸 밖으로(상위 폴더 '..') 빠져나오기</span><br>
<span style="color:#10b981;">yihwa@ubuntu:~/test$</span> cd ..<br><br>

<span style="color:#71717a;"># 8. 쓸모가 없어진 'test' 빈 폴더를 즉시 삭제하기</span><br>
<span style="color:#10b981;">yihwa@ubuntu:~$</span> rmdir test<br><br>

<span style="color:#71717a;"># 9. 삭제가 잘 되었는지 다시 목록을 조회하여 확인!</span><br>
<span style="color:#10b981;">yihwa@ubuntu:~$</span> ls<br>
Desktop Documents Downloads
                    </div>
                `
            }
        ]
    },
    {
        id: "5-2", emoji: "📂", title: "파일과 디렉토리", color: "#d946ef",
        subs: [
            {
                subTitle: "리눅스의 파일(File) 종류와 철학",
                content: `
                    <h4>모든 것은 파일이다 (Everything is a file)</h4>
                    <p>파일은 본래 "정보를 저장하는 논리적 단위"입니다. 리눅스에서는 이 파일이라는 철학을 확대 적용하여 마우스 디바이스, 네트워크 포트 등 모든 것을 논리적인 파일로 간주합니다.</p>
                    <hr>
                    <h4>단일 파일의 종류 예시</h4>
                    <ul>
                        <li><strong>텍스트 파일:</strong> 사람이 읽을 수 있는 문자열 모음 (.txt)</li>
                        <li><strong>이미지 / 오디오 파일:</strong> 바이너리로 처리되는 미디어 파일 (.png, .mp3)</li>
                        <li><strong>실행 파일:</strong> OS가 실행할 수 있는 프로세스 바이너리 (.exe 등)</li>
                    </ul>
                `
            },
            {
                subTitle: "디렉토리(Directory)와 트리 구조",
                content: `
                    <h4>디렉토리의 계층적 구성</h4>
                    <p>리눅스 시스템은 루트를 꼭대기로 하는 역트리(Tree) 형태로 모든 폴더 시스템을 구성하고 위계 질서를 잡습니다.</p>
                    <ul>
                        <li><strong>루트(Root) 디렉토리 <code>/</code> :</strong> 구조의 최상단 출발점. (C드라이브 같은 개념)</li>
                        <li><strong>홈(Home) 디렉토리 <code>~</code> :</strong> 시스템에 로그인한 개별 "사용자(User)"가 자유롭게 파일 생성 등 활동을 펼칠 수 있도록 최초로 할당받는 구역.</li>
                    </ul>
                `
            },
            {
                subTitle: "절대 경로와 상대 경로 (핵심)",
                content: `
                    <h4>개념 차이</h4>
                    <div class="pre-box">
<strong>* 절대경로:</strong> 출발지가 무조건 최상위 루트(/)로 고정되어 기술되는 무적 경로. 어디서 명령어를 치든 똑같은 파일을 가리킵니다. (예: /home/yihwa/test.txt)<br><br>
<strong>* 상대경로:</strong> 내가 지금 서있는 위치 "현재 디렉토리"를 기준으로 경로를 추적합니다. (예: ../yihwa/test.txt)
                    </div>
                `
            }
        ]
    },
    {
        id: "6-1", emoji: "👤", title: "프로세스 & 입출력", color: "#ec4899",
        subs: [
            {
                subTitle: "다중 사용자 시스템 (Multi-User)",
                content: `
                    <h4>리눅스는 Multi-User System이다</h4>
                    <p>초창기 윈도우 DOS 환경과 다르게, 원격 SSH 터미널 접속 관리 등을 통하여 여러 사용자가 동시에 하나의 시스템에 로그인하고 작업 프로세스를 생성하는 것을 허용합니다.</p>
                    <hr>
                    <h4>/etc/passwd 파일</h4>
                    <p>리눅스는 내부적으로 허가받은 사용자가 어떤 그룹에 속해있는지 등을 아주 철저히 조사합니다. <code>/etc/passwd</code> 경로의 시스템 환경 파일에는 가입된 유저들의 로그인 ID, 내부 회원 번호(UID), 소속 그룹 및 지정된 홈(home) 디렉토리 위치가 적혀있습니다.</p>
                `
            },
            {
                subTitle: "프로세스 (Process)",
                content: `
                    <h4>프로그램 vs 프로세스</h4>
                    <ul>
                        <li><strong>프로그램:</strong> 하드 디스크 구석에 가만히 덩그러니 놓여있는 잉크 없는 악보, 단순한 코드 모음 파일 (파일 그 자체).</li>
                        <li><strong>프로세스:</strong> OS 위에서 RAM으로 로딩되어 <strong>"지금 이 순간 실제로 실행 중인 능동적인 프로그램"</strong> 생명체.</li>
                    </ul>
                `
            },
            {
                subTitle: "리눅스의 3가지 기본/표준 입출력",
                content: `
                    <h4>입출력 흐름 방향 제어</h4>
                    <p>리눅스 쉘 환경에서 명령어가 프로세스로 실행될 때 기본적으로 열리는 통로 3개가 존재합니다.</p>
                    <ol>
                        <li><strong>표준 입력 (Standard Input - stdin, 번호 0):</strong> 프로그램으로 데이터가 흘러들어옵니다. (주요 장치: 키보드)</li>
                        <li><strong>표준 출력 (Standard Output - stdout, 번호 1):</strong> 프로그램 성공적 구동 결과물이 밖으로 배출됩니다. (디폴트: 디스플레이)</li>
                        <li><strong>표준 에러 (Standard Error - stderr, 번호 2):</strong> 에러 결과물을 모니터 화면으로 뚫고 보여줍니다.</li>
                    </ol>
                    <p>이들은 <code>></code> (출력 리다이렉션) 같은 명령어를 통해 모니터 대신 다른 txt 파일 안으로 결과를 꽂아넣을 수 있습니다.</p>
                `
            }
        ]
    },
    {
        id: "tf", emoji: "✅", title: "T/F & 단답 키워드", color: "#22c55e",
        subs: [
            {
                subTitle: "T/F & 주관식 핵심 대비 문항",
                content: "_QUIZ_PLACEHOLDER_"
            }
        ]
    }
];
