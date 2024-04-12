import { PostItemProps } from './postItem.types.ts'

const PostItem = ({ title, publishedDate, publishedWeb, url }: PostItemProps) => (
	<li>
		<a href={url}
		   target="_blank"
		   title={`Read ${title} post on ${publishedWeb}`}>
			<article className="post">
				<header className="post-header">
					<h4 className="post-title">{title}</h4>
				</header>
				<footer className="post-footer">
					<time>{publishedDate}</time>
				</footer>
			</article>
		</a>
	</li>
)

export default PostItem
