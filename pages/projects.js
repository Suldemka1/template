import Link from "next/link";
import { PageName } from "../components/PageName/PageName";
import ProjectCard from "../components/project";
import projects from '../styles/project.module.css'

export default function Projects() {
  return (
    <>
    <PageName title='Программы' />
        <div className={projects.projects_body}>

          <h3>Индивидуальный план социального и экономического развития</h3>
          <Link href='/documents/' >Паспорт программы</Link>


          <h3>Федеральные проекты</h3>
          <h5>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam</h5>
          <div className={projects.projects}>

            <ProjectCard
              title={'sometitle'}
              href={'/'}
              image='/project-icon.png'
              width={100}
              height={100} />
            <ProjectCard
              title={'sometitle'}
              href={'/'}
              image='/project-icon.png'
              width={100}
              height={100} />
            <ProjectCard
              title={'sometitle'}
              href={'/'}
              image='/project-icon.png'
              width={100}
              height={100} />

            <ProjectCard
              title={'sometitle'}
              href={'/'}
              image='/project-icon.png'
              width={100}
              height={100} />
          </div>

          <h3>Региональные проекты</h3>
          <h5>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam</h5>
          <div className={projects.projects}>

            <ProjectCard
              title={'sometitle'}
              href={'/'}
              image='/project-icon.png'
              width={100}
              height={100} />
            <ProjectCard
              title={'sometitle'}
              href={'/'}
              image='/project-icon.png'
              width={100}
              height={100} />
            <ProjectCard
              title={'sometitle'}
              href={'/'}
              image='/project-icon.png'
              width={100}
              height={100} />

            <ProjectCard
              title={'sometitle'}
              href={'/'}
              image='/project-icon.png'
              width={100}
              height={100} />
          </div>
        </div>
    </>
  )
}