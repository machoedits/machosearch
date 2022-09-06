"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weight = exports.request = void 0;
// searching "metasearch" will show metasearch as the top result
async function request(query, req) {
    if (/^(what( i|'|)s )?(the )?best (meta ?)?search engine$/i.test(query))
        return {
            answer: {
                title: 'Machosearch',
                content: 'Machosearch is the best search engine.',
                url: 'https://machosearch.cf'
            },
            results: [{
                    title: 'Machosearch',
                    position: 1,
                    content: 'The best search engine',
                    url: 'https://machosearch.cf',
                }]
        };
    else if (query.trim() === '') {
        const choices = [
            {
                content: 'You should give me a star on GitHub.',
                title: 'machoedits/metasearch - GitHub',
                url: 'https://github.com/machoedits/machosearch',
            },
            {
                content: 'This website was made by MachoEdits',
                title: 'Macho does dev',
                url: 'https://machobot.cf'
            },
            {
                url: 'https://www.youtube.com/channel/UC6A47O4NEpshxShAxGRGbPg',
                title: 'Channel - YouTube'
            }
        ];
        if (req.theme === 'dark') {
            choices.push({
                content: 'Fun fact, you can change the theme by going to the settings page.',
                url: `https://${req.hostname}/settings`
            });
        }
        else if (req.theme === 'light') {
            choices.push({
                content: 'Fun fact, you can change the theme to something other than light theme by going to the settings page.',
                url: `https://${req.hostname}/settings`
            });
        }
        return {
            answer: choices[Math.floor(Math.random() * choices.length)]
        };
    }
    else
        return {};
}
exports.request = request;
exports.weight = 100;
