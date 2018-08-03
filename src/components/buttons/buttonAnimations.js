const animation = {};
const config = {};

animation.default = {
  from: { scale: 1, translateY: 0 },
  to: { scale: 0.80, translateY: 1 },
};

config.default = {
  friction: 44,
  tension: 1000,
};

export default {
  animation,
  config,
};
