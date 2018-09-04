import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components/primitives';
import { compose } from 'recompact';
import { get } from 'lodash';
import { SectionList } from 'react-native';

import AssetListFooter from './AssetListFooter';
import AssetListHeader from './AssetListHeader';
import AssetListItem from './AssetListItem';
import AssetListSkeleton from './AssetListSkeleton';
import { colors, position } from '../../styles';
import { FabWrapper, FloatingActionButton } from '../fab';
import { withSafeAreaViewInsetValues } from '../../hoc';

const List = styled(SectionList)`
  ${position.size('100%')}
  background-color: ${colors.white};
`;

const assetListKeyExtractor = (item, index) => (
  get(item, Array.isArray(item) ? '[0].id' : 'symbol') + index
);

const buildListBottomPadding = (safeAreaInset) => {
  const fabSizeWithPadding = FloatingActionButton.size + (FabWrapper.bottomPosition * 2);
  return (safeAreaInset.bottom + fabSizeWithPadding) - AssetListFooter.height;
};

const AssetList = ({
  isEmpty,
  safeAreaInset,
  sections,
  hideHeader,
  hideFooter,
  ...props
}) => (isEmpty ? (
  <AssetListSkeleton />
) : (
  <List
    contentContainerStyle={{
      // We want to add enough spacing below the list so that when the user scrolls to the bottom,
      // the bottom of the list content lines up with the top of the FABs (+ padding).
      paddingBottom: buildListBottomPadding(safeAreaInset),
    }}
    keyExtractor={assetListKeyExtractor}
    renderItem={AssetListItem}
    renderSectionFooter={!hideFooter && AssetListFooter}
    renderSectionHeader={!hideHeader && (headerProps => <AssetListHeader {...headerProps} />)}
    scrollIndicatorInsets={{
      bottom: safeAreaInset.bottom,
      top: AssetListHeader.height,
    }}
    sections={sections}
  />
));

AssetList.propTypes = {
  isEmpty: PropTypes.bool,
  safeAreaInset: PropTypes.object,
  sections: PropTypes.arrayOf(PropTypes.object),
  hideFooter: PropTypes.bool,
  hideHeader: PropTypes.bool,
};

export default compose(withSafeAreaViewInsetValues)(AssetList);
