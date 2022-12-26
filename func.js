function latinToTinifinagh(str) {
    const charMap = {
      'a': 'ⴰ',
      'b': 'ⴱ',
      'c': 'ⵛ',
      'd': 'ⴷ',
      'e': 'ⴻ',
      'f': 'ⴼ',
      'g': 'ⴳ',
      'h': 'ⵀ',
      'i': 'ⵉ',
      'j': 'ⵊ',
      'k': 'ⴽ',
      'l': 'ⵍ',
      'm': 'ⵎ',
      'n': 'ⵏ',
      'o': 'ⵓ',
      'q': 'ⵇ',
      'r': 'ⵔ',
      's': 'ⵙ',
      't': 'ⵜ',
      'u': 'ⵓ',
      'w': 'ⵡ',
      'x': 'ⵅ',
      'y': 'ⵢ',
      'z': 'ⵥ',
      'v': 'ⵖ',
      'Ɣ': 'ⵖ',
      'D': 'ⴹ',
      'Ḍ': 'ⴹ',
      'H': 'ⵃ',
      'Ḥ': 'ⵃ',
      'R': 'ⵕ',
      'Ṛ': 'ⵕ',
      'Z': 'ⵥ',
      'Ẓ': 'ⵥ',
      'S': 'ⵚ',
      'Ṣ': 'ⵚ',

    };
    
    let result = '';

    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (charMap[char] !== undefined) {
        result += charMap[char];
      } 
      else {
        result += char;
      }
    }
    return result;
  }
  