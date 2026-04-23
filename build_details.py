import os
import json

txt_files = [f for f in os.listdir('.') if f.endswith('.txt')]
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
            content = file.read()
            details[js_id] = content.strip()
    except Exception as e:
        print("Error reading", f)

with open('detail_data.js', 'w', encoding='utf-8') as out:
    out.write("const detailsData = " + json.dumps(details, ensure_ascii=False, indent=4) + ";\n")

print("Generated detail_data.js")
