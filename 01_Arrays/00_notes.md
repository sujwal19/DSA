### 🧠 The Real Mental Model

Sliding Window:
“I have a window. If it breaks → fix it.”
Same Direction Two Pointers:
“I just need two positions moving forward for efficiency.”

- 🔥 Ultra Short Summary:
  All sliding windows = two pointers
  Not all two pointers = sliding window

## ⚙️ Types of Two Pointer Patterns

1. ➡️➡️ Same Direction (Sliding Window style)

- Used when:
  Subarrays / substrings
  Constraints (sum ≤ k, unique chars, etc.)

- 💡 Think:
  “Expand right → Fix with left”

2. ↔️ Opposite Direction (Classic two sum sorted)

- Used when:
  Array is sorted
  Looking for pairs

- 💡 Think:
  “Too big → move right pointer left
  Too small → move left pointer right”

3. 🐢🐇 Fast & Slow (Cycle detection)

- Used in:
  Linked lists
  Cycle detection
  Middle element

- 💡 Think:
  Fast moves 2x → catches slow if cycle exists

4. 🧹 Partitioning (In-place rearranging)

- Used in:
  Move zeros
  Dutch flag
  Partition arrays

//////////////////////////////////////////////////

#### Use SAME DIRECTION when:

✔ Modify array in-place
✔ Keep/remove elements
✔ Maintain relative order
✔ No subarray condition
