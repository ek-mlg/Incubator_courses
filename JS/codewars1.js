﻿function hero(bullets, dragons) {
    return bullets >= dragons * 2;
  }
  hero(0, 1);  // false
  hero(4, 2);  // true