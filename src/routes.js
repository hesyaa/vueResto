import Beranda from './components/Beranda'
import About from './components/About'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Order from './components/Order'

export default [
    {path:'/', component:Beranda},
    {path:'/About', component:About},
    {path:'/Navbar', component:Navbar},
    {path:'/Form', component:Form},
    {path:'/Order', component:Order}
]