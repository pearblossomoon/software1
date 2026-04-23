import re

with open('hw_questions.txt', 'r', encoding='utf-8') as f:
    q_text = f.read()
with open('hw_answers.txt', 'r', encoding='utf-8') as f:
    a_text = f.read()

# Extract questions
qs = {}
matches = re.split(r'(Q\d+\.)', q_text)
for i in range(1, len(matches), 2):
    q_num = matches[i].strip('.')
    q_content = matches[i+1].strip()
    
    # clean up garbage lines
    lines = q_content.split('\n')
    clean_lines = []
    for line in lines:
        s = line.strip()
        if re.match(r'^[A-G]\.\s', s): continue
        if s in ['1/6', '2/6', '3/6', '4/6', '5/6', '6/6', '']: continue
        if 'ࣻ' in s or '੗' in s or '೐' in s or 'ઁ' in s: continue
        clean_lines.append(s)
    qs[q_num] = '<br>'.join(clean_lines)

# Extract answers
ans = {}
matches_a = re.split(r'(Q\d+\.)', a_text)
for i in range(1, len(matches_a), 2):
    q_num = matches_a[i].strip('.')
    a_content = matches_a[i+1].strip()
    
    lines = a_content.split('\n')
    clean_lines = []
    for line in lines:
        s = line.strip()
        if re.match(r'^[A-G]\.\s', s): continue
        if s == 'Plaintext': continue
        if s == '': continue
        clean_lines.append(line.replace('    ', '&nbsp;&nbsp;&nbsp;&nbsp;'))
    ans[q_num] = '<br>'.join(clean_lines)

groups = [
    ("A. 하드웨어와 데이터 표현 (Q1~Q10)", 1, 10),
    ("B. 컴퓨터 소프트웨어와 운영체제 (Q11~Q18)", 11, 18),
    ("C. 컴퓨터 네트워크와 인터넷 (Q19~Q26)", 19, 26),
    ("D. 계산적 사고와 알고리즘 (Q27~Q32)", 27, 32),
    ("E. 프로그래밍 언어와 프로그램 (Q33~Q38)", 33, 38),
    ("F. 가상화와 클라우드 컴퓨팅 (Q39~Q44)", 39, 44),
    ("G. 리눅스와 셸 명령어 (Q45~Q50)", 45, 50)
]

output = """
    ,{
        id: "hw1", emoji: "📚", title: "숙제 1 완벽 대비 Q&A", color: "#f43f5e",
        subs: [
"""
for group_title, start_q, end_q in groups:
    output += f'            {{\n                subTitle: "{group_title}",\n                content: `\n'
    for i in range(start_q, end_q + 1):
        q_id = f'Q{i}'
        q_str = qs.get(q_id, f"Question {i} missing").replace('`', '\\`')
        a_str = ans.get(q_id, "Answer missing").replace('`', '\\`')
        
        output += f'''
                    <div class="tf-item">
                        <div class="tf-q" style="flex: 1.2;">
                            <span class="tf-mark short" style="color:#f43f5e;">{q_id}</span><br>
                            <span style="font-weight:600; line-height: 1.6;">{q_str}</span>
                        </div>
                        <div class="tf-a" style="flex: 1.8; background: #fff1f2; border: 1px solid #fecdd3; padding: 1.2rem;">
                            <strong style="color: #e11d48; display:block; margin-bottom: 8px;">정답 확인:</strong>
                            <p style="margin:0; color:#27272a; line-height: 1.6;">{a_str}</p>
                        </div>
                    </div>
'''
    output += '                `\n            }'
    if start_q != 45:
        output += ','
    output += '\n'

output += """        ]
    }
"""

with open('detail_data.js', 'r', encoding='utf-8') as f:
    orig = f.read()

# Replace trailing "];" with the new output + "];"
orig_trim = orig.rstrip()
if orig_trim.endswith('];'):
    new_doc = orig_trim[:-2] + output + "];\n"
else:
    print("Could not find trailing ];")
    new_doc = orig + output + "];\n"

with open('detail_data.js', 'w', encoding='utf-8') as f:
    f.write(new_doc)
print("Successfully generated and updated detail_data.js!")
