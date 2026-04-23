import os

txt_files = [f for f in os.listdir('.') if f.endswith('.txt')]
txt_files.sort()

for f in txt_files:
    print(f"=== {f} ===")
    try:
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
            # print first 300 characters
            print(content[:300].replace('\n', ' '))
    except Exception as e:
        print("Error:", e)
    print()
