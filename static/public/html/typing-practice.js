//@ts-check

const fingers = Object.freeze([
    "leftLittle",
    "leftRing",
    "leftMiddle",
    "leftIndex",
    "rightIndex",
    "rightMiddle",
    "rightRing",
    "rightLittle",
]);

class KeyData {
    static data = Object.freeze({
        0: {
            key: "0",
            code: "Digit0",
            shiftKey: false,
            finger: "rightLittle",
            shiftFinger: "",
            type: "digit",
        },
        1: {
            key: "1",
            code: "Digit1",
            shiftKey: false,
            finger: "leftLittle",
            shiftFinger: "",
            type: "digit",
        },
        2: {
            key: "2",
            code: "Digit2",
            shiftKey: false,
            finger: "leftRing",
            shiftFinger: "",
            type: "digit",
        },
        3: {
            key: "3",
            code: "Digit3",
            shiftKey: false,
            finger: "leftMiddle",
            shiftFinger: "",
            type: "digit",
        },
        4: {
            key: "4",
            code: "Digit4",
            shiftKey: false,
            finger: "leftIndex",
            shiftFinger: "",
            type: "digit",
        },
        5: {
            key: "5",
            code: "Digit5",
            shiftKey: false,
            finger: "leftIndex",
            shiftFinger: "",
            type: "digit",
        },
        6: {
            key: "6",
            code: "Digit6",
            shiftKey: false,
            finger: "rightIndex",
            shiftFinger: "",
            type: "digit",
        },
        7: {
            key: "7",
            code: "Digit7",
            shiftKey: false,
            finger: "rightIndex",
            shiftFinger: "",
            type: "digit",
        },
        8: {
            key: "8",
            code: "Digit8",
            shiftKey: false,
            finger: "rightMiddle",
            shiftFinger: "",
            type: "digit",
        },
        9: {
            key: "9",
            code: "Digit9",
            shiftKey: false,
            finger: "rightRing",
            shiftFinger: "",
            type: "digit",
        },
        q: {
            key: "q",
            code: "KeyQ",
            shiftKey: false,
            finger: "leftLittle",
            shiftFinger: "",
            type: "alphabet",
        },
        a: {
            key: "a",
            code: "KeyA",
            shiftKey: false,
            finger: "leftLittle",
            shiftFinger: "",
            type: "alphabet",
        },
        z: {
            key: "z",
            code: "KeyZ",
            shiftKey: false,
            finger: "leftLittle",
            shiftFinger: "",
            type: "alphabet",
        },
        w: {
            key: "w",
            code: "KeyW",
            shiftKey: false,
            finger: "leftRing",
            shiftFinger: "",
            type: "alphabet",
        },
        s: {
            key: "s",
            code: "KeyS",
            shiftKey: false,
            finger: "leftRing",
            shiftFinger: "",
            type: "alphabet",
        },
        x: {
            key: "x",
            code: "KeyX",
            shiftKey: false,
            finger: "leftRing",
            shiftFinger: "",
            type: "alphabet",
        },
        e: {
            key: "e",
            code: "KeyE",
            shiftKey: false,
            finger: "leftMiddle",
            shiftFinger: "",
            type: "alphabet",
        },
        d: {
            key: "d",
            code: "KeyD",
            shiftKey: false,
            finger: "leftMiddle",
            shiftFinger: "",
            type: "alphabet",
        },
        c: {
            key: "c",
            code: "KeyC",
            shiftKey: false,
            finger: "leftMiddle",
            shiftFinger: "",
            type: "alphabet",
        },
        r: {
            key: "r",
            code: "KeyR",
            shiftKey: false,
            finger: "leftIndex",
            shiftFinger: "",
            type: "alphabet",
        },
        f: {
            key: "f",
            code: "KeyF",
            shiftKey: false,
            finger: "leftIndex",
            shiftFinger: "",
            type: "alphabet",
        },
        v: {
            key: "v",
            code: "KeyV",
            shiftKey: false,
            finger: "leftIndex",
            shiftFinger: "",
            type: "alphabet",
        },
        t: {
            key: "t",
            code: "KeyT",
            shiftKey: false,
            finger: "leftIndex",
            shiftFinger: "",
            type: "alphabet",
        },
        g: {
            key: "g",
            code: "KeyG",
            shiftKey: false,
            finger: "leftIndex",
            shiftFinger: "",
            type: "alphabet",
        },
        b: {
            key: "b",
            code: "KeyB",
            shiftKey: false,
            finger: "leftIndex",
            shiftFinger: "",
            type: "alphabet",
        },
        y: {
            key: "y",
            code: "KeyY",
            shiftKey: false,
            finger: "rightIndex",
            shiftFinger: "",
            type: "alphabet",
        },
        h: {
            key: "h",
            code: "KeyH",
            shiftKey: false,
            finger: "rightIndex",
            shiftFinger: "",
            type: "alphabet",
        },
        n: {
            key: "n",
            code: "KeyN",
            shiftKey: false,
            finger: "rightIndex",
            shiftFinger: "",
            type: "alphabet",
        },
        u: {
            key: "u",
            code: "KeyU",
            shiftKey: false,
            finger: "rightIndex",
            shiftFinger: "",
            type: "alphabet",
        },
        j: {
            key: "j",
            code: "KeyJ",
            shiftKey: false,
            finger: "rightIndex",
            shiftFinger: "",
            type: "alphabet",
        },
        m: {
            key: "m",
            code: "KeyM",
            shiftKey: false,
            finger: "rightIndex",
            shiftFinger: "",
            type: "alphabet",
        },
        i: {
            key: "i",
            code: "KeyI",
            shiftKey: false,
            finger: "rightMiddle",
            shiftFinger: "",
            type: "alphabet",
        },
        k: {
            key: "k",
            code: "KeyK",
            shiftKey: false,
            finger: "rightMiddle",
            shiftFinger: "",
            type: "alphabet",
        },
        ",": {
            key: ",",
            code: "Comma",
            shiftKey: false,
            finger: "rightMiddle",
            shiftFinger: "",
            type: "punctuation",
        },
        o: {
            key: "o",
            code: "KeyO",
            shiftKey: false,
            finger: "rightRing",
            shiftFinger: "",
            type: "alphabet",
        },
        l: {
            key: "l",
            code: "KeyL",
            shiftKey: false,
            finger: "rightRing",
            shiftFinger: "",
            type: "alphabet",
        },
        ".": {
            key: ".",
            code: "Period",
            shiftKey: false,
            finger: "rightRing",
            shiftFinger: "",
            type: "punctuation",
        },
        p: {
            key: "p",
            code: "KeyP",
            shiftKey: false,
            finger: "rightLittle",
            shiftFinger: "",
            type: "alphabet",
        },
        ";": {
            key: ";",
            code: "Semicolon",
            shiftKey: false,
            finger: "rightLittle",
            shiftFinger: "",
            type: "punctuation",
        },
        "/": {
            key: "/",
            code: "Slash",
            shiftKey: false,
            finger: "rightLittle",
            shiftFinger: "",
            type: "punctuation",
        },
        "!": {
            key: "!",
            code: "Digit1",
            shiftKey: true,
            finger: "leftLittle",
            shiftFinger: "right",
            type: "punctuation",
        },
        Q: {
            key: "Q",
            code: "KeyQ",
            shiftKey: true,
            finger: "leftLittle",
            shiftFinger: "right",
            type: "ALPHABET",
        },
        A: {
            key: "A",
            code: "KeyA",
            shiftKey: true,
            finger: "leftLittle",
            shiftFinger: "right",
            type: "ALPHABET",
        },
        Z: {
            key: "Z",
            code: "KeyZ",
            shiftKey: true,
            finger: "leftLittle",
            shiftFinger: "right",
            type: "ALPHABET",
        },
        "@": {
            key: "@",
            code: "Digit2",
            shiftKey: true,
            finger: "leftRing",
            shiftFinger: "right",
            type: "punctuation",
        },
        W: {
            key: "W",
            code: "KeyW",
            shiftKey: true,
            finger: "leftRing",
            shiftFinger: "right",
            type: "ALPHABET",
        },
        S: {
            key: "S",
            code: "KeyS",
            shiftKey: true,
            finger: "leftRing",
            shiftFinger: "right",
            type: "ALPHABET",
        },
        X: {
            key: "X",
            code: "KeyX",
            shiftKey: true,
            finger: "leftRing",
            shiftFinger: "right",
            type: "ALPHABET",
        },
        "#": {
            key: "#",
            code: "Digit3",
            shiftKey: true,
            finger: "leftMiddle",
            shiftFinger: "right",
            type: "punctuation",
        },
        E: {
            key: "E",
            code: "KeyE",
            shiftKey: true,
            finger: "leftMiddle",
            shiftFinger: "right",
            type: "ALPHABET",
        },
        D: {
            key: "D",
            code: "KeyD",
            shiftKey: true,
            finger: "leftMiddle",
            shiftFinger: "right",
            type: "ALPHABET",
        },
        C: {
            key: "C",
            code: "KeyC",
            shiftKey: true,
            finger: "leftMiddle",
            shiftFinger: "right",
            type: "ALPHABET",
        },
        $: {
            key: "$",
            code: "Digit4",
            shiftKey: true,
            finger: "leftIndex",
            shiftFinger: "right",
            type: "punctuation",
        },
        R: {
            key: "R",
            code: "KeyR",
            shiftKey: true,
            finger: "leftIndex",
            shiftFinger: "right",
            type: "ALPHABET",
        },
        F: {
            key: "F",
            code: "KeyF",
            shiftKey: true,
            finger: "leftIndex",
            shiftFinger: "right",
            type: "ALPHABET",
        },
        V: {
            key: "V",
            code: "KeyV",
            shiftKey: true,
            finger: "leftIndex",
            shiftFinger: "right",
            type: "ALPHABET",
        },
        "%": {
            key: "%",
            code: "Digit5",
            shiftKey: true,
            finger: "leftIndex",
            shiftFinger: "right",
            type: "punctuation",
        },
        T: {
            key: "T",
            code: "KeyT",
            shiftKey: true,
            finger: "leftIndex",
            shiftFinger: "right",
            type: "ALPHABET",
        },
        G: {
            key: "G",
            code: "KeyG",
            shiftKey: true,
            finger: "leftIndex",
            shiftFinger: "right",
            type: "ALPHABET",
        },
        B: {
            key: "B",
            code: "KeyB",
            shiftKey: true,
            finger: "leftIndex",
            shiftFinger: "right",
            type: "ALPHABET",
        },
        "^": {
            key: "^",
            code: "Digit6",
            shiftKey: true,
            finger: "rightIndex",
            shiftFinger: "left",
            type: "punctuation",
        },
        Y: {
            key: "Y",
            code: "KeyY",
            shiftKey: true,
            finger: "rightIndex",
            shiftFinger: "left",
            type: "ALPHABET",
        },
        H: {
            key: "H",
            code: "KeyH",
            shiftKey: true,
            finger: "rightIndex",
            shiftFinger: "left",
            type: "ALPHABET",
        },
        N: {
            key: "N",
            code: "KeyN",
            shiftKey: true,
            finger: "rightIndex",
            shiftFinger: "left",
            type: "ALPHABET",
        },
        "&": {
            key: "&",
            code: "Digit7",
            shiftKey: true,
            finger: "rightIndex",
            shiftFinger: "left",
            type: "punctuation",
        },
        U: {
            key: "U",
            code: "KeyU",
            shiftKey: true,
            finger: "rightIndex",
            shiftFinger: "left",
            type: "ALPHABET",
        },
        J: {
            key: "J",
            code: "KeyJ",
            shiftKey: true,
            finger: "rightIndex",
            shiftFinger: "left",
            type: "ALPHABET",
        },
        M: {
            key: "M",
            code: "KeyM",
            shiftKey: true,
            finger: "rightIndex",
            shiftFinger: "left",
            type: "ALPHABET",
        },
        "*": {
            key: "*",
            code: "Digit8",
            shiftKey: true,
            finger: "rightMiddle",
            shiftFinger: "left",
            type: "punctuation",
        },
        I: {
            key: "I",
            code: "KeyI",
            shiftKey: true,
            finger: "rightMiddle",
            shiftFinger: "left",
            type: "ALPHABET",
        },
        K: {
            key: "K",
            code: "KeyK",
            shiftKey: true,
            finger: "rightMiddle",
            shiftFinger: "left",
            type: "ALPHABET",
        },
        "<": {
            key: "<",
            code: "Comma",
            shiftKey: true,
            finger: "rightMiddle",
            shiftFinger: "left",
            type: "punctuation",
        },
        "(": {
            key: "(",
            code: "Digit9",
            shiftKey: true,
            finger: "rightRing",
            shiftFinger: "left",
            type: "punctuation",
        },
        O: {
            key: "O",
            code: "KeyO",
            shiftKey: true,
            finger: "rightRing",
            shiftFinger: "left",
            type: "ALPHABET",
        },
        L: {
            key: "L",
            code: "KeyL",
            shiftKey: true,
            finger: "rightRing",
            shiftFinger: "left",
            type: "ALPHABET",
        },
        ">": {
            key: ">",
            code: "Period",
            shiftKey: true,
            finger: "rightRing",
            shiftFinger: "left",
            type: "punctuation",
        },
        ")": {
            key: ")",
            code: "Digit0",
            shiftKey: true,
            finger: "rightLittle",
            shiftFinger: "left",
            type: "punctuation",
        },
        P: {
            key: "P",
            code: "KeyP",
            shiftKey: true,
            finger: "rightLittle",
            shiftFinger: "left",
            type: "ALPHABET",
        },
        ":": {
            key: ":",
            code: "Semicolon",
            shiftKey: true,
            finger: "rightLittle",
            shiftFinger: "left",
            type: "punctuation",
        },
        "?": {
            key: "?",
            code: "Slash",
            shiftKey: true,
            finger: "rightLittle",
            shiftFinger: "left",
            type: "punctuation",
        },
    });

    constructor() {}

    /**
     *
     * @param {string} key
     * @returns {string}
     */
    static getFinger(key) {
        return KeyData.data[key]?.finger ?? "";
    }
}

class NumericalSetting {
    static data = {
        "letter-div-height": 100,
        "letter-speed": 100,
        kpm: 100,
    };

    constructor() {}

    static letterDivHeightSizeEffect() {
        $("#finish-line").css("height", `${NumericalSetting.data["letter-div-height"]}px`);
    }

    /**
     *
     * @param {string} dataKey
     * @param {number} newNumber
     * @param {{min: number, max: number}} limit
     */
    static setNumericalSetting(
        dataKey,
        newNumber,
        limit = { min: Number.MIN_SAFE_INTEGER, max: Number.MAX_SAFE_INTEGER }
    ) {
        NumericalSetting.data[dataKey] = newNumber;
        if (newNumber > limit.max) {
            NumericalSetting.data[dataKey] = limit.max;
        }
        if (newNumber < limit.min) {
            NumericalSetting.data[dataKey] = limit.min;
        }
        $(`.numerical-setting-container[data-binding=${dataKey}] .description .setting-value`).text(
            NumericalSetting.data[dataKey].toString()
        );

        if (dataKey === "letter-div-height") {
            NumericalSetting.letterDivHeightSizeEffect();
        }
    }

    /**
     *
     * @param {string} dataKey
     * @param {number} step
     * @param {{min: number, max: number}} limit
     */
    static increaseNumericalSetting(
        dataKey,
        step,
        limit = { min: Number.MIN_SAFE_INTEGER, max: Number.MAX_SAFE_INTEGER }
    ) {
        const newNumber = NumericalSetting.data[dataKey] + step;
        NumericalSetting.setNumericalSetting(dataKey, newNumber, limit);
    }

    /**
     *
     * @param {string} dataKey
     * @param {number} step
     * @param {{min: number, max: number}} limit
     */
    static decreaseNumericalSetting(
        dataKey,
        step,
        limit = { min: Number.MIN_SAFE_INTEGER, max: Number.MAX_SAFE_INTEGER }
    ) {
        const newNumber = NumericalSetting.data[dataKey] - step;
        NumericalSetting.setNumericalSetting(dataKey, newNumber, limit);
    }

    static addEventListener() {
        $(".numerical-setting-container").each(function () {
            const dataKey = $(this).attr("data-binding") ?? "";
            const step = parseInt($(this).attr("step") ?? "1");
            const min = parseInt($(this).attr("min") ?? Number.MIN_SAFE_INTEGER.toString());
            const max = parseInt($(this).attr("max") ?? Number.MAX_SAFE_INTEGER.toString());
            const limit = { min, max };
            $(this)
                .children(".btn-group")
                .children()
                .each(function () {
                    const action = $(this).attr("action");
                    if (action === "increase") {
                        $(this).on("click", function () {
                            NumericalSetting.increaseNumericalSetting(dataKey, step, limit);
                        });
                    } else if (action === "decrease") {
                        $(this).on("click", function () {
                            NumericalSetting.decreaseNumericalSetting(dataKey, step, limit);
                        });
                    }
                });
        });
    }

    static removeEventListener() {
        $(".numerical-setting-container button").each(function () {
            $(this).off("click");
        });
    }
}

class StatTable {
    static data = {
        "perfect-count": 0,
        "good-count": 0,
        "miss-count": 0,
        "combo-count": 0,
        "max-combo-count": 0,
    };
    constructor() {}

    static sideEffectForSettingCombo() {
        if (StatTable.data["combo-count"] > StatTable.data["max-combo-count"]) {
            StatTable.setStatTableData("max-combo-count", StatTable.data["combo-count"]);
        }
    }

    /**
     *
     * @param {string} dataKey
     * @param {number} newNumber
     */
    static setStatTableData(dataKey, newNumber) {
        StatTable.data[dataKey] = newNumber;
        $(`#game-stat-container table tbody tr td[data-binding=${dataKey}]`).text(StatTable.data[dataKey].toString());

        if (dataKey === "combo-count") {
            StatTable.sideEffectForSettingCombo();
        }
    }

    /**
     *
     * @param {string} dataKey
     */
    static addStatTableData(dataKey) {
        const newNumber = StatTable.data[dataKey] + 1;
        StatTable.setStatTableData(dataKey, newNumber);
    }
}

class SwitchSetting {
    static data = {
        "check-left-right-shift": true,
        punctuation: true,
        digit: true,
        ALPHABET: true,
        alphabet: true,
    };
    constructor() {}
    static addEventListener() {
        $(".switch-container").each(function () {
            const dataKey = $(this).attr("data-binding") ?? "";
            $(this)
                .find("input")
                .first()
                .on("change", function () {
                    SwitchSetting.update(dataKey, $(this).prop("checked"));
                    if (
                        dataKey === "alphabet" ||
                        dataKey === "ALPHABET" ||
                        dataKey === "digit" ||
                        dataKey === "punctuation"
                    ) {
                        LettersForEachFinger.updateLettersForEachFinger();
                    }
                });
        });
    }

    static removeEventListener() {
        $(".switch-container").each(function () {
            $(this).find("input").first().off("change");
        });
    }

    /**
     *
     * @param {string} dataKey
     * @param {boolean} value
     */
    static update(dataKey, value) {
        SwitchSetting.data[dataKey] = value;
    }
}

class LettersForEachFinger {
    static data = {
        leftLittle: ["1", "q", "a", "z", "!", "Q", "A", "Z"],
        leftRing: ["2", "w", "s", "x", "@", "W", "S", "X"],
        leftMiddle: ["3", "e", "d", "c", "#", "E", "D", "C"],
        leftIndex: ["4", "r", "f", "v", "5", "t", "g", "b", "$", "R", "F", "V", "%", "T", "G", "B"],
        rightIndex: ["6", "y", "h", "n", "7", "u", "j", "m", "^", "Y", "H", "N", "&", "U", "J", "M"],
        rightMiddle: ["8", "i", "k", ",", "*", "I", "K", "<"],
        rightRing: ["9", "o", "l", ".", "(", "O", "L", ">"],
        rightLittle: ["0", "p", ";", "/", ")", "P", ":", "?"],
    };
    constructor() {}

    static updateLettersForEachFinger() {
        for (let key in LettersForEachFinger.data) {
            LettersForEachFinger.data[key] = [];
        }
        for (let key in KeyData.data) {
            const type = KeyData.data[key].type;
            if (SwitchSetting.data[type]) {
                const finger = KeyData.data[key].finger;
                LettersForEachFinger.data[finger].push(key);
            }
        }
    }
}

/**
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFinger() {
    return fingers[randomInt(0, 7)];
}

/**
 *
 * @param {string} finger
 * @returns {string}
 */
function randomLetter(finger) {
    const letters = LettersForEachFinger.data[finger];
    return letters[randomInt(0, letters.length - 1)];
}

/**
 *
 * @param {number} idx
 */
function getZIndex(idx) {
    return 1000 - (idx % 1000);
}

/**
 *
 * @param {string} finger
 * @param {number} letterDivHeight
 * @param {number} idx
 * @returns {JQuery<HTMLElement>}
 */
function generateNewLetter(finger, letterDivHeight, idx) {
    const letterDivHeightStr = letterDivHeight.toString() + "px";

    let newElement = $("<div class='letter'></div>")
        .css({ height: letterDivHeightStr, top: "-" + letterDivHeightStr, zIndex: getZIndex(idx) })
        .text(randomLetter(finger));

    return newElement;
}

/**
 *
 * @param {string} type
 */
function toggleSettingWhenStartOrStop(type) {
    const bool = type === "start" ? true : false;
    $("#kpm-setting-container button").prop("disabled", bool);
    $("#letter-speed-setting-container button").prop("disabled", bool);
    $("#letter-div-height-setting-container button").prop("disabled", bool);
    $("#check-left-right-shift-setting-container input").prop("disabled", bool);
    $("#start-practice-btn").prop("disabled", bool);
    $("#stop-practice-btn").prop("disabled", !bool);
}

/**
 *
 * @param {number} kpm
 * @param {number} letterSpeed
 * @param {number} letterDivHeight
 * @param {any} trackMap
 * @param {number} trackHeight
 * @param {boolean} checkLeftRightShift
 */
function startPractice(kpm, letterSpeed, letterDivHeight, trackMap, trackHeight, checkLeftRightShift) {
    let idx = 0;
    let shiftKeyIsPressing = "";
    const timeInterval = (1 / (kpm / 60)) * 1000;
    const perfectRange = [trackHeight - 2 * letterDivHeight, trackHeight - letterDivHeight];

    const intervalId = window.setInterval(() => {
        let finger = randomFinger();
        let newLetter = generateNewLetter(finger, letterDivHeight, idx++);
        $(trackMap[finger]).append(newLetter);
        $(newLetter).animate(
            { top: trackHeight + letterDivHeight },
            ((trackHeight + letterDivHeight) / letterSpeed) * 1000,
            "linear",
            function () {
                StatTable.addStatTableData("miss-count");
                StatTable.setStatTableData("combo-count", 0);
                $(newLetter).remove();
            }
        );
    }, timeInterval);

    $(document).on("keydown", function (e) {
        if (e.code === "ShiftLeft" && shiftKeyIsPressing !== "left") {
            shiftKeyIsPressing = "left";
        } else if (e.code === "ShiftRight" && shiftKeyIsPressing !== "right") {
            shiftKeyIsPressing = "right";
        }
    });

    $(document).on("keyup", function (e) {
        if (e.code === "ShiftLeft" || e.code === "ShiftRight") {
            shiftKeyIsPressing = "";
            return;
        }

        const finger = KeyData.getFinger(e.key);
        if (finger) {
            const track = trackMap[finger];
            const firstChild = $(track).children().first();
            if (e.key === $(firstChild).text()) {
                if (checkLeftRightShift) {
                    if (KeyData.data[e.key].shiftFinger !== shiftKeyIsPressing) {
                        return;
                    }
                }

                const top = parseInt($(firstChild).css("top").replace("px", ""));
                if (top >= perfectRange[0] && top <= perfectRange[1]) {
                    StatTable.addStatTableData("perfect-count");
                    StatTable.addStatTableData("combo-count");
                    $(firstChild).stop().remove();
                } else {
                    StatTable.addStatTableData("good-count");
                    StatTable.addStatTableData("combo-count");
                    $(firstChild).stop().remove();
                }
            }
        }
    });

    return intervalId;
}

// $(document).ready
$(function () {
    let intervalId = 0;
    let trackHeight = $("#track-container").height() ?? 0;
    let trackMap = {
        leftLittle: $("#left-little-track"),
        leftRing: $("#left-ring-track"),
        leftMiddle: $("#left-middle-track"),
        leftIndex: $("#left-index-track"),
        rightIndex: $("#right-index-track"),
        rightMiddle: $("#right-middle-track"),
        rightRing: $("#right-ring-track"),
        rightLittle: $("#right-little-track"),
    };

    SwitchSetting.addEventListener();
    NumericalSetting.addEventListener();

    $("#start-practice-btn").on("click", function () {
        if (intervalId === 0) {
            const kpm = NumericalSetting.data["kpm"];
            const letterSpeed = NumericalSetting.data["letter-speed"];
            const letterDivHeight = NumericalSetting.data["letter-div-height"];
            const checkLeftRightShift = SwitchSetting.data["check-left-right-shift"];
            intervalId = startPractice(kpm, letterSpeed, letterDivHeight, trackMap, trackHeight, checkLeftRightShift);
            toggleSettingWhenStartOrStop("start");
        }
    });

    $("#stop-practice-btn").on("click", function () {
        if (intervalId !== 0) {
            window.clearInterval(intervalId);
            intervalId = 0;
        }
        $(document).off("keydown");
        $(document).off("keyup");

        $(".letter").stop().remove();
        toggleSettingWhenStartOrStop("stop");
    });
});

// #region for debugging

// let debugData = {};

// const lettersForEachFingerDebug = Object.freeze({
//     leftLittle: ["1", "q", "a", "z", "!", "Q", "A", "Z"],
//     leftRing: ["2", "w", "s", "x", "@", "W", "S", "X"],
//     leftMiddle: ["3", "e", "d", "c", "#", "E", "D", "C"],
//     leftIndex: ["4", "r", "f", "v", "5", "t", "g", "b", "$", "R", "F", "V", "%", "T", "G", "B"],
//     rightIndex: ["6", "y", "h", "n", "7", "u", "j", "m", "^", "Y", "H", "N", "&", "U", "J", "M"],
//     rightMiddle: ["8", "i", "k", ",", "*", "I", "K", "<"],
//     rightRing: ["9", "o", "l", ".", "(", "O", "L", ">"],
//     rightLittle: ["0", "p", ";", "/", ")", "P", ":", "?"],
// });

// /**
//  *
//  * @param {string} key
//  * @returns {string}
//  */
// function generateFinger(key) {
//     const finger = Object.keys(lettersForEachFingerDebug).find((finger) =>
//         lettersForEachFingerDebug[finger].includes(key)
//     );
//     return finger ?? "no-data";
// }

// $(document).on("keyup", function (e) {
//     console.log(e.key);
//     console.log(e);
//     const obj = {
//         key: e.key,
//         code: e.code,
//         shiftKey: e.shiftKey,
//         finger: generateFinger(e.key),
//         shiftFinger: e.shiftKey ? (generateFinger(e.key).includes("left") ? "left" : "right") : "",
//     };
//     debugData[e.key] = obj;
// });

// let all = Object.values(KeyData.data);
// console.log(`all.length`, all.length);

// let alphabet = [];
// let ALPHABET = [];
// let digit = [];
// let punctuation = [];

// for (let x of all) {
//     if (x.key.match(/[a-z]/)) {
//         alphabet.push(x);
//     } else if (x.key.match(/[A-Z]/)) {
//         ALPHABET.push(x);
//     } else if (x.key.match(/[0-9]/)) {
//         digit.push(x);
//     } else {
//         punctuation.push(x);
//     }
// }

// console.log(`alphabet`, alphabet);
// console.log(`ALPHABET`, ALPHABET);
// console.log(`digit`, digit);
// console.log(`punctuation`, punctuation);

// console.log(`alphabet.length`, alphabet.length);
// console.log(`ALPHABET.length`, ALPHABET.length);
// console.log(`digit.length`, digit.length);
// console.log(`punctuation.length`, punctuation.length);
// console.log(`sum of length`, alphabet.length + ALPHABET.length + digit.length + punctuation.length);

// function checkDigits() {
//     const digits = [];

//     for (let myKey in KeyData.data) {
//         if (KeyData.data[myKey].type === "digit") {
//             digits.push(KeyData.data[myKey]);
//         }
//     }

//     digits.sort((a, b) => parseInt(a.key) - parseInt(b.key));
//     console.log(
//         `checkDigits ~ digits.key`,
//         digits.map((x) => x.key)
//     );
//     console.log("check length", digits.length === 10);
//     console.log(
//         "check shift",
//         digits.every((x) => x.shiftKey === false && x.shiftFinger === "")
//     );
// }
// checkDigits();

// function checkAlphabet() {
//     const alphabet = [];

//     for (let myKey in KeyData.data) {
//         if (KeyData.data[myKey].type === "alphabet") {
//             alphabet.push(KeyData.data[myKey]);
//         }
//     }

//     alphabet.sort((a, b) => a.key.localeCompare(b.key));
//     console.log(
//         `checkAlphabet ~ alphabet.key`,
//         alphabet.map((x) => x.key)
//     );
//     console.log("check length", alphabet.length === 26);
//     console.log(
//         "check shift",
//         alphabet.every((x) => x.shiftKey === false && x.shiftFinger === "")
//     );
// }
// checkAlphabet();

// function checkALPHABET() {
//     const ALPHABET = [];

//     for (let myKey in KeyData.data) {
//         if (KeyData.data[myKey].type === "ALPHABET") {
//             ALPHABET.push(KeyData.data[myKey]);
//         }
//     }

//     ALPHABET.sort((a, b) => a.key.localeCompare(b.key));
//     console.log(
//         `checkALPHABET ~ ALPHABET.key`,
//         ALPHABET.map((x) => x.key)
//     );
//     console.log("check length", ALPHABET.length === 26);
//     console.log(
//         "check shift",
//         ALPHABET.every((x) => (x.shiftKey === true && x.shiftFinger === "left") || "right")
//     );
// }
// checkALPHABET();

// #endregion
