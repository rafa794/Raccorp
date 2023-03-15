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
  XXXXXXXXXX
  XO-------X
  XXXXXXXX-X
  XX----XX-X
  XX-XXPXX-X
  XX-XXXXX-X
  XX-XXXXX-X
  XX-------X
  XXXXXXXXXX
  XXXXXXXXXX
`);
