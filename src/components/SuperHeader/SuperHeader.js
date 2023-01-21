import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import SearchInput from '../SearchInput';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <SearchInput />
      <HelpLink href="/help">Help</HelpLink>
      <UnstyledButtonSuperHeader>
        <Icon id="shopping-bag" strokeWidth={1} />
      </UnstyledButtonSuperHeader>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 24px;
  font-size: 0.875rem;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
  padding: 10px 32px 6px 32px;
  line-height: 0px;
`;

const MarketingMessage = styled.span`
  flex: 1;
  color: ${COLORS.white};
  padding: 0px auto 0px 0px;
`;

const HelpLink = styled.a`
  flex: 0;
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

const UnstyledButtonSuperHeader = styled(UnstyledButton)`
  flex: 0;
  margin-top: -2px;
`

export default SuperHeader;
