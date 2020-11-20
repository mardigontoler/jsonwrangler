var deepJsonParse = {
    deepParse(originalJson){
        console.log('parsing ...');
        let currentParsed;
        try {
            currentParsed = JSON.parse(originalJson);
        } catch (e) {
            console.log(e);
        }
        let keepParsing = true;
        while(keepParsing) {
            try {
                currentParsed = JSON.parse(currentParsed);
                console.log('parsed again ... ');
            } catch (e) {
                console.log('Cannot parse anymore.');
                keepParsing = false;
            }
        }
        return  JSON.stringify(currentParsed, null, 2);
    }
}
export default deepJsonParse;