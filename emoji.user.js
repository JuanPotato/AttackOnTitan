// ==UserScript==
// @name         Better Emoji for Oneplus
// @namespace    awkward_potato
// @version      1.7
// @description  Allows you to use different emoji icons on Oneplus forums
// @author       awkward_potato
// @match        *.oneplus.net/*
// @include      *.oneplus.net/*
// @grant        none
// ==/UserScript==

/* ------------ EMOJI TEMPLATE ------------- */
function Emoji(source, classname) {
    $('li.smilieCategory').find('ul')
    .append($('<li></li>')
            .append($('<img>')
                    .attr({
                        src: source,
                        'data-smilie': "yes",
                    }).addClass(classname)
                   ).addClass("Smilie")
           );
}

/* ------------ DEFINE EMOJIS ------------- */
function EmojiIcons(){
    var emojis = [
        //default
        "http://goo.gl/HrY6yw", "http://goo.gl/OxQSlw", "http://goo.gl/S90Mpd", "http://goo.gl/FSqhC6", "http://goo.gl/OA4tlV", "http://goo.gl/ioOryw", "http://goo.gl/7NHGsb",
        "http://goo.gl/lhT12t", "http://goo.gl/NIhKiV", "http://goo.gl/w12qxA", "http://goo.gl/EQxRK2", "http://goo.gl/yUJ5Om", "http://goo.gl/HqjkJU", "http://goo.gl/hOKn2f",
        "http://goo.gl/Snbaq9", "http://goo.gl/5TL6xo", "http://goo.gl/0Mdn7T", "http://goo.gl/OQexw4", "http://goo.gl/Lzb3jy", "http://goo.gl/h5EpC5", "http://goo.gl/D7Z5mZ",
        "http://goo.gl/Z30dgk", "http://goo.gl/7YaEIJ", "http://goo.gl/SgmZvi", "http://goo.gl/cmelDX", "http://goo.gl/kpBc8t", "http://goo.gl/uYPvMc", "http://goo.gl/gqlWsQ",
        //Xat
        ,"http://i.imgur.com/usDwzaJ.gif", "http://i.imgur.com/Pf3Hb6O.gif",
        //hangouts
        "http://goo.gl/HZq4uC", "http://goo.gl/VOytbJ", "http://goo.gl/dv3Nv5", "http://goo.gl/tIINB4", "http://goo.gl/d1q9WR", "http://goo.gl/1e8JCx", "http://goo.gl/0a6kAJ",
        "http://goo.gl/v9u5J1", "http://goo.gl/bXE8nN", "http://goo.gl/efukV8", "http://goo.gl/1VAEGw", "http://goo.gl/r2B5qw", "http://goo.gl/SD3sC3", "http://goo.gl/czonul",
        "http://goo.gl/z5ErQj", "http://goo.gl/S99dof", "http://goo.gl/GnW5oE", "http://goo.gl/4aQzLt", "http://goo.gl/bCvuC2", "http://goo.gl/3J3RJW", "http://goo.gl/osJxFu",
        "http://goo.gl/6yCxiL", "http://goo.gl/MY9rlk", "http://goo.gl/eo01DP", "http://goo.gl/0t9uHF", "http://goo.gl/KqJOzH", "http://goo.gl/hhOlhg", "http://goo.gl/C5Sw3Y",
        "http://goo.gl/BjBIev", "http://goo.gl/I65ORq", "http://goo.gl/XiPq8Y", "http://goo.gl/CGjNQ2", "http://goo.gl/pGSXub", "http://goo.gl/cmKHxv", "http://goo.gl/hNfSRK",
        "http://goo.gl/REt5HP", "http://goo.gl/XCGDrd", "http://goo.gl/IqbhHG", "http://goo.gl/wN7CZ1", "http://goo.gl/qqkgQn", "http://goo.gl/Lo5jzu", "http://goo.gl/C77mtd",
        "http://goo.gl/S9yxL7", "http://goo.gl/F4L2cV", "http://goo.gl/zqq0e1", "http://goo.gl/vYa4bK", "http://goo.gl/3uiKcM", "http://goo.gl/MHCyhP", "http://goo.gl/SxBOlj",
        "http://goo.gl/d8aKGP", "http://goo.gl/uIVLCS", "http://goo.gl/7fV4gu", "http://goo.gl/zBdxrq", "http://goo.gl/SxgfRt", "http://goo.gl/lt1oGM", "http://goo.gl/6YAuCh",
        "http://goo.gl/LummhV", "http://goo.gl/pnWq7S", "http://goo.gl/WQsLe6", "http://goo.gl/GqHv8y", "http://goo.gl/0fDwd9", "http://goo.gl/u81T7n", "http://goo.gl/aDTZsN",
        "http://goo.gl/UNnHh1", "http://goo.gl/R1TxYS", "http://goo.gl/b9HSlk", "http://goo.gl/6N3drU", "http://goo.gl/B5EwKd", "http://goo.gl/iey5yJ", "http://goo.gl/gPkXvs",
        "http://goo.gl/ov0dst", "http://goo.gl/F06JR1", "http://goo.gl/VSCXei", "http://goo.gl/VcdTVD", "http://goo.gl/fdTUq5", "http://goo.gl/xSdpwL", "http://goo.gl/pjg88c",
        "http://goo.gl/L0VcDy", "http://goo.gl/oFkbHN", "http://goo.gl/iuGTkT",
        // Other1
        "http://goo.gl/yBSVDo", "http://goo.gl/Rwn7VL", "http://goo.gl/Ce7JuV", "http://goo.gl/F8fbON", "http://goo.gl/Nr3GpU", "http://goo.gl/UqRSrs", "http://goo.gl/AoQ6QR",
        "http://goo.gl/GAmijb", "http://goo.gl/DDGRxf", "http://goo.gl/kGvOuw", "http://goo.gl/GE23xt", "http://goo.gl/8QG44N", "http://goo.gl/Q7viYU", "http://goo.gl/UIW4ZK",
        "http://goo.gl/yHejwo", "http://goo.gl/cpUjhK", "http://goo.gl/76H6Bd", "http://goo.gl/gh4cx2", "http://goo.gl/dB6tzD", "http://goo.gl/kbPd0s", "http://goo.gl/E5Snxo",
        "http://goo.gl/Xr283t", "http://goo.gl/1qyU2E", "http://goo.gl/GUWyB9", "http://goo.gl/oMyDyo", "http://goo.gl/ur8KhT", "http://goo.gl/58PiqR", "http://goo.gl/DfEoe4",
        "http://goo.gl/v5wkbT", "http://goo.gl/XJFcaK", "http://goo.gl/eAyiCr", "http://goo.gl/7c6TRg", "http://goo.gl/QFCNDU", "http://goo.gl/Io7A0o", "http://goo.gl/0VnoYi",
        "http://goo.gl/CjvxUA", "http://goo.gl/lbZnLl", "http://goo.gl/AcLlCT", "http://goo.gl/eESXru", "http://goo.gl/rq1zSk", "http://goo.gl/1w0MG8", "http://goo.gl/eG7Sb3",
        "http://goo.gl/iUZDSk", "http://goo.gl/bp37Nn", "http://goo.gl/TSAFN8", "http://goo.gl/BeVAeX", "http://goo.gl/pb0OSV", "http://goo.gl/VUkNlN", "http://goo.gl/ICK0ok",
        "http://goo.gl/COEBT6", "http://goo.gl/YRSTMF", "http://goo.gl/Xj28FC", "http://goo.gl/6r8fFd", "http://goo.gl/zxM3PH", "http://goo.gl/mb52lO", "http://goo.gl/MiBgWP",
        "http://goo.gl/fNNptb", "http://goo.gl/feCWXp", "http://goo.gl/hN6QQn", "http://goo.gl/vGXBCt", "http://goo.gl/H9qG6G", "http://goo.gl/lP1q2z", "http://goo.gl/cV0n8z",
        "http://goo.gl/HdZ17C", "http://goo.gl/5pTra0", "http://goo.gl/7vJTqE", "http://goo.gl/bLH9Ho", "http://goo.gl/0jUOQc", "http://goo.gl/X8ZqLb", "http://goo.gl/41a2wY",
        "http://goo.gl/SHzrmf", "http://goo.gl/fD62Sh", "http://goo.gl/oEWZkr", "http://goo.gl/ggJyy3", "http://goo.gl/2LbFwO", "http://goo.gl/3F5R3T", "http://goo.gl/IbdSui",
        "http://goo.gl/16hFXb", "http://goo.gl/4lXYq5", "http://goo.gl/Q1vlKG", "http://goo.gl/dq0aCk",
        // Skype
        "http://goo.gl/a8Rbke", "http://goo.gl/35DQaY", "http://goo.gl/PZ6yDZ", "http://goo.gl/nZZdXN", "http://goo.gl/mUa5M7", "http://goo.gl/qwZ81D", "http://goo.gl/GIuI9q",
        "http://goo.gl/JhTSii", "http://goo.gl/CSNcEy", "http://goo.gl/CeVrB4", "http://goo.gl/pM2sl" , "http://goo.gl/UZOG1v", "http://goo.gl/kudJ0f", "http://goo.gl/EvD5Fx",
        "http://goo.gl/QDo9iQ", "http://goo.gl/OAMdF9", "http://goo.gl/VdJNI9", "http://goo.gl/yWVWFH", "http://goo.gl/wabZs" , "http://goo.gl/S2RxiQ", "http://goo.gl/w87vgO", 
        "http://goo.gl/MsPbzV", "http://goo.gl/pxAVa7", "http://goo.gl/920Wn5", "http://goo.gl/vy4fSM", "http://goo.gl/fhlznW", "http://goo.gl/cSCrij", "http://goo.gl/PEUb0m", 
        "http://goo.gl/WVI69v", "http://goo.gl/0DYsTV", "http://goo.gl/9vpRLu", "http://goo.gl/cAALnJ", "http://goo.gl/fTTl0d", "http://goo.gl/pNU3"  , "http://goo.gl/1ucXyc", 
        "http://goo.gl/oqoS"  , "http://goo.gl/AyFhQh", "http://goo.gl/i0rOhZ", "http://goo.gl/FTga4f", "http://goo.gl/5AUukM", "http://goo.gl/vFcAcY", "http://goo.gl/gyhyBz",
        "http://goo.gl/X9ttHt", "http://goo.gl/HJJW0Y", "http://goo.gl/LIq8Kz", "http://goo.gl/TRx7Q" , "http://goo.gl/JTzdtr", "http://goo.gl/6z8SdK", "http://goo.gl/OlyJlp", 
        "http://goo.gl/RIFkx5", "http://goo.gl/pY4KD3", "http://goo.gl/h3nnec", "http://goo.gl/PfNNwO", "http://goo.gl/JCKgNg", "http://goo.gl/TZeaMV", "http://goo.gl/9x46rA", 
        "http://goo.gl/z7rn0Y", "http://goo.gl/eYDmgT", "http://goo.gl/TqcNiE", "http://goo.gl/18JlTu", "http://goo.gl/OKTKhO", "http://goo.gl/zMG6hh", "http://goo.gl/WzftTA", 
        "http://goo.gl/OZfrjv", "http://goo.gl/ivt3te", "http://goo.gl/D2UwMV", "http://goo.gl/7xbwDf", "http://goo.gl/H0617" , "http://goo.gl/rjUIME", "http://goo.gl/pIJnwC", 
        "http://goo.gl/sKGUIK", "http://goo.gl/jrhDc5", "http://goo.gl/3ovxzQ", "http://goo.gl/TG8sgx", "http://goo.gl/uFhzD9", "http://goo.gl/n0xroL", "http://goo.gl/J1RxOP",
        "http://goo.gl/5MllxU", "http://goo.gl/BGsUs0", "http://goo.gl/ZCFavc", "http://goo.gl/eiGYAq", "http://goo.gl/0b64qx", "http://goo.gl/1UA1OV", "http://goo.gl/Gxqs4x", 
        //other2
        "http://goo.gl/FZCqgn", "http://goo.gl/CNISKd", "http://goo.gl/l6YMhc", "http://goo.gl/WhkaO8", "http://goo.gl/WhkaO8", "http://goo.gl/LwPfjd", "http://goo.gl/GwZ1TE",
        "http://goo.gl/NPve2U", "http://goo.gl/ItaJnT", "http://goo.gl/7aH570", "http://goo.gl/Ma305P", "http://goo.gl/pUX2M1", "http://goo.gl/xEwqLH", "http://goo.gl/B7ItMk",
        "http://goo.gl/aQEExf", "http://goo.gl/KwDJhn", "http://goo.gl/R5iAJ7", "http://goo.gl/u1f4nA", "http://goo.gl/7fGYUr", "http://goo.gl/exXOHb", "http://goo.gl/O3OtgT",
        "http://goo.gl/SGebxT", "http://goo.gl/gNBWJf", "http://goo.gl/ve8bI9", "http://goo.gl/gjtflK", "http://goo.gl/O0poza", "http://goo.gl/SYlK2B", "http://goo.gl/GPPqB5",
        "http://goo.gl/LhWzB6"];
    for(a=0;a<emojis.length;a++){
        new Emoji(emojis[a], "emoji");
    }
}

// Creates the new emoji when emoji button is clicked
var writeEmoji = setInterval(function(){
    if($('div.redactor_smilies').is(':visible')) {
        console.log("running hfemoji");
        EmojiIcons();
        clearInterval(writeEmoji);
    }
}, 300);
