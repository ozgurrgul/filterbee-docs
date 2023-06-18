import React from 'react';

type DemoPreviewerProps = {
  children: any;
  json?: Record<string, any>;
};

export const DemoPreviewer: React.FC<DemoPreviewerProps> = ({
  children,
  json,
}) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr' }}>
      {children}
      <code style={{ padding: 8, fontSize: 13 }}>
        {json && JSON.stringify(json, null, 4)}
      </code>
    </div>
  );
};
