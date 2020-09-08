const sampleSync = [[{"id": 0, "text": "You're",   "time": 56.141659032424926}, {"id": 1, "text": "so",   "time": 56.42651187983704}, {"id": 2, "text": "certain",   "time": 56.747641979019164}], [{"id": 3, "text": "That",   "time": 59.36125806103516}, {"id": 4, "text": "you're",   "time": 59.73628006103515}, {"id": 5, "text": "tired",   "time": 60.03337899237061}, {"id": 6, "text": "of",   "time": 60.786646013351444}, {"id": 7, "text": "chasing",   "time": 61.11045513351441}, {"id": 8, "text": "ghosts",   "time": 62.59944297711181}], [{"id": 9, "text": "I'm",   "time": 66.7265270705719}, {"id": 10, "text": "such",   "time": 67.92663587983704}, {"id": 11, "text": "a",   "time": 68.24466995803833}, {"id": 12, "text": "burden",   "time": 68.7305417806549}], [{"id": 13, "text": "A",   "time": 71.1951579332428}, {"id": 14, "text": "parasite",   "time": 71.69627186076355}, {"id": 15, "text": "destroys",   "time": 72.77576985694886}, {"id": 16, "text": "its",   "time": 73.78042397138977}, {"id": 17, "text": "host",   "time": 74.49531288555909}], [{"id": 18, "text": "I'm",   "time": 77.01723095994568}, {"id": 19, "text": "so",   "time": 77.2741259294281}, {"id": 20, "text": "toxic",   "time": 77.68522894277955}, {"id": 21, "text": "I'm",   "time": 83.15638689891053}, {"id": 22, "text": "so",   "time": 83.34201300762939}, {"id": 23, "text": "hurtful",   "time": 83.75736696948242}], [{"id": 24, "text": "How",   "time": 84.92424602479554}, {"id": 25, "text": "am",   "time": 85.2192148626709}, {"id": 26, "text": "I",   "time": 85.61548500953674}, {"id": 27, "text": "to",   "time": 86.50317602098083}, {"id": 28, "text": "be",   "time": 87.0374709408722}, {"id": 29, "text": "saved",   "time": 87.44444100572204}], [{"id": 30, "text": "Maybe",   "time": 93.08329294468689}, {"id": 31, "text": "it's",   "time": 93.39436581498718}, {"id": 32, "text": "the",   "time": 93.7723890743866}, {"id": 33, "text": "medicine",   "time": 94.1342980629425}], [{"id": 34, "text": "Or",   "time": 98.76934605340576}, {"id": 35, "text": "maybe",   "time": 99.05931101525879}, {"id": 36, "text": "it's",   "time": 99.39820500190734}, {"id": 37, "text": "the",   "time": 99.75234185504151}, {"id": 38, "text": "state",   "time": 100.12217397901917}, {"id": 39, "text": "I'm",   "time": 100.44013505722046}, {"id": 40, "text": "in",   "time": 100.92918490081787}], [{"id": 41, "text": "Come",   "time": 104.67829297329712}, {"id": 42, "text": "save",   "time": 104.99224886457824}, {"id": 43, "text": "me",   "time": 105.3772608550415}, {"id": 44, "text": "from",   "time": 105.70530892370606}, {"id": 45, "text": "myself",   "time": 106.10036190463256}, {"id": 46, "text": "again",   "time": 106.73615406103515}], [{"id": 47, "text": "But",   "time": 110.27945904386902}, {"id": 48, "text": "you'd",   "time": 110.58249201716613}, {"id": 49, "text": "stay",   "time": 110.95339506866455}, {"id": 50, "text": "away",   "time": 111.37620692752076}, {"id": 51, "text": "if",   "time": 111.76020599046326}, {"id": 52, "text": "you",   "time": 112.136231917984}, {"id": 53, "text": "know",   "time": 112.56923900572204}, {"id": 54, "text": "what's",   "time": 112.91533096185303}, {"id": 55, "text": "best",   "time": 113.3053060667572}], [{"id": 56, "text": "I'm",   "time": 118.39601590844727}, {"id": 57, "text": "not",   "time": 119.00834589700317}, {"id": 58, "text": "a",   "time": 119.32137986076356}, {"id": 59, "text": "person",   "time": 119.7043169961853}], [{"id": 60, "text": "Just",   "time": 122.25809189700317}, {"id": 61, "text": "a",   "time": 122.56795007820129}, {"id": 62, "text": "lump",   "time": 122.97008602861023}, {"id": 63, "text": "inside",   "time": 123.73810608201599}, {"id": 64, "text": "your",   "time": 124.08409687220764}, {"id": 65, "text": "throat",   "time": 124.886148917984}], [{"id": 66, "text": "I'm",   "time": 129.72502090463257}, {"id": 67, "text": "so",   "time": 130.90025985694885}, {"id": 68, "text": "self",   "time": 131.19939588174438}, {"id": 69, "text": "serving",   "time": 131.61539300953675}], [{"id": 70, "text": "You've",   "time": 134.3400679141693}, {"id": 71, "text": "been",   "time": 134.636179917984}, {"id": 72, "text": "warned",   "time": 135.05110687983705}, {"id": 73, "text": "don't",   "time": 135.79715593133545}, {"id": 74, "text": "get",   "time": 136.1471190743866}, {"id": 75, "text": "too",   "time": 136.79926702479554}, {"id": 76, "text": "close",   "time": 137.60232399809266}], [{"id": 77, "text": "Don't",   "time": 138.7083449446869}, {"id": 78, "text": "get",   "time": 139.40415704386902}, {"id": 79, "text": "too",   "time": 140.1710370038147}, {"id": 80, "text": "close",   "time": 140.77806911634826}], [{"id": 81, "text": "I'm",   "time": 141.0129760114441}, {"id": 82, "text": "so",   "time": 141.2829579923706}, {"id": 83, "text": "toxic",   "time": 141.47400997711182}, {"id": 84, "text": "I'm",   "time": 145.98109594659425}, {"id": 85, "text": "so",   "time": 146.19909112016296}, {"id": 86, "text": "hurtful",   "time": 146.50602504196166}], [{"id": 87, "text": "How",   "time": 147.83620396566772}, {"id": 88, "text": "am",   "time": 148.16824098283385}, {"id": 89, "text": "I",   "time": 148.53611301335144}, {"id": 90, "text": "to",   "time": 148.92893590081786}, {"id": 91, "text": "be",   "time": 149.72303304959107}, {"id": 92, "text": "saved",   "time": 150.4670860076294}], [{"id": 93, "text": "Maybe",   "time": 156.07762206866454}, {"id": 94, "text": "it's",   "time": 156.36688886457824}, {"id": 95, "text": "the",   "time": 156.750041}, {"id": 96, "text": "medicine",   "time": 157.51596103242494}], [{"id": 97, "text": "Or",   "time": 161.6950709332428}, {"id": 98, "text": "maybe",   "time": 162.0041449485016}, {"id": 99, "text": "it's",   "time": 162.3581830400543}, {"id": 100, "text": "the",   "time": 162.6822359217987}, {"id": 101, "text": "state",   "time": 163.09330493515014}, {"id": 102, "text": "I'm",   "time": 163.3640588435974}, {"id": 103, "text": "in",   "time": 163.84608395613097}], [{"id": 104, "text": "Come",   "time": 167.66399803433228}, {"id": 105, "text": "save",   "time": 167.99400295803832}, {"id": 106, "text": "me",   "time": 168.4208970038147}, {"id": 107, "text": "from",   "time": 168.44589709918213}, {"id": 108, "text": "myself",   "time": 168.7260390705719}, {"id": 109, "text": "again",   "time": 168.7590390629425}], [{"id": 110, "text": "But",   "time": 173.3551410190735}, {"id": 111, "text": "you'd",   "time": 173.62926618692018}, {"id": 112, "text": "stay",   "time": 173.98411696757506}, {"id": 113, "text": "away",   "time": 174.34368293515016}, {"id": 114, "text": "if",   "time": 174.72299604959107}, {"id": 115, "text": "you",   "time": 175.08010092370606}, {"id": 116, "text": "know",   "time": 175.44756702670287}, {"id": 117, "text": "what's",   "time": 175.77897604386902}, {"id": 118, "text": "best",   "time": 176.2590450629425}], [{"id": 119, "text": "Maybe",   "time": 192.00473811444093}, {"id": 120, "text": "it's",   "time": 192.58184101716614}, {"id": 121, "text": "the",   "time": 193.07574497520446}, {"id": 122, "text": "medicine",   "time": 193.61676710299682}], [{"id": 123, "text": "Or",   "time": 198.1289279485016}, {"id": 124, "text": "maybe",   "time": 198.42384602479552}, {"id": 125, "text": "it's",   "time": 198.7627580114441}, {"id": 126, "text": "the",   "time": 199.09577395613098}, {"id": 127, "text": "state",   "time": 199.45285006866456}, {"id": 128, "text": "I'm",   "time": 199.885919917984}, {"id": 129, "text": "in",   "time": 200.22517290463256}], [{"id": 130, "text": "A",   "time": 201.79693093133545}, {"id": 131, "text": "toast",   "time": 202.11499600953675}, {"id": 132, "text": "to",   "time": 202.7958110038147}, {"id": 133, "text": "you",   "time": 203.5937868626709}], [{"id": 134, "text": "You",   "time": 207.3528739256134}, {"id": 135, "text": "always",   "time": 207.65899191989135}, {"id": 136, "text": "know",   "time": 207.98090894659424}, {"id": 137, "text": "what's",   "time": 208.40879691989136}, {"id": 138, "text": "best",   "time": 209.50769889700317}], [{"id": 139, "text": "Maybe",   "time": 216.04513807629394}, {"id": 140, "text": "it's",   "time": 216.35035390463256}, {"id": 141, "text": "the",   "time": 216.63309889700318}, {"id": 142, "text": "medicine",   "time": 217.07530004768373}], [{"id": 143, "text": "Or",   "time": 221.6930880782013}, {"id": 144, "text": "maybe",   "time": 221.98605206103517}, {"id": 145, "text": "it's",   "time": 222.2519848550415}, {"id": 146, "text": "the",   "time": 222.62198297901915}, {"id": 147, "text": "state",   "time": 222.92691604577638}, {"id": 148, "text": "I'm",   "time": 223.32794506866455}, {"id": 149, "text": "in",   "time": 223.99166986457826}], [{"id": 150, "text": "Come",   "time": 227.94872388174437}, {"id": 151, "text": "save",   "time": 228.1797370667572}, {"id": 152, "text": "me",   "time": 228.46974902861024}, {"id": 153, "text": "from",   "time": 228.84274393515014}, {"id": 154, "text": "myself",   "time": 229.14473898092652}, {"id": 155, "text": "again",   "time": 229.99388395803834}], [{"id": 156, "text": "But",   "time": 233.67175193133545}, {"id": 157, "text": "you'd",   "time": 234.5937018626709}, {"id": 158, "text": "stay",   "time": 235.0827299446869}, {"id": 159, "text": "away",   "time": 235.10572994659424}, {"id": 160, "text": "if",   "time": 235.38863793896485}, {"id": 161, "text": "you",   "time": 235.74480788555908}, {"id": 162, "text": "know",   "time": 236.106938874115}, {"id": 163, "text": "what's",   "time": 236.40405711634827}, {"id": 164, "text": "best",   "time": 236.73485989509584}], [{"id": 165, "text": "Maybe",   "time": 240.2367319885559}, {"id": 166, "text": "it's",   "time": 240.4957200514984}, {"id": 167, "text": "the",   "time": 240.79873402479552}, {"id": 168, "text": "medicine",   "time": 241.09747304959106}], [{"id": 169, "text": "Or",   "time": 245.65384404386901}, {"id": 170, "text": "maybe",   "time": 245.95453292370607}, {"id": 171, "text": "it's",   "time": 246.2647288664856}, {"id": 172, "text": "the",   "time": 246.60769204005433}, {"id": 173, "text": "state",   "time": 246.99160486457825}, {"id": 174, "text": "I'm",   "time": 247.3696228855591}, {"id": 175, "text": "in",   "time": 247.84768004959108}], [{"id": 176, "text": "Come",   "time": 251.83964591416932}, {"id": 177, "text": "save",   "time": 252.14267688746642}, {"id": 178, "text": "me",   "time": 252.4497000476837}, {"id": 179, "text": "from",   "time": 252.767853125885}, {"id": 180, "text": "myself",   "time": 253.05565999427796}, {"id": 181, "text": "again",   "time": 253.5347198474121}], [{"id": 182, "text": "But",   "time": 257.2477099065399}, {"id": 183, "text": "you'd",   "time": 257.5517680457764}, {"id": 184, "text": "stay",   "time": 257.86871995803835}, {"id": 185, "text": "away",   "time": 258.1817029217987}, {"id": 186, "text": "if",   "time": 258.550735879837}, {"id": 187, "text": "you",   "time": 258.86777803051757}, {"id": 188, "text": "know",   "time": 259.19664802670286}, {"id": 189, "text": "what's",   "time": 259.5417790553131}, {"id": 190, "text": "best",   "time": 259.95174290272524}]]
.flat()
module.exports = sampleSync

