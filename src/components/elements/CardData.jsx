
import styled from 'styled-components'

const CardData = styled.div`
  grid-column: 2/-1;
  
  h3 {
    font-size: var(--fz-md);
    color: var(--white);

    a { 
      position: unset;
     };

    svg { 
      margin-left: 0px;
      transition: transform 150ms var(--easing) !important;
    };
  }

  p {
    font-size: var(--fz-sm);
    color: var(--slate);
    line-height: 21px;
  }
`

export default CardData