import React from 'react';
export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: 'red',
    },
};

export const ThemeContext = React.createContext(
    themes.dark // 默认值
);