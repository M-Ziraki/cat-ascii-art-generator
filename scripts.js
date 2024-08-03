const catArts = [
    "₍˄·͈༝·͈˄₎◞ ̑̑",
    "(=ↀωↀ=)",
    "(^･o･^)ﾉ”",
    "≽ܫ≼",
    "(=🝦 ﻌ 🝦=)",
    "₍˄·͈༝·͈˄₍˄·͈༝·͈˄( ͒ ु•·̫• ू ͒)˄·͈༝·͈˄₎˄·͈༝·͈˄₎",
    "ฅ^•ﻌ•^ฅ",
    "ᓚᘏᗢ",
    "₊˚⊹♡ ᓚ₍ ^. .^₎",
    "≽^•༚• ྀི≼ᵐᵉᵒʷ",
    "(((;꒪ꈊ꒪;)))",
    "ᓚᘏᗢ … . . ᘛ⁐̤ᕐᐷ",
    "₍ᐢ֎ﻌ֍ᐢ₎ʃ",
    "ꐑ՞•ﻌ•՞ꐑ",
    "^•ﻌ•^",
    "ฅ^•ﻌ•^ฅ",
    "ദ്ദി（• ˕ •マ.ᐟ",
    "≽^•⩊•^≼",
    "^•ﻌ•^ฅ♡",
    "*ฅ^•ﻌ•^ฅ*",
    "ᓚ₍ ^. ̫ .^₎",
    "ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧",
    "≽^•⩊•^≼ ₊˚⊹♡",
    "ฅᨐฅ",
    "(=^ ◡ ^=)",
    "₍⸍⸌̣ʷ̣̫⸍̣⸌₎",
    "≽^- ˕ -^≼",
    "₍⸍⸌̣ʷ̣̫⸍̣⸌₎ﾉ♡",
    "ᨐฅ",
    "¯\\_₍⸍⸌̣ʷ̣̫⸍̣⸌₎_/¯",
    "(^._.^)",
    "(๑´>᎑<)~*",
    "(^..^)ﾉ",
    "˓˓ก₍⸍⸌̣ʷ̣̫⸍̣⸌₎ค˒˒",
    "/ᐠ - ˕ -マ",
    "（ฅ＾・ﻌ・＾）ฅ",
    "ʕ•ᴥ•ʔ",
    "ฅʕ•̫͡•ʔฅ",
    "𓃠",
    "(=ↀДↀ=)",
    "ʕノ•ᴥ•ʔノ",
    "(=⌒ᆺ⌒=)",
    "𓁻",
    "(=^･ω･^=)",
    "≽＾● ⋏ ●＾≼",
    "(=ＴェＴ=)",
    "(=①ω①=)",
    "ฅ(•ㅅ•❀)ฅ",
    "ʢ◉ᴥ◉ʡ",
    "ฅ⊱*╹ ⌂ ╹*⊰ฅ",
    "└(=^‥^=)┐",
    "( =ノωヽ=)",
    "(=^-ω-^=)",
    "ᓚᘏᗢฅ",
    "(=´∇｀=)",
    "(=⌒‿‿⌒=)",
    "ฅ(>ω<*ฅ)",
    "⌒(=^-ω-^=)⌒",
    "(=①ω①=)",
    "(=◉ω◉=)",
    "(=ΦωΦ=)"
];

function generateCatArt() {
    const randomIndex = Math.floor(Math.random() * catArts.length);
    const randomCatArt = catArts[randomIndex];
    document.getElementById('catArtDisplay').textContent = randomCatArt;
    document.getElementById('copyButton').style.display = 'inline-block';
}

function copyToClipboard() {
    const textToCopy = document.getElementById('catArtDisplay').textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        showToast('Copied to clipboard!');
    }).catch(() => {
        showToast('Failed to copy!');
    });
}

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.className = "toast show";
    setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
}
