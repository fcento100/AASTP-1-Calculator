//if you are reading this hello! I made this to learn about HTML/CSS/JS, use at your own risk.
function updateCalcs() {
    var Q = document.getElementById("Q").value;

    //bd 3..15, 17..18, 21, 24, 27, 29..30, 32, 35
    const pQD1 = {
        BD3: 0.5,
        BD4: 0.8,
        BD5: 1.1,
        BD6: 1.2,
        BD7: 1.8,
        BD8: 2.0,
        BD9: 2.4,
        BD10: 3.2,
        BD11: 3.6,
        BD12: 4.0,
        BD13: 4.4,
        BD14: 4.8,
        BD15: 6.0,
        BD17: 7.2,
        BD18: 8.0,
        BD21: 9.6,
        BD24: 13.0,
        BD27: 16.0,
        BD29: 20.0,
        BD30: 22.2,
        BD32: 25.0,
        BD35: 44.4,
    };

    for (const [key, value] of Object.entries(pQD1)) {
        if (1 <= Q && Q <= 500_000) {
            document.getElementById(key).innerHTML = (
                value * Math.pow(Q, 1 / 3)
            ).toFixed(2);
        } else {
            document.getElementById(key).innerHTML = "N/A";
        }
    }

    //bd 1..2
    const pQD2 = {
        BD1: [
            [30_000, 0.35],
            [120_000, 0.44],
        ],
        BD2: [
            [1_500, 0.4],
            [500_000, 0.6],
        ],
    };

    for (const [key, value] of Object.entries(pQD2)) {
        if (1 <= Q && Q < value[0][0]) {
            document.getElementById(key).innerHTML = (
                value[0][1] * Math.pow(Q, 1 / 3)
            ).toFixed(2);
        } else if (value[0][0] <= Q && Q <= value[1][0]) {
            document.getElementById(key).innerHTML = (
                value[1][1] * Math.pow(Q, 1 / 3)
            ).toFixed(2);
        } else {
            document.getElementById(key).innerHTML = "N/A";
        }
    }

    //bd 16, 19..20, 22..23, 25..26, 28
    const pQD3 = {
        BD16: [
            [2_500, 0.47],
            [4_500, 1.73],
            [45_000, 7.0],
        ],
        BD19: [
            [2_500, 0.61],
            [4_500, 2.23],
            [45_000, 9.0],
        ],
        BD20: [
            [2_500, 0.63],
            [4_500, 2.30],
            [45_000, 9.3],
        ],
        BD22: [
            [2_500, 0.75],
            [4_500, 2.75],
            [500_000, 11.1],
        ],
        BD23: [
            [2_500, 0.81],
            [4_500, 2.97],
            [45_000, 12.0],
        ],
        BD25: [
            [2_500, 0.95],
            [4_500, 3.47],
            [45_000, 14.0],
        ],
        BD26: [
            [2_500, 1.0],
            [4_500, 3.6],
            [500_000, 14.8],
        ],
        BD28: [
            [2_500, 1.22],
            [4_500, 4.46],
            [45_000, 18.0],
        ],
        BD31: [
            [2_500, 1.5],
            [4_500, 5.5],
            [500_000, 22.2],
        ],
        BD33: [
            [2_500, 1.89],
            [4_500, 6.94],
            [45_000, 28.0],
        ],
        BD34: [
            [2_500, 2.43],
            [4_500, 8.92],
            [45_000, 36.0],
        ],
        BD36: [
            [2_500, 3.0],
            [4_500, 11.0],
            [500_000, 44.4],
        ],
    };

    for (const [key, value] of Object.entries(pQD3)) {
        if (1 <= Q && Q < value[0][0]) {
            document.getElementById(key).innerHTML = (
                value[0][1] * Math.pow(Q, 2 / 3)
            ).toFixed(2);
        } else if (value[0][0] <= Q && Q < value[1][0]) {
            document.getElementById(key).innerHTML = (
                value[1][1] * Math.pow(Q, 1 / 2)
            ).toFixed(2);
        } else if (value[1][0] <= Q && Q <= value[2][0]) {
            document.getElementById(key).innerHTML = (
                value[2][1] * Math.pow(Q, 1 / 3)
            ).toFixed(2);
        } else {
            document.getElementById(key).innerHTML = "N/A";
        }
    }


}
