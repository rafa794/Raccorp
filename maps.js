const emojis = {
  "-": " ",
  O: "🏠",
  P: "🦝",
  X: "💣",
  I: "🎁",
  PLAYER: "👱🏻‍♀️",
  BOMB_COLLISION: "🔥",
  GAME_OVER: "👎",
  WIN: "🏆",
  HEART: "♥",
};
const maps = [];
maps.push(`
  PXXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  OXXXXXXXXX
`);
maps.push(`
  O--XXXXXXX
  X--XXXXXXX
  XX----XXXX
  X--XX-XXXX
  X-XXX--XXX
  X-XXXX-XXX
  XX--XX--XX
  XX--XXX-XX
  XXXX---PXX
  XXXXXXXXXX
  `);
maps.push(`
  P-----XXXX
  XXXXX-XXXX
  XX----XXXX
  XX-XXXXXXX
  XX-----XXX
  XXXXXX-XXX
  XX-----XXX
  XX-XXXXXXX
  XX-----OXX
  XXXXXXXXXX
`);
maps.push(`
  O---------
  XXXXXXXXX-
  XX------X-
  XX-XXXX-X-
  XX-XXPX-X-
  XX-XX---X-
  XX-XXXXXX-
  XX--------
  XXXXXXXXXX
  XXXXXXXXXX
`);
