import os
from pypdf import PdfReader

pdf_files = [f for f in os.listdir('.') if f.endswith('.pdf')]
pdf_files.sort()

for pdf_file in pdf_files:
    try:
        reader = PdfReader(pdf_file)
        text = ""
        for page in reader.pages:
            extracted = page.extract_text()
            if extracted:
                text += extracted + "\n"
        
        out_name = pdf_file.replace('.pdf', '.txt')
        with open(out_name, 'w', encoding='utf-8') as f:
            f.write(text)
        print(f"Extracted {pdf_file} -> {out_name} (Length: {len(text)})")
    except Exception as e:
        print(f"Failed {pdf_file}: {e}")
