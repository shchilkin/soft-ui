mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(text: &str) {
    alert(text);
}

#[wasm_bindgen]
/// Converts decimal number in range 0 - 255 to its hex equivalent
/// ### Arguments
/// * 'number' - decimal number in range 0 - 255
pub fn to_hex(number: u8) -> u8 {
    // TODO: to_hex logic. Function should return hexadecimal string
    return number;
}
