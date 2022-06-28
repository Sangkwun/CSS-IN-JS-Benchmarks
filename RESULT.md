## Results:
*sorted by rerender time*

Solution | Use CSS | Use Inline-Styles | Mount Time (ms) | Rerender time (ms)
:--- | :--- | :--- | :--- | :---
[react (without styles)](https://github.com/facebook/react) | - | - | 22.66 | 31.81
[react-css](https://github.com/facebook/react) | + | + | 33.35 | 40.79
[react (with inline-styles)](https://github.com/facebook/react) | - | + | 31 | 46.45
[emotion-css-mode](https://github.com/emotion-js/emotion) | + | + | 51.17 | 57.22
[emotion-inline-css](https://github.com/emotion-js/emotion) | - | + | 83.34 | 78.68
[emotion-simple](https://github.com/emotion-js/emotion) | + | - | 90.78 | 83.76
[emotion-decouple](https://github.com/emotion-js/emotion) | + | - | 96.28 | 89.23
[emotion-over-bridge](https://github.com/emotion-js/emotion) | + | + | 141.45 | 121.18
[emotion-over-bridge-memo](https://github.com/emotion-js/emotion) | + | + | 175.66 | 156.13
