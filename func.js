const txt = document.getElementById('string');
const btn = document.getElementById('btn');
const out1 = document.getElementById('out');

function latinToTinifinagh() {
  // Get the value of the input field
  let _input = txt.value;

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
    'z': 'ⵣ',
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

  for (let i = 0; i < _input.length; i++) {
    let char = _input[i];
    if (charMap[char] !== undefined) {
      result += charMap[char];
    } 
    else {
      result += char;
    }
  }
  out1.innerHTML = result;
}

btn.addEventListener('click', latinToTinifinagh);
