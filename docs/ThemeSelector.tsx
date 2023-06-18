import React, { useEffect, useState } from 'react';

export const ThemeSelector = () => {
  const [currentTheme, setCurrentTheme] = useState<string | undefined>(
    localStorage.getItem('theme') || undefined,
  );

  useEffect(() => {
    if (currentTheme) {
      document.body.setAttribute('data-theme', currentTheme);
      localStorage.setItem('theme', currentTheme);
    } else {
      document.body.removeAttribute('data-theme');
      localStorage.removeItem('theme');
    }
  }, [currentTheme]);

  const renderItem = (name: string, id?: string) => {
    return (
      <span
        onClick={() => setCurrentTheme(id)}
        style={{
          color: currentTheme === id ? 'black' : 'hsl(var(--muted-foreground))',
          marginRight: 24,
          cursor: 'pointer',
          fontSize: 17,
          fontWeight: '500',
        }}
      >
        {name}
      </span>
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        marginTop: 16,
        paddingTop: 8,
        paddingBottom: 8,
      }}
    >
      {renderItem('Black', undefined)}
      {renderItem('Blue', 'blue')}
      {renderItem('Pink', 'pink')}
    </div>
  );
};
