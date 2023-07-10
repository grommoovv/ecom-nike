import { RootLayout } from 'shared/layouts'
import { Suspense } from 'react'
import { Routes, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { routeConfig } from 'shared/config'
import { Loader } from 'shared/ui'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<RootLayout />}>
            {Object.values(routeConfig).map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRouter
