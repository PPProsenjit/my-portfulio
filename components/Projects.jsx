import Image from 'next/image';
import React from 'react';
import bookShop from "../public/assets/projects/bookShop.jpg";
import foodFirst from '../public/assets/projects/foodFirst.jpg'
import easyLearn from '../public/assets/projects/easyLearn.jpg'
import quizTest from '../public/assets/projects/quizTest.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What Ive Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Book Shop'
            backgroundImg={bookShop}
            projectUrl='https://used-books-a00e1.web.app/'
          />
          <ProjectItem
            title='Food First'
            backgroundImg={foodFirst}
            projectUrl='https://food-first-c4b4f.web.app/'
          />
          <ProjectItem
            title='Easy To Learn'
            backgroundImg={easyLearn}
            projectUrl='https://easy--to-learn.web.app/'
          />
          <ProjectItem
            title='Quiz Test'
            backgroundImg={quizTest}
            projectUrl='https://loquacious-begonia-d5d867.netlify.app/home'
          />

        </div>
      </div>
    </div>
  );
};

export default Projects;
