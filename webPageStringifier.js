function turnWebPageIntoString() {
    let thisDocument = new XMLSerializer().serializeToString(document.documentElement);
    let styleTempArray = [];
    thisDocument = thisDocument.replaceAll("<\/style", "<style");
    styleTempArray = thisDocument.split('<style');
    for (let i = 0; i < styleTempArray.length; i++) {
        if ((i + 1) % 2 === 0) {
            styleTempArray[i] = styleTempArray[i].replaceAll('&gt;', '>');
            styleTempArray[i] = styleTempArray[i].replaceAll('&lt;', '<');
            styleTempArray[i] = styleTempArray[i].replaceAll('&amp;', '&');
        }
    }
    thisDocument = '';
    for (let i = 0; i < styleTempArray.length - 1; i++) {
        if (i % 2 == 0) {
            thisDocument += styleTempArray[i] + '<style';
        } else {
            thisDocument += styleTempArray[i] + '<\/style';
        }
    }
    thisDocument += styleTempArray[styleTempArray.length - 1];
    let scriptTempArray = [];
    thisDocument = thisDocument.replaceAll("<\/script", "<script");
    scriptTempArray = thisDocument.split('<script');
    for (let i = 0; i < scriptTempArray.length; i++) {
        if ((i + 1) % 2 === 0) {
            scriptTempArray[i] = scriptTempArray[i].replaceAll('&gt;', '>');
            scriptTempArray[i] = scriptTempArray[i].replaceAll('&lt;', '<');
            scriptTempArray[i] = scriptTempArray[i].replaceAll('&amp;', '&');
        }
    }
    thisDocument = '';
    for (let i = 0; i < scriptTempArray.length - 1; i++) {
        if (i % 2 === 0) {
            thisDocument += scriptTempArray[i] + '<script';
        } else {
            thisDocument += scriptTempArray[i] + '<\/script';
        }
    }
    thisDocument += scriptTempArray[scriptTempArray.length - 1];
    return thisDocument;
}
