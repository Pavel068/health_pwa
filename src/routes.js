import Index from "@/components/pages/Index";
import Signin from "@/components/pages/Signin";
import Checkout from "@/components/pages/Checkout";
import Profile from "@/components/pages/Profile";
import History from "@/components/pages/History";
import CheckoutCompleted from "@/components/pages/CheckoutCompleted";

const routes = [
    {path: '/', name: 'Home', component: Index},
    {path: '/signin', name: 'Signin', component: Signin},
    {path: '/checkout', name: 'Checkout', component: Checkout},
    {path: '/checkout-completed', name: 'CheckoutCompleted', component: CheckoutCompleted},
    {path: '/profile', name: 'Profile', component: Profile},
    {path: '/history', name: 'History', component: History},
]

export default routes;