const Templates = require("./templates");

function prepareData (data) {
    if (data)
        return {
            header: Templates.header,
            footer: Templates.footer,
            ...data
        };
    return {
        header: Templates.header,
        footer: Templates.footer
    };
}

module.exports = prepareData;