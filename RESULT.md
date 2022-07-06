## Results:
*sorted by rerender time*

Solution | Use CSS | Use Inline-Styles | Mount Time (ms) | Rerender time (ms)
:--- | :--- | :--- | :--- | :---
[react (without styles)](https://github.com/facebook/react) | - | - | 23.37 | 32.95
[react-css](https://github.com/facebook/react) | + | + | 37.17 | 44.77
[react (with inline-styles)](https://github.com/facebook/react) | - | + | 35.26 | 52.31
[emotion-css-mode](https://github.com/emotion-js/emotion) | + | + | 51.89 | 56.1
[emotion-inline-css](https://github.com/emotion-js/emotion) | - | + | 84.79 | 81.67
[emotion-simple](https://github.com/emotion-js/emotion) | + | - | 91.46 | 87.11
[emotion-decouple](https://github.com/emotion-js/emotion) | + | - | 97.79 | 89.98
[emotion-use-style](https://github.com/emotion-js/emotion) | + | + | 148.34 | 121.14
[emotion-use-style-memo](https://github.com/emotion-js/emotion) | + | + | 188.63 | 170.86
