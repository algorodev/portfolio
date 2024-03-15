import ProjectItem from './ProjectItem/ProjectItem.tsx'
import { projects } from '../../../data/cv.json'
import './Projects.scss'

const Projects = () => (
		<section className="container">
			<ul className="project-list">
				{projects.map(({ name, url, description, highlights }) => (
					<ProjectItem name={name}
					             url={url}
					             description={description}
					             highlights={highlights} />
				))}
			</ul>
		</section>
	)

export default Projects
