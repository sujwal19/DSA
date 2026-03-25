🧠 Core Mindset for String Problems

Almost every string problem reduces to one of these transformations:

Compare characters
Track frequency
Scan with pointers
Match patterns
Transform substring

If you can identify which category you're in within 30–60 seconds, you're already ahead.

🧠 1. Core Patterns You MUST Recognize **\*\*\*\***\*\*\***\*\*\*\***

🔹 1. Sliding Window (MOST IMPORTANT)

Use when:
substring / subarray
"longest", "smallest", "count of valid substrings"

Signals:
contiguous segment
constraints like "at most k", "no duplicates"

🔹 2. Two Pointers

Use when:

palindrome
reverse
sorted or symmetric structure

Signals:
"check if palindrome"
"compare from both ends"

🔹 3. HashMap / Frequency Count

Use when:
anagram
frequency comparison
counting characters

🔹 5. Stack (for structure problems)

Use when:
parentheses
nested patterns

🔹 6. KMP / Pattern Matching (Advanced)

Use when:
searching substring efficiently
repeated pattern detection

////////////////////////

🔹 Convert char → number
ch.charCodeAt(0) - 97

// Fast & Slow
“in-place” + “remove duplicates”
"modify array/string in-place"

size fixed → Fixed Window
size dynamic → Sliding Window
