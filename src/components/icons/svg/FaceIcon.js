import PropTypes from 'prop-types';
import React from 'react';
import Svg, { Path } from 'svgs';
import { colors } from '../../../styles';

const FaceIcon = ({ color, ...props }) => (
  <Svg height="32" width="32" viewBox="0 0 32 32" {...props}>
    <Path
      d="M31.1821561,23 C31.6282528,23 32,23.3448276 32,23.7586207 L32,26.9310345 C32,29.7241379 29.5464684,32 26.535316,32 L22.8178439,32 C22.3717472,32 22,31.6551724 22,31.2413793 C22,30.8275862 22.3717472,30.4827586 22.8178439,30.4827586 L26.535316,30.4827586 C28.6542751,30.4827586 30.3643123,28.8965517 30.3643123,26.9310345 L30.3643123,23.7586207 C30.3643123,23.3448276 30.7360595,23 31.1821561,23 Z M26.535316,0 C29.5464684,0 32,2.39130435 32,5.32608696 L32,9.20289855 C32,9.63768116 31.6282528,10 31.1821561,10 C30.7360595,10 30.3643123,9.63768116 30.3643123,9.20289855 L30.3643123,5.32608696 C30.3643123,3.26086957 28.6542751,1.5942029 26.535316,1.5942029 L22.8178439,1.5942029 C22.3717472,1.5942029 22,1.23188406 22,0.797101449 C22,0.362318841 22.3717472,0 22.8178439,0 L26.535316,0 Z M23,16 C22.4642857,16 22,15.5275591 22,14.8976378 L22,12.1023622 C22,11.511811 22.4285714,11 23,11 C23.5714286,11 24,11.4724409 24,12.1023622 L24,14.9370079 C23.9642857,15.5275591 23.5357143,16 23,16 Z M20.7038627,22.2529274 C21.0128755,21.9156909 21.4935622,21.9156909 21.7682403,22.2529274 C22.0772532,22.5901639 22.0772532,23.1147541 21.7682403,23.4145199 C20.2575107,25.1007026 18.2317597,26 16.1373391,26 L15.8626609,26 C13.7682403,26 11.776824,25.1007026 10.2317597,23.4145199 C9.92274678,23.0772834 9.92274678,22.5526932 10.2317597,22.2529274 C10.5407725,21.9156909 11.0214592,21.9156909 11.2961373,22.2529274 C12.5321888,23.6018735 14.1459227,24.3512881 15.8626609,24.3512881 L16.1373391,24.3512881 C17.8197425,24.3512881 19.4678112,23.6018735 20.7038627,22.2529274 Z M13.8148148,20 C13.3703704,20 13,19.6456693 13,19.2204724 C13,18.7952756 13.3703704,18.4409449 13.8148148,18.4409449 L14,18.4409449 C14.7407407,18.4409449 15.3703704,17.8740157 15.3703704,17.1299213 L15.3703704,11.7795276 C15.3703704,11.3543307 15.7407407,11 16.1851852,11 C16.6296296,11 17,11.3543307 17,11.7795276 L17,17.1653543 C17,18.7244094 15.6666667,20 14,20 L13.8148148,20 Z M9,11 C9.53571429,11 10,11.4724409 10,12.1023622 L10,14.9370079 C10,15.5275591 9.57142857,16 9,16 C8.46428571,16 8,15.5275591 8,14.8976378 L8,12.1023622 C8,11.511811 8.42857143,11 9,11 Z M0.817843866,10 C0.371747212,10 0,9.63768116 0,9.20289855 L0,5.32608696 C0,2.39130435 2.4535316,0 5.46468401,0 L9.18215613,0 C9.62825279,0 10,0.362318841 10,0.797101449 C10,1.23188406 9.62825279,1.5942029 9.18215613,1.5942029 L5.46468401,1.5942029 C3.34572491,1.5942029 1.63568773,3.26086957 1.63568773,5.32608696 L1.63568773,9.20289855 C1.63568773,9.63768116 1.26394052,10 0.817843866,10 Z M9.18215613,30.4827586 C9.62825279,30.4827586 10,30.8275862 10,31.2413793 C10,31.6551724 9.66542751,32 9.18215613,32 L5.46468401,32 C2.4535316,32 0,29.7241379 0,26.9310345 L0,23.7586207 C0,23.3448276 0.371747212,23 0.817843866,23 C1.26394052,23 1.63568773,23.3448276 1.63568773,23.7586207 L1.63568773,26.9310345 C1.63568773,28.8965517 3.34572491,30.4827586 5.46468401,30.4827586 L9.18215613,30.4827586 Z"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);

FaceIcon.propTypes = {
  color: PropTypes.string,
};

FaceIcon.defaultProps = {
  color: colors.white,
};

export default FaceIcon;
