import React from 'react';

import Icons from './Icons'
import links from './content'

import * as S from './styles'

const SocialLinks = () => (
	<S.ScialLinksWrapper>
		<S.SocilaLinkList>
			{links.map((link, i) => {
				const Icon = Icons[link.label]
				
				return (
					<S.SocialLinkItem key={i}>
						<S.Label> {link.label} </S.Label>
						<S.Desc> { link.desc } </S.Desc>
							<S.SocialLinkLink 
								href={link.url} 
								title={link.label} 
								target="_blank" 
								rel="noopener noreferer">
								<S.IconWrapper>
									<Icon />
								</S.IconWrapper>
							</S.SocialLinkLink>
					</S.SocialLinkItem>
				)
			})}
		</S.SocilaLinkList>
	</S.ScialLinksWrapper>
)

export default SocialLinks