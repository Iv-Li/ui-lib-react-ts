import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { ERoutes } from '@/enums';
import { App, Layout } from '@/components';
import { AccordionPage, ButtonPage, ProductPage } from '@/pages';

export const router = createBrowserRouter(createRoutesFromElements(
  <Route path={ERoutes.Root} element={<Layout />}>
    <Route index element={<App />}/>
    <Route path={ERoutes.Accordion} element={<AccordionPage />}/>
    <Route path={ERoutes.Button} element={<ButtonPage />}/>
    <Route path={ERoutes.Select} element={<ProductPage />}/>
  </Route>

))

