import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components/primitives';
import { position, shadow } from '../../styles';
import { Centered } from '../layout';
import { ShadowStack } from '../shadow-stack';
import UniqueTokenImage from './UniqueTokenImage';

const UniqueTokenCardBorderRadius = 16;

const Container = styled(Centered)`
  ${position.cover}
  border-radius: ${UniqueTokenCardBorderRadius};
  background-color: ${({ background }) => background};
`;

const InnerBorder = styled.View`
  ${position.cover}
  border-color: ${shadow.color}
  border-radius: ${UniqueTokenCardBorderRadius};
  border-width: 0.68;
`;

const UniqueTokenCard = ({ item: { background, imagePreviewUrl, ...item }, size, ...props }) => (
  <ShadowStack
    {...props}
    {...position.sizeAsObject(size)}
    borderRadius={UniqueTokenCardBorderRadius}
    shadows={[
      shadow.buildString(0, 3, 5, 'rgba(0,0,0,0.1)'),
      shadow.buildString(0, 6, 10, 'rgba(0,0,0,0.1)'),
    ]}
  >
    <Container background={background}>
      <UniqueTokenImage
        imageUrl={imagePreviewUrl}
        item={item}
        size={size}
      />
      <InnerBorder />
    </Container>
  </ShadowStack>
);

UniqueTokenCard.propTypes = {
  item: PropTypes.shape({
    background: PropTypes.string,
    imagePreviewUrl: PropTypes.string,
  }),
  size: PropTypes.number,
};

export default UniqueTokenCard;
