$content = Get-Content -Raw "c:\Users\BISHNU SAH\OneDrive\Desktop\sonder\src\pages\Progress_new.tsx" -Encoding UTF8
[System.IO.File]::WriteAllText("c:\Users\BISHNU SAH\OneDrive\Desktop\sonder\src\pages\Progress.tsx", $content, [System.Text.Encoding]::UTF8)
