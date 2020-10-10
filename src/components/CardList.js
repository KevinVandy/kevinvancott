import React from 'react';
import { styled, Typography, Card } from '@material-ui/core';

const CardListSection = styled('section')({
  display: 'flex',
  padding: '3rem',
  overflowX: 'auto'
});

const StyledCard = ({ length, zIndex, ...rest }) => {
  const StyledCardRaw = styled(Card)({
    width: `${1600 / length}px`,
    height: '300px',
    zIndex: zIndex
  });
  return <StyledCardRaw {...rest} />;
};

const ImageContainer = styled('div')({
  width: '100%',
  overflow: 'hidden',
  marginTop: '3rem'
});

export const CardList = ({ data }) => {
  return (
    <CardListSection className="card-list">
      {data.map((d, i) => (
        <StyledCard
          className="card"
          key={i}
          length={data.length}
          zIndex={data.length + 1 - i}
        >
          <Typography style={{ margin: '1rem' }} variant="h4">
            {d.name}
          </Typography>
          <ImageContainer>
            <img style={{ width: '100%' }} src={d.image} alt={d.name} loading="lazy" />
          </ImageContainer>
        </StyledCard>
      ))}
    </CardListSection>
  );
};
