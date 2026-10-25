import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Add new side projects here. `image` is optional (a URL or path under /static).
const projects = [
    {
        title: 'PaperLab',
        description: 'Generate customized paper for printing, including dotted and lined paper as well as weekly planner spreads.',
        url: 'https://paperlab.sarahperson.com',
        image: null,
    },
]

const ProjectsPage = () => {
    return (
        <Layout pageTitle="Projects">
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {projects.map((project) => (
                    <li key={project.url} style={{ marginBottom: '1.5rem' }}>
                        {project.image && (
                            <img
                                src={project.image}
                                alt={`${project.title} screenshot`}
                                style={{ maxWidth: '100%', height: 'auto' }}
                            />
                        )}
                        <h2>
                            <a href={project.url} style={{ color: '#2d7a67' }}>
                                {project.title}
                            </a>
                        </h2>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </Layout>
    )
}

export default ProjectsPage

export const Head = () => (
    <Seo title="Projects" description="Side projects by Sarah Person-Waibel, including PaperLab, a customizable printable paper generator." />
)
