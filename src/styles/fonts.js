import { css } from 'styled-components';

import InterRegularWoff from '@fonts/Inter/Inter-Regular.woff';
import InterRegularWoff2 from '@fonts/Inter/Inter-Regular.woff2';
import InterMediumWoff from '@fonts/Inter/Inter-Medium.woff';
import InterMediumWoff2 from '@fonts/Inter/Inter-Medium.woff2';
import InterSemiboldWoff from '@fonts/Inter/Inter-SemiBold.woff';
import InterSemiboldWoff2 from '@fonts/Inter/Inter-SemiBold.woff2';
import InterBoldWoff from '@fonts/Inter/Inter-Bold.woff';
import InterBoldWoff2 from '@fonts/Inter/Inter-Bold.woff2';

import InterRegularItalicWoff from '@fonts/Inter/Inter-Italic.woff';
import InterRegularItalicWoff2 from '@fonts/Inter/Inter-Italic.woff2';
import InterMediumItalicWoff from '@fonts/Inter/Inter-MediumItalic.woff';
import InterMediumItalicWoff2 from '@fonts/Inter/Inter-MediumItalic.woff2';
import InterSemiboldItalicWoff from '@fonts/Inter/Inter-SemiBoldItalic.woff';
import InterSemiboldItalicWoff2 from '@fonts/Inter/Inter-SemiBoldItalic.woff2';
import InterBoldItalicWoff from '@fonts/Inter/Inter-BoldItalic.woff';
import InterBoldItalicWoff2 from '@fonts/Inter/Inter-BoldItalic.woff2';

import SFMonoRegularWoff from '@fonts/SFMono/SFMono-Regular.woff';
import SFMonoRegularWoff2 from '@fonts/SFMono/SFMono-Regular.woff2';
import SFMonoSemiboldWoff from '@fonts/SFMono/SFMono-Semibold.woff';
import SFMonoSemiboldWoff2 from '@fonts/SFMono/SFMono-Semibold.woff2';

import SFMonoRegularItalicWoff from '@fonts/SFMono/SFMono-RegularItalic.woff';
import SFMonoRegularItalicWoff2 from '@fonts/SFMono/SFMono-RegularItalic.woff2';
import SFMonoSemiboldItalicWoff from '@fonts/SFMono/SFMono-SemiboldItalic.woff';
import SFMonoSemiboldItalicWoff2 from '@fonts/SFMono/SFMono-SemiboldItalic.woff2';


const interNormalWeights = {
  400: [InterRegularWoff, InterRegularWoff2],
  500: [InterMediumWoff, InterMediumWoff2],
  600: [InterSemiboldWoff, InterSemiboldWoff2],
  700: [InterBoldWoff, InterBoldWoff2],
};

const interItalicWeights = {
  400: [InterRegularItalicWoff, InterRegularItalicWoff2],
  500: [InterMediumItalicWoff, InterMediumItalicWoff2],
  600: [InterSemiboldItalicWoff, InterSemiboldItalicWoff2],
  700: [InterBoldItalicWoff, InterBoldItalicWoff2],
};

const sfMonoNormalWeights = {
  400: [SFMonoRegularWoff, SFMonoRegularWoff2],
  600: [SFMonoSemiboldWoff, SFMonoSemiboldWoff2],
};

const sfMonoItalicWeights = {
  400: [SFMonoRegularItalicWoff, SFMonoRegularItalicWoff2],
  600: [SFMonoSemiboldItalicWoff, SFMonoSemiboldItalicWoff2],
};

const inter = {
  name: 'Inter',
  normal: interNormalWeights,
  italic: interItalicWeights,
};

const sfMono = {
  name: 'SF Mono',
  normal: sfMonoNormalWeights,
  italic: sfMonoItalicWeights,
};

const createFontFaces = (family, style = 'normal') => {
  let styles = '';

  for (const [weight, formats] of Object.entries(family[style])) {
    const woff = formats[0];
    const woff2 = formats[1];

    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${woff2}) format('woff2'),
            url(${woff}) format('woff');
        font-weight: ${weight};
        font-style: ${style};
        font-display: swap;
      }
    `;
  }

  return styles;
};

const interNormal = createFontFaces(inter);
const interItalic = createFontFaces(inter, 'italic');

const sfMonoNormal = createFontFaces(sfMono);
const sfMonoItalic = createFontFaces(sfMono, 'italic');

const Fonts = css`
  ${sfMonoNormal + sfMonoItalic + interNormal + interItalic}
`;

export default Fonts;
