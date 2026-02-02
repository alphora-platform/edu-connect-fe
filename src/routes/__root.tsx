import Footer from '@/components/layouts/Footer'
import Header from '@/components/layouts/Header'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className='bg-background-light dark:bg-background-dark text-[#111418] font-display antialiased overflow-x-hidden'>
      <Header />
      <Outlet />
      <Footer />

      <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </div>
  )
}

// outlet ở đâu sẽ render component của route con ở đó,
