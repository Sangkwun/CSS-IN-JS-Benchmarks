## Results:
*sorted by rerender time*

Solution | Use CSS | Use Inline-Styles | Mount Time (ms) | Rerender time (ms)
:--- | :--- | :--- | :--- | :---
[react (without styles)](https://github.com/facebook/react) | - | - | 23.92 | 33.38
[react (with inline-styles)](https://github.com/facebook/react) | - | + | 31.6 | 46.97
[react-css](https://github.com/facebook/react) | + | + | 32.33 | 52.64
[tailwind (pure)](https://tailwindui.com/) | - | - | 29.21 | 55.76
[emotion-css-mode](https://github.com/emotion-js/emotion) | + | + | 54.06 | 58.03
[emotion-inline-css](https://github.com/emotion-js/emotion) | - | + | 87.03 | 84.12
[emotion-simple](https://github.com/emotion-js/emotion) | + | - | 99.36 | 92.99
[emotion-decouple](https://github.com/emotion-js/emotion) | + | - | 96.87 | 93.11
[emotion-use-style](https://github.com/emotion-js/emotion) | + | + | 150.92 | 123.95
[emotion-use-style-memo](https://github.com/emotion-js/emotion) | + | + | 194.84 | 165.6
