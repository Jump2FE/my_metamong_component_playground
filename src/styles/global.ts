import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { Color } from './varialbes.style';

const GlobalStyle = createGlobalStyle`
    ${normalize}
    body {
        background: ${Color.backgroundGrey50};
    }
`;

export default GlobalStyle;
