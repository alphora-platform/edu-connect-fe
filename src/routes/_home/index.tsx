import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/_home/')({
  component: App,
})

function App() {
  return (
    <div className='text-3xl min-h-screen'>
      <header className='bg-cyan-300 flex justify-between items-center'>
        <h1 className='p-4 font-bold text-white'>Welcome to EduConnect</h1>
        <Link to='/sign-in' className='p-4 bg-blue-400'>
          Login
        </Link>
      </header>
      <main className='bg-cyan-200'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sed error dicta adipisci
          fugit eveniet cupiditate ipsam corporis doloribus distinctio! Ad eaque consequatur
          laborum, vel expedita provident necessitatibus voluptatem quidem eveniet molestias ab quam
          dignissimos aut voluptatum illo soluta veniam nobis, dolorum totam aliquid? Perferendis
          blanditiis quae aliquam voluptatem corrupti quia praesentium voluptatum adipisci assumenda
          soluta facilis architecto labore accusantium id ea aliquid natus placeat, illo, dolores
          tempore ut officia! Neque cum praesentium et voluptatem sed excepturi perspiciatis quaerat
          dicta nisi unde quam alias voluptatum animi, accusantium magnam rerum earum at commodi
          veritatis voluptas aliquid numquam. Suscipit non nemo tenetur reprehenderit laborum nobis?
          Quidem molestiae id modi voluptate at pariatur inventore ipsa quibusdam est sint a optio
          cumque asperiores, esse vero aut debitis dignissimos tenetur odio tempora. Distinctio quae
          esse omnis mollitia repudiandae dolorem assumenda voluptate fugit. Officia officiis
          deserunt assumenda ipsum dignissimos consectetur rem, distinctio expedita aperiam
          doloribus maxime culpa nostrum animi facere inventore possimus explicabo perspiciatis
          laboriosam facilis. Mollitia debitis repellendus distinctio sapiente vitae sunt
          architecto, optio nulla. Aut, accusamus ipsam in tempora quam asperiores debitis est rerum
          consequatur suscipit, sint laudantium tenetur cum alias temporibus consequuntur atque quo
          voluptatum! Porro, vero tempora! Voluptatum illo nemo sapiente. Similique molestiae hic
          quae quam porro et sequi assumenda exercitationem. Cum veniam, voluptas dolore earum
          facere dignissimos aut placeat. Commodi, aspernatur ducimus? Voluptas quaerat corporis
          reprehenderit ex est maiores laboriosam voluptatibus, facere iure? Molestias obcaecati
          maiores minus vitae iure repudiandae natus, cum commodi hic, sequi animi temporibus
          provident facere veniam qui ad quo amet harum autem. Repellendus non modi pariatur eos
          libero, ea amet atque sit minima praesentium dicta omnis architecto illo mollitia iure
          assumenda alias, quibusdam quod. Sunt obcaecati, cupiditate dolorem exercitationem
          eligendi, excepturi iure repudiandae eaque architecto id doloribus deleniti. Accusantium
          hic explicabo quis non doloribus quam rem impedit!
        </p>
      </main>
    </div>
  )
}
