import ProjectItem from './ProjectItem/ProjectItem.tsx'
import './Projects.scss'

const Projects = () => {
	const projects: { name: string, url: string, description: string, highlights: string[] }[] = [
		{
			name: 'Portfolio',
			url: 'https://github.com/algorodev/portfolio',
			description: 'Personal portfolio created with HTML, CSS, React, Vite and TypeScript.',
			highlights: ['Portfolio']
		},
		{
			name: 'Auth API',
			url: 'https://github.com/algorodev/auth-api',
			description: 'Authentication API created with NodeJS, Express, TypeScript and PostgreSQL.',
			highlights: ['REST API', 'API Documentation', 'Authentication']
		},
		{
			name: 'Hackerrank Challenges',
			url: 'https://github.com/algorodev/hackerrank-challenges',
			description: 'Solved Hackerrank Challenges using JavaScript and Python.',
			highlights: ['Algorithms', 'Problem Solving', 'Data Structures', 'Mathematics', 'Artificial Intelligence']
		},
		{
			name: 'Random Fact Generator',
			url: 'https://github.com/algorodev/random-fact-generator',
			description: 'Fact generator created with React and TypeScript, using "uselessfacts" API.',
			highlights: ['External API', 'Random', 'Generator']
		},
	]

	return (
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
}

export default Projects
