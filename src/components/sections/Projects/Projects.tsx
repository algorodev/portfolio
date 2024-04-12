import ProjectItem from './ProjectItem/ProjectItem.tsx'
import { projects } from '../../../data/projects.json'
import './Projects.scss'

const Projects = () => (
		<section className="container">
			<ul className="project-list">
				{projects.map(({ description, highlights, name, publishedUrl, repositoryUrl }) => (
					<ProjectItem key={`project-${name}`}
					             description={description}
					             highlights={highlights}
					             name={name}
					             publishedUrl={publishedUrl}
											 repositoryUrl={repositoryUrl} />
				))}
			</ul>
		</section>
	)

export default Projects
