import os
import json

txt_files = [f for f in os.listdir('.') if f.endswith('.txt')]
txt_files.sort()
details = {}

for f in txt_files:
    parts = f.split(' ')
    prefix = parts[0]
    
    if prefix.startswith('0'):
        js_id = prefix[1:]
    else:
        js_id = prefix

    try:
        with open(f, 'r', encoding='utf-8') as file:
            lines = file.readlines()
            
            html_content = f"<h3>{f.replace('.txt', '')} (전체 교안 전문)</h3><hr><div style='line-height: 1.8; word-break: keep-all;'>"
            
            in_list = False
            for line in lines:
                line = line.strip()
                if not line:
                    html_content += "<br>"
                    if in_list:
                        html_content += "</ul>"
                        in_list = False
                elif line.startswith('•') or line.startswith('-') or line.startswith('o '):
                    if not in_list:
                        html_content += "<ul style='margin-left: 20px;'>"
                        in_list = True
                    html_content += f"<li>{line}</li>"
                elif line.endswith('?') or line.endswith('!'):
                    if in_list:
                        html_content += "</ul>"
                        in_list = False
                    html_content += f"<h4 style='color: #60a5fa; margin-top: 15px;'>{line}</h4>"
                else:
                    if in_list:
                        html_content += "</ul>"
                        in_list = False
                    html_content += f"<p>{line}</p>"
                    
            if in_list:
                html_content += "</ul>"
                
            html_content += "</div>"
            details[js_id] = html_content
            
    except Exception as e:
        print("Error reading", f)

with open('detail_data.js', 'w', encoding='utf-8') as out:
    out.write("const detailsData = " + json.dumps(details, ensure_ascii=False, indent=4) + ";\n")

print("Generated detail_data.js with FULL content")
