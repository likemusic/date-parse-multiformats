import {parse} from 'date-format-parse';


function getMatchedByLengthFormats(str, formats) {
    const strLength = str.length;

    const matched = formats.filter((format) => strLength <= format.length);

    matched.sort();

    return matched;
}

export default function parseMultiFormats(
    str,
    formats,
    options = {}
) {
    str = str.trim();

    const matchedByLengthFormats = getMatchedByLengthFormats(str, formats);

    let result = new Date(NaN);

    for (let format of matchedByLengthFormats) {
        result = parse(str, format, options);

        if(!isNaN(result.valueOf())) {
            return result;
        }
    }

    return result;
}
