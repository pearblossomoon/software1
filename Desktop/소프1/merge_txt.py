import os
txt_files = [f for f in os.listdir('.') if f.endswith('.txt')]
txt_files.sort()
with open('merged.txt', 'w', encoding='utf-8') as outfile:
    for f in txt_files:
        outfile.write(f"\n\n{'='*20}\nFILE: {f}\n{'='*20}\n\n")
        with open(f, 'r', encoding='utf-8') as infile:
            outfile.write(infile.read())
print("Merged into merged.txt")
