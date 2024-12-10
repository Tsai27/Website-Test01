"use client";
import React,{ useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
  {
    id: 1,
    title: 'Project 1',
    description: 'This is a project',
    image: '/images/project/643.jpg',
    tag: ["All", "Web"],
    gitUrl:"/",
    previewUrl:"/",
    
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'This is a project',
    image: '/images/project/644.jpg',
    tag: ["All", "Mobile"],
    gitUrl:"/",
    previewUrl:"/",
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'This is a project',
    image: '/images/project/645.jpg',
    tag: ["All", "Web"],
    gitUrl:"/",
    previewUrl:"/",
  },
]

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>       // 过滤项目
      project.tag.includes(tag)
  );

  return (
    <>
      <h2 className="text-center text-4xl mb-4 font-bold text-white mt-4">
        Our Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelectede={tag === "All"} 
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelectede={tag === "Web"} 
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Mobile"
            isSelectede={tag === "Mobile"} 
          />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
   </> 
  )
}

export default ProjectSection
