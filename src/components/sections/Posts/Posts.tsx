import PostItem from './PostItem/PostItem.tsx'
import { posts } from '../../../data/posts.json'
import './Posts.scss'

const Posts = () => (
	<section className="container">
		<ul className="posts-list">
			{posts.map(({ title, publishedDate, publishedWeb, url}) => (
				<PostItem key={`post-${title}`}
				          title={title}
				          publishedDate={publishedDate}
				          publishedWeb={publishedWeb}
				          url={url} />
			))}
		</ul>
	</section>
)

export default Posts
