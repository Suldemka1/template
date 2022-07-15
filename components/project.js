import Image from 'next/image'
import Link from 'next/link'
import project from '../styles/project.module.css'

export default function ProjectCard(params) {

  return (
    <div className={project.card}>
      <Link href={params.href}>
        <a>
          <Image alt='some' src={params.image} width={params.width} height={params.height} />
          <p>{params.title}</p>
        </a>
      </Link>
    </div>
  )
}