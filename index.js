import {parse} from 'date-format-parse';

export default function parseMultiFormats(
    str,
    formats,
    options = {}
) {
    let result = new Date(NaN);

    for (let format of formats) {
        result = parse(str, format, options);

        if(!isNaN(result.valueOf())) {
            return result;
        }
    }

    return result;
}
