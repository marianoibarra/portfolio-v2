import { css } from 'styled-components';

const variables = css`
  :root {
    --dark-navy: #020c1b;
    --navy: #0f172a;
    --light-navy: #112240;
    --lightest-navy: #233554;
    --navy-shadow: rgba(2, 12, 27, 0.7);
    --dark-slate: #64748b;
    --darkest-slate: #172539;
    --slate: #94a3b8;
    --light-slate: #a8b2d1;
    --lightest-slate: #ccd6f6;
    --img-border: 2px solid rgba(226,232,240,.1);
    --img-border-hover: 2px solid rgba(226,232,240,.5);
    --white: #e2e8f0;
    --green: #64ffda;
    --green-tint: rgba(100, 255, 218, 0.1);
    --pink: #f57dff;
    --blue: #57cbff;

    --font-sans: 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 20px;
    --fz-xl: 24px;
    --fz-xxl: 28px;

    --fz-heading1: clamp(48px, 3vw, 64px);
    --fz-heading2: clamp(24px, 1.5vw, 32px);

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --title-blur: blur(8px);
    --title-bg: rgba(15,23,42,.75);

    --tab-height: 42px;
    --tab-width: 120px;

    --max-width: 1280px;
    --body-padding: 96px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

export default variables;
