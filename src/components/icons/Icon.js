import PropTypes from 'prop-types';
import { createElement } from 'react';
import Flex from '../layout/Flex';

import ArrowIcon from './svg/ArrowIcon';
import AssetListItemSkeletonIcon from './svg/AssetListItemSkeletonIcon';
import AvatarIcon from './svg/AvatarIcon';
import BalanceLogoIcon from './svg/BalanceLogoIcon';
import CaretIcon from './svg/CaretIcon';
import ClockIcon from './svg/ClockIcon';
import FaceIcon from './svg/FaceIcon';
import SpinnerIcon from './svg/SpinnerIcon';
import ThreeDotsIcon from './svg/ThreeDotsIcon';
import SendIcon from './svg/SendIcon';
import WalletConnectIcon from './svg/WalletConnectIcon';
import WarningIcon from './svg/WarningIcon';

const Icon = ({ name, ...props }) =>
  createElement((Icon.IconTypes[name] || Flex), props);

Icon.propTypes = {
  name: PropTypes.string,
};

Icon.IconTypes = {
  arrow: ArrowIcon,
  assetListItemSkeleton: AssetListItemSkeletonIcon,
  avatar: AvatarIcon,
  balanceLogo: BalanceLogoIcon,
  caret: CaretIcon,
  clock: ClockIcon,
  face: FaceIcon,
  spinner: SpinnerIcon,
  threeDots: ThreeDotsIcon,
  walletConnect: WalletConnectIcon,
  send: SendIcon,
  warning: WarningIcon,
};

export default Icon;
