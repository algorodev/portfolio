import PostItem from './PostItem/PostItem.tsx'
import { posts } from '../../../data/cv.json'
import './Posts.scss'

const Posts = () => (
	<section className="container">
		<ul className="posts-list">
			{posts.map(({ title, publishedDate, url}) => (
				<PostItem key={`post-${title}`}
				          title={title}
				          publishedDate={publishedDate}
				          url={url} />
			))}
		</ul>
	</section>
)

export default Posts
