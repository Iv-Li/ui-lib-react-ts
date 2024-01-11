import { Layout } from '@/components'
import { Icon, Button } from '@/ui-kit';
import './App.scss'
export const App = () => {
  return (
    <div>
      <Layout>
        <Button>Click me</Button>
        <Icon type="Pdf"/>
      </Layout>
    </div>
  )
}
