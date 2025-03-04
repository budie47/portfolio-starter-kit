import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        M.Budie
      </h1>
      <p className="mb-4">
        {`🚀 Cloud & VDI Enthusiast | Aspiring AI Engineer | Gunpla Builder
          Currently working at Deloitte Malaysia, I specialize in VDI Technology, AWS, and Azure Cloud solutions. Passionate about cloud computing, virtualization, and automation, I’m on a journey to become an AI Engineer, blending cloud and AI to drive intelligent solutions.
          Beyond tech, I’m a Gunpla enthusiast, building and customizing Gundam plastic models—stay tuned for reviews and build experiences! I also enjoy gaming in my free time, always exploring new worlds and challenges.
          🔹 Cloud | Virtualization | AI & ML | Gunpla & Gaming`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
