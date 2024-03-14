import { ProjectItemProps } from './projectItem.types.ts'

const ProjectItem = ({ name, url, description,highlights }: ProjectItemProps) => (
	<li>
		<article className="project">
			<header className="project-header">
				<h4 className="project-name">
					<a href={url}
					   target="_blank"
					   title={`Ver el repositorio del proyecto ${name}`}>
						{name}
					</a>
				</h4>
				<p className="description">{description}</p>
			</header>
			<footer className="project-footer">
				{highlights.map((highlight) => (
					<span className="highlight">{highlight}</span>
				))}
			</footer>
		</article>
	</li>
)

export default ProjectItem
