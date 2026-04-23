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

    ,{
        id: "hw1", emoji: "📚", title: "숙제 1 완벽 대비 Q&A", color: "#f43f5e",
        subs: [
            {
                subTitle: "A. 하드웨어와 데이터 표현 (Q1~Q10)",
                content: `

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q1</span><br>
                            <span style="font-weight:600; line-height: 1.6;">컴퓨터에서 정보를 저장하고 처리 및 표현하는 최소 단위를 무엇이라 하며, 이들을 8개 모아 구성한 기본 단위를<br>무엇이라 하는가?</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">최소 단위는 비트(bit)이고, 기본 단위는 바이트(byte)이다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q2</span><br>
                            <span style="font-weight:600; line-height: 1.6;">다음 진법 변환을 수행하시오.<br>(a) 10진수 237d → 2진수, 16진수<br>(b) 2진수 11001011b → 10진수, 16진수<br>(c) 16진수 0xA7 → 10진수, 2진수</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">(a) 2진수: 11101101, 16진수: 0xED / (b) 10진수: 203, 16진수: 0xCB / (c) 10진수: 167, 2진수: 10100111이다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q3</span><br>
                            <span style="font-weight:600; line-height: 1.6;">한 바이트(8 bits)를 이용하면 표현할 수 있는 부호 없는 정수의 범위는? 32비트 워드를 이용하면 지정 가능한 서<br>로 다른 주소의 개수는?</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">8비트 부호 없는 정수 범위는 0 ~ 255이다. 32비트 워드 주소 개수는 $2^{32}$개(약 42억 개)이다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q4</span><br>
                            <span style="font-weight:600; line-height: 1.6;">2의 보수 체계를 이용하여 아래 뺄셈을 8비트 2진수로 계산 과정을 보이시오.<br>119 - 53 = 66</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">119는 01110111, 53은 00110101이다. 53의 2의 보수(-53)는 11001011이다. 두 값을 더하면 01110111 + 11001011 = (1)01000010이며, 최상위 올림수 1은 버린다. 결과는 01000010 (10진수 66)이다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q5</span><br>
                            <span style="font-weight:600; line-height: 1.6;">M SB와 LSB가 무엇의 약자인지 쓰고, 8비트 이진수 10110100에서 M SB와 LSB 각각의 값을 쓰시오.</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">MSB는 Most Significant Bit이며 값은 1이다. LSB는 Least Significant Bit이며 값은 0이다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q6</span><br>
                            <span style="font-weight:600; line-height: 1.6;">ASCII 코드와 Unicode의 차이점을 설명하고, Unicode가 필요한 이유를 서술하시오.</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">ASCII 코드는 영문자와 기호 위주의 7~8비트 체계인 반면, Unicode는 전 세계의 모든 문자를 표현하기 위해 16비트 이상의 공간을 사용하는 표준 체계이다. 다국어 환경에서 발생하는 문자 깨짐 현상을 방지하고, 전 세계 언어를 통합된 규격으로 처리하기 위해 필요하다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q7</span><br>
                            <span style="font-weight:600; line-height: 1.6;">계층적 메모리 구조를 빠른 접근 속도 순으로 나열하고, 각 계층의 특징을 간단히 서술하시오.</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">레지스터 > 캐시 메모리 > 주기억장치(RAM) > 보조기억장치(HDD/SSD) 순이다. 상위 계층일수록 접근 속도가 빠르지만 용량이 작고 비싸다. 하위 계층으로 갈수록 속도는 느리지만 용량이 크고 저렴하며, 전원이 꺼져도 데이터가 유지(비휘발성)되는 특징을 가진다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q8</span><br>
                            <span style="font-weight:600; line-height: 1.6;">CPU 의 내부 구성 요소 3가지를 쓰고, 각각의 역할을 간단히 설명하시오.</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">산술논리연산장치(ALU)는 사칙연산과 논리연산을 수행한다. 제어장치(Control Unit)는 메모리에서 명령어를 가져와 해석하고 제어 신호를 보낸다. 레지스터(Register)는 처리 중인 데이터나 메모리 주소를 임시로 저장한다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q9</span><br>
                            <span style="font-weight:600; line-height: 1.6;">HDD와 SSD를 데이터 입출력 속도, 비트당 가격, 내구성 관점에서 비교하시오.</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">HDD가 SSD보다 비트당 가격이 저렴하지만, 데이터 입출력 속도는 SSD가 훨씬 빠르며 내구성은 물리적 부품이 없는 SSD가 뛰어나다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q10</span><br>
                            <span style="font-weight:600; line-height: 1.6;">컴퓨터 하드웨어를 기능별로 대분류하면 어떤 장치들로 구분되는가? 각 장치에 해당하는 예시를 1개씩 쓰시오.</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">입력장치(키보드), 처리장치(CPU), 주기억장치(RAM), 보조기억장치(HDD/SSD), 출력장치(모니터)로 구분된다.</p>
                        </div>
                    </div>
                `
            },
            {
                subTitle: "B. 컴퓨터 소프트웨어와 운영체제 (Q11~Q18)",
                content: `

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q11</span><br>
                            <span style="font-weight:600; line-height: 1.6;">시스템 소프트웨어와 응용 소프트웨어의 차이를 설명하고, 각각 2가지씩 예시를 드시오.</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">시스템 소프트웨어(예: 운영체제, 컴파일러)는 하드웨어를 제어하고 실행 환경을 제공하며, 응용 소프트웨어(예: 웹 브라우저, 워드 프로세서)는 사용자의 특정 목적을 달성하기 위해 사용된다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q12</span><br>
                            <span style="font-weight:600; line-height: 1.6;">운영체제의 4가지 주요 역할(자원 관리)을 쓰시오.</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">프로세스 관리, 메모리 관리, 파일 관리, 입출력 장치 관리이다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q13</span><br>
                            <span style="font-weight:600; line-height: 1.6;">프로그램(program)과 프로세스(process)의 차이를 CPU 및 메모리의 관점에서 서술하시오.</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">프로그램은 보조기억장치에 저장된 정적인 명령어의 집합이며, 프로세스는 프로그램이 메모리에 적재되어 CPU를 할당받아 실행 중인 동적인 상태를 의미한다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q14</span><br>
                            <span style="font-weight:600; line-height: 1.6;">커널(kernel)이란 무엇인지 설명하고, 시스템 콜(system call)의 역할을 서술하시오.</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">커널은 하드웨어 제어, 메모리 및 프로세스 관리 등 운영체제의 핵심 기능을 수행하며 메모리에 상주하는 부분이다. 시스템 콜은 응용 프로그램이 커널의 권한이 필요한 서비스를 요청하기 위한 인터페이스이다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q15</span><br>
                            <span style="font-weight:600; line-height: 1.6;">컴파일러와 인터프리터의 차이점을 설명하고, 각 방식의 장점을 1가지씩 서술하시오. 또한 각 방식을 대표하는 프<br>로그래밍 언어를 2개씩 쓰시오.</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">컴파일러(예: C, C++)는 전체 코드를 기계어로 번역하여 실행 파일을 만들며 실행 속도가 빠르다. 인터프리터(예: Python, JavaScript)는 코드를 한 줄씩 해석하여 즉시 실행하므로 디버깅이 쉽다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q16</span><br>
                            <span style="font-weight:600; line-height: 1.6;">아래 두 코드는 동일한 에러(변수  n 이  정의되지  않음)를 발생시킨다. 실행 결과가 다른 이유를 컴파일러/인터프<br>리터 관점에서 설명하시오.<br># Python<br>print("hello")<br>print(n)<br>실행  결과 : hello 출력  후  NameError 발생<br>// C<br>#include &lt;stdio.h&gt;<br>int main() {<br>printf("hello\n");<br>printf(n);<br>}<br>실행  결과 : 컴파일  에러  발생 , 실행  파일  생성  안  됨</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">파이썬(인터프리터)은 한 줄씩 실행하므로 첫 줄은 정상 출력되나 두 번째 줄에서 에러가 발생한다. C(컴파일러)는 전체를 미리 번역하므로 정의되지 않은 변수를 사전에 발견하여 컴파일 에러를 발생시킨다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q17</span><br>
                            <span style="font-weight:600; line-height: 1.6;">디버거(debugger)란 무엇인지 설명하시오.</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">소스 코드를 한 줄씩 실행하거나 중단점을 설정하여 내부 변숫값을 확인하고 버그를 찾아 수정할 수 있도록 돕는 도구이다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q18</span><br>
                            <span style="font-weight:600; line-height: 1.6;">장치 관리자(device driver)란 무엇이며, 운영체제와 어떤 관계에 있는지 설명하시오.</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">운영체제가 특정 하드웨어 장치를 제어하고 정상적으로 통신할 수 있도록 구체적인 동작 방식을 운영체제에 알려주는 소프트웨어이다.</p>
                        </div>
                    </div>
                `
            },
            {
                subTitle: "C. 컴퓨터 네트워크와 인터넷 (Q19~Q26)",
                content: `

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q19</span><br>
                            <span style="font-weight:600; line-height: 1.6;">아날로그 통신 대비 디지털 통신의 장점 3가지를 서술하시오.</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">잡음이나 신호 왜곡에 강해 신뢰성이 높고, 데이터의 압축 및 암호화가 쉬우며, 다른 디지털 장비와의 호환성이 뛰어나다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q20</span><br>
                            <span style="font-weight:600; line-height: 1.6;">직렬 전송과 병렬 전송을 비교 설명하시오.</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">직렬 전송은 하나의 통신선으로 데이터를 1비트씩 전송(장거리 유리)하며, 병렬 전송은 여러 통신선으로 여러 비트를 동시에 전송(단거리 유리, 속도 빠름)한다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q21</span><br>
                            <span style="font-weight:600; line-height: 1.6;">단방향(simplex), 반이중(half duplex), 전이중(full duplex) 전송의 차이를 설명하고, 각각의 예시를 1개씩 드시<br>오.</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">단방향은 한쪽으로만 전송(예: TV)하고, 반이중은 양방향은 가능하나 동시에는 불가하며(예: 무전기), 전이중은 동시에 양방향 전송이 가능하다(예: 전화기).</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q22</span><br>
                            <span style="font-weight:600; line-height: 1.6;">OSI 7계층 모델의 각 계층 이름을 순서대로(1~7계층) 쓰고, 네트워크 계층과 전송 계층의 역할을 각각 한 줄로 설<br>명하시오.</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">물리 - 데이터링크 - 네트워크 - 전송 - 세션 - 표현 - 응용 계층 순이다. 네트워크 계층은 최적의 경로를 설정(라우팅)하고, 전송 계층은 양 종단 간의 신뢰성 있는 데이터 전송을 보장한다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q23</span><br>
                            <span style="font-weight:600; line-height: 1.6;">IP 주소의 클래스(A~E)를 설명하고, 216.58.197.100은 어느 클래스에 속하는지 답하시오.</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">첫 번째 옥텟이 216이므로 소규모 네트워크에 할당되는 C 클래스에 속한다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q24</span><br>
                            <span style="font-weight:600; line-height: 1.6;">IPv4와 IPv6의 차이를 비트 수 관점에서 설명하고, IP 주소 부족 문제의 해결 방안 2가지를 쓰시오.</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">IPv4는 32비트, IPv6는 128비트 주소 체계이다. 주소 부족 문제는 IPv6 전환과 NAT(네트워크 주소 변환) 기술 활용으로 해결할 수 있다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q25</span><br>
                            <span style="font-weight:600; line-height: 1.6;">Private IP와 Public IP의 차이를 설명하고, NAT(Network Address Translation)의 역할을 서술하시오.</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">Private IP는 내부 네트워크에서만 사용되며 인터넷에 직접 연결할 수 없고, Public IP는 인터넷에서 유일하게 식별되어 직접 통신 가능한 주소이다. NAT는 내부망의 사설 IP를 외부망과 통신 가능한 공인 IP로 변환해 준다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q26</span><br>
                            <span style="font-weight:600; line-height: 1.6;">프로토콜(protocol)이란 무엇이며, 왜 계층 구조로 설계하는지 설명하시오.</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">프로토콜은 컴퓨터 간 통신을 위해 정해 놓은 규약이다. 통신 과정을 역할별로 나누어 각 계층이 독립적으로 작동하게 함으로써 시스템의 유지보수, 표준화, 확장을 쉽게 하기 위해 계층 구조로 설계한다.</p>
                        </div>
                    </div>
                `
            },
            {
                subTitle: "D. 계산적 사고와 알고리즘 (Q27~Q32)",
                content: `

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q27</span><br>
                            <span style="font-weight:600; line-height: 1.6;">알고리즘이 만족해야 할 5가지 조건의 이름과 의미를 각각 쓰시오.</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">입력(외부 자료 0개 이상), 출력(결과 1개 이상), 명확성(명령이 모호하지 않음), 유한성(반드시 종료됨), 유효성(실행 가능해야 함)이다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q28</span><br>
                            <span style="font-weight:600; line-height: 1.6;">아래 정렬된 배열에서 이진 탐색(binary search)으로 원소 51을 찾을 때, 각 탐색 단계에서 비교하는 원소와 탐색<br>범위를 보이시오.<br>[2, 9, 11, 15, 28, 33, 40, 47, 51, 64, 76, 77, 82, 85, 94]</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">1단계: 인덱스 0~14(중간값 47, 작으므로 오른쪽 좁힘), 2단계: 인덱스 8~14(중간값 77, 크므로 왼쪽 좁힘), 3단계: 인덱스 8~10(중간값 64, 크므로 왼쪽 좁힘), 4단계: 인덱스 8(중간값 51, 일치하여 성공)이다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q29</span><br>
                            <span style="font-weight:600; line-height: 1.6;">선택 정렬(selection sort)의 동작 원리를 설명하고, n개의 원소를 정렬할 때의 시간 복잡도를 빅오(Big-O) 표기<br>법으로 쓰시오.</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">정렬되지 않은 원소 중 최솟값을 찾아 첫 번째 원소와 교환하는 과정을 반복한다. 시간 복잡도는 $O(n^2)$이다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q30</span><br>
                            <span style="font-weight:600; line-height: 1.6;">이진 탐색(binary search)의 시간 복잡도와 공간 복잡도를 각각 쓰시오. 이진 탐색이 가능하려면 데이터가 어떤<br>조건을 만족해야 하는가?</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">시간 복잡도는 O(logn), 공간 복잡도는 $O(1)$이다. 데이터가 미리 오름차순이나 내림차순으로 정렬되어 있어야 한다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q31</span><br>
                            <span style="font-weight:600; line-height: 1.6;">길이가 100이고 오름차순으로 정렬된 배열에서 이진 탐색을 수행할 때, 최악의 경우 최대 몇 번의 비교가 필요한<br>가? 풀이 과정을 함께 쓰시오.</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">매번 탐색 범위가 절반으로 줄어들므로 $\log_2(100)$을 올림한 값인 최대 7번의 비교가 필요하다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q32</span><br>
                            <span style="font-weight:600; line-height: 1.6;">외판원 문제(TSP; Traveling Salesperson Problem)란 무엇인지 설명하고, 이 문제가 왜 "매우 어렵다"고 하는지<br>그 이유를 서술하시오.</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">세일즈맨이 모든 도시를 방문하고 출발지로 돌아오는 최단 경로를 찾는 문제이다. 도시가 늘어날수록 경우의 수가 팩토리얼(n!) 형태로 폭발적으로 증가하여 다항 시간 내에 최적해를 구하기가 매우 어렵다.</p>
                        </div>
                    </div>
                `
            },
            {
                subTitle: "E. 프로그래밍 언어와 프로그램 (Q33~Q38)",
                content: `

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q33</span><br>
                            <span style="font-weight:600; line-height: 1.6;">프로그래밍 패러다임 3가지(절차형, 함수형, 객체지향)를 각각 한 줄로 설명하고, 대표 언어를 1개씩 쓰시오.</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">절차형은 명령어의 순차적 실행 중심(C언어), 객체지향은 데이터와 메서드를 객체로 묶어 상호작용하게 함(Java, Python), 함수형은 수학적 함수 계산 중심(LISP)으로 동작한다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q34</span><br>
                            <span style="font-weight:600; line-height: 1.6;">변수(variable)와 상수(constant)의 차이를 설명하시오.</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">변수는 실행 중 값을 변경할 수 있는 메모리 공간이고, 상수는 한 번 할당되면 값이 변경되지 않는 메모리 공간이다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q35</span><br>
                            <span style="font-weight:600; line-height: 1.6;">아래 Python 코드의 실행 결과를 쓰시오.<br>balance = 1000<br>year = 0<br>while balance < 2000:<br>year += 1<br>interest = balance * 0.05<br>balance += interest<br>print(" 기간 : %d 년 " % year)<br>print(" 총액 : %d 원 " % balance)</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">기간: 15 년 / 총액: 2078 원이다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q36</span><br>
                            <span style="font-weight:600; line-height: 1.6;">조건문과 반복문을 사용하여 1부터 100까지 자연수 중 홀수의 합과 짝수의 합을 각각 구하는 pseudocode를 작<br>성하시오.</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">sum_odd = 0<br>sum_even = 0<br>for i from 1 to 100:<br>&nbsp;&nbsp;&nbsp;&nbsp;if i % 2 == 1:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum_odd = sum_odd + i<br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum_even = sum_even + i<br>print "홀수의 합: ", sum_odd<br>print "짝수의 합: ", sum_even</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q37</span><br>
                            <span style="font-weight:600; line-height: 1.6;">함수(function)란 무엇인지 설명하고, 함수를 사용하는 장점을 2가지 서술하시오.</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">특정 작업을 수행하도록 독립적으로 설계된 코드 블록이다. 코드를 재사용할 수 있고, 프로그램의 가독성과 유지보수성이 향상된다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q38</span><br>
                            <span style="font-weight:600; line-height: 1.6;">아래 Python 코드의 실행 결과를 쓰시오.<br>string = "Kookmin University"<br>vowels = "aeiouAEIOU"<br>cnt_v = 0<br>cnt_c = 0<br>for ch in string:<br>if ch in vowels:<br>cnt_v += 1<br>elif ch.isalpha():<br>cnt_c += 1<br>print(cnt_v, cnt_c)</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">7 10 이다.</p>
                        </div>
                    </div>
                `
            },
            {
                subTitle: "F. 가상화와 클라우드 컴퓨팅 (Q39~Q44)",
                content: `

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q39</span><br>
                            <span style="font-weight:600; line-height: 1.6;">추상화(abstraction)란 무엇인지 설명하고, 운영체제가 제공하는 추상화의 예를 2가지 드시오.</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">복잡한 내부 구현을 숨기고 핵심적인 개념만 단순화하여 제공하는 것이다. 운영체제는 하드디스크를 '파일(File)'로, 메모리를 '주소 공간(Address Space)'으로 추상화한다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q40</span><br>
                            <span style="font-weight:600; line-height: 1.6;">하이퍼바이저 Type-1과 Type-2의 차이를 그림 또는 글로 설명하시오.</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">Type-1(네이티브)은 컴퓨터 하드웨어 바로 위에서 실행되어 성능이 우수하고, Type-2(호스트형)는 기존 운영체제 위에서 응용 프로그램처럼 실행된다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q41</span><br>
                            <span style="font-weight:600; line-height: 1.6;">전가상화(Full Virtualization)와 반가상화(Para Virtualization)의 차이를 설명하시오.</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">전가상화는 게스트 운영체제 수정 없이 가상화하며 오버헤드가 발생한다. 반가상화는 게스트 운영체제 커널을 일부 수정해 하이퍼바이저와 직접 통신하게 하여 성능을 향상시킨다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q42</span><br>
                            <span style="font-weight:600; line-height: 1.6;">컨테이너(container) 기반 가상화의 특징을 하이퍼바이저 기반 가상화와 비교하여 설명하시오. Docker의 역할<br>도 함께 서술하시오.</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">컨테이너는 호스트 운영체제의 커널을 공유하므로 하이퍼바이저 방식보다 훨씬 가볍고 빠르다. Docker는 이 컨테이너를 쉽게 생성, 배포, 관리해 주는 플랫폼이다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q43</span><br>
                            <span style="font-weight:600; line-height: 1.6;">클라우드 컴퓨팅의 3가지 서비스 모델(IaaS, PaaS, SaaS)을 각각 설명하고, 사용자의 관리 범위가 가장 넓은 모<br>델과 가장 좁은 모델을 지적하시오.</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">IaaS는 기본 인프라(서버 등)를, PaaS는 개발 및 실행 플랫폼을, SaaS는 완성된 응용 소프트웨어를 제공한다. 관리 범위가 가장 넓은 모델은 IaaS이고, 가장 좁은 모델은 SaaS이다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q44</span><br>
                            <span style="font-weight:600; line-height: 1.6;">프로세스 가상 기계(Process Virtual M achine)란 무엇인지 설명하고, 대표적인 예를 드시오.</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">특정 하드웨어나 플랫폼에 종속되지 않고 프로그램이 독립적으로 실행될 수 있도록 돕는 소프트웨어 환경이다. 대표적인 예로 JVM(Java Virtual Machine)이 있다.</p>
                        </div>
                    </div>
                `
            },
            {
                subTitle: "G. 리눅스와 셸 명령어 (Q45~Q50)",
                content: `

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q45</span><br>
                            <span style="font-weight:600; line-height: 1.6;">아래 각 셸 명령어의 기능을 한 줄로 설명하시오.<br>명령어 기능<br>(a) ls -al<br>(b) cd ..<br>(c) mkdir test<br>(d) rm -rf dir1<br>(e) cp -r src dst<br>(f) mv a.txt b.txt<br>(g) cat file.txt<br>(h) find . -name "*.txt"<br>(i) ps aux<br>(j) kill -9 1234<br>(k) tar -zcvf backup.tar.gz dir/<br>(l) df -h<br>(m ) du -sh dir/</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">(a) ls -al: 숨김 파일 포함 전체 상세 목록 출력 / (b) cd: 디렉토리 이동 / (c) mkdir test: 디렉토리 생성 / (d) rm -rf dir1: 디렉토리 강제 삭제 / (e) cp -r src dst: 디렉토리 복사 / (f) mv a.txt b.txt: 파일 이름 변경 및 이동 / (g) cat file.txt: 파일 내용 출력 / (h) find -name "*.txt": 파일 검색 / (i) ps aux: 전체 프로세스 상태 출력 / (j) kill -9 1234: 특정 프로세스 강제 종료 / (k) tar -zcvf: 파일 압축 / (l) df -h: 디스크 용량 확인 / (m) du -sh dir/: 디렉토리 사용 용량 확인이다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q46</span><br>
                            <span style="font-weight:600; line-height: 1.6;">리눅스 파일 접근 권한 -rwxr-x---를 chmod 숫자 표기법으로 변환하시오. 또한, 이 파일에 대해 others에<br>게 읽기/실행 권한을 추가하는 chmod 명령어를 쓰시오.</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">숫자 표기법으로 변환하면 740이다. others에 읽기/실행 권한을 추가하는 명령어는 chmod o+rx 파일명 (또는 chmod 745 파일명)이다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q47</span><br>
                            <span style="font-weight:600; line-height: 1.6;">아래 각 상황에 맞는 셸 명령어를 작성하시오.<br>(a) 현재 디렉토리에서 test로 시작하는 모든 파일 삭제<br>(b) data.txt 파일의 내용을 result.txt에 복사하면서 동시에 화면에도 출력<br>(c) 현재 실행 중인 프로세스 중 python 관련 프로세스만 출력<br>(d) /home/user/docs 디렉토리 전체를 docs_backup.tar.gz로 압축<br>(e) experiment.txt 파일을 gzip으로 압축한 후 다시 해제</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">(a) rm test* (b) cat data.txt | tee result.txt (c) ps aux | grep python (d) tar -zcvf docs_backup.tar.gz /home/user/docs (e) gzip experiment.txt (해제 시 gunzip experiment.txt.gz)이다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q48</span><br>
                            <span style="font-weight:600; line-height: 1.6;">리눅스 디렉토리 구조에서 아래 각 디렉토리의 역할을 한 줄로 설명하시오.<br>/bin, /dev, /etc, /home, /tmp, /usr, /var</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">/bin은 기본 실행 파일, /dev는 장치 파일, /etc는 시스템 환경 설정 파일, /home은 일반 사용자 홈 디렉토리, /tmp는 임시 파일, /usr은 응용 프로그램 및 라이브러리, /var는 가변적인 데이터(로그 등)가 저장되는 곳이다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q49</span><br>
                            <span style="font-weight:600; line-height: 1.6;">심볼릭 링크(symbolic link)와 하드 링크(hard link)의 차이를 inode 관점에서 설명하시오. 심볼릭 링크를 생성<br>하는 명령어도 쓰시오.</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">하드 링크는 원본 파일과 동일한 inode를 가리켜 데이터를 직접 공유하고, 심볼릭 링크는 독립적인 inode를 가지며 원본의 경로 정보만 저장한다. 생성 명령어는 ln -s [원본파일] [링크이름]이다.</p>
                        </div>
                    </div>

                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">Q50</span><br>
                            <span style="font-weight:600; line-height: 1.6;">표준 입력(stdin), 표준 출력(stdout), 표준 에러(stderr)가 무엇인지 설명하시오. 또한 리디렉션(&lt;, &gt;)과 파이<br>프라인(|)의 차이를 설명하고, 아래 명령어의 의미를 해석하시오.<br>sort &lt; input.txt | head -5 &gt; top5.txt</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">표준 입력(stdin)은 데이터가 들어오는 통로, 표준 출력(stdout)은 실행 결과가 나가는 통로, 표준 에러(stderr)는 오류 메시지가 나가는 통로이다. 리다이렉션(&lt;, &gt;)은 입출력 방향을 파일로 돌리고, 파이프라인(|)은 앞 명령의 출력을 뒤 명령의 입력으로 연결한다. 주어진 명령어는 input.txt를 읽어 정렬한 뒤 그중 위에서 5줄만 추출하여 top5.txt 파일에 저장하라는 의미이다</p>
                        </div>
                    </div>
                `
            }
        ]
    }
];
