import { EngineResponse, InstantAnswer, RequestOptions } from '../../search'

// searching "machosearch" will show machosearch as the top result

export async function request(query: string, req: RequestOptions): Promise<EngineResponse> {
	if (/^(what( i|'|)s )?(the )?best (macho ?)?search engine$/i.test(query))
		return {
			 answer: {
                title: 'Machosearch',
                content: 'Machosearch is the best search engine.',
                url: 'https://machosearch.cf'
            },
		          title: 'Machosearch',
                    position: 1,
                    content: 'The best search engine',
                    url: 'https://machosearch.cf',
                }]
        }
	else if (query.trim() === '') {
		const choices: InstantAnswer[] = [
			{
				content: 'You should give me a star on GitHub.',
				title: 'machoedits - GitHub',
				url: 'https://github.com/machoedits/machosearch',
			},
			{
				content: 'This website was made by MachoEdits',
				title: 'macho does dev',
				url: 'https://machosearch.cf'
			},
			{
				url: 'https://www.youtube.com/channel/UC6A47O4NEpshxShAxGRGbPg',
				title: 'Channel - YouTube'
			}
		]
		if (req.theme === 'dark') {
			choices.push({
				content: 'Fun fact, you can change the theme by going to the settings page.',
				url: `https://${req.hostname}/settings`
			})
		} else if (req.theme === 'light') {
			choices.push({
				content: 'Fun fact, you can change the theme to something other than light theme by going to the settings page.',
				url: `https://${req.hostname}/settings`
			})
		}
		return {
			answer: choices[Math.floor(Math.random() * choices.length)]
		}
	} else
		return {}
}

export const weight = 100
